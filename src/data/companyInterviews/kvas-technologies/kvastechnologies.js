// AUTO-GENERATED file — company-wise interview data.
// Source: KVAS Technologies interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "kvas-technologies",
  "name": "KVAS Technologies",
  "interviews": [
    {
      "name": "KVASTechnologies",
      "questionCount": 47,
      "rounds": [
        {
          "name": "Technical Interview",
          "questions": [
            {
              "question": "Introduce yourself with a focus on your recent projects and the technologies you've worked with.",
              "answer": "I am BSK, a Java full stack developer with 3 years of experience in building scalable web applications. My recent project involved developing a  abc application  where I focused on the user registration page and transaction data handling. I used ReactJS for the frontend, Spring Boot for the backend, and implemented microservices architecture. My tech stack includes Java, Spring Boot, Hibernate, ReactJS, and MySQL.",
              "code": null
            },
            {
              "question": "Describe a recent task or project you worked on. What challenges did you face and how did you overcome them?",
              "answer": "In my recent project, I worked on a feature to implement real-time transaction monitoring. The challenge was ensuring the system could handle high-frequency transactions without performance degradation. I optimized the database queries, used Redis for caching frequently accessed data, and applied asynchronous processing for non-critical tasks. This improved the system's performance significantly.",
              "code": null
            },
            {
              "question": "Why are you looking for a new job? What motivates your job search?",
              "answer": "I am seeking new opportunities to expand my skill set and work on more challenging projects. I am particularly interested in roles that offer the chance to work with cutting-edge technologies and innovative solutions, which will help me grow both professionally and personally.",
              "code": null
            },
            {
              "question": "Write a code example for Bubble Sort in Java.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public class BubbleSort {\n    public static void main(String[] args) {\n        int[] arr = {3, 5, 1, 0, 4, 6};\n        bubbleSort(arr);\n        for (int num : arr) {\n            System.out.print(num + \" \");\n        }\n    }\n\n    public static void bubbleSort(int[] arr) {\n        int n = arr.length;\n        for (int i = 0; i < n - 1; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    // Swap arr[j] and arr[j+1]\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n            }\n        }\n    }\n}"
              }
            },
            {
              "question": "What is the difference between PUT, PATCH, and POST in RESTful services?",
              "answer": "",
              "code": null
            },
            {
              "question": "PUT: Used to update an existing resource or create a resource if it does not exist. It is idempotent, meaning multiple identical requests should yield the same result.",
              "answer": "",
              "code": null
            },
            {
              "question": "PATCH: Used to apply partial updates to a resource. It is not necessarily idempotent.",
              "answer": "",
              "code": null
            },
            {
              "question": "POST: Used to create a new resource. It is not idempotent, and repeated requests may create multiple resources.",
              "answer": "",
              "code": null
            },
            {
              "question": "If an API takes a long time to respond, how do you handle it in your application?",
              "answer": "To handle long API response times, I would implement asynchronous processing using the @Async annotation in Spring Boot or use techniques like caching, timeout settings, or a circuit breaker pattern to manage delayed responses and prevent performance bottlenecks.",
              "code": null
            },
            {
              "question": "What is the @Async annotation in Spring Boot, and how does it work?",
              "answer": "The @Async annotation in Spring Boot is used to run methods asynchronously in a separate thread. This allows the main thread to continue processing without waiting for the annotated method to complete, improving the application's performance.",
              "code": null
            },
            {
              "question": "How do you write a native query in JPA with Spring Boot?",
              "answer": "A native query in JPA can be written using the @Query annotation with the nativeQuery attribute set to true. For example:",
              "code": {
                "language": "java",
                "content": "@Query(value = \"SELECT * FROM users WHERE email = ?1\", nativeQuery = true)\nUser findByEmail(String email);"
              }
            },
            {
              "question": "Explain what Dependency Injection is in Spring Boot.",
              "answer": "Dependency Injection (DI) in Spring Boot is a design pattern where the framework injects dependencies (objects) into a class rather than the class creating them. This promotes loose coupling and enhances testability and modularity.",
              "code": null
            },
            {
              "question": "Provide an example where Dependency Injection is used in a Spring Boot application.",
              "answer": "In a Spring Boot application, a service class can be injected into a controller using @Autowired:",
              "code": {
                "language": "java",
                "content": "@Service\npublic class UserService {\n    // Business logic\n}\n\n@RestController\npublic class UserController {\n    @Autowired\n    private UserService userService;\n\n    // Controller methods using userService\n}"
              }
            },
            {
              "question": "In which scenarios would you use the @Autowired annotation in Spring Boot?",
              "answer": "The @Autowired annotation is used in Spring Boot to inject dependencies, such as service or repository beans, into a class. It can be used in constructors, setters, or directly on fields.",
              "code": null
            },
            {
              "question": "What are the different bean scopes available in Spring Boot?",
              "answer": "The different bean scopes in Spring Boot are:",
              "code": null
            },
            {
              "question": "Singleton: One instance per Spring container.",
              "answer": "",
              "code": null
            },
            {
              "question": "Prototype: A new instance every time the bean is requested.",
              "answer": "",
              "code": null
            },
            {
              "question": "Request: One instance per HTTP request.",
              "answer": "",
              "code": null
            },
            {
              "question": "Session: One instance per HTTP session.",
              "answer": "",
              "code": null
            },
            {
              "question": "Application: One instance per ServletContext.",
              "answer": "",
              "code": null
            },
            {
              "question": "How does the request-response cycle work in a Spring Boot application?",
              "answer": "In a Spring Boot application, a client sends an HTTP request, which is received by the DispatcherServlet. The request is then routed to the appropriate controller method, which processes the request and returns a response. The response is sent back to the client via the DispatcherServlet.",
              "code": null
            },
            {
              "question": "How does the prototype scope work in Spring Boot?",
              "answer": "In the prototype scope, a new instance of the bean is created each time it is requested from the Spring container. This is useful when you need multiple instances of a bean with different states.",
              "code": null
            },
            {
              "question": "How does the singleton scope work in Spring Boot?",
              "answer": "In the singleton scope, a single instance of the bean is created and shared across the entire Spring container. This is the default scope in Spring Boot and is used when you want a single shared instance.",
              "code": null
            },
            {
              "question": "What are the @Primary and @Qualifier annotations in Spring Boot, and when would you use them?",
              "answer": "",
              "code": null
            },
            {
              "question": "@Primary: Used to indicate the preferred bean when multiple beans of the same type exist.",
              "answer": "",
              "code": null
            },
            {
              "question": "@Qualifier: Used to specify which bean should be injected when multiple beans of the same type exist and @Primary is not sufficient.",
              "answer": "",
              "code": null
            },
            {
              "question": "Explain the different types of relationships in JPA (e.g., One-to-One, One-to-Many, Many-to-One, Many-to-Many).",
              "answer": "",
              "code": null
            },
            {
              "question": "One-to-One: Each entity instance is associated with one instance of another entity.",
              "answer": "",
              "code": null
            },
            {
              "question": "One-to-Many: An entity instance is associated with multiple instances of another entity.",
              "answer": "",
              "code": null
            },
            {
              "question": "Many-to-One: Multiple instances of an entity are associated with one instance of another entity.",
              "answer": "",
              "code": null
            },
            {
              "question": "Many-to-Many: Multiple instances of an entity are associated with multiple instances of another entity.",
              "answer": "",
              "code": null
            },
            {
              "question": "How do you handle exceptions in a Spring Boot application?",
              "answer": "In Spring Boot, exceptions can be handled using @ExceptionHandler in controllers or globally using @ControllerAdvice. This allows for centralized exception handling and custom error responses.",
              "code": null
            },
            {
              "question": "What is the @ControllerAdvice annotation, and how does it work in Spring Boot?",
              "answer": "@ControllerAdvice is used to define global exception handling for Spring MVC controllers. It allows you to write a single piece of code that handles exceptions across all controllers.",
              "code": null
            },
            {
              "question": "What is Aspect-Oriented Programming (AOP), and how is it used in Spring Boot?",
              "answer": "Aspect-Oriented Programming (AOP) allows you to separate cross-cutting concerns (e.g., logging, security) from the business logic. In Spring Boot, AOP is implemented using aspects and advice that can be applied declaratively to methods or classes.",
              "code": null
            },
            {
              "question": "What approaches have you used for authentication in your Spring Boot projects?",
              "answer": "In my projects, I have used JWT (JSON Web Token) for stateless authentication, as well as OAuth2 for secure access. Both approaches provide robust security and are easy to integrate with Spring Security.",
              "code": null
            },
            {
              "question": "How does JWT token-based authentication work in Spring Boot?",
              "answer": "In JWT token-based authentication, a token is generated after a user successfully logs in. This token is then included in the header of subsequent requests to authenticate the user. The server verifies the token's validity and extracts user information from it.",
              "code": null
            },
            {
              "question": "What is role-based authentication, and how do you implement it in Spring Boot?",
              "answer": "Role-based authentication restricts access to certain parts of the application based on user roles. In Spring Boot, it can be implemented using Spring Security by assigning roles to users and securing endpoints with @PreAuthorize or @Secured.",
              "code": null
            },
            {
              "question": "How do you perform health checks in a Spring Boot application?",
              "answer": "Health checks in Spring Boot can be performed using the Actuator module, which provides endpoints like /actuator/health to check the application's health and status.",
              "code": null
            },
            {
              "question": "What is a YAML file in Spring Boot, and how is it used?",
              "answer": "A YAML file in Spring Boot is an alternative to the application.properties file for configuring the application. It\nprovides a more readable and hierarchical way to define configuration settings.",
              "code": null
            },
            {
              "question": "Given a string str and a substring str1, count how many times str1 appears in str.",
              "answer": "",
              "code": null
            },
            {
              "question": "Example Input",
              "answer": "str = \"i am good boy\"\nstr1 = \"am\"",
              "code": null
            },
            {
              "question": "Example Output",
              "answer": "1",
              "code": {
                "language": "java",
                "content": "public class SubstringCount {\n    public static void main(String[] args) {\n        String str = \"i am good boy\";\n        String str1 = \"am\";\n        int count = countOccurrences(str, str1);\n        System.out.println(count);\n    }\n\n    public static int countOccurrences(String str, String subStr) {\n        int count = 0;\n        int index = 0;\n        while ((index = str.indexOf(subStr, index)) != -1) {\n            count++;\n            index += subStr.length();\n        }\n        return count;\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "HR Interview",
          "questions": [
            {
              "question": "Give a self-introduction and explain your project.",
              "answer": "",
              "code": null
            },
            {
              "question": "What tasks did you work on in your last project?",
              "answer": "",
              "code": null
            },
            {
              "question": "What are your salary expectations?",
              "answer": "",
              "code": null
            },
            {
              "question": "Are you interested in learning new technology?",
              "answer": "",
              "code": null
            },
            {
              "question": "Why are you looking for a new job? etc....",
              "answer": "",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 47
};
