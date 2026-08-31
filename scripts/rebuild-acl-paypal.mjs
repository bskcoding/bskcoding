// Rebuild the three company-interview data files under
// src/data/companyInterviews/acl-digital-paypal-adobe/ with a clean,
// clearly structured layout (L1 / L2 rounds for each client interview).
//
// Run:  node scripts/rebuild-acl-paypal.cjs
//
// It writes:
//   1. acl-digital.js            — ACL Digital (Technical round)
//   2. paypal-payments-client.js — PayPal Payments Client (L1 + L2)
//   3. paypal-new-client.js      — PayPal CDAS New Client (L1 + L2)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "companyInterviews",
  "acl-digital-paypal-adobe",
);

// Small helper: code + language -> { language, content }
const code = (language, content) => ({ language, content });

const aclDigital = {
  id: "acl-digital-paypal-adobe",
  name: "ACL Digital (Paypal,Adobe)",
  interviews: [
    {
      name: "ACL Digital",
      questionCount: 35,
      rounds: [
        {
          name: "Technical Round",
          questions: [],
        },
      ],
    },
  ],
  questionCount: 35,
};
// ---------------------------------------------------------------------------
// ACL Digital — Technical Round (35 questions)
// ---------------------------------------------------------------------------
const ACL_Q = [
  {
    question: "Explain your recent project.",
    answer:
      "I worked on a Customer Registration and Banking Application for 2 years. The project used Java 8, Spring Boot, Hibernate, and ReactJS. I was a backend developer.\n- Key features: customer registration, account management, transaction processing, secure authentication.\n- Main challenges:\n1. Slow API performance - fixed with Redis caching and optimized queries\n2. Concurrent transaction issues - solved using @Transactional with proper isolation levels\n3. Data consistency across microservices - implemented Saga pattern with compensation actions",
    code: null,
  },
  {
    question: "What are the new features in Java 8?",
    answer:
      "Java 8 introduced 7 major features:\n- Lambda expressions for cleaner code\n- Stream API for collection processing\n- Functional interfaces with single abstract methods\n- New Date/Time API (LocalDate, LocalDateTime)\n- Default methods in interfaces for backward compatibility\n- Method references as shorthand for lambdas\n- Optional class to avoid null pointer exceptions",
    code: null,
  },
  {
    question: "What is a static method in Java?",
    answer:
      "A static method belongs to the class rather than instances. It can be called without creating an object using the class name. It can only access static variables and cannot be overridden.\n- Example: Math.sqrt(16) - you don't need a Math object",
    code: null,
  },
  {
    question: "How can we use static methods in an interface?",
    answer:
      "Since Java 8, interfaces can have static methods as utility methods. They are called using the interface name.\n- Example: interface Utils { static void print(String s) { System.out.println(s); } }\n- Call: Utils.print(\"Hello\")",
    code: null,
  },
  {
    question: "How can we call a static method?",
    answer:
      "Static methods can be called in three ways:\n1. Using class name (recommended) - ClassName.methodName()\n2. Directly if in same class - methodName()\n3. Using object reference (not recommended) - obj.methodName()",
    code: null,
  },
  {
    question: "What is a default method in Java?",
    answer:
      "Default methods are methods in interfaces that have a body and provide a default implementation. They were introduced in Java 8. Classes implementing the interface can use them or override them. They help maintain backward compatibility.",
    code: null,
  },
  {
    question: "What is the use of default methods?",
    answer:
      "Default methods serve three main purposes:\n1. Allow interfaces to evolve without breaking existing implementations\n2. Provide common implementations across multiple classes\n3. Enable multiple inheritance of behavior\n- Used extensively in the Collection framework like forEach() method",
    code: null,
  },
  {
    question: "What is a method reference?",
    answer:
      "A method reference is a shorthand notation for lambda expressions. It provides a way to refer to methods without invoking them.\n- Example: list.forEach(System.out::println) instead of list.forEach(s -> System.out.println(s))",
    code: null,
  },
  {
    question: "How many ways can we create method references?",
    answer:
      "Four ways:\n1. Reference to static method - ClassName::staticMethod\n2. Reference to instance method of specific object - instance::method\n3. Reference to instance method of arbitrary object - ClassName::instanceMethod\n4. Reference to constructor - ClassName::new",
    code: code(
      "java",
      'public class MethodReferenceExample {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.forEach(MethodReferenceExample::printName);\n        MethodReferenceExample instance = new MethodReferenceExample();\n        names.forEach(instance::printNameInstance);\n    }\n    public static void printName(String name) {\n        System.out.println(name);\n    }\n    public void printNameInstance(String name) {\n        System.out.println(name);\n    }\n}',
    ),
  },
  {
    question: "What is a stream in Java?",
    answer:
      "A stream is a sequence of elements that supports functional-style operations. It's not a data structure but processes collections of objects. Streams are lazy, can be parallelized, and cannot be reused after a terminal operation. Used for filtering, mapping, and collecting data.",
    code: null,
  },
  {
    question: "What is a parallel stream?",
    answer:
      "A parallel stream enables parallel processing by splitting data into multiple chunks and processing them concurrently using multiple threads. It uses the Fork/Join framework. Useful for large datasets with CPU-intensive operations.\n- Example: list.parallelStream() instead of list.stream()",
    code: null,
  },
  {
    question: "How does parallel stream work internally?",
    answer:
      "Parallel streams work in four steps:\n1. Split - Data is divided into chunks using Spliterator\n2. Process - Each chunk is processed independently in parallel using multiple threads from ForkJoinPool\n3. Combine - Results are merged using a combine operation\n4. Return - Final result is returned",
    code: null,
  },
];
ACL_Q.push(
  {
    question: "How many ways can we create a thread in Java?",
    answer:
      "Three ways:\n1. Extending Thread class - class MyThread extends Thread { public void run() {} }\n2. Implementing Runnable interface - class MyRunnable implements Runnable { public void run() {} }\n3. Using Lambda expression (Java 8+) - Runnable r = () -> System.out.println(\"Running\")",
    code: code(
      "java",
      'public class RunnableExample implements Runnable {\n    @Override\n    public void run() {\n        System.out.println("Thread is running");\n    }\n    public static void main(String[] args) {\n        RunnableExample runnable = new RunnableExample();\n        Thread thread = new Thread(runnable);\n        thread.start();\n    }\n}',
    ),
  },
  {
    question: "What is ExecutorService?",
    answer:
      "ExecutorService is a high-level framework for managing thread pools. Instead of creating threads manually, you submit tasks which are managed by the framework. It provides methods for managing thread lifecycle, scheduling tasks, and handling results.",
    code: null,
  },
  {
    question: "How many ways can we create an ExecutorService?",
    answer:
      "Four ways:\n1. newFixedThreadPool(int n) - fixed number of threads\n2. newSingleThreadExecutor() - single thread\n3. newCachedThreadPool() - creates threads as needed\n4. newScheduledThreadPool(int n) - scheduled tasks",
    code: null,
  },
  {
    question: "What is autowiring in Spring?",
    answer:
      "Autowiring is a Spring feature that automatically injects dependencies into beans. It eliminates manual object creation by letting the Spring container manage dependencies. Uses @Autowired annotation for dependency injection.",
    code: null,
  },
  {
    question: "How many modes of autowiring are there?",
    answer:
      "Four modes:\n1. @Autowired - by type (default)\n2. @Qualifier - by name with @Autowired\n3. @Resource - by name (JSR-250)\n4. @Inject - by type (JSR-330)",
    code: null,
  },
  {
    question: "Explain @Qualifier and @Inject.",
    answer:
      "@Qualifier is used with @Autowired to specify which bean to inject when multiple beans of the same type exist. @Inject is a Java standard annotation (JSR-330) for dependency injection, similar to @Autowired but from the Java standard library.",
    code: null,
  },
  {
    question: "Difference between @Autowired and @Qualifier?",
    answer:
      "@Autowired injects dependencies by type automatically. @Qualifier works with @Autowired to specify the exact bean when multiple beans of the same type exist. @Autowired alone causes ambiguity if multiple beans are found; @Qualifier resolves it.",
    code: null,
  },
  {
    question: "What is Spring Security?",
    answer:
      "Spring Security is a framework for authentication (who you are) and authorization (what you can do). It provides protection against common security threats and integrates with various authentication providers.",
    code: null,
  },
  {
    question: "How do you configure Spring Security?",
    answer:
      "Spring Security can be configured using:\n1. Java configuration with @EnableWebSecurity and SecurityConfig classes extending WebSecurityConfigurerAdapter\n2. XML configuration (less common now)\n- Java configuration is preferred for better control.",
    code: null,
  },
  {
    question: "What is JWT token-based authentication?",
    answer:
      "JWT (JSON Web Token) is a stateless authentication mechanism. User logs in, the server generates a JWT token containing user info. The user sends this token in each request. The server validates the token to authenticate the user. No session storage is needed.",
    code: null,
  },
  {
    question: "What is an API gateway?",
    answer:
      "An API gateway is a single entry point for microservices. It handles routing requests to appropriate services, load balancing, authentication, rate limiting, logging, and API composition. Examples: Spring Cloud Gateway, Netflix Zuul.",
    code: null,
  },
  {
    question: "How to implement an API gateway?",
    answer:
      "Use Spring Cloud Gateway or Netflix Zuul. Dependencies: spring-cloud-starter-gateway for Gateway, zuul for Zuul. Define routes in application.yml with URI, predicates, and filters.\n- Example: routes with path /api/users/** route to user-service.",
    code: null,
  },
);
ACL_Q.push(
  {
    question: "What is load balancing?",
    answer:
      "Load balancing distributes incoming traffic across multiple servers to prevent any single server from being overwhelmed. It improves reliability, performance, and availability. Types: client-side (Ribbon) and server-side (Nginx, HAProxy).",
    code: null,
  },
  {
    question: "What is fault tolerance?",
    answer:
      "Fault tolerance is a system's ability to continue operating even when some components fail. Implemented through: redundancy, failover strategies, circuit breakers, retry mechanisms, and fallback methods.",
    code: null,
  },
  {
    question: "What is a circuit breaker?",
    answer:
      "A circuit breaker prevents cascading failures by stopping calls to a failing service. It has three states: Closed (normal), Open (failing - requests fail immediately), Half-Open (testing recovery). Implemented using Resilience4j or Hystrix.",
    code: null,
  },
  {
    question: "What are the features of RESTful web services?",
    answer:
      "Features:\n- Stateless communication\n- Resource-based URLs\n- Standard HTTP methods (GET, POST, PUT, DELETE)\n- JSON/XML responses\n- HTTP status codes\n- Cacheable responses\n- Scalable architecture\n- Layered system",
    code: null,
  },
  {
    question: "What are HTTP status codes?",
    answer:
      "Common HTTP status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error. They indicate the request result and guide client behavior.",
    code: null,
  },
  {
    question:
      "Write a query to get username when name starts with 'A' and ends with 'E'.",
    answer: "SELECT username FROM users WHERE name LIKE 'A%E'",
    code: code("sql", "SELECT username FROM users WHERE name LIKE 'A%E'"),
  },
  {
    question: "Write SQL query to find 2nd maximum salary.",
    answer:
      "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)",
    code: code(
      "sql",
      "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)",
    ),
  },
  {
    question: "Write SQL query to find 10th maximum salary.",
    answer:
      "SELECT salary FROM (SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 10) AS temp ORDER BY salary ASC LIMIT 1",
    code: code(
      "sql",
      "SELECT salary FROM (SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 10) AS temp ORDER BY salary ASC LIMIT 1",
    ),
  },
  {
    question: "Difference between WHERE and HAVING?",
    answer:
      "WHERE filters rows before grouping and cannot use aggregate functions. HAVING filters groups after GROUP BY and can use aggregate functions. WHERE is applied first, HAVING is applied last.",
    code: null,
  },
  {
    question: "Can you use grouping in WHERE clause?",
    answer:
      "No, grouping and aggregate functions must be used with the HAVING clause, not WHERE. This is a SQL syntax rule.",
    code: null,
  },
  {
    question: "Write Java code to find names starting with 'A' using streams.",
    answer: "Use filter with startsWith('A') and collect to a List",
    code: code(
      "java",
      'List<String> names = Arrays.asList("Alice", "Bob", "Andrew", "Amanda", "George");\nList<String> result = names.stream()\n    .filter(name -> name.startsWith("A"))\n    .collect(Collectors.toList());',
    ),
  },
);
// ---------------------------------------------------------------------------
// PayPal Payments Client — L1 (Client interview, 42 questions)
// ---------------------------------------------------------------------------
const PAY1_L1 = [
  {
    question: "Self-introduction about your project.",
    answer:
      "Hello, I'm a Java Full Stack Developer with 3 years experience. I worked on a Customer Registration and Banking Application using Java 8, Spring Boot, Hibernate, ReactJS, and MySQL. As a backend developer, I built REST APIs for customer management, transaction processing, and authentication.\n- Key challenges: performance optimization with Redis caching, concurrent transaction handling with proper isolation levels, and data consistency across services.",
    code: null,
  },
  {
    question: "Do you know SQL?",
    answer:
      "Yes, I work with SQL regularly. I can write queries with SELECT, INSERT, UPDATE, DELETE, joins, subqueries, aggregate functions, indexes, and stored procedures. I've worked with both MySQL and PostgreSQL.",
    code: null,
  },
  {
    question: "Do you know Data Structures and Algorithms (LinkedList)?",
    answer:
      "Yes, LinkedList is a data structure where each element (node) contains data and a reference to the next node. Types: singly linked (one direction) and doubly linked (both directions). Used for frequent insertions/deletions.",
    code: null,
  },
  {
    question: "Do you know OOP concepts?",
    answer:
      "Yes. Four main OOP concepts:\n1. Encapsulation - wrapping data and methods together\n2. Abstraction - hiding complexity\n3. Inheritance - deriving new classes from existing ones\n4. Polymorphism - using the same function in different forms",
    code: null,
  },
  {
    question: "What is polymorphism?",
    answer:
      "Polymorphism allows one interface to be used for different data types. Achieved through:\n1. Method Overloading (compile-time) - same name different parameters\n2. Method Overriding (runtime) - child class provides specific implementation",
    code: null,
  },
  {
    question: "What is method overloading and overriding?",
    answer:
      "Method Overloading: Multiple methods with the same name but different parameters within the same class. Method Overriding: Subclass provides a specific implementation of a parent method. Use @Override annotation for overriding.",
    code: null,
  },
  {
    question: "What are access modifiers?",
    answer:
      "Access modifiers define scope: private (class only), protected (package + subclasses), public (everywhere), default (package only). Used to control access and maintain encapsulation.",
    code: null,
  },
  {
    question: "Why use private?",
    answer:
      "To restrict access and maintain encapsulation. Private variables can only be accessed within the class. Use public getters and setters to control access and add validation.",
    code: null,
  },
  {
    question: "Which OOP concept achieves private variables?",
    answer:
      "Encapsulation. Private variables are encapsulated within a class and accessed through public methods (getters/setters). This protects data integrity.",
    code: null,
  },
  {
    question: "Difference between String, StringBuilder, StringBuffer?",
    answer:
      "String: Immutable, stored in the string pool. StringBuilder: Mutable, not thread-safe, faster. StringBuffer: Mutable, thread-safe (synchronized), slower.\n- Use String for constants, StringBuilder for single-threaded operations, StringBuffer for multi-threaded.",
    code: null,
  },
  {
    question: "What is the string constant pool?",
    answer:
      "A special memory area in the Java heap that stores String literals. Optimizes memory by reusing the same string objects. Example: String s1='abc' and String s2='abc' point to the same object.",
    code: null,
  },
  {
    question: "Given String str1='abc', str2='abc', str1 == str2 output?",
    answer:
      "Output: true. Because both str1 and str2 point to the same literal in the string constant pool. '==' compares references, and both reference the same object.",
    code: null,
  },
  {
    question: "What is an inner class and anonymous class?",
    answer:
      "Inner class: A class defined inside another class, useful for logical grouping and accessing outer class members. Anonymous class: A class without a name, used for one-time instantiation, common in event handling.",
    code: null,
  },
  {
    question: "Have you worked with multithreading?",
    answer:
      "Yes, multithreading allows concurrent execution of multiple threads. Used for improving performance in I/O operations, database calls, and batch processing. Used ExecutorService for thread pool management.",
    code: null,
  },
];
PAY1_L1.push(
  {
    question: "How many ways to create a thread?",
    answer:
      "Three ways:\n1. Extend Thread class\n2. Implement Runnable interface\n3. Using Lambda expression (Java 8+)\n- Runnable is preferred as it allows extending other classes.",
    code: null,
  },
  {
    question: "Have you used Future and Callable?",
    answer:
      "Yes. Callable is similar to Runnable but returns a result and can throw checked exceptions. Future represents the result of an asynchronous computation, allowing checking completion and retrieving results.",
    code: null,
  },
  {
    question: "Which collections have you used?",
    answer:
      "ArrayList for dynamic arrays, HashSet for unique elements, HashMap for key-value pairs, LinkedList for frequent insertions/deletions, TreeMap for sorted key-value pairs.",
    code: null,
  },
  {
    question: "What is HashMap retrieval time complexity?",
    answer:
      "Average time complexity: O(1). Worst case: O(n) when all keys go to the same bucket. With tree implementation in Java 8+, worst case becomes O(log n) when the tree threshold is reached.",
    code: null,
  },
  {
    question: "How does HashMap work internally?",
    answer:
      "HashMap uses an array of buckets. A key's hashcode determines the bucket index. If there is a collision, it stores in a linked list (or tree after threshold). On reaching load factor (0.75), it resizes and rehashes. Average O(1) for get/put.",
    code: null,
  },
  {
    question: "What is hash collision?",
    answer:
      "Hash collision occurs when two different keys produce the same hashcode and map to the same bucket. Java resolves collisions through:\n1. Chaining - linked list in the bucket\n2. After threshold (8), converts to a balanced tree for better performance",
    code: null,
  },
  {
    question: "What is 'final' and how does it work?",
    answer:
      "final prevents modification:\n1. Variable - value cannot change after initialization\n2. Method - cannot be overridden\n3. Class - cannot be extended\n- Used for immutability and security.",
    code: null,
  },
  {
    question: "How can you handle exceptions?",
    answer:
      "Using try-catch blocks. Common practice:\n1. Try-catch for checked exceptions\n2. Try-catch-finally for cleanup\n3. Try-with-resources for auto-closable resources\n4. Custom exceptions extending the Exception class",
    code: null,
  },
  {
    question: "Mostly used Spring Boot exceptions?",
    answer:
      "Common exceptions: DataIntegrityViolationException (database constraints), HttpClientErrorException (client errors), HttpServerErrorException (server errors), EntityNotFoundException (entity not found), MethodArgumentNotValidException (validation errors).",
    code: null,
  },
  {
    question: "Difference between throw and throws?",
    answer:
      "throw: Explicitly throws an exception object, used inside a method. throws: Declares that a method can throw exceptions, used in the method signature.",
    code: null,
  },
  {
    question: "Difference between checked and unchecked exceptions?",
    answer:
      "Checked exceptions must be handled at compile-time (e.g., IOException, SQLException). Unchecked exceptions occur at runtime (e.g., NullPointerException, ArithmeticException).",
    code: null,
  },
  {
    question: "Explain try, catch, finally?",
    answer:
      "try: Code block to monitor for exceptions. catch: Handles specific exceptions. finally: Always executes regardless of exception, used for cleanup. finally executes even if an exception occurs.",
    code: null,
  },
  {
    question: "Have you worked with Java 8?",
    answer:
      "Yes, extensively used Java 8 features: Lambdas for functional programming, Streams for collection processing, Optional for null safety, Date/Time API (LocalDate, LocalDateTime), Default methods in interfaces.",
    code: null,
  },
  {
    question: "Find character count using streams.",
    answer:
      "Use chars() to convert a String to IntStream, filter the character, count occurrences.",
    code: code(
      "java",
      'long count = "leetcode".chars().filter(ch -> ch == \'e\').count();',
    ),
  },
);
PAY1_L1.push(
  {
    question: "Write code to detect cycle in linked list.",
    answer:
      "Use Floyd's Cycle Detection algorithm with slow and fast pointers. If slow meets fast, a cycle exists.",
    code: code(
      "java",
      'public boolean hasCycle(ListNode head) {\n    if (head == null) return false;\n    ListNode slow = head, fast = head.next;\n    while (slow != fast) {\n        if (fast == null || fast.next == null) return false;\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    return true;\n}',
    ),
  },
  {
    question: "Time and space complexity of cycle detection?",
    answer:
      "Time Complexity: O(n) - traverse list once. Space Complexity: O(1) - only two pointers used.",
    code: null,
  },
  {
    question: "What is Optional class?",
    answer:
      "Optional is a container object that may or may not contain a value. Used to avoid null pointer exceptions. Methods: isPresent(), get(), orElse(), orElseGet(), ifPresent().",
    code: null,
  },
  {
    question: "What is a functional interface?",
    answer:
      "A functional interface has exactly one abstract method. Can have default/static methods. Implemented using lambda expressions. Examples: Runnable, Callable, Comparator, Consumer, Function, Predicate, Supplier.",
    code: null,
  },
  {
    question: "Built-in functional interfaces?",
    answer:
      "Common built-in: Function<T,R> (apply), Consumer<T> (accept), Supplier<T> (get), Predicate<T> (test), BiFunction<T,U,R>, BiConsumer<T,U>, BiPredicate<T,U>.",
    code: null,
  },
  {
    question: "How to use functional interface with lambda?",
    answer:
      "Define a functional interface with one abstract method. Implement using a lambda expression. Example: MathOperation addition = (a, b) -> a + b; addition.operate(5, 3)",
    code: code(
      "java",
      '@FunctionalInterface\ninterface MathOperation { int operate(int a, int b); }\nMathOperation addition = (a, b) -> a + b;\nSystem.out.println(addition.operate(5, 3));',
    ),
  },
  {
    question: "Do you know CompletableFuture?",
    answer:
      "Yes, CompletableFuture is a Java 8 feature for asynchronous programming. Supports:\n1. Running tasks asynchronously\n2. Chaining multiple stages\n3. Combining multiple async computations\n4. Exception handling\n5. Cancellation support",
    code: null,
  },
  {
    question: "Have you worked with Spring Boot?",
    answer:
      "Yes, extensively. Spring Boot simplifies building production-grade applications with auto-configuration, embedded servers, and opinionated defaults. Used annotations like @RestController, @Service, @Repository, @Autowired.",
    code: null,
  },
  {
    question: "What is @Component?",
    answer:
      "@Component marks a class as a Spring-managed bean. The Spring container auto-detects and registers beans. Used with @Service, @Repository, @Controller for specific layers.",
    code: null,
  },
  {
    question: "Explain @Controller, @Service, @Repository?",
    answer:
      "@Controller: Web layer, handles HTTP requests. @Service: Business logic layer, contains business operations. @Repository: Data access layer, interacts with the database, translates exceptions to Spring's DataAccessException.",
    code: null,
  },
  {
    question: "Do you know MVC?",
    answer:
      "Yes, Model-View-Controller pattern: Model (data & business logic), View (UI rendering), Controller (handles user input, coordinates Model and View). Spring Boot implements MVC with annotations.",
    code: null,
  },
  {
    question: "SOAP vs RESTful services?",
    answer:
      "SOAP: Protocol, uses XML, more complex, supports ACID. REST: Architectural style, uses HTTP methods, simpler, uses JSON/XML, stateless, cacheable, more popular for web APIs.",
    code: null,
  },
  {
    question: "Features of RESTful services?",
    answer:
      "Stateless, Resource-based URLs, Standard HTTP methods, JSON/XML responses, HTTP status codes, Cacheable, Scalable, Layered architecture.",
    code: null,
  },
  {
    question: "Example of notification service API?",
    answer:
      "Notification service sends emails/SMS. Controller receives the request, Service processes business logic, Repository fetches data, External API calls provider.",
    code: code(
      "java",
      "@RestController\n@RequestMapping(\"/api/notification\")\npublic class NotificationController {\n    @Autowired\n    private NotificationService notificationService;\n    @PostMapping(\"/send\")\n    public ResponseEntity<String> sendNotification(@RequestBody NotificationRequest request) {\n        notificationService.sendNotification(request);\n        return ResponseEntity.ok(\"Notification sent\");\n    }\n}\n@Service\npublic class NotificationService {\n    public void sendNotification(NotificationRequest request) {\n        // Send email/SMS\n    }\n}",
    ),
  },
);
// ---------------------------------------------------------------------------
// PayPal Payments Client — L2 (Advanced client interview, 38 questions)
// ---------------------------------------------------------------------------
const PAY1_L2 = [
  {
    question: "Self-introduction based on project.",
    answer:
      "Hello, I'm a Java Full Stack Developer with 3 years experience specializing in Java, Spring Boot, Hibernate, Microservices, and ReactJS. I've worked on customer registration and banking applications implementing secure transaction handling, API development, and cloud deployments on GCP with auto-scaling and cloud storage integration.",
    code: null,
  },
  {
    question: "Which GCP concepts have you used?",
    answer:
      "Compute Engine (VMs), Cloud Storage (object storage), Pub/Sub (messaging), Cloud SQL (managed databases), Cloud Load Balancing (traffic distribution), Stackdriver (monitoring/logging), Cloud CDN (static content), Cloud Scheduler (scheduled jobs).",
    code: null,
  },
  {
    question: "Are you compatible with Java 8 streams?",
    answer:
      "Yes, proficient with Java 8 streams. Used for filtering, mapping, reducing, and collecting data. Supports functional programming with operations like filter, map, reduce, collect, and parallel processing.",
    code: null,
  },
  {
    question: "Find count of given string in list using streams.",
    answer: "Use filter and count operations.",
    code: code(
      "java",
      'List<String> list = Arrays.asList("apple", "banana", "apple", "orange", "apple");\nlong count = list.stream().filter(s -> s.equals("apple")).count();',
    ),
  },
  {
    question: "Find occurrence of each string in list using streams.",
    answer: "Use Collectors.groupingBy with Collectors.counting()",
    code: code(
      "java",
      'List<String> list = Arrays.asList("apple", "banana", "apple", "orange", "banana");\nMap<String, Long> result = list.stream()\n    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));',
    ),
  },
  {
    question: "HashMap vs LinkedHashMap difference?",
    answer:
      "HashMap: No insertion order maintained, faster access. LinkedHashMap: Maintains insertion order or access order (if configured), slightly slower but predictable iteration.",
    code: null,
  },
  {
    question: "String comparison with == and .equals()?",
    answer:
      "== compares reference (memory address), .equals() compares content. s1 == s2 returns false if different objects. s1.equals(s2) returns false if content is different.",
    code: null,
  },
  {
    question: "What are exceptions and types?",
    answer:
      "Exceptions are events disrupting normal program flow. Two types: Checked (must be handled, e.g., IOException) and Unchecked (runtime, e.g., NullPointerException).",
    code: null,
  },
  {
    question: "Checked vs unchecked exceptions with examples?",
    answer:
      "Checked: Must be handled/try-catch (FileNotFoundException, SQLException). Unchecked: Runtime exceptions (ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException).",
    code: code(
      "java",
      '// Checked\nFileReader reader = new FileReader("file.txt");\n// Unchecked\nint result = 10 / 0;',
    ),
  },
  {
    question: "Rate yourself in Java (1-10).",
    answer:
      "8 out of 10. Strong in core Java, Spring Boot, and enterprise application development. Continually learning new features and best practices.",
    code: null,
  },
  {
    question: "Which data structures are you familiar with?",
    answer:
      "Arrays, Lists (ArrayList, LinkedList), Maps (HashMap, TreeMap, LinkedHashMap), Sets (HashSet, TreeSet), Stacks, Queues, Trees (Binary Tree, Binary Search Tree), Heaps.",
    code: null,
  },
  {
    question: "Stack vs Queue difference?",
    answer:
      "Stack: LIFO (Last In First Out) - like a stack of plates. Queue: FIFO (First In First Out) - like a checkout line.",
    code: null,
  },
  {
    question: "Try-with-resources example?",
    answer:
      "Automatic resource management with AutoCloseable resources. Resources are closed automatically.",
    code: code(
      "java",
      'try (FileReader reader = new FileReader("file.txt")) {\n    // Use the reader\n} catch (IOException e) {\n    e.printStackTrace();\n}',
    ),
  },
];
PAY1_L2.push(
  {
    question: "When does finally block not execute?",
    answer:
      "1. When System.exit() is called\n2. When JVM crashes\n3. When the thread is interrupted\n- In all other cases, finally executes.",
    code: null,
  },
  {
    question: "Given division code with finally, what's output?",
    answer:
      "For inputs 10, 2: Output: 'finally' and returns 5. Finally executes before return.",
    code: code(
      "java",
      'int division(int a, int b) {\n    try { return a / b; }\n    finally { System.out.print("finally"); }\n}',
    ),
  },
  {
    question: "How to create custom exception?",
    answer:
      "Extend the Exception class (checked) or RuntimeException (unchecked). Add a constructor with a message.",
    code: code(
      "java",
      'class CustomException extends Exception {\n    public CustomException(String message) {\n        super(message);\n    }\n}',
    ),
  },
  {
    question: "What is a static method?",
    answer:
      "A method that belongs to the class, not an instance. Called using the class name. Cannot access instance variables. Cannot be overridden (but can be hidden).",
    code: null,
  },
  {
    question: "Can static methods be overridden?",
    answer:
      "No, static methods cannot be overridden. They can be hidden in subclasses by defining a static method with the same signature.",
    code: null,
  },
  {
    question: "What is the diamond problem?",
    answer:
      "Ambiguity when a class inherits from multiple parent classes with the same method signature. Java avoids this through interfaces with default methods requiring explicit override.",
    code: null,
  },
  {
    question: "Java 7 vs Java 8 interface difference?",
    answer:
      "Java 7: Only abstract methods. Java 8: Supports default methods (with implementation) and static methods in interfaces.",
    code: null,
  },
  {
    question: "Efficiently find element index in array.",
    answer: "Binary search for sorted arrays (O(log n)).",
    code: code(
      "java",
      'int[] arr = {2, 4, 6, 8, 9};\nint index = Arrays.binarySearch(arr, 6);',
    ),
  },
  {
    question: "Database join query vs Java processing - faster?",
    answer:
      "SQL join is faster. The database is optimized for joins with indexes, query optimization, and less data transfer. Java processing requires transferring more data and manual joining.",
    code: null,
  },
  {
    question: "How to get data from database in Spring Boot?",
    answer:
      "Using Spring Data JPA repositories. Extend JpaRepository and use methods like findAll(), findById(), and custom queries.",
    code: code(
      "java",
      '@Autowired\nprivate UserRepository userRepository;\nList<User> users = userRepository.findAll();',
    ),
  },
  {
    question: "Best collection for middle insertion/deletion?",
    answer:
      "LinkedList. It provides O(1) insertion/deletion if you have a reference. ArrayList requires O(n) due to shifting.",
    code: null,
  },
  {
    question: "Can you remove element during iteration?",
    answer:
      "Yes, using Iterator.remove() to avoid ConcurrentModificationException.",
    code: code(
      "java",
      'Iterator<String> it = list.iterator();\nwhile (it.hasNext()) {\n    String s = it.next();\n    if (condition) it.remove();\n}',
    ),
  },
  {
    question: "Can you add to List.of() created list?",
    answer:
      "No, List.of() creates an immutable list. Cannot add, remove, or modify elements.",
    code: null,
  },
);
PAY1_L2.push(
  {
    question: "Do you know design patterns?",
    answer:
      "Yes, familiar with: Singleton (single instance), Factory (object creation), Observer (event handling), Strategy (algorithm switching), Builder (complex objects), Template (algorithm skeleton), Dependency Injection (Spring default).",
    code: null,
  },
  {
    question: "What is Singleton pattern?",
    answer:
      "Ensures only one instance exists and provides global access. Implementation: private constructor, static instance, static getInstance() method.",
    code: code(
      "java",
      'public class Singleton {\n    private static Singleton instance;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}',
    ),
  },
  {
    question: "Default Spring Boot design pattern?",
    answer:
      "Dependency Injection (DI). Spring manages object creation and dependencies through the Inversion of Control (IoC) container.",
    code: null,
  },
  {
    question: "Multiple catch blocks ordering?",
    answer:
      "Catch specific exceptions first, general Exception last. Compile-time error if the general exception comes first.",
    code: code(
      "java",
      'try {\n    // code\n} catch (IOException e) {\n    // handle specific\n} catch (Exception e) {\n    // handle general\n}',
    ),
  },
  {
    question: "Catching general before specific exception?",
    answer:
      "Compile-time error. More specific exceptions must be caught before a general Exception.",
    code: code(
      "java",
      '// ERROR: Exception already caught\ncatch (Exception e) {}\ncatch (ArithmeticException e) {} // Unreachable',
    ),
  },
  {
    question: "How familiar are you with SQL queries?",
    answer:
      "Very familiar. Can write complex queries with joins (inner, left, right, full), subqueries, aggregate functions (COUNT, SUM, AVG, MAX, MIN), window functions, and stored procedures.",
    code: null,
  },
  {
    question: "What are SQL joins?",
    answer:
      "Inner Join: Matching records only. Left Join: All from left + matches from right. Right Join: All from right + matches from left. Full Join: All from both tables.",
    code: null,
  },
  {
    question: "Why is main method static?",
    answer:
      "The JVM can call the main method without creating a class instance. No object exists before main execution.",
    code: null,
  },
  {
    question: "Find order ID based on customer name.",
    answer: "Join order and customer tables, filter by customer name.",
    code: code(
      "sql",
      "SELECT o.oid FROM order o\nINNER JOIN customer c ON o.cid = c.cid\nWHERE c.cname = 'customer_name';",
    ),
  },
  {
    question: "Find second maximum salary.",
    answer: "Using a subquery with MAX, excluding the max salary.",
    code: code(
      "sql",
      "SELECT MAX(salary) FROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);",
    ),
  },
  {
    question: "What is dependency injection?",
    answer:
      "Design pattern where dependencies are injected by the container rather than created internally. Improves testability and loose coupling.",
    code: code(
      "java",
      '@Service\npublic class MyService {\n    private final MyRepository repository;\n    @Autowired\n    public MyService(MyRepository repository) {\n        this.repository = repository;\n    }\n}',
    ),
  },
  {
    question: "How many ways can dependency injection be done?",
    answer:
      "Three ways: Constructor Injection (recommended), Setter Injection (for optional dependencies), Field Injection (@Autowired on field - not recommended).",
    code: null,
  },
);
// ---------------------------------------------------------------------------
// PayPal CDAS New Client — Technical L1 + L2
// ---------------------------------------------------------------------------
const PAY2_L1 = [
  {
    question: "Self-Introduction",
    answer:
      "Hello, my name is [Your Name]. I have 3 years of experience as a Java Full Stack Developer, specializing in Java, Spring Boot, Hibernate, Microservices, and ReactJS. I have worked on multiple projects, including customer registration services and banking applications, where I implemented secure transaction handling, API development, and front-end components. I am proficient in writing clean, testable code using JUnit, Mockito, and TDD principles. I am also experienced in deploying applications using cloud platforms.",
    code: null,
  },
  {
    question: "Problem: Sorting an Array of {-1, 0, 1} in O(n) Time and O(1) Space",
    answer:
      "Use the Dutch National Flag algorithm with three pointers (low, mid, high). Traverse the array once, swapping elements to sort in O(n) time with O(1) space.",
    code: code(
      "java",
      'public class SortThreeElements {\n    public static void sortArray(int[] arr) {\n        int low = 0, mid = 0, high = arr.length - 1;\n        while (mid <= high) {\n            if (arr[mid] == -1) {\n                swap(arr, low, mid);\n                low++; mid++;\n            } else if (arr[mid] == 0) {\n                mid++;\n            } else {\n                swap(arr, mid, high);\n                high--;\n            }\n        }\n    }\n    private static void swap(int[] arr, int i, int j) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n}',
    ),
  },
  {
    question: "Problem: Quantitative Trading Firm Profit Calculation",
    answer:
      "Track portfolio holdings in a HashMap and maintain a profit/loss variable. For BUY/SELL events, update the portfolio. For CHANGE events, adjust profit based on holdings. For QUERY events, return the current profit.",
    code: code(
      "java",
      'class Result {\n    public static List<Long> getNetProfit(List<String> events) {\n        List<Long> ansList = new ArrayList<>();\n        Map<String, Long> portfolio = new HashMap<>();\n        long query = 0;\n        for (String event : events) {\n            String[] word = event.split(" ");\n            String type = word[0];\n            if (type.equals("QUERY")) {\n                ansList.add(query);\n            } else {\n                String company = word[1];\n                long unit = Long.parseLong(word[2]);\n                switch (type) {\n                    case "BUY":\n                        portfolio.put(company, portfolio.getOrDefault(company, 0L) + unit);\n                        break;\n                    case "SELL":\n                        portfolio.put(company, portfolio.getOrDefault(company, 0L) - unit);\n                        break;\n                    case "CHANGE":\n                        if (portfolio.containsKey(company)) {\n                            query += portfolio.get(company) * unit;\n                        }\n                        break;\n                }\n            }\n        }\n        return ansList;\n    }\n}',
    ),
  },
  {
    question: "Problem: Another Trading Firm Example",
    answer:
      "Input: 6 events with BUY/SELL/CHANGE operations; the final QUERY returns -16. The solution uses the same HashMap approach tracking portfolio and profit.",
    code: null,
  },
];

const PAY2_L2 = [
  {
    question: "Self-Introduction",
    answer:
      "Hello, my name is [Your Name]. I have 3 years of experience as a Java Full Stack Developer, specializing in Java, Spring Boot, Hibernate, Microservices, and ReactJS. I have worked on multiple projects, including customer registration services and banking applications, where I implemented secure transaction handling, API development, and front-end components. I am proficient in writing clean, testable code using JUnit, Mockito, and TDD principles. I am also experienced in deploying applications using cloud platforms.",
    code: null,
  },
  {
    question: "Find the minimum element in a rotated sorted array",
    answer:
      "Use binary search with O(log n) time complexity. Compare mid with the rightmost element. If mid > right, the minimum is in the right half, otherwise in the left half.",
    code: code(
      "java",
      'public class RotatedSortedArray {\n    public static int findMin(int[] nums) {\n        int left = 0, right = nums.length - 1;\n        while (left < right) {\n            int mid = left + (right - left) / 2;\n            if (nums[mid] > nums[right]) {\n                left = mid + 1;\n            } else {\n                right = mid;\n            }\n        }\n        return nums[left];\n    }\n    public static void main(String[] args) {\n        int[][] testCases = {\n            {100, 105, 110, 90, 95},    // Output: 90\n            {3, 4, 5, 6, 7, 8, 9, 10, 1, 2}, // Output: 1\n            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, // Output: 1\n            {5, 4, 3, 2, 1}              // Output: 1\n        };\n        for (int[] testCase : testCases) {\n            System.out.println("Minimum Element: " + findMin(testCase));\n        }\n    }\n}',
    ),
  },
];
// ---------------------------------------------------------------------------
// Build + write the three files
// ---------------------------------------------------------------------------
const write = (filename, companyObject) => {
  const header =
    "// AUTO-GENERATED file — company-wise interview data.\n" +
    "// Source: ACL Digital (Paypal,Adobe) interview document(s).\n\n" +
    "export const company = " +
    JSON.stringify(companyObject, null, 2) +
    ";\n";
  fs.writeFileSync(path.join(OUT_DIR, filename), header);
  console.log(`✓ wrote ${filename}`);
};

// Rebuild ACL Digital (answers already set in aclDigital object)
aclDigital.interviews[0].rounds[0].questions = ACL_Q;
write("acl-digital.js", aclDigital);

// PayPal Payments Client — L1 + L2 as two clean rounds
const paypalPayments = {
  id: "acl-digital-paypal-adobe",
  name: "ACL Digital (Paypal,Adobe)",
  interviews: [
    {
      name: "PayPal Payments Client",
      questionCount: PAY1_L1.length + PAY1_L2.length,
      rounds: [
        { name: "Technical L1 - Client Interview", questions: PAY1_L1 },
        { name: "Technical L2 - Advanced Client Interview", questions: PAY1_L2 },
      ],
    },
  ],
  questionCount: PAY1_L1.length + PAY1_L2.length,
};
write("paypal-payments-client.js", paypalPayments);

// PayPal CDAS New Client — L1 + L2 as two clean rounds
const paypalNewClient = {
  id: "acl-digital-paypal-adobe",
  name: "ACL Digital (Paypal,Adobe)",
  interviews: [
    {
      name: "PayPal CDAS New Client",
      questionCount: PAY2_L1.length + PAY2_L2.length,
      rounds: [
        { name: "Technical L1", questions: PAY2_L1 },
        { name: "Technical L2", questions: PAY2_L2 },
      ],
    },
  ],
  questionCount: PAY2_L1.length + PAY2_L2.length,
};
write("paypal-new-client.js", paypalNewClient);

console.log(
  `Done. ACL=${ACL_Q.length}, PayPal Payments Client=${paypalPayments.questionCount} (L1=${PAY1_L1.length}, L2=${PAY1_L2.length}), PayPal CDAS New Client=${paypalNewClient.questionCount} (L1=${PAY2_L1.length}, L2=${PAY2_L2.length})`,
);