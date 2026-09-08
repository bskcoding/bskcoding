// Spring Boot Interview Questions - Part 1 (Questions 1-50)
// Auto-generated from src/pages/SpringBootInterview.jsx. Content is identical.
export const springBootInterviewPart1 = `## Spring Boot Interview Questions

### Basic Questions

1. **What is Spring Boot, and how is it different from the Spring Framework?**
   - **Answer**: Think of Spring as a box of car parts — you get everything you need to build a car, but you have to assemble it yourself. Spring Boot is like buying a pre-assembled car with the keys in the ignition — you just turn it on and drive.

   Spring is powerful but requires lots of setup: XML config files, deploying to a web server, wiring beans manually. Spring Boot takes all that away with sensible defaults and auto-configuration. You add a dependency, and Spring Boot says "oh, you want a web app? I'll set up Tomcat, configure the servlet, and wire up JSON for you."
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
   - **Answer**: Why do people love Spring Boot? Because it removes all the boring setup work and lets you focus on writing actual business logic. Here's what you get:

   - **No server setup**: Tomcat (or Jetty, or Undertow) is built right in — you just run the JAR like a normal Java program
   - **Auto-configuration**: Spring Boot looks at what's on your classpath and configures things automatically. Add a database driver? It sets up the connection pool. Add a web starter? It configures the web stack.
   - **Production-ready**: Built-in health checks, metrics, and monitoring endpoints (via Actuator) so you know if your app is healthy
   - **Opinionated defaults**: Instead of making you configure everything, Spring Boot picks sensible defaults. You only override what you need to.
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
   - **Answer**: The easiest way is to go to start.spring.io (Spring Initializr) — it's like a quick-start wizard. Pick your Spring Boot version, add dependencies you need (like "Spring Web" for REST APIs or "Spring Data JPA" for databases), hit Generate, and you've got a ready-to-run project.

   You can also do it manually by adding the Spring Boot parent POM to your pom.xml and adding starter dependencies. Here's the minimal setup:
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
   - **Answer**: A starter is like a "bundle deal" for dependencies. Instead of manually finding and adding 5-6 individual libraries (and hoping their versions are compatible), you add one starter and it pulls in everything you need.

   For example, spring-boot-starter-web gives you Spring MVC for handling HTTP requests, Jackson for JSON, Tomcat as the embedded server, and validation — all in one dependency. No version conflicts, no missing pieces.
   - **Example**:
     \`\`\`xml
     <dependency>
         <groupId>org.springframework.boot</groupId>
         <artifactId>spring-boot-starter-data-jpa</artifactId>
     </dependency>
     // This pulls in Hibernate, Spring Data JPA, and HikariCP
     \`\`\`

5. **What are Spring Boot starters and why are they useful?**
   - **Answer**: Starters solve a real pain point: dependency hell. Without starters, you'd need to figure out which versions of Spring MVC, Jackson, Tomcat, and validation work together — and update them all when you upgrade Spring Boot.

   Starters fix this by:
   - **Curated bundles**: Each starter is tested and known to work together
   - **Version management**: The Spring Boot parent POM handles all versions for you
   - **Less XML**: One dependency instead of five, all with compatible versions
   - **Example**: spring-boot-starter-web includes:
     \`\`\`text
     - spring-webmvc (Spring MVC)
     - jackson-databind (JSON serialization)
     - tomcat-embed-core (embedded server)
     - spring-boot-starter-validation (bean validation)
     \`\`\`

6. **Explain the concept of auto-configuration in Spring Boot.**
   - **Answer**: Auto-configuration is Spring Boot's "magic" — it looks at what's on your classpath and automatically sets up your application. No manual bean definitions needed.

   Here's how it works: when your app starts, Spring Boot checks what JARs are present. If it sees spring-boot-starter-web, it says "you're building a web app" and automatically configures the DispatcherServlet (the front controller), an embedded Tomcat server, and Jackson for JSON. If it sees a database driver, it sets up a DataSource and connection pool.

   The key is @ConditionalOnClass — Spring Boot only applies a configuration if the required classes are present. So if you don't include a database driver, it won't try to configure a database.
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
   - **Answer**: Spring Boot reads configuration from application.properties or application.yml (both in src/main/resources). Think of these as your app's settings file — database URLs, server ports, logging levels, custom flags, etc.

   You can inject these values into your beans in two ways:
  - @Value: For simple one-off values like @Value("\${server.port}")
   - @ConfigurationProperties: For grouping related properties into a class (like all database settings in one place)
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
   - **Answer**: These files let you configure your app without touching code. Want to change the database URL? Edit the file, restart the app — no recompilation needed.

   You can use either format:
   - **application.properties**: Simple key-value pairs, flat structure
   - **application.yml**: Hierarchical, uses indentation (like Python), cleaner for nested settings

   Spring Boot reads these automatically from src/main/resources. You can also override them with environment variables or command-line arguments.
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
   - **Answer**: Profiles let you have different configurations for different environments. Your dev setup might use an in-memory H2 database and debug logging, while production uses a real MySQL database and minimal logging.

   You create profile-specific files like application-dev.properties and application-prod.properties. Spring Boot loads the base application.properties first, then overlays the active profile's settings on top. You activate a profile with spring.profiles.active=dev or via command line.
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
    - **Answer**: Instead of writing try-catch blocks in every controller method, Spring Boot lets you handle exceptions in one central place using @ControllerAdvice. Think of it as a global safety net — any exception thrown by any controller gets caught here and converted into a proper HTTP response.

   You can handle specific exceptions (like ResourceNotFoundException returns 404) and have a catch-all for unexpected errors (returns 500). This keeps your controllers clean and your API responses consistent.
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
    - **Answer**: Spring Boot makes database configuration almost trivial. Just add the database URL, username, and password to your application.properties, include the JDBC driver dependency, and Spring Boot automatically creates a DataSource bean with a connection pool (HikariCP by default — the fastest connection pool available).

   No need to manually configure connection pool settings, though you can override them if needed. Spring Boot even auto-configures JPA and the EntityManager if you include spring-boot-starter-data-jpa.
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
    - **Answer**: Spring Boot gives you many ways to configure your app, and they all follow a clear priority order (later ones override earlier ones):

   - **application.properties / application.yml**: The default config files in src/main/resources
   - **Command-line arguments**: Override anything at startup with --server.port=8081
   - **Environment variables**: Useful for Docker/Kubernetes deployments (SERVER_PORT=8081)
   - **@PropertySource**: Load custom properties files from anywhere on classpath

   This flexibility means you can develop with one set of settings locally, override them in production with environment variables, and never change your code.
    - **Example**:
      \`\`\`java
      @Configuration
      @PropertySource("classpath:custom.properties")
      public class AppConfig { ... }
      \`\`\`

13. **How can you enable HTTPS in a Spring Boot application?**
    - **Answer**: Enabling HTTPS in Spring Boot is surprisingly simple. You need a certificate (stored in a keystore file), and then you just add a few lines to your application.properties. Spring Boot automatically configures the server to use HTTPS on the specified port.

   You can generate a self-signed certificate for development using keytool (included with Java). For production, you'd use a certificate from a trusted authority like Let's Encrypt.
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
    - **Answer**: Spring Boot uses Logback by default, and you can configure it in two ways:

   - **application.properties**: Quick and simple — set log levels, output file, and pattern without any XML
   - **logback.xml**: For advanced configuration like custom appenders, rolling policies, or different log formats for different packages

   You can control logging at different levels — turn on DEBUG for your own code while keeping Spring Framework at INFO to avoid noise.
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
    - **Answer**: @SpringBootApplication is a shortcut that combines three annotations into one:
   - @Configuration: This class has bean definitions
   - @EnableAutoConfiguration: Spring Boot should guess what you need based on your dependencies
   - @ComponentScan: Look in this package (and sub-packages) for Spring components

   Instead of writing three annotations, you just write one. It goes on your main class — the one with the main() method.
    - **Example**:
      \`\`\`java
      @Configuration
      @EnableAutoConfiguration
      @ComponentScan(basePackages = "com.myapp")
      public class MyApplication { ... }
      \`\`\`
    - **Note**: It auto-detects components and enables auto-configuration.

16. **What is the purpose of @EnableAutoConfiguration annotation?**
    - **Answer**: @EnableAutoConfiguration is the engine behind Spring Boot's "magic." It tells Spring Boot to look at your classpath and automatically configure beans for you.

   For example, if you have spring-boot-starter-data-jpa on your classpath, it automatically creates a DataSource and EntityManager. If you have spring-boot-starter-web, it sets up a DispatcherServlet and embedded Tomcat. If you have spring-boot-starter-security, it secures all your endpoints.

   The smart part: it only adds beans that don't already exist. If you've defined your own DataSource, Spring Boot backs off and uses yours. You can also exclude specific auto-configurations if they don't fit your needs.
    - **Example**: It auto-configures:
      \`\`\`text
      - DataSource if spring-boot-starter-data-jpa is present
      - DispatcherServlet if spring-boot-starter-web is present
      - Security filter chain if spring-boot-starter-security is present
      \`\`\`
    - **Note**: You can exclude specific auto-configurations: @EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class})

17. **How do you externalize configuration in Spring Boot?**
    - **Answer**: Externalizing configuration means keeping settings outside your compiled code, so you can change them without rebuilding. Spring Boot supports multiple sources:

   - **Properties/YAML files**: The default application.properties or application.yml
   - **Environment variables**: Perfect for Docker and Kubernetes (e.g., SPRING_DATASOURCE_URL)
   - **Command-line arguments**: Override anything at startup (--server.port=8081)
   - **@PropertySource**: Load custom properties files from the classpath

   Spring Boot has a well-defined priority order: command-line args override environment variables, which override properties files. This lets you set defaults in code and override them in production.
    - **Example**: Order of precedence (highest to lowest):
      \`\`\`text
      1. Command line arguments (--server.port=8081)
      2. OS environment variables (SERVER_PORT=8081)
      3. application-{profile}.properties
      4. application.properties
      5. @PropertySource annotations
      \`\`\`

18. **What is a CommandLineRunner in Spring Boot?**
    - **Answer**: CommandLineRunner is a simple interface that lets you run code right after Spring Boot finishes starting up. Think of it as a "startup hook" — once the application context is loaded and everything is ready, Spring calls your run() method.

   Common use cases: loading initial data into the database, validating configuration, warming up caches, or printing a startup banner. You can have multiple CommandLineRunner beans and control their execution order with @Order.
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
    - **Answer**: Sometimes you need to talk to multiple databases — maybe your app data lives in PostgreSQL but your audit logs go to MongoDB. Spring Boot can handle this, but you need to be explicit about it.

   The approach: define multiple DataSource beans and mark one as @Primary (the default). Each DataSource needs its own EntityManagerFactory and TransactionManager so JPA knows which database to use for which operations.

   The tricky part: Spring Boot's auto-configuration gets confused when it sees multiple DataSources. You typically need to disable the default DataSource auto-configuration and set everything up manually.
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
    - **Answer**: bootstrap.properties is a special configuration file that loads before application.properties. It's used for the bootstrap context — the context that knows how to fetch configuration from external sources like Spring Cloud Config Server.

   Think of it this way: application.properties contains your app's settings, but bootstrap.properties contains the settings needed to fetch those settings (like the Config Server URL and app name). Without bootstrap.properties, your app wouldn't know where to get its configuration from.

   Note: In newer versions of Spring Cloud (2020.0+), bootstrap.properties is deprecated in favor of using spring.config.import with the configserver: prefix.
    - **Example**:
      \`\`\`properties
      spring.cloud.config.uri=http://config-server:8888
      spring.application.name=myapp
      \`\`\`
    - **Note**: application.properties is for application-specific config.

### Dependency Injection and Beans

21. **What is dependency injection in Spring Boot?**
    - **Answer**: Dependency injection is a fancy term for a simple idea: instead of creating your own dependencies (like 'new UserRepository()'), you declare what you need and Spring provides it for you.

   Think of it like a restaurant: instead of you going to the kitchen to cook your own food (creating dependencies), you tell the waiter what you want (declare dependencies), and the kitchen prepares and brings it to you (Spring injects them).

   This makes your code more testable (you can easily swap in mock dependencies) and loosely coupled (your class doesn't need to know how to create its dependencies).
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
    // Note: Spring automatically wires dependencies — no @Autowired needed on constructor.

22. **What are Spring Beans, and how are they managed in Spring Boot?**
// Answer: A Spring Bean is just a regular Java object that Spring creates and manages for you. Instead of you calling \`new MyService()\`, Spring creates the object, wires up its dependencies, and keeps track of it in the "IoC container" (the application context).
    - **Answer**: A Spring Bean is just a regular Java object that Spring creates and manages for you. Instead of you calling \`new MyService()\`, Spring creates the object, wires up its dependencies, and keeps track of it in the "IoC container" (the application context).

   Think of the IoC container as a registry or a pool of objects. When you ask for a UserService, Spring gives you the one it created and configured. You don't need to worry about creating or destroying it — Spring handles the lifecycle.

   Beans have different scopes: singleton (one instance for the whole app — the default), prototype (new instance every time), request (one per HTTP request), and session (one per user session).
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
    // Answer: There are two main ways to create Spring Beans:

   - **Component scanning**: Annotate your class with @Component, @Service, @Repository, or @Controller and Spring automatically detects and registers it during component scan
   - **Factory methods**: Use @Bean on a method inside a @Configuration class when you need to configure the bean yourself (like setting properties on a DataSource or RestTemplate)

   Use @Component for generic services, @Service for business logic, @Repository for database access, and @Controller for web endpoints. The functionality is the same — they're just semantic markers that tell you what the class does.
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
    - **Answer**: @Autowired tells Spring "I need this dependency — please find a matching bean and inject it for me." You can put it on a field (simplest), a constructor (recommended), or a setter method.

   The recommended approach is constructor injection: you declare the dependency as a final field, add it as a constructor parameter, and Spring automatically passes the bean when creating your class. This makes your dependencies explicit, your class immutable, and testing easy (you can pass mock dependencies in your tests).

   Field injection (putting @Autowired directly on a field) is simpler but harder to test and hides dependencies. Most teams prefer constructor injection.
    - **Example**:
      \`\`\`java
      @Autowired
      private UserService userService;
      \`\`\`
    - **Note**: Constructor injection is preferred for immutability and testability.

25. **How do you create a custom Spring Boot starter?**
    - **Answer**: Creating a custom starter is like packaging your own "bundle deal" that others can include in their projects. It's useful when you have a common setup (like a database connection pool + health check + metrics) that multiple teams in your company need.

   The basic structure:
   - Create a library project with your auto-configuration classes
   - Use @ConditionalOnClass and @ConditionalOnMissingBean so your starter only activates when needed
   - Include a spring.factories file that tells Spring Boot where to find your auto-configuration

   When someone adds your starter to their project, Spring Boot automatically configures everything — just like the official starters.
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
    - **Answer**: Think of these as name tags that tell you what a class does. Under the hood, they all do the same thing — they tell Spring "please manage this class as a bean." But they communicate intent:

    - **@Component**: The generic one. Use it when the class doesn't fit into any specific category.
    - **@Service**: For business logic — the "brain" of your application. Like a UserService that handles user registration, login, etc.
    - **@Repository**: For database access — the "hands" that talk to the database. It has a bonus feature: it automatically translates database-specific exceptions (like SQLException) into Spring's unified DataAccessException, so you don't have to worry about which database you're using.
    - **@Controller**: For handling HTTP requests — the "face" of your app that receives requests and sends responses.

    Use the right annotation for the right layer — it makes your code self-documenting.
    - **Example**:
      \`\`\`text
      @Component – generic stereotype (any Spring-managed bean)
      @Service – service layer (business logic)
      @Repository – DAO layer (data access, converts persistence exceptions)
      @Controller – web layer (MVC controller, handles HTTP requests)
      \`\`\`
    - **Note**: @Repository adds translation of persistence exceptions to Spring's DataAccessException hierarchy.

27. **How do you create a custom annotation in Spring Boot?**
    - **Answer**: Sometimes you need your own annotation to add behavior to methods or classes. For example, you might want a @LogExecutionTime annotation that automatically logs how long a method takes to run.

    Creating one is simple: define it with @interface, specify where it can go (@Target) and when it's available (@Retention). Then you write an aspect (using AOP) that intercepts methods with your annotation and adds the behavior.
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
    - **Answer**: @Configuration tells Spring "this class is a source of bean definitions." Instead of writing XML config files (the old way), you write Java methods that create and configure your beans.

    Think of it as a recipe book: each @Bean method is a recipe that tells Spring how to create an object. Spring calls these methods and registers the returned objects as beans in the application context.
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
    - **Answer**: @Bean goes on a method inside a @Configuration class, and it tells Spring "call this method and register the return value as a bean." You use it when you need to configure a bean yourself — like setting up an ObjectMapper with specific settings.

    The bean's name defaults to the method name, but you can customize it with @Bean("customName").
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
    - **Answer**: Both solve the same problem: what happens when there are multiple beans of the same type? For example, two DataSource beans — one for the main database and one for a reporting database.

    - **@Primary**: Sets the default. When Spring needs a DataSource and you haven't specified which one, it picks the @Primary one. Think of it as the "default choice."
    - **@Qualifier**: Picks a specific one. When you know exactly which bean you want, you use @Qualifier with the bean's name to say "this one, not the other one."

    Use @Primary for the main/default bean, and @Qualifier when you need a specific alternative.
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
    - **Answer**: Creating a REST API in Spring Boot is surprisingly simple. You annotate a class with @RestController (which says "this class handles HTTP requests and returns data, not HTML pages") and @RequestMapping (which sets the base URL path). Then each method handles a specific HTTP operation — GET for reading, POST for creating, PUT for updating, DELETE for deleting.

    Spring Boot handles all the heavy lifting: converting your Java objects to JSON, parsing request bodies, mapping URLs to methods, and managing HTTP status codes. You just write the business logic.
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
    - **Answer**: @RestController is a shortcut that combines two annotations: @Controller (which marks the class as a web controller) and @ResponseBody (which says "don't look for an HTML view, just return the data directly"). When you return a Java object from a method, Spring Boot automatically converts it to JSON and sends it in the HTTP response. No extra configuration needed.
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
    - **Answer**: Spring Boot supports all the standard HTTP methods you'd expect in a REST API. Each one has a dedicated annotation that makes your code clean and readable:
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
    - **Answer**: Instead of writing try-catch blocks in every controller method, Spring Boot lets you handle exceptions in one central place using @ControllerAdvice. Think of it as a global safety net — any exception thrown by any controller gets caught here and converted into a proper HTTP response.

    You can handle specific exceptions (like ResourceNotFoundException returns 404) and have a catch-all for unexpected errors (returns 500). This keeps your controllers clean and your API responses consistent.
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
    - **Answer**: These two annotations handle opposite directions of data flow:

    - **@RequestBody**: Takes the JSON/XML from the incoming HTTP request and converts it into a Java object that your method can use. It's like unpacking a box that was sent to you.
    - **@ResponseBody**: Takes the Java object your method returns and converts it into JSON/XML for the HTTP response. It's like packing a box to send back.

    In @RestController, @ResponseBody is implicit — every method automatically serializes its return value. So you mostly use @RequestBody for incoming data.
    - **Example**:
      \`\`\`java
      @PostMapping("/users")
      public ResponseEntity<User> createUser(@RequestBody User user) {
          User saved = userService.save(user);
          return ResponseEntity.ok(saved); // @ResponseBody implicit in @RestController
      }
      \`\`\`

36. **How do you validate a request in Spring Boot?**
    - **Answer**: Spring Boot makes input validation almost effortless. You add validation annotations (like @NotNull, @Size, @Email) directly on your model fields, then put @Valid on the method parameter in your controller. If the incoming data doesn't meet the rules, Spring Boot automatically throws a MethodArgumentNotValidException — which you can handle in your @ControllerAdvice to return a clean error response.

    No manual if-else checks needed. The framework does the validation for you.
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
    - **Answer**: @PathVariable grabs values directly from the URL path. For example, if your URL is \`/users/123/orders/456\`, you can extract \`123\` and \`456\` by putting \`{userId}\` and \`{orderId}\` in your mapping and using @PathVariable on the method parameters. It's like pulling variables out of the URL itself.
    - **Example**:
      \`\`\`java
      @GetMapping("/users/{userId}/orders/{orderId}")
      public Order getOrder(@PathVariable Long userId, @PathVariable Long orderId) {
          return orderService.findByUserAndOrder(userId, orderId);
      }
      \`\`\`
    - **Note**: If parameter name differs, specify: @PathVariable("userId") Long id

38. **What is @RequestParam annotation?**
    - **Answer**: @RequestParam grabs query parameters from the URL — the stuff after the \`?\` in a URL like \`/search?name=john&page=1\`. You can make parameters required or optional (with default values), and Spring Boot automatically converts them to the right type. It's how you handle filters, search terms, pagination — anything that modifies what the endpoint returns.
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
    - **Answer**: Pagination is how you avoid returning 10 million records in one API call. Spring Data makes this stupid easy — you just add a \`Pageable\` parameter to your repository method, and it handles the \`LIMIT\` and \`OFFSET\` (or keyset pagination) for you. The response includes the data plus metadata like total pages, total elements, and whether there's a next page.
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
    - **Answer**: CORS (Cross-Origin Resource Sharing) is a browser security feature that blocks requests from one domain to another unless the server explicitly allows it. If your frontend runs on \`localhost:3000\` and your backend on \`localhost:8080\`, the browser will block API calls unless you configure CORS. Spring Boot lets you do this per-controller with \`@CrossOrigin\` or globally with a \`CorsConfig\` class.
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
    - **Answer**: Spring Data JPA is the layer that sits on top of JPA and makes database work almost boringly easy. Instead of writing the same CRUD code over and over (find by ID, save, delete, find all), you just create an interface that extends \`JpaRepository\` and Spring Boot gives you all of that for free. Even better — you can write query methods just by naming them correctly (\`findByLastName\`, \`findByEmailAndActive\`) and Spring figures out the SQL automatically.
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
    - **Answer**: You tell Spring Boot about your database through \`application.properties\` (or \`application.yml\`): the JDBC URL, username, password, and how you want Hibernate to behave. The \`spring.jpa.hibernate.ddl-auto\` setting is the important one — \`update\` adds new columns without dropping data (good for dev), \`validate\` just checks that your entities match the table structure (good for production), and \`create-drop\` wipes everything on shutdown (good for testing).
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
    - **Answer**: A repository is a database access layer — but instead of writing a class with all the SQL, you just write an interface. You extend \`JpaRepository<Entity, ID>\` and suddenly you have \`save()\`, \`findById()\`, \`findAll()\`, \`deleteById()\`, and a bunch of other methods ready to go. Spring Boot creates the implementation at runtime — you don't write it. For custom queries, you either name your method in a way Spring understands (\`findByLastNameAndActive\`) or write the SQL yourself with \`@Query\`.
    - **Example**:
      \`\`\`java
      @Repository
      public interface ProductRepository extends JpaRepository<Product, Long> {
          List<Product> findByCategory(String category);
          Page<Product> findByPriceBetween(Double min, Double max, Pageable pageable);
      }
      \`\`\`

44. **What is the difference between CrudRepository, JpaRepository, and PagingAndSortingRepository?**
    - **Answer**: These are three levels of repository interfaces, each adding more features. \`CrudRepository\` gives you basic CRUD (save, findById, delete, count). \`PagingAndSortingRepository\` adds pagination and sorting on top of that. \`JpaRepository\` is the full package — it includes everything plus JPA-specific stuff like \`flush()\` (force-write to database), \`saveAndFlush()\`, batch deletes, and \`deleteInBatch()\`. In practice, most people just use \`JpaRepository\` because it has everything you'll ever need.
    - **Example**:
      \`\`\`text
      CrudRepository - basic CRUD (save, findById, delete)
      PagingAndSortingRepository - extends Crud, adds pagination/sorting
      JpaRepository - extends PagingAndSorting, adds JPA-specific methods (flush, saveAndFlush, deleteInBatch)
      \`\`\`

45. **How do you define a custom query in Spring Data JPA?**
    - **Answer**: When the method-naming convention isn't enough (like complex joins, aggregations, or subqueries), you write the query yourself with \`@Query\`. You can use JPQL (which works with entity names and fields, not database tables) or native SQL (which lets you use database-specific features). JPQL is preferred because it's database-agnostic — if you switch from MySQL to PostgreSQL, your queries still work.
    - **Example**:
      \`\`\`java
      @Query("SELECT u FROM User u WHERE u.age >= ?1 AND u.city = ?2")
      List<User> findUsersByAgeAndCity(int age, String city);

      @Query(value = "SELECT * FROM users WHERE status = ?1", nativeQuery = true)
      List<User> findUsersByStatusNative(String status);
      \`\`\`

46. **What is the purpose of the @Query annotation?**
    - **Answer**: \`@Query\` is how you take control of the SQL when Spring Data's automatic method naming isn't enough. You put it on a repository method and write the query in JPQL (entity-based) or native SQL (table-based). It's also useful for performance — you can write a query that fetches only the columns you need instead of loading entire entities.
    - **Example**:
      \`\`\`java
      @Query("SELECT u FROM User u WHERE u.active = true")
      Page<User> findActiveUsers(Pageable pageable);
      \`\`\`

47. **How do you handle transactions in Spring Boot?**
    - **Answer**: A transaction is a way to say "either all of these database operations succeed, or none of them do." You put \`@Transactional\` on a method, and Spring Boot wraps it in a transaction automatically. If the method completes successfully, the changes are committed. If an exception is thrown, everything is rolled back — it's like nothing ever happened. This is critical for operations like transferring money between accounts, where you can't have one side succeed and the other fail.
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
    - **Answer**: \`@Entity\` is how you tell JPA "this Java class represents a database table." Each instance of the class is a row in that table. By default, the table name matches the class name, and the fields match the column names — but you can customize both with \`@Table\` and \`@Column\`. Without this annotation, JPA has no idea your class is something that should be stored in the database.
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
    - **Answer**: \`@Entity\` is mandatory — without it, JPA ignores your class entirely. \`@Table\` is optional and only needed when your table name differs from your class name, or when you need to specify schema, constraints, or indexes. If your class is \`User\` and your table is also \`users\`, you can skip \`@Table\` and let JPA use its default naming strategy.
    - **Example**:
      \`\`\`java
      @Entity  // Required
      @Table(name = "users", schema = "public", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
      public class User { ... }
      \`\`\`

50. **How do you perform CRUD operations in Spring Data JPA?**
    - **Answer**: CRUD stands for Create, Read, Update, Delete — the four basic operations you do on any data. With Spring Data JPA, you don't write any of this code yourself. Your repository interface extends \`JpaRepository\`, and you instantly get \`save()\` (create/update), \`findById()\` (read one), \`findAll()\` (read all), \`deleteById()\` (delete), plus a bunch more. Your service class just autowires the repository and calls these methods.
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
