// AUTO-GENERATED file — company-wise interview data.
// Source: Ford Motor interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "ford-motor",
  "name": "Ford Motor",
  "interviews": [
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
  "questionCount": 25
};
