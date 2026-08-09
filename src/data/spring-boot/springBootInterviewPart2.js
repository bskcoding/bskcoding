// Spring Boot Interview Questions - Part 2 (Questions 51-100)
// Auto-generated from src/pages/SpringBootInterview.jsx. Content is identical.
export const springBootInterviewPart2 = `### Security

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
    - **Note**: Check the Spring Boot release notes for details.`;
