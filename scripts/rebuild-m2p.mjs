// Rebuild the M2P Fintech (walk_in) interview data with clean round structure.
//
// Run:  node scripts/rebuild-m2p.mjs
//
// Writes:
//   src/data/companyInterviews/m2p-fintech-walk-in/m2p.json  (source snapshot)
//   src/data/companyInterviews/m2p-fintech-walk-in/m2p.js    (app-facing data)
//
// Round order (48 questions):
//   1. First Round  - Technical Assessment        (19)
//   2. Second Round - L1 Technical Interview      (7)
//   3. Third Round  - L2 Technical Interview      (6)
//   4. Fourth Round - L3 System Design Interview  (10)
//   5. HR Round                                   (6)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "companyInterviews",
  "m2p-fintech-walk-in",
);

const q = (question, answer, code = null) => ({ question, answer, code });
const java = (content) => ({ language: "java", content });
const sql = (content) => ({ language: "sql", content });
const xml = (content) => ({ language: "xml", content });
const props = (content) => ({ language: "properties", content });

// ---------------- First Round - Technical Assessment (19) ----------------
const firstRound = [
  q(
    "What are the key differences between @Component, @Repository, and @Service annotations in Spring Boot?",
    "@Component: Generic stereotype annotation for any Spring-managed component. @Repository: Specialization of @Component used for DAO layer and exception translation. @Service: Specialization of @Component used for service layer logic.",
  ),
  q(
    "Explain the concept of dependency injection in Spring Boot.",
    "Dependency Injection (DI) is a design pattern where Spring manages object dependencies. It allows loose coupling by injecting dependencies at runtime. Types: Constructor Injection, Setter Injection, Field Injection.",
    java("@Service\npublic class UserService {\n    @Autowired private UserRepository repository;\n}"),
  ),
  q(
    "How does Spring Boot handle exception handling? Explain with an example.",
    "Spring Boot provides @ControllerAdvice and @ExceptionHandler to handle exceptions globally.",
    java("@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<String> handleNotFound(ResourceNotFoundException ex) {\n        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);\n    }\n}"),
  ),
  q(
    "What is the difference between @RestController and @Controller in Spring Boot?",
    "@Controller: Used for MVC applications, returns views. @RestController: Combination of @Controller and @ResponseBody, used for REST APIs.",
  ),
  q(
    "How do you configure and use Spring Boot caching with Redis?",
    "1) Add Redis dependency in pom.xml. 2) Use @EnableCaching in main class. 3) Configure Redis in application.properties. 4) Use @Cacheable, @CachePut, and @CacheEvict annotations.",
    java("@Cacheable(value = \"users\", key = \"#id\")\npublic User getUser(Long id) { return repository.findById(id).orElse(null); }"),
  ),
  q(
    "Explain the internal working of Spring Boot's @Transactional annotation.",
    "Manages transactions declaratively. Uses AOP proxies to begin, commit, or rollback transactions. Works with Hibernate/JPA for database operations.",
    java("@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.READ_COMMITTED)\npublic void transferMoney(Account from, Account to, double amount) { }"),
  ),
  q(
    "What is the role of Spring Boot Actuator? Name some of its important endpoints.",
    "Provides production-ready features like health checks and metrics. Important endpoints: /actuator/health, /actuator/info, /actuator/metrics, /actuator/prometheus.",
    props("management.endpoints.web.exposure.include=health,info,metrics"),
  ),
  q(
    "What is Spring Boot Starter? How does it help in application development?",
    "Pre-configured dependency modules that simplify development. Example: spring-boot-starter-web, spring-boot-starter-data-jpa. Reduces boilerplate configuration.",
    xml("<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>"),
  ),
  q(
    "How can you secure a Spring Boot REST API using JWT authentication?",
    "1) Implement JWT filter extending OncePerRequestFilter. 2) Validate tokens and extract user info. 3) Secure endpoints using @PreAuthorize. 4) Configure SecurityConfig with JWT filter.",
    java("@Component\npublic class JwtFilter extends OncePerRequestFilter {\n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) {\n        String token = extractToken(request);\n        if (token != null && validateToken(token)) {\n            SecurityContextHolder.getContext().setAuthentication(getAuthentication(token));\n        }\n        chain.doFilter(request, response);\n    }\n}"),
  ),
  q(
    "Explain how Circuit Breaker works in Spring Boot.",
    "Prevents system failures by breaking the connection if failures exceed a threshold. Uses libraries like Resilience4j or Hystrix. Has three states: Closed, Open, Half-Open.",
    java("@CircuitBreaker(name = \"paymentService\", fallbackMethod = \"paymentFallback\")\npublic PaymentResult processPayment(PaymentRequest request) { }"),
  ),
  q(
    "Write a Java program to check if a given string is a valid IPv4 address without using any inbuilt methods.",
    "Split by '.', check 4 parts, validate each part between 0-255.",
    java(`public class IPv4Validator {
    public static boolean isValidIPv4(String ip) {
        String[] parts = ip.split("\\\\.");
        if (parts.length != 4) return false;
        for (String part : parts) {
            try {
                int num = Integer.parseInt(part);
                if (num < 0 || num > 255) return false;
            } catch (NumberFormatException e) {
                return false;
            }
        }
        return true;
    }
}`),
  ),
  q(
    "Given an array of integers, return the indices of two numbers that add up to a specific target.",
    "Use HashMap to store complement and index for O(n) solution.",
    java(`public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }
        map.put(nums[i], i);
    }
    return new int[]{};
}`),
  ),
  q(
    "Write a program to reverse the words in a sentence while maintaining their order.",
    "Split by space, reverse each word individually, join back.",
    java(`public String reverseWords(String s) {
    String[] words = s.split(" ");
    StringBuilder result = new StringBuilder();
    for (String word : words) {
        result.append(new StringBuilder(word).reverse()).append(" ");
    }
    return result.toString().trim();
}`),
  ),
  q(
    "Implement a function to check if a string is a palindrome using recursion.",
    "Compare first and last characters, recursively check inner substring.",
    java(`public boolean isPalindrome(String s) {
    return isPalindromeHelper(s, 0, s.length() - 1);
}
private boolean isPalindromeHelper(String s, int left, int right) {
    if (left >= right) return true;
    return (s.charAt(left) == s.charAt(right)) && isPalindromeHelper(s, left + 1, right - 1);
}`),
  ),
  q(
    "Implement a custom functional interface and demonstrate its use with a lambda expression.",
    "Create interface with @FunctionalInterface, implement using lambda.",
    java(`@FunctionalInterface
interface MathOperation { int operate(int a, int b); }
public class LambdaExample {
    public static void main(String[] args) {
        MathOperation sum = (a, b) -> a + b;
        System.out.println(sum.operate(5, 3));
    }
}`),
  ),
  q(
    "Find the first non-repeated character in a given string using Java Streams.",
    "Use groupingBy with LinkedHashMap to maintain order, filter count 1.",
    java(`public Character firstNonRepeated(String s) {
    Map<Character, Long> charCount = s.chars()
        .mapToObj(c -> (char) c)
        .collect(Collectors.groupingBy(Function.identity(), LinkedHashMap::new, Collectors.counting()));
    return charCount.entrySet().stream()
        .filter(entry -> entry.getValue() == 1)
        .map(Map.Entry::getKey)
        .findFirst()
        .orElse(null);
}`),
  ),
  q(
    "Implement a Least Recently Used (LRU) Cache in Java using LinkedHashMap.",
    "Extend LinkedHashMap with accessOrder=true and override removeEldestEntry.",
    java(`class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int capacity;
    LRUCache(int capacity) {
        super(capacity, 0.75f, true);
        this.capacity = capacity;
    }
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }
}`),
  ),
  q(
    "Given an array of numbers, find all unique triplets whose sum equals zero.",
    "Sort array, use two-pointer approach for each element.",
    java(`public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> result = new ArrayList<>();
    for (int i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        int left = i + 1, right = nums.length - 1;
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                while (left < right && nums[left] == nums[left+1]) left++;
                while (left < right && nums[right] == nums[right-1]) right--;
                left++; right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}`),
  ),
  q(
    "Implement a thread-safe Singleton class in Java.",
    "Use double-checked locking with volatile keyword.",
    java(`public class Singleton {
    private static volatile Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}`),
  ),
];

// ---------------- Second Round - L1 Technical Interview (7) ----------------
const secondRound = [
  q(
    "Count of three-character palindromes in a string.",
    "Find unique 3-character palindromes where first and last characters match. Examples: \"aabca\" → 3, \"adc\" → 0, \"bbcbaba\" → 4.",
    java(`public class UniqueThreeCharPalindromes {
    public static int countPalindromicSubsequences(String s) {
        Set<String> uniquePalindromes = new HashSet<>();
        for (char c = 'a'; c <= 'z'; c++) {
            int first = s.indexOf(c);
            int last = s.lastIndexOf(c);
            if (first != -1 && last != -1 && last - first > 1) {
                for (int i = first + 1; i < last; i++) {
                    uniquePalindromes.add("" + s.charAt(first) + s.charAt(i) + s.charAt(last));
                }
            }
        }
        return uniquePalindromes.size();
    }
}`),
  ),
  q(
    "What is a circuit breaker in microservices?",
    "A circuit breaker in microservices is a design pattern used to prevent a system from making repeated requests to a failing service. It detects failures and stops sending requests to prevent cascading failures. Once the service recovers, it resumes operations.",
  ),
  q(
    "How does Netflix Hystrix work in Spring Boot?",
    "Netflix Hystrix provides a circuit breaker mechanism to handle failures in microservices. It isolates failing components and provides fallbacks to prevent system-wide failures. In Spring Boot, it is implemented using @HystrixCommand to wrap service calls with circuit breaker functionality.",
    java("@HystrixCommand(fallbackMethod = \"fallbackMethod\")\npublic String callService() { }"),
  ),
  q(
    "What are the different states of a circuit breaker?",
    "1) Closed - Requests flow normally. If failures increase beyond threshold, transitions to Open. 2) Open - Requests are blocked, fallback mechanisms take over. 3) Half-Open - Few requests allowed to test if service recovered. If successful, moves back to Closed; otherwise, stays Open.",
  ),
  q(
    "Explain API Gateway and its role in microservices.",
    "An API Gateway acts as an entry point for microservices, handling authentication, request routing, rate limiting, and load balancing. It simplifies communication between clients and backend services by consolidating multiple APIs into a single endpoint.",
  ),
  q(
    "What is service registry and discovery in microservices?",
    "Service registry and discovery help microservices locate and communicate with each other dynamically. A service registry (e.g., Eureka) maintains a list of available services, and discovery mechanisms allow services to register and find each other without hardcoding URLs.",
    java("@EnableDiscoveryClient\n@SpringBootApplication\npublic class UserService { }"),
  ),
  q(
    "How does load balancing work in microservices?",
    "Load balancing distributes incoming requests across multiple service instances. Types: 1) Client-Side Load Balancing (Ribbon) - Clients choose instance from list. 2) Server-Side Load Balancing (Nginx, HAProxy) - Central load balancer directs traffic. 3) Service Mesh Load Balancing (Istio) - Managed at service level.",
  ),
];

// ---------------- Third Round - L2 Technical Interview (6) ----------------
const thirdRound = [
  q(
    "What is the difference between ArrayList and LinkedList?",
    "ArrayList: Dynamic array, fast access O(1), slow insertion/deletion O(n). LinkedList: Doubly linked list, slow access O(n), fast insertion/deletion O(1) at head/tail.",
  ),
  q(
    "How does HashMap handle collisions internally?",
    "HashMap handles collisions using chaining (linked list or tree nodes). Each bucket is linked list (before Java 8) or balanced tree (after Java 8, when size > 8). When bucket size exceeds threshold, converts to Red-Black Tree for faster lookups.",
  ),
  q(
    "How do you make a collection thread-safe in Java?",
    "1) Synchronized Collections - Collections.synchronizedList(new ArrayList<>()). 2) Concurrent Collections - CopyOnWriteArrayList, ConcurrentHashMap. 3) Explicit Synchronization - Using synchronized blocks.",
    java("List<String> syncList = Collections.synchronizedList(new ArrayList<>());\nConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();"),
  ),
  q(
    "Implement ArrayList using an array with add and remove methods that automatically resize when needed.",
    "Create custom ArrayList with array backing, resizing when capacity exceeded.",
    java(`class GenericArrayList<T> {
    private Object[] arr;
    private int size;
    private int capacity;
    public GenericArrayList() { capacity = 10; arr = new Object[capacity]; size = 0; }
    public void add(T value) {
        if (size == capacity) { capacity *= 2; arr = Arrays.copyOf(arr, capacity); }
        arr[size++] = value;
    }
    @SuppressWarnings("unchecked")
    public T get(int index) { return (T) arr[index]; }
    public void remove(int index) {
        for (int i = index; i < size - 1; i++) { arr[i] = arr[i + 1]; }
        size--;
    }
}`),
  ),
  q(
    "Write an SQL query to find the 3rd highest salary from an Employee table.",
    "Use DISTINCT with ORDER BY and LIMIT OFFSET, or DENSE_RANK window function.",
    sql(`SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET 2;
-- OR
SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM Employee) temp WHERE rnk = 3;`),
  ),
  q(
    "How do you handle distributed transactions in microservices?",
    "1) Two-Phase Commit (2PC): Coordinating commit across multiple services. 2) Saga Pattern: Choreography (services trigger each other) or Orchestration (central orchestrator). 3) Event-Driven: Using Kafka/RabbitMQ. 4) Compensating Transactions: Rollback logic on failure.",
  ),
];

// ---------------- Fourth Round - L3 System Design Interview (10) ----------------
const fourthRound = [
  q(
    "How would you design a scalable hotel search engine?",
    "Architecture: Microservices with event-driven architecture. Database: NoSQL (MongoDB, Elasticsearch) for fast queries, SQL for structured data. Search: Elasticsearch indexing. Load Balancing: Multi-region with CDN caching. API Gateway: GraphQL/REST with rate-limiting. Caching: Redis/Memcached. Data Storage: S3/GCS. Message Queue: Kafka/RabbitMQ. Scalability: Kubernetes/Docker for containerization and auto-scaling.",
  ),
  q(
    "What are the key components needed to optimize search results in a hotel search system?",
    "1) Indexing: Structured hotel data in Elasticsearch. 2) Ranking Algorithm: Relevance Score (TF-IDF) or Machine Learning models. 3) Filters & Sorting: By price, rating, distance. 4) Geo-Spatial Search: Geo-indexing for location queries. 5) Personalization: Recommendations based on user history. 6) Auto-Suggestions: n-grams or trie-based search.",
  ),
  q(
    "How does indexing help in improving search performance?",
    "1) Faster Lookups: Reduces lookup time from O(n) to O(log n) or O(1). 2) Better Query Execution: Uses B-Trees, Hash Indexing, Full-Text Search. 3) Optimized Sorting & Filtering: Queries run on precomputed indexes. 4) Efficient Range Queries: For date range searches. 5) Inverted Index: Used in Elasticsearch for fast text-based queries.",
  ),
  q(
    "What techniques would you use to handle high traffic in a hotel search engine?",
    "1) Load Balancing: Nginx, HAProxy, AWS ALB. 2) Database Optimization: Read replicas, sharding, caching. 3) CDN: Cloudflare, AWS CloudFront for static content. 4) Asynchronous Processing: Kafka, RabbitMQ for background tasks. 5) Horizontal Scaling: Kubernetes, Auto Scaling Groups.",
  ),
  q(
    "How can Redis be used to improve search performance?",
    "1) Caching: Store frequent search results. 2) Session Management: Manage user sessions. 3) Leaderboard & Ranking: Store hotel popularity ranking. 4) Rate Limiting: Prevent API abuse. 5) Geo-Indexing: Redis GeoSpatial Indexing for location-based searches.",
    java('redisTemplate.opsForGeo().geoAdd("hotels", new Point(lat, lon), hotelId);'),
  ),
  q(
    "How would you design the database schema for a hotel search system?",
    "SQL Schema: Hotels table with hotel_id, name, address, city, country, latitude, longitude, rating, price, available_rooms. Bookings table with booking_id, user_id, hotel_id, checkin_date, checkout_date, total_price. NoSQL Schema: Elasticsearch/MongoDB with hotel_id, name, location, city, rating, price, amenities, available_rooms.",
    sql(`CREATE TABLE hotels (
    hotel_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    address TEXT,
    city VARCHAR(100),
    country VARCHAR(100),
    latitude DECIMAL(10,6),
    longitude DECIMAL(10,6),
    rating DECIMAL(2,1),
    price DECIMAL(10,2),
    available_rooms INT
);`),
  ),
  q(
    "How do you handle real-time availability and pricing updates in the system?",
    "1) Event-Driven Architecture: Use Kafka/RabbitMQ to broadcast updates. 2) Database Triggers: Sync price updates with MySQL/PostgreSQL triggers. 3) Distributed Caching: Redis/Memcached to update price cache instantly. 4) WebSockets: For real-time UI updates when prices change.",
  ),
  q(
    "What caching strategies would you use to optimize search queries?",
    "1) Write-Through Cache: Updates cache immediately when DB changes. 2) Read-Through Cache: Data fetched from DB only when needed. 3) Time-Based Expiry: Set TTL for hotel pricing cache. 4) LRU (Least Recently Used): Removes oldest cached items. 5) Cache Partitioning: Separate popular vs less popular queries.",
  ),
  q(
    "What is sharding, and how can it be implemented in a hotel search system?",
    "Sharding is splitting database data across multiple servers to improve performance. Implementation: 1) Range-Based Sharding: Hotels A-M, Hotels N-Z. 2) Geo-Based Sharding: USA, Europe. 3) Hash-Based Sharding: hotel_id % number_of_shards. 4) Customer-Based Sharding: Premium Users, Regular Users.",
  ),
  q(
    "What load-balancing strategies would you use for the hotel search engine?",
    "1) Round Robin: Distributes requests evenly. 2) Least Connections: Routes to least busy server. 3) GeoDNS: Directs users to nearest server. 4) Weighted Load Balancing: Allocates more traffic to powerful servers. 5) Auto Scaling: Adjusts server count dynamically using Kubernetes.",
  ),
];

// ---------------- HR Round - Behavioral (6) ----------------
const hrRound = [
  q(
    "Tell me about yourself.",
    "I am [Your Name] with 3 years of experience in Java Full Stack Development. I specialize in Spring Boot, Microservices, Hibernate, and ReactJS. I have worked on customer registration systems and transaction data handling. I am passionate about building scalable applications and learning new technologies.",
  ),
  q(
    "Why do you want to join M2P?",
    "M2P has a strong reputation in fintech solutions. I'm excited about the opportunity to work on challenging financial projects, learn new technologies, and contribute to the company's growth.",
  ),
  q(
    "What are your salary expectations?",
    "Based on my experience and market standards, I am looking for a competitive package. I'm flexible and happy to discuss further based on the role and responsibilities.",
  ),
  q(
    "Where do you see yourself in 5 years?",
    "I see myself as a technical lead, contributing to architecture decisions and mentoring junior developers. I want to continue growing my technical skills and take on more responsibilities.",
  ),
  q(
    "What are your strengths and weaknesses?",
    "Strengths: Quick learner, problem-solving skills, strong technical foundation, good team player. Weakness: Sometimes focus too much on perfection, working on delegating tasks better.",
  ),
  q(
    "Why are you looking for a job change?",
    "Looking for better growth opportunities, challenging projects, and a chance to work with new technologies. M2P offers the perfect environment for professional growth.",
  ),
];

// ---------------- Assemble & write ----------------
const rounds = [
  { name: "First Round - Technical Assessment", category: "Spring Boot & Core Java", questions: firstRound },
  { name: "Second Round - L1 Technical Interview", category: "Spring Batch & Microservices", questions: secondRound },
  { name: "Third Round - L2 Technical Interview", category: "Data Structures & Advanced Java", questions: thirdRound },
  { name: "Fourth Round - L3 System Design Interview", category: "System Design", questions: fourthRound },
  { name: "HR Round", category: "Behavioral", questions: hrRound },
];

const questionCount = rounds.reduce((sum, r) => sum + r.questions.length, 0);

const company = {
  id: "m2p-fintech-walk-in",
  name: "M2P Fintech (walk_in)",
  interviews: [
    {
      name: "M2P",
      questionCount,
      rounds,
    },
  ],
  questionCount,
};

const banner =
  "// AUTO-GENERATED file — company-wise interview data.\n" +
  "// Source: M2P Fintech (walk_in) interview document(s).\n" +
  "// Regenerate with:  node scripts/rebuild-m2p.mjs\n\n";
const body =
  "export const company = " + JSON.stringify(company, null, 2) + ";\n";

fs.mkdirSync(DIR, { recursive: true });
fs.writeFileSync(path.join(DIR, "m2p.js"), banner + body, "utf8");

// Source snapshot (inert for the app — loader only imports *.js)
fs.writeFileSync(
  path.join(DIR, "m2p.json"),
  JSON.stringify(company, null, 2) + "\n",
  "utf8",
);

console.log(
  `✓ m2p.js written  (${rounds.length} rounds, ${questionCount} questions: ${rounds
    .map((r) => `${r.questions.length} ${r.name}`)
    .join(", ")})`,
);
