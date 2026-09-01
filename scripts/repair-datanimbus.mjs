// One-time repair: writes the complete Datanimbus JSON source (the previous
// source was corrupted during manual editing). After running this, regenerate
// the app-facing file with:  node scripts/rebuild-datanimbus.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPANY_DIR = path.join(__dirname, "..", "src", "data", "companyInterviews", "datanimbus");
const OUT = path.join(COMPANY_DIR, "datanimbus.json");

const q = (question, answer, code = null) => ({ question, answer, code });
const java = (content) => ({ language: "java", content });
const sql = (content) => ({ language: "sql", content });

const l1 = [
  q("Introduce yourself", "I am [Your Name], with 3 years of experience in Java Full Stack Development. I specialize in Spring Boot, Microservices, Hibernate, and ReactJS. I have worked on projects like customer registration systems, batch processing for large datasets, and transaction data handling. My expertise includes implementing REST APIs, working with state management in ReactJS, and ensuring robust test coverage with JUnit and Mockito."),
  q("What are the steps in Spring Batch processing?", "Job: The batch process's overall definition containing steps. Step: Represents a stage (Reader → Processor → Writer). ItemReader: Reads input data. ItemProcessor: Processes/transforms data. ItemWriter: Writes processed data. JobRepository: Stores metadata about the batch. JobLauncher: Launches the batch job."),
  q("What is the difference between JDK, JVM, and JRE?", "JDK (Java Development Kit): Includes tools like compilers and debuggers for Java development. JVM (Java Virtual Machine): Executes bytecode, platform-specific. JRE (Java Runtime Environment): Contains JVM and runtime libraries to run Java applications."),
  q("What have you worked on in Spring Batch?", "I implemented a batch job for processing transaction records. It included custom ItemReader which fetched data from a database, and a Processor which validated and transformed data. The Writer updated another database. I also configured error handling and logging for job monitoring."),
  q("Have you worked on Kafka in Spring Batch?", "Yes, I integrated Kafka as a messaging system for batch job communication. Data was read from a Kafka topic, processed in chunks, and written back to another topic, ensuring reliable and asynchronous data flow."),
  q("What are job schedulers in Spring Boot?", "Job schedulers automate running tasks at specific intervals. Spring Task Scheduler: Lightweight, uses cron expressions. Quartz Scheduler: Advanced scheduling with persistence.", java("@Scheduled(cron = \"0 0 1 * * ?\")\npublic void runDailyJob() { }")),
  q("Difference between static block and static variable?", "Static Block: Runs once during class loading, used for initialization logic. Static Variable: Shared by all instances, its value can be updated.", java("static { System.out.println(\"Static block\"); }\nstatic int count = 0;")),
  q("How does parallel processing work, and where is it used?", "Parallel processing divides tasks into smaller subtasks, executed concurrently across multiple threads. Use Case: Processing large datasets or running independent tasks using parallel streams in Java.", java("list.parallelStream().filter(n -> n % 2 == 0).forEach(System.out::println);")),
  q("What is CompletableFuture in Java?", "An API for asynchronous programming. It allows chaining tasks, combining results, and handling exceptions without blocking the main thread.", java("CompletableFuture.supplyAsync(() -> fetchData())\n    .thenApply(data -> process(data))\n    .thenAccept(result -> System.out.println(result));")),
  q("Provide a real-time example of CompletableFuture.", "Fetching user details from one service and user transactions from another concurrently, then combining them into a single response for the client.", java("CompletableFuture<User> userFuture = CompletableFuture.supplyAsync(() -> userService.getUser(id));\nCompletableFuture<List<Transaction>> txFuture = CompletableFuture.supplyAsync(() -> txService.getTransactions(id));\nuserFuture.thenCombine(txFuture, (user, tx) -> new UserResponse(user, tx));")),
  q("Have you worked on microservices?", "Yes, I developed microservices for user management and transaction handling, following RESTful principles. Each service had its own database, and they communicated via REST and Kafka."),
  q("How do microservices communicate?", "Synchronous: REST (HTTP/HTTPS). Asynchronous: Messaging queues like Kafka or RabbitMQ."),
  q("Explain creating a POST API step-by-step", "1. Annotate class with @RestController. 2. Create method with @PostMapping. 3. Accept DTO for request. 4. Inject service class. 5. Implement logic in service and save using JpaRepository. 6. Return appropriate HTTP status codes.", java("@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @Autowired private UserService service;\n    @PostMapping\n    public ResponseEntity<User> create(@RequestBody User user) {\n        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(user));\n    }\n}")),
  q("Difference between Comparable and Comparator", "Comparable: Defines natural order in the class (compareTo). Comparator: External comparison logic (compare). Example: Sorting employees by age (Comparator) vs. by ID (Comparable).", java("class Employee implements Comparable<Employee> {\n    public int compareTo(Employee o) { return this.id - o.id; }\n}\nComparator<Employee> byAge = (e1, e2) -> e1.age - e2.age;")),
  q("Difference between StringBuilder and StringBuffer", "StringBuilder: Faster, non-thread-safe. StringBuffer: Thread-safe, synchronized. Use StringBuilder unless thread safety is needed."),
  q("What is the volatile keyword?", "Ensures visibility of a variable's updates across threads. Prevents caching issues but does not guarantee atomicity.", java("volatile boolean flag = true;")),
  q("Java code for even number sum using streams", "Use filter and mapToInt to sum even numbers.", java("List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);\nint sum = numbers.stream().filter(n -> n % 2 == 0).mapToInt(Integer::intValue).sum();\nSystem.out.println(sum); // 12")),
  q("Difference between Serialization and Deserialization", "Serialization: Converts an object to bytes for storage. Deserialization: Reconstructs the object from bytes."),
  q("What is the Optional class?", "Used to avoid NullPointerException. Represents a value that can be null and provides methods to handle it gracefully.", java("Optional<User> user = repository.findById(id);\nString name = user.map(User::getName).orElse(\"Guest\");")),
  q("How to handle exceptions globally in Spring Boot?", "Use @ControllerAdvice with @ExceptionHandler for global exception handling.", java("@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleException(Exception e) {\n        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);\n    }\n}")),
  q("What is a memory leak, and how to avoid it in Java?", "Memory Leak: Unreferenced objects not garbage collected. Avoidance: Close resources, use weak references, and avoid static fields referencing large objects."),
  q("How to monitor Spring Boot applications?", "Use Spring Actuator for endpoints like /health and /metrics. Combine with tools like Prometheus and Grafana for monitoring.", java("management.endpoints.web.exposure.include=health,metrics,prometheus")),
  q("How does a HashMap work internally?", "Keys are hashed into buckets. Each bucket holds an entry list. If two keys map to the same bucket, a linked list or tree structure handles collisions."),
  q("What is a hash collision?", "Occurs when two keys have the same hash. Resolved using chaining or open addressing."),
  q("What happens if a duplicate key is added to a HashMap?", "The old value is replaced with the new value."),
  q("Difference between @Controller and @RestController", "@Controller: Used for MVC, returns views. @RestController: Used for REST APIs, combines @Controller and @ResponseBody."),
  q("What is @Primary and @Qualifier?", "@Primary: Marks the default bean. @Qualifier: Specifies which bean to use when multiple beans exist.", java("@Primary @Component public class PrimaryBean { }\n@Qualifier(\"secondary\") @Component public class SecondaryBean { }")),
  q("What is @SpringBootApplication?", "A meta-annotation combining @Configuration, @EnableAutoConfiguration, and @ComponentScan.", java("@SpringBootApplication\npublic class Application { public static void main(String[] args) { SpringApplication.run(Application.class, args); } }")),
  q("What is ApplicationContext?", "The Spring container that manages beans and their life cycle.", java("ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);")),
  q("What is Dependency Injection?", "A design pattern where Spring injects objects a class depends on, instead of the class creating them.", java("@Service\npublic class UserService {\n    @Autowired private UserRepository repository;\n}")),
  q("Life Cycle of Beans", "1. Instantiate, 2. Populate properties, 3. @PostConstruct, 4. Use, 5. @PreDestroy.", java("@Component\npublic class MyBean {\n    @PostConstruct public void init() { }\n    @PreDestroy public void destroy() { }\n}")),
  q("What are interceptors?", "Pre- and post-process requests in Spring MVC. Used for logging, authentication, etc.", java("@Component\npublic class LoggingInterceptor implements HandlerInterceptor {\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {\n        System.out.println(\"Request: \" + request.getRequestURI());\n        return true;\n    }\n}")),
  q("Difference between map and flatMap?", "map: Transforms data one-to-one. flatMap: Flattens nested structures one-to-many.", java("list.stream().map(String::toUpperCase);\nlist.stream().flatMap(Collection::stream);")),
  q("What is the this keyword?", "Refers to the current instance of a class.", java("this.name = name;")),
  q("Autoboxing vs. Unboxing", "Autoboxing: Converts primitive to wrapper (int → Integer). Unboxing: Converts wrapper to primitive (Integer → int).", java("Integer num = 10; // Autoboxing\nint value = num; // Unboxing")),
  q("SQL query to join 2 tables without JOIN keyword", "Use implicit join with WHERE condition.", sql("SELECT a.*, b.* FROM TableA a, TableB b WHERE a.id = b.id;")),
  q("How to avoid memory leaks in production?", "Use tools like JVisualVM or Heap Dump Analyzer. Optimize code by closing resources, using thread pools, and monitoring object allocation."),
  q("Explain Spring dependency injection and its uses", "Dependency Injection (DI) decouples object creation. Spring manages dependencies using constructor, setter, or field injection."),
  q("How does HashMap handle duplicate keys?", "If the key already exists, the old value is replaced with the new one."),
  q("How do @Primary and @Qualifier resolve conflicts?", "@Primary: Default preference when multiple beans exist. @Qualifier: Explicitly specifies which bean to use."),
];

const l2 = [
  q("Self-Introduction", "I am [Your Name], with 3 years of experience in Java Full Stack Development. I specialize in developing scalable and maintainable applications using Spring Boot, Hibernate, and ReactJS. My expertise lies in microservices architecture, database optimization, and test-driven development. I have worked on projects like customer registration systems and transaction data handling, ensuring performance optimization and robust error handling."),
  q("Explain your last project and one task in detail", "I recently worked on a bank application focusing on user registration and transaction management. One specific task was implementing a batch process for validating and processing customer transactions. Steps followed: 1) Defined a Job using Spring Batch, including steps for reading, processing, and writing. 2) Configured ItemReader to fetch transactions from database. 3) Applied business validation logic in ItemProcessor. 4) Updated valid transactions using ItemWriter. 5) Set up scheduling using Quartz. Technologies: Spring Boot, Spring Batch, MySQL."),
  q("How do different databases connect internally?", "Spring Boot provides database connectivity using: 1) JDBC: Uses DriverManager to establish connections. 2) Connection Pooling: Tools like HikariCP manage multiple database connections efficiently. 3) JPA/Hibernate: Abstraction layer interacting with database using entities and queries. 4) DataSource: Acts as bridge between application and database, managing connections internally."),
  q("What is Dependency Injection?", "Dependency Injection (DI) is a design pattern where objects (dependencies) are provided to a class rather than being instantiated within the class. Spring Boot implements DI using: 1) Constructor Injection (preferred for mandatory dependencies), 2) Setter Injection (for optional dependencies), 3) Field Injection (directly injects dependencies).", java("@Service\npublic class UserService {\n    private final UserRepository repository;\n    public UserService(UserRepository repository) { // Constructor injection\n        this.repository = repository;\n    }\n}")),
  q("What is the @Component annotation in Spring Boot?", "@Component is a generic stereotype annotation that marks a class as a Spring-managed bean. Spring automatically detects these beans during component scanning.", java("@Component\npublic class MyService {\n    public void performTask() {\n        System.out.println(\"Task performed.\");\n    }\n}")),
  q("What is a memory leak?", "A memory leak occurs when objects are no longer needed but are still referenced, preventing the garbage collector from reclaiming their memory."),
  q("How to handle memory leaks manually?", "1) Close Resources: Ensure streams, database connections, and files are closed after use. 2) Avoid Static References: Large objects held in static fields cause leaks. 3) Weak References: Use WeakReference for cache-like structures. 4) Tools: Use profilers like JVisualVM or Eclipse MAT to detect leaks.", java("try (FileInputStream fis = new FileInputStream(\"file.txt\")) { }")),
  q("What is Reflection in Java?", "Reflection allows inspection and manipulation of classes, methods, and fields at runtime.", java("Class<?> cls = Class.forName(\"com.example.MyClass\");\nMethod method = cls.getMethod(\"myMethod\");\nmethod.invoke(cls.newInstance());")),
  q("Java Code: Find the length of the longest subarray with the same digit", "Traverse array tracking current consecutive count and max.", java("int[] array = {1, 1, 2, 2, 2, 4, 4, 4, 4, 1, 1, 1, 1, 1, 6, 6};\nint maxLen = 0, currLen = 1;\nfor (int i = 1; i < array.length; i++) {\n    if (array[i] == array[i - 1]) {\n        currLen++;\n    } else {\n        maxLen = Math.max(maxLen, currLen);\n        currLen = 1;\n    }\n}\nmaxLen = Math.max(maxLen, currLen);\nSystem.out.println(\"Longest subarray length: \" + maxLen); // 5")),
  q("SQL Query: Find the second maximum age in the employee table", "Use subquery to exclude max age.", sql("SELECT MAX(age) AS second_max_age FROM employees WHERE age < (SELECT MAX(age) FROM employees);")),
  q("How to handle duplicate requests in Spring Boot API?", "1) Use unique identifier (requestId) in request payload. 2) Store requestId in cache (Redis) with TTL. 3) Check cache for duplicates before processing.", java("if (cache.contains(requestId)) {\n    throw new DuplicateRequestException(\"Duplicate request detected.\");\n} else {\n    cache.put(requestId, true);\n}")),
  q("What is Parallel Processing?", "Parallel processing divides tasks into smaller parts and executes them concurrently across multiple threads or processors.", java("list.parallelStream().forEach(System.out::println);")),
  q("What is Spring Boot Actuator and how to implement it?", "Spring Boot Actuator provides production-ready features to monitor and manage applications.", java("<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\nmanagement.endpoints.web.exposure.include=health,metrics")),
  q("What is Spring Boot Context?", "The Spring ApplicationContext is the central interface for accessing Spring-managed beans and their lifecycle. It initializes the container, resolves dependencies, and manages bean scopes.", java("ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);")),
  q("How to optimize a single API?", "1) Database Optimization: Use indexes and optimize queries. 2) Caching: Implement Redis or Ehcache. 3) Lazy Loading: Fetch related data only when required. 4) Compression: Enable GZIP for API responses. 5) Profiling: Use tools like JProfiler to identify bottlenecks."),
];

const l3 = [
  q("Self-Introduction", "I am [Your Name] with 3 years of experience in Java Full Stack Development. I have hands-on experience in Java 8, Spring Boot, Hibernate, and ReactJS. I specialize in building scalable applications, ensuring code quality using test-driven development, and implementing microservices architecture."),
  q("How much do you rate yourself in Java and ReactJS?", "I rate myself 8 out of 10 in Java and 7 out of 10 in ReactJS. I am proficient in both but always open to learning and improving."),
  q("Which Java version are you familiar with?", "I am familiar with Java 8 and Java 11. I have also explored features from Java 17."),
  q("What is the superclass of all classes?", "The superclass of all classes in Java is the Object class."),
  q("Can you explain Object class methods?", "toString(): Returns string representation. hashCode(): Returns hash code. equals(Object o): Checks equality. clone(): Creates copy. wait()/notify()/notifyAll(): Thread synchronization. finalize(): Called by garbage collector."),
  q("What is a thread?", "A thread is the smallest unit of a process that can execute tasks concurrently within a program."),
  q("How do threads transition from running state to runnable state?", "A thread transitions from running to runnable when: 1) It is preempted by the OS scheduler, 2) It calls a blocking method like wait() or sleep()."),
  q("When do we use the wait() method in Java? Give a real-time example.", "The wait() method is used in inter-thread communication. Example: Producer-Consumer Problem.", java("class SharedResource {\n    private boolean available = false;\n    public synchronized void produce() throws InterruptedException {\n        while (available) wait();\n        System.out.println(\"Produced item\");\n        available = true;\n        notifyAll();\n    }\n    public synchronized void consume() throws InterruptedException {\n        while (!available) wait();\n        System.out.println(\"Consumed item\");\n        available = false;\n        notifyAll();\n    }\n}")),
  q("How do notify() and notifyAll() work? Example code.", "notify() wakes up one waiting thread, while notifyAll() wakes up all waiting threads.", java("synchronized(obj) {\n    obj.wait();    // Makes current thread wait\n    obj.notify();  // Wakes up one waiting thread\n    obj.notifyAll(); // Wakes up all waiting threads\n}")),
  q("Can the wait() method take arguments?", "Yes, wait() can take a timeout in milliseconds (wait(long timeout)), which makes the thread wait for the specified time.", java("obj.wait(5000); // Wait for 5 seconds")),
  q("Why is the wait() method in Object and not in Thread?", "wait() is in Object because it operates on the monitor lock of the object, ensuring proper synchronization at the object level."),
  q("How to synchronize an Employee object?", "Synchronize using the synchronized keyword.", java("synchronized (employee) {\n    // critical section\n}")),
  q("Sort a list of employees based on the first name.", "Use Comparator.comparing with method reference.", java("List<Employee> employees = ...;\nemployees.sort(Comparator.comparing(Employee::getFirstName));")),
  q("What are Comparable and Comparator?", "Comparable: Natural ordering of objects (compareTo). Comparator: Custom ordering of objects (compare).", java("class Employee implements Comparable<Employee> {\n    @Override\n    public int compareTo(Employee other) {\n        return this.name.compareTo(other.name);\n    }\n}\nComparator<Employee> byAge = (e1, e2) -> e1.age - e2.age;")),
  q("What is the Observer Design Pattern?", "The Observer Pattern is used for one-to-many dependency relationships where one object notifies dependent objects of state changes.", java("interface Observer { void update(); }\nclass Subject {\n    List<Observer> observers = new ArrayList<>();\n    void notifyObservers() { observers.forEach(Observer::update); }\n}")),
  q("Is String mutable or immutable? Why?", "String is immutable because it ensures security, caching, and thread safety."),
  q("Garbage collection for String s = 'abc'; s1 = s + 'def';", "abc is stored in String pool and not eligible for GC. def is also in String pool. The concatenation creates new object 'abcdef' in heap. If s1 no longer references it, 'abcdef' becomes eligible for garbage collection."),
  q("What is the finalize method?", "The finalize method is called by the garbage collector before the object is destroyed.", java("@Override\nprotected void finalize() throws Throwable {\n    // Cleanup code\n}")),
  q("Does System.gc() call finalize()?", "System.gc() requests garbage collection, and objects collected will have their finalize() method invoked."),
  q("What is the superclass of the Exception class?", "The Throwable class is the superclass of Exception."),
  q("How to handle exceptions?", "Use try-catch blocks, throws keyword, or custom exception handling.", java("try { } catch (Exception e) { }")),
  q("What are the types of exceptions?", "Checked: IOException, SQLException. Unchecked: NullPointerException, IllegalArgumentException."),
  q("Examples of Checked and Unchecked Exceptions", "Checked: IOException, FileNotFoundException, SQLException, InterruptedException, ClassNotFoundException. Unchecked: NullPointerException, ArrayIndexOutOfBoundsException, IllegalArgumentException, ArithmeticException, ClassCastException."),
  q("NullPointerException Example", "When calling method on null reference.", java("String s = null;\ns.length(); // Throws NullPointerException")),
  q("Serialization and Deserialization Example", "Serialization writes object to stream, Deserialization reads object from stream.", java("// Serialization\nObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(\"file.ser\"));\noos.writeObject(object);\n// Deserialization\nObjectInputStream ois = new ObjectInputStream(new FileInputStream(\"file.ser\"));\nObject obj = ois.readObject();")),
  q("Real-time use of Serialization", "Serialization is used in saving object states to a file or transferring objects over a network."),
  q("Ignoring fields for serialization", "Use the transient keyword for fields to exclude them from serialization.", java("class User implements Serializable {\n    private String name;\n    private transient String password; // Not serialized\n}")),
  q("Have you worked with the Concurrency package?", "Yes, I used it to manage thread-safe collections like ConcurrentHashMap and executors in real-time projects."),
  q("Example of Executor Services", "ExecutorService manages thread pool for task execution.", java("ExecutorService executor = Executors.newFixedThreadPool(2);\nexecutor.submit(() -> System.out.println(\"Task executed\"));\nexecutor.shutdown();")),
  q("How to decide thread pool size?", "Based on formula: Thread Pool Size = Number of Cores * (1 + Wait Time / Compute Time)."),
  q("What is ConcurrentHashMap? Why is it needed?", "A thread-safe version of HashMap used for high-performance concurrent applications. Uses segmented locking.", java("ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();")),
  q("Fail-Safe vs. Fail-Fast Iterators Example", "Fail-fast throws ConcurrentModificationException. Fail-safe works on clone.", java("// Fail-Fast\nList<String> list = new ArrayList<>();\nIterator<String> iterator = list.iterator();\nlist.add(\"New\"); // ConcurrentModificationException\n// Fail-Safe\nCopyOnWriteArrayList<String> cowList = new CopyOnWriteArrayList<>();\ncowList.add(\"New\"); // No exception")),
  q("How does ConcurrentHashMap work? Does it lock the whole map?", "It uses a segmented locking mechanism, locking only a portion of the map, not the entire map."),
  q("Strengths and Weaknesses in Core Technology", "Strengths: Proficient in Java, Spring Boot, and ReactJS. Weaknesses: Need to explore advanced JavaScript frameworks more deeply."),
  q("Do you have any Java certifications?", "I have completed Oracle Certified Associate (OCA) Java SE 8 Programmer certification."),
];

const hr = [
  q("Tell me about yourself.", "I am [Your Name] with 3 years of experience in Java Full Stack Development. I specialize in Spring Boot, Microservices, Hibernate, and ReactJS. I have worked on projects like customer registration systems and transaction data handling. I am passionate about building scalable applications and learning new technologies."),
  q("Why do you want to join Datanimbus?", "Datanimbus has a strong reputation for data solutions and innovation. I'm excited about the opportunity to work on challenging projects, learn new technologies, and contribute to the company's growth."),
  q("What are your salary expectations?", "Based on my experience and market standards, I am looking for a competitive package. I'm flexible and happy to discuss further based on the role and responsibilities."),
  q("Where do you see yourself in 5 years?", "I see myself as a technical lead, contributing to architecture decisions and mentoring junior developers. I want to continue growing my technical skills and take on more responsibilities."),
  q("What are your strengths and weaknesses?", "Strengths: Quick learner, problem-solving skills, strong technical foundation, good team player. Weakness: Sometimes focus too much on perfection, working on delegating tasks better."),
  q("Why are you looking for a job change?", "Looking for better growth opportunities, challenging projects, and a chance to work with new technologies. Datanimbus offers the perfect environment for professional growth."),
];

const data = {
  id: "datanimbus",
  name: "Datanimbus",
  role: "Java Developer",
  rounds: [
    { name: "L1 Technical Interview", category: "Core Java & Spring Boot", questions: l1 },
    { name: "L2 Technical Interview", category: "Advanced Java & Spring", questions: l2 },
    { name: "L3 Technical Interview", category: "Expert Java & Multithreading", questions: l3 },
    { name: "HR Round", category: "Behavioral & General", questions: hr },
  ],
};

fs.mkdirSync(COMPANY_DIR, { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n", "utf8");

console.log(
  `✓ datanimbus.json written (L1: ${l1.length}, L2: ${l2.length}, L3: ${l3.length}, HR: ${hr.length} = ${l1.length + l2.length + l3.length + hr.length})`,
);