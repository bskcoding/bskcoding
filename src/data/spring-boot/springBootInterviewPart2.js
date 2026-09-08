// Spring Boot Interview Questions - Part 2 (Questions 51-100)
// Auto-generated from src/pages/SpringBootInterview.jsx. Content is identical.
export const springBootInterviewPart2 = `### Security

51. **What is Spring Security, and how does it integrate with Spring Boot?**

    - **Answer**: Spring Security is like a bouncer for your application — it decides who gets in (authentication) and what they're allowed to do once inside (authorization). It protects your app from common attacks like session fixation, clickjacking, and cross-site request forgery.

    The beauty of Spring Boot integration? You just add one dependency, and Spring Boot auto-configures security for you out of the box. Suddenly, every endpoint is protected with HTTP Basic auth, and you get a default user with a random password printed in the console.

    \`\`\`xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    \`\`\`

    That's it. One line in your pom.xml, and your entire app is now secured. Of course, you'll want to customize it (the default is just a starting point), but the integration is seamless.

52. **How do you secure a Spring Boot application?**

    - **Answer**: You create a security configuration class that tells Spring Security which endpoints are public, which require login, and which require specific roles. Think of it as writing the rules for your bouncer: "Anyone can see the homepage, only logged-in users can see their profile, and only admins can access the dashboard."

    \`\`\`java
    @Configuration
    @EnableWebSecurity
    public class SecurityConfig extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                .authorizeRequests()
                    .antMatchers("/public/**").permitAll()   // anyone can access
                    .antMatchers("/admin/**").hasRole("ADMIN") // only admins
                    .anyRequest().authenticated()             // everything else needs login
                .and()
                .formLogin()
                    .loginPage("/login").permitAll()          // custom login page
                .and()
                .logout().permitAll();                        // allow logout
        }
    }
    \`\`\`

53. **What is @EnableWebSecurity annotation?**

    - **Answer**: This annotation is like flipping the switch to turn on Spring Security's web security features. Without it, your security config class is just a regular class that Spring ignores. With it, Spring knows "this is where the security rules live" and starts applying them to incoming requests.

    \`\`\`java
    @Configuration
    @EnableWebSecurity
    public class SecurityConfig { ... }
    \`\`\`

    You need this annotation on your security configuration class — it's what makes the whole thing work.

54. **How do you implement OAuth2 in Spring Boot?**

    - **Answer**: OAuth2 lets users log in using their existing accounts from Google, GitHub, Facebook, etc. Instead of creating yet another username and password, they click "Sign in with Google" and you trust Google to verify their identity.

    Spring Boot makes this ridiculously easy. You just add the OAuth2 client starter and put your client credentials in the properties file:

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

    Spring Boot handles the entire OAuth2 flow behind the scenes — redirecting to Google, receiving the callback, exchanging the code for a token, and fetching the user's profile. You just configure it and it works.

55. **How do you handle authentication and authorization in Spring Boot?**

    - **Answer**: Authentication is "who are you?" and authorization is "what are you allowed to do?" In Spring Boot, you handle authentication by implementing \`UserDetailsService\` — a simple interface that says "given a username, load the user from your database." You handle authorization by configuring which roles can access which endpoints.

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

    This is the bridge between your user database and Spring Security. When someone tries to log in, Spring Security calls this service to load the user and check their password.

56. **What is the role of the SecurityConfigurerAdapter class?**
    - **Answer**: SecurityConfigurerAdapter used to be the starting point for Spring Security configuration in Spring Boot 2.x and earlier. Think of it as a template class where you would override methods to define which URLs need authentication and which are public.

But in Spring Boot 3+, it is deprecated. The new approach is SecurityFilterChain. Instead of extending a class, you create a bean method that returns a SecurityFilterChain. It is the same power, just a cleaner, more functional style.
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
    - **Answer**: JWT authentication in Spring Boot means you intercept incoming requests, pull out the JWT token from the Authorization header, validate it, and if its good, tell Spring Security this person is authenticated. The magic happens in a custom filter.
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
    - **Answer**: CORS (Cross-Origin Resource Sharing) in Spring Security is about telling the browser its OK to let your frontend (say, localhost:3000) talk to your backend (localhost:8080). Without this, the browser blocks cross-origin requests as a security measure. In Spring Security, you enable and configure CORS right inside your SecurityFilterChain via HttpSecurity.cors(), then provide a CorsConfigurationSource bean that says which origins, methods, and headers are allowed.
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
    - **Answer**: Security filters are like guards at checkpoints in a tunnel. Every request must pass through them in order. Spring Security has a built-in filter chain — each filter handles one job like authentication or authorization. Here are the common ones you should know:
    - **Example**:
      \`\`\`text
      - UsernamePasswordAuthenticationFilter - processes form login
      - BasicAuthenticationFilter - processes HTTP Basic auth
      - JwtAuthenticationFilter - custom JWT validation
      - CorsFilter - handles CORS
      \`\`\`
    - **Note**: Filters are ordered: first authentication, then authorization.

60. **How do you encrypt passwords in Spring Boot?**
    - **Answer**: Passwords should never be stored in plain text. PasswordEncoder is Spring Security's tool for hashing passwords safely. BCrypt is the recommended choice because it automatically adds a random salt to each password and uses a work factor (how hard it is to crack), so even if two users have the same password, they get different hashes. This makes it much harder for attackers to crack stolen password databases using rainbow tables or brute force.
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
    - **Answer**: If Spring Boot is a car, Spring Cloud is the GPS, the traffic monitoring, and the roadside assistance all rolled into one. Spring Boot gets a single service up and running quickly. Spring Cloud helps dozens of those services work together in the real world — finding each other on the network, sharing configuration, handling failures gracefully, and routing requests intelligently.

    It builds on top of Spring Boot, so you get the same ease of use but for distributed systems concerns. You add a starter dependency, and suddenly your service can register itself with a service discovery server, fetch its config from a central repository, or circuit-break calls to a failing downstream service.
    - **Example**: Common Spring Cloud starters:
      \`\`\`text
      - spring-cloud-starter-netflix-eureka-client - service discovery
      - spring-cloud-starter-config - external configuration
      - spring-cloud-starter-gateway - API gateway
      - spring-cloud-starter-circuitbreaker-resilience4j - fault tolerance
      \`\`\`

72. **How do you create a microservice using Spring Boot?**
    - **Answer**: Creating a microservice in Spring Boot is surprisingly simple. You start with a Spring Boot project, add the web starter (which gives you an embedded Tomcat server and Spring MVC), define your REST endpoints with annotations, and you're done. Each microservice is a standalone JAR that runs on its own, communicates over HTTP, and owns its own data.
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
    - **Answer**: In a microservices world, services are constantly being created, destroyed, and moved around. Service discovery is like a phone book for your services — instead of hardcoding URLs (which break the moment a service moves), services look up "hey, where's the product service right now?" and get back its current address.

    The most common way to do this in Spring Boot is with Netflix Eureka. You run a Eureka server (the phone book), and each microservice registers itself with Eureka on startup. When one service wants to call another, it asks Eureka for the address.
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
    - **Answer**: Eureka is the service registry — the central phone book that all your microservices talk to. When a service starts up, it tells Eureka "I'm here, here's my address." Every few seconds, it sends a heartbeat to say "I'm still alive." If Eureka stops hearing from a service, it removes it from the registry so other services stop trying to call a dead instance.

    The magic is client-side load balancing: when your service asks Eureka for the product service, Eureka gives back a list of all healthy instances, and your client picks one (round-robin). No single point of failure, no external load balancer needed.
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
    - **Answer**: When you have multiple instances of a service running (for scalability), you need a way to spread requests across them. Spring Cloud LoadBalancer is the modern way to do this — it replaced the older Netflix Ribbon. You just annotate your RestTemplate bean with \`@LoadBalanced\`, and from then on, when you call \`http://product-service/products/1\`, Spring automatically resolves "product-service" to an actual instance (using service discovery) and distributes calls across them.
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
    - **Answer**: Imagine you have 20 microservices and you need to change a database URL. Without a config server, you'd have to update 20 property files, rebuild 20 services, and redeploy them all. Spring Cloud Config solves this by having one central config server that serves configuration to all your services.

    You store your properties in a Git repository (so you get version control for free), and each service fetches its config from the server on startup. Need to change something? Update Git, and services can refresh without restarting. It's like having a single control panel for your entire microservices architecture.
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
    - **Answer**: In a microservices world, a single user request might bounce through 5 different services. When something goes slow or breaks, how you figure out which service caused the problem? That's where distributed tracing comes in.

    Spring Cloud Sleuth automatically adds a unique "trace ID" to every request as it flows through your services — like a tracking number for your package. Zipkin then collects all those traces and shows you a timeline: "the request spent 5ms in the gateway, 200ms in the order service, and 2 seconds in the database call." Now you know exactly where to look.
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
    - **Answer**: Think of Spring Cloud Gateway as the front door to your microservices architecture. Instead of clients calling services directly (which would mean exposing every service to the internet), they all call the gateway. The gateway then routes each request to the right service, like a receptionist directing visitors to the right department.

    But it does more than just route. It can add security headers, limit how many requests a user can make (rate limiting), log everything for monitoring, and even break the circuit if a downstream service is struggling. All in one place, without cluttering your individual services.
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
    - **Answer**: You set up Spring Cloud Gateway as a separate Spring Boot application that acts as the single entry point for all your clients. You define routing rules that say "any request starting with /api/products/** goes to the product service" and "any request starting with /api/users/** goes to the user service."

    The gateway uses service discovery (like Eureka) to find the actual instances, so you don't hardcode URLs. You can also add filters — like adding an authentication header, logging the request, or applying rate limiting — without touching the actual services.
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
    - **Answer**: Imagine you're calling the product service, and it's down. Without a circuit breaker, your order service keeps waiting and timing out — wasting threads and slowing everything down. With a circuit breaker (Hystrix was the original, now Resilience4j is the modern choice), after a few failures, the circuit "opens" and your fallback runs immediately instead of waiting.

    It's like a fuse in your house — when there's a surge, the fuse blows to protect the rest of the circuit. The circuit breaker watches for failures, opens the circuit when things go bad, periodically tests if the service is back, and closes the circuit when it's healthy again. Your users get a graceful fallback instead of a timeout error.
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
    - **Answer**: A Spring Boot app is made up of a few key pieces that work together: the main class with \`@SpringBootApplication\` (the entry point), the configuration files (\`application.properties\` or \`application.yml\`), the embedded server (Tomcat by default — no need to deploy to an external server), auto-configuration (Spring Boot guessing what you need based on your dependencies), and starter dependencies (curated bundles that pull in everything you need for a specific task).
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
    - **Answer**: Spring Boot uses \`application.properties\` or \`application.yml\` as its configuration file — one place to set your database URL, server port, logging levels, and any custom settings. You can inject values directly with \`@Value("\${app.name}")\` for quick access, or use \`@ConfigurationProperties\` to bind a whole group of related properties to a Java object (like having a \`DatabaseConfig\` class that automatically gets \`spring.datasource.url\`, \`spring.datasource.username\`, etc. populated).
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
    - **Answer**: Actuators are like the dashboard of a car — they tell you what's happening under the hood without opening the engine. Spring Boot Actuator adds a set of built-in HTTP endpoints that expose health info, metrics, environment properties, logging configuration, and more. Instead of guessing why your app is slow, you can hit \`/actuator/health\` to see if it's up, \`/actuator/metrics\` to see memory usage and request counts, and \`/actuator/loggers\` to change logging levels on the fly without restarting.
    - **Example**: Key endpoints:
      \`\`\`text
      /actuator/health - application health
      /actuator/info - application info
      /actuator/metrics - application metrics
      /actuator/loggers - logging configuration
      /actuator/env - environment properties
      \`\`\`

84. **How do you monitor a Spring Boot application?**
    - **Answer**: Monitoring a Spring Boot app is a three-layer approach. First, Actuator gives you the raw endpoints — health, metrics, environment info. Second, Micrometer acts as a metrics facade that exports those metrics in a standard format. Third, you plug in a monitoring system like Prometheus (which scrapes and stores the metrics) and Grafana (which turns them into beautiful dashboards). The result: you can see request rates, error counts, JVM memory, and database connection pools all in one place, with alerts when something goes wrong.
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
    - **Answer**: Spring Boot Admin is a community project that gives you a visual dashboard for all your Spring Boot services. Instead of hitting actuator endpoints with curl, you get a nice web UI where you can see all your applications at a glance — which ones are up, which are down, their health status, memory usage, logging levels, and more. It's like mission control for your microservices: one screen showing the status of everything.
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
    - **Answer**: \`@SpringBootApplication\` is actually three annotations in one, and that's why it's so powerful. It combines \`@Configuration\` (marks this class as a source of bean definitions), \`@EnableAutoConfiguration\` (tells Spring Boot to start guessing what you need based on your dependencies — "oh, you added JPA? I'll set up a DataSource and EntityManager"), and \`@ComponentScan\` (tells Spring to look in this package and subpackages for other components, services, and controllers to register). One annotation replaces what used to be a whole configuration class.
    - **Example**:
      \`\`\`java
      @Configuration
      @EnableAutoConfiguration
      @ComponentScan(basePackages = "com.myapp")
      public class MyApp { ... }
      \`\`\`

87. **How do you deploy a Spring Boot application?**
    - **Answer**: The simplest way is as a standalone JAR — Spring Boot packages everything (including the embedded Tomcat server) into one executable file. You just run \`java -jar myapp.jar\` and your app is up. No need to install a separate web server or configure a servlet container. You can also deploy to cloud platforms like AWS, Azure, or Google Cloud, or containerize it with Docker for Kubernetes deployments.
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
    - **Answer**: Spring Boot supports two main packaging formats. The default is a JAR (Java Archive) — a standalone executable that includes the embedded server. You just run \`java -jar app.jar\` and it works. This is the most common approach for microservices. The second option is a WAR (Web Archive) — this is for when you need to deploy to an external servlet container like Tomcat, Jetty, or a traditional application server. WAR packaging is more common in enterprise environments that already have a standardized deployment infrastructure.
    - **Example**:
      \`\`\`text
      JAR - standalone executable with embedded server (default)
      WAR - deployable to external servlet containers (Tomcat, Jetty)
      \`\`\`

89. **What is the role of SpringApplication class?**
    - **Answer**: \`SpringApplication\` is the engine that starts your Spring Boot app. When you call \`SpringApplication.run(MyApp.class, args)\`, it does a lot behind the scenes: it creates the Spring application context (the container that manages all your beans), sets up the embedded server (Tomcat by default), triggers auto-configuration, and starts listening for requests. You can also customize it before running — like turning off the banner, setting active profiles, or adding custom listeners for startup events.
    - **Example**:
      \`\`\`java
      SpringApplication app = new SpringApplication(MyApp.class);
      app.setBannerMode(Banner.Mode.OFF);
      app.setAdditionalProfiles("dev");
      app.run(args);
      \`\`\`

90. **How do you handle application migrations in Spring Boot?**
    - **Answer**: Database migrations are how you version-control your database schema — instead of manually running SQL scripts, you let a tool like Flyway or Liquibase manage it. You put SQL files in a special folder (\`src/main/resources/db/migration/\` for Flyway), and on startup, the tool checks which migrations have already run and applies the new ones. It's like Git for your database: every change is tracked, reversible, and applied consistently across all environments.
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
    - **Answer**: DevTools is a developer productivity tool that makes the "change code → restart → check result" cycle much faster. When you change a file in your project, DevTools automatically restarts your application (much faster than a cold start because it uses a clever classloader trick). It also supports live reload — refreshing your browser automatically when static files change. And it disables certain production features (like template caching) that slow down development. Just add the dependency and it works — no configuration needed.
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
    - **Answer**: When your API is used by multiple clients and you need to make breaking changes, versioning keeps everyone happy. You can version via the URI (\`/api/v1/users\` → \`/api/v2/users\`), query parameters (\`/api/users?version=1\`), custom headers (\`X-API-Version=1\`), or content negotiation (\`Accept: application/vnd.myapp.v1+json\`). URI versioning is the most common and easiest to understand — anyone can see which version they're using just by looking at the URL.
    - **Example**:
      \`\`\`text
      URI versioning: /api/v1/users, /api/v2/users
      Parameter versioning: /api/users?version=1
      Header versioning: X-API-Version=1
      Content negotiation: Accept: application/vnd.myapp.v1+json
      \`\`\`

93. **What are the common pitfalls in Spring Boot development?**
    - **Answer**: Spring Boot makes things so easy that it's easy to get tripped up. Common mistakes include: relying on auto-configuration without understanding what it's doing (so when something breaks, you have no idea why), ignoring security (leaving default passwords or forgetting CSRF protection), not handling exceptions globally (so users see ugly stack traces), bloating your JAR with unused dependencies, and not using profiles (so your dev config accidentally goes to production). The fix for most of these is simple: understand what Boot is doing for you, and don't skip the basics.
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
    - **Answer**: Performance optimization in Spring Boot is about smart defaults and targeted tuning. Make sure you're using connection pooling (HikariCP is the default — it's fast). Enable caching for frequently accessed data with \`@Cacheable\`. Optimize your database queries — add indexes, use fetch joins to avoid N+1 queries. Use \`@Async\` for non-blocking operations. Enable HTTP compression to reduce payload sizes. Tune your JVM heap and garbage collection for your workload. And always paginate large responses — returning 100,000 records at once is never a good idea.
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
    - **Answer**: The key best practices boil down to: use constructor injection (it makes your dependencies explicit and your code testable), follow a clear package structure (controllers handle HTTP, services contain business logic, repositories talk to the database), externalize your configuration (no hardcoded URLs or passwords), write real tests (unit tests for logic, integration tests for endpoints), use profiles to separate dev/test/prod settings, enable structured logging, monitor with Actuator and Micrometer, use DTOs for API responses (don't expose your database entities directly), and always implement global exception handling so clients get meaningful errors.
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
