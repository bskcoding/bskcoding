// AUTO-GENERATED file — company-wise interview data.
// Source: Centrico interview document(s).
// Regenerate with:  node scripts/rebuild-centrico.mjs

export const company = {
  "id": "centrico",
  "name": "Centrico",
  "interviews": [
    {
      "name": "Centrico Interview",
      "questionCount": 30,
      "rounds": [
        {
          "name": "Centrico Interview",
          "questions": [
            {
              "question": "Self Introduction and Project Details",
              "answer": "I have 3+ years of experience as a Java Full Stack Developer. Currently working on a banking application using Java 8 (familiar with Java 17) and React 17 (familiar with React 18). Using functional components with hooks. Backend uses Spring Boot with JPA, testing with JUnit 5 and Mockito. Frontend testing with Jest and React Testing Library.",
              "code": null
            },
            {
              "question": "What are ES6 features in JavaScript?",
              "answer": "ES6 features include: let and const (block-scoped declarations), arrow functions (shorter function syntax), template literals (string interpolation), default parameters, rest and spread operators, destructuring assignment, classes, promises (async operations), modules (import/export), and enhanced object literals.",
              "code": {
                "language": "java",
                "content": "// let & const\nlet x = 10; const y = 20;\n// Arrow function\nconst add = (a, b) => a + b;\n// Template literals\nconst msg = `Hello ${name}`;\n// Destructuring\nconst { name, age } = person;\n// Spread operator\nconst newArr = [...oldArr, 4, 5];\n// Classes\nclass User { constructor(name) { this.name = name; } }"
              }
            },
            {
              "question": "Difference between var and let.",
              "answer": "var is function-scoped and hoisted to the top of its function. let is block-scoped and not hoisted to the top of its block. var can be redeclared, let cannot be redeclared in same scope.",
              "code": {
                "language": "java",
                "content": "// var - function scoped\nfunction test() {\n    var x = 10;\n    if (true) {\n        var x = 20; // Same variable\n    }\n    console.log(x); // 20\n}\n// let - block scoped\nfunction test() {\n    let x = 10;\n    if (true) {\n        let x = 20; // Different variable\n    }\n    console.log(x); // 10\n}"
              }
            },
            {
              "question": "What is object cloning in JavaScript?",
              "answer": "Object cloning is the process of creating a copy of an object with the same properties and values. Used to avoid mutating the original object, ensuring data integrity and avoiding side effects in code.",
              "code": {
                "language": "java",
                "content": "// Shallow clone\nconst clone = { ...original };\nconst clone2 = Object.assign({}, original);\n// Deep clone (for nested objects)\nconst deepClone = JSON.parse(JSON.stringify(original));\n// Deep clone with lodash\nconst deepClone = _.cloneDeep(original);"
              }
            },
            {
              "question": "Write a JavaScript function to count every character in a string.",
              "answer": "Iterate through string characters, store counts in object.",
              "code": {
                "language": "java",
                "content": "function countCharacters(str) {\n    const charCount = {};\n    for (let char of str) {\n        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;\n    }\n    return charCount;\n}\nconsole.log(countCharacters(\"hello\")); // {h:1, e:1, l:2, o:1}"
              }
            },
            {
              "question": "Which version of React are you using?",
              "answer": "I am using React 17 (familiar with React 18).",
              "code": null
            },
            {
              "question": "Are you using functional components or class components?",
              "answer": "I am primarily using functional components with React Hooks for state management and side effects.",
              "code": {
                "language": "java",
                "content": "// Functional component with hooks\nconst MyComponent = () => {\n    const [state, setState] = useState(initialValue);\n    useEffect(() => { /* side effect */ }, []);\n    return <div>{state}</div>;\n};"
              }
            },
            {
              "question": "What is useRef in React? Explain.",
              "answer": "useRef is a React hook that creates a mutable object persisting for component lifetime. Can access DOM elements directly or hold mutable values that don't trigger re-renders when changed.",
              "code": {
                "language": "java",
                "content": "import React, { useRef, useEffect } from 'react';\nconst InputFocus = () => {\n    const inputRef = useRef(null);\n    useEffect(() => {\n        inputRef.current.focus();\n    }, []);\n    return <input ref={inputRef} />;\n};"
              }
            },
            {
              "question": "What is a common component in ReactJS?",
              "answer": "A common component is a reusable piece of UI that can be used across different parts of an application, like buttons, form inputs, modal dialogs, tables, or cards. Promotes consistency and reduces code duplication.",
              "code": {
                "language": "java",
                "content": "// Reusable Button component\nconst Button = ({ onClick, children, variant }) => (\n    <button className={`btn btn-${variant}`} onClick={onClick}>\n        {children}\n    </button>\n);"
              }
            },
            {
              "question": "How do you get data from API and display it in UI in ReactJS?",
              "answer": "Use useState for state management, useEffect for API calls, and axios/fetch for HTTP requests. Handle loading and error states.",
              "code": {
                "language": "java",
                "content": "import React, { useState, useEffect } from 'react';\nimport axios from 'axios';\nconst EmployeeList = () => {\n    const [employees, setEmployees] = useState([]);\n    const [loading, setLoading] = useState(true);\n    const [error, setError] = useState(null);\n    useEffect(() => {\n        axios.get('/api/employees')\n            .then(response => {\n                setEmployees(response.data);\n                setLoading(false);\n            })\n            .catch(error => {\n                setError(error.message);\n                setLoading(false);\n            });\n    }, []);\n    if (loading) return <div>Loading...</div>;\n    if (error) return <div>Error: {error}</div>;\n    return (\n        <ul>\n            {employees.map(emp => (\n                <li key={emp.id}>{emp.name} - ${emp.salary}</li>\n            ))}\n        </ul>\n    );\n};"
              }
            },
            {
              "question": "Write code to change color of text when data is posted.",
              "answer": "Use useState to manage color state, change on form submission.",
              "code": {
                "language": "java",
                "content": "import React, { useState } from 'react';\nconst ChangeTextColor = () => {\n    const [color, setColor] = useState('black');\n    const handleSubmit = (e) => {\n        e.preventDefault();\n        setColor('blue');\n    };\n    return (\n        <div>\n            <form onSubmit={handleSubmit}>\n                <button type=\"submit\">Post Data</button>\n            </form>\n            <div style={{ color: color }}>Text changes color when posted</div>\n        </div>\n    );\n};"
              }
            },
            {
              "question": "Which version of Java are you using?",
              "answer": "I am using Java 8 and familiar with Java 17 features including Records, Sealed Classes, Pattern Matching, and Text Blocks.",
              "code": null
            },
            {
              "question": "Write a custom exception in Java and use it.",
              "answer": "Create custom exception by extending Exception or RuntimeException. Use throw to raise it.",
              "code": {
                "language": "java",
                "content": "public class CustomException extends Exception {\n    public CustomException(String message) {\n        super(message);\n    }\n}\npublic class TestCustomException {\n    public static void main(String[] args) {\n        try {\n            validateAge(15);\n        } catch (CustomException e) {\n            e.printStackTrace();\n        }\n    }\n    static void validateAge(int age) throws CustomException {\n        if (age < 18) {\n            throw new CustomException(\"Age is not valid\");\n        }\n    }\n}"
              }
            },
            {
              "question": "Implement a method to check if a string is present in a list.",
              "answer": "Use List.contains() method to check presence.",
              "code": {
                "language": "java",
                "content": "import java.util.List;\npublic class StringChecker {\n    public static boolean isStringPresent(List<String> list, String str) {\n        return list.contains(str);\n    }\n}"
              }
            },
            {
              "question": "Write Java code to remove repeated strings from a list.",
              "answer": "Use HashSet to remove duplicates, convert back to list.",
              "code": {
                "language": "java",
                "content": "import java.util.ArrayList;\nimport java.util.HashSet;\nimport java.util.List;\nimport java.util.Set;\n\npublic class RemoveDuplicates {\n    public static List<String> removeDuplicates(List<String> list) {\n        Set<String> set = new HashSet<>(list);\n        return new ArrayList<>(set);\n    }\n    // Using streams\n    public static List<String> removeDuplicatesStream(List<String> list) {\n        return list.stream().distinct().collect(Collectors.toList());\n    }\n}"
              }
            },
            {
              "question": "Have you used threads in your project?",
              "answer": "Yes, used threads for concurrent processing like batch operations, async tasks, and parallel data processing. Used ExecutorService for thread pool management.",
              "code": {
                "language": "java",
                "content": "ExecutorService executor = Executors.newFixedThreadPool(10);\nexecutor.submit(() -> {\n    // Task to execute\n});\nexecutor.shutdown();"
              }
            },
            {
              "question": "What is the use of @Transactional annotation in Spring Data?",
              "answer": "@Transactional manages transactions declaratively. Ensures method runs within a transaction, handles commit/rollback based on execution. Supports propagation, isolation, timeout, and rollback rules.",
              "code": {
                "language": "java",
                "content": "@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.READ_COMMITTED)\npublic void transferMoney(Account from, Account to, double amount) {\n    from.setBalance(from.getBalance() - amount);\n    to.setBalance(to.getBalance() + amount);\n}"
              }
            },
            {
              "question": "How do you provide security in Spring Boot?",
              "answer": "Security is provided through Spring Security with authentication, authorization, CSRF protection, and session management. Configured using Java configuration with @EnableWebSecurity and SecurityConfig extending WebSecurityConfigurerAdapter. Implements JWT for stateless authentication.",
              "code": {
                "language": "java",
                "content": "@Configuration\n@EnableWebSecurity\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.csrf().disable()\n            .authorizeRequests()\n            .antMatchers(\"/public/**\").permitAll()\n            .anyRequest().authenticated()\n            .and()\n            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);\n    }\n}"
              }
            },
            {
              "question": "Explain how JWT token-based authentication works briefly.",
              "answer": "User logs in with credentials, server validates and generates JWT token (signed with secret). Token sent to client. Client includes token in Authorization header for subsequent requests. Server validates token signature and extracts user info for authentication.",
              "code": {
                "language": "java",
                "content": "// Token generation\nString token = Jwts.builder()\n    .setSubject(username)\n    .setIssuedAt(new Date())\n    .setExpiration(new Date(System.currentTimeMillis() + 3600000))\n    .signWith(SignatureAlgorithm.HS256, SECRET)\n    .compact();\n// Token validation\nClaims claims = Jwts.parser()\n    .setSigningKey(SECRET)\n    .parseClaimsJws(token)\n    .getBody();"
              }
            },
            {
              "question": "How do you limit API calls in Spring Boot?",
              "answer": "Use rate-limiting libraries like Bucket4j, Resilience4j, or implement custom logic using interceptors or filters. Can also use Spring Cloud Gateway for rate limiting at API gateway level.",
              "code": {
                "language": "java",
                "content": "@Component\npublic class RateLimitInterceptor implements HandlerInterceptor {\n    private final Map<String, Integer> requestCounts = new ConcurrentHashMap<>();\n    @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response) {\n        String clientIp = request.getRemoteAddr();\n        int count = requestCounts.getOrDefault(clientIp, 0);\n        if (count >= 100) {\n            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());\n            return false;\n        }\n        requestCounts.put(clientIp, count + 1);\n        return true;\n    }\n}"
              }
            },
            {
              "question": "Have you created any custom annotations in Spring Boot?",
              "answer": "Yes, created custom annotations to encapsulate repetitive logic and apply cross-cutting concerns. Used with Spring AOP for logging, validation, and security checks.",
              "code": {
                "language": "java",
                "content": "@Target(ElementType.METHOD)\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface LogExecutionTime { }\n\n@Aspect\n@Component\npublic class LoggingAspect {\n    @Around(\"@annotation(LogExecutionTime)\")\n    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {\n        long start = System.currentTimeMillis();\n        Object result = joinPoint.proceed();\n        long time = System.currentTimeMillis() - start;\n        System.out.println(\"Method executed in \" + time + \"ms\");\n        return result;\n    }\n}"
              }
            },
            {
              "question": "Create a Age validation custom annotation.",
              "answer": "Create annotation interface with @Constraint, validator class implementing ConstraintValidator, apply annotation to fields.",
              "code": {
                "language": "java",
                "content": "@Documented\n@Constraint(validatedBy = DOBValidator.class)\n@Target({ ElementType.METHOD, ElementType.FIELD })\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface ValidDOB {\n    String message() default \"Invalid Date of Birth\";\n    Class<?>[] groups() default {};\n    Class<? extends Payload>[] payload() default {};\n}\n\npublic class DOBValidator implements ConstraintValidator<ValidDOB, LocalDate> {\n    @Override\n    public boolean isValid(LocalDate dob, ConstraintValidatorContext context) {\n        if (dob == null) return false;\n        return dob.isBefore(LocalDate.now());\n    }\n}\n\n// Usage\npublic class User {\n    @ValidDOB\n    private LocalDate dateOfBirth;\n}"
              }
            },
            {
              "question": "Have you used a logger in your Spring Boot project?",
              "answer": "Yes, used SLF4J with Logback for logging. Implemented logging at different levels (info, debug, warn, error). Logged request/response, exceptions, and business events.",
              "code": {
                "language": "java",
                "content": "@Slf4j\n@Service\npublic class UserService {\n    public void createUser(User user) {\n        log.info(\"Creating user: {}\", user.getUsername());\n        try {\n            // Business logic\n        } catch (Exception e) {\n            log.error(\"Failed to create user\", e);\n        }\n    }\n}"
              }
            },
            {
              "question": "How can you see which controller API methods are running?",
              "answer": "Enable HTTP request logging in Spring Boot using logging.level.web=DEBUG. Use Spring Boot Actuator to see endpoint mappings. Use logging filters to log request/response.",
              "code": {
                "language": "java",
                "content": "# application.properties\nlogging.level.org.springframework.web=DEBUG\nlogging.level.org.springframework.web.servlet.mvc.method.annotation=DEBUG\n\n# Actuator endpoints\nmanagement.endpoints.web.exposure.include=health,info,mappings"
              }
            },
            {
              "question": "How do you create a Spring Boot project?",
              "answer": "Use Spring Initializr (start.spring.io) to generate project with dependencies. Import into IDE. Add @SpringBootApplication and main method. Run as Spring Boot application.",
              "code": {
                "language": "java",
                "content": "@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}"
              }
            },
            {
              "question": "What does Spring Starter provide?",
              "answer": "Spring Starter provides pre-configured templates for specific functionalities like web, security, JPA, etc. Includes dependencies, auto-configuration, and default settings.",
              "code": {
                "language": "java",
                "content": "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-jpa</artifactId>\n</dependency>"
              }
            },
            {
              "question": "Which dependencies do you commonly use in Spring Boot?",
              "answer": "Common dependencies: spring-boot-starter-web, spring-boot-starter-data-jpa, spring-boot-starter-security, spring-boot-starter-test, spring-boot-starter-validation, spring-boot-devtools, spring-boot-starter-actuator, mysql-connector-java.",
              "code": {
                "language": "java",
                "content": "<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-data-jpa</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-security</artifactId>\n    </dependency>\n</dependencies>"
              }
            },
            {
              "question": "Which annotations do you use in Spring Boot?",
              "answer": "@SpringBootApplication, @RestController, @RequestMapping, @Autowired, @Service, @Repository, @Entity, @Transactional, @Configuration, @Component, @Value, @Qualifier.",
              "code": {
                "language": "java",
                "content": "@SpringBootApplication\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @Autowired\n    private UserService userService;\n    @GetMapping(\"/{id}\")\n    public User getUser(@PathVariable Long id) {\n        return userService.findById(id);\n    }\n}"
              }
            },
            {
              "question": "Which annotations do you use in JUnit tests?",
              "answer": "@Test, @BeforeEach, @AfterEach, @Mock, @InjectMocks, @RunWith, @SpringBootTest, @ExtendWith, @DisplayName, @Disabled.",
              "code": {
                "language": "java",
                "content": "@ExtendWith(MockitoExtension.class)\nclass UserServiceTest {\n    @Mock\n    private UserRepository repository;\n    @InjectMocks\n    private UserService service;\n    @Test\n    void testGetUser() {\n        when(repository.findById(1L)).thenReturn(Optional.of(new User()));\n        User user = service.getUser(1L);\n        assertNotNull(user);\n    }\n}"
              }
            },
            {
              "question": "Which libraries do you use for JUnit tests?",
              "answer": "JUnit 5, Mockito, Spring Boot Test, AssertJ, Hamcrest, Testcontainers for integration testing.",
              "code": {
                "language": "java",
                "content": "<dependency>\n    <groupId>org.junit.jupiter</groupId>\n    <artifactId>junit-jupiter</artifactId>\n    <scope>test</scope>\n</dependency>\n<dependency>\n    <groupId>org.mockito</groupId>\n    <artifactId>mockito-core</artifactId>\n    <scope>test</scope>\n</dependency>"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 30
};
