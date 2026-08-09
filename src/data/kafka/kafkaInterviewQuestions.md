## Kafka Fundamentals

### What is Apache Kafka?

Apache Kafka is a distributed streaming platform used for building real-time data pipelines and event-driven applications. It combines the functions of a message queue, publish-subscribe system, and log storage into one platform.

**Key capabilities:**

- Publish and subscribe to streams of records
- Store streams of records durably and fault-tolerantly
- Process streams of records as they occur

### Why do we use Kafka?

- **High throughput**: Handles millions of messages per second
- **Scalability**: Horizontally scalable by adding brokers
- **Durability**: Messages persist on disk with replication
- **Fault tolerance**: Automatic leader election and replica synchronization
- **Decoupling**: Producers and consumers don't know about each other
- **Real-time processing**: Low latency for streaming applications

### What are the main components of Kafka?

- **Broker**: Kafka server that stores and serves messages
- **Cluster**: Group of brokers working together
- **Topic**: Logical category for messages
- **Partition**: Ordered, immutable sequence of messages within a topic
- **Producer**: Application that publishes messages to topics
- **Consumer**: Application that subscribes and reads messages
- **Consumer Group**: Group of consumers working together to consume from topics
- **ZooKeeper/KRaft**: Manages cluster metadata and coordination

### What is a Kafka Broker?

A Kafka broker is a server node in the Kafka cluster that:

- Stores and manages partitions of topics
- Handles producer write requests
- Handles consumer read requests
- Maintains replication between brokers

### What is a Kafka Cluster?

A cluster is a group of one or more Kafka brokers working together. It provides:

- **Scalability**: Distribute load across brokers
- **Fault tolerance**: Data replication across brokers
- **High availability**: Automatic failover

**Start Kafka with Docker:**

```bash
# docker-compose.yml
version: '3.8'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
  kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

# Start the cluster
docker-compose up -d
```

### What is a Kafka Topic?

A topic is a logical category or feed name to which messages are published. Topics are:

- **Immutable**: Once written, messages cannot be changed
- **Ordered**: Within a partition, messages are strictly ordered
- **Retained**: Messages stay for a configurable retention period

**Create a topic:**

```bash
kafka-topics.sh --create \
  --bootstrap-server localhost:9092 \
  --topic orders \
  --partitions 3 \
  --replication-factor 1
```

### What is a Kafka Partition?

Partitions are subdivisions of a topic. Each partition:

- Is an ordered, immutable sequence of messages
- Is a unit of parallelism (consumers can read from different partitions in parallel)
- Is identified by a partition number (0, 1, 2, ...)

**List partitions in a topic:**

```bash
kafka-topics.sh --describe \
  --bootstrap-server localhost:9092 \
  --topic orders
```

### What is a Kafka Offset?

An offset is a unique, sequential ID assigned to each message within a partition. It serves as:

- **Position marker**: Indicates a message's position in the partition
- **Consumer progress tracker**: Consumers commit offsets to track what they've read

### What is a Kafka Producer?

A producer is an application that publishes messages to Kafka topics.

**Java Producer Example:**

```java
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.ProducerConfig;
import java.util.Properties;

public class SimpleProducer {
    public static void main(String[] args) {
        Properties props = new Properties();
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,
            "org.apache.kafka.common.serialization.StringSerializer");
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,
            "org.apache.kafka.common.serialization.StringSerializer");

        try (KafkaProducer<String, String> producer = new KafkaProducer<>(props)) {
            ProducerRecord<String, String> record =
                new ProducerRecord<>("orders", "order-123", "{\"product\":\"laptop\",\"qty\":1}");
            producer.send(record);
            System.out.println("Message sent successfully");
        }
    }
}
```

### What is a Kafka Consumer?

A consumer is an application that reads messages from Kafka topics.

**Java Consumer Example:**

```java
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import java.time.Duration;
import java.util.Properties;
import java.util.List;

public class SimpleConsumer {
    public static void main(String[] args) {
        Properties props = new Properties();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        props.put(ConsumerConfig.GROUP_ID_CONFIG, "order-consumer-group");
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG,
            "org.apache.kafka.common.serialization.StringDeserializer");
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,
            "org.apache.kafka.common.serialization.StringDeserializer");
        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");

        try (KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props)) {
            consumer.subscribe(List.of("orders"));

            while (true) {
                ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
                for (ConsumerRecord<String, String> record : records) {
                    System.out.printf("Offset: %d, Key: %s, Value: %s%n",
                        record.offset(), record.key(), record.value());
                }
            }
        }
    }
}
```

### What is a Consumer Group?

A consumer group is a set of consumers that share a group ID. Kafka ensures:

- Each partition is assigned to exactly one consumer in the group
- Messages are load-balanced across consumers in the group
- If a consumer fails, partitions are reassigned to other consumers in the group

**Create consumers with same group ID:**

```java
// Consumer 1 - same group ID
props.put(ConsumerConfig.GROUP_ID_CONFIG, "order-group");
// Consumer 2 - same group ID
props.put(ConsumerConfig.GROUP_ID_CONFIG, "order-group");
```

### Why does Kafka use partitions?

- **Parallelism**: Multiple consumers read from different partitions
- **Scalability**: Distribute data across multiple brokers
- **Throughput**: Load balancing across consumers
- **Ordering**: Ordering guarantee within a partition

### How does Kafka achieve high throughput?

- **Batching**: Producers batch messages before sending
- **Compression**: Messages can be compressed (gzip, snappy, lz4, zstd)
- **Zero-copy**: Uses OS page cache for efficient data transfer
- **Sequential I/O**: Append-only writes to disk
- **Partitioning**: Parallel processing across partitions
- **Consumer groups**: Parallel consumption across consumers

### How does Kafka provide fault tolerance?

- **Replication**: Each partition has multiple replicas across brokers
- **Leader election**: Automatically elects new leader if current leader fails
- **ISR mechanism**: Only in-sync replicas participate in leader election
- **Durable storage**: Messages are persisted to disk
- **Consumer offset storage**: Offsets are stored in the `__consumer_offsets` topic

### Kafka vs RabbitMQ — what is the difference?

| Feature            | Kafka                              | RabbitMQ                            |
| ------------------ | ---------------------------------- | ----------------------------------- |
| **Pattern**        | Distributed log/streaming platform | Traditional message queue           |
| **Ordering**       | Guaranteed within partition        | Not guaranteed across messages      |
| **Storage**        | Persistent, retains messages       | Typically deleted after consumption |
| **Throughput**     | Very high (millions/sec)           | Lower (tens thousands/sec)          |
| **Latency**        | Higher (optimized for throughput)  | Lower (optimized for low latency)   |
| **Replay**         | Supports replay of messages        | Not designed for replay             |
| **Consumer model** | Pull-based                         | Push-based                          |
| **Use cases**      | Event streaming, data pipelines    | Task distribution, RPC              |

---

## Topics, Partitions & Ordering

### What is the difference between a Topic, Partition and Replica?

- **Topic**: Logical category name (e.g., "orders")
- **Partition**: Physical subdivision of a topic for parallelism
- **Replica**: Copy of a partition stored on another broker for fault tolerance

### How does Kafka distribute messages among partitions?

Messages are distributed based on:

1. **Partition key** (if specified): Hashed to determine partition
2. **Round-robin** (if no key): Distributed evenly across partitions
3. **Custom partitioner**: User-defined logic

### How does Kafka decide which partition a message goes to?

```java
// Internal partition assignment logic (simplified)
public int partition(String key, int numPartitions) {
    if (key == null) {
        // Round-robin if no key
        return counter++ % numPartitions;
    }
    // Hash-based assignment
    return Math.abs(key.hashCode()) % numPartitions;
}
```

### What is a partition key?

A partition key is a value included in a message that determines which partition the message goes to. All messages with the same key go to the same partition, ensuring ordering for that key .

### What happens when you send a message with a key?

Messages with the same key are sent to the same partition, preserving order for that key.

**Example:**

```java
// All messages with key "customer-123" go to same partition
ProducerRecord<String, String> record =
    new ProducerRecord<>("orders", "customer-123", "{\"product\":\"laptop\"}");
```

### What happens when you send a message without a key?

Messages without a key are distributed using round-robin across partitions, providing load balancing but no ordering guarantee.

### How do you ensure messages for the same customer go to the same partition?

Always use the customer ID as the partition key:

```java
String customerId = record.getCustomerId();
ProducerRecord<String, String> record =
    new ProducerRecord<>("orders", customerId, jsonValue);
```

### Does Kafka guarantee message ordering?

**Yes**, but only **within a partition**. Messages in the same partition are consumed in the order they were produced. There is no global ordering across partitions .

### Does Kafka guarantee ordering across partitions?

**No**. Messages across different partitions have no ordering guarantee. To maintain ordering, ensure related messages go to the same partition.

### How can you maintain ordering for a particular customer?

Use the customer ID as the partition key:

```java
// All customer-123 orders go to same partition, preserving order
ProducerRecord<String, String> record =
    new ProducerRecord<>("orders", "customer-123", orderJson);
```

### What happens when you increase the number of partitions?

- Existing data stays on existing partitions
- New messages use the new partition count for assignment
- Consumers may need to rebalance
- Ordering for keys may change (keys that went to partition 2 may now go to partition 3)

### Can you decrease the number of partitions?

**No**, Kafka does not support decreasing partitions because:

- Existing messages are already assigned to existing partitions
- Kafka cannot reassign existing messages to fewer partitions
- **Workaround**: Create a new topic with fewer partitions and migrate data

### What is a hot partition?

A hot partition is a partition that receives significantly more traffic than other partitions, causing:

- Uneven load distribution
- Slow processing on that partition
- Potential consumer lag

### What is partition skew?

Partition skew is an imbalance in data distribution across partitions, where some partitions have:

- More messages than others (data skew)
- Larger message sizes (size skew)
- Higher write/read frequency (throughput skew)

### How would you solve uneven partition distribution?

1. **Use proper partitioning keys**: Ensure keys are evenly distributed
2. **Use a custom partitioner**: Implement custom logic for balanced distribution
3. **Increase partitions**: More partitions allow finer-grained distribution
4. **Use salting**: Add random suffix to keys for better distribution

```java
// Custom partitioner to avoid hot partitions
public class BalancedPartitioner implements Partitioner {
    @Override
    public int partition(String topic, Object key, byte[] keyBytes,
                         Object value, byte[] valueBytes, Cluster cluster) {
        List<PartitionInfo> partitions = cluster.partitionsForTopic(topic);
        int numPartitions = partitions.size();

        if (key == null) {
            // Sticky partitioning for better batching
            return stickyPartition;
        }

        // Use consistent hashing with salting
        String salt = getSaltForKey(key.toString());
        return Math.abs((key.toString() + salt).hashCode()) % numPartitions;
    }
}
```

---

## Producer

### How does a Kafka Producer work internally?

```
Producer → ProducerRecord → Serializer → Partitioner → Buffer → Sender → Kafka Broker
```

**Internal flow:**

1. Producer receives `ProducerRecord` with topic, key, value
2. **Serializer**: Converts key/value to bytes
3. **Partitioner**: Determines which partition to send to
4. **Buffer**: Messages are batched in the producer buffer
5. **Sender**: Sends batches to Kafka broker asynchronously
6. **Acknowledgment**: Broker responds with success or error

### What happens when a producer sends a message?

```java
// The send() is asynchronous and returns a Future
Future<RecordMetadata> future = producer.send(record);

// Or use callback for async handling
producer.send(record, (metadata, exception) -> {
    if (exception == null) {
        System.out.println("Offset: " + metadata.offset());
    } else {
        exception.printStackTrace();
    }
});
```

### What is acks in Kafka?

`acks` is a producer configuration that controls durability guarantees:

- **acks=0**: No acknowledgment, highest throughput, risk of data loss
- **acks=1**: Leader acknowledgment only, moderate durability
- **acks=all** or **acks=-1**: All in-sync replicas acknowledgment, strongest durability

### Explain acks=0, acks=1, and acks=all

| acks Value   | Behavior                           | Risk                                         | Use Case                       |
| ------------ | ---------------------------------- | -------------------------------------------- | ------------------------------ |
| **acks=0**   | Fire and forget, no acknowledgment | Data loss if broker fails                    | Metrics, logging, non-critical |
| **acks=1**   | Leader acknowledges                | Data loss if leader fails before replication | General purpose                |
| **acks=all** | All ISR replicas acknowledge       | Highest durability, lower throughput         | Financial, critical data       |

```java
// Configuration examples
Properties props = new Properties();

// acks=0 - highest throughput, no durability
props.put(ProducerConfig.ACKS_CONFIG, "0");

// acks=1 - moderate durability (default for Kafka < 3.0)
props.put(ProducerConfig.ACKS_CONFIG, "1");

// acks=all - strongest durability (default for Kafka >= 3.0)
props.put(ProducerConfig.ACKS_CONFIG, "all");
```

### Which acks configuration provides the strongest durability?

**acks=all** (or `acks=-1`) provides the strongest durability because:

- Message is written to all in-sync replicas
- If leader fails, one of the replicas has the data
- No data loss as long as at least `min.insync.replicas` are available

### What is batch.size?

The maximum size (in bytes) of a batch before it's sent to the broker.

```java
// Default: 16KB, increase for better throughput
props.put(ProducerConfig.BATCH_SIZE_CONFIG, 32768); // 32KB
```

### What is linger.ms?

How long (in milliseconds) the producer waits for more messages to batch before sending.

```java
// Default: 0 (send immediately)
props.put(ProducerConfig.LINGER_MS_CONFIG, 100); // Wait up to 100ms
```

### What is producer batching?

Producer batching combines multiple messages into a single network request, improving:

- **Throughput**: Fewer requests, better network utilization
- **Efficiency**: Less overhead per message
- **Latency**: Trade-off (waiting for batch increases latency)

```java
// Batching configuration for high throughput
props.put(ProducerConfig.BATCH_SIZE_CONFIG, 65536); // 64KB batch
props.put(ProducerConfig.LINGER_MS_CONFIG, 50);    // Wait 50ms
props.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, "snappy"); // Compress
```

### What is compression in Kafka?

Compression reduces the size of messages, improving network and storage efficiency.

```java
// Supported compression types
props.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, "snappy");
// Others: "gzip", "lz4", "zstd" (most efficient)

// With compression, batching and throughput increase
```

### What is buffer.memory?

The total memory (in bytes) the producer can use for buffering messages.

```java
// Default: 32MB
props.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 67108864); // 64MB
```

### What happens when the producer buffer becomes full?

- `send()` blocks (if `max.block.ms` not exceeded)
- Or throws `TimeoutException` after `max.block.ms`
- Producers should handle this gracefully

```java
try {
    producer.send(record).get(30, TimeUnit.SECONDS);
} catch (TimeoutException e) {
    System.err.println("Buffer full, message timed out");
    // Implement retry or fallback
}
```

### What is producer retry?

Automatic retry mechanism when messages fail to send due to transient errors.

```java
props.put(ProducerConfig.RETRIES_CONFIG, 3);              // Max retries
props.put(ProducerConfig.RETRY_BACKOFF_MS_CONFIG, 1000);  // Wait between retries
props.put(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION, 5);
// For ordering with retries, set to 1 or use idempotent producer
```

### What is an idempotent producer?

An idempotent producer ensures exactly-once delivery within a single partition by:

- Assigning sequence numbers to messages
- Detecting duplicates at the broker
- Preventing duplicate writes

```java
props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);
// Enables exactly-once within a partition
// Automatically sets:
// - max.in.flight.requests.per.connection <= 5
// - retries > 0
// - acks = all
```

---

## Consumer & Consumer Groups

### How does a Kafka Consumer work?

```
Consumer → poll() → Fetch messages → Deserialize → Process → Commit offsets
```

**Internal flow:**

1. Consumer subscribes to topics or assigns partitions
2. `poll()` fetches messages from the assigned partitions
3. Messages are deserialized and returned to the application
4. Application processes messages
5. Consumer commits offsets (automatically or manually)

### What is a Consumer Group?

A consumer group is a set of consumers sharing a group ID. Kafka assigns each partition to exactly one consumer in the group, enabling parallel processing and load balancing .

### Why do we need Consumer Groups?

- **Parallel processing**: Multiple consumers process messages simultaneously
- **Load balancing**: Distribute partition load across consumers
- **Fault tolerance**: If a consumer fails, its partitions are reassigned
- **Scalability**: Add more consumers to increase throughput

### Can two consumers in the same group consume the same partition?

**No**. Each partition is assigned to exactly one consumer in a group. This ensures no duplicate processing within the same group .

### Can two consumers from different groups consume the same partition?

**Yes**. Different consumer groups have independent consumption. Each group maintains its own offset, so partitions can be consumed by multiple groups simultaneously .

### What happens with 3 partitions and 5 consumers?

- Each partition is assigned to one consumer
- 3 consumers get one partition each
- 2 consumers are idle (no partitions assigned)

### What happens with 5 partitions and 3 consumers?

- Partitions are distributed among consumers
- One consumer may get 2 partitions, others get 1-2
- Distribution: 2 + 2 + 1 = 5 partitions

### What is consumer rebalancing?

Rebalancing is the process of reassigning partitions among consumers in a group when:

- A consumer joins or leaves the group
- The number of partitions changes
- The subscription changes

**Rebalance listeners in Java:**

```java
consumer.subscribe(List.of("orders"), new ConsumerRebalanceListener() {
    @Override
    public void onPartitionsRevoked(Collection<TopicPartition> partitions) {
        // Save offsets before partitions are revoked
        for (TopicPartition partition : partitions) {
            long offset = consumer.position(partition);
            saveOffsetToExternalStore(partition, offset);
        }
    }

    @Override
    public void onPartitionsAssigned(Collection<TopicPartition> partitions) {
        // Load offsets for assigned partitions
        for (TopicPartition partition : partitions) {
            long offset = loadOffsetFromExternalStore(partition);
            consumer.seek(partition, offset);
        }
    }
});
```

### When does Kafka trigger a rebalance?

- Consumer joins the group
- Consumer leaves the group (failure or shutdown)
- Consumer is considered dead (misses heartbeats)
- Topic partition count changes
- Consumer subscription changes

### What is consumer lag?

Consumer lag is the difference between:

- The latest offset in a partition (the last message produced)
- The current offset the consumer has committed (the last message consumed)

**Check consumer lag:**

```bash
# Check lag for a specific group
kafka-consumer-groups.sh --bootstrap-server localhost:9092 \
  --group order-group \
  --describe

# Output: TOPIC  PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG
# orders  0          100            150             50
```

### What causes consumer lag?

- Consumer is too slow (processing takes too long)
- Producer is producing messages faster than consumers can process
- Number of consumers is insufficient for the volume
- Network latency or resource constraints
- Consumer is paused or not polling

### How do you reduce consumer lag?

1. **Increase consumers**: Add more consumers to the group (up to number of partitions)
2. **Increase partitions**: More partitions = more parallelism
3. **Optimize consumer processing**: Make processing faster
4. **Increase batch size**: Use `max.poll.records` to get more per batch
5. **Use async processing**: Process messages asynchronously
6. **Scale consumer instances**: Add more resources (CPU, memory, network)

```java
// Optimize consumer for higher throughput
props.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 1000); // Get 1000 per poll
props.put(ConsumerConfig.MAX_POLL_INTERVAL_MS_CONFIG, 300000); // 5 minutes
```

### What is poll()?

The `poll()` method fetches messages from Kafka partitions:

```java
ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
// Returns up to max.poll.records messages
// Blocks for up to the specified duration
```

### What is max.poll.records?

Maximum number of records returned in a single `poll()` call:

```java
props.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 500);
// Default: 500
```

### What is max.poll.interval.ms?

Maximum time between `poll()` calls before the consumer is considered dead:

```java
props.put(ConsumerConfig.MAX_POLL_INTERVAL_MS_CONFIG, 300000); // 5 minutes
// Default: 300000 (5 min)
// If processing takes longer, increase this value
```

---

## Offset & Delivery Semantics

### What is a Kafka Offset?

An offset is a unique, sequential identifier for a message within a partition. It:

- Identifies the position of a message
- Is used by consumers to track progress
- Is immutable once assigned

### Where are consumer offsets stored?

Consumer offsets are stored in a special Kafka topic called `__consumer_offsets`. This internal topic:

- Stores committed offsets for each consumer group
- Is compacted (keeps latest offset per partition/group)
- Enables group management and rebalancing

### What is \_\_consumer_offsets?

`__consumer_offsets` is Kafka's internal topic that:

- Stores consumer group metadata and committed offsets
- Has 50 partitions by default
- Is compacted to retain only the latest offsets
- Is critical for consumer group management

### What is offset commit?

Offset commit is the process of telling Kafka which messages have been consumed. When a consumer commits an offset, it indicates that all messages up to that offset have been processed.

### What is auto commit?

Auto commit is enabled by default and commits offsets automatically:

```java
props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, true); // Default
props.put(ConsumerConfig.AUTO_COMMIT_INTERVAL_MS_CONFIG, 5000); // Every 5 seconds
```

**Risk**: Messages may be reprocessed or lost if processing time exceeds the commit interval.

### What is manual offset commit?

Manual offset commit gives the application control over when offsets are committed:

```java
// Synchronous commit (blocks until complete)
consumer.commitSync();

// Asynchronous commit
consumer.commitAsync((offsets, exception) -> {
    if (exception != null) {
        // Handle commit failure
        System.err.println("Commit failed: " + exception.getMessage());
    }
});

// Commit specific offsets
Map<TopicPartition, OffsetAndMetadata> offsets = new HashMap<>();
offsets.put(new TopicPartition("orders", 0), new OffsetAndMetadata(100L));
consumer.commitSync(offsets);
```

### What happens if a consumer crashes before committing the offset?

- The consumer is removed from the group
- Partitions are reassigned to other consumers
- The new consumer starts from the last committed offset
- **Risk**: Messages between last committed offset and crash point may be reprocessed

### What happens if a consumer commits before processing the message?

- The offset is advanced but the message isn't processed
- **Risk**: Message loss (the message won't be consumed again)
- **Solution**: Commit only after successful processing

### What is at-most-once delivery?

Messages are processed at most once, with potential message loss:

```java
// Process then commit
consumer.poll();
processMessages();     // Risk: crash after processing, before commit
consumer.commitSync(); // If crash after process, commit missed -> message lost
```

**Characteristic**: No duplicates, but messages may be lost.

### What is at-least-once delivery?

Messages are processed at least once, with potential duplicates:

```java
// Commit after processing
consumer.poll();
processMessages();
consumer.commitSync(); // If crash after processing before commit -> duplicate on retry
```

**Characteristic**: No message loss, but duplicates are possible.

### What is exactly-once delivery?

Messages are processed exactly once, no duplicates and no loss.

**Implementation using idempotent producer + transactional consumer:**

```java
// Producer: Idempotent
props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);
props.put(ProducerConfig.TRANSACTIONAL_ID_CONFIG, "prod-1");

// Consumer: Committing only after processing
consumer.poll();
processMessages();
// Commit offsets and produce results in a transaction
producer.beginTransaction();
producer.send(result);
consumer.commitSync(); // In transactional context
producer.commitTransaction();
```

### How do you prevent duplicate message processing?

1. **Use idempotent producer**: Prevents duplicates at broker level
2. **Use unique message IDs**: Consumers deduplicate using external store
3. **Use exactly-once semantics**: Use Kafka transactions
4. **Idempotent processing**: Design processing to be idempotent (same input produces same result)

```java
// Deduplication using Redis
public void processMessage(String messageId, Order order) {
    if (redis.exists(messageId)) {
        // Skip already processed message
        return;
    }

    // Process the order
    processOrder(order);

    // Store processed message ID
    redis.set(messageId, "processed");
}
```

---

## Replication & Fault Tolerance

### What is replication factor?

Replication factor is the number of copies (replicas) of each partition. A replication factor of 3 means each partition has 3 copies stored on different brokers.

```bash
# Create topic with replication factor 3
kafka-topics.sh --create \
  --bootstrap-server localhost:9092 \
  --topic orders \
  --partitions 3 \
  --replication-factor 3
```

### Why does Kafka replicate partitions?

- **Fault tolerance**: Survives broker failures
- **High availability**: Continues serving even if brokers fail
- **Data durability**: Prevents data loss
- **Read scalability**: Can read from replicas

### What is a partition leader?

The partition leader is the replica that handles all read and write requests for a partition. Followers replicate data from the leader.

### What is a follower replica?

Follower replicas are copies of a partition that:

- Replicate data from the leader
- Do not serve client requests (in normal operation)
- Become leaders if the current leader fails

### What is ISR (In-Sync Replica)?

ISR (In-Sync Replica) is the set of replicas that are fully caught up with the leader. Only replicas in the ISR can become the new leader.

**View ISR status:**

```bash
kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic orders
# Output includes: ISR: 0,1,2 (replica IDs that are in-sync)
```

### What happens when a Kafka broker goes down?

1. Zookeeper detects the broker is unavailable
2. For each partition where the failed broker was leader, a new leader is elected from the ISR
3. If the failed broker had replicas, ISR shrinks
4. Clients (producers/consumers) are notified and route requests to new leaders
5. The failed broker is removed from the cluster

### What happens when a partition leader goes down?

1. Kafka detects the leader is unavailable
2. A new leader is elected from the ISR (in-sync replicas)
3. All client requests are redirected to the new leader
4. This process is automatic and transparent to clients

### What is min.insync.replicas?

`min.insync.replicas` is the minimum number of replicas that must acknowledge a write for it to be considered successful when using `acks=all` .

```bash
# Configure at topic level
kafka-configs.sh --bootstrap-server localhost:9092 \
  --entity-type topics \
  --entity-name orders \
  --alter \
  --add-config min.insync.replicas=2
```

**Recommendation**: With replication factor 3, set `min.insync.replicas=2` .

### What is an unclean leader election?

An unclean leader election occurs when:

- No replica in the ISR is available
- A replica outside the ISR is elected as leader (not fully caught up)
- **Risk**: Data loss (the new leader may be missing messages)

```java
// Prevent unclean leader election
// Set in broker config
unclean.leader.election.enable=false
```

### How does Kafka prevent data loss?

1. **Replication**: Each partition has multiple replicas
2. **ISR mechanism**: Only in-sync replicas can become leaders
3. **min.insync.replicas**: Ensures messages are written to enough replicas
4. **Consumer offset commits**: Tracks what's been consumed
5. **Unclean leader election disabled**: Prevents out-of-sync replicas from becoming leaders
6. **Idempotent producers**: Prevents duplicate writes

---

## Spring Boot + Kafka

### How do you integrate Kafka with Spring Boot?

**Add dependencies:**

```xml
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
```

**Configure in application.yml:**

```yaml
spring:
  kafka:
    bootstrap-servers: localhost:9092
    producer:
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer
    consumer:
      group-id: order-group
      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer
      value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer
      properties:
        spring.json.trusted.packages: "*"
```

### What is KafkaTemplate?

`KafkaTemplate` is Spring's wrapper for Kafka producer operations:

```java
@Service
public class KafkaProducerService {
    @Autowired
    private KafkaTemplate<String, Order> kafkaTemplate;

    public void sendOrder(Order order) {
        // Send message
        kafkaTemplate.send("orders", order.getCustomerId(), order);

        // Send with callback
        ListenableFuture<SendResult<String, Order>> future =
            kafkaTemplate.send("orders", order.getCustomerId(), order);
        future.addCallback(
            result -> System.out.println("Sent: " + result.getRecordMetadata().offset()),
            failure -> System.err.println("Failed: " + failure.getMessage())
        );
    }
}
```

### What is @KafkaListener?

`@KafkaListener` is Spring's annotation for creating Kafka consumers:

```java
@Service
public class KafkaConsumerService {
    @KafkaListener(topics = "orders", groupId = "order-group")
    public void consume(Order order) {
        System.out.println("Received: " + order);
        // Process order
    }

    // With metadata
    @KafkaListener(topics = "orders")
    public void consumeWithMetadata(
            @Payload Order order,
            @Headers MessageHeaders headers,
            @Header("kafka_offset") Long offset) {
        System.out.println("Order: " + order + ", Offset: " + offset);
    }
}
```

### How do you create a Kafka Producer using Spring Boot?

```java
@Configuration
public class KafkaProducerConfig {
    @Bean
    public ProducerFactory<String, Order> producerFactory() {
        Map<String, Object> props = new HashMap<>();
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        props.put(ProducerConfig.ACKS_CONFIG, "all");
        props.put(ProducerConfig.RETRIES_CONFIG, 3);
        return new DefaultKafkaProducerFactory<>(props);
    }

    @Bean
    public KafkaTemplate<String, Order> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }
}
```

### How do you create a Kafka Consumer using Spring Boot?

```java
@Configuration
public class KafkaConsumerConfig {
    @Bean
    public ConsumerFactory<String, Order> consumerFactory() {
        Map<String, Object> props = new HashMap<>();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        props.put(ConsumerConfig.GROUP_ID_CONFIG, "order-group");
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
        props.put(JsonDeserializer.TRUSTED_PACKAGES, "*");
        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");
        return new DefaultKafkaConsumerFactory<>(props);
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, Order>
            kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, Order> factory =
            new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        factory.setConcurrency(3); // Consume with 3 threads
        return factory;
    }
}
```

### What is ConcurrentKafkaListenerContainerFactory?

It's a factory that creates Kafka listener containers with concurrency support:

- `setConcurrency(3)`: Creates 3 consumer threads
- Each thread consumes from different partitions (up to 3 partitions)
- Enables parallel processing

### How do you configure Kafka Producer properties in Spring Boot?

**application.yml approach:**

```yaml
spring:
  kafka:
    producer:
      bootstrap-servers: localhost:9092
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer
      properties:
        acks: all
        retries: 3
        batch.size: 16384
        linger.ms: 100
        compression.type: snappy
```

**Java configuration approach:**

```java
@Bean
public ProducerFactory<String, Order> producerFactory() {
    Map<String, Object> props = new HashMap<>();
    props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
    props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
    props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
    props.put(ProducerConfig.ACKS_CONFIG, "all");
    props.put(ProducerConfig.RETRIES_CONFIG, 3);
    props.put(ProducerConfig.BATCH_SIZE_CONFIG, 16384);
    props.put(ProducerConfig.LINGER_MS_CONFIG, 100);
    props.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, "snappy");
    return new DefaultKafkaProducerFactory<>(props);
}
```

### How do you configure Kafka Consumer properties?

```java
@Bean
public ConsumerFactory<String, Order> consumerFactory() {
    Map<String, Object> props = new HashMap<>();
    props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
    props.put(ConsumerConfig.GROUP_ID_CONFIG, "order-group");
    props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
    props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
    props.put(JsonDeserializer.TRUSTED_PACKAGES, "*");
    props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");
    props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false); // Manual commit
    props.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 100);
    props.put(ConsumerConfig.MAX_POLL_INTERVAL_MS_CONFIG, 300000);
    return new DefaultKafkaConsumerFactory<>(props);
}
```

### How do you configure multiple Kafka consumers/concurrency?

```java
@Bean
public ConcurrentKafkaListenerContainerFactory<String, Order>
        kafkaListenerContainerFactory() {
    ConcurrentKafkaListenerContainerFactory<String, Order> factory =
        new ConcurrentKafkaListenerContainerFactory<>();
    factory.setConsumerFactory(consumerFactory());
    factory.setConcurrency(3); // 3 concurrent consumer threads
    factory.setAckMode(ContainerProperties.AckMode.MANUAL_IMMEDIATE);
    return factory;
}

@Bean
public ConcurrentKafkaListenerContainerFactory<String, Order>
        highConcurrencyListenerContainerFactory() {
    ConcurrentKafkaListenerContainerFactory<String, Order> factory =
        new ConcurrentKafkaListenerContainerFactory<>();
    factory.setConsumerFactory(consumerFactory());
    factory.setConcurrency(10); // 10 concurrent consumer threads
    return factory;
}

// Usage
@KafkaListener(topics = "orders", containerFactory = "highConcurrencyListenerContainerFactory")
public void consumeWithHighConcurrency(Order order) {
    // Process
}
```

### How do you handle exceptions in @KafkaListener?

```java
@Service
public class KafkaConsumerService {
    @KafkaListener(topics = "orders", groupId = "order-group")
    public void consume(Order order, Acknowledgment ack) {
        try {
            // Process order
            processOrder(order);
            ack.acknowledge(); // Manual commit after successful processing
        } catch (Exception e) {
            System.err.println("Failed to process: " + e.getMessage());
            // Option 1: Acknowledge (skip the message)
            // ack.acknowledge();
            // Option 2: Don't acknowledge (will retry)
            // Option 3: Send to Dead Letter Topic (DLT)
            sendToDlt(order, e);
            ack.acknowledge();
        }
    }

    @KafkaListener(topics = "orders-dlt")
    public void consumeFromDlt(Order order) {
        System.err.println("Received from DLT: " + order);
        // Manual investigation of failed messages
    }
}
```

---

## Real-World Kafka

### How do you implement retry in Kafka?

**Approach 1: Retry topics with increasing delays:**

```java
@Service
public class OrderProcessor {
    @KafkaListener(topics = "orders")
    public void processOrder(ConsumerRecord<String, String> record) {
        try {
            processOrderInternal(record.value());
        } catch (TransientException e) {
            int retryCount = getRetryCount(record);
            if (retryCount < 3) {
                // Send to retry topic
                sendToRetryTopic(record, retryCount + 1);
            } else {
                // Send to DLT after max retries
                sendToDlq(record, e);
            }
        } catch (PermanentException e) {
            // Send directly to DLT for permanent failures
            sendToDlq(record, e);
        }
    }
}
```

**Approach 2: Exponential backoff:**

```java
@Service
public class DelayedRetryConsumer {
    private static final Map<Integer, Long> RETRY_DELAYS = Map.of(
        1, 5000L,   // 5 seconds
        2, 30000L,  // 30 seconds
        3, 300000L  // 5 minutes
    );

    @KafkaListener(topics = "orders-retry-1")
    public void processRetry1(ConsumerRecord<String, String> record) {
        processWithDelay(record, 1);
    }

    @KafkaListener(topics = "orders-retry-2")
    public void processRetry2(ConsumerRecord<String, String> record) {
        processWithDelay(record, 2);
    }
}
```

### What is a Dead Letter Topic (DLT)?

A Dead Letter Topic is a special topic where messages are sent when they cannot be processed successfully after all retry attempts.

**Creating a DLT:**

```bash
kafka-topics.sh --create \
  --bootstrap-server localhost:9092 \
  --topic orders-dlt \
  --partitions 3 \
  --replication-factor 1
```

**Sending to DLT in Spring:**

```java
private void sendToDlq(ConsumerRecord<String, String> record, Exception e) {
    ProducerRecord<String, String> dlqRecord = new ProducerRecord<>(
        "orders-dlt",
        record.key(),
        record.value()
    );
    // Add diagnostic headers
    dlqRecord.headers()
        .add("dlq-reason", e.getMessage().getBytes())
        .add("exception-class", e.getClass().getName().getBytes())
        .add("original-topic", record.topic().getBytes())
        .add("timestamp", String.valueOf(System.currentTimeMillis()).getBytes());

    kafkaTemplate.send(dlqRecord);
}
```

### What happens when a Kafka message repeatedly fails?

1. Consumer attempts to process the message
2. If it fails, the consumer may retry (based on retry configuration)
3. After max retries, the message is sent to the DLT
4. The message is removed from the original topic (offset committed)
5. The DLT message can be manually investigated and replayed
6. The DLT can be consumed for monitoring and alerting

### How do you handle duplicate messages in a payment/order system?

**Approach 1: Idempotent processing:**

```java
@Service
public class PaymentProcessor {
    private final PaymentRepository paymentRepository;
    private final DeduplicationService dedupService;

    @KafkaListener(topics = "payments")
    public void processPayment(PaymentEvent event) {
        // Check if already processed
        if (dedupService.isProcessed(event.getPaymentId())) {
            System.out.println("Duplicate payment, skipping: " + event.getPaymentId());
            return;
        }

        try {
            // Process payment (idempotent)
            paymentRepository.save(event.toPayment());
            dedupService.markProcessed(event.getPaymentId());
        } catch (DuplicateKeyException e) {
            // Handle duplicate database insert
            dedupService.markProcessed(event.getPaymentId());
        }
    }
}
```

**Approach 2: Use idempotent producer:**

```java
props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);
props.put(ProducerConfig.TRANSACTIONAL_ID_CONFIG, "payment-service");
// Ensures exactly-once delivery within partitions
```

### How do you design Kafka communication between microservices?

```
Order Service → Kafka (orders topic) → Payment Service
Payment Service → Kafka (payments topic) → Notification Service
```

**Event-driven design:**

```java
// Order Service - publishes order events
@Service
public class OrderService {
    private final KafkaTemplate<String, OrderEvent> kafkaTemplate;

    @Transactional
    public Order createOrder(Order order) {
        // Save order
        Order savedOrder = orderRepository.save(order);

        // Publish event
        OrderEvent event = new OrderEvent(
            savedOrder.getId(),
            savedOrder.getCustomerId(),
            "ORDER_CREATED"
        );
        kafkaTemplate.send("orders", savedOrder.getCustomerId(), event);

        return savedOrder;
    }
}

// Payment Service - consumes order events, produces payment events
@Service
public class PaymentService {
    @KafkaListener(topics = "orders", groupId = "payment-group")
    public void handleOrderCreated(OrderEvent event) {
        // Process payment
        Payment payment = processPayment(event.getOrderId());

        // Publish payment event
        PaymentEvent paymentEvent = new PaymentEvent(payment.getId(), "PAYMENT_COMPLETED");
        kafkaTemplate.send("payments", paymentEvent);
    }
}

// Notification Service - consumes payment events
@Service
public class NotificationService {
    @KafkaListener(topics = "payments", groupId = "notification-group")
    public void handlePaymentCompleted(PaymentEvent event) {
        // Send notification
        sendNotification(event.getPaymentId(), "Payment completed");
    }
}
```

### Kafka vs REST — when would you use each?

| Aspect         | Kafka (Event-Driven)                    | REST (Request-Response)     |
| -------------- | --------------------------------------- | --------------------------- |
| **Coupling**   | Loose (async)                           | Tight (sync)                |
| **Latency**    | Higher (async)                          | Lower (sync)                |
| **Throughput** | Very high                               | Limited by server           |
| **Ordering**   | Guaranteed per partition                | Not guaranteed              |
| **Delivery**   | At least once, exactly once             | Best effort                 |
| **Use cases**  | Event sourcing, streams, data pipelines | CRUD, APIs, direct requests |

**Use Kafka when:**

- Multiple consumers need the same data
- Asynchronous processing is acceptable
- High throughput is required
- Event replay is needed
- Decoupling services is important

**Use REST when:**

- Immediate response is needed
- Simple CRUD operations
- External API with request-response
- Low latency is critical

### What is the Outbox Pattern and why is it needed?

The Outbox Pattern ensures reliable communication between a database and Kafka when updating the database and publishing an event must be atomic .

**The Problem:**

```java
@Transactional
public void createOrder(Order order) {
    orderRepository.save(order); // DB update
    // Risk: If Kafka publish fails, DB update succeeds -> inconsistency
    kafkaTemplate.send("orders", order);
}
```

**The Solution (Outbox Pattern):**

```java
@Transactional
public void createOrder(Order order) {
    orderRepository.save(order);

    // Instead of publishing directly, save to outbox table
    OutboxEvent event = new OutboxEvent(
        "ORDER_CREATED",
        new ObjectMapper().writeValueAsString(order),
        Instant.now()
    );
    outboxRepository.save(event);
    // DB transaction commits both order and event atomically
}

// Separate process polls outbox table and publishes to Kafka
@Component
public class OutboxPublisher {
    @Scheduled(fixedDelay = 1000)
    public void publishOutboxEvents() {
        List<OutboxEvent> events = outboxRepository.findByPublishedFalse();
        for (OutboxEvent event : events) {
            try {
                kafkaTemplate.send("orders", event.getPayload());
                event.setPublished(true);
                outboxRepository.save(event);
            } catch (Exception e) {
                // Retry on failure
                System.err.println("Failed to publish: " + e.getMessage());
                // Don't mark as published, retry later
            }
        }
    }
}
```

### What happens if the database update succeeds but Kafka publishing fails?

- **Without Outbox**: Inconsistency (DB updated, event not published)
- **With Outbox**: Event saved in Outbox, retry mechanism publishes later
- The Outbox process continues retrying until successful
- No data loss, eventual consistency is achieved

### What happens if Kafka processing succeeds but the application crashes before updating the database?

**Scenario:**

1. Consumer receives message
2. Processing succeeds
3. Offset is committed
4. Application crashes before updating DB

**Solution: Idempotent processing:**

```java
@KafkaListener(topics = "orders")
public void processOrder(OrderEvent event, Acknowledgment ack) {
    // Check if already processed
    if (isProcessed(event.getOrderId())) {
        ack.acknowledge();
        return;
    }

    try {
        // Process and update DB
        processOrderInternal(event);
        markProcessed(event.getOrderId());
        ack.acknowledge();
    } catch (Exception e) {
        // Don't commit, will retry
        throw e;
    }
}
```

### Design a real-world Order → Payment → Notification system using Kafka

**Architecture:**

```
Order Service → [orders topic] → Payment Service → [payments topic] → Notification Service
                    ↑                   ↓
                 [orders-dlt]      [payments-dlt]
```

**Implementation:**

```java
// 1. Order Service
@Service
@Slf4j
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private KafkaTemplate<String, OrderEvent> kafkaTemplate;

    @Transactional
    public Order createOrder(CreateOrderRequest request) {
        // Save order
        Order order = new Order();
        order.setCustomerId(request.getCustomerId());
        order.setAmount(request.getAmount());
        order.setStatus("PENDING");
        order = orderRepository.save(order);

        // Publish event
        OrderEvent event = new OrderEvent(
            order.getId(),
            order.getCustomerId(),
            order.getAmount(),
            "ORDER_CREATED"
        );
        kafkaTemplate.send("orders", order.getCustomerId(), event);

        return order;
    }
}

// 2. Payment Service
@Service
@Slf4j
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;
    @Autowired
    private KafkaTemplate<String, PaymentEvent> kafkaTemplate;

    @KafkaListener(topics = "orders", groupId = "payment-group")
    @Retryable(value = {Exception.class}, maxAttempts = 3)
    public void handleOrderCreated(OrderEvent event, Acknowledgment ack) {
        try {
            // Process payment
            Payment payment = new Payment();
            payment.setOrderId(event.getOrderId());
            payment.setAmount(event.getAmount());
            payment.setStatus("COMPLETED");
            payment = paymentRepository.save(payment);

            // Publish payment event
            PaymentEvent paymentEvent = new PaymentEvent(
                payment.getId(),
                event.getOrderId(),
                event.getCustomerId(),
                "PAYMENT_COMPLETED"
            );
            kafkaTemplate.send("payments", event.getCustomerId(), paymentEvent);

            ack.acknowledge();
        } catch (Exception e) {
            log.error("Payment processing failed", e);
            // For transient errors, don't acknowledge (retry)
            // For permanent errors, send to DLT
            if (isPermanentError(e)) {
                sendToDlt(event, e);
                ack.acknowledge();
            }
            // Re-throw for retry
            throw e;
        }
    }
}

// 3. Notification Service
@Service
@Slf4j
public class NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;
    @Autowired
    private EmailService emailService;

    @KafkaListener(topics = "payments", groupId = "notification-group")
    public void handlePaymentCompleted(PaymentEvent event, Acknowledgment ack) {
        try {
            // Create notification
            Notification notification = new Notification();
            notification.setCustomerId(event.getCustomerId());
            notification.setMessage("Payment " + event.getPaymentId() + " completed for order " + event.getOrderId());
            notification.setStatus("SENT");
            notification = notificationRepository.save(notification);

            // Send email
            emailService.sendEmail(
                getCustomerEmail(event.getCustomerId()),
                "Payment Confirmation",
                notification.getMessage()
            );

            ack.acknowledge();
        } catch (Exception e) {
            log.error("Notification failed", e);
            // Send to DLT for manual investigation
            sendToDlt(event, e);
            ack.acknowledge();
        }
    }
}

// 4. Dead Letter Topic Handler
@Slf4j
@Service
public class DltHandler {
    @KafkaListener(topics = "orders-dlt")
    public void handleDltMessage(ConsumerRecord<String, OrderEvent> record) {
        log.error("DLT message: topic={}, offset={}, key={}, value={}",
            record.topic(), record.offset(), record.key(), record.value());

        // Store in database for manual investigation
        FailedEvent failedEvent = new FailedEvent();
        failedEvent.setTopic(record.topic());
        failedEvent.setKey(record.key());
        failedEvent.setPayload(record.value().toString());
        failedEvent.setReason(new String(record.headers().lastHeader("dlq-reason").value()));
        failedEvent.setTimestamp(new Date());
        failedEventRepository.save(failedEvent);

        // Send alert
        alertService.sendAlert("Message sent to DLT: " + record.value());
    }
}
```

**Testing the system:**

```bash
# 1. Create topics
kafka-topics.sh --create --bootstrap-server localhost:9092 --topic orders --partitions 3
kafka-topics.sh --create --bootstrap-server localhost:9092 --topic payments --partitions 3
kafka-topics.sh --create --bootstrap-server localhost:9092 --topic orders-dlt --partitions 3

# 2. Start services
# Order Service on port 8080
# Payment Service on port 8081
# Notification Service on port 8082

# 3. Create an order
curl -X POST http://localhost:8080/orders \
  -H "Content-Type: application/json" \
  -d '{"customerId":"123", "amount":100.00}'

# 4. Verify consumers
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic orders --from-beginning
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic payments --from-beginning

# 5. Monitor consumer lag
kafka-consumer-groups.sh --bootstrap-server localhost:9092 \
  --group payment-group --describe
```

---
