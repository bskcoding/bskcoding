import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{c as t,d as n,t as r,u as i}from"./index-DloYHhOi.js";import{t as a}from"./prism-tomorrow-BCrLxzm9.js";var o=e(n(),1),s=i();a();var c=`## Spring Boot Interview Questions

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

`,l=`### Security

51. **What is Spring Security, and how does it integrate with Spring Boot?**
    - **Answer**: Spring Security provides authentication, authorization, and protection. Integration is via spring-boot-starter-security.
    - **Example**:
      \`\`\`xml
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-security</artifactId>
      </dependency>
      \`\`\`
    - **Note**: Auto-configuration adds basic authentication with default username/password.

52. **How do you secure a Spring Boot application?**
    - **Answer**: Configure SecurityConfig extending WebSecurityConfigurerAdapter.
    - **Example**:
      \`\`\`java
      @Configuration
      @EnableWebSecurity
      public class SecurityConfig extends WebSecurityConfigurerAdapter {
          @Override
          protected void configure(HttpSecurity http) throws Exception {
              http
                  .authorizeRequests()
                      .antMatchers("/public/**").permitAll()
                      .antMatchers("/admin/**").hasRole("ADMIN")
                      .anyRequest().authenticated()
                  .and()
                  .formLogin()
                      .loginPage("/login").permitAll()
                  .and()
                  .logout().permitAll();
          }
      }
      \`\`\`

53. **What is @EnableWebSecurity annotation?**
    - **Answer**: @EnableWebSecurity enables Spring Security's web security support and MVC integration.
    - **Example**:
      \`\`\`java
      @Configuration
      @EnableWebSecurity
      public class SecurityConfig { ... }
      \`\`\`
    - **Note**: It's required for web security configuration.

54. **How do you implement OAuth2 in Spring Boot?**
    - **Answer**: Use spring-boot-starter-oauth2-client and configure in properties.
    - **Example**:
      \`\`\`yaml
      spring:
        security:
          oauth2:
            client:
              registration:
                google:
                  client-id: your-client-id
                  client-secret: your-client-secret
                  scope:
                    - email
                    - profile
      \`\`\`

55. **How do you handle authentication and authorization in Spring Boot?**
    - **Answer**: Configure UserDetailsService and PasswordEncoder.
    - **Example**:
      \`\`\`java
      @Service
      public class CustomUserDetailsService implements UserDetailsService {
          @Autowired
          private UserRepository userRepository;
          
          @Override
          public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
              User user = userRepository.findByUsername(username)
                  .orElseThrow(() -> new UsernameNotFoundException("User not found"));
              
              return org.springframework.security.core.userdetails.User
                  .withUsername(user.getUsername())
                  .password(user.getPassword())
                  .roles(user.getRole())
                  .build();
          }
      }
      \`\`\`

56. **What is the role of the SecurityConfigurerAdapter class?**
    - **Answer**: A base class for configuring security settings. In Spring Boot 3+, use SecurityFilterChain instead.
    - **Example**:
      \`\`\`java
      @Bean
      public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
          http
              .authorizeHttpRequests((requests) -> requests
                  .requestMatchers("/public/**").permitAll()
                  .anyRequest().authenticated()
              )
              .formLogin(withDefaults());
          return http.build();
      }
      \`\`\`

57. **How do you implement JWT authentication in Spring Boot?**
    - **Answer**: Create a filter to validate JWT tokens and set authentication.
    - **Example**:
      \`\`\`java
      @Component
      public class JwtAuthenticationFilter extends OncePerRequestFilter {
          @Override
          protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, 
                                        FilterChain filterChain) throws ServletException, IOException {
              String token = extractToken(request);
              if (token != null && validateToken(token)) {
                  Authentication auth = new UsernamePasswordAuthenticationToken(
                      getUsername(token), null, getAuthorities(token));
                  SecurityContextHolder.getContext().setAuthentication(auth);
              }
              filterChain.doFilter(request, response);
          }
      }
      \`\`\`

58. **How do you configure CORS in Spring Security?**
    - **Answer**: Configure CORS in HttpSecurity.
    - **Example**:
      \`\`\`java
      @Configuration
      public class SecurityConfig {
          @Bean
          public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
              http
                  .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                  .csrf(csrf -> csrf.disable())
                  .authorizeHttpRequests(auth -> auth.anyRequest().authenticated());
              return http.build();
          }
          
          @Bean
          public CorsConfigurationSource corsConfigurationSource() {
              CorsConfiguration config = new CorsConfiguration();
              config.setAllowedOrigins(List.of("http://localhost:3000"));
              config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
              UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
              source.registerCorsConfiguration("/**", config);
              return source;
          }
      }
      \`\`\`

59. **What are security filters in Spring Boot?**
    - **Answer**: Security filters intercept requests and apply security logic. Common filters:
    - **Example**:
      \`\`\`text
      - UsernamePasswordAuthenticationFilter - processes form login
      - BasicAuthenticationFilter - processes HTTP Basic auth
      - JwtAuthenticationFilter - custom JWT validation
      - CorsFilter - handles CORS
      \`\`\`
    - **Note**: Filters are ordered: first authentication, then authorization.

60. **How do you encrypt passwords in Spring Boot?**
    - **Answer**: Use PasswordEncoder (BCrypt recommended).
    - **Example**:
      \`\`\`java
      @Bean
      public PasswordEncoder passwordEncoder() {
          return new BCryptPasswordEncoder();
      }

      // Usage
      @Autowired
      private PasswordEncoder passwordEncoder;

      public void createUser(User user) {
          user.setPassword(passwordEncoder.encode(user.getPassword()));
          userRepository.save(user);
      }
      \`\`\`

### Testing

61. **How do you write unit tests in Spring Boot?**
    - **Answer**: Use JUnit 5 with Mockito for mocking dependencies.
    - **Example**:
      \`\`\`java
      @ExtendWith(MockitoExtension.class)
      class UserServiceTest {
          @Mock
          private UserRepository userRepository;
          
          @InjectMocks
          private UserService userService;
          
          @Test
          void shouldFindUserById() {
              User mockUser = new User(1L, "John");
              when(userRepository.findById(1L)).thenReturn(Optional.of(mockUser));
              
              User result = userService.findById(1L);
              
              assertNotNull(result);
              assertEquals("John", result.getName());
          }
      }
      \`\`\`

62. **What is the role of @SpringBootTest annotation?**
    - **Answer**: Loads the full application context for integration testing.
    - **Example**:
      \`\`\`java
      @SpringBootTest
      @AutoConfigureMockMvc
      class ApplicationIntegrationTest {
          @Autowired
          private MockMvc mockMvc;
          
          @Test
          void shouldReturnHelloWorld() throws Exception {
              mockMvc.perform(get("/hello"))
                  .andExpect(status().isOk())
                  .andExpect(content().string("Hello, World!"));
          }
      }
      \`\`\`

63. **How do you test RESTful web services in Spring Boot?**
    - **Answer**: Use @WebMvcTest with MockMvc.
    - **Example**:
      \`\`\`java
      @WebMvcTest(UserController.class)
      class UserControllerTest {
          @Autowired
          private MockMvc mockMvc;
          
          @MockBean
          private UserService userService;
          
          @Test
          void shouldGetUser() throws Exception {
              User user = new User(1L, "John");
              when(userService.findById(1L)).thenReturn(Optional.of(user));
              
              mockMvc.perform(get("/api/v1/users/1"))
                  .andExpect(status().isOk())
                  .andExpect(jsonPath("$.name").value("John"));
          }
      }
      \`\`\`

64. **What is the use of MockMvc in Spring Boot testing?**
    - **Answer**: MockMvc simulates HTTP requests without starting a full server, enabling fast controller testing.
    - **Example**:
      \`\`\`java
      mockMvc.perform(post("/api/users")
          .contentType(MediaType.APPLICATION_JSON)
          .content("{"name":"Jane"}"))
          .andExpect(status().isCreated())
          .andExpect(jsonPath("$.id").exists());
      \`\`\`

65. **How do you perform integration testing in Spring Boot?**
    - **Answer**: Use @SpringBootTest with TestRestTemplate or WebTestClient.
    - **Example**:
      \`\`\`java
      @SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
      class UserIntegrationTest {
          @LocalServerPort
          private int port;
          
          @Autowired
          private TestRestTemplate restTemplate;
          
          @Test
          void shouldCreateAndRetrieveUser() {
              User user = new User("Alice");
              User created = restTemplate.postForObject("/api/users", user, User.class);
              assertNotNull(created.getId());
              
              User retrieved = restTemplate.getForObject("/api/users/" + created.getId(), User.class);
              assertEquals("Alice", retrieved.getName());
          }
      }
      \`\`\`

66. **What are @MockBean and @SpyBean annotations?**
    - **Answer**: @MockBean creates a Mockito mock. @SpyBean creates a spy (partial mock).
    - **Example**:
      \`\`\`java
      @SpringBootTest
      class ServiceTest {
          @MockBean
          private UserRepository userRepository;
          
          @SpyBean
          private UserService userService;
          
          @Test
          void testService() {
              when(userRepository.save(any())).thenReturn(new User());
              userService.createUser(new User());
              verify(userRepository).save(any());
          }
      }
      \`\`\`

67. **How do you test a Spring Data JPA repository?**
    - **Answer**: Use @DataJpaTest which configures an in-memory database.
    - **Example**:
      \`\`\`java
      @DataJpaTest
      @AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
      class UserRepositoryTest {
          @Autowired
          private UserRepository userRepository;
          
          @Test
          void shouldSaveAndFindUser() {
              User user = new User("John", "john@mail.com");
              User saved = userRepository.save(user);
              
              Optional<User> found = userRepository.findById(saved.getId());
              assertTrue(found.isPresent());
              assertEquals("john@mail.com", found.get().getEmail());
          }
      }
      \`\`\`

68. **How do you test Spring Boot services?**
    - **Answer**: Use @MockBean for dependencies and test business logic.
    - **Example**:
      \`\`\`java
      @ExtendWith(MockitoExtension.class)
      class UserServiceTest {
          @Mock
          private UserRepository userRepository;
          
          @InjectMocks
          private UserService userService;
          
          @Test
          void shouldCreateUser() {
              User input = new User("Alice");
              User saved = new User(1L, "Alice");
              when(userRepository.save(any(User.class))).thenReturn(saved);
              
              User result = userService.createUser(input);
              assertEquals(1L, result.getId());
              assertEquals("Alice", result.getName());
          }
      }
      \`\`\`

69. **What is @DataJpaTest annotation?**
    - **Answer**: @DataJpaTest configures only JPA-related components for repository testing.
    - **Example**:
      \`\`\`text
      - Sets up an in-memory database (H2 by default)
      - Configures @Entity and @Repository beans
      - Disables full auto-configuration for speed
      \`\`\`

70. **How do you write a test for a Spring Boot controller?**
    - **Answer**: Use @WebMvcTest with MockMvc.
    - **Example**:
      \`\`\`java
      @WebMvcTest(UserController.class)
      class UserControllerTest {
          @Autowired
          private MockMvc mockMvc;
          
          @MockBean
          private UserService userService;
          
          @Test
          void shouldGetAllUsers() throws Exception {
              List<User> users = List.of(new User(1L, "John"), new User(2L, "Jane"));
              when(userService.findAll()).thenReturn(users);
              
              mockMvc.perform(get("/api/users"))
                  .andExpect(status().isOk())
                  .andExpect(jsonPath("$").isArray())
                  .andExpect(jsonPath("$[0].name").value("John"));
          }
      }
      \`\`\`

### Microservices and Cloud

71. **What is Spring Cloud, and how does it relate to Spring Boot?**
    - **Answer**: Spring Cloud provides tools for distributed systems (service discovery, config, circuit breakers). It builds on Spring Boot to create production-ready microservices.
    - **Example**: Common Spring Cloud starters:
      \`\`\`text
      - spring-cloud-starter-netflix-eureka-client - service discovery
      - spring-cloud-starter-config - external configuration
      - spring-cloud-starter-gateway - API gateway
      - spring-cloud-starter-circuitbreaker-resilience4j - fault tolerance
      \`\`\`

72. **How do you create a microservice using Spring Boot?**
    - **Answer**: Create a Spring Boot project with web starter, define REST endpoints, and manage dependencies.
    - **Example**:
      \`\`\`java
      @SpringBootApplication
      @RestController
      public class ProductServiceApplication {
          @GetMapping("/products/{id}")
          public Product getProduct(@PathVariable Long id) {
              return new Product(id, "Laptop", 999.99);
          }
          
          public static void main(String[] args) {
              SpringApplication.run(ProductServiceApplication.class, args);
          }
      }
      \`\`\`

73. **What is service discovery, and how do you implement it in Spring Boot?**
    - **Answer**: Service discovery allows services to find each other dynamically. Implement with Netflix Eureka.
    - **Example**:
      \`\`\`java
      @SpringBootApplication
      @EnableEurekaServer
      public class DiscoveryServiceApplication {
          public static void main(String[] args) {
              SpringApplication.run(DiscoveryServiceApplication.class, args);
          }
      }
      \`\`\`

74. **What is the role of Eureka in Spring Cloud?**
    - **Answer**: Eureka is a service registry where services register themselves and discover others, enabling client-side load balancing and failover.
    - **Example**:
      \`\`\`properties
      # Eureka Server
      eureka.client.register-with-eureka=false
      eureka.client.fetch-registry=false

      # Eureka Client
      eureka.client.service-url.defaultZone=http://localhost:8761/eureka
      eureka.instance.prefer-ip-address=true
      \`\`\`

75. **How do you configure load balancing in Spring Boot?**
    - **Answer**: Use Spring Cloud LoadBalancer (replaces Ribbon).
    - **Example**:
      \`\`\`java
      @Configuration
      public class AppConfig {
          @Bean
          @LoadBalanced
          public RestTemplate restTemplate() {
              return new RestTemplate();
          }
      }

      // Usage
      @Service
      public class OrderService {
          @Autowired
          private RestTemplate restTemplate;
          
          public Product getProduct(Long id) {
              return restTemplate.getForObject(
                  "http://product-service/products/" + id, Product.class);
          }
      }
      \`\`\`

76. **What is Spring Cloud Config?**
    - **Answer**: Spring Cloud Config provides externalized configuration for distributed systems. Config server serves properties from Git, Vault, or filesystem.
    - **Example**:
      \`\`\`java
      @SpringBootApplication
      @EnableConfigServer
      public class ConfigServerApplication {
          public static void main(String[] args) {
              SpringApplication.run(ConfigServerApplication.class, args);
          }
      }
      \`\`\`

77. **How do you handle distributed tracing in Spring Boot?**
    - **Answer**: Use Spring Cloud Sleuth with Zipkin for distributed tracing.
    - **Example**:
      \`\`\`xml
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-sleuth</artifactId>
      </dependency>
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-zipkin</artifactId>
      </dependency>
      \`\`\`
    - **Note**: Sleuth adds trace and span IDs, Zipkin sends data to a Zipkin server.

78. **What is the use of Spring Cloud Gateway?**
    - **Answer**: Spring Cloud Gateway provides API routing, filtering, and cross-cutting concerns (security, monitoring, rate limiting).
    - **Example**:
      \`\`\`yaml
      spring:
        cloud:
          gateway:
            routes:
              - id: product-service
                uri: lb://product-service
                predicates:
                  - Path=/api/products/**
                filters:
                  - name: CircuitBreaker
                    args:
                      name: productService
                      fallbackUri: forward:/fallback
      \`\`\`

79. **How do you implement API Gateway in Spring Boot?**
    - **Answer**: Use Spring Cloud Gateway with routing rules.
    - **Example**:
      \`\`\`yaml
      spring:
        cloud:
          gateway:
            routes:
              - id: user-service
                uri: lb://user-service
                predicates:
                  - Path=/users/**
                filters:
                  - AddRequestHeader=X-Request-Id, 123
      \`\`\`

80. **What is Hystrix, and how does it work in Spring Boot?**
    - **Answer**: Hystrix (now Resilience4j) provides circuit breaker pattern for fault tolerance.
    - **Example**:
      \`\`\`java
      @Service
      public class ProductService {
          @CircuitBreaker(name = "productService", fallbackMethod = "fallback")
          public Product getProduct(Long id) {
              return restTemplate.getForObject("http://product-service/products/" + id, Product.class);
          }
          
          public Product fallback(Long id, Throwable throwable) {
              return new Product(id, "Fallback Product", 0.0);
          }
      }
      \`\`\`

### Miscellaneous

81. **What are the key components of a Spring Boot application?**
    - **Answer**: Key components:
    - **Example**:
      \`\`\`text
      - @SpringBootApplication (main class)
      - application.properties/yml (configuration)
      - Embedded server (Tomcat/Jetty)
      - Auto-configuration
      - Starter dependencies
      - Actuator endpoints (monitoring)
      \`\`\`

82. **How does Spring Boot handle application properties and configuration?**
    - **Answer**: Via application.properties or application.yml with @Value and @ConfigurationProperties.
    - **Example**:
      \`\`\`java
      @ConfigurationProperties(prefix = "app")
      @Component
      public class AppProperties {
          private String name;
          private String version;
          private Map<String, String> endpoints;
          // getters/setters
      }
      \`\`\`

83. **What are actuators in Spring Boot, and why are they important?**
    - **Answer**: Actuators provide production-ready monitoring endpoints.
    - **Example**: Key endpoints:
      \`\`\`text
      /actuator/health - application health
      /actuator/info - application info
      /actuator/metrics - application metrics
      /actuator/loggers - logging configuration
      /actuator/env - environment properties
      \`\`\`

84. **How do you monitor a Spring Boot application?**
    - **Answer**: Use Actuator endpoints, Micrometer metrics, and integrate with monitoring tools.
    - **Example**:
      \`\`\`xml
      <dependency>
          <groupId>io.micrometer</groupId>
          <artifactId>micrometer-registry-prometheus</artifactId>
      </dependency>

      management.endpoints.web.exposure.include=health,info,prometheus
      \`\`\`
    - **Note**: Prometheus scrapes metrics, Grafana visualizes them.

85. **What is Spring Boot Admin?**
    - **Answer**: Spring Boot Admin is a community tool providing a UI to manage and monitor Spring Boot applications.
    - **Example**:
      \`\`\`java
      @SpringBootApplication
      @EnableAdminServer
      public class AdminServerApplication {
          public static void main(String[] args) {
              SpringApplication.run(AdminServerApplication.class, args);
          }
      }
      \`\`\`

86. **What is the role of @SpringBootApplication annotation?**
    - **Answer**: Combines @Configuration, @EnableAutoConfiguration, and @ComponentScan.
    - **Example**:
      \`\`\`java
      @Configuration
      @EnableAutoConfiguration
      @ComponentScan(basePackages = "com.myapp")
      public class MyApp { ... }
      \`\`\`

87. **How do you deploy a Spring Boot application?**
    - **Answer**: Deploy as standalone JAR, WAR on external server, or to cloud platforms.
    - **Example**:
      \`\`\`bash
      mvn clean package
      java -jar target/myapp.jar --server.port=8081
      \`\`\`
    - **Example**:
      \`\`\`dockerfile
      FROM eclipse-temurin:17
      COPY target/myapp.jar app.jar
      ENTRYPOINT ["java", "-jar", "/app.jar"]
      \`\`\`

88. **What are the different ways to package a Spring Boot application?**
    - **Answer**: Two packaging types:
    - **Example**:
      \`\`\`text
      JAR - standalone executable with embedded server (default)
      WAR - deployable to external servlet containers (Tomcat, Jetty)
      \`\`\`

89. **What is the role of SpringApplication class?**
    - **Answer**: Bootstraps and launches the Spring application, sets up context, embedded server, and auto-configuration.
    - **Example**:
      \`\`\`java
      SpringApplication app = new SpringApplication(MyApp.class);
      app.setBannerMode(Banner.Mode.OFF);
      app.setAdditionalProfiles("dev");
      app.run(args);
      \`\`\`

90. **How do you handle application migrations in Spring Boot?**
    - **Answer**: Use Flyway or Liquibase for database migrations.
    - **Example**:
      \`\`\`xml
      <dependency>
          <groupId>org.flywaydb</groupId>
          <artifactId>flyway-core</artifactId>
      </dependency>

      # SQL scripts in db/migration/V1__init.sql
      # Flyway runs automatically on startup
      \`\`\`

### Advanced Topics

91. **What is Spring Boot DevTools, and how do you use it?**
    - **Answer**: DevTools provides automatic restarts, live reload, and enhanced development experience.
    - **Example**:
      \`\`\`xml
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-devtools</artifactId>
          <scope>runtime</scope>
          <optional>true</optional>
      </dependency>
      \`\`\`
    - **Note**: Classpath changes trigger automatic restart. Live Reload works with browser plugins.

92. **How do you handle versioning in a Spring Boot REST API?**
    - **Answer**: Versioning strategies:
    - **Example**:
      \`\`\`text
      URI versioning: /api/v1/users, /api/v2/users
      Parameter versioning: /api/users?version=1
      Header versioning: X-API-Version=1
      Content negotiation: Accept: application/vnd.myapp.v1+json
      \`\`\`

93. **What are the common pitfalls in Spring Boot development?**
    - **Answer**: Common pitfalls:
    - **Example**:
      \`\`\`text
      - Over-reliance on auto-configuration without understanding
      - Ignoring security best practices (default passwords, missing CSRF)
      - Poor exception handling (no global handler)
      - Large JAR sizes (unused dependencies)
      - Not using profiles for different environments
      - Blocking operations in WebFlux
      \`\`\`

94. **How do you optimize the performance of a Spring Boot application?**
    - **Answer**: Performance optimization tips:
    - **Example**:
      \`\`\`text
      - Use connection pooling (HikariCP default)
      - Enable caching (@EnableCaching)
      - Optimize database queries (indexes, fetch joins)
      - Use async processing (@Async)
      - Configure HTTP compression (server.compression.enabled=true)
      - Tune JVM heap and GC
      - Use response pagination
      \`\`\`

95. **What are the best practices for Spring Boot development?**
    - **Answer**: Best practices:
    - **Example**:
      \`\`\`text
      - Use constructor injection over field injection
      - Follow package structure (controller, service, repository)
      - Externalize configuration
      - Write comprehensive tests (unit, integration)
      - Use profiles for environments
      - Enable logging with structured format
      - Monitor with Actuator/Micrometer
      - Use DTOs for API contracts
      - Implement global exception handling
      \`\`\`

96. **How do you use Liquibase or Flyway with Spring Boot?**
    - **Answer**: Add dependency and create migration scripts.
    - **Example**:
      \`\`\`sql
      -- src/main/resources/db/migration/V1_0_0__create_users.sql
      CREATE TABLE users (
          id BIGINT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL
      );
      \`\`\`

97. **How do you configure caching in Spring Boot?**
    - **Answer**: Enable caching and use annotations.
    - **Example**:
      \`\`\`java
      @Configuration
      @EnableCaching
      public class CacheConfig { ... }

      @Service
      public class ProductService {
          @Cacheable(value = "products", key = "#id")
          public Product getProduct(Long id) {
              // expensive operation
              return productRepository.findById(id);
          }
          
          @CacheEvict(value = "products", key = "#id")
          public void updateProduct(Long id, Product product) { ... }
      }
      \`\`\`

98. **What is Spring Session, and how do you use it?**
    - **Answer**: Spring Session manages user sessions in distributed environments, storing sessions in Redis, JDBC, or Hazelcast.
    - **Example**:
      \`\`\`xml
      <dependency>
          <groupId>org.springframework.session</groupId>
          <artifactId>spring-session-data-redis</artifactId>
      </dependency>

      # application.properties
      spring.session.store-type=redis
      spring.redis.host=localhost
      spring.redis.port=6379
      \`\`\`

99. **How do you handle file uploads in Spring Boot?**
    - **Answer**: Use MultipartFile in controller.
    - **Example**:
      \`\`\`java
      @PostMapping("/upload")
      public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
          String fileName = file.getOriginalFilename();
          Path path = Paths.get("/uploads/" + fileName);
          Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
          return ResponseEntity.ok("File uploaded: " + fileName);
      }

      # application.properties
      spring.servlet.multipart.max-file-size=10MB
      spring.servlet.multipart.max-request-size=10MB
      \`\`\`

100. **What are the new features introduced in the latest versions of Spring Boot?**
    - **Answer**: Spring Boot 3.x features include:
    - **Example**:
      \`\`\`text
      - Java 17 baseline
      - Jakarta EE 10 support (javax → jakarta)
      - GraalVM native images support (Spring Native)
      - Improved Docker Compose support
      - Enhanced observability (Micrometer tracing)
      - Problem Details support (RFC 7807)
      - Updated autoconfiguration for Spring 6
      \`\`\`
    - **Note**: Check the Spring Boot release notes for details.`,u=r();typeof window<`u`&&window.Prism;var d=c+l,f=(e,t)=>{let n=t||`java`;try{if(typeof window>`u`||!window.Prism||!window.Prism.languages)return e;let t=window.Prism.languages[n]||window.Prism.languages.java;return t&&window.Prism.highlight(e,t,n)||e}catch(n){return console.warn(`Prism highlighting failed for language '${t}':`,n),e}},p=(e=>{let t=[],n=e.split(`
`),r=null,i=null,a=!1,o=[],s=``;for(let e=0;e<n.length;e++){let c=n[e],l=c.trim();if(l.startsWith("```")){if(!a)a=!0,s=l.replace(/```/g,``).trim()||`java`,o=[];else{if(a=!1,i&&o.length>0){let e=o.join(`
`).split(`
`),t=Math.min(...e.filter(e=>e.trim()).map(e=>e.match(/^\s*/)[0].length)),n=e.map(e=>e.slice(t)).join(`
`).trim();i.response.push({type:`code`,content:n,language:s})}o=[]}continue}if(a){o.push(c);continue}let u=c.match(/^###\s+(.+)/);if(u){r={name:u[1],questions:[]},t.push(r),i=null;continue}let d=c.match(/^(\d+)\.\s*\*\*(.+?)\*\*/);if(d)i={id:d[1],question:d[2],response:[]},r&&r.questions.push(i);else if(i&&c.trim().startsWith(`- **Answer**:`)){let e=c.replace(`- **Answer**:`,``).trim();e&&i.response.push({type:`text`,content:e})}else if(i&&c.trim().startsWith(`- **Example**:`)){let e=c.replace(`- **Example**:`,``).trim();e&&i.response.push({type:`example`,content:e})}else if(i&&c.trim().startsWith(`- **Note**:`)){let e=c.replace(`- **Note**:`,``).trim();e&&i.response.push({type:`note`,content:e})}else if(i&&c.trim()&&!c.trim().startsWith(`#`)){let e=c.trim();if(e&&e.length>1&&!e.match(/^[-*]\s*$/)&&!e.match(/^[a-zA-Z]$/)&&!e.match(/^[0-9]$/)){let t=e.replace(/^\s*[-*]\s+/,``).replace(/\*\*(.+?)\*\*/g,`$1`).replace(/`([^`]+)`/g,`$1`);i.response.push({type:`text`,content:t})}}}return t})(d),m=p.reduce((e,t)=>e+t.questions.length,0);function h(){let e=(0,s.c)(13),[n,r]=(0,o.useState)(null),i;e[0]===n?i=e[1]:(i=e=>{r(n===e?null:e)},e[0]=n,e[1]=i);let a=i,c,l,d;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,u.jsx)(t,{to:`/spring-boot`,className:`back-button`,children:`← Back to Spring Boot`}),l=(0,u.jsx)(`h1`,{className:`interview-title`,children:`Spring Boot Interview Questions`}),d=(0,u.jsx)(`p`,{className:`interview-subtitle`,children:`Master Spring Boot interview questions with detailed answers and code examples`}),e[2]=c,e[3]=l,e[4]=d):(c=e[2],l=e[3],d=e[4]);let f;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(f=(0,u.jsxs)(`div`,{className:`interview-stat`,children:[(0,u.jsxs)(`span`,{className:`stat-number`,children:[m,`+`]}),(0,u.jsx)(`span`,{className:`stat-label`,children:`Questions`})]}),e[5]=f):f=e[5];let h;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,u.jsxs)(`div`,{className:`interview-stat`,children:[(0,u.jsx)(`span`,{className:`stat-number`,children:p.length}),(0,u.jsx)(`span`,{className:`stat-label`,children:`Categories`})]}),e[6]=h):h=e[6];let _;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,u.jsx)(`section`,{className:`interview-header`,children:(0,u.jsxs)(`div`,{className:`interview-header-content`,children:[c,l,d,(0,u.jsxs)(`div`,{className:`interview-stats`,children:[f,h,(0,u.jsxs)(`div`,{className:`interview-stat`,children:[(0,u.jsx)(`span`,{className:`stat-number`,children:`100%`}),(0,u.jsx)(`span`,{className:`stat-label`,children:`Free`})]})]})]})}),e[7]=_):_=e[7];let v;e[8]!==n||e[9]!==a?(v=p.map((e,t)=>(0,u.jsxs)(`div`,{className:`category-section`,children:[(0,u.jsx)(`h2`,{className:`category-title`,children:e.name}),(0,u.jsx)(`div`,{className:`questions-vertical`,children:e.questions.map(e=>(0,u.jsxs)(`div`,{className:`question-item-vertical ${n===e.id?`active`:``}`,children:[(0,u.jsxs)(`div`,{className:`question-item-header`,onClick:()=>a(e.id),children:[(0,u.jsxs)(`span`,{className:`q-number`,children:[`Q`,e.id]}),(0,u.jsx)(`p`,{className:`q-text`,children:e.question}),(0,u.jsx)(`span`,{className:`expand-arrow ${n===e.id?`expanded`:``}`,children:`▼`})]}),n===e.id&&(0,u.jsx)(`div`,{className:`question-item-content`,children:(0,u.jsx)(`div`,{className:`question-card`,children:(0,u.jsxs)(`div`,{className:`question-answer`,children:[(0,u.jsx)(`h3`,{className:`answer-title`,children:`Answer:`}),e.response.map(g)]})})})]},e.id))})]},t)),e[8]=n,e[9]=a,e[10]=v):v=e[10];let y;return e[11]===v?y=e[12]:(y=(0,u.jsxs)(`div`,{className:`spring-boot-interview-page`,children:[_,(0,u.jsx)(`section`,{className:`questions-section`,children:(0,u.jsx)(`div`,{className:`questions-container`,children:(0,u.jsx)(`div`,{className:`questions-list`,children:v})})})]}),e[11]=v,e[12]=y),y}function g(e,t){return e.type===`code`?(0,u.jsxs)(`div`,{className:`code-block`,children:[(0,u.jsx)(`div`,{className:`code-header`,children:(0,u.jsx)(`span`,{className:`code-language`,children:e.language||`java`})}),(0,u.jsx)(`pre`,{className:`language-${e.language||`java`}`,children:(0,u.jsx)(`code`,{className:`language-${e.language||`java`}`,dangerouslySetInnerHTML:{__html:f(e.content,e.language)}})})]},t):e.type===`example`?(0,u.jsxs)(`p`,{className:`answer-text`,children:[`📘 `,e.content]},t):e.type===`note`?(0,u.jsxs)(`p`,{className:`answer-text`,children:[`💡 `,e.content]},t):(0,u.jsx)(`p`,{className:`answer-text`,children:e.content},t)}export{h as default};