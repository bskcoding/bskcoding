export const JAVA_A = `// A. Node + DoublyLinkedList
class Node<K, V> {
    final K key;
    V value;
    Node<K, V> prev;
    Node<K, V> next;
    Node(K k, V v) { key = k; value = v; }
}

class DoublyLinkedList<K, V> {
    private Node<K, V> head; // MRU
    private Node<K, V> tail; // LRU
    private int size = 0;

    public void addFirst(Node<K, V> node) {
        node.prev = null;
        node.next = head;
        if (head != null) head.prev = node;
        head = node;
        if (tail == null) tail = node;
        size++;
    }

    public void removeNode(Node<K, V> node) {
        if (node.prev != null) node.prev.next = node.next;
        else head = node.next;

        if (node.next != null) node.next.prev = node.prev;
        else tail = node.prev;

        node.prev = null;
        node.next = null;
        size--;
    }

    public void moveToFront(Node<K, V> node) {
        if (node == head) return;
        removeNode(node);
        addFirst(node);
    }

    public Node<K, V> removeLast() {
        if (tail == null) return null;
        Node<K, V> last = tail;
        removeNode(last);
        return last;
    }

    public int size() { return size; }
    public Node<K, V> getHead() { return head; }
    public Node<K, V> getTail() { return tail; }
}`;