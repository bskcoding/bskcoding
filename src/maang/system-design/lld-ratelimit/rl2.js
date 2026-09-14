export const JAVA_B = `// B. Leaky Bucket + Sliding Window
class LeakyBucketLimiter implements RateLimiter {
    private final RateLimiterConfig config;
    private final Map<String, Deque<Long>> queues = new ConcurrentHashMap<>();

    LeakyBucketLimiter(RateLimiterConfig c) { config = c; }

    public synchronized boolean tryAcquire(String clientId) {
        Deque<Long> q = queues.computeIfAbsent(clientId, k -> new ArrayDeque<>());
        long now = System.nanoTime();
        long windowNanos = 1_000_000_000L;
        while (!q.isEmpty() && now - q.peekFirst() > windowNanos) q.pollFirst();
        if (q.size() < config.rate) {
            q.addLast(now);
            return true;
        }
        return false;
    }

    public int getRemaining(String clientId) {
        Deque<Long> q = queues.get(clientId);
        if (q == null) return config.rate;
        long now = System.nanoTime();
        long windowNanos = 1_000_000_000L;
        synchronized (this) {
            while (!q.isEmpty() && now - q.peekFirst() > windowNanos) q.pollFirst();
            return Math.max(0, config.rate - q.size());
        }
    }
}

class SlidingWindowLimiter implements RateLimiter {
    private final RateLimiterConfig config;
    private final Map<String, Deque<Long>> windows = new ConcurrentHashMap<>();

    SlidingWindowLimiter(RateLimiterConfig c) { config = c; }

    public synchronized boolean tryAcquire(String clientId) {
        Deque<Long> window = windows.computeIfAbsent(clientId, k -> new ArrayDeque<>());
        long now = System.nanoTime();
        long windowNanos = config.windowMs * 1_000_000L;
        while (!window.isEmpty() && now - window.peekFirst() > windowNanos) window.pollFirst();
        if (window.size() < config.rate) {
            window.addLast(now);
            return true;
        }
        return false;
    }

    public int getRemaining(String clientId) {
        Deque<Long> w = windows.get(clientId);
        if (w == null) return config.rate;
        long now = System.nanoTime();
        long windowNanos = config.windowMs * 1_000_000L;
        synchronized (this) {
            while (!w.isEmpty() && now - w.peekFirst() > windowNanos) w.pollFirst();
            return Math.max(0, config.rate - w.size());
        }
    }
}`;