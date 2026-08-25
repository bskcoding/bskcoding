// AUTO-GENERATED file — company-wise interview data.
// Source: Datanimbus interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "datanimbus",
  "name": "Datanimbus",
  "interviews": [
    {
      "name": "Datanimbus",
      "questionCount": 152,
      "rounds": [
        {
          "name": "L1 Techhnical Interview",
          "questions": [
            {
              "question": "Introduce yourself",
              "answer": "\"I am ----, with 3 years of experience in Java Full Stack Development. I specialize in Spring Boot, Microservices, Hibernate, and ReactJS. I have worked on projects like customer registration systems, batch processing for large datasets, and transaction data handling. My expertise includes implementing REST APIs, working with state management in ReactJS, and ensuring robust test coverage with JUnit and Mockito.\"",
              "code": null
            },
            {
              "question": "What are the steps in Spring Batch processing?",
              "answer": "",
              "code": null
            },
            {
              "question": "Job: The batch process's overall definition, containing steps.",
              "answer": "",
              "code": null
            },
            {
              "question": "Step: Represents a stage (Reader → Processor → Writer).",
              "answer": "",
              "code": null
            },
            {
              "question": "ItemReader: Reads input data.",
              "answer": "",
              "code": null
            },
            {
              "question": "ItemProcessor: Processes/transforms data.",
              "answer": "",
              "code": null
            },
            {
              "question": "ItemWriter: Writes processed data.",
              "answer": "",
              "code": null
            },
            {
              "question": "JobRepository: Stores metadata about the batch.",
              "answer": "",
              "code": null
            },
            {
              "question": "JobLauncher: Launches the batch job.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is the difference between JDK, JVM, and JRE?",
              "answer": "",
              "code": null
            },
            {
              "question": "JDK (Java Development Kit): Includes tools like compilers and debuggers for Java development.",
              "answer": "",
              "code": null
            },
            {
              "question": "JVM (Java Virtual Machine): Executes bytecode. It’s platform-specific.",
              "answer": "",
              "code": null
            },
            {
              "question": "JRE (Java Runtime Environment): Contains JVM and runtime libraries to run Java applications.",
              "answer": "",
              "code": null
            },
            {
              "question": "What have you worked on in Spring Batch?",
              "answer": "\"I implemented a batch job for processing transaction records. It included custom ItemReader, which fetched data from a database, and a Processor, which validated and transformed data. The Writer updated another database. I also configured error handling and logging for job monitoring.\"",
              "code": null
            },
            {
              "question": "Have you worked on Kafka in Spring Batch?",
              "answer": "\"Yes, I integrated Kafka as a messaging system for batch job communication. Data was read from a Kafka topic, processed in chunks, and written back to another topic, ensuring reliable and asynchronous data flow.\"",
              "code": null
            },
            {
              "question": "What are job schedulers in Spring Boot?",
              "answer": "Job schedulers automate running tasks at specific intervals. Examples:",
              "code": null
            },
            {
              "question": "Spring Task Scheduler: Lightweight, uses cron expressions.",
              "answer": "",
              "code": null
            },
            {
              "question": "Quartz Scheduler: Advanced scheduling with persistence.",
              "answer": "",
              "code": null
            },
            {
              "question": "Difference between static block and static variable?",
              "answer": "",
              "code": null
            },
            {
              "question": "Static Block: Runs once during class loading. Used for initialization logic.",
              "answer": "",
              "code": null
            },
            {
              "question": "Static Variable: Shared by all instances. Its value can be updated.",
              "answer": "",
              "code": null
            },
            {
              "question": "How does parallel processing work, and where is it used?",
              "answer": "Parallel processing divides tasks into smaller subtasks, executed concurrently across multiple threads.\nUse Case: Processing large datasets or running independent tasks (e.g., using parallel streams in Java).",
              "code": null
            },
            {
              "question": "What is CompletableFuture in Java?",
              "answer": "An API for asynchronous programming. It allows chaining tasks, combining results, and handling exceptions without blocking the main thread.",
              "code": null
            },
            {
              "question": "Provide a real-time example of CompletableFuture.",
              "answer": "Fetching user details from one service and user transactions from another concurrently, then combining them into a single response for the client.",
              "code": null
            },
            {
              "question": "Have you worked on microservices?",
              "answer": "\"Yes, I developed microservices for user management and transaction handling, following RESTful principles. Each service had its own database, and they communicated via REST and Kafka.\"",
              "code": null
            },
            {
              "question": "How do microservices communicate?",
              "answer": "",
              "code": null
            },
            {
              "question": "Synchronous: REST (HTTP/HTTPS).",
              "answer": "",
              "code": null
            },
            {
              "question": "Asynchronous: Messaging queues like Kafka or RabbitMQ.",
              "answer": "",
              "code": null
            },
            {
              "question": "Explain creating a POST API step-by-step",
              "answer": "1. Annotate the class with @RestController.\n2. Create a method with @PostMapping.\n3. Accept a DTO for the request.\n4. Inject a service class.\n5. Implement logic in the service and save using JpaRepository.\n6. Return appropriate HTTP status codes.",
              "code": null
            },
            {
              "question": "Difference between Comparable and Comparator",
              "answer": "",
              "code": null
            },
            {
              "question": "Comparable: Defines natural order in the class (compareTo).",
              "answer": "",
              "code": null
            },
            {
              "question": "Comparator: External comparison logic (compare).",
              "answer": "Example: Sorting employees by age (Comparator) vs. by ID (Comparable).",
              "code": null
            },
            {
              "question": "Difference between StringBuilder and StringBuffer",
              "answer": "",
              "code": null
            },
            {
              "question": "StringBuilder: Faster, non-thread-safe.",
              "answer": "",
              "code": null
            },
            {
              "question": "StringBuffer: Thread-safe, synchronized.",
              "answer": "Use StringBuilder unless thread safety is needed.",
              "code": null
            },
            {
              "question": "What is the volatile keyword?",
              "answer": "Ensures visibility of a variable’s updates across threads. Prevents caching issues but does not guarantee atomicity.",
              "code": null
            },
            {
              "question": "Java code for even number sum using streams",
              "answer": "",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);\nint sum = numbers.stream().filter(n -> n % 2 == 0).mapToInt(Integer::intValue).sum();"
              }
            },
            {
              "question": "Difference between Serialization and Deserialization",
              "answer": "",
              "code": null
            },
            {
              "question": "Serialization: Converts an object to bytes for storage.",
              "answer": "",
              "code": null
            },
            {
              "question": "Deserialization: Reconstructs the object from bytes.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is the Optional class?",
              "answer": "Used to avoid NullPointerException. It represents a value that can be null and provides methods to handle it gracefully.",
              "code": null
            },
            {
              "question": "How to handle exceptions globally in Spring Boot?",
              "answer": "Use @ControllerAdvice with @ExceptionHandler. Example:",
              "code": {
                "language": "java",
                "content": "@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleException(Exception e) {\n        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);\n    }\n}"
              }
            },
            {
              "question": "What is a memory leak, and how to avoid it in Java?",
              "answer": "",
              "code": null
            },
            {
              "question": "Memory Leak: Unreferenced objects not garbage collected.",
              "answer": "",
              "code": null
            },
            {
              "question": "Avoidance: Close resources, use weak references, and avoid static fields referencing large objects.",
              "answer": "",
              "code": null
            },
            {
              "question": "How to monitor Spring Boot applications?",
              "answer": "Use Spring Actuator for endpoints like /health and /metrics. Combine with tools like Prometheus and Grafana for monitoring.",
              "code": null
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
              "answer": "",
              "code": null
            },
            {
              "question": "@Controller: Used for MVC. Returns views.",
              "answer": "",
              "code": null
            },
            {
              "question": "@RestController: Used for REST APIs. Combines @Controller and @ResponseBody.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is @Primary and @Qualifier?",
              "answer": "",
              "code": null
            },
            {
              "question": "@Primary: Marks the default bean.",
              "answer": "",
              "code": null
            },
            {
              "question": "@Qualifier: Specifies which bean to use when multiple beans exist.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is @SpringBootApplication?",
              "answer": "A meta-annotation combining:\n1. @Configuration\n2. @EnableAutoConfiguration\n3. @ComponentScan",
              "code": null
            },
            {
              "question": "What is ApplicationContext?",
              "answer": "The Spring container that manages beans and their life cycle.",
              "code": null
            },
            {
              "question": "What is Dependency Injection?",
              "answer": "A design pattern where Spring injects objects a class depends on, instead of the class creating them.",
              "code": null
            },
            {
              "question": "Life Cycle of Beans",
              "answer": "1. Instantiate.\n2. Populate properties.\n3. @PostConstruct.\n4. Use.\n5. @PreDestroy.",
              "code": null
            },
            {
              "question": "What are interceptors?",
              "answer": "Pre- and post-process requests in Spring MVC. Used for logging, authentication, etc.",
              "code": null
            },
            {
              "question": "Difference between map and flatMap?",
              "answer": "",
              "code": null
            },
            {
              "question": "map: Transforms data.",
              "answer": "",
              "code": null
            },
            {
              "question": "flatMap: Flattens nested structures.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is the this keyword?",
              "answer": "Refers to the current instance of a class.",
              "code": null
            },
            {
              "question": "Autoboxing vs. Unboxing",
              "answer": "",
              "code": null
            },
            {
              "question": "Autoboxing: Converts primitive to wrapper (int → Integer).",
              "answer": "",
              "code": null
            },
            {
              "question": "Unboxing: Converts wrapper to primitive (Integer → int).",
              "answer": "",
              "code": null
            },
            {
              "question": "SQL query to join 2 tables without JOIN keyword",
              "answer": "",
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
              "answer": "",
              "code": null
            },
            {
              "question": "@Primary: Default preference when multiple beans exist.",
              "answer": "",
              "code": null
            },
            {
              "question": "@Qualifier: Explicitly specifies which bean to use.",
              "answer": "",
              "code": null
            }
          ]
        },
        {
          "name": "L2 Techhnical Interview",
          "questions": [
            {
              "question": "Self-Introduction",
              "answer": "\"I am ----, with 3 years of experience in Java Full Stack Development. I specialize in developing scalable and maintainable applications using Spring Boot, Hibernate, and ReactJS. My expertise lies in microservices architecture, database optimization, and test-driven development. I have worked on projects like customer registration systems and transaction data handling, ensuring performance optimization and robust error handling.\"",
              "code": null
            },
            {
              "question": "Explain your last project and one task in detail",
              "answer": "\"I recently worked on a bank application focusing on user registration and transaction management. One specific task was implementing a batch process for validating and processing customer transactions.",
              "code": null
            },
            {
              "question": "Steps I followed",
              "answer": "1. Defined a Job using Spring Batch, including steps for reading, processing, and writing.\n2. Configured ItemReader to fetch transactions from a database.\n3. Applied business validation logic in ItemProcessor.\n4. Updated valid transactions to the database using ItemWriter.\n5. Set up scheduling using Quartz to run jobs at specific intervals.",
              "code": null
            },
            {
              "question": "Technologies used: Spring Boot, Spring Batch, and MySQL.\"",
              "answer": "",
              "code": null
            },
            {
              "question": "How do different databases connect internally?",
              "answer": "\"Spring Boot provides database connectivity using:",
              "code": null
            },
            {
              "question": "JDBC",
              "answer": ": Uses DriverManager to establish connections.",
              "code": null
            },
            {
              "question": "Connection Pooling",
              "answer": ": Tools like HikariCP manage multiple database connections efficiently.",
              "code": null
            },
            {
              "question": "JPA/Hibernate",
              "answer": ": Abstraction layer to interact with the database using entities and queries, converting objects to SQL statements.",
              "code": null
            },
            {
              "question": "DataSource",
              "answer": ": Acts as a bridge between the application and the database, managing connections internally.\"",
              "code": null
            },
            {
              "question": "What is Dependency Injection?",
              "answer": "\"Dependency Injection (DI) is a design pattern where objects (dependencies) are provided to a class rather than being instantiated within the class. Spring Boot implements DI using:",
              "code": null
            },
            {
              "question": "Constructor Injection",
              "answer": ": Preferred for mandatory dependencies.",
              "code": null
            },
            {
              "question": "Setter Injection",
              "answer": ": Useful for optional dependencies.",
              "code": null
            },
            {
              "question": "Field Injection",
              "answer": ": Directly injects dependencies into class fields.\"",
              "code": null
            },
            {
              "question": "What is the @Component annotation in Spring Boot?",
              "answer": "\"@Component is a generic stereotype annotation that marks a class as a Spring-managed bean. Spring automatically detects these beans during component scanning.",
              "code": {
                "language": "java",
                "content": "@Component\npublic class MyService {\n    public void performTask() {\n        System.out.println(\"Task performed.\");\n    }\n}"
              }
            },
            {
              "question": "What is a memory leak?",
              "answer": "\"A memory leak occurs when objects are no longer needed but are still referenced, preventing the garbage collector from reclaiming their memory.\"",
              "code": null
            },
            {
              "question": "How to handle memory leaks manually?",
              "answer": "",
              "code": null
            },
            {
              "question": "Close Resources: Ensure streams, database connections, and files are closed after use.",
              "answer": "",
              "code": null
            },
            {
              "question": "Avoid Static References: Large objects held in static fields cause leaks.",
              "answer": "",
              "code": null
            },
            {
              "question": "Weak References: Use WeakReference for cache-like structures.",
              "answer": "",
              "code": null
            },
            {
              "question": "Tools: Use profilers like JVisualVM or Eclipse MAT to detect leaks.\"",
              "answer": "",
              "code": null
            },
            {
              "question": "What is Reflection in Java?",
              "answer": "\"Reflection allows inspection and manipulation of classes, methods, and fields at runtime.",
              "code": {
                "language": "java",
                "content": "Class<?> cls = Class.forName(\"com.example.MyClass\");\nMethod method = cls.getMethod(\"myMethod\");\nmethod.invoke(cls.newInstance());"
              }
            },
            {
              "question": "Java Code: Find the length of the longest subarray with the same digit",
              "answer": "",
              "code": {
                "language": "java",
                "content": "int[] array = {1, 1, 2, 2, 2, 4, 4, 4, 4, 1, 1, 1, 1, 1, 6, 6};\nint maxLen = 0, currLen = 1;\n\nfor (int i = 1; i < array.length; i++) {\n    if (array[i] == array[i - 1]) {\n        currLen++;\n    } else {\n        maxLen = Math.max(maxLen, currLen);\n        currLen = 1;\n    }\n}\nmaxLen = Math.max(maxLen, currLen); // Final check for last subarray\nSystem.out.println(\"Longest subarray length: \" + maxLen); // Output: 5"
              }
            },
            {
              "question": "SQL Query: Find the second maximum age in the employee table",
              "answer": "",
              "code": {
                "language": "sql",
                "content": "SELECT MAX(age) AS second_max_age \nFROM employees \nWHERE age < (SELECT MAX(age) FROM employees);"
              }
            },
            {
              "question": "How to handle duplicate requests in Spring Boot API?",
              "answer": "\"To detect duplicate requests:\n1. Use a unique identifier (e.g., requestId) in the request payload.\n2. Store the requestId in a cache (e.g., Redis) with a TTL.\n3. Check the cache for duplicates before processing.",
              "code": {
                "language": "java",
                "content": "if (cache.contains(requestId)) {\n    throw new DuplicateRequestException(\"Duplicate request detected.\");\n} else {\n    cache.put(requestId, true);\n}"
              }
            },
            {
              "question": "What is Parallel Processing?",
              "answer": "\"Parallel processing divides tasks into smaller parts and executes them concurrently across multiple threads or processors.\nExample: Java Streams with .parallelStream() for large data processing.\"",
              "code": null
            },
            {
              "question": "What is Spring Boot Actuator and how to implement it?",
              "answer": "\"Spring Boot Actuator provides production-ready features to monitor and manage applications.\n1. Add dependency:\n2. Enable endpoints in application.properties:\n3. Access endpoints like /actuator/health and /actuator/metrics.\"",
              "code": {
                "language": "properties",
                "content": "management.endpoints.web.exposure.include=health,metrics"
              }
            },
            {
              "question": "What is Spring Boot Context?",
              "answer": "\"The Spring ApplicationContext is the central interface for accessing Spring-managed beans and their lifecycle. It initializes the container, resolves dependencies, and manages bean scopes. Example: AnnotationConfigApplicationContext.\"",
              "code": null
            },
            {
              "question": "How to optimize a single API?",
              "answer": "",
              "code": null
            },
            {
              "question": "Database Optimization: Use indexes and optimize queries.",
              "answer": "",
              "code": null
            },
            {
              "question": "Caching: Implement Redis or Ehcache for frequently accessed data.",
              "answer": "",
              "code": null
            },
            {
              "question": "Lazy Loading: Fetch related data only when required.",
              "answer": "",
              "code": null
            },
            {
              "question": "Compression: Enable GZIP for API responses.",
              "answer": "",
              "code": null
            },
            {
              "question": "Profiling Tools: Use tools like JProfiler to identify bottlenecks.",
              "answer": "",
              "code": null
            }
          ]
        },
        {
          "name": "L3 Techhnical Interview",
          "questions": [
            {
              "question": "Self-Introduction",
              "answer": "\"I am --- with 3 years of experience in Java Full Stack Development. I have hands-on experience in Java 8, Spring Boot, Hibernate, and ReactJS. I specialize in building scalable applications, ensuring code quality using test-driven development, and implementing microservices architecture.\"",
              "code": null
            },
            {
              "question": "How much do you rate yourself in Java and ReactJS?",
              "answer": "\"I rate myself 8 out of 10 in Java and 7 out of 10 in ReactJS. I am proficient in both but always open to learning and improving.\"",
              "code": null
            },
            {
              "question": "Which Java version are you familiar with?",
              "answer": "\"I am familiar with Java 8 and Java 11. I have also explored features from Java 17.\"",
              "code": null
            },
            {
              "question": "What is the superclass of all classes?",
              "answer": "\"The superclass of all classes in Java is the Object class.\"",
              "code": null
            },
            {
              "question": "Can you explain Object class methods?",
              "answer": "",
              "code": null
            },
            {
              "question": "toString(): Returns a string representation of the object.",
              "answer": "",
              "code": null
            },
            {
              "question": "hashCode(): Returns a hash code for the object.",
              "answer": "",
              "code": null
            },
            {
              "question": "equals(Object o): Checks whether two objects are equal.",
              "answer": "",
              "code": null
            },
            {
              "question": "clone(): Creates a copy of the object.",
              "answer": "",
              "code": null
            },
            {
              "question": "wait() / notify() / notifyAll(): Used for thread synchronization.",
              "answer": "",
              "code": null
            },
            {
              "question": "finalize(): Called by the garbage collector before destroying the object.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is a thread?",
              "answer": "\"A thread is the smallest unit of a process that can execute tasks concurrently within a program.\"",
              "code": null
            },
            {
              "question": "How do threads transition from the running state to the runnable state?",
              "answer": "\"A thread transitions from the running state to the runnable state when:\n- It is preempted by the OS scheduler.\n- It calls a blocking method like wait() or sleep().\"",
              "code": null
            },
            {
              "question": "When do we use the wait() method in Java? Give a real-time example.",
              "answer": "\"The wait() method is used in inter-thread communication.\nExample: Producer-Consumer Problem",
              "code": {
                "language": "java",
                "content": "class SharedResource {\n    private boolean available = false;\n\n    public synchronized void produce() throws InterruptedException {\n        while (available) wait();\n        System.out.println(\"Produced item\");\n        available = true;\n        notifyAll();\n    }\n\n    public synchronized void consume() throws InterruptedException {\n        while (!available) wait();\n        System.out.println(\"Consumed item\");\n        available = false;\n        notifyAll();\n    }\n}"
              }
            },
            {
              "question": "How do notify() and notifyAll() work? Example code.",
              "answer": "\"notify() wakes up one waiting thread, while notifyAll() wakes up all waiting threads.",
              "code": {
                "language": "java",
                "content": "synchronized(obj) {\n    obj.wait();    // Makes the current thread wait\n    obj.notify();  // Wakes up one waiting thread\n}"
              }
            },
            {
              "question": "Can the wait() method take arguments?",
              "answer": "\"Yes, wait() can take a timeout in milliseconds (wait(long timeout)), which makes the thread wait for the specified time.\"",
              "code": null
            },
            {
              "question": "Why is the wait() method in Object and not in Thread?",
              "answer": "\"wait() is in Object because it operates on the monitor lock of the object, ensuring proper synchronization at the object level.\"",
              "code": null
            },
            {
              "question": "How to synchronize an Employee object?",
              "answer": "\"Synchronize using the synchronized keyword:",
              "code": {
                "language": "java",
                "content": "synchronized (employee) {\n    // critical section\n}"
              }
            },
            {
              "question": "Sort a list of employees based on the first name.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "List<Employee> employees = ...;\nemployees.sort(Comparator.comparing(Employee::getFirstName));"
              }
            },
            {
              "question": "What are Comparable and Comparator?",
              "answer": "",
              "code": null
            },
            {
              "question": "Comparable: Natural ordering of objects.",
              "answer": "",
              "code": null
            },
            {
              "question": "Comparator: Custom ordering of objects.",
              "answer": "Code Example:",
              "code": {
                "language": "java",
                "content": "class Employee implements Comparable<Employee> {\n    private String name;\n    @Override\n    public int compareTo(Employee other) {\n        return this.name.compareTo(other.name);\n    }\n}"
              }
            },
            {
              "question": "What is the Observer Design Pattern?",
              "answer": "\"The Observer Pattern is used for one-to-many dependency relationships where one object notifies dependent objects of state changes.\"",
              "code": null
            },
            {
              "question": "Is String mutable or immutable? Why?",
              "answer": "\"String is immutable because it ensures security, caching, and thread safety.\"",
              "code": null
            },
            {
              "question": "Garbage collection for String s = \"abc\"; s1 = s + \"def\";",
              "answer": "\"abc\" is stored in the String pool and is not eligible for garbage collection as it is managed by the JVM and remains in the pool for reuse.\n\"def\" is also in the String pool and similarly not eligible for garbage collection.\nThe concatenation s + \"def\" creates a new object \"abcdef\" in the heap memory. If s1 no longer references it, \"abcdef\" becomes eligible for garbage collection.",
              "code": null
            },
            {
              "question": "What is the finalize method?",
              "answer": "\"The finalize method is called by the garbage collector before the object is destroyed.\"",
              "code": null
            },
            {
              "question": "Does System.gc() call finalize()?",
              "answer": "\"System.gc() requests garbage collection, and objects collected will have their finalize() method invoked.\"",
              "code": null
            },
            {
              "question": "What is the superclass of the Exception class?",
              "answer": "\"The Throwable class is the superclass of Exception.\"",
              "code": null
            },
            {
              "question": "How to handle exceptions?",
              "answer": "\"Use try-catch blocks, throws keyword, or custom exception handling.\"",
              "code": null
            },
            {
              "question": "What are the types of exceptions?",
              "answer": "",
              "code": null
            },
            {
              "question": "Checked: IOException, SQLException",
              "answer": "",
              "code": null
            },
            {
              "question": "Unchecked: NullPointerException, IllegalArgumentException",
              "answer": "",
              "code": null
            },
            {
              "question": "Examples of Checked and Unchecked Exceptions",
              "answer": "- Checked: IOException, FileNotFoundException, SQLException, InterruptedException, ClassNotFoundException\n- Unchecked: NullPointerException, ArrayIndexOutOfBoundsException, IllegalArgumentException, ArithmeticException, ClassCastException",
              "code": null
            },
            {
              "question": "NullPointerException Example",
              "answer": "",
              "code": {
                "language": "java",
                "content": "String s = null;\ns.length();  // Throws NullPointerException"
              }
            },
            {
              "question": "Serialization and Deserialization Example",
              "answer": "",
              "code": {
                "language": "java",
                "content": "// Serialization\nObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(\"file.ser\"));\noos.writeObject(object);\n\n// Deserialization\nObjectInputStream ois = new ObjectInputStream(new FileInputStream(\"file.ser\"));\nObject obj = ois.readObject();"
              }
            },
            {
              "question": "Real-time use of Serialization",
              "answer": "\"Serialization is used in saving object states to a file or transferring objects over a network.\"",
              "code": null
            },
            {
              "question": "Ignoring fields for serialization",
              "answer": "\"Use the transient keyword for fields to exclude them.\"",
              "code": null
            },
            {
              "question": "28-29. Have you worked with the Concurrency package?",
              "answer": "\"Yes, I used it to manage thread-safe collections like ConcurrentHashMap and executors in real-time projects.\"",
              "code": null
            },
            {
              "question": "Example of Executor Services",
              "answer": "",
              "code": {
                "language": "java",
                "content": "ExecutorService executor = Executors.newFixedThreadPool(2);\nexecutor.submit(() -> System.out.println(\"Task executed\"));\nexecutor.shutdown();"
              }
            },
            {
              "question": "How to decide thread pool size?",
              "answer": "\"Based on the formula:\nThread Pool Size = Number of Cores * (1 + Wait Time / Compute Time).\"",
              "code": null
            },
            {
              "question": "What is ConcurrentHashMap? Why is it needed?",
              "answer": "\"A thread-safe version of HashMap used for high-performance concurrent applications.\"",
              "code": null
            },
            {
              "question": "Fail-Safe vs. Fail-Fast Iterators Example",
              "answer": "",
              "code": {
                "language": "java",
                "content": "// Fail-Fast\nList<String> list = new ArrayList<>();\nIterator<String> iterator = list.iterator();\nlist.add(\"New\");  // ConcurrentModificationException\n\n// Fail-Safe\nCopyOnWriteArrayList<String> cowList = new CopyOnWriteArrayList<>();\ncowList.add(\"New\");"
              }
            },
            {
              "question": "How does ConcurrentHashMap work? Does it lock the whole map?",
              "answer": "\"It uses a segmented locking mechanism, locking only a portion of the map.\"",
              "code": null
            },
            {
              "question": "Strengths and Weaknesses in Core Technology",
              "answer": "Strengths: Proficient in Java, Spring Boot, and ReactJS\nWeaknesses: Need to explore advanced JavaScript frameworks more deeply.",
              "code": null
            },
            {
              "question": "Do you have any Java certifications?",
              "answer": "\"I have completed Oracle Certified Associate (OCA) Java SE 8 Programmer certification.\"",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 152
};
