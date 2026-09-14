export const JAVA_B = `// B. EvictionPolicy + LRUCache
import java.util.*;
import java.util.concurrent.locks.ReentrantReadWriteLock;

interface EvictionPolicy<K, V> {
    Node<K, V> selectVictim(DoublyLinkedList<K, V> list);
}

class LRUEvictionPolicy<K, V> implements EvictionPolicy<K, V> {
    public Node<K, V> selectVictim(DoublyLinkedList<K, V> list) {
        return list.getTail(); // LRU = tail
    }
}

class LRUCache<K, V> {
    private final int capacity;
    private final Map<K, Node<K, V>> map;
    private final DoublyLinkedList<K, V> list;
    private final EvictionPolicy<K, V> policy;
    private final ReentrantReadWriteLock lock = new ReentrantReadWriteLock();

    private long hits = 0, misses = 0, evictions = 0;

    public LRUCache(int capacity, EvictionPolicy<K, V> policy) {
        if (capacity <= 0) throw new IllegalArgumentException("Capacity must be > 0");
        this.capacity = capacity;
        this.map = new HashMap<>(capacity);
        this.list = new DoublyLinkedList<>();
        this.policy = policy;
    }

    public Optional<V> get(K key) {
        lock.writeLock().lock();
        try {
            Node<K, V> node = map.get(key);
            if (node == null) { misses++; return Optional.empty(); }
            list.moveToFront(node);
            hits++;
            return Optional.of(node.value);
        } finally {
            lock.writeLock().unlock();
        }
    }

    public void put(K key, V value) {
        lock.writeLock().lock();
        try {
            Node<K, V> existing = map.get(key);
            if (existing != null) {
                existing.value = value;
                list.moveToFront(existing);
                return;
            }
            if (map.size() >= capacity) {
                Node<K, V> victim = policy.selectVictim(list);
                if (victim != null) {
                    list.removeNode(victim);
                    map.remove(victim.key);
                    evictions++;
                }
            }
            Node<K, V> node = new Node<>(key, value);
            list.addFirst(node);
            map.put(key, node);
        } finally {
            lock.writeLock().unlock();
        }
    }

    public int size() { return map.size(); }
    public long getHits() { return hits; }
    public long getMisses() { return misses; }
    public long getEvictions() { return evictions; }

    public void clear() {
        lock.writeLock().lock();
        try {
            map.clear();
            while (list.size() > 0) list.removeLast();
        } finally {
            lock.writeLock().unlock();
        }
    }

    public List<K> keysInOrder() {
        lock.readLock().lock();
        try {
            List<K> keys = new ArrayList<>();
            Node<K, V> cur = list.getHead();
            while (cur != null) { keys.add(cur.key); cur = cur.next; }
            return keys;
        } finally {
            lock.readLock().unlock();
        }
    }
}`;