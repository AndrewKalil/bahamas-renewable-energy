import type { VercelRequest, VercelResponse } from "@vercel/node";

import { handleContactRequest } from "./_lib/handleContactRequest.js";

// eslint-disable-next-line import/no-default-export
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Derive caller IP — Vercel sets x-forwarded-for
  const forwarded = req.headers["x-forwarded-for"];
  const ip =
    (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(",")[0]?.trim() ??
    req.socket?.remoteAddress ??
    "unknown";

  try {
    const result = await handleContactRequest({
      body: req.body as unknown,
      ip,
      env: {
        RESEND_API_KEY: process.env.RESEND_API_KEY,
        RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
        RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
      },
    });

    if (result.retryAfterSeconds !== undefined) {
      res.setHeader("Retry-After", String(result.retryAfterSeconds));
    }

    return res.status(result.status).json(result.json);
  } catch (err) {
    console.error("[contact] Unhandled error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
