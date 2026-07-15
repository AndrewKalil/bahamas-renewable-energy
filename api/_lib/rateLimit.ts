import { RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS } from "./contact.constants";

// NOTE: In-memory, best-effort rate limiter.
// Resets on cold start; not shared across Vercel function instances.
// Effective against sudden bursts from a single IP hitting the same warm instance.
const ipTimestamps = new Map<string, number[]>();

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  // Prune stale entries and get current window timestamps for this IP
  const timestamps = (ipTimestamps.get(ip) ?? []).filter((t) => t > windowStart);

  if (timestamps.length >= RATE_LIMIT_MAX) {
    // Oldest timestamp in window determines when the slot frees up
    const oldestInWindow = timestamps[0];
    const retryAfterMs = oldestInWindow + RATE_LIMIT_WINDOW_MS - now;
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil(retryAfterMs / 1_000),
    };
  }

  timestamps.push(now);
  ipTimestamps.set(ip, timestamps);
  return { allowed: true, retryAfterSeconds: 0 };
}
