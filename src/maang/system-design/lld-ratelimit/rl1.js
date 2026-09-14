export const JAVA_A = `// A. Config + RateLimiter interface + Token Bucket
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.ReentrantLock;

class RateLimiterConfig {
    final int rate;
    final int burst;
    final long windowMs;
    RateLimiterConfig(int rate, int burst, long windowMs) {
        this.rate = rate; this.burst = burst; this.windowMs = windowMs;
    }
}

interface RateLimiter {
    boolean tryAcquire(String clientId);
    int getRemaining(String clientId);
}

class TokenBucketLimiter implements RateLimiter {
    private final RateLimiterConfig config;
    private final Map<String, ClientBucket> buckets = new ConcurrentHashMap<>();

    TokenBucketLimiter(RateLimiterConfig c) { config = c; }

    static class ClientBucket {
        double tokens;
        long lastRefillNanos;
        final ReentrantLock lock = new ReentrantLock();
        ClientBucket(double t, long now) { tokens = t; lastRefillNanos = now; }
    }

    public boolean tryAcquire(String clientId) {
        ClientBucket bucket = buckets.computeIfAbsent(clientId,
                k -> new ClientBucket(config.burst, System.nanoTime()));
        bucket.lock.lock();
        try {
            refill(bucket);
            if (bucket.tokens >= 1.0) {
                bucket.tokens -= 1.0;
                return true;
            }
            return false;
        } finally {
            bucket.lock.unlock();
        }
    }

    private void refill(ClientBucket b) {
        long now = System.nanoTime();
        double elapsedSec = (now - b.lastRefillNanos) / 1_000_000_000.0;
        double tokensToAdd = elapsedSec * config.rate;
        if (tokensToAdd > 0) {
            b.tokens = Math.min(config.burst, b.tokens + tokensToAdd);
            b.lastRefillNanos = now;
        }
    }

    public int getRemaining(String clientId) {
        ClientBucket b = buckets.get(clientId);
        if (b == null) return config.burst;
        b.lock.lock();
        try { refill(b); return (int) b.tokens; }
        finally { b.lock.unlock(); }
    }
}`;