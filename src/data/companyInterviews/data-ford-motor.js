// AUTO-GENERATED file — company-wise interview data.
// Source: Ford Motor interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "ford-motor",
  "name": "Ford Motor",
  "interviews": [
    {
      "name": "Foad Interview",
      "questionCount": 67,
      "rounds": [
        {
          "name": "First Round Interview",
          "questions": [
            {
              "question": "Self-introduction",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: *****",
              "answer": "",
              "code": null
            },
            {
              "question": "Which version of Java are you using?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: I am using Java **.",
              "answer": "",
              "code": null
            },
            {
              "question": "Java 8 features",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer",
              "answer": "",
              "code": null
            },
            {
              "question": "Lambda Expressions",
              "answer": ": Allows for more concise and readable code by enabling you to pass behavior as parameters. For example:",
              "code": {
                "language": "java",
                "content": "(a, b) -> a + b"
              }
            },
            {
              "question": "Streams API",
              "answer": ": Provides a powerful way to process sequences of elements (like collections) in a functional style, supporting operations like filtering, mapping, and reducing. For example:",
              "code": {
                "language": "java",
                "content": "List<String> list = Arrays.asList(\"a1\", \"a2\", \"b1\", \"c2\");\nlist.stream()\n    .filter(s -> s.startsWith(\"a\"))\n    .map(String::toUpperCase)\n    .sorted()\n    .forEach(System.out::println);"
              }
            },
            {
              "question": "New Date and Time API",
              "answer": ": Introduces a new set of classes to handle date and time with better precision and immutability compared to the old Date and Calendar classes. For example:",
              "code": {
                "language": "java",
                "content": "LocalDate today = LocalDate.now();\nLocalDate tomorrow = today.plusDays(1);"
              }
            },
            {
              "question": "Default Methods in Interfaces",
              "answer": ": Allows interfaces to have method implementations, which helps in extending interfaces without breaking existing implementations. For example:",
              "code": {
                "language": "java",
                "content": "interface MyInterface {\n    default void defaultMethod() {\n        System.out.println(\"Default implementation\");\n    }\n    void abstractMethod();\n}"
              }
            },
            {
              "question": "Optional Class",
              "answer": ": Provides a container object which may or may not contain a value, helping to avoid null checks and NullPointerExceptions. For example:",
              "code": {
                "language": "java",
                "content": "Optional<String> opt = Optional.of(\"Hello\");\nopt.ifPresent(System.out::println);  // Prints \"Hello\""
              }
            },
            {
              "question": "Java 9 static method",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: Java 9 introduced private methods in interfaces that can be static or non-static to share code between methods.",
              "answer": "",
              "code": null
            },
            {
              "question": "List.of method",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: List.of() creates an immutable list with the provided elements. For example,",
              "answer": "List<String> list = List.of(\"A\", \"B\", \"C\");.",
              "code": null
            },
            {
              "question": "Functional interface and example",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: A functional interface has exactly one abstract method.",
              "answer": "- Example: @FunctionalInterface public interface Calculator { int add(int a, int b); }.",
              "code": null
            },
            {
              "question": "What is Supplier in functional programming",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: Supplier is a functional interface that provides a result of type T without taking any input.",
              "answer": "",
              "code": null
            },
            {
              "question": "Create one functional interface containing add method, static sum method, default multiple method, and use in main class",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer",
              "answer": "",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\npublic interface Calculator {\n    int add(int a, int b);\n    \n    static int sum(int a, int b) {\n        return a + b;\n    }\n    \n    default int multiply(int a, int b) {\n        return a * b;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Calculator calc = (a, b) -> a + b;\n        System.out.println(\"Add: \" + calc.add(5, 3));\n        System.out.println(\"Sum: \" + Calculator.sum(5, 3));\n        System.out.println(\"Multiply: \" + calc.multiply(5, 3));\n    }\n}"
              }
            },
            {
              "question": "Using streams, list of employees and count number of male and female employees",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public Map<String, Long> countEmployeesByGender(List<Employee> employees) {\n    return employees.stream()\n            .collect(Collectors.groupingBy(Employee::getGender, Collectors.counting()));\n}"
              }
            },
            {
              "question": "employees.stream().filter(e -> e.getAge() > 18).map(e -> e.remove()).count() what will be the output",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: The output depends on whether remove() modifies the original list or not. If it does, it will be the count of items that are removed. If not, it will be 0.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is terminal operations",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: Terminal operations produce a result or a side-effect, and they mark the end of the stream pipeline. Examples include collect(), count(), and forEach().",
              "answer": "",
              "code": null
            },
            {
              "question": "Spring Boot controller using all annotations POST & GET vehicle details",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer",
              "answer": "",
              "code": {
                "language": "java",
                "content": "@RestController\n@RequestMapping(\"/vehicles\")\npublic class VehicleController {\n\n    @PostMapping\n    public ResponseEntity<Vehicle> addVehicle(@RequestBody Vehicle vehicle) {\n        // Save vehicle to database\n        return ResponseEntity.status(HttpStatus.CREATED).body(vehicle);\n    }\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<Vehicle> getVehicle(@PathVariable Long id) {\n        // Fetch vehicle from database\n        Vehicle vehicle = findVehicleById(id);\n        return ResponseEntity.ok(vehicle);\n    }\n}"
              }
            },
            {
              "question": "What are the issues you faced in Spring Boot development?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: Common issues include configuration errors, dependency conflicts, and difficulty in debugging complex applications.",
              "answer": "",
              "code": null
            },
            {
              "question": "Which version of Spring Boot are you using?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: I am using Spring Boot **.",
              "answer": "",
              "code": null
            },
            {
              "question": "Primary & Qualifier annotation in Spring Boot",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: @Primary specifies the default bean when multiple beans of the same type exist.",
              "answer": "-  @Qualifier is used to specify which bean to inject when multiple candidates are available.",
              "code": null
            },
            {
              "question": "How to use two different databases in a single Spring Boot application",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: Configure multiple DataSource beans and use @Primary to indicate the default DataSource. Use @Qualifier to inject the appropriate DataSource where needed.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "@Configuration\npublic class DataSourceConfig {\n\n    @Bean\n    @Primary\n    @ConfigurationProperties(\"spring.datasource1\")\n    public DataSource dataSource1() {\n        return DataSourceBuilder.create().build();\n    }\n\n    @Bean\n    @ConfigurationProperties(\"spring.datasource2\")\n    public DataSource dataSource2() {\n        return DataSourceBuilder.create().build();\n    }\n}"
              }
            },
            {
              "question": "JPA methods and @Query",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: JPA methods include findAll(), findById(), save(), and delete(). @Query allows defining custom JPQL or SQL queries.",
              "answer": "",
              "code": null
            },
            {
              "question": "How to get data for employee {id, name, address{id, location}} and fetch location based on employee data",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public interface EmployeeRepository extends JpaRepository<Employee, Long> {\n\n // Exact match\n List<Employee> findByAddressLocation(String location);\n\n // Partial match\n List<Employee> findByAddressLocationContaining(String location);\n}"
              }
            },
            {
              "question": "Why is React fast and what is virtual DOM",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: React is fast due to its use of the virtual DOM, which minimizes direct manipulation of the actual DOM, reducing performance overhead.",
              "answer": "",
              "code": null
            },
            {
              "question": "Virtual DOM internal structure",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: The virtual DOM is a lightweight copy of the real DOM. It represents the UI components as JavaScript objects, which React updates efficiently.",
              "answer": "",
              "code": null
            },
            {
              "question": "Which component do you use: functional or class-based",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: I use both functional and class-based components, but prefer functional components due to their simplicity and hooks support.",
              "answer": "",
              "code": null
            },
            {
              "question": "Other than useState and useEffect, which hooks do you use",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: I use useContext, useReducer, useMemo, and useCallback hooks.",
              "answer": "23. What is useContext",
              "code": null
            },
            {
              "question": "Answer: useContext allows accessing context values in functional components, enabling state sharing across the component tree without prop drilling.",
              "answer": "",
              "code": null
            },
            {
              "question": "Context API alternate in React",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: Alternatives include Redux for state management or React's useState and useReducer for local state.",
              "answer": "",
              "code": null
            },
            {
              "question": "Hoisting in JavaScript",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: Hoisting refers to JavaScript's behavior of moving variable and function declarations to the top of their containing scope during compilation.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is prototype",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: In JavaScript, prototype is an object from which other objects inherit properties and methods. Every JavaScript object has a prototype.",
              "answer": "",
              "code": null
            }
          ]
        },
        {
          "name": "Second Round Interview -Pair Programming",
          "questions": [
            {
              "question": "1 Implement POST and GET APIs for a Vehicle resource in Spring Boot. Provide the code for repository, service, and controller layers. Include JUnit test cases for the POST and GET methods.",
              "answer": "",
              "code": null
            },
            {
              "question": "Repository Layer",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import org.springframework.data.jpa.repository.JpaRepository;\n\npublic interface VehicleRepository extends JpaRepository<Vehicle, Long> {\n}"
              }
            },
            {
              "question": "Service Layer",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\n\n@Service\npublic class VehicleService {\n\n    @Autowired\n    private VehicleRepository vehicleRepository;\n\n    public List<Vehicle> getAllVehicles() {\n        return vehicleRepository.findAll();\n    }\n\n    public Vehicle saveVehicle(Vehicle vehicle) {\n        return vehicleRepository.save(vehicle);\n    }\n}"
              }
            },
            {
              "question": "Controller Layer",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import org.springframework.beans.factory.annotation.Autowired;\n import org.springframework.http.HttpStatus;\n import org.springframework.http.ResponseEntity;\n import org.springframework.web.bind.annotation.*;\n\n import java.util.List;\n\n @RestController\n @RequestMapping(\"/vehicles\")\n@CrossOrigin(origins = \"http://localhost:3000\") \n public class VehicleController {\n\n     @Autowired\n     private VehicleService vehicleService;\n\n     @GetMapping\n     public ResponseEntity<List<Vehicle>> getAllVehicles() {\n         List<Vehicle> vehicles = vehicleService.getAllVehicles();\n         return new ResponseEntity<>(vehicles, HttpStatus.OK);\n     }\n\n     @PostMapping\n     public ResponseEntity<Vehicle> createVehicle(@RequestBody Vehicle vehicle) {\n         Vehicle savedVehicle = vehicleService.saveVehicle(vehicle);\n         return new ResponseEntity<>(savedVehicle, HttpStatus.CREATED);\n     }\n }"
              }
            },
            {
              "question": "JUnit Test Cases",
              "answer": "",
              "code": null
            },
            {
              "question": "Repository Layer Test",
              "answer": "Since the repository layer interacts directly with the database, you typically use an in-memory database or a test configuration to test repository methods. For JPA repositories, the most common approach is to use an embedded H2 database or similar for integration tests.\nVehicleRepositoryTest.java",
              "code": {
                "language": "java",
                "content": "import org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;\nimport org.springframework.test.context.ActiveProfiles;\n\nimport java.util.List;\n\nimport static org.assertj.core.api.Assertions.assertThat;\n\n@DataJpaTest\npublic class VehicleRepositoryTest {\n\n    @Autowired\n    private VehicleRepository vehicleRepository;\n\n    @BeforeEach\n    public void setUp() {\n        vehicleRepository.deleteAll();\n    }\n\n    @Test\n    public void testSaveVehicle() {\n        Vehicle vehicle = new Vehicle();\n        vehicle.setMake(\"Ford\");\n        vehicle.setModel(\"Focus\");\n        vehicle.setYear(2021);\n\n        Vehicle savedVehicle = vehicleRepository.save(vehicle);\n        assertThat(savedVehicle).isNotNull();\n        assertThat(savedVehicle.getId()).isNotNull();\n    }\n\n    @Test\n    public void testFindAllVehicles() {\n        Vehicle vehicle1 = new Vehicle();\n        vehicle1.setMake(\"Toyota\");\n        vehicle1.setModel(\"Corolla\");\n        vehicle1.setYear(2020);\n        vehicleRepository.save(vehicle1);\n\n        Vehicle vehicle2 = new Vehicle();\n        vehicle2.setMake(\"Honda\");\n        vehicle2.setModel(\"Civic\");\n        vehicle2.setYear(2019);\n        vehicleRepository.save(vehicle2);\n\n        List<Vehicle> vehicles = vehicleRepository.findAll();\n        assertThat(vehicles).hasSize(2);\n    }\n}"
              }
            },
            {
              "question": "Service Layer Test",
              "answer": "The service layer test verifies that the service methods are functioning correctly. This typically involves mocking the repository and ensuring that the service methods interact with the repository as expected.\nVehicleServiceTest.java",
              "code": {
                "language": "java",
                "content": "import org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.mockito.InjectMocks;\nimport org.mockito.Mock;\nimport org.mockito.MockitoAnnotations;\nimport org.springframework.boot.test.context.SpringBootTest;\n\nimport java.util.List;\n\nimport static org.assertj.core.api.Assertions.assertThat;\nimport static org.mockito.Mockito.when;\n\n@ExtendWith(MockitoExtension.class)\npublic class VehicleServiceTest {\n\n    @Mock\n    private VehicleRepository vehicleRepository;\n\n    @InjectMocks\n    private VehicleService vehicleService;\n\n    @BeforeEach\n    public void setUp() {\n        MockitoAnnotations.openMocks(this);\n    }\n\n    @Test\n    public void testGetAllVehicles() {\n        Vehicle vehicle1 = new Vehicle();\n        vehicle1.setMake(\"Toyota\");\n        vehicle1.setModel(\"Corolla\");\n        vehicle1.setYear(2020);\n\n        Vehicle vehicle2 = new Vehicle();\n        vehicle2.setMake(\"Honda\");\n        vehicle2.setModel(\"Civic\");\n        vehicle2.setYear(2019);\n\n        when(vehicleRepository.findAll()).thenReturn(List.of(vehicle1, vehicle2));\n\n        List<Vehicle> vehicles = vehicleService.getAllVehicles();\n        assertThat(vehicles).hasSize(2);\n        assertThat(vehicles.get(0).getMake()).isEqualTo(\"Toyota\");\n        assertThat(vehicles.get(1).getMake()).isEqualTo(\"Honda\");\n    }\n\n    @Test\n    public void testSaveVehicle() {\n        Vehicle vehicle = new Vehicle();\n        vehicle.setMake(\"Ford\");\n        vehicle.setModel(\"Focus\");\n        vehicle.setYear(2021);\n\n        when(vehicleRepository.save(vehicle)).thenReturn(vehicle);\n\n        Vehicle savedVehicle = vehicleService.saveVehicle(vehicle);\n        assertThat(savedVehicle).isNotNull();\n        assertThat(savedVehicle.getMake()).isEqualTo(\"Ford\");\n    }\n}"
              }
            },
            {
              "question": "Controller Layer Test",
              "answer": "Test the controller by mocking the service layer to isolate it. Use MockMvc to perform HTTP requests to controller endpoints and verify the correct status codes and response bodies. Ensure to check if the controller handles the HTTP requests as expected and returns the appropriate responses.\nVehicleControllerTest.java",
              "code": {
                "language": "java",
                "content": "import com.fasterxml.jackson.databind.ObjectMapper;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;\nimport org.springframework.boot.test.mock.mockito.MockBean;\nimport org.springframework.http.MediaType;\nimport org.springframework.test.web.servlet.MockMvc;\nimport org.springframework.test.web.servlet.request.MockMvcRequestBuilders;\nimport org.springframework.test.web.servlet.result.MockMvcResultMatchers;\n\nimport java.util.List;\n\nimport static org.mockito.ArgumentMatchers.any;\nimport static org.mockito.Mockito.when;\n\n@WebMvcTest(VehicleController.class)\npublic class VehicleControllerTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockBean\n    private VehicleService vehicleService;\n\n    @Autowired\n    private ObjectMapper objectMapper;\n\n    @Test\n    public void testGetAllVehicles() throws Exception {\n        when(vehicleService.getAllVehicles()).thenReturn(List.of(\n            new Vehicle(1L, \"Toyota\", \"Corolla\", 2020),\n            new Vehicle(2L, \"Honda\", \"Civic\", 2019)\n        ));\n\n        mockMvc.perform(MockMvcRequestBuilders.get(\"/vehicles\"))\n               .andExpect(MockMvcResultMatchers.status().isOk())\n               .andExpect(MockMvcResultMatchers.jsonPath(\"$[0].make\").value(\"Toyota\"))\n               .andExpect(MockMvcResultMatchers.jsonPath(\"$[1].make\").value(\"Honda\"));\n    }\n\n    @Test\n    public void testCreateVehicle() throws Exception {\n        Vehicle vehicle = new Vehicle();\n        vehicle.setMake(\"Ford\");\n        vehicle.setModel(\"Focus\");\n        vehicle.setYear(2021);\n\n        when(vehicleService.saveVehicle(any(Vehicle.class))).thenReturn(vehicle);\n\n        mockMvc.perform(MockMvcRequestBuilders.post(\"/vehicles\")\n               .contentType(MediaType.APPLICATION_JSON)\n               .content(objectMapper.writeValueAsString(vehicle)))\n               .andExpect(MockMvcResultMatchers.status().isCreated())\n               .andExpect(MockMvcResultMatchers.jsonPath(\"$.make\").value(\"Ford\"));\n    }\n}"
              }
            },
            {
              "question": "2 Implement a React component that fetches vehicle data from the backend, displays it in a grid, and write a test case for the component.",
              "answer": "",
              "code": null
            },
            {
              "question": "React Component",
              "answer": "VehicleList.js\nCSS (for grid layout):\nApp.css",
              "code": {
                "language": "css",
                "content": ".vehicle-list {\n    padding: 20px;\n}\n\n.grid-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 20px;\n}\n\n.grid-item {\n    border: 1px solid #ddd;\n    padding: 10px;\n    border-radius: 5px;\n}"
              }
            },
            {
              "question": "React Test Case",
              "answer": "VehicleList.test.js",
              "code": {
                "language": "jsx",
                "content": "import React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport axios from 'axios';\nimport VehicleList from './VehicleList';\nimport '@testing-library/jest-dom/extend-expect';\n\n// Mocking Axios\njest.mock('axios');\n\ntest('renders vehicle list', async () => {\n    // Mocking the response data\n    axios.get.mockResolvedValue({\n        data: [\n            { id: 1, make: 'Toyota', model: 'Corolla', year: 2020 },\n            { id: 2, make: 'Honda', model: 'Civic', year: 2019 },\n        ],\n    });\n\n    render(<VehicleList />);\n\n    // Assertions\n    expect(await screen.findByText(/Toyota Corolla/i)).toBeInTheDocument();\n    expect(await screen.findByText(/Honda Civic/i)).toBeInTheDocument();\n});\n\ntest('handles error response', async () => {\n    // Mocking the error response\n    axios.get.mockRejectedValue(new Error(\"Network Error\"));\n\n    render(<VehicleList />);\n\n    // Assertions\n    expect(await screen.findByText(/There was an error fetching the vehicles./i)).toBeInTheDocument();\n});"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Foad Interview_1",
      "questionCount": 30,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Java/Spring Boot",
              "answer": "",
              "code": null
            },
            {
              "question": "Explain CSR (Cross-Site Request) and how you handle it in your applications.",
              "answer": "Cross-Site Request Forgery (CSRF) is an attack that tricks the victim into submitting a malicious request. It exploits the trust a site has in the user's browser. To handle CSRF in Spring Boot, you can use the CSRF protection provided by Spring Security. By default, CSRF protection is enabled in Spring Security.",
              "code": {
                "language": "java",
                "content": "import org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;\n\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http\n            .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\n            .and()\n            .authorizeRequests()\n            .anyRequest().authenticated();\n    }\n}"
              }
            },
            {
              "question": "What is JWT Security, and how do you implement it?",
              "answer": "JWT (JSON Web Token) Security is a method for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair (using RSA or ECDSA).\nImplementing JWT Security in Spring Boot\nAdd Dependencies: Include necessary dependencies for Spring Security and JWT in your project. These can be added in the pom.xml file for Maven projects or build.gradle for Gradle projects.\nConfigure Spring Security: Configure Spring Security to intercept requests and ensure only authenticated users can access certain endpoints. This involves setting up a security configuration class.\nCreate JWT Utility Class: This class will handle JWT creation, validation, and parsing. It includes methods to generate tokens, extract claims, and validate tokens.\nCreate Authentication Filter: Implement a filter that intercepts incoming requests and checks for a valid JWT in the Authorization header. This filter will use the JWT utility class to validate the token and set the authentication context.\nUser Authentication and Authorization: Implement user authentication by overriding the UserDetailsService to load user-specific data. Use the AuthenticationManager to authenticate users and generate a JWT for authenticated users.",
              "code": null
            },
            {
              "question": "Describe OAuth2 and how it is used in your applications.",
              "answer": "OAuth2 (Open Authorization) is an authorization framework that allows applications to obtain limited access to user accounts on an HTTP service, such as Facebook, GitHub, or Google. It works by delegating user authentication to the service that hosts the user account and authorizing third-party applications to access the user account.",
              "code": null
            },
            {
              "question": "How do you implement paging to get data in Spring Boot?",
              "answer": "You can use Spring Data JPA’s Pageable interface to implement paging.",
              "code": {
                "language": "java",
                "content": "import org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\n\npublic interface UserRepository extends JpaRepository<User, Long> {\n    Page<User> findAll(Pageable pageable);\n}\n\n// Service\npublic Page<User> getUsers(Pageable pageable) {\n    return userRepository.findAll(pageable);\n}\n\n// Controller\n@GetMapping(\"/users\")\npublic Page<User> listUsers(Pageable pageable) {\n    return userService.getUsers(pageable);\n}"
              }
            },
            {
              "question": "How do you sort data based on a property in Spring Boot?",
              "answer": "You can use Spring Data JPA’s Sort class to sort data.",
              "code": {
                "language": "java",
                "content": "import org.springframework.data.domain.Sort;\n\npublic List<User> getUsers() {\n    return userRepository.findAll(Sort.by(Sort.Direction.ASC, \"name\"));\n}"
              }
            },
            {
              "question": "What is an API Gateway, and why is it used?",
              "answer": "An API Gateway is a server that acts as an API front-end, receiving API requests, enforcing throttling and security policies, passing requests to the back-end service, and then passing the response back to the requester. It is used to manage traffic, handle cross-cutting concerns like security, and provide a single entry point for client requests.",
              "code": null
            },
            {
              "question": "How do you implement load balancing in your applications?",
              "answer": "You can implement load balancing using tools like Ribbon or Spring Cloud LoadBalancer in a Spring Boot application.",
              "code": {
                "language": "java",
                "content": "import org.springframework.cloud.client.loadbalancer.LoadBalanced;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.web.client.RestTemplate;\n\n@Bean\n@LoadBalanced\npublic RestTemplate restTemplate() {\n    return new RestTemplate();\n}"
              }
            },
            {
              "question": "Explain the difference between Monolithic and Microservices architectures.",
              "answer": "",
              "code": null
            },
            {
              "question": "Monolithic Architecture: A single unified codebase where all the components and services are tightly coupled and run as a single service.",
              "answer": "",
              "code": null
            },
            {
              "question": "Microservices Architecture: An approach where an application is composed of loosely coupled services, each running in its own process and communicating through lightweight mechanisms like HTTP or messaging queues.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is Kubernetes, and how do you use it in your applications?",
              "answer": "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. You can use it to deploy, manage, and scale your microservices.",
              "code": null
            },
            {
              "question": "How do you connect one microservice to another?",
              "answer": "You can use REST APIs, messaging queues (like RabbitMQ), or service discovery tools (like Eureka) to connect microservices.",
              "code": null
            },
            {
              "question": "What is the difference between @RestController and @Controller in Spring Boot?",
              "answer": "",
              "code": null
            },
            {
              "question": "@RestController: Combines @Controller and @ResponseBody, used to create RESTful web services.",
              "answer": "",
              "code": null
            },
            {
              "question": "@Controller: Used to define a controller and is typically used with view templates to render HTML.",
              "answer": "",
              "code": null
            },
            {
              "question": "How do you perform code quality analysis in your projects?",
              "answer": "You can use tools like SonarQube for static code analysis, which helps in identifying code smells, bugs, and security vulnerabilities.",
              "code": null
            },
            {
              "question": "What is the difference between authentication and authorization?",
              "answer": "",
              "code": null
            },
            {
              "question": "Authentication: The process of verifying the identity of a user.",
              "answer": "",
              "code": null
            },
            {
              "question": "Authorization: The process of verifying what resources an authenticated user has access to.",
              "answer": "",
              "code": null
            },
            {
              "question": "How do you scale your application?",
              "answer": "You can scale your application horizontally by adding more instances or vertically by adding more resources (CPU, memory) to the existing instances. Tools like Kubernetes help in managing scaling.",
              "code": null
            },
            {
              "question": "What are profiles in Spring Boot, and how do you use them?",
              "answer": "Profiles in Spring Boot allow you to configure different environments (e.g., development, testing, production). You can specify different configurations in application-{profile}.properties files.",
              "code": {
                "language": "java",
                "content": "// application-dev.properties\nspring.datasource.url=jdbc:h2:mem:devdb\n\n// application-prod.properties\nspring.datasource.url=jdbc:mysql://localhost/proddb\n\n// Main application\n@SpringBootApplication\n@PropertySource(\"classpath:application-${spring.profiles.active}.properties\")\npublic class MyApp {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApp.class, args);\n    }\n}"
              }
            },
            {
              "question": "React",
              "answer": "",
              "code": null
            },
            {
              "question": "What is middleware in ReactJS, and how do you use it?",
              "answer": "Middleware in React, typically used with state management libraries like Redux, is a way to extend the capabilities of the store by adding custom functionality between dispatching an action and the moment it reaches the reducer.",
              "code": {
                "language": "javascript",
                "content": "const loggerMiddleware = store => next => action => {\n    console.log('Dispatching:', action);\n    let result = next(action);\n    console.log('Next state:', store.getState());\n    return result;\n};\n\nconst store = createStore(\n    rootReducer,\n    applyMiddleware(loggerMiddleware)\n);"
              }
            },
            {
              "question": "Explain the Context API and Redux. How do they differ, and when do you use each?",
              "answer": "",
              "code": null
            },
            {
              "question": "Context API: Built-in feature of React for prop drilling and global state management. Best for small to medium applications.",
              "answer": "",
              "code": null
            },
            {
              "question": "Redux: A state management library that provides a single source of truth and a predictable state container. Best for larger applications with more complex state management needs.",
              "answer": "",
              "code": null
            },
            {
              "question": "How do you write unit tests in React?",
              "answer": "You can use testing libraries like Jest and React Testing Library to write unit tests.",
              "code": {
                "language": "javascript",
                "content": "import { render, screen } from '@testing-library/react';\nimport App from './App';\n\ntest('renders learn react link', () => {\n    render(<App />);\n    const linkElement = screen.getByText(/learn react/i);\n    expect(linkElement).toBeInTheDocument();\n});"
              }
            },
            {
              "question": "Have you worked on reusable components in React? Give an example.",
              "answer": "Yes, for example, a Button component that can be reused across the application.",
              "code": {
                "language": "javascript",
                "content": "const Button = ({ label, onClick }) => (\n    <button onClick={onClick}>\n        {label}\n    </button>\n);\n\n// Usage\n<Button label=\"Click Me\" onClick={handleClick} />"
              }
            },
            {
              "question": "What is a Higher-Order Component (HoC) in ReactJS, and how do you use it?",
              "answer": "A Higher-Order Component (HoC) is a function that takes a component and returns a new component. It’s used for reusing component logic.",
              "code": {
                "language": "javascript",
                "content": "const withLogging = WrappedComponent => {\n    return class extends React.Component {\n        componentDidMount() {\n            console.log('Component mounted');\n        }\n\n        render() {\n            return <WrappedComponent {...this.props} />;\n        }\n    };\n};\n\n// Usage\nconst EnhancedComponent = withLogging(MyComponent);"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "FordReference",
      "questionCount": 25,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Assessment",
              "answer": "",
              "code": null
            },
            {
              "question": "Spring Boot App - HackerRank Assessment",
              "answer": "",
              "code": null
            },
            {
              "question": "5 Multiple Choice Questions (MCQs)",
              "answer": "",
              "code": null
            }
          ]
        },
        {
          "name": "First Round Interview",
          "questions": [
            {
              "question": "Explain the concept of OOP (Object-Oriented Programming) in Java.",
              "answer": "Answer: OOP in Java is a programming paradigm based on the concept of objects, which can contain data and code. The four main principles of OOP are encapsulation, inheritance, polymorphism, and abstraction.",
              "code": null
            },
            {
              "question": "What are the differences between == and equals() in Java?",
              "answer": "Answer: == checks for reference equality, meaning it checks whether two references point to the same object in memory. equals() checks for value equality, meaning it checks whether two objects are meaningfully equivalent.",
              "code": null
            },
            {
              "question": "How does Java handle memory management?",
              "answer": "Answer: Java uses an automatic garbage collection mechanism to manage memory. It allocates memory on the heap for new objects and reclaims memory from objects that are no longer referenced.",
              "code": null
            },
            {
              "question": "How do you handle exceptions in Java?",
              "answer": "Answer: Exceptions in Java are handled using try-catch blocks, where code that might throw an exception is placed inside the try block and exception handling code is placed inside the catch block.",
              "code": null
            },
            {
              "question": "What are checked and unchecked exceptions in Java?",
              "answer": "Answer: Checked exceptions are exceptions that must be either caught or declared in the method signature using the throws keyword. Unchecked exceptions are exceptions that do not need to be explicitly handled, typically subclasses of RuntimeException.",
              "code": null
            },
            {
              "question": "How do you handle exceptions in Spring Boot applications?",
              "answer": "Answer: Spring Boot provides the @ExceptionHandler annotation to handle exceptions in a controller. Additionally, @ControllerAdvice can be used to define global exception handlers for the entire application.",
              "code": null
            },
            {
              "question": "Given a list of employees, find the list of employees based on gender. Result should be - Male, [e1, e2, e3] Female, [e4, e5].",
              "answer": "Answer",
              "code": {
                "language": "java",
                "content": "Map<String, List<Employee>> employeesByGender = employees.stream()\n    .collect(Collectors.groupingBy(Employee::getGender));"
              }
            },
            {
              "question": "Explain the basics of Spring Boot.",
              "answer": "Answer: Spring Boot simplifies the development of Spring applications by providing a set of tools and libraries for rapid application development. It offers features like auto-configuration, standalone application configuration, and embedded servers.",
              "code": null
            },
            {
              "question": "Write a code example for a JPA repository and a derived query.",
              "answer": "Answer",
              "code": {
                "language": "java",
                "content": "@Repository\npublic interface EmployeeRepository extends JpaRepository<Employee, Long> {\n    List<Employee> findByGender(String gender);\n}"
              }
            },
            {
              "question": "Explain thread pools and their use in Java.",
              "answer": "Answer: Thread pools manage a collection of reusable threads for executing tasks, which improves application performance by reducing the overhead of creating and destroying threads. Java provides ExecutorService to manage thread pools.",
              "code": null
            },
            {
              "question": "Configure HikariCP in a Spring Boot application.",
              "answer": "Answer",
              "code": {
                "language": "yaml",
                "content": "spring:\n  datasource:\n    url: jdbc:mysql://localhost:3306/db\n    username: user\n    password: pass\n    hikari:\n      maximum-pool-size: 10"
              }
            },
            {
              "question": "Explain Hibernate queries and entity graphs.",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: Hibernate queries can be written using HQL or Criteria API. Entity graphs optimize queries by defining which related entities should be fetched, reducing the number of queries executed and improving performance.",
              "answer": "",
              "code": null
            },
            {
              "question": "How do you write test cases differently for controller, data, and service layers?",
              "answer": "Answer",
              "code": {
                "language": "java",
                "content": "// Controller Test\n@WebMvcTest(EmployeeController.class)\npublic class EmployeeControllerTest {\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockBean\n    private EmployeeService employeeService;\n\n    @Test\n    public void testGetEmployee() throws Exception {\n        mockMvc.perform(get(\"/employees/1\"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath(\"$.name\").value(\"John\"));\n    }\n}\n\n// Service Test\n@ExtendWith(MockitoExtension.class)\npublic class EmployeeServiceTest {\n    @Mock\n    private EmployeeRepository employeeRepository;\n\n    @InjectMocks\n    private EmployeeService employeeService;\n\n    @Test\n    public void testFindEmployeeById() {\n        when(employeeRepository.findById(1L)).thenReturn(Optional.of(new Employee(\"John\")));\n        Employee employee = employeeService.findEmployeeById(1L);\n        assertEquals(\"John\", employee.getName());\n    }\n}\n\n// Repository Test\n@DataJpaTest\npublic class EmployeeRepositoryTest {\n    @Autowired\n    private EmployeeRepository employeeRepository;\n\n    @Test\n    public void testFindByGender() {\n        List<Employee> employees = employeeRepository.findByGender(\"Male\");\n        assertEquals(3, employees.size());\n    }\n}"
              }
            },
            {
              "question": "Explain code coverage and tools like SonarQube.",
              "answer": "Answer: Code coverage measures how much of the code is tested by unit tests. Tools like SonarQube analyze code quality, including code coverage, and provide reports to help improve code reliability and maintainability.",
              "code": null
            },
            {
              "question": "What are deployment tools and how do they work?",
              "answer": "Answer: - Answer: Deployment tools like Jenkins, Docker, and Kubernetes automate the process of deploying applications, ensuring consistent environments and simplifying scaling and management.",
              "code": null
            },
            {
              "question": "Difference between vanilla JavaScript and React.",
              "answer": "Answer: Vanilla JavaScript is a plain JavaScript without any libraries or frameworks. React is a library for building user interfaces, offering components, state management, and virtual DOM for efficient updates.",
              "code": null
            },
            {
              "question": "Explain useState and useEffect hooks in React.",
              "answer": "Answer: useState is a hook that lets you add state to functional components. useEffect is a hook for performing side effects, such as data fetching or updating the DOM, in functional components.",
              "code": null
            },
            {
              "question": "Write a basic API call using React.",
              "answer": "Answer",
              "code": {
                "language": "javascript",
                "content": "useEffect(() => {\n  fetch('https://api.example.com/data')\n    .then(response => response.json())\n    .then(data => setData(data));\n}, []);"
              }
            },
            {
              "question": "Transform an IP address from 192.62.255.31 to 291.26.552.13.",
              "answer": "Answer",
              "code": {
                "language": "javascript",
                "content": "function transformIP(ip) {\n    return ip.split('.').map(octet => {\n        return octet.split('').reverse().join('');\n    }).join('.');\n}\nconsole.log(transformIP('192.62.255.31')); // 291.26.552.13"
              }
            }
          ]
        },
        {
          "name": "Second Round Interview: Pair Programming",
          "questions": [
            {
              "question": "Develop a UI page to show a list of items in the search page using React.",
              "answer": "Answer",
              "code": {
                "language": "javascript",
                "content": "import React, { useState, useEffect } from 'react';\n\nconst ItemList = () => {\n    const [items, setItems] = useState([]);\n    const [searchTerm, setSearchTerm] = useState('');\n\n    useEffect(() => {\n        fetch('http://localhost:8080/api/items')\n            .then(response => response.json())\n            .then(data => setItems(data));\n    }, []);\n\n    const filteredItems = items.filter(item => item.name.includes(searchTerm));\n\n    return (\n        <div>\n            <input\n                type=\"text\"\n                placeholder=\"Search items\"\n                value={searchTerm}\n                onChange={e => setSearchTerm(e.target.value)}\n            />\n            <ul>\n                {filteredItems.map(item => (\n                    <li key={item.id}>{item.name}</li>\n                ))}\n            </ul>\n        </div>\n    );\n};\n\nexport default ItemList;"
              }
            },
            {
              "question": "Write an API with Spring Boot and use the API endpoint in React to show the list.",
              "answer": "Spring Boot API\nReact Integration",
              "code": {
                "language": "javascript",
                "content": "import React, { useState, useEffect } from 'react';\n\nconst ItemList = () => {\n    const [items, setItems] = useState([]);\n\n    useEffect(() => {\n        fetch('http://localhost:8080/api/items')\n            .then(response => response.json())\n            .then(data => setItems(data));\n    }, []);\n\n    return (\n        <ul>\n            {items.map(item => (\n                <li key={item.id}>{item.name}</li>\n            ))}\n        </ul>\n    );\n};\n\nexport default ItemList;"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 122
};
