// AUTO-GENERATED file — company-wise interview data.
// Source: Synechron interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "synechron",
  "name": "Synechron",
  "interviews": [
    {
      "name": "Synechron",
      "questionCount": 43,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Can you give a brief introduction about yourself, focusing on your recent projects and the technologies you’ve worked with?",
              "answer": "*Answer:*\n\"I am a Java developer with extensive experience in building web applications using Spring Boot and Hibernate. Recently, I worked on a student management system where I implemented a REST API using Spring Boot. The project involved creating and managing student records with features such as validation and exception handling. I used JPA for database interactions and integrated global exception handling to manage validation errors efficiently. This project helped me refine my skills in building robust and scalable applications.\"",
              "code": null
            },
            {
              "question": "What are the key features introduced in Java 8?",
              "answer": "*Answer:*",
              "code": null
            },
            {
              "question": "Lambda Expressions: Allows concise representation of anonymous functions.",
              "answer": "",
              "code": null
            },
            {
              "question": "Functional Interfaces: Interfaces with a single abstract method, used with lambda expressions.",
              "answer": "",
              "code": null
            },
            {
              "question": "Streams API: Enables functional-style operations on collections.",
              "answer": "",
              "code": null
            },
            {
              "question": "Optional Class: A container object that may or may not contain a non-null value.",
              "answer": "",
              "code": null
            },
            {
              "question": "Default Methods: Methods in interfaces with default implementations.",
              "answer": "",
              "code": null
            },
            {
              "question": "Date and Time API: Provides a comprehensive date-time library.",
              "answer": "",
              "code": null
            },
            {
              "question": "Write a Java method to withdraw an amount from an account. If the amount is available, it should be withdrawn; otherwise, throw a custom exception InsufficientBalanceException and handle it appropriately.",
              "answer": "*Answer:*",
              "code": {
                "language": "java",
                "content": "public class BankAccount {\n    private double balance;\n\n    public BankAccount(double balance) {\n        this.balance = balance;\n    }\n\n    public void withdraw(double amount) throws InsufficientBalanceException {\n        if (amount > balance) {\n            throw new InsufficientBalanceException(\"Insufficient balance.\");\n        } else {\n            balance -= amount;\n            System.out.println(\"Withdrawal successful. Remaining balance: \" + balance);\n        }\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n\nclass InsufficientBalanceException extends Exception {\n    public InsufficientBalanceException(String message) {\n        super(message);\n    }\n}"
              }
            },
            {
              "question": "Write a JUnit test case for the withdraw method you just implemented.",
              "answer": "*Answer:*",
              "code": {
                "language": "java",
                "content": "import static org.junit.jupiter.api.Assertions.*;\nimport org.junit.jupiter.api.Test;\n\npublic class BankAccountTest {\n\n    @Test\n    public void testWithdrawSuccess() throws InsufficientBalanceException {\n        BankAccount account = new BankAccount(1000.0);\n        account.withdraw(500.0);\n        assertEquals(500.0, account.getBalance());\n    }\n\n    @Test\n    public void testWithdrawFailure() {\n        BankAccount account = new BankAccount(300.0);\n        assertThrows(InsufficientBalanceException.class, () -> account.withdraw(500.0));\n    }\n}"
              }
            },
            {
              "question": "Using Java 8 Streams, how would you find the frequency of each character in a string?",
              "answer": "*Answer:*",
              "code": {
                "language": "java",
                "content": "import java.util.Map;\nimport java.util.function.Function;\nimport java.util.stream.Collectors;\n\npublic class CharacterFrequency {\n    public static void main(String[] args) {\n        String str = \"Java 8 Streams\";\n        Map<Character, Long> frequencyMap = str.chars()\n                .mapToObj(c -> (char) c)\n                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));\n\n        System.out.println(frequencyMap);\n    }\n}"
              }
            },
            {
              "question": "Have you completed any certifications? If so, which ones, and how have they helped you in your career?",
              "answer": "*Answer:*\n\"I have completed certifications in Java SE 8 Programmer and Spring Professional. These certifications enhanced my understanding of core Java concepts and the Spring framework, which has been instrumental in my ability to build scalable and maintainable applications. The certifications provided me with deeper insights into Java 8 features and Spring Boot best practices, which I apply in my projects to deliver high-quality software.\"",
              "code": null
            },
            {
              "question": "Which framework are you using to write test cases in your projects?",
              "answer": "*Answer:*\n\"I use JUnit 5 for writing test cases, along with Mockito for mocking dependencies. JUnit 5 offers advanced features and better flexibility compared to its predecessors, and Mockito helps in isolating the units of code during testing.\"",
              "code": null
            },
            {
              "question": "Can you explain the architecture and data flow of Spring MVC?",
              "answer": "*Answer:*",
              "code": null
            },
            {
              "question": "Model: Represents the data and business logic. Managed by Spring, often using JPA entities.",
              "answer": "",
              "code": null
            },
            {
              "question": "View: The presentation layer that displays data. Implemented using technologies like JSP or Thymeleaf.",
              "answer": "",
              "code": null
            },
            {
              "question": "Controller: Handles incoming requests, processes them, and returns a view or data. Acts as an intermediary between Model and View.",
              "answer": "",
              "code": null
            },
            {
              "question": "DispatcherServlet: The central servlet that handles all incoming requests and routes them to appropriate controllers.",
              "answer": "",
              "code": null
            },
            {
              "question": "Flow: The user makes a request -> DispatcherServlet forwards it to the controller -> Controller interacts with the model and returns a view name -> DispatcherServlet resolves the view and sends the response to the user.",
              "answer": "",
              "code": null
            },
            {
              "question": "How does JWT token-based authentication work?",
              "answer": "*Answer:*",
              "code": null
            },
            {
              "question": "User Authentication: User logs in with credentials, and the server validates them.",
              "answer": "",
              "code": null
            },
            {
              "question": "Token Generation: Upon successful login, the server generates a JWT containing user information and signs it with a secret key.",
              "answer": "",
              "code": null
            },
            {
              "question": "Token Storage: The client stores the JWT, typically in local storage or cookies.",
              "answer": "",
              "code": null
            },
            {
              "question": "Token Usage: For subsequent requests, the client sends the JWT in the Authorization header.",
              "answer": "",
              "code": null
            },
            {
              "question": "Token Validation: The server verifies the token's signature and expiration. If valid, it processes the request; otherwise, it rejects it.",
              "answer": "",
              "code": null
            },
            {
              "question": "Why is REST API considered stateless?",
              "answer": "*Answer:*\n- REST APIs are stateless because each request from the client must contain all the necessary information for the server to fulfill the request. The server does not store any session state between requests. This allows for scalability and simplicity, as the server does not need to keep track of client states.",
              "code": null
            },
            {
              "question": "Create a Spring Boot project using Spring Initializer. Implement two APIs (GET and POST) and handle exceptions in the project.",
              "answer": "",
              "code": null
            },
            {
              "question": "Controller",
              "answer": "",
              "code": null
            },
            {
              "question": "Service",
              "answer": "",
              "code": null
            },
            {
              "question": "Repository",
              "answer": "",
              "code": null
            },
            {
              "question": "Entity",
              "answer": "",
              "code": null
            },
            {
              "question": "Exception Handling",
              "answer": "",
              "code": null
            },
            {
              "question": "Application Properties",
              "answer": "",
              "code": null
            },
            {
              "question": "Create a Spring Boot Project Using Spring Initializer",
              "answer": "",
              "code": null
            },
            {
              "question": "Go to Spring Initializer: Open Spring Initializr (https://start.spring.io/).",
              "answer": "",
              "code": null
            },
            {
              "question": "Project Setup",
              "answer": "Project: Maven Project\nLanguage: Java\nSpring Boot Version: 3.x.x\nGroup: com.example\nArtifact: demo\nName: demo\nPackage Name: com.example.demo\nPackaging: Jar\nJava Version: 17",
              "code": null
            },
            {
              "question": "Dependencies",
              "answer": "Spring Web\nSpring Boot DevTools\nSpring Data JPA\nH2 Database",
              "code": null
            },
            {
              "question": "Generate the Project: Click \"Generate\" to download the project as a ZIP file.",
              "answer": "",
              "code": null
            },
            {
              "question": "Import into IDE: Extract the ZIP file and import it into your IDE.",
              "answer": "",
              "code": null
            },
            {
              "question": "Project Code",
              "answer": "Create the Student entity class:\nCreate the StudentRepository interface:\nCreate the StudentService interface and its implementation:\nStudentService Interface:\nStudentService Implementation:\nCreate the StudentController class:\nCreate global exception handling for validation errors:\nConfigure H2 database and server port in application.properties:\nYour main application class should look like this:",
              "code": {
                "language": "java",
                "content": "package com.example.demo;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class DemoApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n}"
              }
            },
            {
              "question": "Running the Application",
              "answer": "",
              "code": null
            },
            {
              "question": "Run",
              "answer": "the application by executing the main method in the DemoApplication class.",
              "code": null
            },
            {
              "question": "Test the APIs",
              "answer": "using tools like Postman or curl:\nGET: /api/students - Retrieves all students.\nPOST: /api/students - Creates a new student. Use JSON body like {\"name\": \"John Doe\", \"age\": 22}.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 43
};
