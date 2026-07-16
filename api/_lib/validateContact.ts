import {
  EMAIL_MAX,
  EMAIL_REGEX,
  FULLNAME_MAX,
  ISLAND_MAX,
  MESSAGE_MAX,
  PACKAGE_MAX,
  PHONE_MAX,
} from "./contact.constants.js";

export interface ValidContactData {
  fullName: string;
  phone: string;
  email: string;
  island: string;
  package: string;
  message: string;
}

type ValidationResult =
  | { ok: true; data: ValidContactData }
  | { ok: false; error: string }
  | { bot: true };

/** Strip carriage returns and newlines from single-line fields to prevent header injection. */
function stripLineBreaks(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}

/**
 * Coerce a field from an unknown record to a trimmed string.
 * Returns "" for missing/null, null for non-string types.
 */
function fieldString(body: Record<string, unknown>, key: string): string | null {
  const value = body[key];
  if (value === undefined || value === null) return "";
  if (typeof value !== "string") return null;
  return value.trim();
}

/**
 * Validate a raw (unknown) request body for the contact form.
 *
 * Returns a discriminated union:
 *   { ok: true, data }   — valid; use data for the email send
 *   { ok: false, error } — invalid; respond 400
 *   { bot: true }        — honeypot triggered; respond 200 (silent discard)
 */
export function validateContact(rawBody: unknown): ValidationResult {
  // Body must be a plain object
  if (typeof rawBody !== "object" || rawBody === null || Array.isArray(rawBody)) {
    return { ok: false, error: "Invalid request body" };
  }

  const body = rawBody as Record<string, unknown>;

  // Honeypot — the hidden "company" field should always be empty for real users
  const { company } = body;
  if (typeof company === "string" && company.trim().length > 0) {
    return { bot: true };
  }

  // Coerce fields
  const fullName = fieldString(body, "fullName");
  const phone = fieldString(body, "phone");
  const email = fieldString(body, "email");
  const island = fieldString(body, "island");
  const pkg = fieldString(body, "package") ?? "";
  const message = fieldString(body, "message") ?? "";

  // Non-string type guard
  if (fullName === null || phone === null || email === null || island === null) {
    return { ok: false, error: "Invalid field types" };
  }

  // Required field presence
  if (!fullName) return { ok: false, error: "Full name is required" };
  if (!phone) return { ok: false, error: "Phone number is required" };
  if (!email) return { ok: false, error: "Email is required" };
  if (!island) return { ok: false, error: "Island / area is required" };

  // Email format
  if (!EMAIL_REGEX.test(email)) return { ok: false, error: "Invalid email address" };

  // Length limits — reject (do not silently truncate)
  if (fullName.length > FULLNAME_MAX)
    return { ok: false, error: `Full name must be ${String(FULLNAME_MAX)} characters or fewer` };
  if (phone.length > PHONE_MAX)
    return { ok: false, error: `Phone must be ${String(PHONE_MAX)} characters or fewer` };
  if (email.length > EMAIL_MAX)
    return { ok: false, error: `Email must be ${String(EMAIL_MAX)} characters or fewer` };
  if (island.length > ISLAND_MAX)
    return { ok: false, error: `Island / area must be ${String(ISLAND_MAX)} characters or fewer` };
  if (pkg.length > PACKAGE_MAX)
    return { ok: false, error: `Package must be ${String(PACKAGE_MAX)} characters or fewer` };
  if (message.length > MESSAGE_MAX)
    return { ok: false, error: `Message must be ${String(MESSAGE_MAX)} characters or fewer` };

  return {
    ok: true,
    data: {
      // Strip CR/LF from single-line fields — prevents email header injection
      fullName: stripLineBreaks(fullName),
      phone: stripLineBreaks(phone),
      email: stripLineBreaks(email),
      island: stripLineBreaks(island),
      package: stripLineBreaks(pkg),
      // message is a textarea — preserve intentional line breaks
      message,
    },
  };
}
