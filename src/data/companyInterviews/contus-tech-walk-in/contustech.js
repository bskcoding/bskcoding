// AUTO-GENERATED file — company-wise interview data.
// Source: ContusTech (walk_in) interview document(s).
// Regenerate with:  node scripts/rebuild-contustech.mjs

export const company = {
  "id": "contus-tech-walk-in",
  "name": "ContusTech (walk_in)",
  "interviews": [
    {
      "name": "ContusTech (walk_in) Interview",
      "questionCount": 47,
      "rounds": [
        {
          "name": "Technical Round - Java",
          "questions": [
            {
              "question": "What is the purpose of the `intern` method in Java?",
              "answer": "The intern method ensures that all instances of a string with the same content share the same memory location. It returns a canonical representation of the string, which is useful for memory optimization and string comparison.",
              "code": {
                "language": "java",
                "content": "String s1 = new String(\"Hello\");\nString s2 = s1.intern();\nString s3 = \"Hello\";\nSystem.out.println(s2 == s3); // true"
              }
            },
            {
              "question": "Explain the internal working process of `HashMap`.",
              "answer": "HashMap uses a hash table to store key-value pairs. It calculates a hash code for each key and uses it to determine the index in an internal array. Collisions are handled using linked lists (or balanced trees in Java 8+). When the load factor exceeds 0.75, the map is resized and rehashed.",
              "code": {
                "language": "java",
                "content": "// Internal working\n// 1. hash = key.hashCode()\n// 2. index = hash & (n-1)\n// 3. If collision, add to linked list/tree\n// 4. When size > threshold (load factor * capacity), resize"
              }
            },
            {
              "question": "What is the difference between mutable and immutable objects?",
              "answer": "Mutable objects can be changed after they are created (e.g., ArrayList, StringBuilder). Immutable objects cannot be changed after creation (e.g., String, Integer).",
              "code": {
                "language": "java",
                "content": "// Mutable\nStringBuilder sb = new StringBuilder(\"Hello\");\nsb.append(\" World\"); // Modified\n\n// Immutable\nString s = \"Hello\";\ns.concat(\" World\"); // New object created, s unchanged"
              }
            },
            {
              "question": "Why is `String` immutable in Java?",
              "answer": "String is immutable for: 1) Security - prevents modification of sensitive data, 2) Thread-safety - immutable objects are inherently safe, 3) Performance - allows string pooling and caching, 4) Hashcode caching - hashcode is calculated once.",
              "code": null
            },
            {
              "question": "How can you create a mutable `String`?",
              "answer": "Use StringBuilder (not thread-safe, faster) or StringBuffer (thread-safe, slower) which are mutable versions of String.",
              "code": {
                "language": "java",
                "content": "StringBuilder sb = new StringBuilder(\"Hello\");\nsb.append(\" World\");\nString result = sb.toString(); // \"Hello World\"\n\nStringBuffer sbf = new StringBuffer(\"Hello\");\nsbf.append(\" World\"); // Thread-safe"
              }
            },
            {
              "question": "What is a marker interface?",
              "answer": "A marker interface is an interface with no methods or fields. It is used to indicate or mark a class for a specific purpose. Examples: Serializable, Cloneable, Remote.",
              "code": {
                "language": "java",
                "content": "public interface Serializable {\n    // No methods - just a marker\n}\n\npublic class MyClass implements Serializable {\n    // This class can be serialized\n}"
              }
            },
            {
              "question": "What is a functional interface?",
              "answer": "A functional interface has exactly one abstract method and may have multiple default or static methods. It is used as a target for lambda expressions and method references.",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\npublic interface MyFunctionalInterface {\n    void doSomething(); // Single abstract method\n}\n\nMyFunctionalInterface func = () -> System.out.println(\"Hello\");"
              }
            },
            {
              "question": "What happens if a class contains two methods with the same name?",
              "answer": "If methods have different parameter lists, it is method overloading (allowed). If methods have the same parameter list, it causes a compilation error (duplicate method).",
              "code": {
                "language": "java",
                "content": "// Method Overloading - Valid\nclass Example {\n    void display() { }\n    void display(String s) { }\n    void display(int i) { }\n}\n\n// Duplicate method - Compilation Error\nclass Example2 {\n    void display() { }\n    void display() { } // Error: Duplicate method\n}"
              }
            },
            {
              "question": "What is a default method in Java?",
              "answer": "A default method in an interface provides a default implementation. It allows you to add new methods to interfaces without breaking existing implementations. Introduced in Java 8.",
              "code": {
                "language": "java",
                "content": "public interface MyInterface {\n    default void defaultMethod() {\n        System.out.println(\"Default method implementation\");\n    }\n}\n\nclass MyClass implements MyInterface {\n    // Can use default method or override it\n}"
              }
            },
            {
              "question": "How can we access an instance variable inside a static method?",
              "answer": "Instance variables cannot be accessed directly from static methods because they belong to instances. You need to create an instance of the class to access them.",
              "code": {
                "language": "java",
                "content": "public class MyClass {\n    private int instanceVar = 10;\n\n    public static void staticMethod() {\n        MyClass obj = new MyClass();\n        System.out.println(obj.instanceVar); // Access via instance\n    }\n}"
              }
            },
            {
              "question": "Explain the concept of a linked list",
              "answer": "A linked list is a data structure where each element (node) contains data and a reference to the next node. Types: Singly linked (one direction) and Doubly linked (both directions). Allows efficient insertion and deletion operations.",
              "code": {
                "language": "java",
                "content": "class Node {\n    int data;\n    Node next;\n\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n    }\n}"
              }
            },
            {
              "question": "What is the difference between `LinkedList` and `ArrayList` in Java?",
              "answer": "ArrayList is backed by a dynamic array - O(1) for access, O(n) for insertions/deletions. LinkedList is backed by a doubly linked list - O(n) for access, O(1) for insertions/deletions (if position known).",
              "code": {
                "language": "java",
                "content": "// ArrayList - Best for frequent access\nArrayList<Integer> list1 = new ArrayList<>();\n\n// LinkedList - Best for frequent insertions/deletions\nLinkedList<Integer> list2 = new LinkedList<>();"
              }
            }
          ]
        },
        {
          "name": "Technical Round - Spring Boot",
          "questions": [
            {
              "question": "Implement a Spring Boot REST API to list employees with pagination, sorted by age in descending order.",
              "answer": "Use a Pageable parameter in the controller, pass it to a JpaRepository method that returns Page<Employee>, and apply Sort.by(\"age\").descending(). Return the paginated/sorted result so the client can iterate pages.",
              "code": {
                "language": "java",
                "content": "@RestController\n@RequestMapping(\"/api/employees\")\npublic class EmployeeController {\n    @Autowired\n    private EmployeeRepository repository;\n\n    @GetMapping\n    public Page<Employee> listEmployees(Pageable pageable) {\n        return repository.findAll(pageable);\n    }\n}\n\n@Repository\npublic interface EmployeeRepository extends JpaRepository<Employee, Long> {\n    // findAll(Pageable) is provided by JpaRepository\n    // and uses Pageable's Sort automatically.\n}\n\n// Call example (sorts by age descending, page 0, size 10):\n// GET /api/employees?page=0&size=10&sort=age,desc\n\n// Or apply the sort explicitly in code:\nPageRequest pageRequest = PageRequest.of(0, 10, Sort.by(\"age\").descending());\nPage<Employee> page = repository.findAll(pageRequest);\n\n// Entity\n@Entity\npublic class Employee {\n    @Id @GeneratedValue\n    private Long id;\n    private String name;\n    private int age;\n    // getters/setters\n}"
              }
            },
            {
              "question": "How to use two different databases in a single Spring Boot project?",
              "answer": "Configure multiple DataSource beans and specify database details in application.properties. Use @Primary annotation to mark the default DataSource.",
              "code": {
                "language": "java",
                "content": "@Bean\n@Primary\n@ConfigurationProperties(prefix = \"spring.datasource.primary\")\npublic DataSource primaryDataSource() {\n    return DataSourceBuilder.create().build();\n}\n\n@Bean\n@ConfigurationProperties(prefix = \"spring.datasource.secondary\")\npublic DataSource secondaryDataSource() {\n    return DataSourceBuilder.create().build();\n}\n\n// application.properties\nspring.datasource.primary.url=jdbc:mysql://localhost/db1\nspring.datasource.secondary.url=jdbc:mysql://localhost/db2"
              }
            },
            {
              "question": "How to handle exceptions in Spring Boot?",
              "answer": "Use @ControllerAdvice to handle exceptions globally. Create methods with @ExceptionHandler to handle specific exceptions.",
              "code": {
                "language": "java",
                "content": "@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleException(Exception ex) {\n        return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);\n    }\n\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<String> handleNotFound(ResourceNotFoundException ex) {\n        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);\n    }\n}"
              }
            },
            {
              "question": "How to handle a `NullPointerException` in Spring Boot?",
              "answer": "Use @ExceptionHandler within a @ControllerAdvice to catch NullPointerException and return an appropriate response.",
              "code": {
                "language": "java",
                "content": "@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(NullPointerException.class)\n    public ResponseEntity<String> handleNullPointerException(NullPointerException ex) {\n        return new ResponseEntity<>(\"Null pointer exception occurred\", HttpStatus.BAD_REQUEST);\n    }\n}"
              }
            },
            {
              "question": "How to fetch a list of DTO data?",
              "answer": "Use a repository method with a JPQL constructor expression to fetch data and map it to DTOs.",
              "code": {
                "language": "java",
                "content": "@Repository\npublic interface MyRepository extends JpaRepository<MyEntity, Long> {\n    @Query(\"SELECT new com.example.dto.MyDTO(e.field1, e.field2) FROM MyEntity e\")\n    List<MyDTO> fetchAllDTOs();\n}\n\n// DTO Class\npublic class MyDTO {\n    private String field1;\n    private String field2;\n    public MyDTO(String field1, String field2) {\n        this.field1 = field1;\n        this.field2 = field2;\n    }\n}"
              }
            },
            {
              "question": "How to provide access to a third-party client in Spring Boot?",
              "answer": "Use OAuth2 or JWT for authentication. Configure security settings to handle access tokens and permissions. Use @EnableOAuth2Client or configure JWT filters.",
              "code": {
                "language": "java",
                "content": "@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http.oauth2Login()\n            .and()\n            .authorizeHttpRequests()\n            .requestMatchers(\"/public/**\").permitAll()\n            .anyRequest().authenticated();\n        return http.build();\n    }\n}"
              }
            },
            {
              "question": "How to enable CORS and where do you write the logic?",
              "answer": "Use @CrossOrigin annotation on controllers or configure it globally using WebMvcConfigurer.",
              "code": {
                "language": "java",
                "content": "// Method 1: Controller level\n@CrossOrigin(origins = \"http://example.com\")\n@RestController\npublic class MyController { }\n\n// Method 2: Global configuration\n@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    @Override\n    public void addCorsMappings(CorsRegistry registry) {\n        registry.addMapping(\"/**\")\n            .allowedOrigins(\"http://example.com\")\n            .allowedMethods(\"GET\", \"POST\", \"PUT\", \"DELETE\");\n    }\n}"
              }
            },
            {
              "question": "What is the difference between JWT and OAuth?",
              "answer": "JWT (JSON Web Token) is a token format used for securely transmitting information between parties. OAuth is an authorization framework that uses tokens (like JWT) for securing API access. JWT is a token type, OAuth is an authorization protocol.",
              "code": null
            },
            {
              "question": "Explain the internal working process of JWT",
              "answer": "JWT consists of three parts: Header (algorithm), Payload (claims), Signature (created using secret key). Header and Payload are base64-encoded and combined with signature to form the token. Used for stateless authentication.",
              "code": {
                "language": "java",
                "content": "// JWT Structure\n// Header: {\"alg\": \"HS256\", \"typ\": \"JWT\"}\n// Payload: {\"sub\": \"user123\", \"exp\": 1234567890}\n// Signature: HMACSHA256(base64UrlEncode(header) + \".\" + base64UrlEncode(payload), secret)\n// Token: header.payload.signature"
              }
            },
            {
              "question": "What is Spring Security?",
              "answer": "Spring Security is a framework that provides comprehensive security services for Java applications, including authentication (who you are), authorization (what you can do), and protection against common security vulnerabilities.",
              "code": null
            },
            {
              "question": "What is the use of beans and where do you use them in your application?",
              "answer": "Beans are managed objects within the Spring container. They are used for dependency injection and are configured in the application context. Used in Controllers, Services, Repositories, Configuration classes.",
              "code": {
                "language": "java",
                "content": "@Bean\npublic MyService myService() {\n    return new MyService();\n}\n\n// Or use @Component\n@Component\npublic class MyService {\n    // Business logic\n}"
              }
            },
            {
              "question": "What is the difference between @Component, @Service, @Repository, and @Controller?",
              "answer": "@Component: Generic stereotype for any Spring-managed component. @Service: Specialized component for service layer logic. @Repository: Specialized component for data access logic (translates exceptions). @Controller: Specialized component for web controllers handling HTTP requests.",
              "code": {
                "language": "java",
                "content": "@Component\npublic class MyComponent { }\n\n@Service\npublic class MyService { }\n\n@Repository\npublic class MyRepository { }\n\n@Controller\npublic class MyController { }"
              }
            },
            {
              "question": "If you use @Service in place of @Controller, will it work?",
              "answer": "It will work technically but is not recommended. @Service is for service layer beans, while @Controller is for handling web requests. Using @Service for a controller will not handle web request mapping properly.",
              "code": {
                "language": "java",
                "content": "// Not recommended - Controller should use @Controller\n@Service\npublic class UserController {\n    @GetMapping(\"/users\")\n    public List<User> getUsers() { }\n}\n\n// Correct approach\n@RestController\npublic class UserController {\n    @GetMapping(\"/users\")\n    public List<User> getUsers() { }\n}"
              }
            },
            {
              "question": "What are the different types of Spring Security?",
              "answer": "Types include: Basic Authentication (username/password), Form-based Authentication (login form), OAuth2 (authorization framework), JWT-based Authentication (stateless token), LDAP Authentication.",
              "code": null
            },
            {
              "question": "Where are you validating the JWT token in your project?",
              "answer": "JWT tokens are validated in a custom filter (JwtAuthenticationFilter) that extends OncePerRequestFilter or within the security configuration class using JWT utility methods.",
              "code": {
                "language": "java",
                "content": "public class JwtAuthenticationFilter extends OncePerRequestFilter {\n    @Override\n    protected void doFilterInternal(HttpServletRequest request,\n                                   HttpServletResponse response,\n                                   FilterChain chain) {\n        String token = extractToken(request);\n        if (jwtUtil.validateToken(token)) {\n            // Set authentication\n        }\n        chain.doFilter(request, response);\n    }\n}"
              }
            },
            {
              "question": "What architecture are you using to develop your project?",
              "answer": "Microservices architecture with multiple services (User Service, Order Service, Payment Service). Uses API Gateway for routing, Eureka for service discovery, and Kafka for async communication. Alternatively, Layered Architecture (Controller-Service-Repository).",
              "code": null
            },
            {
              "question": "How to sort a list of data based on a field using JPA inbuilt methods?",
              "answer": "Use JpaRepository methods with Sort parameter.",
              "code": {
                "language": "java",
                "content": "// In Repository\nList<MyEntity> findAll(Sort sort);\n\n// In Service\nList<MyEntity> entities = repository.findAll(Sort.by(\"fieldName\").ascending());\nList<MyEntity> entities = repository.findAll(Sort.by(\"fieldName\").descending());\n// Multiple fields\nSort.by(\"field1\").ascending().and(Sort.by(\"field2\").descending())"
              }
            },
            {
              "question": "How to fetch and sort a list of DTO data in Spring Boot?",
              "answer": "Use repository methods with sorting options or fetch data and sort manually in service layer.",
              "code": {
                "language": "java",
                "content": "@Query(\"SELECT new com.example.dto.MyDTO(e.field1, e.field2) FROM MyEntity e ORDER BY e.field1\")\nList<MyDTO> fetchAndSortDTOs();\n\n// Or in service\nList<MyDTO> dtos = repository.fetchAllDTOs();\nCollections.sort(dtos, (d1, d2) -> d1.getField1().compareTo(d2.getField1()));"
              }
            }
          ]
        },
        {
          "name": "Final Round - Tools, Databases & Project",
          "questions": [
            {
              "question": "What tools have you used in your project?",
              "answer": "Git for version control, Jenkins for CI/CD, JIRA for task management, Docker for containerization, SonarQube for code quality, Maven/Gradle for build management.",
              "code": null
            },
            {
              "question": "Which database did you use in your project?",
              "answer": "We used PostgreSQL as our primary database due to its robustness and support for complex queries. Also used Redis for caching.",
              "code": null
            },
            {
              "question": "How did you implement JWT authentication in your project?",
              "answer": "We implemented JWT authentication by creating a JWT token on user login, which includes user roles and expiration time. The token is then verified with each API request using a JWT filter in our Spring Boot application.",
              "code": {
                "language": "java",
                "content": "@PostMapping(\"/login\")\npublic ResponseEntity<String> login(@RequestBody LoginRequest request) {\n    String token = jwtUtil.generateToken(user.getUsername(), user.getRoles());\n    return ResponseEntity.ok(token);\n}\n\npublic class JwtAuthenticationFilter extends OncePerRequestFilter {\n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) {\n        String token = extractToken(request);\n        if (token != null && jwtUtil.validateToken(token)) {\n            Authentication auth = jwtUtil.getAuthentication(token);\n            SecurityContextHolder.getContext().setAuthentication(auth);\n        }\n        chain.doFilter(request, response);\n    }\n}"
              }
            },
            {
              "question": "How did you configure two different databases in your Spring Boot project?",
              "answer": "Configured separate DataSource beans for each database. Used @Primary annotation to specify the primary data source. Configured entity managers and transaction managers for each database.",
              "code": {
                "language": "java",
                "content": "@Configuration\npublic class DatabaseConfig {\n    @Bean\n    @Primary\n    @ConfigurationProperties(prefix = \"spring.datasource.primary\")\n    public DataSource primaryDataSource() {\n        return DataSourceBuilder.create().build();\n    }\n    @Bean\n    @ConfigurationProperties(prefix = \"spring.datasource.secondary\")\n    public DataSource secondaryDataSource() {\n        return DataSourceBuilder.create().build();\n    }\n    @Bean\n    @Primary\n    public PlatformTransactionManager primaryTransactionManager() {\n        return new JpaTransactionManager(primaryEntityManagerFactory().getObject());\n    }\n}"
              }
            },
            {
              "question": "Who provided the database structure in your project?",
              "answer": "The database structure was provided by our database architect, and the development team collaborated to finalize and optimize it using tools like DB Diagrams and Flyway for migration.",
              "code": null
            },
            {
              "question": "How were tasks assigned and managed in your project on a weekly basis?",
              "answer": "Tasks were assigned and managed using JIRA. Each week, we conducted sprint planning meetings to assign tasks and track progress through daily stand-ups and weekly sprint reviews.",
              "code": null
            },
            {
              "question": "How did you implement an API gateway in your microservices architecture?",
              "answer": "We implemented an API gateway using Spring Cloud Gateway, which routes requests to the appropriate microservices and handles cross-cutting concerns like authentication, rate limiting, and logging.",
              "code": {
                "language": "java",
                "content": "spring:\n  cloud:\n    gateway:\n      routes:\n        - id: user-service\n          uri: lb://USER-SERVICE\n          predicates:\n            - Path=/api/users/**\n          filters:\n            - name: CircuitBreaker\n              args:\n                name: userService\n                fallbackUri: forward:/fallback/users\n        - id: order-service\n          uri: lb://ORDER-SERVICE\n          predicates:\n            - Path=/api/orders/**"
              }
            },
            {
              "question": "How did you configure different services in the API gateway?",
              "answer": "Configured different services in the API gateway using route definitions in the application.yml file, specifying the paths and service URLs. Used service discovery (Eureka) for dynamic service location.",
              "code": {
                "language": "java",
                "content": "spring:\n  cloud:\n    gateway:\n      discovery:\n        locator:\n          enabled: true\n          lower-case-service-id: true\n      routes:\n        - id: product-service\n          uri: lb://PRODUCT-SERVICE\n          predicates:\n            - Path=/api/products/**\n        - id: payment-service\n          uri: lb://PAYMENT-SERVICE\n          predicates:\n            - Path=/api/payments/**"
              }
            },
            {
              "question": "What is an Eureka Server?",
              "answer": "Eureka Server is a service registry used in microservices architecture for service discovery, allowing services to find and communicate with each other without hardcoding their locations.",
              "code": {
                "language": "java",
                "content": "@SpringBootApplication\n@EnableEurekaServer\npublic class EurekaServerApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(EurekaServerApplication.class, args);\n    }\n}\n\neureka:\n  client:\n    register-with-eureka: false\n    fetch-registry: false"
              }
            },
            {
              "question": "How do you handle simultaneous requests from multiple users, and who determines request preference?",
              "answer": "Using load balancers to distribute traffic across multiple instances. Request preference is determined based on priority of the request and available resources.",
              "code": {
                "language": "java",
                "content": "@LoadBalanced\n@Bean\npublic RestTemplate restTemplate() {\n    return new RestTemplate();\n}\n\n@Service\npublic class UserService {\n    public User getUser(Long id) {\n        return restTemplate.getForObject(\"http://USER-SERVICE/users/\" + id, User.class);\n    }\n}"
              }
            },
            {
              "question": "What does a Kafka server do?",
              "answer": "A Kafka server is used for real-time data streaming and message brokering, allowing microservices to communicate asynchronously and handle large volumes of data efficiently.",
              "code": {
                "language": "java",
                "content": "@Autowired\nprivate KafkaTemplate<String, String> kafkaTemplate;\n\npublic void publishOrder(Order order) {\n    kafkaTemplate.send(\"order-topic\", order.toString());\n}\n\n@KafkaListener(topics = \"order-topic\", groupId = \"order-group\")\npublic void consumeOrder(String message) {\n    // Process order\n}"
              }
            },
            {
              "question": "How do you handle simultaneous requests from a large number of users?",
              "answer": "Using a combination of load balancing, caching (Redis), and scalable microservices architecture to ensure high availability and performance. Also use auto-scaling and horizontal scaling.",
              "code": null
            },
            {
              "question": "What issues did you recently encounter with Swagger, and how did you resolve them?",
              "answer": "Issues with Swagger not displaying certain endpoints correctly. Resolved by ensuring all controllers were properly annotated and updating Swagger configuration to correctly scan all packages.",
              "code": {
                "language": "java",
                "content": "@Configuration\npublic class SwaggerConfig {\n    @Bean\n    public Docket api() {\n        return new Docket(DocumentationType.SWAGGER_2)\n            .select()\n            .apis(RequestHandlerSelectors.basePackage(\"com.example.controller\"))\n            .paths(PathSelectors.any())\n            .build();\n    }\n}"
              }
            },
            {
              "question": "How do you upgrade your project, and what technologies are used for upgrading?",
              "answer": "Following continuous integration and deployment pipeline using Jenkins and Docker. Thorough testing and feature toggles for smooth rollouts. Version upgrades managed through Maven/Gradle.",
              "code": null
            },
            {
              "question": "What are some issues you faced in your project, and how did you overcome them?",
              "answer": "Database performance under high load - optimized queries, indexed critical fields, used caching mechanisms. API response time - implemented parallel calls using WebClient. Duplicate events - implemented idempotency.",
              "code": null
            },
            {
              "question": "Have you worked with Log4j? If so, what was your experience?",
              "answer": "Yes, worked with Log4j for logging in Spring Boot applications. Effective in providing configurable logging levels and formats. Used for debugging, monitoring, and error tracking.",
              "code": {
                "language": "java",
                "content": "logging.level.com.example=DEBUG\nlogging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %msg%n\n\n@Slf4j\n@Service\npublic class MyService {\n    public void process() {\n        log.info(\"Processing started\");\n        log.debug(\"Request: {}\", request);\n        log.error(\"Error occurred\", ex);\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "HR Round",
          "questions": [
            {
              "question": "HR Round - Discussion topics to prepare",
              "answer": "Be prepared to discuss the following topics in the HR round:\n\n- Self Introduction (your background, current role, and key projects)\n- Current Location and relocation preferences\n- Salary Expectations (current CTC, expected CTC, and other compensation)\n- Notice Period and earliest joining date\n- Why ContusTech? (what attracted you to apply)\n- Career Goals (where you see yourself in 3-5 years)\n- Strengths and Weaknesses (with concrete examples)\n- Teamwork Experience (collaboration, conflict resolution, and team successes)\n\nBe honest, specific, and concise in your responses. Prepare 1-2 STAR (Situation, Task, Action, Result) examples for behavioral questions.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 47
};
