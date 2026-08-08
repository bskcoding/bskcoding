// Spring Boot Interview Questions - Part 1 (Questions 1-50)
// Auto-generated from src/pages/SpringBootInterview.jsx. Content is identical.
export const springBootInterviewPart1 = `## Spring Boot Interview Questions

### Basic Questions

1. **What is Spring Boot, and how is it different from the Spring Framework?**
   - **Answer**: Spring Boot is an extension of the Spring Framework that simplifies the setup and development of new Spring applications. It provides defaults for code and annotation configuration to drastically reduce the setup time.
   - **Example**:
     \`\`\`java
     @SpringBootApplication
     public class MyApplication {
         public static void main(String[] args) {
             SpringApplication.run(MyApplication.class, args);
         }
     }
     \`\`\`
   - **Note**: Unlike traditional Spring (XML config), Spring Boot auto-configures everything. No web.xml, no applicationContext.xml — just run the JAR.

2. **What are the advantages of using Spring Boot?**
   - **Answer**: Spring Boot offers rapid application development with minimal configuration, embedded servers, auto-configuration, production-ready features (metrics, health checks), and an opinionated approach.
   - **Example**:
     \`\`\`java
     // Just add spring-boot-starter-web and run as Java application
     // No need to deploy WAR — embedded Tomcat is auto-configured
     @RestController
     public class HelloController {
         @GetMapping("/hello")
         public String hello() { return "Hello, Boot!"; }
     }
     \`\`\`
   - **Note**: Also includes Actuator endpoints like /actuator/health for monitoring.

3. **How do you create a Spring Boot application?**
   - **Answer**: You can create a Spring Boot application using Spring Initializr, IDEs (IntelliJ, Eclipse), or manually by adding dependencies to pom.xml (Maven) or build.gradle (Gradle).
   - **Example**:
     \`\`\`xml
     <parent>
         <groupId>org.springframework.boot</groupId>
         <artifactId>spring-boot-starter-parent</artifactId>
         <version>3.3.0</version>
     </parent>
     <dependencies>
         <dependency>
             <groupId>org.springframework.boot</groupId>
             <artifactId>spring-boot-starter-web</artifactId>
         </dependency>
     </dependencies>
     \`\`\`
   - **Note**: Then create the main class with @SpringBootApplication and SpringApplication.run().

4. **What is a Spring Boot starter?**
   - **Answer**: A Spring Boot starter is a curated set of dependency descriptors that you include in your application. For example, spring-boot-starter-web bundles Spring MVC, Jackson, Tomcat, and validation — everything needed for REST APIs.
   - **Example**:
     \`\`\`xml
     <dependency>
         <groupId>org.springframework.boot</groupId>
         <artifactId>spring-boot-starter-data-jpa</artifactId>
     </dependency>
     // This pulls in Hibernate, Spring Data JPA, and HikariCP
     \`\`\`

5. **What are Spring Boot starters and why are they useful?**
   - **Answer**: Starters simplify dependency management by providing a comprehensive list of libraries needed for a specific function. They ensure version compatibility and reduce boilerplate.
   - **Example**: spring-boot-starter-web includes:
     \`\`\`text
     - spring-webmvc (Spring MVC)
     - jackson-databind (JSON serialization)
     - tomcat-embed-core (embedded server)
     - spring-boot-starter-validation (bean validation)
     \`\`\`

6. **Explain the concept of auto-configuration in Spring Boot.**
   - **Answer**: Auto-configuration attempts to automatically configure your Spring application based on jar dependencies. For example, if spring-boot-starter-web is present, it auto-configures DispatcherServlet, embedded Tomcat, and Jackson.
   - **Example**:
     \`\`\`java
     @ConditionalOnClass(DataSource.class)
     @ConditionalOnMissingBean(DataSource.class)
     @ConfigurationProperties(prefix = "spring.datasource")
     public class DataSourceAutoConfiguration {
         // Creates DataSource bean if not already defined
     }
     \`\`\`
   - **Note**: You can exclude auto-configurations using @EnableAutoConfiguration(exclude = {X.class}).

7. **How do you define properties in a Spring Boot application?**
   - **Answer**: Properties can be defined in application.properties or application.yml in src/main/resources. They can be injected using @Value or @ConfigurationProperties.
   - **Example**:
     \`\`\`properties
     server.port=9090
     app.name=MySpringApp
     spring.datasource.url=jdbc:mysql://localhost:3306/mydb
     \`\`\`
   - **Example**:
     \`\`\`java
     @Value("\${app.name}")
     private String appName;
     \`\`\`

8. **What is application.properties or application.yml in Spring Boot?**
   - **Answer**: These files externalize configuration, allowing you to change settings without recompiling. YAML offers hierarchical structure, while properties is flat key-value.
   - **Example**:
     \`\`\`yaml
     server:
       port: 9090
     spring:
       datasource:
         url: jdbc:mysql://localhost:3306/mydb
         username: root
         password: secret
     \`\`\`

9. **What are profiles in Spring Boot?**
   - **Answer**: Profiles allow environment-specific configuration. For example, you can have application-dev.properties for development and application-prod.properties for production.
   - **Example**:
     \`\`\`properties
     # Via application.properties
     spring.profiles.active=dev

     # Via command line
     java -jar myapp.jar --spring.profiles.active=prod
     \`\`\`
   - **Example**:
     \`\`\`java
     @Profile("dev")
     @Bean
     public DataSource devDataSource() { ... }

     @Profile("prod")
     @Bean
     public DataSource prodDataSource() { ... }
     \`\`\`

10. **How do you implement exception handling in Spring Boot?**
    - **Answer**: Use @ControllerAdvice with @ExceptionHandler to handle exceptions globally across controllers.
    - **Example**:
      \`\`\`java
      @ControllerAdvice
      public class GlobalExceptionHandler {
          @ExceptionHandler(ResourceNotFoundException.class)
          public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
              ErrorResponse error = new ErrorResponse("NOT_FOUND", ex.getMessage());
              return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
          }
      }
      \`\`\`
    - **Example**:
      \`\`\`java
      @ResponseStatus(HttpStatus.NOT_FOUND)
      public class ResourceNotFoundException extends RuntimeException {
          public ResourceNotFoundException(String message) { super(message); }
      }
      \`\`\`

### Configuration and Setup

11. **How do you configure a DataSource in Spring Boot?**
    - **Answer**: Configure DataSource via properties. Spring Boot auto-configures HikariCP by default.
    - **Example**:
      \`\`\`properties
      spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
      spring.datasource.username=admin
      spring.datasource.password=secret
      spring.datasource.hikari.maximum-pool-size=10
      \`\`\`
    - **Example**:
      \`\`\`java
      @Bean
      @ConfigurationProperties(prefix = "spring.datasource")
      public DataSource dataSource() {
          return DataSourceBuilder.create().build();
      }
      \`\`\`

12. **What are the different ways to configure Spring Boot properties?**
    - **Answer**: Properties can be configured via:
      - application.properties / application.yml
      - Command-line arguments: --server.port=8081
      - Environment variables: SERVER_PORT=8081
      - OS environment variables
      - @PropertySource on config classes
    - **Example**:
      \`\`\`java
      @Configuration
      @PropertySource("classpath:custom.properties")
      public class AppConfig { ... }
      \`\`\`

13. **How can you enable HTTPS in a Spring Boot application?**
    - **Answer**: Configure the keystore in application.properties.
    - **Example**:
      \`\`\`properties
      server.port=8443
      server.ssl.key-store=classpath:keystore.p12
      server.ssl.key-store-password=changeit
      server.ssl.keyStoreType=PKCS12
      server.ssl.keyAlias=tomcat
      \`\`\`
    - **Note**: Generate keystore: keytool -genkey -alias tomcat -storetype PKCS12 -keyalg RSA -keystore keystore.p12

14. **How do you configure logging in Spring Boot?**
    - **Answer**: Logging can be configured via application.properties or logback.xml.
    - **Example**:
      \`\`\`properties
      logging.level.org.springframework=DEBUG
      logging.level.com.myapp=TRACE
      logging.file.name=app.log
      logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %msg%n
      \`\`\`
    - **Example**:
      \`\`\`xml
      <configuration>
          <appender name="FILE" class="ch.qos.logback.core.FileAppender">
              <file>myapp.log</file>
          </appender>
          <root level="INFO">
              <appender-ref ref="FILE" />
          </root>
      </configuration>
      \`\`\`

15. **What is @SpringBootApplication annotation?**
    - **Answer**: @SpringBootApplication is a convenience annotation that combines @Configuration, @EnableAutoConfiguration, and @ComponentScan.
    - **Example**:
      \`\`\`java
      @Configuration
      @EnableAutoConfiguration
      @ComponentScan(basePackages = "com.myapp")
      public class MyApplication { ... }
      \`\`\`
    - **Note**: It auto-detects components and enables auto-configuration.

16. **What is the purpose of @EnableAutoConfiguration annotation?**
    - **Answer**: @EnableAutoConfiguration tells Spring Boot to start adding beans based on classpath settings, other beans, and property settings.
    - **Example**: It auto-configures:
      \`\`\`text
      - DataSource if spring-boot-starter-data-jpa is present
      - DispatcherServlet if spring-boot-starter-web is present
      - Security filter chain if spring-boot-starter-security is present
      \`\`\`
    - **Note**: You can exclude specific auto-configurations: @EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class})

17. **How do you externalize configuration in Spring Boot?**
    - **Answer**: Configuration can be externalized using properties files, YAML, environment variables, command-line arguments, and @PropertySource.
    - **Example**: Order of precedence (highest to lowest):
      \`\`\`text
      1. Command line arguments (--server.port=8081)
      2. OS environment variables (SERVER_PORT=8081)
      3. application-{profile}.properties
      4. application.properties
      5. @PropertySource annotations
      \`\`\`

18. **What is a CommandLineRunner in Spring Boot?**
    - **Answer**: CommandLineRunner is an interface to execute code after the Spring Boot application has started.
    - **Example**:
      \`\`\`java
      @Component
      public class AppStartupRunner implements CommandLineRunner {
          @Override
          public void run(String... args) throws Exception {
              System.out.println("Application started with args: " + Arrays.toString(args));
          }
      }
      \`\`\`
    - **Note**: You can also use @Order to control execution order.

19. **How do you configure multiple data sources in Spring Boot?**
    - **Answer**: Define multiple DataSource beans and use @Primary for the main one.
    - **Example**:
      \`\`\`java
      @Bean(name = "primaryDataSource")
      @Primary
      @ConfigurationProperties(prefix = "spring.datasource.primary")
      public DataSource primaryDataSource() {
          return DataSourceBuilder.create().build();
      }

      @Bean(name = "secondaryDataSource")
      @ConfigurationProperties(prefix = "spring.datasource.secondary")
      public DataSource secondaryDataSource() {
          return DataSourceBuilder.create().build();
      }
      \`\`\`
    - **Note**: Also configure separate EntityManagerFactory and TransactionManager for each.

20. **What is the difference between application.properties and bootstrap.properties?**
    - **Answer**: bootstrap.properties is used for bootstrap context — primarily for Spring Cloud Config. It loads before application.properties.
    - **Example**:
      \`\`\`properties
      spring.cloud.config.uri=http://config-server:8888
      spring.application.name=myapp
      \`\`\`
    - **Note**: application.properties is for application-specific config.

### Dependency Injection and Beans

21. **What is dependency injection in Spring Boot?**
    - **Answer**: Dependency injection (DI) is a design pattern where an object receives its dependencies from an external container (Spring) rather than creating them itself.
    - **Example**:
      \`\`\`java
      @Service
      public class UserService {
          private final UserRepository userRepository;
          
          public UserService(UserRepository userRepository) {
              this.userRepository = userRepository;
          }
      }
      \`\`\`
    - **Note**: Spring automatically wires dependencies — no @Autowired needed on constructor.

22. **What are Spring Beans, and how are they managed in Spring Boot?**
    - **Answer**: Spring Beans are objects managed by the Spring IoC container. They are instantiated, assembled, and managed by Spring.
    - **Example**: Bean scopes:
      \`\`\`text
      - Singleton (default): one instance per container
      - Prototype: new instance each time
      - Request: one per HTTP request (web)
      - Session: one per HTTP session (web)
      \`\`\`
    - **Example**:
      \`\`\`java
      @Scope("prototype")
      @Component
      public class MyPrototypeBean { ... }
      \`\`\`

23. **How do you define a Spring Bean?**
    - **Answer**: Beans can be defined using @Component, @Service, @Repository, @Controller, or @Bean on factory methods.
    - **Example**:
      \`\`\`java
      @Configuration
      public class AppConfig {
          @Bean
          public RestTemplate restTemplate() {
              return new RestTemplate();
          }
      }
      \`\`\`
    - **Note**: Bean name defaults to method name, can be overridden with @Bean("customName").

24. **What is the role of the @Autowired annotation?**
    - **Answer**: @Autowired marks a field, constructor, or setter method for automatic dependency injection.
    - **Example**:
      \`\`\`java
      @Autowired
      private UserService userService;
      \`\`\`
    - **Note**: Constructor injection is preferred for immutability and testability.

25. **How do you create a custom Spring Boot starter?**
    - **Answer**: Create a library project with auto-configuration classes and a spring.factories file.
    - **Example**:
      \`\`\`java
      @Configuration
      @ConditionalOnClass(MyService.class)
      @EnableConfigurationProperties(MyProperties.class)
      public class MyServiceAutoConfiguration {
          @Bean
          @ConditionalOnMissingBean
          public MyService myService(MyProperties properties) {
              return new MyService(properties.getPrefix());
          }
      }
      \`\`\`
    - **Example**:
      \`\`\`properties
      org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\
      com.example.MyServiceAutoConfiguration
      \`\`\`

26. **What is the difference between @Component, @Service, @Repository, and @Controller?**
    - **Answer**: These are stereotypes that specialize @Component for different layers.
    - **Example**:
      \`\`\`text
      @Component – generic stereotype (any Spring-managed bean)
      @Service – service layer (business logic)
      @Repository – DAO layer (data access, converts persistence exceptions)
      @Controller – web layer (MVC controller, handles HTTP requests)
      \`\`\`
    - **Note**: @Repository adds translation of persistence exceptions to Spring's DataAccessException hierarchy.

27. **How do you create a custom annotation in Spring Boot?**
    - **Answer**: Use @interface and meta-annotations like @Target, @Retention.
    - **Example**:
      \`\`\`java
      @Target(ElementType.METHOD)
      @Retention(RetentionPolicy.RUNTIME)
      public @interface LogExecutionTime {
          String value() default "";
      }
      \`\`\`
    - **Example**:
      \`\`\`java
      @Around("@annotation(LogExecutionTime)")
      public Object logTime(ProceedingJoinPoint joinPoint) throws Throwable {
          long start = System.currentTimeMillis();
          Object result = joinPoint.proceed();
          long elapsed = System.currentTimeMillis() - start;
          System.out.println("Execution time: " + elapsed + "ms");
          return result;
      }
      \`\`\`

28. **What is the use of @Configuration annotation?**
    - **Answer**: @Configuration indicates a class declares @Bean methods and can be processed by the Spring container to generate bean definitions.
    - **Example**:
      \`\`\`java
      @Configuration
      public class AppConfig {
          @Bean
          public DataSource dataSource() {
              return DataSourceBuilder.create()
                  .url("jdbc:h2:mem:test")
                  .username("sa")
                  .password("")
                  .build();
          }
      }
      \`\`\`
    - **Note**: It's a replacement for XML configuration.

29. **How do you use @Bean annotation?**
    - **Answer**: @Bean is used on methods to produce a bean managed by Spring.
    - **Example**:
      \`\`\`java
      @Configuration
      public class AppConfig {
          @Bean
          public ObjectMapper objectMapper() {
              return new ObjectMapper()
                  .registerModule(new JavaTimeModule())
                  .disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
          }
      }
      \`\`\`
    - **Note**: Bean name defaults to method name, can be customized: @Bean("customMapper")

30. **Explain the difference between @Primary and @Qualifier annotations.**
    - **Answer**: @Primary indicates the default bean when multiple candidates exist. @Qualifier specifies exactly which bean to inject.
    - **Example**:
      \`\`\`java
      @Bean
      @Primary
      public DataSource primaryDataSource() { ... }

      @Bean
      @Qualifier("secondary")
      public DataSource secondaryDataSource() { ... }

      // Usage
      @Autowired
      @Qualifier("secondary")
      private DataSource dataSource;
      \`\`\`

### REST and Web Development

31. **How do you create a RESTful web service in Spring Boot?**
    - **Answer**: Use @RestController and @RequestMapping annotations.
    - **Example**:
      \`\`\`java
      @RestController
      @RequestMapping("/api/v1/users")
      public class UserController {
          @Autowired
          private UserService userService;
          
          @GetMapping
          public List<User> getAllUsers() {
              return userService.findAll();
          }
          
          @GetMapping("/{id}")
          public ResponseEntity<User> getUserById(@PathVariable Long id) {
              return userService.findById(id)
                  .map(ResponseEntity::ok)
                  .orElse(ResponseEntity.notFound().build());
          }
          
          @PostMapping
          @ResponseStatus(HttpStatus.CREATED)
          public User createUser(@Valid @RequestBody User user) {
              return userService.save(user);
          }
      }
      \`\`\`

32. **What is @RestController annotation?**
    - **Answer**: @RestController is a convenience annotation combining @Controller and @ResponseBody. It serializes return values directly to HTTP response body (JSON/XML).
    - **Example**:
      \`\`\`java
      @Controller
      @ResponseBody
      public class MyController { ... }

      // vs
      @RestController
      public class MyController { ... }
      \`\`\`

33. **What are the HTTP methods supported by Spring Boot?**
    - **Answer**: Spring Boot supports all standard HTTP methods via annotations:
    - **Example**:
      \`\`\`text
      @GetMapping    - GET
      @PostMapping   - POST
      @PutMapping    - PUT
      @DeleteMapping - DELETE
      @PatchMapping  - PATCH
      @RequestMapping(method = RequestMethod.OPTIONS) - OPTIONS
      @RequestMapping(method = RequestMethod.HEAD)    - HEAD
      \`\`\`

34. **How do you handle exceptions in a Spring Boot RESTful service?**
    - **Answer**: Use @ControllerAdvice with @ExceptionHandler for consistent error responses.
    - **Example**:
      \`\`\`java
      @ControllerAdvice
      public class RestExceptionHandler {
          @ExceptionHandler(MethodArgumentNotValidException.class)
          public ResponseEntity<ErrorResponse> handleValidationExceptions(MethodArgumentNotValidException ex) {
              List<String> errors = ex.getBindingResult()
                  .getFieldErrors()
                  .stream()
                  .map(FieldError::getDefaultMessage)
                  .collect(Collectors.toList());
              ErrorResponse errorResponse = new ErrorResponse("VALIDATION_FAILED", errors);
              return ResponseEntity.badRequest().body(errorResponse);
          }
      }
      \`\`\`

35. **What is the difference between @RequestBody and @ResponseBody?**
    - **Answer**: @RequestBody binds HTTP request body to method parameter (deserialization). @ResponseBody binds method return value to HTTP response body (serialization).
    - **Example**:
      \`\`\`java
      @PostMapping("/users")
      public ResponseEntity<User> createUser(@RequestBody User user) {
          User saved = userService.save(user);
          return ResponseEntity.ok(saved); // @ResponseBody implicit in @RestController
      }
      \`\`\`

36. **How do you validate a request in Spring Boot?**
    - **Answer**: Use @Valid or @Validated with Bean Validation annotations.
    - **Example**:
      \`\`\`java
      public class User {
          @NotNull(message = "ID cannot be null")
          private Long id;
          
          @NotBlank(message = "Name is required")
          @Size(min = 2, max = 50)
          private String name;
          
          @Email(message = "Invalid email format")
          private String email;
      }

      @PostMapping("/users")
      public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
          // If validation fails, MethodArgumentNotValidException is thrown
          return ResponseEntity.ok(userService.save(user));
      }
      \`\`\`

37. **What is @PathVariable annotation?**
    - **Answer**: @PathVariable extracts values from the URI template.
    - **Example**:
      \`\`\`java
      @GetMapping("/users/{userId}/orders/{orderId}")
      public Order getOrder(@PathVariable Long userId, @PathVariable Long orderId) {
          return orderService.findByUserAndOrder(userId, orderId);
      }
      \`\`\`
    - **Note**: If parameter name differs, specify: @PathVariable("userId") Long id

38. **What is @RequestParam annotation?**
    - **Answer**: @RequestParam extracts query parameters from the request.
    - **Example**:
      \`\`\`java
      @GetMapping("/search")
      public List<User> searchUsers(
          @RequestParam String name,
          @RequestParam(required = false, defaultValue = "0") int page,
          @RequestParam(required = false, defaultValue = "20") int size) {
          return userService.searchByName(name, PageRequest.of(page, size));
      }
      // URL: /search?name=john&page=1&size=10
      \`\`\`

39. **How do you implement pagination in Spring Boot?**
    - **Answer**: Use Pageable and Page from Spring Data.
    - **Example**:
      \`\`\`java
      // Repository
      public interface UserRepository extends JpaRepository<User, Long> {
          Page<User> findByStatus(String status, Pageable pageable);
      }

      // Controller
      @GetMapping("/users")
      public Page<User> getUsers(
          @RequestParam(defaultValue = "0") int page,
          @RequestParam(defaultValue = "20") int size,
          @RequestParam(defaultValue = "id,asc") String sort) {
          Pageable pageable = PageRequest.of(page, size, Sort.by(sort.split(",")));
          return userRepository.findAll(pageable);
      }
      \`\`\`

40. **How do you handle CORS in Spring Boot?**
    - **Answer**: Use @CrossOrigin annotation or configure globally.
    - **Example**:
      \`\`\`java
      @RestController
      @CrossOrigin(origins = "http://localhost:3000")
      public class MyController { ... }
      \`\`\`
    - **Example**:
      \`\`\`java
      @Configuration
      public class CorsConfig implements WebMvcConfigurer {
          @Override
          public void addCorsMappings(CorsRegistry registry) {
              registry.addMapping("/api/**")
                  .allowedOrigins("http://localhost:3000")
                  .allowedMethods("GET", "POST", "PUT", "DELETE")
                  .allowedHeaders("*")
                  .allowCredentials(true);
          }
      }
      \`\`\`

### Spring Data and JPA

41. **What is Spring Data JPA?**
    - **Answer**: Spring Data JPA simplifies JPA-based repositories with minimal boilerplate. It provides CRUD, pagination, and query methods.
    - **Example**:
      \`\`\`java
      public interface UserRepository extends JpaRepository<User, Long> {
          // Query method
          List<User> findByLastName(String lastName);
          
          // Custom query
          @Query("SELECT u FROM User u WHERE u.email = ?1")
          Optional<User> findByEmail(String email);
      }
      \`\`\`

42. **How do you configure JPA in Spring Boot?**
    - **Answer**: Configure via properties:
    - **Example**:
      \`\`\`properties
      spring.datasource.url=jdbc:mysql://localhost:3306/mydb
      spring.datasource.username=root
      spring.datasource.password=secret
      spring.jpa.hibernate.ddl-auto=update
      spring.jpa.show-sql=true
      spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
      spring.jpa.properties.hibernate.format_sql=true
      \`\`\`

43. **What is a repository in Spring Data JPA?**
    - **Answer**: A repository is an interface that provides CRUD operations and query methods.
    - **Example**:
      \`\`\`java
      @Repository
      public interface ProductRepository extends JpaRepository<Product, Long> {
          List<Product> findByCategory(String category);
          Page<Product> findByPriceBetween(Double min, Double max, Pageable pageable);
      }
      \`\`\`

44. **What is the difference between CrudRepository, JpaRepository, and PagingAndSortingRepository?**
    - **Answer**: Hierarchy:
    - **Example**:
      \`\`\`text
      CrudRepository - basic CRUD (save, findById, delete)
      PagingAndSortingRepository - extends Crud, adds pagination/sorting
      JpaRepository - extends PagingAndSorting, adds JPA-specific methods (flush, saveAndFlush, deleteInBatch)
      \`\`\`

45. **How do you define a custom query in Spring Data JPA?**
    - **Answer**: Use @Query annotation with JPQL or native SQL.
    - **Example**:
      \`\`\`java
      @Query("SELECT u FROM User u WHERE u.age >= ?1 AND u.city = ?2")
      List<User> findUsersByAgeAndCity(int age, String city);

      @Query(value = "SELECT * FROM users WHERE status = ?1", nativeQuery = true)
      List<User> findUsersByStatusNative(String status);
      \`\`\`

46. **What is the purpose of the @Query annotation?**
    - **Answer**: @Query defines custom JPQL or native SQL queries on repository methods.
    - **Example**:
      \`\`\`java
      @Query("SELECT u FROM User u WHERE u.active = true")
      Page<User> findActiveUsers(Pageable pageable);
      \`\`\`

47. **How do you handle transactions in Spring Boot?**
    - **Answer**: Use @Transactional annotation.
    - **Example**:
      \`\`\`java
      @Service
      public class UserService {
          @Transactional
          public User createUser(User user) {
              // If exception occurs, transaction rolls back automatically
              return userRepository.save(user);
          }
          
          @Transactional(propagation = Propagation.REQUIRES_NEW)
          public void updateUser(User user) {
              // Runs in a new transaction
          }
      }
      \`\`\`

48. **What is the role of the @Entity annotation?**
    - **Answer**: @Entity marks a class as a JPA entity, mapping it to a database table.
    - **Example**:
      \`\`\`java
      @Entity
      @Table(name = "users")
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          
          @Column(nullable = false, length = 50)
          private String name;
          
          @Column(unique = true)
          private String email;
      }
      \`\`\`

49. **What is the difference between @Table and @Entity?**
    - **Answer**: @Entity is required to mark a JPA entity. @Table is optional and specifies the table name, schema, and constraints.
    - **Example**:
      \`\`\`java
      @Entity  // Required
      @Table(name = "users", schema = "public", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
      public class User { ... }
      \`\`\`

50. **How do you perform CRUD operations in Spring Data JPA?**
    - **Answer**: Use repository methods:
    - **Example**:
      \`\`\`java
      @Service
      public class UserService {
          @Autowired
          private UserRepository userRepository;
          
          public User save(User user) { return userRepository.save(user); }
          public Optional<User> findById(Long id) { return userRepository.findById(id); }
          public List<User> findAll() { return userRepository.findAll(); }
          public void delete(Long id) { userRepository.deleteById(id); }
          public User update(User user) { return userRepository.save(user); }
      }
      \`\`\`

`;
