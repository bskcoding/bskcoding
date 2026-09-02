// AUTO-GENERATED file — company-wise interview data.
// Source: Ford Motor interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "ford-motor",
  "name": "Ford Motor",
  "interviews": [
    {
      "name": "Reference Interview",
      "rounds": [
        {
          "name": "Core Java",
          "questions": [
            {
              "question": "Explain the concept of OOP in Java.",
              "answer": "OOP is a programming paradigm based on objects containing data and code. Four main principles: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
              "code": null
            },
            {
              "question": "Difference between == and equals() in Java?",
              "answer": "== checks reference equality (same object), while equals() checks value equality (same content).",
              "code": {
                "language": "java",
                "content": "String s1 = new String(\"Hello\");\nString s2 = new String(\"Hello\");\nSystem.out.println(s1 == s2); // false\nSystem.out.println(s1.equals(s2)); // true"
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
                "content": "try { riskyOperation(); } catch (Exception e) { e.printStackTrace(); }"
              }
            },
            {
              "question": "What are checked and unchecked exceptions?",
              "answer": "- Checked: must be caught or declared (IOException)\n- Unchecked: runtime exceptions (NullPointerException)",
              "code": null
            },
            {
              "question": "Given a list of employees, find the list based on gender.",
              "answer": "Use groupingBy to group employees by gender.",
              "code": {
                "language": "java",
                "content": "Map<String, List<Employee>> employeesByGender = employees.stream()\n    .collect(Collectors.groupingBy(Employee::getGender));"
              }
            }
          ]
        },
        {
          "name": "Spring Boot",
          "questions": [
            {
              "question": "Explain the basics of Spring Boot.",
              "answer": "Spring Boot simplifies Spring development with auto-configuration, standalone configuration, and embedded servers.",
              "code": {
                "language": "java",
                "content": "@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}"
              }
            },
            {
              "question": "Write a code example for a JPA repository and derived query.",
              "answer": "Repository interface extending JpaRepository with a derived query method.",
              "code": {
                "language": "java",
                "content": "@Repository\npublic interface EmployeeRepository extends JpaRepository<Employee, Long> {\n    List<Employee> findByGender(String gender);\n}"
              }
            },
            {
              "question": "Explain thread pools and their use in Java.",
              "answer": "Thread pools manage reusable threads for executing tasks, reducing overhead. Java provides ExecutorService.",
              "code": {
                "language": "java",
                "content": "ExecutorService executor = Executors.newFixedThreadPool(10);\nexecutor.submit(() -> System.out.println(\"Task\"));\nexecutor.shutdown();"
              }
            },
            {
              "question": "Configure HikariCP in a Spring Boot application.",
              "answer": "Configure in application.yml for the HikariCP connection pool.",
              "code": {
                "language": "yaml",
                "content": "spring:\n  datasource:\n    url: jdbc:mysql://localhost:3306/db\n    username: user\n    password: pass\n    hikari:\n      maximum-pool-size: 10"
              }
            },
            {
              "question": "Explain Hibernate queries and entity graphs.",
              "answer": "Hibernate queries use HQL or the Criteria API. Entity graphs optimize queries by defining which related entities to fetch.",
              "code": {
                "language": "java",
                "content": "@EntityGraph(attributePaths = {\"address\"})\n@Query(\"SELECT e FROM Employee e WHERE e.id = :id\")\nOptional<Employee> findByIdWithAddress(@Param(\"id\") Long id);"
              }
            },
            {
              "question": "How do you write test cases for controller, service, and repository?",
              "answer": "- Controller: @WebMvcTest\n- Service: @ExtendWith(MockitoExtension.class)\n- Repository: @DataJpaTest",
              "code": {
                "language": "java",
                "content": "// Controller: @WebMvcTest\n// Service: @ExtendWith(MockitoExtension.class) with @Mock\n// Repository: @DataJpaTest"
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
              "answer": "Using @ExceptionHandler in controllers or @ControllerAdvice for global handling.",
              "code": {
                "language": "java",
                "content": "@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleException(Exception e) {\n        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "React",
          "questions": [
            {
              "question": "Difference between vanilla JavaScript and React.",
              "answer": "Vanilla JS is plain JavaScript. React is a library for building UIs with components, state management, and the virtual DOM.",
              "code": null
            },
            {
              "question": "Explain useState and useEffect hooks.",
              "answer": "useState adds state to functional components. useEffect performs side effects like data fetching.",
              "code": {
                "language": "jsx",
                "content": "const [data, setData] = useState([]);\nuseEffect(() => { fetchData().then(setData); }, []);"
              }
            },
            {
              "question": "Write a basic API call using React.",
              "answer": "Use fetch or axios inside useEffect.",
              "code": {
                "language": "jsx",
                "content": "useEffect(() => {\n    fetch('https://api.example.com/data')\n        .then(response => response.json())\n        .then(data => setData(data));\n}, []);"
              }
            }
          ]
        },
        {
          "name": "Pair Programming: Coding Problems",
          "questions": [
            {
              "question": "Develop a UI page to show a list of items in a search page using React.",
              "answer": "Create a component with a search input and a filtered list.",
              "code": {
                "language": "jsx",
                "content": "const ItemList = () => {\n    const [items, setItems] = useState([]);\n    const [searchTerm, setSearchTerm] = useState('');\n\n    useEffect(() => {\n        fetch('http://localhost:8080/api/items')\n            .then(response => response.json())\n            .then(data => setItems(data));\n    }, []);\n\n    const filteredItems = items.filter(item =>\n        item.name.includes(searchTerm)\n    );\n\n    return (\n        <div>\n            <input type=\"text\" placeholder=\"Search\"\n                value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />\n            <ul>{filteredItems.map(item => <li key={item.id}>{item.name}</li>)}</ul>\n        </div>\n    );\n};"
              }
            },
            {
              "question": "Write an API with Spring Boot and use the endpoint in React to show a list.",
              "answer": "Create a Spring Boot REST API with a GET endpoint. The React component fetches and displays the data.",
              "code": {
                "language": "java",
                "content": "@RestController\n@RequestMapping(\"/api/items\")\npublic class ItemController {\n    @GetMapping\n    public List<Item> getAllItems() {\n        return itemService.getAllItems();\n    }\n}"
              }
            }
          ]
        }
      ],
      "questionCount": 20
    }
  ]
};
