// AUTO-GENERATED file — company-wise interview data.
// Source: Ford Motor interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "ford-motor",
  "name": "Ford Motor",
  "interviews": [
    {
      "name": "FOAD First Round Interview",
      "rounds": [
        {
          "name": "Core Java",
          "questions": [
            {
              "question": "Which version of Java are you using?",
              "answer": "I am using Java 8 and Java 11, and I am familiar with Java 17 features.",
              "code": null
            },
            {
              "question": "What are Java 8 features?",
              "answer": "Key Java 8 features:\n- Lambda Expressions — e.g. (a, b) -> a + b\n- Streams API — functional-style processing of collections\n- New Date and Time API — LocalDate, LocalDateTime\n- Default Methods in Interfaces\n- Optional Class — helps avoid NullPointerException",
              "code": {
                "language": "java",
                "content": "List<String> list = Arrays.asList(\"a1\", \"a2\", \"b1\");\nlist.stream().filter(s -> s.startsWith(\"a\")).forEach(System.out::println);"
              }
            },
            {
              "question": "What is the Java 9 static method in interface?",
              "answer": "Java 9 introduced private methods in interfaces that can be static or non-static, allowing code sharing between default methods.",
              "code": {
                "language": "java",
                "content": "interface MyInterface {\n    private static void helper() { }\n    default void method() { helper(); }\n}"
              }
            },
            {
              "question": "What is the List.of method?",
              "answer": "List.of() creates an immutable list with the provided elements — it returns an unmodifiable list.",
              "code": {
                "language": "java",
                "content": "List<String> list = List.of(\"A\", \"B\", \"C\");\n// list.add(\"D\"); // Throws UnsupportedOperationException"
              }
            },
            {
              "question": "What is a Functional Interface? Give an example.",
              "answer": "A functional interface has exactly one abstract method. It can have multiple default or static methods.",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\npublic interface Calculator { int add(int a, int b); }"
              }
            },
            {
              "question": "What is Supplier in functional programming?",
              "answer": "Supplier is a functional interface that provides a result of type T without taking any input.",
              "code": {
                "language": "java",
                "content": "Supplier<String> supplier = () -> \"Hello\";\nSystem.out.println(supplier.get()); // Hello"
              }
            },
            {
              "question": "Create a functional interface with an add method, static sum, default multiply, and use it in main.",
              "answer": "Create a Calculator interface with add as the abstract method, static sum, and default multiply — then implement and use it in Main.",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\npublic interface Calculator {\n    int add(int a, int b);\n    static int sum(int a, int b) { return a + b; }\n    default int multiply(int a, int b) { return a * b; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Calculator calc = (a, b) -> a + b;\n        System.out.println(\"Add: \" + calc.add(5, 3));\n        System.out.println(\"Sum: \" + Calculator.sum(5, 3));\n        System.out.println(\"Multiply: \" + calc.multiply(5, 3));\n    }\n}"
              }
            },
            {
              "question": "Using streams, given a list of employees, count male/female employees.",
              "answer": "Use groupingBy with counting to group employees by gender.",
              "code": {
                "language": "java",
                "content": "Map<String, Long> result = employees.stream()\n    .collect(Collectors.groupingBy(Employee::getGender, Collectors.counting()));"
              }
            },
            {
              "question": "employees.stream().filter(e -> e.getAge() > 18).map(e -> e.remove()).count() — what will be the output?",
              "answer": "The output depends on the remove() method.\n- If it removes the element from the list, it returns the count of removed items\n- If not, it returns 0",
              "code": null
            },
            {
              "question": "What are terminal operations in streams?",
              "answer": "Terminal operations produce a result or side-effect and mark the end of the stream pipeline.\n- Examples: collect(), count(), forEach(), reduce()",
              "code": {
                "language": "java",
                "content": "list.stream().filter(s -> s.length() > 3).count(); // Terminal"
              }
            },
            {
              "question": "How does Java handle memory management?",
              "answer": "Java uses automatic garbage collection. It allocates memory on the heap for new objects and reclaims memory from unreferenced objects.",
              "code": null
            },
            {
              "question": "How do you handle exceptions in Java?",
              "answer": "Using try-catch blocks — code that might throw an exception goes in the try block, handling code in the catch block.",
              "code": {
                "language": "java",
                "content": "try { riskyOperation(); }\ncatch (Exception e) { e.printStackTrace(); }"
              }
            },
            {
              "question": "What are checked and unchecked exceptions?",
              "answer": "- Checked exceptions must be caught or declared (IOException, SQLException)\n- Unchecked exceptions don't need explicit handling (NullPointerException, ArithmeticException)",
              "code": null
            },
            {
              "question": "What is the difference between == and equals() in Java?",
              "answer": "== checks reference equality (same object), while equals() checks value equality (same content).",
              "code": {
                "language": "java",
                "content": "String s1 = new String(\"Hello\");\nString s2 = new String(\"Hello\");\nSystem.out.println(s1 == s2); // false\nSystem.out.println(s1.equals(s2)); // true"
              }
            },
            {
              "question": "Explain OOP concepts in Java.",
              "answer": "- Encapsulation — wrapping data and methods together\n- Inheritance — deriving new classes from existing ones\n- Polymorphism — same method, different forms\n- Abstraction — hiding complexity",
              "code": null
            },
            {
              "question": "What are thread pools and their use in Java?",
              "answer": "Thread pools manage reusable threads for executing tasks, reducing the overhead of creating/destroying threads. Java provides ExecutorService.",
              "code": {
                "language": "java",
                "content": "ExecutorService executor = Executors.newFixedThreadPool(10);\nexecutor.submit(() -> System.out.println(\"Task\"));\nexecutor.shutdown();"
              }
            }
          ]
        },
        {
          "name": "Spring Boot",
          "questions": [
            {
              "question": "Spring Boot Controller using POST & GET for vehicle details.",
              "answer": "Create a @RestController with @PostMapping and @GetMapping for vehicle operations.",
              "code": {
                "language": "java",
                "content": "@RestController\n@RequestMapping(\"/vehicles\")\npublic class VehicleController {\n    @PostMapping\n    public ResponseEntity<Vehicle> addVehicle(@RequestBody Vehicle vehicle) {\n        return ResponseEntity.status(HttpStatus.CREATED).body(vehicle);\n    }\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<Vehicle> getVehicle(@PathVariable Long id) {\n        return ResponseEntity.ok(vehicle);\n    }\n}"
              }
            },
            {
              "question": "What are the issues you have faced in Spring Boot development?",
              "answer": "Common issues:\n- Configuration errors\n- Dependency conflicts\n- Debugging complex applications\n- Connection pooling issues\n- Transaction management problems",
              "code": null
            },
            {
              "question": "Which version of Spring Boot are you using?",
              "answer": "I am using Spring Boot 2.x and 3.x.",
              "code": null
            },
            {
              "question": "What is the @Primary and @Qualifier annotation?",
              "answer": "- @Primary specifies the default bean when multiple beans of the same type exist\n- @Qualifier specifies which bean to inject",
              "code": {
                "language": "java",
                "content": "@Primary @Component public class PrimaryBean {}\n@Qualifier(\"secondary\") @Component public class SecondaryBean {}\n\n@Autowired @Qualifier(\"secondary\") private MyBean bean;"
              }
            },
            {
              "question": "How do you use two different databases in a single Spring Boot application?",
              "answer": "Configure multiple DataSource beans with @Primary for the default one, and use @Qualifier to inject the appropriate DataSource.",
              "code": {
                "language": "java",
                "content": "@Configuration\npublic class DataSourceConfig {\n    @Bean @Primary\n    @ConfigurationProperties(\"spring.datasource1\")\n    public DataSource dataSource1() { return DataSourceBuilder.create().build(); }\n\n    @Bean\n    @ConfigurationProperties(\"spring.datasource2\")\n    public DataSource dataSource2() { return DataSourceBuilder.create().build(); }\n}"
              }
            },
            {
              "question": "Explain JPA methods and @Query.",
              "answer": "JPA methods: findAll(), findById(), save(), delete(). @Query defines custom JPQL/SQL queries.",
              "code": {
                "language": "java",
                "content": "@Repository\npublic interface EmployeeRepository extends JpaRepository<Employee, Long> {\n    @Query(\"SELECT e FROM Employee e WHERE e.name LIKE %:name%\")\n    List<Employee> findByNameContaining(@Param(\"name\") String name);\n}"
              }
            },
            {
              "question": "How do you get data for employee {id, name, address{id, location}} and fetch location based on employee data?",
              "answer": "Use derived query methods or @Query with JOIN FETCH.",
              "code": {
                "language": "java",
                "content": "@Repository\npublic interface EmployeeRepository extends JpaRepository<Employee, Long> {\n    List<Employee> findByAddressLocation(String location);\n\n    @Query(\"SELECT e FROM Employee e JOIN FETCH e.address WHERE e.id = :id\")\n    Optional<Employee> findByIdWithAddress(@Param(\"id\") Long id);\n}"
              }
            },
            {
              "question": "Explain the basics of Spring Boot.",
              "answer": "Spring Boot simplifies Spring development with auto-configuration, standalone application configuration, and embedded servers.",
              "code": {
                "language": "java",
                "content": "@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}"
              }
            },
            {
              "question": "Write a code example for a JPA repository and derived query.",
              "answer": "Create a repository interface extending JpaRepository with a derived query method.",
              "code": {
                "language": "java",
                "content": "@Repository\npublic interface EmployeeRepository extends JpaRepository<Employee, Long> {\n    List<Employee> findByGender(String gender);\n}"
              }
            },
            {
              "question": "Configure HikariCP in a Spring Boot application.",
              "answer": "Add configuration in application.yml for the HikariCP connection pool.",
              "code": {
                "language": "yaml",
                "content": "spring:\n  datasource:\n    url: jdbc:mysql://localhost:3306/db\n    username: user\n    password: pass\n    hikari:\n      maximum-pool-size: 10\n      minimum-idle: 5\n      connection-timeout: 30000"
              }
            },
            {
              "question": "Explain Hibernate queries and entity graphs.",
              "answer": "Hibernate queries use HQL or the Criteria API. Entity graphs optimize queries by defining which related entities to fetch.",
              "code": {
                "language": "java",
                "content": "@EntityGraph(attributePaths = {\"address\", \"department\"})\n@Query(\"SELECT e FROM Employee e WHERE e.id = :id\")\nOptional<Employee> findByIdWithGraph(@Param(\"id\") Long id);"
              }
            },
            {
              "question": "How do you write test cases for controller, service, and repository layers?",
              "answer": "- Controller: @WebMvcTest with MockMvc\n- Service: @ExtendWith(MockitoExtension.class) with @Mock and @InjectMocks\n- Repository: @DataJpaTest",
              "code": {
                "language": "java",
                "content": "// Controller Test\n@WebMvcTest(EmployeeController.class)\npublic class EmployeeControllerTest {\n    @Autowired private MockMvc mockMvc;\n    @MockBean private EmployeeService service;\n}\n\n// Service Test\n@ExtendWith(MockitoExtension.class)\npublic class EmployeeServiceTest {\n    @Mock private EmployeeRepository repository;\n    @InjectMocks private EmployeeService service;\n}\n\n// Repository Test\n@DataJpaTest\npublic class EmployeeRepositoryTest {\n    @Autowired private EmployeeRepository repository;\n}"
              }
            },
            {
              "question": "Explain code coverage and tools like SonarQube.",
              "answer": "Code coverage measures how much of the code is tested. SonarQube analyzes code quality, coverage, and provides improvement reports.",
              "code": null
            },
            {
              "question": "What are deployment tools and how do they work?",
              "answer": "Deployment tools like Jenkins, Docker, and Kubernetes automate deployment, ensure consistent environments, and simplify scaling.",
              "code": null
            },
            {
              "question": "How do you handle exceptions in Spring Boot?",
              "answer": "Use @ExceptionHandler in controllers or @ControllerAdvice for global exception handling.",
              "code": {
                "language": "java",
                "content": "@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleException(Exception e) {\n        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "ReactJS",
          "questions": [
            {
              "question": "Why is React fast and what is the virtual DOM?",
              "answer": "React is fast due to the virtual DOM, which minimizes direct manipulation of the actual DOM. The virtual DOM is a lightweight copy representing UI components as JavaScript objects.",
              "code": null
            },
            {
              "question": "What is the virtual DOM's internal structure?",
              "answer": "The virtual DOM is a lightweight JavaScript object representation of the real DOM. React updates it efficiently and reconciles it with the real DOM.",
              "code": null
            },
            {
              "question": "Which component do you use: functional or class-based?",
              "answer": "I use both, but prefer functional components due to their simplicity and hooks support.",
              "code": {
                "language": "jsx",
                "content": "const MyComponent = () => {\n    const [state, setState] = useState(0);\n    return <div>{state}</div>;\n};"
              }
            },
            {
              "question": "Other than useState and useEffect, which hooks do you use?",
              "answer": "- useContext\n- useReducer\n- useMemo\n- useCallback\n- useRef\n- useLayoutEffect",
              "code": {
                "language": "jsx",
                "content": "const value = useContext(MyContext);\nconst memoized = useMemo(() => compute(a, b), [a, b]);"
              }
            },
            {
              "question": "What is useContext?",
              "answer": "useContext allows accessing context values in functional components, enabling state sharing without prop drilling.",
              "code": {
                "language": "jsx",
                "content": "const ThemeContext = React.createContext('light');\nconst theme = useContext(ThemeContext);"
              }
            },
            {
              "question": "What is the Context API alternate in React?",
              "answer": "Alternatives include Redux for state management, or useState/useReducer for local state.",
              "code": null
            },
            {
              "question": "What is middleware in ReactJS?",
              "answer": "Middleware extends the Redux store by adding functionality between dispatching an action and it reaching the reducer.",
              "code": {
                "language": "javascript",
                "content": "const loggerMiddleware = store => next => action => {\n    console.log('Dispatching:', action);\n    let result = next(action);\n    console.log('Next state:', store.getState());\n    return result;\n};"
              }
            },
            {
              "question": "Explain Context API and Redux. How do they differ?",
              "answer": "- Context API: built-in React feature for small to medium apps\n- Redux: external library for large apps with complex state management",
              "code": null
            },
            {
              "question": "How do you write unit tests in React?",
              "answer": "Use Jest and React Testing Library for unit tests.",
              "code": {
                "language": "jsx",
                "content": "import { render, screen } from '@testing-library/react';\ntest('renders component', () => {\n    render(<App />);\n    expect(screen.getByText('Hello')).toBeInTheDocument();\n});"
              }
            },
            {
              "question": "Have you worked on reusable components? Give an example.",
              "answer": "Yes — a reusable Button component used across the application.",
              "code": {
                "language": "jsx",
                "content": "const Button = ({ label, onClick, variant = 'primary' }) => (\n    <button className={`btn btn-${variant}`} onClick={onClick}>\n        {label}\n    </button>\n);"
              }
            },
            {
              "question": "What is a Higher-Order Component (HoC)?",
              "answer": "A HoC is a function that takes a component and returns a new component. It is used for reusing component logic.",
              "code": {
                "language": "jsx",
                "content": "const withLogging = WrappedComponent => {\n    return class extends React.Component {\n        componentDidMount() { console.log('Mounted'); }\n        render() { return <WrappedComponent {...this.props} />; }\n    };\n};"
              }
            },
            {
              "question": "Explain useState and useEffect hooks.",
              "answer": "useState adds state to functional components. useEffect performs side effects like data fetching.",
              "code": {
                "language": "jsx",
                "content": "const [data, setData] = useState([]);\nuseEffect(() => {\n    fetchData().then(setData);\n}, []);"
              }
            },
            {
              "question": "Write a basic API call using React.",
              "answer": "Use fetch or axios inside useEffect.",
              "code": {
                "language": "jsx",
                "content": "useEffect(() => {\n    fetch('https://api.example.com/data')\n        .then(response => response.json())\n        .then(data => setData(data));\n}, []);"
              }
            },
            {
              "question": "Difference between vanilla JavaScript and React.",
              "answer": "Vanilla JS is plain JavaScript without libraries. React is a library for building UIs with components, state management, and the virtual DOM.",
              "code": null
            },
            {
              "question": "What is hoisting in JavaScript?",
              "answer": "Hoisting is JavaScript's behavior of moving variable and function declarations to the top during compilation.",
              "code": {
                "language": "javascript",
                "content": "console.log(x); // undefined\nvar x = 5;"
              }
            },
            {
              "question": "What is prototype in JavaScript?",
              "answer": "A prototype is the object from which other objects inherit properties and methods. Every JavaScript object has a prototype.",
              "code": {
                "language": "javascript",
                "content": "function Person(name) { this.name = name; }\nPerson.prototype.greet = function() { console.log('Hello'); };"
              }
            },
            {
              "question": "Transform IP address from '192.62.255.31' to '291.26.552.13'.",
              "answer": "Split by '.', reverse each octet, then join back.",
              "code": {
                "language": "javascript",
                "content": "function transformIP(ip) {\n    return ip.split('.').map(octet =>\n        octet.split('').reverse().join('')\n    ).join('.');\n}\n\nconsole.log(transformIP('192.62.255.31')); // 291.26.552.13"
              }
            }
          ]
        }
      ],
      "questionCount": 48
    }
  ]
};
