// AUTO-GENERATED file — company-wise interview data.
// Source: Synechron interview document(s).
// Do not edit manually — regenerate with: node scripts/_build-synechron.cjs

export const company = {
  "id": "synechron",
  "name": "Synechron",
  "interviews": [
    {
      "name": "Synechron",
      "questionCount": 11,
      "rounds": [
        {
          "name": "Technical Interview",
          "questions": [
            {
              "question": "Can you give a brief introduction about yourself, focusing on your recent projects and the technologies you've worked with?",
              "answer": "I am a Java developer with extensive experience in building web applications using Spring Boot and Hibernate. Recently, I worked on a student management system where I implemented a REST API using Spring Boot. The project involved creating and managing student records with features such as validation and exception handling. I used JPA for database interactions and integrated global exception handling to manage validation errors efficiently. This project helped me refine my skills in building robust and scalable applications.",
              "code": null
            },
            {
              "question": "What are the key features introduced in Java 8?",
              "answer": "Lambda Expressions for concise anonymous functions, Functional Interfaces with single abstract method, Streams API for functional-style operations on collections, Optional Class to avoid null values, Default Methods in interfaces, and new Date and Time API.",
              "code": null
            },
            {
              "question": "Write a Java method to withdraw an amount from an account. If amount is available, withdraw; otherwise, throw custom exception InsufficientBalanceException and handle it.",
              "answer": "Create BankAccount class with withdraw method that checks balance. If insufficient, throw custom exception.",
              "code": {
                "language": "java",
                "content": "public class BankAccount {\n    private double balance;\n    public BankAccount(double balance) { this.balance = balance; }\n    public void withdraw(double amount) throws InsufficientBalanceException {\n        if (amount > balance) {\n            throw new InsufficientBalanceException(\"Insufficient balance.\");\n        } else {\n            balance -= amount;\n            System.out.println(\"Withdrawal successful. Remaining balance: \" + balance);\n        }\n    }\n    public double getBalance() { return balance; }\n}\nclass InsufficientBalanceException extends Exception {\n    public InsufficientBalanceException(String message) { super(message); }\n}"
              }
            },
            {
              "question": "Write a JUnit test case for the withdraw method.",
              "answer": "Use JUnit 5 with @Test annotation. Test success and failure scenarios.",
              "code": {
                "language": "java",
                "content": "import static org.junit.jupiter.api.Assertions.*;\nimport org.junit.jupiter.api.Test;\npublic class BankAccountTest {\n    @Test\n    public void testWithdrawSuccess() throws InsufficientBalanceException {\n        BankAccount account = new BankAccount(1000.0);\n        account.withdraw(500.0);\n        assertEquals(500.0, account.getBalance());\n    }\n    @Test\n    public void testWithdrawFailure() {\n        BankAccount account = new BankAccount(300.0);\n        assertThrows(InsufficientBalanceException.class, () -> account.withdraw(500.0));\n    }\n}"
              }
            },
            {
              "question": "Using Java 8 Streams, how would you find the frequency of each character in a string?",
              "answer": "Use chars() to convert string to IntStream, mapToObj to Character, group by with counting.",
              "code": {
                "language": "java",
                "content": "import java.util.Map;\nimport java.util.function.Function;\nimport java.util.stream.Collectors;\npublic class CharacterFrequency {\n    public static void main(String[] args) {\n        String str = \"Java 8 Streams\";\n        Map<Character, Long> frequencyMap = str.chars()\n            .mapToObj(c -> (char) c)\n            .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));\n        System.out.println(frequencyMap);\n    }\n}"
              }
            },
            {
              "question": "Have you completed any certifications? If so, which ones, and how have they helped you in your career?",
              "answer": "I have completed certifications in Java SE 8 Programmer and Spring Professional. These certifications enhanced my understanding of core Java concepts and the Spring framework, which has been instrumental in my ability to build scalable and maintainable applications.",
              "code": null
            },
            {
              "question": "Which framework are you using to write test cases in your projects?",
              "answer": "I use JUnit 5 for writing test cases, along with Mockito for mocking dependencies. JUnit 5 offers advanced features and better flexibility, and Mockito helps in isolating the units of code during testing.",
              "code": null
            },
            {
              "question": "Can you explain the architecture and data flow of Spring MVC?",
              "answer": "Model: Represents data and business logic. View: Presentation layer. Controller: Handles incoming requests. DispatcherServlet: Central servlet routing requests. Flow: User request -> DispatcherServlet -> Controller -> Model -> View -> Response.",
              "code": null
            },
            {
              "question": "How does JWT token-based authentication work?",
              "answer": "User Authentication -> Token Generation (JWT with user info and signature) -> Token Storage (client stores token) -> Token Usage (sent in Authorization header) -> Token Validation (server verifies signature and expiration).",
              "code": null
            },
            {
              "question": "Why is REST API considered stateless?",
              "answer": "REST APIs are stateless because each request must contain all necessary information for the server to fulfill it. The server does not store any session state between requests, allowing for scalability and simplicity.",
              "code": null
            },
            {
              "question": "Create a Spring Boot project using Spring Initializer. Implement two APIs (GET and POST) and handle exceptions in the project.",
              "answer": "Create Spring Boot project with Spring Web, Spring Data JPA, H2 Database. Implement Entity (Student), Repository, Service, Controller with GET and POST endpoints. Add GlobalExceptionHandler for validation errors.",
              "code": {
                "language": "java",
                "content": "@RestController\n@RequestMapping(\"/api/students\")\npublic class StudentController {\n    @GetMapping\n    public ResponseEntity<List<Student>> getAllStudents() {\n        return new ResponseEntity<>(studentService.getAllStudents(), HttpStatus.OK);\n    }\n    @PostMapping\n    public ResponseEntity<Student> createStudent(@Valid @RequestBody Student student) {\n        return new ResponseEntity<>(studentService.saveStudent(student), HttpStatus.CREATED);\n    }\n}\n\n@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<Map<String, String>> handleValidationException(MethodArgumentNotValidException ex) {\n        Map<String, String> errors = new LinkedHashMap<>();\n        ex.getBindingResult().getFieldErrors().forEach(error -> {\n            errors.put(error.getField(), error.getDefaultMessage());\n        });\n        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 11
};
