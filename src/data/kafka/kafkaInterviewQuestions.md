## Kafka Fundamentals

### What is Apache Kafka?

Think of Kafka as a giant, super-fast post office for data. Instead of sending messages directly from one app to another (which gets messy fast), apps send messages to Kafka, and other apps pick them up when they're ready. It's built to handle massive amounts of data flowing through it every second — we're talking millions of messages — without breaking a sweat.

The cool part? It's not just a message queue. It stores messages permanently (like a log file), lets multiple apps read the same messages, and can even replay old messages if you need to.

### Why do we use Kafka?

Imagine you're running an online store. When someone places an order, a bunch of things need to happen: update inventory, send a confirmation email, notify the warehouse, update analytics. Without Kafka, your order system would need to talk to each of these directly — and if one goes down, orders get lost.

With Kafka, your order system just shouts "new order!" into Kafka, and every other system listens and does its own thing. Nobody blocks nobody. If the email system goes down for a minute, messages just wait in Kafka until it's back up.

The main reasons people pick Kafka:
- It handles insane amounts of data — millions of messages per second
- You can add more servers when you grow (horizontal scaling)
- Messages are saved to disk and copied across multiple machines, so you don't lose data
- If one server dies, another takes over automatically
- The sender and receiver don't need to know about each other at all

### What are the main components of Kafka?

Let's break it down with a real-world analogy. Think of Kafka as a library:

- **Broker** = A librarian. Each broker is a server that stores messages and handles reading/writing. You have many librarians working together.
- **Cluster** = The whole library. A group of brokers working together.
- **Topic** = A section in the library (like "Fiction" or "Orders"). It's just a category name for messages.
- **Partition** = A shelf within that section. Each topic is split into partitions so many people can read at the same time.
- **Producer** = Someone who donates books. An app that sends messages to Kafka.
- **Consumer** = Someone who borrows books. An app that reads messages from Kafka.
- **Consumer Group** = A book club. A group of consumers working together — each person reads different books so the whole club gets through faster.
- **ZooKeeper/KRaft** = The library catalog system. Keeps track of which librarian is responsible for what.

### What is a Kafka Broker?

A broker is just a single Kafka server. Think of it as one worker in the Kafka factory. Each broker is responsible for storing some portion of the data and handling read/write requests. When you start Kafka, you typically run multiple brokers together (a cluster) so if one dies, the others keep going.

### What is a Kafka Cluster?

One broker alone is a single point of failure — if it dies, your whole system is down. So we run multiple brokers together as a cluster. This gives you:
- **More capacity**: Spread the data and workload across machines
- **Safety**: Data is copied to multiple brokers, so losing one doesn't mean losing data
- **No downtime**: If one broker dies, another takes over its work automatically

Here's how you can spin up a local Kafka cluster with Docker to play around:

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

A topic is just a name you give to a stream of messages — like a channel or a category. For example, you might have an "orders" topic for order events, a "payments" topic for payment events, and a "shipments" topic for shipping updates.

Here's what makes topics special:
- Once a message is written, it can't be changed (immutable) — like writing in pen, not pencil
- Messages inside a partition are strictly ordered — first in, first out
- Messages don't disappear after being read — they stick around for a configurable amount of time (hours, days, or even forever)

Here's how you create a topic:

```bash
kafka-topics.sh --create \
  --bootstrap-server localhost:9092 \
  --topic orders \
  --partitions 3 \
  --replication-factor 1
```

### What is a Kafka Partition?

A single topic is split into partitions — think of them as lanes on a highway. If you have 3 partitions for your "orders" topic, you can have 3 consumers reading at the same time, each from a different partition. This is how Kafka scales.

Each partition is an ordered list of messages. The order is guaranteed within a partition, but not across partitions. So if you need all messages for a specific customer to be in order, you'd use that customer's ID as a partition key (more on that later).

Here's how you can see the partitions in a topic:

```bash
kafka-topics.sh --describe \
  --bootstrap-server localhost:9092 \
  --topic orders
```

### What is a Kafka Offset?

An offset is just a number — a sequential ID given to each message in a partition. The first message is offset 0, the next is 1, then 2, 3, and so on. It's like page numbers in a book.

Why does this matter? Because consumers use offsets to remember where they left off. If a consumer reads up to offset 50 and then crashes, when it comes back, it knows to start from offset 51. No need to re-read everything from the beginning.

### What is a Kafka Producer?

A producer is any application that sends messages to Kafka. It's the "writer" in the system. Your order service, your payment service, your mobile app — anything that needs to tell other systems "hey, something happened" — that's a producer.

Here's the simplest way to send a message in Java:

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

A consumer is any application that reads messages from Kafka. It's the "reader." Your email service, your analytics dashboard, your warehouse system — anything that needs to react to events — that's a consumer.

Here's the simplest way to read messages in Java:

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

A consumer group is just a bunch of consumers working together to read from the same topic. Think of it like a team of people unloading a truck — each person takes a different box so the work gets done faster.

Here's the key rule: Kafka assigns each partition to exactly one consumer in the group. So if you have 3 partitions and 3 consumers, each consumer reads from one partition. If you have 5 consumers but only 3 partitions, 2 consumers sit idle.

This design gives you automatic load balancing. If one consumer dies, Kafka reassigns its partitions to the others. No manual work needed.

Here's how you put two consumers in the same group — just give them the same group ID:

```java
// Consumer 1 - same group ID
props.put(ConsumerConfig.GROUP_ID_CONFIG, "order-group");
// Consumer 2 - same group ID
props.put(ConsumerConfig.GROUP_ID_CONFIG, "order-group");
```

### Why does Kafka use partitions?

Partitions are the secret sauce behind Kafka's speed and scalability. Without partitions, a topic would be one giant queue that only one consumer could read at a time — like having one checkout lane in a supermarket.

With partitions, you get:
- **Parallel reading**: Multiple consumers read from different partitions simultaneously
- **Spread across machines**: Different partitions live on different brokers, so you're not limited by one server's disk or network
- **Ordered where it matters**: Messages within a single partition are ordered, so if you need ordering for a specific entity (like a customer), you route all their messages to the same partition

### How does Kafka achieve high throughput?

Kafka is fast because of several smart design choices working together:

- **Batching**: Instead of sending one message at a time (expensive network call after network call), the producer groups messages together and sends them in bulk — like sending one big package instead of many small envelopes
- **Compression**: Messages get squeezed down before sending (using snappy, gzip, lz4, or zstd), so less data travels over the network
- **Zero-copy**: Kafka uses a special OS feature that lets data go directly from disk to network without being copied around in memory — less work, more speed
- **Sequential writes**: Messages are just appended to the end of a file — no random seeking, which is how disks like to work
- **Multiple partitions**: Many consumers reading at once means the work gets divided

### How does Kafka provide fault tolerance?

Kafka doesn't lose data when machines die. Here's how it stays resilient:

- **Replication**: Every partition has copies (replicas) stored on different brokers. If you have a replication factor of 3, your data exists on 3 separate machines
- **Leader election**: Each partition has one "leader" that handles reads/writes, and the others are "followers" that copy the data. If the leader dies, a follower automatically becomes the new leader — you don't even notice
- **ISR (In-Sync Replicas)**: Only replicas that are up-to-date with the leader are eligible to become the new leader. This prevents data loss from promoting a behind replica
- **Disk persistence**: Messages are written to disk, not just held in memory. So even if the whole cluster restarts, your data is still there
- **Offset tracking**: Consumer progress is saved in a special internal topic (`__consumer_offsets`), so consumers know exactly where to resume

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

Think of it like a filing system:
- **Topic** = The cabinet itself. It's the name of your data stream, like "orders" or "payments."
- **Partition** = A drawer in that cabinet. Each topic has multiple partitions so many people can access data at the same time.
- **Replica** = A backup copy of each drawer stored in a different cabinet (broker), so if one cabinet catches fire, your data is safe.

### How does Kafka distribute messages among partitions?

When a producer sends a message, Kafka needs to decide which partition to put it in. Here's how it decides:

1. **If you provide a key** (like a customer ID): Kafka runs that key through a hash function and uses the result to pick a partition. Same key always goes to same partition — this is how you get ordering.
2. **If you don't provide a key**: Kafka just rotates through the partitions one by one (round-robin), spreading the load evenly.
3. **If you have special needs**: You can write your own partitioner with custom logic.

Here's what the internal logic looks like (simplified):

```java
public int partition(String key, int numPartitions) {
    if (key == null) {
        // No key? Just rotate through partitions
        return counter++ % numPartitions;
    }
    // Has key? Hash it to pick a partition
    return Math.abs(key.hashCode()) % numPartitions;
}
```

### What is a partition key?

A partition key is just a value you attach to your message that determines where it lands. Think of it like a zip code on a letter — all letters with the same zip code go to the same destination.

The magic: all messages with the same key always go to the same partition. This means they're stored in order and read in order. So if you use "customer-123" as the key for all of that customer's orders, you'll always read them back in the order they were placed.

### What happens when you send a message with a key?

All messages with that key go to the same partition, preserving order. Here's an example:

```java
// All messages with key "customer-123" go to same partition
ProducerRecord<String, String> record =
    new ProducerRecord<>("orders", "customer-123", "{\"product\":\"laptop\"}");
```

This is how you guarantee that all events for a specific customer are processed in the order they happened.

### What happens when you send a message without a key?

Without a key, Kafka spreads messages across partitions using round-robin. You get even load balancing, but no ordering guarantee — message A might end up in partition 0 and message B in partition 1, and there's no guarantee which gets read first.

This is fine for independent events where order doesn't matter (like sensor readings from different devices).

### How do you ensure messages for the same customer go to the same partition?

Just use the customer ID as the partition key:

```java
String customerId = record.getCustomerId();
ProducerRecord<String, String> record =
    new ProducerRecord<>("orders", customerId, jsonValue);
```

Now all orders for customer-123 go to partition 2 (or whichever partition the hash lands on), and they'll always be read in order.

### Does Kafka guarantee message ordering?

**Yes, but only within a single partition.** Messages in the same partition are consumed in the exact order they were written — first in, first out. But there's no ordering guarantee across different partitions.

Think of it like multiple checkout lanes at a grocery store. Each lane has its own queue, and people in each lane are served in order. But there's no guarantee that the person in lane 1 gets served before the person in lane 2.

### Does Kafka guarantee ordering across partitions?

**No.** Once messages are in different partitions, there's no global ordering. If you need ordering for a group of related messages, make sure they all go to the same partition by using the same key.

### How can you maintain ordering for a particular customer?

Use the customer ID as the partition key — it's that simple:

```java
// All customer-123 orders go to same partition, preserving order
ProducerRecord<String, String> record =
    new ProducerRecord<>("orders", "customer-123", orderJson);
```

### What happens when you increase the number of partitions?

This is a tricky operation. Here's what happens:
- Existing data stays where it is — it doesn't move
- New messages are distributed across all partitions (including the new ones)
- Consumers rebalance to pick up the new partitions
- **Important**: The hash function changes because the partition count changed. So a key that used to go to partition 2 might now go to partition 4. This can break ordering for existing keys.

### Can you decrease the number of partitions?

**No, Kafka doesn't support this.** Once you create a topic with N partitions, you can only increase that number, never decrease it. Why? Because existing messages are already scattered across those partitions, and Kafka has no way to merge them back together.

The only workaround is to create a new topic with fewer partitions and copy the data over. This is why it's important to think carefully about partition count upfront.

### What is a hot partition?

Imagine 90% of your orders come from one giant customer (like Amazon). If you use customer ID as the partition key, all of Amazon's orders go to the same partition. That partition becomes a "hot partition" — it's getting hammered with traffic while the others sit idle.

This causes real problems:
- The overloaded partition falls behind (consumer lag)
- One consumer is working overtime while others are bored
- Your whole pipeline slows down because of one bottleneck

### What is partition skew?

Partition skew is just a fancy term for "uneven distribution." Some partitions have way more data or traffic than others. It comes in three flavors:
- **Data skew**: One partition has 10x more messages than the others
- **Size skew**: Messages in one partition are much larger
- **Throughput skew**: One partition gets way more reads/writes (this is the hot partition problem)

### How would you solve uneven partition distribution?

Here are the practical fixes, from simplest to most complex:

1. **Pick better keys**: If your current key creates hot spots, switch to something more evenly distributed. Instead of `country` (where most users might be from one country), use `userId` or `orderId`.

2. **Add salting**: Take your key and add a random suffix to spread the load. For example, instead of just `customer-123`, use `customer-123-0`, `customer-123-1`, `customer-123-2` across three partitions. The tradeoff: you lose strict ordering for that customer.

3. **Use a custom partitioner**: Write your own logic that's smarter about distributing messages. Here's an example that uses salting to avoid hot partitions:

```java
public class BalancedPartitioner implements Partitioner {
    @Override
    public int partition(String topic, Object key, byte[] keyBytes,
                         Object value, byte[] valueBytes, Cluster cluster) {
        List<PartitionInfo> partitions = cluster.partitionsForTopic(topic);
        int numPartitions = partitions.size();

        if (key == null) {
            return stickyPartition;
        }

        // Add a salt to spread hot keys across partitions
        String salt = getSaltForKey(key.toString());
        return Math.abs((key.toString() + salt).hashCode()) % numPartitions;
    }
}
```

4. **Increase partition count**: More partitions mean finer-grained distribution, which naturally reduces skew.

---

## Producer

### How does a Kafka Producer work internally?

When you call `producer.send()`, a lot happens behind the scenes before your message actually lands in Kafka. Here's the journey:

```
Producer → ProducerRecord → Serializer → Partitioner → Buffer → Sender → Kafka Broker
```

Let's walk through it step by step:

1. You create a `ProducerRecord` with the topic, key, and value
2. **Serializer**: Your key and value (which might be strings or objects) get converted to raw bytes — because Kafka only deals in bytes
3. **Partitioner**: Kafka decides which partition this message goes to (based on your key, or round-robin if no key)
4. **Buffer**: The message doesn't go straight to the network — it sits in a memory buffer, waiting to be grouped with other messages into a batch
5. **Sender thread**: A separate thread picks up batches from the buffer and sends them to the right broker
6. **Acknowledgment**: The broker writes the message and sends back a confirmation (or an error)

The key insight: sending is **asynchronous**. Your `send()` call just puts the message in the buffer and returns immediately. The actual network call happens in the background. This is a big part of why Kafka is so fast.

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

You have two choices: either call `.get()` on the Future to block until you get a confirmation, or provide a callback that runs when the confirmation arrives. In production, you'd typically use the callback so your application doesn't stall waiting for Kafka.

### What is acks in Kafka?

`acks` is one of the most important producer settings. It controls **how sure you want to be** that your message was actually saved before moving on. There are three levels:

- **acks=0**: "Fire and forget." The producer doesn't wait for any confirmation. Fastest option, but if the broker crashes before writing your message, it's gone forever.
- **acks=1**: "Leader confirmed." The producer waits for the leader broker to say "got it." Better, but if the leader crashes before the followers copy the data, you can still lose messages.
- **acks=all**: "Everyone confirmed." The producer waits until all in-sync replicas have written the message. Slowest but safest — your data is safe as long as at least one replica survives.

### Explain acks=0, acks=1, and acks=all

| acks Value   | What it means                        | Risk                                         | Use Case                       |
| ------------ | ------------------------------------ | -------------------------------------------- | ------------------------------ |
| **acks=0**   | Fire and forget, no acknowledgment   | Data loss if broker fails                    | Metrics, logging, non-critical |
| **acks=1**   | Leader acknowledges                  | Data loss if leader fails before replication | General purpose                |
| **acks=all** | All ISR replicas acknowledge         | Highest durability, lower throughput         | Financial, critical data       |

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

**acks=all** (or `acks=-1`) is the strongest. Here's why it matters:

- The message isn't considered "sent" until all in-sync replicas have written it to their disks
- If the leader suddenly dies, any of the followers has a complete copy — no data loss
- Combined with `min.insync.replicas=2`, you can survive the loss of one broker without losing any messages

The tradeoff: it's slower because you're waiting for multiple brokers to respond instead of just one. For financial transactions or order processing, this tradeoff is worth it. For logging sensor data from thousands of IoT devices, acks=0 might be fine.

### What is batch.size?

`batch.size` is the maximum size (in bytes) of a batch before it gets sent to the broker. Think of it like a bus — the bus leaves when it's full (reaches batch.size) or when the timer goes off (linger.ms), whichever comes first.

```java
// Default: 16KB, increase for better throughput
props.put(ProducerConfig.BATCH_SIZE_CONFIG, 32768); // 32KB
```

A larger batch means fewer network requests and better compression, but it also means messages sit around waiting longer before being sent.

### What is linger.ms?

`linger.ms` is how long the producer waits for more messages to accumulate before sending the batch. It's the "patience" setting.

```java
// Default: 0 (send immediately)
props.put(ProducerConfig.LINGER_MS_CONFIG, 100); // Wait up to 100ms
```

Setting `linger.ms=0` means "send as soon as there's something to send" — lowest latency but worst throughput. Setting `linger.ms=100` means "wait up to 100ms to fill the batch" — better throughput but each message might wait up to 100ms before being sent.

### What is producer batching?

Instead of sending each message individually (expensive — each send is a network call), the producer groups messages into batches and sends them all at once. It's like sending one big package instead of many small envelopes.

This improves:
- **Throughput**: One network call carries many messages
- **Efficiency**: Less overhead per message (headers, handshakes, etc.)
- **Latency trade-off**: Messages wait longer to be sent (because we're waiting for the batch to fill)

```java
// Batching configuration for high throughput
props.put(ProducerConfig.BATCH_SIZE_CONFIG, 65536); // 64KB batch
props.put(ProducerConfig.LINGER_MS_CONFIG, 50);    // Wait 50ms
props.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, "snappy"); // Compress
```

### What is compression in Kafka?

Compression squeezes your messages smaller before sending them over the network and storing them on disk. It's like zipping a file before emailing it.

```java
// Supported compression types
props.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, "snappy");
// Others: "gzip", "lz4", "zstd" (most efficient)

// With compression, batching and throughput increase
```

The options:
- **snappy**: Good balance of speed and compression ratio (Google's algorithm)
- **gzip**: Better compression but slower — good for when storage/bandwidth matters more than CPU
- **lz4**: Fastest compression, decent ratio
- **zstd**: Best compression ratio, reasonable speed (Facebook's algorithm)

Compression works especially well with batching — you compress the whole batch as one unit, getting much better ratios than compressing individual messages.

### What is buffer.memory?

This is the total memory the producer can use for buffering messages waiting to be sent. Think of it as the size of the waiting room.

```java
// Default: 32MB
props.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 67108864); // 64MB
```

### What happens when the producer buffer becomes full?

If your producer is sending messages faster than the network can handle them, the buffer fills up. Then what?

- `send()` blocks (waits for space to free up) — as long as it doesn't exceed `max.block.ms`
- If `max.block.ms` is exceeded, it throws a `TimeoutException`
- Your application needs to decide: retry? log the error? drop the message?

```java
try {
    producer.send(record).get(30, TimeUnit.SECONDS);
} catch (TimeoutException e) {
    System.err.println("Buffer full, message timed out");
    // Implement retry or fallback
}
```

### What is producer retry?

Networks are flaky. Brokers restart. Things fail temporarily. Kafka's producer has a built-in retry mechanism for these transient errors.

```java
props.put(ProducerConfig.RETRIES_CONFIG, 3);              // Max retries
props.put(ProducerConfig.RETRY_BACKOFF_MS_CONFIG, 1000);  // Wait between retries
props.put(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION, 5);
// For ordering with retries, set to 1 or use idempotent producer
```

**Warning**: Retries can mess up message ordering. If message A fails and is retried, but message B succeeds immediately, B arrives before A. To prevent this, either set `max.in.flight.requests.per.connection=1` (only one request at a time) or use an idempotent producer.

### What is an idempotent producer?

An idempotent producer guarantees that even if messages are retried, they won't be written twice to the partition. It's "exactly-once" delivery within a single partition.

How it works:
- Each message gets a unique sequence number
- The broker tracks the last sequence number it accepted from each producer
- If a retry arrives with a sequence number the broker has already seen, it's silently discarded — no duplicate

```java
props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);
// Enables exactly-once within a partition
// Automatically sets:
// - max.in.flight.requests.per.connection <= 5
// - retries > 0
// - acks = all
```

When you enable idempotence, Kafka automatically configures the other settings needed to make it work. You don't need to worry about ordering or retry settings — Kafka handles it for you.

---

## Consumer & Consumer Groups

### How does a Kafka Consumer work?

A consumer is an application that reads messages from Kafka. Here's what happens when it runs:

```
Consumer → poll() → Fetch messages → Deserialize → Process → Commit offsets
```

Let's walk through it:

1. The consumer subscribes to one or more topics (or gets specific partitions assigned)
2. It calls `poll()` — this is the heartbeat of the consumer. It asks Kafka "do you have any new messages for me?"
3. Kafka sends back any new messages from the assigned partitions
4. The messages (which are raw bytes) get deserialized back into objects/strings
5. Your application does something with the messages (save to database, send email, etc.)
6. The consumer commits its offset — telling Kafka "I've processed up to here, don't give me these again"

The `poll()` loop is critical — the consumer must keep calling `poll()` regularly or Kafka thinks it's dead and triggers a rebalance.

### What is a Consumer Group?

A consumer group is just a bunch of consumers working together to read from the same topic. Kafka's rule: each partition is assigned to exactly one consumer in the group. This means:
- If you have 3 partitions and 3 consumers, each consumer reads from one partition
- If you have 5 consumers but only 3 partitions, 2 consumers sit idle
- If one consumer dies, its partitions get reassigned to the survivors

### Why do we need Consumer Groups?

Without consumer groups, every consumer would read every message (like a broadcast). With consumer groups:
- **Parallel processing**: Multiple consumers share the work — each reads different partitions
- **Load balancing**: Kafka automatically distributes partitions across consumers
- **Fault tolerance**: If a consumer crashes, Kafka reassigns its partitions to the others
- **Scalability**: Need more throughput? Just add more consumers (up to the number of partitions)

### Can two consumers in the same group consume the same partition?

**No.** Within a single consumer group, each partition is assigned to exactly one consumer. This prevents duplicate processing — you don't want two consumers both handling the same order.

### Can two consumers from different groups consume the same partition?

**Yes!** Different consumer groups are completely independent. Each group maintains its own offset. So if you have a "email-service" group and an "analytics-service" group, both can read the same messages from the same partition. This is how you broadcast events to multiple systems.

### What happens with 3 partitions and 5 consumers?

- 3 consumers each get one partition
- 2 consumers sit idle with nothing to do
- **Lesson**: Don't have more consumers than partitions — you're wasting resources

### What happens with 5 partitions and 3 consumers?

Kafka distributes them as evenly as possible:
- Consumer A gets 2 partitions
- Consumer B gets 2 partitions
- Consumer C gets 1 partition
- Total: 2 + 2 + 1 = 5 partitions covered

### What is consumer rebalancing?

Imagine you have 3 consumers reading from 5 partitions. Suddenly one consumer crashes or a new one joins. Kafka needs to redistribute the partitions so everything is covered again. This redistribution is called **rebalancing**.

During a rebalance:
- All consumers stop processing
- Kafka reassigns partitions to the remaining consumers
- Consumers resume with their new assignments

This is necessary but disruptive — during the rebalance, no messages are being processed. Frequent rebalancing can hurt your throughput.

You can hook into this process with a `ConsumerRebalanceListener`:

```java
consumer.subscribe(List.of("orders"), new ConsumerRebalanceListener() {
    @Override
    public void onPartitionsRevoked(Collection<TopicPartition> partitions) {
        // Called before rebalance — save your state here
        for (TopicPartition partition : partitions) {
            long offset = consumer.position(partition);
            saveOffsetToExternalStore(partition, offset);
        }
    }

    @Override
    public void onPartitionsAssigned(Collection<TopicPartition> partitions) {
        // Called after rebalance — restore your state here
        for (TopicPartition partition : partitions) {
            long offset = loadOffsetFromExternalStore(partition);
            consumer.seek(partition, offset);
        }
    }
});
```

This is useful when you need to maintain state across rebalances — like saving your processing position to a database before giving up a partition, then loading it back when you get a new one.

### When does Kafka trigger a rebalance?

A rebalance happens whenever the group membership or assignment changes:
- A new consumer joins the group
- A consumer shuts down gracefully
- A consumer crashes (misses too many heartbeats)
- The number of partitions in a subscribed topic changes
- A consumer subscribes to different topics

### What is consumer lag?

Consumer lag is how far behind your consumer is. It's the difference between:
- The newest message in the partition (what the producer just wrote)
- The last message your consumer has processed

Think of it like reading a book: if the author has written to page 150 but you're only on page 100, your "lag" is 50 pages.

Here's how you check it:

```bash
kafka-consumer-groups.sh --bootstrap-server localhost:9092 \
  --group order-group \
  --describe

# Output: TOPIC  PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG
# orders  0          100            150             50
```

In this example, the consumer is at offset 100 but the latest message is at 150 — so the lag is 50.

### What causes consumer lag?

Consumer lag happens when producers are writing faster than consumers can read. Common reasons:
- **Slow processing**: Each message takes too long to handle (complex logic, slow database calls)
- **Not enough consumers**: You have 2 consumers trying to handle the work of 5
- **Consumer is stuck**: Deadlock, long GC pause, waiting on something
- **Network issues**: Slow connection to Kafka or to downstream systems

### How do you reduce consumer lag?

The goal is to process messages faster than they arrive:

1. **Add more consumers**: The most direct fix — more hands on deck (up to the number of partitions)
2. **Increase partitions**: More partitions means more consumers can work in parallel
3. **Speed up processing**: Optimize your code — batch database writes, reduce external calls, cache aggressively
4. **Process asynchronously**: Don't wait for each message to finish before starting the next
5. **Tune poll settings**: Get more messages per poll cycle

```java
// Optimize consumer for higher throughput
props.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 1000); // Get 1000 per poll
props.put(ConsumerConfig.MAX_POLL_INTERVAL_MS_CONFIG, 300000); // 5 minutes
```

### What is poll()?

`poll()` is the method your consumer calls to ask Kafka for new messages. It's the heartbeat of your consumer — you must call it regularly or Kafka thinks you're dead.

```java
ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
// Returns up to max.poll.records messages
// Blocks for up to the specified duration (waiting for messages to arrive)
```

Think of it like checking your mailbox — you go to the box, wait a bit to see if anything arrives, then take whatever's there back to process.

### What is max.poll.records?

This controls how many messages you get in a single `poll()` call:

```java
props.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 500);
// Default: 500
```

More records per poll means fewer network calls and better throughput, but it also means more memory usage and potentially longer processing time before the next poll.

### What is max.poll.interval.ms?

This is the maximum time you can go between `poll()` calls before Kafka considers you dead:

```java
props.put(ConsumerConfig.MAX_POLL_INTERVAL_MS_CONFIG, 300000); // 5 minutes
// Default: 300000 (5 min)
// If processing takes longer, increase this value
```

If you grab a batch of messages and your processing takes longer than this, Kafka thinks you've died and triggers a rebalance — even though you're still working. If your processing is slow, increase this setting to avoid unnecessary rebalances.

---

## Offset & Delivery Semantics

### What is a Kafka Offset?

An offset is just a number — a sequential ID for each message in a partition. The first message is offset 0, the next is 1, then 2, 3, and so on. It's like page numbers in a book.

Offsets are how consumers track their progress. If a consumer has committed offset 100, it means "I've processed everything up to and including message 100." If the consumer crashes and restarts, it picks up from offset 101.

### Where are consumer offsets stored?

Consumer offsets are stored in a special internal Kafka topic called `__consumer_offsets`. This is just a regular Kafka topic that Kafka uses behind the scenes to remember where each consumer group is.

### What is \_\_consumer_offsets?

`__consumer_offsets` is Kafka's internal topic for storing consumer group progress. It:

- Stores the last committed offset for each partition/group combination
- Is compacted — Kafka only keeps the latest offset for each key (old values are discarded)
- Has 50 partitions by default (to handle many consumer groups)
- Is critical for rebalancing — when a new consumer takes over a partition, it reads the last committed offset from here and knows where to start

### What is offset commit?

Offset commit is how a consumer tells Kafka "I've processed up to this point." It's like bookmarking a page in a book — you're saying "I've read everything up to here, don't make me re-read it."

When you commit offset 100, you're saying "messages 0-100 are done, I'll start from 101 next time."

### What is auto commit?

Auto commit is the "set it and forget it" approach. Kafka automatically commits offsets for you at regular intervals:

```java
props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, true); // Default
props.put(ConsumerConfig.AUTO_COMMIT_INTERVAL_MS_CONFIG, 5000); // Every 5 seconds
```

**The risk**: If your consumer crashes 3 seconds after the last auto-commit, those 3 seconds of messages were processed but never committed. When the consumer restarts, it re-reads them from the last committed offset — you get duplicates.

Auto commit is simple but gives you less control over when offsets are committed.

### What is manual offset commit?

Manual commit puts you in control. You decide exactly when to commit — typically right after successfully processing a batch of messages:

```java
// Synchronous commit (blocks until complete)
consumer.commitSync();

// Asynchronous commit (faster, with callback)
consumer.commitAsync((offsets, exception) -> {
    if (exception != null) {
        System.err.println("Commit failed: " + exception.getMessage());
    }
});

// Commit specific offsets
Map<TopicPartition, OffsetAndMetadata> offsets = new HashMap<>();
offsets.put(new TopicPartition("orders", 0), new OffsetAndMetadata(100L));
consumer.commitSync(offsets);
```

Manual commit is the recommended approach for most applications because it gives you exactly-once or at-least-once semantics (depending on when you commit).

### What happens if a consumer crashes before committing the offset?

Let's say your consumer processed messages up to offset 150 but only committed up to offset 100. If it crashes:

- Kafka detects the consumer is dead (missed heartbeats)
- The consumer is removed from the group
- Its partitions are reassigned to other consumers
- The new consumer starts from offset 101 (the last committed offset)
- **Result**: Messages 101-150 get processed again — duplicates

This is why committing after processing (not before) is important — you'd rather have duplicates than lose messages.

### What happens if a consumer commits before processing the message?

Let's say your consumer commits offset 150 but then crashes before actually processing messages 101-150:

- The committed offset is 150
- When the consumer restarts, it starts from offset 151
- **Result**: Messages 101-150 are lost — they were never processed

This is the opposite problem: you told Kafka you processed something you didn't. The solution is simple: **always commit after processing, never before**.

### What is at-most-once delivery?

At-most-once means: "I'll try to process this message, but if something goes wrong, I'm okay with losing it."

```java
// Commit first, then process
consumer.poll();
consumer.commitSync(); // Commit immediately
processMessages();     // If crash here, messages are lost
```

**The tradeoff**: No duplicates, but messages can be lost. This is acceptable for things like metrics or logging — losing a few data points doesn't matter. But for order processing or payments, losing messages is unacceptable.

### What is at-least-once delivery?

At-least-once means: "I will not lose this message, even if I have to process it twice."

```java
// Process first, then commit
consumer.poll();
processMessages();     // Process the messages
consumer.commitSync(); // Then commit
```

**The tradeoff**: No message loss, but you might get duplicates. If the consumer crashes after processing but before committing, those messages get reprocessed when the consumer restarts.

This is the most common delivery guarantee. It's safe (no data loss) but your processing needs to be idempotent — able to handle the same message multiple times without causing problems.

### What is exactly-once delivery?

Exactly-once means: "Every message is processed exactly one time — no more, no less." This is the holy grail but also the hardest to achieve.

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

Kafka achieves this through transactions — the offset commit and the output production happen atomically (both succeed or both fail). If anything goes wrong, the whole transaction is rolled back and retried.

### How do you prevent duplicate message processing?

Even with at-least-once delivery, you need to handle duplicates. Here are the common strategies:

1. **Idempotent producer**: Prevents duplicates at the broker level (messages with the same sequence number are discarded)

2. **Unique message IDs**: Each message has a unique ID. The consumer checks if it's already processed this ID:

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

3. **Idempotent processing**: Design your processing so that doing it twice has the same effect as doing it once. For example, "set status to PROCESSED" is idempotent — it doesn't matter how many times you run it.

4. **Kafka transactions**: Use exactly-once semantics with transactional producers and consumers.

---

## Replication & Fault Tolerance

### What is replication factor?

Replication factor is how many copies of each partition you keep. If replication factor is 3, every partition exists on 3 different brokers. Think of it like having 3 backup copies of an important file on 3 different hard drives.

```bash
# Create topic with replication factor 3
kafka-topics.sh --create \
  --bootstrap-server localhost:9092 \
  --topic orders \
  --partitions 3 \
  --replication-factor 3
```

### Why does Kafka replicate partitions?

Simple: so you don't lose data when machines die. If you have replication factor 3, you can lose 2 brokers and still have all your data on the remaining one. This gives you:
- **Fault tolerance**: The system keeps running even when brokers fail
- **High availability**: No downtime — if one broker dies, another takes over
- **Data durability**: Your data survives hardware failures

### What is a partition leader?

For each partition, one replica is the "leader" and the rest are "followers." The leader is the one that handles all reads and writes. When a producer sends a message, it goes to the leader. When a consumer reads, it reads from the leader.

The followers just copy what the leader does — they stay in sync so they can take over if needed.

### What is a follower replica?

A follower is a backup copy of the partition. It:
- Constantly copies new messages from the leader
- Doesn't serve client requests (producers and consumers talk to the leader)
- Is ready to become the leader if the current leader dies

### What is ISR (In-Sync Replica)?

ISR stands for "In-Sync Replica" — it's the set of replicas that are fully caught up with the leader. If a replica is lagging behind (maybe it was catching up after a restart), it's not in the ISR.

**Why it matters**: Only replicas in the ISR are eligible to become the new leader. This prevents data loss — you don't want to promote a replica that's missing the last 100 messages.

```bash
kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic orders
# Output includes: ISR: 0,1,2 (replica IDs that are in-sync)
```

### What happens when a Kafka broker goes down?

Let's say broker 2 dies. Here's what happens:
1. Kafka detects the broker is unreachable
2. For every partition where broker 2 was the leader, a new leader is elected from the ISR
3. The ISR shrinks (broker 2 is removed from it)
4. Producers and consumers are automatically redirected to the new leaders
5. The whole process is automatic — no manual intervention needed

### What happens when a partition leader goes down?

Same idea, just at the partition level:
1. Kafka notices the leader is gone
2. Picks a new leader from the ISR (the most up-to-date follower)
3. All requests automatically go to the new leader
4. Clients don't need to know — it's transparent

### What is min.insync.replicas?

This is a safety setting. It says: "Don't consider a write successful unless at least N replicas have acknowledged it."

```bash
# Configure at topic level
kafka-configs.sh --bootstrap-server localhost:9092 \
  --entity-type topics \
  --entity-name orders \
  --alter \
  --add-config min.insync.replicas=2
```

With replication factor 3 and `min.insync.replicas=2`, your data is written to at least 2 out of 3 replicas before the producer gets a success response. This means you can lose 1 broker without losing any acknowledged writes.

### What is an unclean leader election?

An unclean leader election happens when no in-sync replica is available, so Kafka is forced to promote an out-of-sync replica (one that's missing some messages).

**The risk**: Data loss. The new leader doesn't have all the messages the old leader had. Those messages are gone forever.

```java
// Prevent unclean leader election (recommended for critical data)
unclean.leader.election.enable=false
```

With this setting, if no in-sync replica is available, the partition just goes offline rather than risk data loss. Better to be unavailable than to lose data.

### How does Kafka prevent data loss?

Kafka uses multiple layers of protection:
1. **Replication**: Multiple copies of each partition
2. **ISR**: Only up-to-date replicas can become leaders
3. **min.insync.replicas**: Ensures writes go to enough replicas
4. **acks=all**: Producer waits for all in-sync replicas to acknowledge
5. **Unclean leader election disabled**: Prevents promoting behind replicas
6. **Idempotent producers**: Prevents duplicate writes from retries

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
