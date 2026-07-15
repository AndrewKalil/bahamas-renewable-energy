// Rate limiting — in-memory best-effort.
// NOTE: Vercel serverless functions are ephemeral and horizontally scaled.
// Each instance maintains its own in-memory state — limits reset on cold start
// and are not shared across instances. For durable limits, use Upstash + @upstash/ratelimit.
export const RATE_LIMIT_MAX = 3; // requests allowed per IP per window
export const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute sliding window

// Bot detection
export const MIN_SUBMIT_MS = 2_000; // minimum ms since form render to be a human

// Per-field maximum lengths — kept in sync with the client Yup schema
export const FULLNAME_MAX = 100;
export const PHONE_MAX = 30;
export const EMAIL_MAX = 200;
export const ISLAND_MAX = 100;
export const PACKAGE_MAX = 200;
export const MESSAGE_MAX = 5_000;

// Simplified RFC 5322 — rejects obvious garbage, not a full parser
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
