// AUTO-GENERATED file — company-wise interview data.
// Source: ACL Digital (Paypal,Adobe) interview document(s).

export const company = {
  "id": "acl-digital-paypal-adobe",
  "name": "ACL Digital (Paypal,Adobe)",
  "interviews": [
    {
      "name": "PayPal Payments Client",
      "questionCount": 80,
      "rounds": [
        {
          "name": "Technical L1 - Client Interview",
          "questions": [
            {
              "question": "Self-introduction about your project.",
              "answer": "Hello, I'm a Java Full Stack Developer with 3 years experience. I worked on a Customer Registration and Banking Application using Java 8, Spring Boot, Hibernate, ReactJS, and MySQL. As a backend developer, I built REST APIs for customer management, transaction processing, and authentication.\n- Key challenges: performance optimization with Redis caching, concurrent transaction handling with proper isolation levels, and data consistency across services.",
              "code": null
            },
            {
              "question": "Do you know SQL?",
              "answer": "Yes, I work with SQL regularly. I can write queries with SELECT, INSERT, UPDATE, DELETE, joins, subqueries, aggregate functions, indexes, and stored procedures. I've worked with both MySQL and PostgreSQL.",
              "code": null
            },
            {
              "question": "Do you know Data Structures and Algorithms (LinkedList)?",
              "answer": "Yes, LinkedList is a data structure where each element (node) contains data and a reference to the next node. Types: singly linked (one direction) and doubly linked (both directions). Used for frequent insertions/deletions.",
              "code": null
            },
            {
              "question": "Do you know OOP concepts?",
              "answer": "Yes. Four main OOP concepts:\n1. Encapsulation - wrapping data and methods together\n2. Abstraction - hiding complexity\n3. Inheritance - deriving new classes from existing ones\n4. Polymorphism - using the same function in different forms",
              "code": null
            },
            {
              "question": "What is polymorphism?",
              "answer": "Polymorphism allows one interface to be used for different data types. Achieved through:\n1. Method Overloading (compile-time) - same name different parameters\n2. Method Overriding (runtime) - child class provides specific implementation",
              "code": null
            },
            {
              "question": "What is method overloading and overriding?",
              "answer": "Method Overloading: Multiple methods with the same name but different parameters within the same class. Method Overriding: Subclass provides a specific implementation of a parent method. Use @Override annotation for overriding.",
              "code": null
            },
            {
              "question": "What are access modifiers?",
              "answer": "Access modifiers define scope: private (class only), protected (package + subclasses), public (everywhere), default (package only). Used to control access and maintain encapsulation.",
              "code": null
            },
            {
              "question": "Why use private?",
              "answer": "To restrict access and maintain encapsulation. Private variables can only be accessed within the class. Use public getters and setters to control access and add validation.",
              "code": null
            },
            {
              "question": "Which OOP concept achieves private variables?",
              "answer": "Encapsulation. Private variables are encapsulated within a class and accessed through public methods (getters/setters). This protects data integrity.",
              "code": null
            },
            {
              "question": "Difference between String, StringBuilder, StringBuffer?",
              "answer": "String: Immutable, stored in the string pool. StringBuilder: Mutable, not thread-safe, faster. StringBuffer: Mutable, thread-safe (synchronized), slower.\n- Use String for constants, StringBuilder for single-threaded operations, StringBuffer for multi-threaded.",
              "code": null
            },
            {
              "question": "What is the string constant pool?",
              "answer": "A special memory area in the Java heap that stores String literals. Optimizes memory by reusing the same string objects. Example: String s1='abc' and String s2='abc' point to the same object.",
              "code": null
            },
            {
              "question": "Given String str1='abc', str2='abc', str1 == str2 output?",
              "answer": "Output: true. Because both str1 and str2 point to the same literal in the string constant pool. '==' compares references, and both reference the same object.",
              "code": null
            },
            {
              "question": "What is an inner class and anonymous class?",
              "answer": "Inner class: A class defined inside another class, useful for logical grouping and accessing outer class members. Anonymous class: A class without a name, used for one-time instantiation, common in event handling.",
              "code": null
            },
            {
              "question": "Have you worked with multithreading?",
              "answer": "Yes, multithreading allows concurrent execution of multiple threads. Used for improving performance in I/O operations, database calls, and batch processing. Used ExecutorService for thread pool management.",
              "code": null
            },
            {
              "question": "How many ways to create a thread?",
              "answer": "Three ways:\n1. Extend Thread class\n2. Implement Runnable interface\n3. Using Lambda expression (Java 8+)\n- Runnable is preferred as it allows extending other classes.",
              "code": null
            },
            {
              "question": "Have you used Future and Callable?",
              "answer": "Yes. Callable is similar to Runnable but returns a result and can throw checked exceptions. Future represents the result of an asynchronous computation, allowing checking completion and retrieving results.",
              "code": null
            },
            {
              "question": "Which collections have you used?",
              "answer": "ArrayList for dynamic arrays, HashSet for unique elements, HashMap for key-value pairs, LinkedList for frequent insertions/deletions, TreeMap for sorted key-value pairs.",
              "code": null
            },
            {
              "question": "What is HashMap retrieval time complexity?",
              "answer": "Average time complexity: O(1). Worst case: O(n) when all keys go to the same bucket. With tree implementation in Java 8+, worst case becomes O(log n) when the tree threshold is reached.",
              "code": null
            },
            {
              "question": "How does HashMap work internally?",
              "answer": "HashMap uses an array of buckets. A key's hashcode determines the bucket index. If there is a collision, it stores in a linked list (or tree after threshold). On reaching load factor (0.75), it resizes and rehashes. Average O(1) for get/put.",
              "code": null
            },
            {
              "question": "What is hash collision?",
              "answer": "Hash collision occurs when two different keys produce the same hashcode and map to the same bucket. Java resolves collisions through:\n1. Chaining - linked list in the bucket\n2. After threshold (8), converts to a balanced tree for better performance",
              "code": null
            },
            {
              "question": "What is 'final' and how does it work?",
              "answer": "final prevents modification:\n1. Variable - value cannot change after initialization\n2. Method - cannot be overridden\n3. Class - cannot be extended\n- Used for immutability and security.",
              "code": null
            },
            {
              "question": "How can you handle exceptions?",
              "answer": "Using try-catch blocks. Common practice:\n1. Try-catch for checked exceptions\n2. Try-catch-finally for cleanup\n3. Try-with-resources for auto-closable resources\n4. Custom exceptions extending the Exception class",
              "code": null
            },
            {
              "question": "Mostly used Spring Boot exceptions?",
              "answer": "Common exceptions: DataIntegrityViolationException (database constraints), HttpClientErrorException (client errors), HttpServerErrorException (server errors), EntityNotFoundException (entity not found), MethodArgumentNotValidException (validation errors).",
              "code": null
            },
            {
              "question": "Difference between throw and throws?",
              "answer": "throw: Explicitly throws an exception object, used inside a method. throws: Declares that a method can throw exceptions, used in the method signature.",
              "code": null
            },
            {
              "question": "Difference between checked and unchecked exceptions?",
              "answer": "Checked exceptions must be handled at compile-time (e.g., IOException, SQLException). Unchecked exceptions occur at runtime (e.g., NullPointerException, ArithmeticException).",
              "code": null
            },
            {
              "question": "Explain try, catch, finally?",
              "answer": "try: Code block to monitor for exceptions. catch: Handles specific exceptions. finally: Always executes regardless of exception, used for cleanup. finally executes even if an exception occurs.",
              "code": null
            },
            {
              "question": "Have you worked with Java 8?",
              "answer": "Yes, extensively used Java 8 features: Lambdas for functional programming, Streams for collection processing, Optional for null safety, Date/Time API (LocalDate, LocalDateTime), Default methods in interfaces.",
              "code": null
            },
            {
              "question": "Find character count using streams.",
              "answer": "Use chars() to convert a String to IntStream, filter the character, count occurrences.",
              "code": {
                "language": "java",
                "content": "long count = \"leetcode\".chars().filter(ch -> ch == 'e').count();"
              }
            },
            {
              "question": "Write code to detect cycle in linked list.",
              "answer": "Use Floyd's Cycle Detection algorithm with slow and fast pointers. If slow meets fast, a cycle exists.",
              "code": {
                "language": "java",
                "content": "public boolean hasCycle(ListNode head) {\n    if (head == null) return false;\n    ListNode slow = head, fast = head.next;\n    while (slow != fast) {\n        if (fast == null || fast.next == null) return false;\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    return true;\n}"
              }
            },
            {
              "question": "Time and space complexity of cycle detection?",
              "answer": "Time Complexity: O(n) - traverse list once. Space Complexity: O(1) - only two pointers used.",
              "code": null
            },
            {
              "question": "What is Optional class?",
              "answer": "Optional is a container object that may or may not contain a value. Used to avoid null pointer exceptions. Methods: isPresent(), get(), orElse(), orElseGet(), ifPresent().",
              "code": null
            },
            {
              "question": "What is a functional interface?",
              "answer": "A functional interface has exactly one abstract method. Can have default/static methods. Implemented using lambda expressions. Examples: Runnable, Callable, Comparator, Consumer, Function, Predicate, Supplier.",
              "code": null
            },
            {
              "question": "Built-in functional interfaces?",
              "answer": "Common built-in: Function<T,R> (apply), Consumer<T> (accept), Supplier<T> (get), Predicate<T> (test), BiFunction<T,U,R>, BiConsumer<T,U>, BiPredicate<T,U>.",
              "code": null
            },
            {
              "question": "How to use functional interface with lambda?",
              "answer": "Define a functional interface with one abstract method. Implement using a lambda expression. Example: MathOperation addition = (a, b) -> a + b; addition.operate(5, 3)",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\ninterface MathOperation { int operate(int a, int b); }\nMathOperation addition = (a, b) -> a + b;\nSystem.out.println(addition.operate(5, 3));"
              }
            },
            {
              "question": "Do you know CompletableFuture?",
              "answer": "Yes, CompletableFuture is a Java 8 feature for asynchronous programming. Supports:\n1. Running tasks asynchronously\n2. Chaining multiple stages\n3. Combining multiple async computations\n4. Exception handling\n5. Cancellation support",
              "code": null
            },
            {
              "question": "Have you worked with Spring Boot?",
              "answer": "Yes, extensively. Spring Boot simplifies building production-grade applications with auto-configuration, embedded servers, and opinionated defaults. Used annotations like @RestController, @Service, @Repository, @Autowired.",
              "code": null
            },
            {
              "question": "What is @Component?",
              "answer": "@Component marks a class as a Spring-managed bean. The Spring container auto-detects and registers beans. Used with @Service, @Repository, @Controller for specific layers.",
              "code": null
            },
            {
              "question": "Explain @Controller, @Service, @Repository?",
              "answer": "@Controller: Web layer, handles HTTP requests. @Service: Business logic layer, contains business operations. @Repository: Data access layer, interacts with the database, translates exceptions to Spring's DataAccessException.",
              "code": null
            },
            {
              "question": "Do you know MVC?",
              "answer": "Yes, Model-View-Controller pattern: Model (data & business logic), View (UI rendering), Controller (handles user input, coordinates Model and View). Spring Boot implements MVC with annotations.",
              "code": null
            },
            {
              "question": "SOAP vs RESTful services?",
              "answer": "SOAP: Protocol, uses XML, more complex, supports ACID. REST: Architectural style, uses HTTP methods, simpler, uses JSON/XML, stateless, cacheable, more popular for web APIs.",
              "code": null
            },
            {
              "question": "Features of RESTful services?",
              "answer": "Stateless, Resource-based URLs, Standard HTTP methods, JSON/XML responses, HTTP status codes, Cacheable, Scalable, Layered architecture.",
              "code": null
            },
            {
              "question": "Example of notification service API?",
              "answer": "Notification service sends emails/SMS. Controller receives the request, Service processes business logic, Repository fetches data, External API calls provider.",
              "code": {
                "language": "java",
                "content": "@RestController\n@RequestMapping(\"/api/notification\")\npublic class NotificationController {\n    @Autowired\n    private NotificationService notificationService;\n    @PostMapping(\"/send\")\n    public ResponseEntity<String> sendNotification(@RequestBody NotificationRequest request) {\n        notificationService.sendNotification(request);\n        return ResponseEntity.ok(\"Notification sent\");\n    }\n}\n@Service\npublic class NotificationService {\n    public void sendNotification(NotificationRequest request) {\n        // Send email/SMS\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Technical L2 - Advanced Client Interview",
          "questions": [
            {
              "question": "Self-introduction based on project.",
              "answer": "Hello, I'm a Java Full Stack Developer with 3 years experience specializing in Java, Spring Boot, Hibernate, Microservices, and ReactJS. I've worked on customer registration and banking applications implementing secure transaction handling, API development, and cloud deployments on GCP with auto-scaling and cloud storage integration.",
              "code": null
            },
            {
              "question": "Which GCP concepts have you used?",
              "answer": "Compute Engine (VMs), Cloud Storage (object storage), Pub/Sub (messaging), Cloud SQL (managed databases), Cloud Load Balancing (traffic distribution), Stackdriver (monitoring/logging), Cloud CDN (static content), Cloud Scheduler (scheduled jobs).",
              "code": null
            },
            {
              "question": "Are you compatible with Java 8 streams?",
              "answer": "Yes, proficient with Java 8 streams. Used for filtering, mapping, reducing, and collecting data. Supports functional programming with operations like filter, map, reduce, collect, and parallel processing.",
              "code": null
            },
            {
              "question": "Find count of given string in list using streams.",
              "answer": "Use filter and count operations.",
              "code": {
                "language": "java",
                "content": "List<String> list = Arrays.asList(\"apple\", \"banana\", \"apple\", \"orange\", \"apple\");\nlong count = list.stream().filter(s -> s.equals(\"apple\")).count();"
              }
            },
            {
              "question": "Find occurrence of each string in list using streams.",
              "answer": "Use Collectors.groupingBy with Collectors.counting()",
              "code": {
                "language": "java",
                "content": "List<String> list = Arrays.asList(\"apple\", \"banana\", \"apple\", \"orange\", \"banana\");\nMap<String, Long> result = list.stream()\n    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));"
              }
            },
            {
              "question": "HashMap vs LinkedHashMap difference?",
              "answer": "HashMap: No insertion order maintained, faster access. LinkedHashMap: Maintains insertion order or access order (if configured), slightly slower but predictable iteration.",
              "code": null
            },
            {
              "question": "String comparison with == and .equals()?",
              "answer": "== compares reference (memory address), .equals() compares content. s1 == s2 returns false if different objects. s1.equals(s2) returns false if content is different.",
              "code": null
            },
            {
              "question": "What are exceptions and types?",
              "answer": "Exceptions are events disrupting normal program flow. Two types: Checked (must be handled, e.g., IOException) and Unchecked (runtime, e.g., NullPointerException).",
              "code": null
            },
            {
              "question": "Checked vs unchecked exceptions with examples?",
              "answer": "Checked: Must be handled/try-catch (FileNotFoundException, SQLException). Unchecked: Runtime exceptions (ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException).",
              "code": {
                "language": "java",
                "content": "// Checked\nFileReader reader = new FileReader(\"file.txt\");\n// Unchecked\nint result = 10 / 0;"
              }
            },
            {
              "question": "Rate yourself in Java (1-10).",
              "answer": "8 out of 10. Strong in core Java, Spring Boot, and enterprise application development. Continually learning new features and best practices.",
              "code": null
            },
            {
              "question": "Which data structures are you familiar with?",
              "answer": "Arrays, Lists (ArrayList, LinkedList), Maps (HashMap, TreeMap, LinkedHashMap), Sets (HashSet, TreeSet), Stacks, Queues, Trees (Binary Tree, Binary Search Tree), Heaps.",
              "code": null
            },
            {
              "question": "Stack vs Queue difference?",
              "answer": "Stack: LIFO (Last In First Out) - like a stack of plates. Queue: FIFO (First In First Out) - like a checkout line.",
              "code": null
            },
            {
              "question": "Try-with-resources example?",
              "answer": "Automatic resource management with AutoCloseable resources. Resources are closed automatically.",
              "code": {
                "language": "java",
                "content": "try (FileReader reader = new FileReader(\"file.txt\")) {\n    // Use the reader\n} catch (IOException e) {\n    e.printStackTrace();\n}"
              }
            },
            {
              "question": "When does finally block not execute?",
              "answer": "1. When System.exit() is called\n2. When JVM crashes\n3. When the thread is interrupted\n- In all other cases, finally executes.",
              "code": null
            },
            {
              "question": "Given division code with finally, what's output?",
              "answer": "For inputs 10, 2: Output: 'finally' and returns 5. Finally executes before return.",
              "code": {
                "language": "java",
                "content": "int division(int a, int b) {\n    try { return a / b; }\n    finally { System.out.print(\"finally\"); }\n}"
              }
            },
            {
              "question": "How to create custom exception?",
              "answer": "Extend the Exception class (checked) or RuntimeException (unchecked). Add a constructor with a message.",
              "code": {
                "language": "java",
                "content": "class CustomException extends Exception {\n    public CustomException(String message) {\n        super(message);\n    }\n}"
              }
            },
            {
              "question": "What is a static method?",
              "answer": "A method that belongs to the class, not an instance. Called using the class name. Cannot access instance variables. Cannot be overridden (but can be hidden).",
              "code": null
            },
            {
              "question": "Can static methods be overridden?",
              "answer": "No, static methods cannot be overridden. They can be hidden in subclasses by defining a static method with the same signature.",
              "code": null
            },
            {
              "question": "What is the diamond problem?",
              "answer": "Ambiguity when a class inherits from multiple parent classes with the same method signature. Java avoids this through interfaces with default methods requiring explicit override.",
              "code": null
            },
            {
              "question": "Java 7 vs Java 8 interface difference?",
              "answer": "Java 7: Only abstract methods. Java 8: Supports default methods (with implementation) and static methods in interfaces.",
              "code": null
            },
            {
              "question": "Efficiently find element index in array.",
              "answer": "Binary search for sorted arrays (O(log n)).",
              "code": {
                "language": "java",
                "content": "int[] arr = {2, 4, 6, 8, 9};\nint index = Arrays.binarySearch(arr, 6);"
              }
            },
            {
              "question": "Database join query vs Java processing - faster?",
              "answer": "SQL join is faster. The database is optimized for joins with indexes, query optimization, and less data transfer. Java processing requires transferring more data and manual joining.",
              "code": null
            },
            {
              "question": "How to get data from database in Spring Boot?",
              "answer": "Using Spring Data JPA repositories. Extend JpaRepository and use methods like findAll(), findById(), and custom queries.",
              "code": {
                "language": "java",
                "content": "@Autowired\nprivate UserRepository userRepository;\nList<User> users = userRepository.findAll();"
              }
            },
            {
              "question": "Best collection for middle insertion/deletion?",
              "answer": "LinkedList. It provides O(1) insertion/deletion if you have a reference. ArrayList requires O(n) due to shifting.",
              "code": null
            },
            {
              "question": "Can you remove element during iteration?",
              "answer": "Yes, using Iterator.remove() to avoid ConcurrentModificationException.",
              "code": {
                "language": "java",
                "content": "Iterator<String> it = list.iterator();\nwhile (it.hasNext()) {\n    String s = it.next();\n    if (condition) it.remove();\n}"
              }
            },
            {
              "question": "Can you add to List.of() created list?",
              "answer": "No, List.of() creates an immutable list. Cannot add, remove, or modify elements.",
              "code": null
            },
            {
              "question": "Do you know design patterns?",
              "answer": "Yes, familiar with: Singleton (single instance), Factory (object creation), Observer (event handling), Strategy (algorithm switching), Builder (complex objects), Template (algorithm skeleton), Dependency Injection (Spring default).",
              "code": null
            },
            {
              "question": "What is Singleton pattern?",
              "answer": "Ensures only one instance exists and provides global access. Implementation: private constructor, static instance, static getInstance() method.",
              "code": {
                "language": "java",
                "content": "public class Singleton {\n    private static Singleton instance;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}"
              }
            },
            {
              "question": "Default Spring Boot design pattern?",
              "answer": "Dependency Injection (DI). Spring manages object creation and dependencies through the Inversion of Control (IoC) container.",
              "code": null
            },
            {
              "question": "Multiple catch blocks ordering?",
              "answer": "Catch specific exceptions first, general Exception last. Compile-time error if the general exception comes first.",
              "code": {
                "language": "java",
                "content": "try {\n    // code\n} catch (IOException e) {\n    // handle specific\n} catch (Exception e) {\n    // handle general\n}"
              }
            },
            {
              "question": "Catching general before specific exception?",
              "answer": "Compile-time error. More specific exceptions must be caught before a general Exception.",
              "code": {
                "language": "java",
                "content": "// ERROR: Exception already caught\ncatch (Exception e) {}\ncatch (ArithmeticException e) {} // Unreachable"
              }
            },
            {
              "question": "How familiar are you with SQL queries?",
              "answer": "Very familiar. Can write complex queries with joins (inner, left, right, full), subqueries, aggregate functions (COUNT, SUM, AVG, MAX, MIN), window functions, and stored procedures.",
              "code": null
            },
            {
              "question": "What are SQL joins?",
              "answer": "Inner Join: Matching records only. Left Join: All from left + matches from right. Right Join: All from right + matches from left. Full Join: All from both tables.",
              "code": null
            },
            {
              "question": "Why is main method static?",
              "answer": "The JVM can call the main method without creating a class instance. No object exists before main execution.",
              "code": null
            },
            {
              "question": "Find order ID based on customer name.",
              "answer": "Join order and customer tables, filter by customer name.",
              "code": {
                "language": "sql",
                "content": "SELECT o.oid FROM order o\nINNER JOIN customer c ON o.cid = c.cid\nWHERE c.cname = 'customer_name';"
              }
            },
            {
              "question": "Find second maximum salary.",
              "answer": "Using a subquery with MAX, excluding the max salary.",
              "code": {
                "language": "sql",
                "content": "SELECT MAX(salary) FROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);"
              }
            },
            {
              "question": "What is dependency injection?",
              "answer": "Design pattern where dependencies are injected by the container rather than created internally. Improves testability and loose coupling.",
              "code": {
                "language": "java",
                "content": "@Service\npublic class MyService {\n    private final MyRepository repository;\n    @Autowired\n    public MyService(MyRepository repository) {\n        this.repository = repository;\n    }\n}"
              }
            },
            {
              "question": "How many ways can dependency injection be done?",
              "answer": "Three ways: Constructor Injection (recommended), Setter Injection (for optional dependencies), Field Injection (@Autowired on field - not recommended).",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 80
};
