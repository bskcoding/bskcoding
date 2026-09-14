export const JAVA_C = `// C. Main — demo
public class Main {
    public static void main(String[] args) {
        LRUCache<Integer, String> cache = new LRUCache<>(3, new LRUEvictionPolicy<>());

        cache.put(1, "one");
        cache.put(2, "two");
        cache.put(3, "three");
        System.out.println("Order: " + cache.keysInOrder()); // [3, 2, 1]

        cache.get(1); // 1 becomes MRU
        System.out.println("After get(1): " + cache.keysInOrder()); // [1, 3, 2]

        cache.put(4, "four"); // evicts 2 (LRU)
        System.out.println("After put(4): " + cache.keysInOrder()); // [4, 1, 3]
        System.out.println("get(2): " + cache.get(2)); // empty — evicted
        System.out.println("get(3): " + cache.get(3)); // three

        System.out.println("Hits: " + cache.getHits()
                + ", Misses: " + cache.getMisses()
                + ", Evictions: " + cache.getEvictions());
    }
}`;