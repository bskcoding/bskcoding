export const JAVA_C = `// C. Factory + Registry + Main
enum Algorithm { TOKEN_BUCKET, LEAKY_BUCKET, SLIDING_WINDOW }

class RateLimiterFactory {
    public static RateLimiter create(Algorithm algo, RateLimiterConfig config) {
        return switch (algo) {
            case TOKEN_BUCKET -> new TokenBucketLimiter(config);
            case LEAKY_BUCKET -> new LeakyBucketLimiter(config);
            case SLIDING_WINDOW -> new SlidingWindowLimiter(config);
        };
    }
}

class RateLimiterRegistry {
    private final Map<String, RateLimiter> limiters = new ConcurrentHashMap<>();
    private final Algorithm defaultAlgo;
    private final RateLimiterConfig defaultConfig;

    RateLimiterRegistry(Algorithm algo, RateLimiterConfig config) {
        defaultAlgo = algo; defaultConfig = config;
    }

    public RateLimiter getOrCreate(String clientId) {
        return limiters.computeIfAbsent(clientId,
                k -> RateLimiterFactory.create(defaultAlgo, defaultConfig));
    }

    public boolean tryAcquire(String clientId) {
        return getOrCreate(clientId).tryAcquire(clientId);
    }

    public int getRemaining(String clientId) {
        return getOrCreate(clientId).getRemaining(clientId);
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        RateLimiterConfig config = new RateLimiterConfig(5, 5, 1000);
        RateLimiterRegistry registry = new RateLimiterRegistry(
                Algorithm.TOKEN_BUCKET, config);

        String client = "user-1";
        System.out.println("--- Token Bucket: burst of 7 ---");
        for (int i = 1; i <= 7; i++) {
            boolean allowed = registry.tryAcquire(client);
            System.out.println("Req " + i + ": " + (allowed ? "ALLOWED" : "REJECTED")
                    + " (remaining: " + registry.getRemaining(client) + ")");
        }

        System.out.println("\\n--- After 1 second refill ---");
        Thread.sleep(1000);
        for (int i = 1; i <= 3; i++) {
            boolean allowed = registry.tryAcquire(client);
            System.out.println("Req " + i + ": " + (allowed ? "ALLOWED" : "REJECTED")
                    + " (remaining: " + registry.getRemaining(client) + ")");
        }

        System.out.println("\\n--- Sliding Window demo ---");
        RateLimiterRegistry swRegistry = new RateLimiterRegistry(
                Algorithm.SLIDING_WINDOW,
                new RateLimiterConfig(3, 3, 1000));
        for (int i = 1; i <= 5; i++) {
            boolean allowed = swRegistry.tryAcquire("user-2");
            System.out.println("Req " + i + ": " + (allowed ? "ALLOWED" : "REJECTED"));
        }
    }
}`;