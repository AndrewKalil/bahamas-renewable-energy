import { Resend } from "resend";

import { MIN_SUBMIT_MS } from "./contact.constants.js";
import { checkRateLimit } from "./rateLimit.js";
import { validateContact } from "./validateContact.js";

export interface ContactRequestContext {
  /** Already-parsed request body (or undefined/null if parsing failed). */
  body: unknown;
  /** Caller IP address — used for rate limiting. */
  ip: string;
  /** Server-side environment variables. */
  env: {
    RESEND_API_KEY: string | undefined;
    RESEND_TO_EMAIL: string | undefined;
    RESEND_FROM_EMAIL: string | undefined;
  };
}

export interface ContactResponseResult {
  status: number;
  json: Record<string, unknown>;
  /** Present only on 429 responses. */
  retryAfterSeconds?: number;
}

export async function handleContactRequest(
  ctx: ContactRequestContext,
): Promise<ContactResponseResult> {
  const { body, ip, env } = ctx;

  // 1. Environment guard — fail fast if misconfigured rather than sending to ""
  if (!env.RESEND_API_KEY || !env.RESEND_TO_EMAIL) {
    console.error("[contact] Missing RESEND_API_KEY or RESEND_TO_EMAIL env vars");
    return { status: 500, json: { error: "Server not configured" } };
  }

  // 2. Rate limit (in-memory, best-effort — see rateLimit.ts for caveats)
  const rateResult = checkRateLimit(ip);
  if (!rateResult.allowed) {
    return {
      status: 429,
      json: { error: "Too many requests — please wait before submitting again" },
      retryAfterSeconds: rateResult.retryAfterSeconds,
    };
  }

  // 3. Timing check — forms filled in < 2 s are almost certainly bots
  let elapsedMs = Infinity;
  if (typeof body === "object" && body !== null && !Array.isArray(body)) {
    const b = body as Record<string, unknown>;
    if (typeof b["elapsedMs"] === "number") {
      elapsedMs = b["elapsedMs"];
    }
  }
  if (elapsedMs < MIN_SUBMIT_MS) {
    // Silent success — never tip off bots that a check fired
    console.warn("[contact] discarded: sub-threshold timing", { elapsedMs });
    return { status: 200, json: { success: true } };
  }

  // 4. Validate fields (includes honeypot check)
  const validation = validateContact(body);

  if ("bot" in validation) {
    // Honeypot triggered — silent success (never tip off bots)
    console.warn("[contact] discarded: honeypot filled");
    return { status: 200, json: { success: true } };
  }

  if ("error" in validation) {
    return { status: 400, json: { error: validation.error } };
  }

  const { data } = validation;

  // 5. Send email via Resend
  const resend = new Resend(env.RESEND_API_KEY);

  let sendError: unknown;
  try {
    const { error } = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: env.RESEND_TO_EMAIL,
      replyTo: data.email,
      subject: `Quote request from ${data.fullName}`,
      text: [
        `Name:    ${data.fullName}`,
        `Phone:   ${data.phone}`,
        `Email:   ${data.email}`,
        `Island:  ${data.island}`,
        `Package: ${data.package || "(not selected)"}`,
        ``,
        `Message:`,
        data.message || "(no message)",
      ].join("\n"),
    });
    sendError = error ?? null;
  } catch (err) {
    sendError = err;
  }

  if (sendError) {
    console.error("[contact] Resend error:", JSON.stringify(sendError));
    return { status: 500, json: { error: "Failed to send email" } };
  }

  return { status: 200, json: { success: true } };
}
