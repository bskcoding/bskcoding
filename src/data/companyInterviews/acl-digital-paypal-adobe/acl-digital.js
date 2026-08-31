// AUTO-GENERATED file — company-wise interview data.
// Source: ACL Digital (Paypal,Adobe) interview document(s).

export const company = {
  "id": "acl-digital-paypal-adobe",
  "name": "ACL Digital (Paypal,Adobe)",
  "interviews": [
    {
      "name": "ACL Digital",
      "questionCount": 35,
      "rounds": [
        {
          "name": "Technical Round",
          "questions": [
            {
              "question": "Explain your recent project.",
              "answer": "I worked on a Customer Registration and Banking Application for 2 years. The project used Java 8, Spring Boot, Hibernate, and ReactJS. I was a backend developer.\n- Key features: customer registration, account management, transaction processing, secure authentication.\n- Main challenges:\n1. Slow API performance - fixed with Redis caching and optimized queries\n2. Concurrent transaction issues - solved using @Transactional with proper isolation levels\n3. Data consistency across microservices - implemented Saga pattern with compensation actions",
              "code": null
            },
            {
              "question": "What are the new features in Java 8?",
              "answer": "Java 8 introduced 7 major features:\n- Lambda expressions for cleaner code\n- Stream API for collection processing\n- Functional interfaces with single abstract methods\n- New Date/Time API (LocalDate, LocalDateTime)\n- Default methods in interfaces for backward compatibility\n- Method references as shorthand for lambdas\n- Optional class to avoid null pointer exceptions",
              "code": null
            },
            {
              "question": "What is a static method in Java?",
              "answer": "A static method belongs to the class rather than instances. It can be called without creating an object using the class name. It can only access static variables and cannot be overridden.\n- Example: Math.sqrt(16) - you don't need a Math object",
              "code": null
            },
            {
              "question": "How can we use static methods in an interface?",
              "answer": "Since Java 8, interfaces can have static methods as utility methods. They are called using the interface name.\n- Example: interface Utils { static void print(String s) { System.out.println(s); } }\n- Call: Utils.print(\"Hello\")",
              "code": null
            },
            {
              "question": "How can we call a static method?",
              "answer": "Static methods can be called in three ways:\n1. Using class name (recommended) - ClassName.methodName()\n2. Directly if in same class - methodName()\n3. Using object reference (not recommended) - obj.methodName()",
              "code": null
            },
            {
              "question": "What is a default method in Java?",
              "answer": "Default methods are methods in interfaces that have a body and provide a default implementation. They were introduced in Java 8. Classes implementing the interface can use them or override them. They help maintain backward compatibility.",
              "code": null
            },
            {
              "question": "What is the use of default methods?",
              "answer": "Default methods serve three main purposes:\n1. Allow interfaces to evolve without breaking existing implementations\n2. Provide common implementations across multiple classes\n3. Enable multiple inheritance of behavior\n- Used extensively in the Collection framework like forEach() method",
              "code": null
            },
            {
              "question": "What is a method reference?",
              "answer": "A method reference is a shorthand notation for lambda expressions. It provides a way to refer to methods without invoking them.\n- Example: list.forEach(System.out::println) instead of list.forEach(s -> System.out.println(s))",
              "code": null
            },
            {
              "question": "How many ways can we create method references?",
              "answer": "Four ways:\n1. Reference to static method - ClassName::staticMethod\n2. Reference to instance method of specific object - instance::method\n3. Reference to instance method of arbitrary object - ClassName::instanceMethod\n4. Reference to constructor - ClassName::new",
              "code": {
                "language": "java",
                "content": "public class MethodReferenceExample {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\n        names.forEach(MethodReferenceExample::printName);\n        MethodReferenceExample instance = new MethodReferenceExample();\n        names.forEach(instance::printNameInstance);\n    }\n    public static void printName(String name) {\n        System.out.println(name);\n    }\n    public void printNameInstance(String name) {\n        System.out.println(name);\n    }\n}"
              }
            },
            {
              "question": "What is a stream in Java?",
              "answer": "A stream is a sequence of elements that supports functional-style operations. It's not a data structure but processes collections of objects. Streams are lazy, can be parallelized, and cannot be reused after a terminal operation. Used for filtering, mapping, and collecting data.",
              "code": null
            },
            {
              "question": "What is a parallel stream?",
              "answer": "A parallel stream enables parallel processing by splitting data into multiple chunks and processing them concurrently using multiple threads. It uses the Fork/Join framework. Useful for large datasets with CPU-intensive operations.\n- Example: list.parallelStream() instead of list.stream()",
              "code": null
            },
            {
              "question": "How does parallel stream work internally?",
              "answer": "Parallel streams work in four steps:\n1. Split - Data is divided into chunks using Spliterator\n2. Process - Each chunk is processed independently in parallel using multiple threads from ForkJoinPool\n3. Combine - Results are merged using a combine operation\n4. Return - Final result is returned",
              "code": null
            },
            {
              "question": "How many ways can we create a thread in Java?",
              "answer": "Three ways:\n1. Extending Thread class - class MyThread extends Thread { public void run() {} }\n2. Implementing Runnable interface - class MyRunnable implements Runnable { public void run() {} }\n3. Using Lambda expression (Java 8+) - Runnable r = () -> System.out.println(\"Running\")",
              "code": {
                "language": "java",
                "content": "public class RunnableExample implements Runnable {\n    @Override\n    public void run() {\n        System.out.println(\"Thread is running\");\n    }\n    public static void main(String[] args) {\n        RunnableExample runnable = new RunnableExample();\n        Thread thread = new Thread(runnable);\n        thread.start();\n    }\n}"
              }
            },
            {
              "question": "What is ExecutorService?",
              "answer": "ExecutorService is a high-level framework for managing thread pools. Instead of creating threads manually, you submit tasks which are managed by the framework. It provides methods for managing thread lifecycle, scheduling tasks, and handling results.",
              "code": null
            },
            {
              "question": "How many ways can we create an ExecutorService?",
              "answer": "Four ways:\n1. newFixedThreadPool(int n) - fixed number of threads\n2. newSingleThreadExecutor() - single thread\n3. newCachedThreadPool() - creates threads as needed\n4. newScheduledThreadPool(int n) - scheduled tasks",
              "code": null
            },
            {
              "question": "What is autowiring in Spring?",
              "answer": "Autowiring is a Spring feature that automatically injects dependencies into beans. It eliminates manual object creation by letting the Spring container manage dependencies. Uses @Autowired annotation for dependency injection.",
              "code": null
            },
            {
              "question": "How many modes of autowiring are there?",
              "answer": "Four modes:\n1. @Autowired - by type (default)\n2. @Qualifier - by name with @Autowired\n3. @Resource - by name (JSR-250)\n4. @Inject - by type (JSR-330)",
              "code": null
            },
            {
              "question": "Explain @Qualifier and @Inject.",
              "answer": "@Qualifier is used with @Autowired to specify which bean to inject when multiple beans of the same type exist. @Inject is a Java standard annotation (JSR-330) for dependency injection, similar to @Autowired but from the Java standard library.",
              "code": null
            },
            {
              "question": "Difference between @Autowired and @Qualifier?",
              "answer": "@Autowired injects dependencies by type automatically. @Qualifier works with @Autowired to specify the exact bean when multiple beans of the same type exist. @Autowired alone causes ambiguity if multiple beans are found; @Qualifier resolves it.",
              "code": null
            },
            {
              "question": "What is Spring Security?",
              "answer": "Spring Security is a framework for authentication (who you are) and authorization (what you can do). It provides protection against common security threats and integrates with various authentication providers.",
              "code": null
            },
            {
              "question": "How do you configure Spring Security?",
              "answer": "Spring Security can be configured using:\n1. Java configuration with @EnableWebSecurity and SecurityConfig classes extending WebSecurityConfigurerAdapter\n2. XML configuration (less common now)\n- Java configuration is preferred for better control.",
              "code": null
            },
            {
              "question": "What is JWT token-based authentication?",
              "answer": "JWT (JSON Web Token) is a stateless authentication mechanism. User logs in, the server generates a JWT token containing user info. The user sends this token in each request. The server validates the token to authenticate the user. No session storage is needed.",
              "code": null
            },
            {
              "question": "What is an API gateway?",
              "answer": "An API gateway is a single entry point for microservices. It handles routing requests to appropriate services, load balancing, authentication, rate limiting, logging, and API composition. Examples: Spring Cloud Gateway, Netflix Zuul.",
              "code": null
            },
            {
              "question": "How to implement an API gateway?",
              "answer": "Use Spring Cloud Gateway or Netflix Zuul. Dependencies: spring-cloud-starter-gateway for Gateway, zuul for Zuul. Define routes in application.yml with URI, predicates, and filters.\n- Example: routes with path /api/users/** route to user-service.",
              "code": null
            },
            {
              "question": "What is load balancing?",
              "answer": "Load balancing distributes incoming traffic across multiple servers to prevent any single server from being overwhelmed. It improves reliability, performance, and availability. Types: client-side (Ribbon) and server-side (Nginx, HAProxy).",
              "code": null
            },
            {
              "question": "What is fault tolerance?",
              "answer": "Fault tolerance is a system's ability to continue operating even when some components fail. Implemented through: redundancy, failover strategies, circuit breakers, retry mechanisms, and fallback methods.",
              "code": null
            },
            {
              "question": "What is a circuit breaker?",
              "answer": "A circuit breaker prevents cascading failures by stopping calls to a failing service. It has three states: Closed (normal), Open (failing - requests fail immediately), Half-Open (testing recovery). Implemented using Resilience4j or Hystrix.",
              "code": null
            },
            {
              "question": "What are the features of RESTful web services?",
              "answer": "Features:\n- Stateless communication\n- Resource-based URLs\n- Standard HTTP methods (GET, POST, PUT, DELETE)\n- JSON/XML responses\n- HTTP status codes\n- Cacheable responses\n- Scalable architecture\n- Layered system",
              "code": null
            },
            {
              "question": "What are HTTP status codes?",
              "answer": "Common HTTP status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error. They indicate the request result and guide client behavior.",
              "code": null
            },
            {
              "question": "Write a query to get username when name starts with 'A' and ends with 'E'.",
              "answer": "SELECT username FROM users WHERE name LIKE 'A%E'",
              "code": {
                "language": "sql",
                "content": "SELECT username FROM users WHERE name LIKE 'A%E'"
              }
            },
            {
              "question": "Write SQL query to find 2nd maximum salary.",
              "answer": "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)",
              "code": {
                "language": "sql",
                "content": "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)"
              }
            },
            {
              "question": "Write SQL query to find 10th maximum salary.",
              "answer": "SELECT salary FROM (SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 10) AS temp ORDER BY salary ASC LIMIT 1",
              "code": {
                "language": "sql",
                "content": "SELECT salary FROM (SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 10) AS temp ORDER BY salary ASC LIMIT 1"
              }
            },
            {
              "question": "Difference between WHERE and HAVING?",
              "answer": "WHERE filters rows before grouping and cannot use aggregate functions. HAVING filters groups after GROUP BY and can use aggregate functions. WHERE is applied first, HAVING is applied last.",
              "code": null
            },
            {
              "question": "Can you use grouping in WHERE clause?",
              "answer": "No, grouping and aggregate functions must be used with the HAVING clause, not WHERE. This is a SQL syntax rule.",
              "code": null
            },
            {
              "question": "Write Java code to find names starting with 'A' using streams.",
              "answer": "Use filter with startsWith('A') and collect to a List",
              "code": {
                "language": "java",
                "content": "List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Andrew\", \"Amanda\", \"George\");\nList<String> result = names.stream()\n    .filter(name -> name.startsWith(\"A\"))\n    .collect(Collectors.toList());"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 35
};
