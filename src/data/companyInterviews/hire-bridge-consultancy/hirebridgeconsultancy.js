// AUTO-GENERATED file — company-wise interview data.
// Source: Hire Bridge Consultancy interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "hire-bridge-consultancy",
  "name": "Hire Bridge Consultancy",
  "interviews": [
    {
      "name": "HireBridgeConsultancy",
      "questionCount": 17,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Explain your project briefly.",
              "answer": "My project involves building a real-time banking application for customer registration and transaction processing, using technologies like Spring Boot, React, microservices, and MySQL.\n- Core functionality includes account management, secure transaction handling, and customer onboarding\n- I was responsible for backend API development, database design, and integration with the frontend",
              "code": null
            },
            {
              "question": "Given an array of integers and a number 'sum', print all pairs in the array whose sum equals 'sum'.",
              "answer": "Use a HashMap to store the frequency of numbers. For each element, find its complement — if the complement exists in the map, print a pair for each occurrence.\n- Time: O(n), Space: O(n)\n- Example: arr=[1,5,7,-1,5], sum=6 → Output: (5,1), (1,5), (7,-1), (-1,7)",
              "code": {
                "language": "java",
                "content": "public class PairSum {\n    public static void main(String[] args) {\n        int[] arr = {1, 5, 7, -1, 5};\n        int exp = 6;\n        Map<Integer, Integer> map = new LinkedHashMap<>();\n        for (int i = 0; i < arr.length; i++) {\n            int e = arr[i];\n            int dif = exp - e;\n            if (map.containsKey(dif)) {\n                for (int j = 1; j <= map.get(dif); j++) {\n                    System.out.println(\"(\" + dif + \",\" + e + \")\");\n                }\n            }\n            map.put(e, map.getOrDefault(e, 0) + 1);\n        }\n    }\n}\n// Output: (5,1), (1,5), (5,1), (7,-1), (-1,7)"
              }
            },
            {
              "question": "Design a table structure for books and members.",
              "answer": "Design the following tables:\n- Books (BookID PK, Title, AuthorID FK)\n- Authors (AuthorID PK, Name)\n- Members (MemberID PK, Name)\n- Borrowing (BorrowID PK, MemberID FK, BookID FK, BorrowDate, DueDate, ReturnDate)",
              "code": {
                "language": "sql",
                "content": "CREATE TABLE Authors (\n    AuthorID INT PRIMARY KEY,\n    Name VARCHAR(100)\n);\n\nCREATE TABLE Books (\n    BookID INT PRIMARY KEY,\n    Title VARCHAR(200),\n    AuthorID INT,\n    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)\n);\n\nCREATE TABLE Members (\n    MemberID INT PRIMARY KEY,\n    Name VARCHAR(100)\n);\n\nCREATE TABLE Borrowing (\n    BorrowID INT PRIMARY KEY,\n    MemberID INT,\n    BookID INT,\n    BorrowDate DATE,\n    DueDate DATE,\n    ReturnDate DATE,\n    FOREIGN KEY (MemberID) REFERENCES Members(MemberID),\n    FOREIGN KEY (BookID) REFERENCES Books(BookID)\n);"
              }
            },
            {
              "question": "How do you write a query to get data for a specific page in a database?",
              "answer": "Use LIMIT and OFFSET for pagination.",
              "code": {
                "language": "sql",
                "content": "SELECT * FROM employees LIMIT 10 OFFSET 20;\n-- This fetches 10 records starting from the 21st record"
              }
            },
            {
              "question": "What happens if an exception is thrown in a method? Explain with code example.",
              "answer": "When an exception is thrown, it disrupts the normal program flow. If not caught, the method terminates and the exception propagates to the calling method. Use try-catch to handle it.",
              "code": {
                "language": "java",
                "content": "public class ExceptionExample {\n    public static void main(String[] args) {\n        try {\n            divide(10, 0);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Caught Exception: \" + e);\n        }\n    }\n\n    public static int divide(int a, int b) throws ArithmeticException {\n        return a / b; // Throws ArithmeticException if b is 0\n    }\n}"
              }
            },
            {
              "question": "How do you store unique employee names in a Map in Java?",
              "answer": "Use a HashMap with the employee name as the key — this ensures uniqueness by key.",
              "code": {
                "language": "java",
                "content": "Map<String, Employee> employeeMap = new HashMap<>();\nemployeeMap.put(\"John\", new Employee(\"John\"));\nemployeeMap.put(\"Alice\", new Employee(\"Alice\"));\n// Duplicate key will overwrite the existing value"
              }
            },
            {
              "question": "How do you sort a list of employees based on employee names?",
              "answer": "Use Comparator.comparing with a method reference.",
              "code": {
                "language": "java",
                "content": "List<Employee> employees = new ArrayList<>();\nemployees.add(new Employee(\"John\"));\nemployees.add(new Employee(\"Alice\"));\nemployees.sort(Comparator.comparing(Employee::getName));"
              }
            },
            {
              "question": "What is dependency injection?",
              "answer": "Dependency injection is a design pattern used in Spring to manage object dependencies by injecting them at runtime rather than defining them manually in code.\n- Promotes loose coupling and testability",
              "code": null
            },
            {
              "question": "Give an example of dependency injection in Spring Boot.",
              "answer": "Use @Autowired to inject the service dependency into the controller via constructor injection.",
              "code": {
                "language": "java",
                "content": "@Service\npublic class EmployeeService {\n    public String getEmployee() {\n        return \"Employee Details\";\n    }\n}\n\n@RestController\npublic class EmployeeController {\n    private final EmployeeService employeeService;\n\n    @Autowired\n    public EmployeeController(EmployeeService employeeService) {\n        this.employeeService = employeeService;\n    }\n\n    @GetMapping(\"/employee\")\n    public String getEmployee() {\n        return employeeService.getEmployee();\n    }\n}"
              }
            },
            {
              "question": "How do you pass dependency from controller to service in Spring Boot?",
              "answer": "Pass the service class dependency to the controller using the @Autowired annotation — Spring injects the service object at runtime.",
              "code": {
                "language": "java",
                "content": "@RestController\npublic class MyController {\n    @Autowired\n    private MyService myService;\n}"
              }
            },
            {
              "question": "List some common Spring Boot annotations.",
              "answer": "- @SpringBootApplication: entry point\n- @Autowired: inject dependencies\n- @RestController: REST controller\n- @Service: service layer\n- @Repository: DAO layer\n- @GetMapping, @PostMapping: HTTP method mappings",
              "code": null
            },
            {
              "question": "How do you retrieve database data based on a particular page in Spring Boot?",
              "answer": "Use Pageable from Spring Data JPA with PageRequest.",
              "code": {
                "language": "java",
                "content": "Pageable pageable = PageRequest.of(pageNumber, pageSize);\nPage<Employee> employees = employeeRepository.findAll(pageable);"
              }
            },
            {
              "question": "How do you handle the application.properties file in Spring Boot?",
              "answer": "application.properties is used for configuring application settings like database connections, server ports, and environment properties. Access values using @Value or @ConfigurationProperties.",
              "code": {
                "language": "properties",
                "content": "# application.properties\nserver.port=8080\nspring.datasource.url=jdbc:mysql://localhost:3306/db\n\n# Access in code\n@Value(\"${server.port}\")\nprivate int port;"
              }
            },
            {
              "question": "How do you develop code using a Git repository?",
              "answer": "- Clone the repository using git clone\n- Create a branch using git checkout -b new-branch\n- Make changes and commit using git commit\n- Push the branch using git push\n- Create a pull request to merge the changes",
              "code": {
                "language": "bash",
                "content": "git clone <repo-url>\ngit checkout -b feature-branch\ngit add .\ngit commit -m \"message\"\ngit push origin feature-branch"
              }
            },
            {
              "question": "How do you deploy your project?",
              "answer": "- Build the project using mvn clean install\n- Deploy the generated .jar or .war file to a server (Tomcat, AWS, Kubernetes)\n- Use CI/CD pipelines for continuous deployment",
              "code": {
                "language": "bash",
                "content": "mvn clean install\njava -jar target/app.jar\n# Or deploy to a cloud platform"
              }
            },
            {
              "question": "Which cloud are you using for deployment?",
              "answer": "I am using AWS (Amazon Web Services), utilizing services like Elastic Beanstalk, EC2, or Kubernetes for application hosting.",
              "code": null
            },
            {
              "question": "How do you communicate between two microservices?",
              "answer": "Microservices communicate using:\n- REST APIs via HTTP requests\n- Message brokers like RabbitMQ, Kafka for asynchronous communication\n- Feign clients in Spring Boot for simplified HTTP calls",
              "code": {
                "language": "java",
                "content": "// REST API\nRestTemplate rest = new RestTemplate();\nUser user = rest.getForObject(\"http://user-service/users/1\", User.class);\n\n// Feign Client\n@FeignClient(\"user-service\")\npublic interface UserClient {\n    @GetMapping(\"/users/{id}\")\n    User getUser(@PathVariable Long id);\n}\n\n// Kafka\n@KafkaListener(topics = \"user-events\")\npublic void handleEvent(UserEvent event) { }"
              }
            }
          ]
        }
      ]
    }
  ]
};
