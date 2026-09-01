// AUTO-GENERATED file — company-wise interview data.
// Source: Datanimbus interview document(s).
// Regenerate with:  node scripts/rebuild-datanimbus.mjs

export const company = {
  "id": "datanimbus",
  "name": "Datanimbus",
  "interviews": [
    {
      "name": "Datanimbus Interview",
      "questionCount": 96,
      "rounds": [
        {
          "name": "L1 Technical Interview",
          "questions": [
            {
              "question": "Introduce yourself",
              "answer": "I am [Your Name], with 3 years of experience in Java Full Stack Development. I specialize in Spring Boot, Microservices, Hibernate, and ReactJS. I have worked on projects like customer registration systems, batch processing for large datasets, and transaction data handling. My expertise includes implementing REST APIs, working with state management in ReactJS, and ensuring robust test coverage with JUnit and Mockito.",
              "code": null
            },
            {
              "question": "What are the steps in Spring Batch processing?",
              "answer": "Job: The batch process's overall definition containing steps. Step: Represents a stage (Reader → Processor → Writer). ItemReader: Reads input data. ItemProcessor: Processes/transforms data. ItemWriter: Writes processed data. JobRepository: Stores metadata about the batch. JobLauncher: Launches the batch job.",
              "code": null
            },
            {
              "question": "What is the difference between JDK, JVM, and JRE?",
              "answer": "JDK (Java Development Kit): Includes tools like compilers and debuggers for Java development. JVM (Java Virtual Machine): Executes bytecode, platform-specific. JRE (Java Runtime Environment): Contains JVM and runtime libraries to run Java applications.",
              "code": null
            },
            {
              "question": "What have you worked on in Spring Batch?",
              "answer": "I implemented a batch job for processing transaction records. It included custom ItemReader which fetched data from a database, and a Processor which validated and transformed data. The Writer updated another database. I also configured error handling and logging for job monitoring.",
              "code": null
            },
            {
              "question": "Have you worked on Kafka in Spring Batch?",
              "answer": "Yes, I integrated Kafka as a messaging system for batch job communication. Data was read from a Kafka topic, processed in chunks, and written back to another topic, ensuring reliable and asynchronous data flow.",
              "code": null
            },
            {
              "question": "What are job schedulers in Spring Boot?",
              "answer": "Job schedulers automate running tasks at specific intervals. Spring Task Scheduler: Lightweight, uses cron expressions. Quartz Scheduler: Advanced scheduling with persistence.",
              "code": {
                "language": "java",
                "content": "@Scheduled(cron = \"0 0 1 * * ?\")\npublic void runDailyJob() { }"
              }
            },
            {
              "question": "Difference between static block and static variable?",
              "answer": "Static Block: Runs once during class loading, used for initialization logic. Static Variable: Shared by all instances, its value can be updated.",
              "code": {
                "language": "java",
                "content": "static { System.out.println(\"Static block\"); }\nstatic int count = 0;"
              }
            },
            {
              "question": "How does parallel processing work, and where is it used?",
              "answer": "Parallel processing divides tasks into smaller subtasks, executed concurrently across multiple threads. Use Case: Processing large datasets or running independent tasks using parallel streams in Java.",
              "code": {
                "language": "java",
                "content": "list.parallelStream().filter(n -> n % 2 == 0).forEach(System.out::println);"
              }
            },
            {
              "question": "What is CompletableFuture in Java?",
              "answer": "An API for asynchronous programming. It allows chaining tasks, combining results, and handling exceptions without blocking the main thread.",
              "code": {
                "language": "java",
                "content": "CompletableFuture.supplyAsync(() -> fetchData())\n    .thenApply(data -> process(data))\n    .thenAccept(result -> System.out.println(result));"
              }
            },
            {
              "question": "Provide a real-time example of CompletableFuture.",
              "answer": "Fetching user details from one service and user transactions from another concurrently, then combining them into a single response for the client.",
              "code": {
                "language": "java",
                "content": "CompletableFuture<User> userFuture = CompletableFuture.supplyAsync(() -> userService.getUser(id));\nCompletableFuture<List<Transaction>> txFuture = CompletableFuture.supplyAsync(() -> txService.getTransactions(id));\nuserFuture.thenCombine(txFuture, (user, tx) -> new UserResponse(user, tx));"
              }
            },
            {
              "question": "Have you worked on microservices?",
              "answer": "Yes, I developed microservices for user management and transaction handling, following RESTful principles. Each service had its own database, and they communicated via REST and Kafka.",
              "code": null
            },
            {
              "question": "How do microservices communicate?",
              "answer": "Synchronous: REST (HTTP/HTTPS). Asynchronous: Messaging queues like Kafka or RabbitMQ.",
              "code": null
            },
            {
              "question": "Explain creating a POST API step-by-step",
              "answer": "1. Annotate class with @RestController. 2. Create method with @PostMapping. 3. Accept DTO for request. 4. Inject service class. 5. Implement logic in service and save using JpaRepository. 6. Return appropriate HTTP status codes.",
              "code": {
                "language": "java",
                "content": "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @Autowired private UserService service;\n    @PostMapping\n    public ResponseEntity<User> create(@RequestBody User user) {\n        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(user));\n    }\n}"
              }
            },
            {
              "question": "Difference between Comparable and Comparator",
              "answer": "Comparable: Defines natural order in the class (compareTo). Comparator: External comparison logic (compare). Example: Sorting employees by age (Comparator) vs. by ID (Comparable).",
              "code": {
                "language": "java",
                "content": "class Employee implements Comparable<Employee> {\n    public int compareTo(Employee o) { return this.id - o.id; }\n}\nComparator<Employee> byAge = (e1, e2) -> e1.age - e2.age;"
              }
            },
            {
              "question": "Difference between StringBuilder and StringBuffer",
              "answer": "StringBuilder: Faster, non-thread-safe. StringBuffer: Thread-safe, synchronized. Use StringBuilder unless thread safety is needed.",
              "code": null
            },
            {
              "question": "What is the volatile keyword?",
              "answer": "Ensures visibility of a variable's updates across threads. Prevents caching issues but does not guarantee atomicity.",
              "code": {
                "language": "java",
                "content": "volatile boolean flag = true;"
              }
            },
            {
              "question": "Java code for even number sum using streams",
              "answer": "Use filter and mapToInt to sum even numbers.",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);\nint sum = numbers.stream().filter(n -> n % 2 == 0).mapToInt(Integer::intValue).sum();\nSystem.out.println(sum); // 12"
              }
            },
            {
              "question": "Difference between Serialization and Deserialization",
              "answer": "Serialization: Converts an object to bytes for storage. Deserialization: Reconstructs the object from bytes.",
              "code": null
            },
            {
              "question": "What is the Optional class?",
              "answer": "Used to avoid NullPointerException. Represents a value that can be null and provides methods to handle it gracefully.",
              "code": {
                "language": "java",
                "content": "Optional<User> user = repository.findById(id);\nString name = user.map(User::getName).orElse(\"Guest\");"
              }
            },
            {
              "question": "How to handle exceptions globally in Spring Boot?",
              "answer": "Use @ControllerAdvice with @ExceptionHandler for global exception handling.",
              "code": {
                "language": "java",
                "content": "@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleException(Exception e) {\n        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);\n    }\n}"
              }
            },
            {
              "question": "What is a memory leak, and how to avoid it in Java?",
              "answer": "Memory Leak: Unreferenced objects not garbage collected. Avoidance: Close resources, use weak references, and avoid static fields referencing large objects.",
              "code": null
            },
            {
              "question": "How to monitor Spring Boot applications?",
              "answer": "Use Spring Actuator for endpoints like /health and /metrics. Combine with tools like Prometheus and Grafana for monitoring.",
              "code": {
                "language": "java",
                "content": "management.endpoints.web.exposure.include=health,metrics,prometheus"
              }
            },
            {
              "question": "How does a HashMap work internally?",
              "answer": "Keys are hashed into buckets. Each bucket holds an entry list. If two keys map to the same bucket, a linked list or tree structure handles collisions.",
              "code": null
            },
            {
              "question": "What is a hash collision?",
              "answer": "Occurs when two keys have the same hash. Resolved using chaining or open addressing.",
              "code": null
            },
            {
              "question": "What happens if a duplicate key is added to a HashMap?",
              "answer": "The old value is replaced with the new value.",
              "code": null
            },
            {
              "question": "Difference between @Controller and @RestController",
              "answer": "@Controller: Used for MVC, returns views. @RestController: Used for REST APIs, combines @Controller and @ResponseBody.",
              "code": null
            },
            {
              "question": "What is @Primary and @Qualifier?",
              "answer": "@Primary: Marks the default bean. @Qualifier: Specifies which bean to use when multiple beans exist.",
              "code": {
                "language": "java",
                "content": "@Primary @Component public class PrimaryBean { }\n@Qualifier(\"secondary\") @Component public class SecondaryBean { }"
              }
            },
            {
              "question": "What is @SpringBootApplication?",
              "answer": "A meta-annotation combining @Configuration, @EnableAutoConfiguration, and @ComponentScan.",
              "code": {
                "language": "java",
                "content": "@SpringBootApplication\npublic class Application { public static void main(String[] args) { SpringApplication.run(Application.class, args); } }"
              }
            },
            {
              "question": "What is ApplicationContext?",
              "answer": "The Spring container that manages beans and their life cycle.",
              "code": {
                "language": "java",
                "content": "ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);"
              }
            },
            {
              "question": "What is Dependency Injection?",
              "answer": "A design pattern where Spring injects objects a class depends on, instead of the class creating them.",
              "code": {
                "language": "java",
                "content": "@Service\npublic class UserService {\n    @Autowired private UserRepository repository;\n}"
              }
            },
            {
              "question": "Life Cycle of Beans",
              "answer": "1. Instantiate, 2. Populate properties, 3. @PostConstruct, 4. Use, 5. @PreDestroy.",
              "code": {
                "language": "java",
                "content": "@Component\npublic class MyBean {\n    @PostConstruct public void init() { }\n    @PreDestroy public void destroy() { }\n}"
              }
            },
            {
              "question": "What are interceptors?",
              "answer": "Pre- and post-process requests in Spring MVC. Used for logging, authentication, etc.",
              "code": {
                "language": "java",
                "content": "@Component\npublic class LoggingInterceptor implements HandlerInterceptor {\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {\n        System.out.println(\"Request: \" + request.getRequestURI());\n        return true;\n    }\n}"
              }
            },
            {
              "question": "Difference between map and flatMap?",
              "answer": "map: Transforms data one-to-one. flatMap: Flattens nested structures one-to-many.",
              "code": {
                "language": "java",
                "content": "list.stream().map(String::toUpperCase);\nlist.stream().flatMap(Collection::stream);"
              }
            },
            {
              "question": "What is the this keyword?",
              "answer": "Refers to the current instance of a class.",
              "code": {
                "language": "java",
                "content": "this.name = name;"
              }
            },
            {
              "question": "Autoboxing vs. Unboxing",
              "answer": "Autoboxing: Converts primitive to wrapper (int → Integer). Unboxing: Converts wrapper to primitive (Integer → int).",
              "code": {
                "language": "java",
                "content": "Integer num = 10; // Autoboxing\nint value = num; // Unboxing"
              }
            },
            {
              "question": "SQL query to join 2 tables without JOIN keyword",
              "answer": "Use implicit join with WHERE condition.",
              "code": {
                "language": "sql",
                "content": "SELECT a.*, b.* FROM TableA a, TableB b WHERE a.id = b.id;"
              }
            },
            {
              "question": "How to avoid memory leaks in production?",
              "answer": "Use tools like JVisualVM or Heap Dump Analyzer. Optimize code by closing resources, using thread pools, and monitoring object allocation.",
              "code": null
            },
            {
              "question": "Explain Spring dependency injection and its uses",
              "answer": "Dependency Injection (DI) decouples object creation. Spring manages dependencies using constructor, setter, or field injection.",
              "code": null
            },
            {
              "question": "How does HashMap handle duplicate keys?",
              "answer": "If the key already exists, the old value is replaced with the new one.",
              "code": null
            },
            {
              "question": "How do @Primary and @Qualifier resolve conflicts?",
              "answer": "@Primary: Default preference when multiple beans exist. @Qualifier: Explicitly specifies which bean to use.",
              "code": null
            }
          ]
        },
        {
          "name": "L2 Technical Interview",
          "questions": [
            {
              "question": "Self-Introduction",
              "answer": "I am [Your Name], with 3 years of experience in Java Full Stack Development. I specialize in developing scalable and maintainable applications using Spring Boot, Hibernate, and ReactJS. My expertise lies in microservices architecture, database optimization, and test-driven development. I have worked on projects like customer registration systems and transaction data handling, ensuring performance optimization and robust error handling.",
              "code": null
            },
            {
              "question": "Explain your last project and one task in detail",
              "answer": "I recently worked on a bank application focusing on user registration and transaction management. One specific task was implementing a batch process for validating and processing customer transactions. Steps followed: 1) Defined a Job using Spring Batch, including steps for reading, processing, and writing. 2) Configured ItemReader to fetch transactions from database. 3) Applied business validation logic in ItemProcessor. 4) Updated valid transactions using ItemWriter. 5) Set up scheduling using Quartz. Technologies: Spring Boot, Spring Batch, MySQL.",
              "code": null
            },
            {
              "question": "How do different databases connect internally?",
              "answer": "Spring Boot provides database connectivity using: 1) JDBC: Uses DriverManager to establish connections. 2) Connection Pooling: Tools like HikariCP manage multiple database connections efficiently. 3) JPA/Hibernate: Abstraction layer interacting with database using entities and queries. 4) DataSource: Acts as bridge between application and database, managing connections internally.",
              "code": null
            },
            {
              "question": "What is Dependency Injection?",
              "answer": "Dependency Injection (DI) is a design pattern where objects (dependencies) are provided to a class rather than being instantiated within the class. Spring Boot implements DI using: 1) Constructor Injection (preferred for mandatory dependencies), 2) Setter Injection (for optional dependencies), 3) Field Injection (directly injects dependencies).",
              "code": {
                "language": "java",
                "content": "@Service\npublic class UserService {\n    private final UserRepository repository;\n    public UserService(UserRepository repository) { // Constructor injection\n        this.repository = repository;\n    }\n}"
              }
            },
            {
              "question": "What is the @Component annotation in Spring Boot?",
              "answer": "@Component is a generic stereotype annotation that marks a class as a Spring-managed bean. Spring automatically detects these beans during component scanning.",
              "code": {
                "language": "java",
                "content": "@Component\npublic class MyService {\n    public void performTask() {\n        System.out.println(\"Task performed.\");\n    }\n}"
              }
            },
            {
              "question": "What is a memory leak?",
              "answer": "A memory leak occurs when objects are no longer needed but are still referenced, preventing the garbage collector from reclaiming their memory.",
              "code": null
            },
            {
              "question": "How to handle memory leaks manually?",
              "answer": "1) Close Resources: Ensure streams, database connections, and files are closed after use. 2) Avoid Static References: Large objects held in static fields cause leaks. 3) Weak References: Use WeakReference for cache-like structures. 4) Tools: Use profilers like JVisualVM or Eclipse MAT to detect leaks.",
              "code": {
                "language": "java",
                "content": "try (FileInputStream fis = new FileInputStream(\"file.txt\")) { }"
              }
            },
            {
              "question": "What is Reflection in Java?",
              "answer": "Reflection allows inspection and manipulation of classes, methods, and fields at runtime.",
              "code": {
                "language": "java",
                "content": "Class<?> cls = Class.forName(\"com.example.MyClass\");\nMethod method = cls.getMethod(\"myMethod\");\nmethod.invoke(cls.newInstance());"
              }
            },
            {
              "question": "Java Code: Find the length of the longest subarray with the same digit",
              "answer": "Traverse array tracking current consecutive count and max.",
              "code": {
                "language": "java",
                "content": "int[] array = {1, 1, 2, 2, 2, 4, 4, 4, 4, 1, 1, 1, 1, 1, 6, 6};\nint maxLen = 0, currLen = 1;\nfor (int i = 1; i < array.length; i++) {\n    if (array[i] == array[i - 1]) {\n        currLen++;\n    } else {\n        maxLen = Math.max(maxLen, currLen);\n        currLen = 1;\n    }\n}\nmaxLen = Math.max(maxLen, currLen);\nSystem.out.println(\"Longest subarray length: \" + maxLen); // 5"
              }
            },
            {
              "question": "SQL Query: Find the second maximum age in the employee table",
              "answer": "Use subquery to exclude max age.",
              "code": {
                "language": "sql",
                "content": "SELECT MAX(age) AS second_max_age FROM employees WHERE age < (SELECT MAX(age) FROM employees);"
              }
            },
            {
              "question": "How to handle duplicate requests in Spring Boot API?",
              "answer": "1) Use unique identifier (requestId) in request payload. 2) Store requestId in cache (Redis) with TTL. 3) Check cache for duplicates before processing.",
              "code": {
                "language": "java",
                "content": "if (cache.contains(requestId)) {\n    throw new DuplicateRequestException(\"Duplicate request detected.\");\n} else {\n    cache.put(requestId, true);\n}"
              }
            },
            {
              "question": "What is Parallel Processing?",
              "answer": "Parallel processing divides tasks into smaller parts and executes them concurrently across multiple threads or processors.",
              "code": {
                "language": "java",
                "content": "list.parallelStream().forEach(System.out::println);"
              }
            },
            {
              "question": "What is Spring Boot Actuator and how to implement it?",
              "answer": "Spring Boot Actuator provides production-ready features to monitor and manage applications.",
              "code": {
                "language": "java",
                "content": "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\nmanagement.endpoints.web.exposure.include=health,metrics"
              }
            },
            {
              "question": "What is Spring Boot Context?",
              "answer": "The Spring ApplicationContext is the central interface for accessing Spring-managed beans and their lifecycle. It initializes the container, resolves dependencies, and manages bean scopes.",
              "code": {
                "language": "java",
                "content": "ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);"
              }
            },
            {
              "question": "How to optimize a single API?",
              "answer": "1) Database Optimization: Use indexes and optimize queries. 2) Caching: Implement Redis or Ehcache. 3) Lazy Loading: Fetch related data only when required. 4) Compression: Enable GZIP for API responses. 5) Profiling: Use tools like JProfiler to identify bottlenecks.",
              "code": null
            }
          ]
        },
        {
          "name": "L3 Technical Interview",
          "questions": [
            {
              "question": "Self-Introduction",
              "answer": "I am [Your Name] with 3 years of experience in Java Full Stack Development. I have hands-on experience in Java 8, Spring Boot, Hibernate, and ReactJS. I specialize in building scalable applications, ensuring code quality using test-driven development, and implementing microservices architecture.",
              "code": null
            },
            {
              "question": "How much do you rate yourself in Java and ReactJS?",
              "answer": "I rate myself 8 out of 10 in Java and 7 out of 10 in ReactJS. I am proficient in both but always open to learning and improving.",
              "code": null
            },
            {
              "question": "Which Java version are you familiar with?",
              "answer": "I am familiar with Java 8 and Java 11. I have also explored features from Java 17.",
              "code": null
            },
            {
              "question": "What is the superclass of all classes?",
              "answer": "The superclass of all classes in Java is the Object class.",
              "code": null
            },
            {
              "question": "Can you explain Object class methods?",
              "answer": "toString(): Returns string representation. hashCode(): Returns hash code. equals(Object o): Checks equality. clone(): Creates copy. wait()/notify()/notifyAll(): Thread synchronization. finalize(): Called by garbage collector.",
              "code": null
            },
            {
              "question": "What is a thread?",
              "answer": "A thread is the smallest unit of a process that can execute tasks concurrently within a program.",
              "code": null
            },
            {
              "question": "How do threads transition from running state to runnable state?",
              "answer": "A thread transitions from running to runnable when: 1) It is preempted by the OS scheduler, 2) It calls a blocking method like wait() or sleep().",
              "code": null
            },
            {
              "question": "When do we use the wait() method in Java? Give a real-time example.",
              "answer": "The wait() method is used in inter-thread communication. Example: Producer-Consumer Problem.",
              "code": {
                "language": "java",
                "content": "class SharedResource {\n    private boolean available = false;\n    public synchronized void produce() throws InterruptedException {\n        while (available) wait();\n        System.out.println(\"Produced item\");\n        available = true;\n        notifyAll();\n    }\n    public synchronized void consume() throws InterruptedException {\n        while (!available) wait();\n        System.out.println(\"Consumed item\");\n        available = false;\n        notifyAll();\n    }\n}"
              }
            },
            {
              "question": "How do notify() and notifyAll() work? Example code.",
              "answer": "notify() wakes up one waiting thread, while notifyAll() wakes up all waiting threads.",
              "code": {
                "language": "java",
                "content": "synchronized(obj) {\n    obj.wait();    // Makes current thread wait\n    obj.notify();  // Wakes up one waiting thread\n    obj.notifyAll(); // Wakes up all waiting threads\n}"
              }
            },
            {
              "question": "Can the wait() method take arguments?",
              "answer": "Yes, wait() can take a timeout in milliseconds (wait(long timeout)), which makes the thread wait for the specified time.",
              "code": {
                "language": "java",
                "content": "obj.wait(5000); // Wait for 5 seconds"
              }
            },
            {
              "question": "Why is the wait() method in Object and not in Thread?",
              "answer": "wait() is in Object because it operates on the monitor lock of the object, ensuring proper synchronization at the object level.",
              "code": null
            },
            {
              "question": "How to synchronize an Employee object?",
              "answer": "Synchronize using the synchronized keyword.",
              "code": {
                "language": "java",
                "content": "synchronized (employee) {\n    // critical section\n}"
              }
            },
            {
              "question": "Sort a list of employees based on the first name.",
              "answer": "Use Comparator.comparing with method reference.",
              "code": {
                "language": "java",
                "content": "List<Employee> employees = ...;\nemployees.sort(Comparator.comparing(Employee::getFirstName));"
              }
            },
            {
              "question": "What are Comparable and Comparator?",
              "answer": "Comparable: Natural ordering of objects (compareTo). Comparator: Custom ordering of objects (compare).",
              "code": {
                "language": "java",
                "content": "class Employee implements Comparable<Employee> {\n    @Override\n    public int compareTo(Employee other) {\n        return this.name.compareTo(other.name);\n    }\n}\nComparator<Employee> byAge = (e1, e2) -> e1.age - e2.age;"
              }
            },
            {
              "question": "What is the Observer Design Pattern?",
              "answer": "The Observer Pattern is used for one-to-many dependency relationships where one object notifies dependent objects of state changes.",
              "code": {
                "language": "java",
                "content": "interface Observer { void update(); }\nclass Subject {\n    List<Observer> observers = new ArrayList<>();\n    void notifyObservers() { observers.forEach(Observer::update); }\n}"
              }
            },
            {
              "question": "Is String mutable or immutable? Why?",
              "answer": "String is immutable because it ensures security, caching, and thread safety.",
              "code": null
            },
            {
              "question": "Garbage collection for String s = 'abc'; s1 = s + 'def';",
              "answer": "abc is stored in String pool and not eligible for GC. def is also in String pool. The concatenation creates new object 'abcdef' in heap. If s1 no longer references it, 'abcdef' becomes eligible for garbage collection.",
              "code": null
            },
            {
              "question": "What is the finalize method?",
              "answer": "The finalize method is called by the garbage collector before the object is destroyed.",
              "code": {
                "language": "java",
                "content": "@Override\nprotected void finalize() throws Throwable {\n    // Cleanup code\n}"
              }
            },
            {
              "question": "Does System.gc() call finalize()?",
              "answer": "System.gc() requests garbage collection, and objects collected will have their finalize() method invoked.",
              "code": null
            },
            {
              "question": "What is the superclass of the Exception class?",
              "answer": "The Throwable class is the superclass of Exception.",
              "code": null
            },
            {
              "question": "How to handle exceptions?",
              "answer": "Use try-catch blocks, throws keyword, or custom exception handling.",
              "code": {
                "language": "java",
                "content": "try { } catch (Exception e) { }"
              }
            },
            {
              "question": "What are the types of exceptions?",
              "answer": "Checked: IOException, SQLException. Unchecked: NullPointerException, IllegalArgumentException.",
              "code": null
            },
            {
              "question": "Examples of Checked and Unchecked Exceptions",
              "answer": "Checked: IOException, FileNotFoundException, SQLException, InterruptedException, ClassNotFoundException. Unchecked: NullPointerException, ArrayIndexOutOfBoundsException, IllegalArgumentException, ArithmeticException, ClassCastException.",
              "code": null
            },
            {
              "question": "NullPointerException Example",
              "answer": "When calling method on null reference.",
              "code": {
                "language": "java",
                "content": "String s = null;\ns.length(); // Throws NullPointerException"
              }
            },
            {
              "question": "Serialization and Deserialization Example",
              "answer": "Serialization writes object to stream, Deserialization reads object from stream.",
              "code": {
                "language": "java",
                "content": "// Serialization\nObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(\"file.ser\"));\noos.writeObject(object);\n// Deserialization\nObjectInputStream ois = new ObjectInputStream(new FileInputStream(\"file.ser\"));\nObject obj = ois.readObject();"
              }
            },
            {
              "question": "Real-time use of Serialization",
              "answer": "Serialization is used in saving object states to a file or transferring objects over a network.",
              "code": null
            },
            {
              "question": "Ignoring fields for serialization",
              "answer": "Use the transient keyword for fields to exclude them from serialization.",
              "code": {
                "language": "java",
                "content": "class User implements Serializable {\n    private String name;\n    private transient String password; // Not serialized\n}"
              }
            },
            {
              "question": "Have you worked with the Concurrency package?",
              "answer": "Yes, I used it to manage thread-safe collections like ConcurrentHashMap and executors in real-time projects.",
              "code": null
            },
            {
              "question": "Example of Executor Services",
              "answer": "ExecutorService manages thread pool for task execution.",
              "code": {
                "language": "java",
                "content": "ExecutorService executor = Executors.newFixedThreadPool(2);\nexecutor.submit(() -> System.out.println(\"Task executed\"));\nexecutor.shutdown();"
              }
            },
            {
              "question": "How to decide thread pool size?",
              "answer": "Based on formula: Thread Pool Size = Number of Cores * (1 + Wait Time / Compute Time).",
              "code": null
            },
            {
              "question": "What is ConcurrentHashMap? Why is it needed?",
              "answer": "A thread-safe version of HashMap used for high-performance concurrent applications. Uses segmented locking.",
              "code": {
                "language": "java",
                "content": "ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();"
              }
            },
            {
              "question": "Fail-Safe vs. Fail-Fast Iterators Example",
              "answer": "Fail-fast throws ConcurrentModificationException. Fail-safe works on clone.",
              "code": {
                "language": "java",
                "content": "// Fail-Fast\nList<String> list = new ArrayList<>();\nIterator<String> iterator = list.iterator();\nlist.add(\"New\"); // ConcurrentModificationException\n// Fail-Safe\nCopyOnWriteArrayList<String> cowList = new CopyOnWriteArrayList<>();\ncowList.add(\"New\"); // No exception"
              }
            },
            {
              "question": "How does ConcurrentHashMap work? Does it lock the whole map?",
              "answer": "It uses a segmented locking mechanism, locking only a portion of the map, not the entire map.",
              "code": null
            },
            {
              "question": "Strengths and Weaknesses in Core Technology",
              "answer": "Strengths: Proficient in Java, Spring Boot, and ReactJS. Weaknesses: Need to explore advanced JavaScript frameworks more deeply.",
              "code": null
            },
            {
              "question": "Do you have any Java certifications?",
              "answer": "I have completed Oracle Certified Associate (OCA) Java SE 8 Programmer certification.",
              "code": null
            }
          ]
        },
        {
          "name": "HR Round",
          "questions": [
            {
              "question": "Tell me about yourself.",
              "answer": "I am [Your Name] with 3 years of experience in Java Full Stack Development. I specialize in Spring Boot, Microservices, Hibernate, and ReactJS. I have worked on projects like customer registration systems and transaction data handling. I am passionate about building scalable applications and learning new technologies.",
              "code": null
            },
            {
              "question": "Why do you want to join Datanimbus?",
              "answer": "Datanimbus has a strong reputation for data solutions and innovation. I'm excited about the opportunity to work on challenging projects, learn new technologies, and contribute to the company's growth.",
              "code": null
            },
            {
              "question": "What are your salary expectations?",
              "answer": "Based on my experience and market standards, I am looking for a competitive package. I'm flexible and happy to discuss further based on the role and responsibilities.",
              "code": null
            },
            {
              "question": "Where do you see yourself in 5 years?",
              "answer": "I see myself as a technical lead, contributing to architecture decisions and mentoring junior developers. I want to continue growing my technical skills and take on more responsibilities.",
              "code": null
            },
            {
              "question": "What are your strengths and weaknesses?",
              "answer": "Strengths: Quick learner, problem-solving skills, strong technical foundation, good team player. Weakness: Sometimes focus too much on perfection, working on delegating tasks better.",
              "code": null
            },
            {
              "question": "Why are you looking for a job change?",
              "answer": "Looking for better growth opportunities, challenging projects, and a chance to work with new technologies. Datanimbus offers the perfect environment for professional growth.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 96
};
