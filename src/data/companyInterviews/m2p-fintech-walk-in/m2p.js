// AUTO-GENERATED file — company-wise interview data.
// Source: M2P Fintech (walk_in) interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "m2p-fintech-walk-in",
  "name": "M2P Fintech (walk_in)",
  "interviews": [
    {
      "name": "M2P",
      "questionCount": 46,
      "rounds": [
        {
          "name": "First Round (Virtual - Technical Assessment)",
          "questions": [
            {
              "question": "What are the key differences between @Component, @Repository, and @Service annotations in Spring Boot?",
              "answer": "- @Component: Generic stereotype annotation for any Spring-managed component.\n- @Repository: Specialization of @Component used for DAO layer and exception translation.\n- @Service: Specialization of @Component used for service layer logic.",
              "code": null
            },
            {
              "question": "Explain the concept of dependency injection in Spring Boot.",
              "answer": "- Dependency Injection (DI) is a design pattern where Spring manages object dependencies.\n- It allows loose coupling by injecting dependencies at runtime.",
              "code": null
            },
            {
              "question": "How does Spring Boot handle exception handling? Explain with an example.",
              "answer": "- Spring Boot provides @ControllerAdvice and @ExceptionHandler to handle exceptions globally.\n- Example:",
              "code": {
                "language": "java",
                "content": "@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<String> handleNotFound(ResourceNotFoundException ex) {\n        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);\n    }\n}"
              }
            },
            {
              "question": "What is the difference between @RestController and @Controller in Spring Boot?",
              "answer": "- @Controller: Used for MVC applications; returns views.\n- @RestController: Combination of @Controller and @ResponseBody, used for REST APIs.",
              "code": null
            },
            {
              "question": "How do you configure and use Spring Boot caching with Redis?",
              "answer": "- Add Redis dependency in pom.xml.\n- Use @EnableCaching in the main class.\n- Configure Redis in application.properties.\n- Use @Cacheable, @CachePut, and @CacheEvict annotations.",
              "code": null
            },
            {
              "question": "Explain the internal working of Spring Boot’s @Transactional annotation.",
              "answer": "- Manages transactions declaratively.\n- Uses AOP proxies to begin, commit, or rollback transactions.\n- Works with Hibernate/JPA for database operations.",
              "code": null
            },
            {
              "question": "What is the role of Spring Boot Actuator? Name some of its important endpoints.",
              "answer": "- Provides production-ready features like health checks and metrics.\n- Important endpoints: /actuator/health, /actuator/info, /actuator/metrics",
              "code": null
            },
            {
              "question": "What is Spring Boot Starter? How does it help in application development?",
              "answer": "- Pre-configured dependency modules that simplify development.\n- Example: spring-boot-starter-web, spring-boot-starter-data-jpa.",
              "code": null
            },
            {
              "question": "How can you secure a Spring Boot REST API using JWT authentication?",
              "answer": "- Implement JWT filter.\n- Use OncePerRequestFilter to validate tokens.\n- Secure endpoints using @PreAuthorize.",
              "code": null
            },
            {
              "question": "Explain how Circuit Breaker works in Spring Boot.",
              "answer": "- Prevents system failures by breaking the connection if failures exceed a threshold.\n- Uses libraries like Resilience4j.",
              "code": null
            },
            {
              "question": "Write a Java program to check if a given string is a valid IPv4 address without using any inbuilt methods.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public class IPv4Validator {\n    public static boolean isValidIPv4(String ip) {\n        String[] parts = ip.split(\"\\\\.\");\n        if (parts.length != 4) return false;\n        for (String part : parts) {\n            try {\n                int num = Integer.parseInt(part);\n                if (num < 0 || num > 255) return false;\n            } catch (NumberFormatException e) {\n                return false;\n            }\n        }\n        return true;\n    }\n    public static void main(String[] args) {\n        System.out.println(isValidIPv4(\"192.168.1.1\"));\n    }\n}"
              }
            },
            {
              "question": "Given an array of integers, return the indices of two numbers that add up to a specific target.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) {\n            return new int[]{map.get(complement), i};\n        }\n        map.put(nums[i], i);\n    }\n    return new int[]{};\n}"
              }
            },
            {
              "question": "Write a program to reverse the words in a sentence while maintaining their order.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public String reverseWords(String s) {\n    String[] words = s.split(\" \");\n    StringBuilder result = new StringBuilder();\n    for (String word : words) {\n        result.append(new StringBuilder(word).reverse()).append(\" \");\n    }\n    return result.toString().trim();\n}"
              }
            },
            {
              "question": "Implement a function to check if a string is a palindrome using recursion.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public boolean isPalindrome(String s) {\n    return isPalindromeHelper(s, 0, s.length() - 1);\n}\nprivate boolean isPalindromeHelper(String s, int left, int right) {\n    if (left >= right) return true;\n    return (s.charAt(left) == s.charAt(right)) && isPalindromeHelper(s, left + 1, right - 1);\n}"
              }
            },
            {
              "question": "Implement a custom functional interface and demonstrate its use with a lambda expression.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\ninterface MathOperation {\n    int operate(int a, int b);\n}\npublic class LambdaExample {\n    public static void main(String[] args) {\n        MathOperation sum = (a, b) -> a + b;\n        System.out.println(sum.operate(5, 3));\n    }\n}"
              }
            },
            {
              "question": "Find the first non-repeated character in a given string using Java Streams.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public Character firstNonRepeated(String s) {\n    Map<Character, Long> charCount = s.chars().mapToObj(c -> (char) c)\n            .collect(Collectors.groupingBy(Function.identity(), LinkedHashMap::new, Collectors.counting()));\n    return charCount.entrySet().stream()\n            .filter(entry -> entry.getValue() == 1)\n            .map(Map.Entry::getKey)\n            .findFirst()\n            .orElse(null);\n}"
              }
            },
            {
              "question": "Implement a Least Recently Used (LRU) Cache in Java using LinkedHashMap.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "class LRUCache<K, V> extends LinkedHashMap<K, V> {\n    private final int capacity;\n    LRUCache(int capacity) {\n        super(capacity, 0.75f, true);\n        this.capacity = capacity;\n    }\n    @Override\n    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {\n        return size() > capacity;\n    }\n}"
              }
            },
            {
              "question": "Given an array of numbers, find all unique triplets whose sum equals zero.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "// Code for 3Sum problem"
              }
            },
            {
              "question": "Implement a thread-safe Singleton class in Java.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public class Singleton {\n    private static volatile Singleton instance;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if (instance == null) {\n            synchronized (Singleton.class) {\n                if (instance == null) {\n                    instance = new Singleton();\n                }\n            }\n        }\n        return instance;\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Second Round (Walk-In - L1 Technical Interview)",
          "questions": [
            {
              "question": "Count of three-character palindromes in a string.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.HashSet;\nimport java.util.Set;\n\npublic class UniqueThreeCharPalindromes {\n    public static int countPalindromicSubsequences(String s) {\n        Set<String> uniquePalindromes = new HashSet<>();\n\n        for (char c = 'a'; c <= 'z'; c++) {\n            int first = s.indexOf(c);\n            int last = s.lastIndexOf(c);\n\n            if (first != -1 && last != -1 && last - first > 1) {\n                for (int i = first + 1; i < last; i++) {\n                    uniquePalindromes.add(\"\" + s.charAt(first) + s.charAt(i) + s.charAt(last));\n                }\n            }\n        }\n        return uniquePalindromes.size();\n    }\n\n    public static void main(String[] args) {\n        System.out.println(countPalindromicSubsequences(\"aabca\")); // Output: 3\n        System.out.println(countPalindromicSubsequences(\"adc\"));   // Output: 0\n        System.out.println(countPalindromicSubsequences(\"bbcbaba\")); // Output: 4\n    }\n}"
              }
            },
            {
              "question": "What is a circuit breaker in microservices?",
              "answer": "Answer: A circuit breaker in microservices is a design pattern used to prevent a system from making repeated requests to a failing service. It detects failures and stops sending requests to prevent cascading failures. Once the service recovers, it resumes operations.",
              "code": null
            },
            {
              "question": "How does Netflix Hystrix work in Spring Boot?",
              "answer": "Answer: Netflix Hystrix provides a circuit breaker mechanism to handle failures in microservices. It isolates failing components and provides fallbacks to prevent system-wide failures. In Spring Boot, it is implemented using @HystrixCommand to wrap service calls with circuit breaker functionality.",
              "code": null
            },
            {
              "question": "What are the different states of a circuit breaker?",
              "answer": "",
              "code": null
            },
            {
              "question": "Closed",
              "answer": "- Requests flow normally. If failures increase beyond a threshold, it transitions to Open.",
              "code": null
            },
            {
              "question": "Open",
              "answer": "- Requests are blocked, and fallback mechanisms take over.",
              "code": null
            },
            {
              "question": "Half-Open",
              "answer": "- A few requests are allowed to test if the service has recovered. If successful, it moves back to Closed; otherwise, it stays Open.",
              "code": null
            },
            {
              "question": "Explain API Gateway and its role in microservices.",
              "answer": "Answer: An API Gateway acts as an entry point for microservices, handling authentication, request routing, rate limiting, and load balancing. It simplifies communication between clients and backend services by consolidating multiple APIs into a single endpoint.",
              "code": null
            },
            {
              "question": "What is service registry and discovery in microservices?",
              "answer": "Answer: Service registry and discovery help microservices locate and communicate with each other dynamically. A service registry (e.g., Eureka) maintains a list of available services, and discovery mechanisms allow services to register and find each other without hardcoding URLs.",
              "code": null
            },
            {
              "question": "How does load balancing work in microservices?",
              "answer": "Answer: Load balancing distributes incoming requests across multiple instances of a service to ensure high availability and scalability. It can be:",
              "code": null
            },
            {
              "question": "Client-Side Load Balancing",
              "answer": "(e.g., Ribbon) - Clients choose a service instance from a list.",
              "code": null
            },
            {
              "question": "Server-Side Load Balancing",
              "answer": "(e.g., Nginx, HAProxy) - A central load balancer directs traffic.",
              "code": null
            },
            {
              "question": "Service Mesh Load Balancing",
              "answer": "(e.g., Istio) - Traffic is managed at the service level.",
              "code": null
            }
          ]
        },
        {
          "name": "Third Round (Walk-In - L2 Technical Interview)",
          "questions": [
            {
              "question": "What is the difference between ArrayList and LinkedList?",
              "answer": "| Feature       | ArrayList | LinkedList |\n|--------------|-----------|------------|\n| Implementation | Uses a dynamic array | Uses a doubly linked list |\n| Insertion/Deletion | Slow (O(n) in worst case) due to shifting elements | Fast (O(1) at head/tail, O(n) at middle) |\n| Access Time | Fast (O(1) for get) | Slow (O(n) for get) |\n| Memory Usage | Less overhead, stores only data | More overhead, stores data and pointers |",
              "code": null
            },
            {
              "question": "How does HashMap handle collisions internally?",
              "answer": "Answer: HashMap in Java handles collisions using chaining (linked list or tree nodes).\n- Each bucket in HashMap is a linked list (before Java 8) or a balanced tree (after Java 8, when size > 8).\n- If two keys produce the same hash, they are stored in the same bucket.\n- When a bucket’s size exceeds a threshold, Java 8 converts it into a Red-Black Tree for faster lookups.",
              "code": null
            },
            {
              "question": "How do you make a collection thread-safe in Java?",
              "answer": "Answer: Collections can be made thread-safe using:",
              "code": null
            },
            {
              "question": "Synchronized Collections",
              "answer": "- Collections.synchronizedList(new ArrayList<>())",
              "code": null
            },
            {
              "question": "Concurrent Collections",
              "answer": "- CopyOnWriteArrayList, ConcurrentHashMap",
              "code": null
            },
            {
              "question": "Explicit Synchronization",
              "answer": "- Using synchronized blocks",
              "code": null
            },
            {
              "question": "Implement ArrayList using an array with add and remove methods that automatically resize when needed.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\n\nclass GenericArrayList<T> {\n    private Object[] arr;\n    private int size;\n    private int capacity;\n\n    public GenericArrayList() {\n        capacity = 10;\n        arr = new Object[capacity];\n        size = 0;\n    }\n\n    public void add(T value) {\n        if (size == capacity) {\n            resize();\n        }\n        arr[size++] = value;\n    }\n\n    private void resize() {\n        capacity *= 2;\n        arr = Arrays.copyOf(arr, capacity);\n    }\n\n    @SuppressWarnings(\"unchecked\")\n    public T get(int index) {\n        if (index < 0 || index >= size) {\n            throw new IndexOutOfBoundsException(\"Invalid index\");\n        }\n        return (T) arr[index];\n    }\n\n    public void remove(int index) {\n        if (index < 0 || index >= size) {\n            throw new IndexOutOfBoundsException(\"Invalid index\");\n        }\n        for (int i = index; i < size - 1; i++) {\n            arr[i] = arr[i + 1];\n        }\n        size--;\n    }\n\n    public int size() {\n        return size;\n    }\n\n    public boolean isEmpty() {\n        return size == 0;\n    }\n\n    public static void main(String[] args) {\n        GenericArrayList<String> list = new GenericArrayList<>();\n        list.add(\"Apple\");\n        list.add(\"Banana\");\n        list.add(\"Cherry\");\n\n        System.out.println(list.get(1)); // Output: Banana\n\n        list.remove(1);\n        System.out.println(list.get(1)); // Output: Cherry\n    }\n}"
              }
            },
            {
              "question": "Write an SQL query to find the 3rd highest salary from an Employee table.",
              "answer": "OR",
              "code": {
                "language": "sql",
                "content": "SELECT salary \nFROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk \n      FROM Employee) temp \nWHERE rnk = 3;"
              }
            },
            {
              "question": "How do you handle distributed transactions in microservices?",
              "answer": "Answer: Distributed transactions can be handled using:",
              "code": null
            },
            {
              "question": "Two-Phase Commit (2PC):",
              "answer": "Coordinating a commit across multiple services.",
              "code": null
            },
            {
              "question": "Saga Pattern:",
              "answer": "Choreography: Each service triggers the next service in the transaction.\nOrchestration: A central orchestrator handles the transaction flow.",
              "code": null
            },
            {
              "question": "Event-Driven Approach:",
              "answer": "Using Kafka or RabbitMQ for event-based transactions.",
              "code": null
            },
            {
              "question": "Compensating Transactions:",
              "answer": "Implementing rollback logic when failure occurs.",
              "code": null
            }
          ]
        },
        {
          "name": "Fourth Round (Walk-In - L3 System Design Interview)",
          "questions": [
            {
              "question": "How would you design a scalable hotel search engine?",
              "answer": "- Architecture: Use microservices with event-driven architecture.\n- Database: Use NoSQL (MongoDB, Elasticsearch) for fast queries, SQL (PostgreSQL, MySQL) for structured data.\n- Search Optimization: Use Elasticsearch for indexing.\n- Load Balancing: Deploy across multiple regions with CDN caching.\n- API Gateway: Use GraphQL or REST APIs with rate-limiting.\n- Caching: Implement Redis or Memcached for fast query results.\n- Data Storage: Store metadata in S3 or GCS.\n- Message Queue: Use Kafka or RabbitMQ for async tasks like notifications.\n- Scalability: Use Kubernetes or Docker for containerization and auto-scaling.\n2. What are the key components needed to optimize search results in a hotel search system?\n- Indexing: Store structured hotel data in Elasticsearch.\n- Ranking Algorithm: Use Relevance Score (TF-IDF) or Machine Learning (ML) models.\n- Filters & Sorting: Provide sorting by price, rating, distance.\n- Geo-Spatial Search: Optimize queries using Geo-indexing.\n- Personalization: Recommend hotels based on user history and preferences.\n- Auto-Suggestions: Use n-grams or trie-based search suggestions.\n3. How does indexing help in improving search performance?\n- Faster Lookups: Indexing reduces lookup time from O(n) → O(log n) or O(1) (hash indexing).\n- Better Query Execution: Uses B-Trees, Hash Indexing, Full-Text Search.\n- Optimized Sorting & Filtering: Queries run on precomputed indexes instead of raw data scans.\n- Efficient Range Queries: Useful for date range searches (e.g., hotel availability).\n- Inverted Index: Used in Elasticsearch for fast text-based queries.\n4. What techniques would you use to handle high traffic in a hotel search engine?\n- Load Balancing: Use Nginx, HAProxy, or AWS ALB.\n- Database Optimization: Use read replicas, sharding, and caching.\n- CDN: Serve static content via Cloudflare, AWS CloudFront.\n- Asynchronous Processing: Use Kafka, RabbitMQ for background tasks.\n- Horizontal Scaling: Scale by adding more servers (Kubernetes, Auto Scaling Groups).\n5. How can Redis be used to improve search performance?\n- Caching: Store frequent search results.\n- Session Management: Manage user sessions for faster response.\n- Leaderboard & Ranking: Store hotel popularity ranking.\n- Rate Limiting: Prevent abuse of APIs.\n- Geo-Indexing: Use Redis GeoSpatial Indexing for location-based searches.\n6. How would you design the database schema for a hotel search system?\nSQL Schema (Relational - PostgreSQL/MySQL)\nNoSQL Schema (Elasticsearch, MongoDB)\n7. How do you handle real-time availability and pricing updates in the system?\n- Event-Driven Architecture: Use Kafka or RabbitMQ to broadcast updates.\n- Database Triggers: Sync price updates with MySQL/PostgreSQL triggers.\n- Distributed Caching: Use Redis or Memcached to update price cache instantly.\n- WebSockets: For real-time UI updates when prices change.\n8. What caching strategies would you use to optimize search queries?\n- Write-Through Cache: Updates cache immediately when DB changes.\n- Read-Through Cache: Data is fetched from DB only when needed.\n- Time-Based Expiry: Set TTL (Time-To-Live) for hotel pricing cache.\n- LRU (Least Recently Used): Removes oldest cached items to free memory.\n- Cache Partitioning: Separate popular vs less popular queries.\n9. What is sharding, and how can it be implemented in a hotel search system?\n- Sharding: is splitting database data across multiple servers to improve performance.\n- Implementation\n- Range-Based Sharding: Shard 1 → Hotels A-M, Shard 2 → Hotels N-Z.\n- Geo-Based Sharding: Shard 1 → USA, Shard 2 → Europe.\n- Hash-Based Sharding: Hashing hotel_id % number_of_shards.\n- Customer-Based Sharding: Shard 1 → Premium Users, Shard 2 → Regular Users.\n10. What load-balancing strategies would you use for the hotel search engine?\n- Round Robin Load Balancer: Distributes requests evenly across servers.\n- Least Connections Algorithm: Routes traffic to the least busy server.\n- GeoDNS Load Balancing: Directs users to nearest server location.\n- Weighted Load Balancing: Allocates more traffic to powerful servers.\n- Auto Scaling: Adjusts server count dynamically using Kubernetes.",
              "code": {
                "language": "json",
                "content": "{\n  \"hotel_id\": \"123\",\n  \"name\": \"Grand Palace\",\n  \"location\": { \"lat\": 40.7128, \"lon\": -74.0060 },\n  \"city\": \"New York\",\n  \"rating\": 4.5,\n  \"price\": 120,\n  \"amenities\": [\"WiFi\", \"Pool\", \"Gym\"],\n  \"available_rooms\": 10\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 46
};
