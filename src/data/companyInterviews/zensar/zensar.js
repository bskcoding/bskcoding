// AUTO-GENERATED file — company-wise interview data.
// Source: Zensar interview document(s).
// Do not edit manually — regenerate with: node scripts/rebuild-zensar-amex.mjs

export const company = {
  "id": "zensar",
  "name": "Zensar",
  "interviews": [
    {
      "name": "Zensar Technical Interview",
      "questionCount": 23,
      "rounds": [
        {
          "name": "Technical Interview",
          "questions": [
            {
              "question": "Self Introduction (Project-Oriented)",
              "answer": "I have around 4.5 years of experience as a Java Full Stack Developer. Currently working on a customer onboarding and transaction processing system. Responsibilities include: Developing REST & Reactive APIs using Spring Boot & WebFlux, Handling high-volume traffic using non-blocking architecture, Integrating Kafka for async communication, Writing unit tests using JUnit & Mockito, and Frontend development using ReactJS. Achievements: Improved API performance using reactive programming, Implemented JWT-based authentication, Optimized microservices communication.",
              "code": null
            },
            {
              "question": "What is Reactive Programming? Explain Mono vs Flux.",
              "answer": "Reactive Programming is an asynchronous, non-blocking approach. Mono represents 0 or 1 element. Flux represents 0 to N elements. Used for handling high-concurrency applications with better resource utilization.",
              "code": null
            },
            {
              "question": "Where do we use Mono?",
              "answer": "Used when we expect a single result. Examples: Get user by ID, Login response, Payment status, Fetching bank account balance.",
              "code": {
                "language": "java",
                "content": "public Mono<Double> getBalance(String accountId) {\n    return webClient.get()\n        .uri(\"/balance/\" + accountId)\n        .retrieve()\n        .bodyToMono(Double.class);\n}"
              }
            },
            {
              "question": "How to call APIs using WebClient?",
              "answer": "WebClient is Spring WebFlux's non-blocking HTTP client. Used to call external APIs asynchronously without blocking threads.",
              "code": {
                "language": "java",
                "content": "@Service\npublic class UserService {\n    private final WebClient webClient;\n    public UserService(WebClient.Builder builder) {\n        this.webClient = builder.baseUrl(\"http://localhost:8081\").build();\n    }\n    public Mono<String> getUser() {\n        return webClient.get()\n            .uri(\"/user\")\n            .retrieve()\n            .bodyToMono(String.class)\n            .onErrorReturn(\"Fallback User\");\n    }\n}"
              }
            },
            {
              "question": "How do you secure APIs?",
              "answer": "Using Spring Security, JWT Authentication, Role-based authorization, HTTPS, Input validation, and CORS configuration.",
              "code": null
            },
            {
              "question": "Explain JWT Authentication Workflow.",
              "answer": "1) User sends login credentials, 2) Server validates credentials, 3) JWT token generated, 4) Token sent to client, 5) Client sends token in header, 6) Server validates token using JWT Filter.",
              "code": null
            },
            {
              "question": "What are HTTP Status Codes?",
              "answer": "200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error.",
              "code": null
            },
            {
              "question": "Difference between 501 and 502?",
              "answer": "501 Not Implemented - Server doesn't support functionality. 502 Bad Gateway - Invalid response from upstream server.",
              "code": null
            },
            {
              "question": "What is CORS?",
              "answer": "CORS (Cross-Origin Resource Sharing) allows cross-origin requests. Origin = protocol + host + port.",
              "code": {
                "language": "java",
                "content": "@Configuration\npublic class CorsConfig {\n    @Bean\n    public WebMvcConfigurer corsConfigurer() {\n        return registry -> registry.addMapping(\"/**\")\n            .allowedOrigins(\"*\")\n            .allowedMethods(\"*\");\n    }\n}"
              }
            },
            {
              "question": "What are Java 17 Features?",
              "answer": "Records, Sealed Classes, Pattern Matching, Text Blocks, Enhanced Switch, Better Garbage Collectors, Improved Security.",
              "code": null
            },
            {
              "question": "Explain Java 8 Supplier and Consumer.",
              "answer": "Supplier provides values, Consumer consumes values.",
              "code": {
                "language": "java",
                "content": "Supplier<String> supplier = () -> \"Hello\";\nConsumer<String> consumer = x -> System.out.println(x);\nconsumer.accept(supplier.get());"
              }
            },
            {
              "question": "What is Method Reference?",
              "answer": "Short form of lambda expression. Used for better readability and cleaner code.",
              "code": {
                "language": "java",
                "content": "list.forEach(System.out::println);"
              }
            },
            {
              "question": "Explain CompletableFuture with example.",
              "answer": "CompletableFuture is Java 8 feature for asynchronous programming. Supports chaining, combining multiple async computations, and exception handling.",
              "code": {
                "language": "java",
                "content": "CompletableFuture.supplyAsync(() -> \"Hello\")\n    .thenApply(String::toUpperCase)\n    .thenAccept(System.out::println);"
              }
            },
            {
              "question": "What is Executor Framework?",
              "answer": "Used for background jobs, async processing, email sending, and thread pool management.",
              "code": null
            },
            {
              "question": "Explain Callable and Future.",
              "answer": "Callable returns a value. Future holds the result of asynchronous computation.",
              "code": {
                "language": "java",
                "content": "ExecutorService executor = Executors.newFixedThreadPool(1);\nFuture<Integer> future = executor.submit(() -> 10 + 20);\nSystem.out.println(future.get());"
              }
            },
            {
              "question": "Difference between parallelStream and flatMap?",
              "answer": "parallelStream enables multi-threading. flatMap flattens nested collections.",
              "code": null
            },
            {
              "question": "How to flatten List of List of List using streams?",
              "answer": "Using multiple flatMap operations.",
              "code": {
                "language": "java",
                "content": "List<Integer> result = list.stream()\n    .flatMap(List::stream)\n    .flatMap(List::stream)\n    .toList();"
              }
            },
            {
              "question": "Explain flatMap with example.",
              "answer": "flatMap transforms each element into a stream and flattens.",
              "code": {
                "language": "java",
                "content": "List<List<Integer>> list = List.of(\n    List.of(1,2),\n    List.of(3,4)\n);\nList<Integer> result = list.stream()\n    .flatMap(Collection::stream)\n    .toList();"
              }
            },
            {
              "question": "Difference between HashSet and TreeSet?",
              "answer": "HashSet: O(1) operations, unordered. TreeSet: O(log n) operations, sorted.",
              "code": null
            },
            {
              "question": "What is Composition vs Aggregation?",
              "answer": "Composition - strong relationship (Car-Engine). Aggregation - weak relationship (School-Student).",
              "code": null
            },
            {
              "question": "What are your strengths and weaknesses?",
              "answer": "Strengths: Problem solving, Quick learner. Weakness: Sometimes focus too much on perfection.",
              "code": null
            },
            {
              "question": "Why are you looking for a job change?",
              "answer": "Looking for better growth, learning opportunities, and challenging work.",
              "code": null
            },
            {
              "question": "Explain Builder vs Strategy Pattern.",
              "answer": "Builder Pattern: Creates complex objects step by step. Strategy Pattern: Defines family of algorithms, encapsulates each one, and makes them interchangeable.",
              "code": {
                "language": "java",
                "content": "// Builder Pattern\nUser user = User.builder()\n    .name(\"Venkatesh\")\n    .age(25)\n    .build();\n\n// Strategy Pattern\ninterface PaymentStrategy { void pay(); }\nclass UpiPayment implements PaymentStrategy {\n    public void pay() {\n        System.out.println(\"Paid using UPI\");\n    }\n}"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "American Express Interview",
      "questionCount": 43,
      "rounds": [
        {
          "name": "Technical L1",
          "questions": [
            {
              "question": "Self Introduction with Real-Time Project",
              "answer": "Hi, I'm Venkatesh, and I have around 5+ years of experience as a Java Backend Developer specializing in Java 8/17, Spring Boot, Spring WebFlux, Microservices, Kafka, REST APIs, Cassandra, PostgreSQL, Docker, Kubernetes, and CI/CD. Currently, I'm working on the American Express MARS Platform, which is a Microservices-based financial application responsible for managing customer accounts, payments, refunds, and financial obligations. Responsibilities: Develop REST APIs, Build Reactive APIs using Mono/Flux, Integrate downstream services using WebClient, Publish/consume Kafka events, Write Unit Tests, Resolve Production Issues, Optimize API performance, Deploy through Jenkins/Kubernetes.",
              "code": null
            },
            {
              "question": "Difference between Java 8 and Java 17?",
              "answer": "Java 8 features: Lambda, Stream API, Optional, Date/Time API, Default methods. Java 17 features: Records, Sealed Classes, Pattern Matching, Text Blocks, Switch Expressions, Better G1, ZGC, Shenandoah Garbage Collectors, Improved Security.",
              "code": null
            },
            {
              "question": "Difference between flatMap() and concatMap()?",
              "answer": "flatMap executes asynchronously in parallel, order NOT guaranteed. concatMap executes sequentially, order guaranteed. Use flatMap for independent operations, concatMap when order matters.",
              "code": {
                "language": "java",
                "content": "// flatMap - parallel, unordered\nFlux.just(1,2,3).flatMap(i -> callAPI(i)).subscribe();\n// concatMap - sequential, ordered\nFlux.just(1,2,3).concatMap(i -> callAPI(i)).subscribe();"
              }
            },
            {
              "question": "Explain Optional Class.",
              "answer": "Optional introduced in Java 8 to avoid NullPointerException. Methods: of(), ofNullable(), empty(), isPresent(), ifPresent(), orElse(), orElseGet(), orElseThrow().",
              "code": {
                "language": "java",
                "content": "Optional<User> user = repository.findById(id);\nString name = user.map(User::getName).orElse(\"Guest\");"
              }
            },
            {
              "question": "What is Lambda Expression?",
              "answer": "Lambda Expression is a shorter way of implementing Functional Interfaces. Syntax: (parameters) -> expression. Used with Stream API, Comparator, Sorting, Filtering.",
              "code": {
                "language": "java",
                "content": "Runnable r = () -> System.out.println(\"Hello\");\nemployees.stream().filter(emp -> emp.getSalary()>50000).forEach(System.out::println);"
              }
            },
            {
              "question": "What is Functional Interface?",
              "answer": "Functional Interface contains exactly one abstract method. Can have multiple default and static methods. Built-in: Predicate, Consumer, Supplier, Function, UnaryOperator, BinaryOperator.",
              "code": null
            },
            {
              "question": "Difference between Spring MVC, Spring Boot, and Spring WebFlux?",
              "answer": "Spring MVC: Blocking, Servlet API, Thread per request, Better for CRUD. Spring Boot: Auto Configuration, Easy Development. Spring WebFlux: Non-Blocking, Event Loop, Fewer threads, High Concurrency.",
              "code": null
            },
            {
              "question": "Explain @SpringBootApplication.",
              "answer": "@SpringBootApplication is combination of @Configuration, @EnableAutoConfiguration, @ComponentScan. Used as entry point for Spring Boot application.",
              "code": {
                "language": "java",
                "content": "@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}"
              }
            },
            {
              "question": "How do you handle errors in Microservices?",
              "answer": "Using Global Exception Handler, Standard Error Response, Proper HTTP Status Codes, Logging, Correlation ID, Retry, Circuit Breaker, Fallback. Never expose Java exceptions directly.",
              "code": {
                "language": "java",
                "content": "@RestControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handle(Exception ex) {\n        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)\n            .body(ex.getMessage());\n    }\n}"
              }
            },
            {
              "question": "What is Spring WebFlux?",
              "answer": "Spring WebFlux is Spring's Reactive Web Framework introduced in Spring 5. Supports non-blocking, asynchronous, event-driven programming using Project Reactor (Mono, Flux). Uses Event Loop Model with fewer threads.",
              "code": {
                "language": "java",
                "content": "@GetMapping(\"/{id}\")\npublic Mono<User> getUser(@PathVariable int id) {\n    return service.getUser(id);\n}"
              }
            },
            {
              "question": "Difference between Flux and Mono?",
              "answer": "Mono emits 0 or 1 value. Flux emits 0 to N values. Mono for single result, Flux for multiple results.",
              "code": {
                "language": "java",
                "content": "// Mono - single result\nMono<User> user = userService.getUser(id);\n// Flux - multiple results\nFlux<User> users = userService.getUsers();"
              }
            },
            {
              "question": "What is Spring WebClient? If WebClient is not available, how will you call another Microservice?",
              "answer": "WebClient is Spring WebFlux's non-blocking HTTP client. If not available, use RestTemplate, OpenFeign Client, HttpClient, or OkHttp.",
              "code": {
                "language": "java",
                "content": "WebClient webClient = WebClient.create();\nMono<User> response = webClient.get()\n    .uri(\"http://user-service/users/1\")\n    .retrieve()\n    .bodyToMono(User.class);"
              }
            },
            {
              "question": "How do you handle 10 Million Records in an API?",
              "answer": "Use Pagination, Database Index, Filtering, Streaming Response (Flux), Compression (GZIP), Caching (Redis/Caffeine), Async Processing for large reports.",
              "code": null
            },
            {
              "question": "What is the Request and Response Time of APIs in your project?",
              "answer": "Simple CRUD: 100-200ms, Database Query: 200-500ms, External API Call: 500ms-2sec, Multiple Services: 1-3 sec. Improved from 2.8 seconds to 800ms using WebClient parallel calls, indexing, caching.",
              "code": null
            },
            {
              "question": "Have you worked on Unit Testing? Which Framework?",
              "answer": "Yes. JUnit 5, Mockito, Spring Boot Test. Used for improving code quality, preventing bugs, supporting CI/CD.",
              "code": {
                "language": "java",
                "content": "@Mock UserRepository repository;\n@InjectMocks UserService service;\n@Test\nvoid testGetUser() {\n    when(repository.findById(1L)).thenReturn(Optional.of(new User()));\n    User user = service.getUser(1L);\n    assertNotNull(user);\n}"
              }
            },
            {
              "question": "Which databases have you worked with?",
              "answer": "Cassandra (distributed systems), PostgreSQL (transactional data), MySQL (CRUD applications), Oracle (legacy systems). Customer Profile in PostgreSQL, Transaction Events in Cassandra.",
              "code": null
            },
            {
              "question": "How do you implement Idempotency in Microservices?",
              "answer": "Generate Idempotency-Key (UUID). Store in database. If duplicate request arrives, return previous response. Prevents duplicate processing of same request.",
              "code": null
            },
            {
              "question": "What is Event-Driven System?",
              "answer": "Services communicate through events instead of direct API calls. Example: Order Created event triggers Inventory, Notification, Payment services. Advantages: Loose Coupling, High Scalability, Better Reliability.",
              "code": null
            },
            {
              "question": "Database contains millions of events. Fetch the latest 5 events.",
              "answer": "SELECT * FROM event_table ORDER BY created_date DESC LIMIT 5; Create index on created_date for optimization.",
              "code": {
                "language": "java",
                "content": "SELECT * FROM event_table ORDER BY created_date DESC LIMIT 5;\nCREATE INDEX idx_created_date ON event_table(created_date);"
              }
            },
            {
              "question": "How is Message Ordering maintained in Kafka?",
              "answer": "Kafka guarantees ordering only within a single partition. Ordering maintained using offset. Each message gets a unique offset. For ordering, all events should go to same partition using partition key (e.g., CustomerId).",
              "code": null
            },
            {
              "question": "If there are 3 Consumers, can they read partition messages in parallel without duplicates?",
              "answer": "Yes, Kafka allows multiple consumers in same Consumer Group to read partitions in parallel. One partition assigned to only one consumer per group. Duplicates may occur when consumer crashes before committing offset or producer retries. Avoid duplicates using Idempotent Producer, unique Transaction IDs, commit offsets after processing, store processed event IDs.",
              "code": null
            },
            {
              "question": "Explain your Project Deployment Process.",
              "answer": "CI/CD Pipeline: Git Push -> Pull Request Review -> Merge -> Jenkins Pipeline -> Maven Build -> Unit Tests -> SonarQube Code Scan -> Docker Image Build -> Push Image -> Kubernetes Deployment -> Smoke Testing -> Production.",
              "code": null
            },
            {
              "question": "Which CI/CD Pipeline or Tool are you using?",
              "answer": "Git, Jenkins, Maven, SonarQube, Docker, Kubernetes, Nexus/Artifactory, Helm, ArgoCD. Pipeline: Git -> Jenkins -> Maven Build -> JUnit -> SonarQube -> Docker -> Push Image -> Kubernetes Deployment -> Health Check.",
              "code": null
            },
            {
              "question": "How do you solve Production Issues in Real Time?",
              "answer": "Step 1: Understand issue. Step 2: Check logs. Step 3: Verify monitoring dashboards. Step 4: Identify Root Cause. Step 5: Implement fix. Step 6: Deploy hotfix through CI/CD. Step 7: Prepare RCA document.",
              "code": null
            },
            {
              "question": "What is Reactive Programming, and why did you use it in your project?",
              "answer": "Reactive Programming is asynchronous, non-blocking programming model. Used for high concurrency, better scalability, non-blocking I/O, lower memory usage, better response time. Example: Customer Dashboard API called Customer, Account, Rewards, Transaction services in parallel using WebClient.",
              "code": null
            },
            {
              "question": "Why did you choose Spring WebFlux instead of Spring MVC?",
              "answer": "Spring MVC uses blocking model (thread per request). WebFlux uses non-blocking Event Loop model with fewer threads, better for high concurrency. Our API aggregates multiple downstream services, WebFlux allows parallel calls reducing latency.",
              "code": null
            },
            {
              "question": "How do you call multiple downstream APIs in parallel using WebClient?",
              "answer": "Using Mono.zip() to execute independent API calls concurrently. All APIs run in parallel, reducing total response time.",
              "code": {
                "language": "java",
                "content": "Mono<Customer> customer = customerClient.getCustomer(id);\nMono<Account> account = accountClient.getAccount(id);\nMono<Reward> reward = rewardClient.getReward(id);\nreturn Mono.zip(customer, account, reward)\n    .map(tuple -> new CustomerResponse(\n        tuple.getT1(),\n        tuple.getT2(),\n        tuple.getT3()\n    ));"
              }
            },
            {
              "question": "How do you handle exceptions, retries, and fallback in Spring WebFlux?",
              "answer": "Using Project Reactor operators: timeout(), retry(), onErrorResume().",
              "code": {
                "language": "java",
                "content": "return webClient.get()\n    .uri(\"/customers\")\n    .retrieve()\n    .bodyToMono(Customer.class)\n    .timeout(Duration.ofSeconds(2))\n    .retry(3)\n    .onErrorResume(ex -> Mono.just(new Customer(\"Default Customer\")));"
              }
            },
            {
              "question": "What is Backpressure in Reactive Programming, and how does Project Reactor handle it?",
              "answer": "Backpressure prevents fast producer from overwhelming slow consumer. Consumer requests data at rate it can process. Project Reactor implements Reactive Streams Specification allowing subscribers to control how many items they receive.",
              "code": null
            },
            {
              "question": "Self Introduction with your Real-Time Project",
              "answer": "Hi, I'm Venkatesh, and I have around 5+ years of experience as a Java Backend Developer specializing in Java 8/17, Spring Boot, Spring WebFlux, Microservices, Kafka, REST APIs, Cassandra, PostgreSQL, Docker, Kubernetes, and CI/CD. Currently working on the American Express MARS Platform managing customer accounts, payments, refunds, and financial obligations.",
              "code": null
            },
            {
              "question": "How do you write Unit Test cases for Reactive Programming methods that return Mono and Flux?",
              "answer": "Reactive APIs are tested using JUnit 5, Mockito, and Reactor Test (StepVerifier). StepVerifier is provided by reactor-test and is used to validate Mono and Flux.",
              "code": {
                "language": "java",
                "content": "// Maven Dependency\n<dependency>\n    <groupId>io.projectreactor</groupId>\n    <artifactId>reactor-test</artifactId>\n    <scope>test</scope>\n</dependency>\n\n// Service\npublic Mono<String> getUser() {\n    return Mono.just(\"Venkatesh\");\n}\n\n// Unit Test\n@Test\nvoid testGetUser() {\n    StepVerifier.create(service.getUser())\n        .expectNext(\"Venkatesh\")\n        .verifyComplete();\n}\n\n// Flux Example\nFlux<Integer> numbers = Flux.just(1,2,3);\n@Test\nvoid testFlux() {\n    StepVerifier.create(numbers)\n        .expectNext(1)\n        .expectNext(2)\n        .expectNext(3)\n        .verifyComplete();\n}"
              }
            },
            {
              "question": "What are the biggest challenges you have faced while working with Microservices, and how did you overcome them?",
              "answer": "Challenge 1: High API response time. Our Customer Dashboard API was calling Customer Service, Account Service, Rewards Service, and Transaction Service sequentially. Total response time was around 3 seconds. Solution: Replaced sequential calls with Spring WebClient and Mono.zip() for parallel execution. Response time reduced from 3 seconds to around 900ms. Challenge 2: Duplicate Kafka events. Solution: Implemented Idempotency using unique Transaction ID to prevent duplicate processing.",
              "code": {
                "language": "java",
                "content": "// Parallel API calls using WebClient\nMono.zip(customer, account, reward)\n    .map(tuple -> new CustomerResponse(\n        tuple.getT1(),\n        tuple.getT2(),\n        tuple.getT3()\n    ));"
              }
            },
            {
              "question": "How do you implement logging in your Spring Boot Microservices? Which logging framework do you use?",
              "answer": "Spring Boot uses SLF4J with Logback as default logging framework. We create a logger using Lombok @Slf4j or LoggerFactory. Logging levels: info, debug, warn, error. Best practices: Never log passwords, Log Correlation IDs, Log request/response time, Log exceptions with stack traces.",
              "code": {
                "language": "java",
                "content": "@Slf4j\n@Service\npublic class UserService {\n    public void process() {\n        log.info(\"User Created\");\n        log.debug(\"Customer Request {}\", request);\n        log.warn(\"Invalid Customer\");\n        log.error(\"Database Connection Failed\", ex);\n    }\n}\n\n// Without Lombok\nprivate static final Logger log = LoggerFactory.getLogger(UserService.class);"
              }
            },
            {
              "question": "Which monitoring and observability tools have you used in your project, and how do you monitor application health and performance?",
              "answer": "Tools: Zipkin, Spring Boot Actuator, Prometheus, Grafana, Kibana (ELK), Splunk. Monitor: API Response Time, CPU Usage, Memory Usage, Error Rate, Kafka Consumer Lag, Database Connections. Spring Boot Actuator endpoints: /actuator/health, /actuator/metrics, /actuator/prometheus. Grafana Dashboard shows Request Count, Response Time, JVM Memory, Active Threads.",
              "code": null
            },
            {
              "question": "How do you debug production issues in a Reactive Spring WebFlux application?",
              "answer": "Step 1: Check application logs. Step 2: Verify response time in monitoring dashboards. Step 3: Check downstream services. Step 4: Check Kafka consumers. Step 5: Verify database queries. Step 6: Identify Root Cause. Step 7: Deploy fix. Real-Time Example: One API taking 5 seconds, found downstream API timing out. Added timeout(), retry(), and onErrorResume() to return fallback response.",
              "code": {
                "language": "java",
                "content": ".timeout(Duration.ofSeconds(2))\n.retry(3)\n.onErrorResume(ex -> Mono.just(fallbackResponse))"
              }
            },
            {
              "question": "How do you trace and debug a request across multiple Microservices using distributed tracing tools like Zipkin or Spring Cloud Sleuth?",
              "answer": "When a request travels across multiple Microservices, debugging becomes difficult. We use Spring Cloud Sleuth and Zipkin to trace the complete request. Sleuth automatically generates Trace ID and Span ID. Every Microservice logs the same Trace ID. Zipkin displays the entire request flow. Benefits: Easy debugging, Identify slow Microservices, Measure API latency, End-to-end request tracing.",
              "code": null
            }
          ]
        },
        {
          "name": "Technical L2",
          "questions": [
            {
              "question": "Self Introduction with your Real-Time Project",
              "answer": "Hi, I'm Venkatesh, and I have around 5+ years of experience as a Java Backend Developer specializing in Java 8/17, Spring Boot, Spring WebFlux, Microservices, Kafka, REST APIs, Cassandra, PostgreSQL, Docker, Kubernetes, and CI/CD. Currently, I'm working on the American Express MARS Platform, which is a Microservices-based financial application responsible for managing customer accounts, payments, refunds, and financial obligations. Responsibilities: Develop REST APIs, Build Reactive APIs using Mono/Flux, Integrate downstream services using WebClient, Publish/consume Kafka events, Write Unit Tests, Resolve Production Issues, Optimize API performance, Deploy through Jenkins/Kubernetes.",
              "code": null
            },
            {
              "question": "How do you write Unit Test cases for Reactive Programming methods that return Mono and Flux?",
              "answer": "Reactive APIs are tested using JUnit 5, Mockito, and Reactor Test (StepVerifier). StepVerifier is provided by reactor-test and is used to validate Mono and Flux.",
              "code": {
                "language": "java",
                "content": "// Maven Dependency\n<dependency>\n    <groupId>io.projectreactor</groupId>\n    <artifactId>reactor-test</artifactId>\n    <scope>test</scope>\n</dependency>\n\n// Service\npublic Mono<String> getUser() {\n    return Mono.just(\"Venkatesh\");\n}\n\n// Unit Test\n@Test\nvoid testGetUser() {\n    StepVerifier.create(service.getUser())\n        .expectNext(\"Venkatesh\")\n        .verifyComplete();\n}\n\n// Flux Example\nFlux<Integer> numbers = Flux.just(1,2,3);\n@Test\nvoid testFlux() {\n    StepVerifier.create(numbers)\n        .expectNext(1)\n        .expectNext(2)\n        .expectNext(3)\n        .verifyComplete();\n}"
              }
            },
            {
              "question": "What are the biggest challenges you have faced while working with Microservices, and how did you overcome them?",
              "answer": "Challenge 1: High API response time. Our Customer Dashboard API was calling Customer Service, Account Service, Rewards Service, and Transaction Service sequentially. Total response time was around 3 seconds. Solution: Replaced sequential calls with Spring WebClient and Mono.zip() for parallel execution. Response time reduced from 3 seconds to around 900ms. Challenge 2: Duplicate Kafka events. Solution: Implemented Idempotency using unique Transaction ID to prevent duplicate processing.",
              "code": {
                "language": "java",
                "content": "// Parallel API calls using WebClient\nMono.zip(customer, account, reward)\n    .map(tuple -> new CustomerResponse(\n        tuple.getT1(),\n        tuple.getT2(),\n        tuple.getT3()\n    ));"
              }
            },
            {
              "question": "How do you implement logging in your Spring Boot Microservices? Which logging framework do you use?",
              "answer": "Spring Boot uses SLF4J with Logback as default logging framework. We create a logger using Lombok @Slf4j or LoggerFactory. Logging levels: info, debug, warn, error. Best practices: Never log passwords, Log Correlation IDs, Log request/response time, Log exceptions with stack traces.",
              "code": {
                "language": "java",
                "content": "@Slf4j\n@Service\npublic class UserService {\n    public void process() {\n        log.info(\"User Created\");\n        log.debug(\"Customer Request {}\", request);\n        log.warn(\"Invalid Customer\");\n        log.error(\"Database Connection Failed\", ex);\n    }\n}\n\n// Without Lombok\nprivate static final Logger log = LoggerFactory.getLogger(UserService.class);"
              }
            },
            {
              "question": "Which monitoring and observability tools have you used in your project, and how do you monitor application health and performance?",
              "answer": "Tools: Zipkin, Spring Boot Actuator, Prometheus, Grafana, Kibana (ELK), Splunk. Monitor: API Response Time, CPU Usage, Memory Usage, Error Rate, Kafka Consumer Lag, Database Connections. Spring Boot Actuator endpoints: /actuator/health, /actuator/metrics, /actuator/prometheus. Grafana Dashboard shows Request Count, Response Time, JVM Memory, Active Threads.",
              "code": null
            },
            {
              "question": "How do you debug production issues in a Reactive Spring WebFlux application?",
              "answer": "Step 1: Check application logs. Step 2: Verify response time in monitoring dashboards. Step 3: Check downstream services. Step 4: Check Kafka consumers. Step 5: Verify database queries. Step 6: Identify Root Cause. Step 7: Deploy fix. Real-Time Example: One API taking 5 seconds, found downstream API timing out. Added timeout(), retry(), and onErrorResume() to return fallback response.",
              "code": {
                "language": "java",
                "content": ".timeout(Duration.ofSeconds(2))\n.retry(3)\n.onErrorResume(ex -> Mono.just(fallbackResponse))"
              }
            },
            {
              "question": "How do you trace and debug a request across multiple Microservices using distributed tracing tools like Zipkin or Spring Cloud Sleuth?",
              "answer": "When a request travels across multiple Microservices, debugging becomes difficult. We use Spring Cloud Sleuth and Zipkin to trace the complete request. Sleuth automatically generates Trace ID and Span ID. Every Microservice logs the same Trace ID. Zipkin displays the entire request flow. Benefits: Easy debugging, Identify slow Microservices, Measure API latency, End-to-end request tracing.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 66
};
