import { siteUrl } from '@/lib/site';

type RateLimitOptions = {
  limit?: number;
  windowMs?: number;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();
const MAX_BUCKETS = 2_500;

function requestIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  return forwardedFor?.split(',')[0]?.trim() || request.headers.get('x-real-ip');
}

export function hasAllowedOrigin(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin) return true;

  try {
    const productionUrl = new URL(siteUrl);
    const requestOrigin = new URL(origin);
    const isProductionOrigin =
      requestOrigin.origin === productionUrl.origin ||
      requestOrigin.origin ===
        `${productionUrl.protocol}//www.${productionUrl.hostname}`;
    const isLocalOrigin =
      requestOrigin.hostname === 'localhost' ||
      requestOrigin.hostname === '127.0.0.1';

    return isProductionOrigin || isLocalOrigin;
  } catch {
    return false;
  }
}

export function checkRateLimit(
  request: Request,
  key: string,
  { limit = 5, windowMs = 10 * 60 * 1_000 }: RateLimitOptions = {},
) {
  const ip = requestIp(request);

  // Hostinger or another reverse proxy should remain the outer rate-limit layer.
  if (!ip) return { allowed: true, retryAfterSeconds: 0 };

  const now = Date.now();
  const bucketKey = `${key}:${ip}`;
  const current = rateLimitStore.get(bucketKey);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(bucketKey, { count: 1, resetAt: now + windowMs });
    cleanupExpiredBuckets(now);
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1_000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

function cleanupExpiredBuckets(now: number) {
  if (rateLimitStore.size <= MAX_BUCKETS) return;

  for (const [key, entry] of rateLimitStore) {
    if (entry.resetAt <= now) rateLimitStore.delete(key);
    if (rateLimitStore.size <= MAX_BUCKETS) break;
  }
}
