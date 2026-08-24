// AUTO-GENERATED file — company-wise interview data.
// Source: Contus Tech (walk_in) interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "contus-tech-walk-in",
  "name": "Contus Tech (walk_in)",
  "interviews": [
    {
      "name": "ContusTech",
      "questionCount": 53,
      "rounds": [
        {
          "name": "First Round",
          "questions": [
            {
              "question": "Assessment - Spring Boot Application",
              "answer": "",
              "code": null
            }
          ]
        },
        {
          "name": "Technical Round",
          "questions": [
            {
              "question": "Java Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "What is the purpose of the intern method in Java?",
              "answer": "- The intern method ensures that all instances of a string with the same content share the same memory location. It returns a canonical representation of the string, which is useful for memory optimization and string comparison.",
              "code": null
            },
            {
              "question": "Explain the internal working process of HashMap.",
              "answer": "- HashMap uses a hash table to store key-value pairs. It calculates a hash code for each key and uses it to determine the index in an internal array. Collisions are handled using linked lists or balanced trees. When the load factor exceeds a threshold, the map is resized and rehashed.",
              "code": null
            },
            {
              "question": "What is the difference between mutable and immutable objects?",
              "answer": "- Mutable objects can be changed after they are created (e.g., ArrayList). Immutable objects cannot be changed after creation (e.g., String).",
              "code": null
            },
            {
              "question": "Why is String immutable in Java?",
              "answer": "- String is immutable for security, synchronization, and performance reasons. Immutable objects are inherently thread-safe and allow the reuse of string literals.",
              "code": null
            },
            {
              "question": "How can you create a mutable String?",
              "answer": "- Use StringBuilder or StringBuffer, which are mutable versions of String.",
              "code": {
                "language": "java",
                "content": "StringBuilder sb = new StringBuilder(\"Hello\");\nsb.append(\" World\");\nString result = sb.toString(); // \"Hello World\""
              }
            },
            {
              "question": "What is a marker interface?",
              "answer": "- A marker interface is an interface with no methods or fields. It is used to indicate or mark a class for a specific purpose (e.g., Serializable, Cloneable).",
              "code": null
            },
            {
              "question": "What is a functional interface?",
              "answer": "- A functional interface has exactly one abstract method and may have multiple default or static methods. It is used as a target for lambda expressions and method references.",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\npublic interface MyFunctionalInterface {\n    void doSomething();\n}"
              }
            },
            {
              "question": "What happens if a class contains two methods with the same name?",
              "answer": "- If the methods have different parameter lists, it is method overloading. If the methods have the same parameter list, it causes a compilation error.",
              "code": null
            },
            {
              "question": "What is a default method in Java?",
              "answer": "- A default method in an interface provides a default implementation. It allows you to add new methods to interfaces without breaking existing implementations.",
              "code": {
                "language": "java",
                "content": "public interface MyInterface {\n    default void defaultMethod() {\n        System.out.println(\"Default method\");\n    }\n}"
              }
            },
            {
              "question": "How can we access an instance variable inside a static method? (Code)",
              "answer": "- Instance variables cannot be accessed directly from static methods. You need to create an instance of the class to access them.",
              "code": {
                "language": "java",
                "content": "public class MyClass {\n    private int instanceVar = 10;\n\n    public static void staticMethod() {\n        MyClass obj = new MyClass();\n        System.out.println(obj.instanceVar);\n    }\n}"
              }
            },
            {
              "question": "Explain the concept of a linked list",
              "answer": "- A linked list is a data structure where each element (node) contains a reference to the next node. It allows efficient insertion and deletion operations.",
              "code": null
            },
            {
              "question": "What is the difference between LinkedList and ArrayList in Java?",
              "answer": "- ArrayList is backed by a dynamic array, providing O(1) time complexity for access but O(n) for insertions and deletions. LinkedList is backed by a doubly linked list, providing O(1) time complexity for insertions and deletions but O(n) for access.",
              "code": null
            },
            {
              "question": "Spring Boot Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "How to use two different databases in a single Spring Boot project?",
              "answer": "- Configure multiple DataSource beans and specify the database details in application.properties or application.yml. Use @Primary annotation to mark the default DataSource.",
              "code": {
                "language": "java",
                "content": "@Bean\n@Primary\n@ConfigurationProperties(prefix = \"spring.datasource.primary\")\npublic DataSource primaryDataSource() {\n    return DataSourceBuilder.create().build();\n}\n\n@Bean\n@ConfigurationProperties(prefix = \"spring.datasource.secondary\")\npublic DataSource secondaryDataSource() {\n    return DataSourceBuilder.create().build();\n}"
              }
            },
            {
              "question": "How to handle exceptions in Spring Boot?",
              "answer": "- Use @ControllerAdvice to handle exceptions globally. Create methods with @ExceptionHandler to handle specific exceptions.",
              "code": {
                "language": "java",
                "content": "@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleException(Exception ex) {\n        return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);\n    }\n}"
              }
            },
            {
              "question": "How to handle a NullPointerException in Spring Boot?",
              "answer": "- Use @ExceptionHandler within a @ControllerAdvice to catch NullPointerException and return an appropriate response.",
              "code": {
                "language": "java",
                "content": "@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(NullPointerException.class)\n    public ResponseEntity<String> handleNullPointerException(NullPointerException ex) {\n        return new ResponseEntity<>(\"Null pointer exception occurred\", HttpStatus.BAD_REQUEST);\n    }\n}"
              }
            },
            {
              "question": "How to fetch a list of DTO data?",
              "answer": "- Use a repository method to fetch data and map it to DTOs.",
              "code": {
                "language": "java",
                "content": "@Repository\npublic interface MyRepository extends JpaRepository<MyEntity, Long> {\n    @Query(\"SELECT new com.example.dto.MyDTO(e.field1, e.field2) FROM MyEntity e\")\n    List<MyDTO> fetchAllDTOs();\n}"
              }
            },
            {
              "question": "How to provide access to a third-party client in Spring Boot?",
              "answer": "- Use OAuth or JWT for authentication. Configure security settings to handle access tokens and permissions.",
              "code": null
            },
            {
              "question": "How to enable CORS and where do you write the logic",
              "answer": "- Use @CrossOrigin annotation on controllers or configure it globally.",
              "code": {
                "language": "java",
                "content": "@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    @Override\n    public void addCorsMappings(CorsRegistry registry) {\n        registry.addMapping(\"/**\").allowedOrigins(\"http://example.com\");\n    }\n}"
              }
            },
            {
              "question": "How to enable centralized cross-policy?",
              "answer": "- Use @ControllerAdvice to handle cross-cutting concerns like error handling or logging.",
              "code": null
            },
            {
              "question": "What is the difference between JWT and OAuth?",
              "answer": "- JWT (JSON Web Token) is a token format used for securely transmitting information between parties. OAuth is an authorization framework that uses tokens (like JWT) for securing API access.",
              "code": null
            },
            {
              "question": "Explain the internal working process of JWT",
              "answer": "- JWT consists of a header, payload, and signature. The header and payload are base64-encoded and the signature is created using a secret key. It is used for stateless authentication.",
              "code": null
            },
            {
              "question": "What is Spring Security?",
              "answer": "- Spring Security is a framework that provides comprehensive security services for Java applications, including authentication, authorization, and protection against common security vulnerabilities.",
              "code": null
            },
            {
              "question": "What is the use of beans and where do you use them in your application?",
              "answer": "- Beans are managed objects within the Spring container. They are used for dependency injection and are configured in the application context.",
              "code": null
            },
            {
              "question": "What is the difference between @Component, @Service, @Repository, and @Controller, and what is the use of each?",
              "answer": "- @Component: Generic stereotype for any Spring-managed component.\n- @Service: Specialized component for service layer logic.\n- @Repository: Specialized component for data access logic.\n- @Controller: Specialized component for web controllers.",
              "code": null
            },
            {
              "question": "If you use @Service in place of @Controller, will it work or not?",
              "answer": "- It will work but is not recommended. @Service is for service layer beans, while @Controller is for handling web requests. Using the wrong annotation may lead to incorrect behavior or misconfigured components.",
              "code": null
            },
            {
              "question": "What are the different types of Spring Security?",
              "answer": "- Basic Authentication\n- Form-based Authentication\n- OAuth2\n- JWT-based Authentication",
              "code": null
            },
            {
              "question": "Where are you validating the JWT token in your project?",
              "answer": "- JWT tokens are typically validated in a custom filter or within a security configuration class.",
              "code": null
            },
            {
              "question": "What architecture are you using to develop your project?",
              "answer": "- Describe the architecture such as Microservices, Monolithic, Layered Architecture, etc.",
              "code": null
            },
            {
              "question": "How to sort a list of data based on a field using JPA inbuilt methods?",
              "answer": "- Use JpaRepository methods like findAll(Sort sort).",
              "code": {
                "language": "java",
                "content": "List<MyEntity> findAll(Sort sort);"
              }
            },
            {
              "question": "How to fetch and sort a list of DTO data in Spring Boot?",
              "answer": "- Use repository methods with sorting options or fetch data and sort manually in service layer.",
              "code": {
                "language": "java",
                "content": "@Query(\"SELECT new com.example.dto.MyDTO(e.field1, e.field2) FROM MyEntity e ORDER BY e.field1\")\nList<MyDTO> fetchAndSortDTOs();"
              }
            },
            {
              "question": "How to provide third-party client access in Spring Boot?",
              "answer": "- Use OAuth2 or API keys to manage third-party client access.",
              "code": null
            },
            {
              "question": "Explain the use and application of @Component, @Service, @Repository, and @Controller.",
              "answer": "- @Component is used for generic components, @Service for business services, @Repository for data access, and `@Controller\n` for web request handling.",
              "code": null
            },
            {
              "question": "Can you use @Service in place of @Controller? If yes, what happens?",
              "answer": "- Yes, but it is not recommended. @Service is intended for business logic and does not handle web requests, which is the role of @Controller.",
              "code": null
            },
            {
              "question": "What tools have you used in your project?",
              "answer": "-  In my project, I have used tools such as Git for version control, Jenkins for continuous integration and deployment, JIRA for task management, and Docker for containerization.",
              "code": null
            },
            {
              "question": "Which database did you use in your project?",
              "answer": "-  We used PostgreSQL as our primary database due to its robustness and support for complex queries.",
              "code": null
            },
            {
              "question": "How did you implement JWT authentication in your project?",
              "answer": "-  We implemented JWT authentication by creating a JWT token on user login, which includes user roles and expiration time. The token is then verified with each API request using a JWT filter in our Spring Boot application.",
              "code": null
            },
            {
              "question": "How did you configure two different databases in your Spring Boot project?",
              "answer": "-  We configured two different databases by creating separate DataSource beans for each database and using @Primary annotation to specify the primary data source.",
              "code": null
            },
            {
              "question": "Who provided the database structure in your project?",
              "answer": "-  The database structure was provided by our database architect, and the development team collaborated to finalize and optimize it.",
              "code": null
            },
            {
              "question": "How were tasks assigned and managed in your project on a weekly basis?",
              "answer": "- Tasks were assigned and managed using JIRA. Each week, we conducted sprint planning meetings to assign tasks and track progress through daily stand-ups.",
              "code": null
            },
            {
              "question": "How did you implement an API gateway in your microservices architecture?",
              "answer": "-  We implemented an API gateway using Spring Cloud Gateway, which routes requests to the appropriate microservices and handles cross-cutting concerns like authentication and rate limiting.",
              "code": null
            },
            {
              "question": "How did you configure different services in the API gateway?",
              "answer": "-  We configured different services in the API gateway using route definitions in the application.yml file, specifying the paths and service URLs.",
              "code": null
            },
            {
              "question": "What is an Eureka Server?",
              "answer": "- Eureka Server is a service registry used in microservices architecture for service discovery, allowing services to find and communicate with each other without hardcoding their locations.",
              "code": null
            },
            {
              "question": "How do you handle simultaneous requests from multiple users, and who determines request preference?",
              "answer": "- We handle simultaneous requests using load balancers to distribute the traffic across multiple instances of our services. Request preference is determined based on the priority of the request and the resources available.",
              "code": null
            },
            {
              "question": "What does a Kafka server do?",
              "answer": "-  A Kafka server is used for real-time data streaming and message brokering, allowing our microservices to communicate asynchronously and handle large volumes of data efficiently.",
              "code": null
            },
            {
              "question": "How do you handle simultaneous requests from a large number of users?",
              "answer": "-  We handle simultaneous requests from a large number of users using a combination of load balancing, caching, and scalable microservices architecture to ensure high availability and performance.",
              "code": null
            },
            {
              "question": "What issues did you recently encounter with Swagger, and how did you resolve them?",
              "answer": "- We encountered issues with Swagger not displaying certain endpoints correctly. We resolved them by ensuring all our controllers were properly annotated and by updating the Swagger configuration to correctly scan all packages.",
              "code": null
            },
            {
              "question": "How do you upgrade your project, and what technologies are used for upgrading?",
              "answer": "- We upgrade our project by following a continuous integration and deployment pipeline, using tools like Jenkins and Docker. We also perform thorough testing and use feature toggles to ensure smooth rollouts.",
              "code": null
            },
            {
              "question": "What are some issues you faced in your project, and how did you overcome them?",
              "answer": "- One issue we faced was database performance under high load. We overcame it by optimizing queries, indexing critical fields, and using caching mechanisms to reduce the load on the database.",
              "code": null
            },
            {
              "question": "16.Have you worked with Log4j? If so, what was your experience?",
              "answer": "-  Yes, I have worked with Log4j for logging in our Spring Boot applications. It has been effective in providing configurable logging levels and formats,",
              "code": null
            }
          ]
        },
        {
          "name": "HR Round",
          "questions": [
            {
              "question": "Self ,Location, Salary etc.....",
              "answer": "",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 53
};
