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
    }
  ],
  "questionCount": 67
};
