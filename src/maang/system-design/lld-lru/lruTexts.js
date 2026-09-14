export const SQL = `-- 2 tables — for persistence and warm restart

CREATE TABLE cache_entries (
  cache_name   VARCHAR(50) NOT NULL,
  cache_key    VARCHAR(255) NOT NULL,
  cache_value  TEXT NOT NULL,
  last_access  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (cache_name, cache_key)
);
CREATE INDEX idx_cache_lru ON cache_entries(cache_name, last_access);

CREATE TABLE cache_metadata (
  cache_name   VARCHAR(50) PRIMARY KEY,
  capacity     INT NOT NULL,
  policy       ENUM('LRU','LFU','FIFO') DEFAULT 'LRU',
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

export const UML = `----------------------------------------
  LRUCache<K, V>
  - capacity: int
  - map: Map<K, Node<K,V>>
  - list: DoublyLinkedList<K,V>
  - policy: EvictionPolicy<K,V>
  + get(key): Optional<V>
  + put(key, value): void
  + size(): int
  + clear(): void
----------------------------------------
      |owns (map + list die with cache)
      v
----------------------------------------
  DoublyLinkedList       Node<K,V>
  - head: Node (MRU)     - key: K
  - tail: Node (LRU)     - value: V
  + addFirst(node)       - prev: Node
  + removeNode(node)     - next: Node
  + moveToFront(node)
  + removeLast()
----------------------------------------

LRUCache --uses--> EvictionPolicy<K,V> (interface)
                    +-- LRUEvictionPolicy
LRUCache --has--> Map<K, Node<K,V>> (HashMap O(1))`;