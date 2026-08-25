// AUTO-GENERATED file — company-wise interview data.
// Source: Hire Bridge Consultancy interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "hire-bridge-consultancy",
  "name": "Hire Bridge Consultancy",
  "interviews": [
    {
      "name": "HireBridgeConsultancy",
      "questionCount": 24,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Explain your project briefly.",
              "answer": "My project involves [describe your project here], utilizing technologies such as Spring Boot, React, microservices, and databases. The core functionality includes [key features], and I was responsible for [your role].",
              "code": null
            },
            {
              "question": "Given an array of integers and a number ‘sum’, print all pairs in the array whose sum equals ‘sum’.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public class PairSum {\n    public static void main(String[] args) {\n        int[] arr = {1, 5, 7, -1, 5};\n        int exp = 6;\n\t\tMap<Integer,Integer> map=new LinkedHashMap<>();\n\t\t  for(int i=0;i<arr.length;i++) {\n\t\t\tint e=arr[i];\n\t\t\tint dif=exp-e;\n\t\t\tif(map.containsKey(dif)) {\n\t\t\t\tfor(int j=1;j<=map.get(dif);j++)\n\t\t\t  \tSystem.out.println(\"(\"+dif+\",\"+e+\")\");\t\t\n\t\t\t}\n\t\t\tmap.put(e,map.getOrDefault(e,0)+1);\n    }\n}"
              }
            },
            {
              "question": "Design a table structure for books and members",
              "answer": "",
              "code": null
            },
            {
              "question": "Books Table",
              "answer": "- BookID (Primary Key)\n- Title\n- AuthorID (Foreign Key)",
              "code": null
            },
            {
              "question": "Authors Table",
              "answer": "- AuthorID (Primary Key)\n- Name",
              "code": null
            },
            {
              "question": "Members Table",
              "answer": "- MemberID (Primary Key)\n- Name",
              "code": null
            },
            {
              "question": "Borrowing Table",
              "answer": "- BorrowID (Primary Key)\n- MemberID (Foreign Key)\n- BookID (Foreign Key)\n- BorrowDate\n- DueDate\n- ReturnDate",
              "code": null
            },
            {
              "question": "What happens if an exception is thrown in a method? Explain with a code example.",
              "answer": "When an exception is thrown in a method, it disrupts the normal flow of the program. If the exception is not caught, the method terminates and the exception is propagated to the calling method.",
              "code": {
                "language": "java",
                "content": "public class ExceptionExample {\n    public static void main(String[] args) {\n        try {\n            divide(10, 0);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Caught Exception: \" + e);\n        }\n    }\n\n    public static int divide(int a, int b) throws ArithmeticException {\n        return a / b;  // This will throw ArithmeticException if b is 0\n    }\n}"
              }
            },
            {
              "question": "What is dependency injection?",
              "answer": "Dependency injection is a design pattern used in Spring to manage object dependencies by injecting them at runtime rather than defining them manually in code. It promotes loose coupling and testability.",
              "code": null
            },
            {
              "question": "Give an example of dependency injection in Spring Boot.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "@Service\npublic class EmployeeService {\n    public String getEmployee() {\n        return \"Employee Details\";\n    }\n}\n\n@RestController\npublic class EmployeeController {\n    private final EmployeeService employeeService;\n\n    @Autowired\n    public EmployeeController(EmployeeService employeeService) {\n        this.employeeService = employeeService;\n    }\n\n    @GetMapping(\"/employee\")\n    public String getEmployee() {\n        return employeeService.getEmployee();\n    }\n}"
              }
            },
            {
              "question": "How do you pass dependency from the controller to the service in Spring Boot?",
              "answer": "You pass the service class dependency to the controller class by using the @Autowired annotation in Spring Boot. This allows Spring to inject the service object at runtime.",
              "code": null
            },
            {
              "question": "List some common Spring Boot annotations.",
              "answer": "- @SpringBootApplication: Entry point for Spring Boot applications.\n- @Autowired: Inject dependencies automatically.\n- @RestController: Combines @Controller and @ResponseBody.\n- @Service: Marks a class as a service provider.\n- @Repository: Marks a class as a DAO.\n- @GetMapping, @PostMapping: Used for handling HTTP GET/POST requests.",
              "code": null
            },
            {
              "question": "How do you store unique employee names in a Map in Java?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "Map<String, Employee> employeeMap = new HashMap<>();\nemployeeMap.put(\"John\", new Employee(\"John\"));\nemployeeMap.put(\"Alice\", new Employee(\"Alice\"));\n// Ensure employee names are unique when inserting into the map."
              }
            },
            {
              "question": "How do you sort a list of employees based on employee names?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "List<Employee> employees = new ArrayList<>();\nemployees.add(new Employee(\"John\"));\nemployees.add(new Employee(\"Alice\"));\n\nemployees.sort(Comparator.comparing(Employee::getName));"
              }
            },
            {
              "question": "How do you retrieve database data based on a particular page in Spring Boot?",
              "answer": "You can use Pageable from Spring Data JPA to retrieve data based on pagination:",
              "code": {
                "language": "java",
                "content": "Pageable pageable = PageRequest.of(pageNumber, pageSize);\nPage<Employee> employees = employeeRepository.findAll(pageable);"
              }
            },
            {
              "question": "How do you write a query to get data for a specific page in a database?",
              "answer": "This will fetch 10 records starting from the 21st record (for pagination).",
              "code": {
                "language": "sql",
                "content": "SELECT * FROM employees LIMIT 10 OFFSET 20;"
              }
            },
            {
              "question": "How do you deploy your project?",
              "answer": "- Build the project using mvn clean install.\n- Deploy the generated .jar or .war file to a server (Tomcat, cloud platform like AWS, or Kubernetes).\n- Use CI/CD pipelines for continuous deployment.",
              "code": null
            },
            {
              "question": "How do you develop code using a Git repository?",
              "answer": "1. Clone the repository using git clone.\n2. Create a new branch using git checkout -b new-branch.\n3. Make changes and commit them using git commit.\n4. Push the branch using git push.\n5. Create a pull request to merge the changes.",
              "code": null
            },
            {
              "question": "How do you handle the application.properties file in Spring Boot?",
              "answer": "The application.properties file is used for configuring your Spring Boot application, such as database configurations, server ports, and other environment-specific properties. You can access these properties using @Value or @ConfigurationProperties annotations.",
              "code": null
            },
            {
              "question": "Which cloud are you using for deployment?",
              "answer": "I am using [AWS/Azure/GCP] for deployment, utilizing services like Elastic Beanstalk, EC2, or Kubernetes for application hosting.",
              "code": null
            },
            {
              "question": "How do you communicate between two microservices?",
              "answer": "Microservices can communicate using:",
              "code": null
            },
            {
              "question": "REST APIs: (via HTTP requests).",
              "answer": "",
              "code": null
            },
            {
              "question": "Message brokers: like RabbitMQ, Kafka for asynchronous communication.",
              "answer": "",
              "code": null
            },
            {
              "question": "Feign clients: in Spring Boot for simplified HTTP client calls between services.",
              "answer": "",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 24
};
