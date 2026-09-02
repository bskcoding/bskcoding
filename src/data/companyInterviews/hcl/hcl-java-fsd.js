// AUTO-GENERATED file — company-wise interview data.
// Source: HCL Technologies interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "hcl",
  "name": "HCL",
  "interviews": [
    {
      "name": "HCL L2 Technical Interview",
      "questionCount": 40,
      "rounds": [
        {
          "name": "Java 8 Features",
          "questions": [
            {
              "question": "What are the new features in Java 8?",
              "answer": "Java 8 introduced:\n- Lambda expressions\n- Functional interfaces\n- Stream API\n- New Date and Time API (java.time)\n- Default methods in interfaces\n- Method references\n- Optional class",
              "code": null
            },
            {
              "question": "What is a functional interface?",
              "answer": "A functional interface is an interface with exactly one abstract method. It can have multiple default or static methods.\n- Examples: Runnable, Callable, Comparator",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\ninterface Calculator { int add(int a, int b); }"
              }
            },
            {
              "question": "What is a lambda expression?",
              "answer": "A lambda expression is a concise way to represent an anonymous function. Syntax: (parameters) -> expression. Used to implement functional interfaces.",
              "code": {
                "language": "java",
                "content": "(a, b) -> a + b"
              }
            },
            {
              "question": "What is a stream in Java?",
              "answer": "A stream is a sequence of elements supporting sequential and parallel aggregate operations. Used for processing collections in a functional style.",
              "code": {
                "language": "java",
                "content": "list.stream().filter(s -> s.startsWith(\"A\")).collect(Collectors.toList());"
              }
            },
            {
              "question": "What is a parallel stream?",
              "answer": "A parallel stream enables parallel processing of data by splitting data into multiple chunks and processing them concurrently using multiple threads.",
              "code": {
                "language": "java",
                "content": "list.parallelStream().forEach(System.out::println);"
              }
            },
            {
              "question": "Difference between stream and parallel stream?",
              "answer": "Stream processes data sequentially, while a parallel stream divides data into multiple chunks and processes them concurrently using multiple threads.",
              "code": null
            },
            {
              "question": "How does the internal process work in parallel streams?",
              "answer": "Parallel streams use ForkJoinPool to split data into smaller chunks, process them concurrently in multiple threads, and then merge the results.",
              "code": null
            },
            {
              "question": "What is a static method in Java?",
              "answer": "A static method belongs to the class rather than instances. It can be called without creating an instance using ClassName.methodName().",
              "code": {
                "language": "java",
                "content": "Math.sqrt(16); // Static method"
              }
            },
            {
              "question": "How can we use static methods in an interface?",
              "answer": "Static methods in interfaces can be used to provide utility methods related to the interface. They are called using the interface name.",
              "code": {
                "language": "java",
                "content": "interface Utils { static void print(String s) { System.out.println(s); } }\nUtils.print(\"Hello\");"
              }
            },
            {
              "question": "What is a default method in Java?",
              "answer": "Default methods are methods in interfaces that have a body. They provide a default implementation that can be used by implementing classes.",
              "code": {
                "language": "java",
                "content": "interface Vehicle { default void start() { System.out.println(\"Starting\"); } }"
              }
            },
            {
              "question": "What is the use of default methods in interfaces?",
              "answer": "Default methods allow interfaces to evolve without breaking existing implementations. They enable the addition of new methods with default behavior.",
              "code": null
            },
            {
              "question": "What is a method reference in Java?",
              "answer": "Method references are a shorthand notation for calling a method. They provide a way to refer to methods without invoking them.",
              "code": {
                "language": "java",
                "content": "list.forEach(System.out::println);"
              }
            },
            {
              "question": "How many ways can we create method references?",
              "answer": "Four ways:\n- Reference to a static method\n- Reference to an instance method of a specific object\n- Reference to an instance method of an arbitrary object\n- Reference to a constructor",
              "code": {
                "language": "java",
                "content": "ClassName::staticMethod\ninstance::instanceMethod\nClassName::instanceMethod\nClassName::new"
              }
            }
          ]
        },
        {
          "name": "Multithreading",
          "questions": [
            {
              "question": "How many ways can we create a thread in Java?",
              "answer": "Two main ways: implementing the Runnable interface or extending the Thread class. ExecutorService can also be used.",
              "code": {
                "language": "java",
                "content": "// Runnable\nclass MyRunnable implements Runnable { public void run() { } }\n\n// Thread\nclass MyThread extends Thread { public void run() { } }"
              }
            },
            {
              "question": "What is ExecutorService in threads?",
              "answer": "ExecutorService is a high-level replacement for managing and controlling thread execution. It provides methods for managing a pool of threads and scheduling tasks.",
              "code": {
                "language": "java",
                "content": "ExecutorService executor = Executors.newFixedThreadPool(5);\nexecutor.submit(() -> System.out.println(\"Task\"));\nexecutor.shutdown();"
              }
            },
            {
              "question": "How many ways can we create an ExecutorService?",
              "answer": "Four ways: newFixedThreadPool, newSingleThreadExecutor, newCachedThreadPool, and newScheduledThreadPool.",
              "code": {
                "language": "java",
                "content": "Executors.newFixedThreadPool(10);\nExecutors.newSingleThreadExecutor();\nExecutors.newCachedThreadPool();\nExecutors.newScheduledThreadPool(5);"
              }
            }
          ]
        },
        {
          "name": "Spring Boot",
          "questions": [
            {
              "question": "What is autowiring in Spring?",
              "answer": "Autowiring is a feature in Spring that allows the framework to automatically inject dependencies into a bean.",
              "code": {
                "language": "java",
                "content": "@Autowired private UserService userService;"
              }
            },
            {
              "question": "How many modes of autowiring are there?",
              "answer": "Four modes: <@Autowired> (by type), <@Qualifier> (by name), <@Resource> (by name), and <@Inject> (by type).",
              "code": null
            },
            {
              "question": "Explain @Qualifier and @Inject.",
              "answer": "<@Qualifier> is used to provide specific beans when multiple candidates are available. <@Inject> is a Java standard annotation used to inject dependencies.",
              "code": {
                "language": "java",
                "content": "@Autowired @Qualifier(\"emailService\") private MessageService service;\n@Inject private UserService userService;"
              }
            },
            {
              "question": "Difference between @Autowired and @Qualifier?",
              "answer": "<@Autowired> injects by type automatically. <@Qualifier> is used with <@Autowired> to specify which bean to inject when multiple beans of the same type exist.",
              "code": null
            },
            {
              "question": "What are the limitations of autowiring?",
              "answer": "Limitations include:\n- Ambiguity when multiple beans of the same type exist\n- Difficulty in identifying dependencies at runtime\n- Inability to inject beans based on dynamic conditions",
              "code": null
            },
            {
              "question": "What is Spring Security?",
              "answer": "Spring Security is a framework that provides comprehensive security services for Java applications, including authentication, authorization, and protection against various security threats.",
              "code": null
            },
            {
              "question": "How do you configure Spring Security?",
              "answer": "Spring Security can be configured using Java configuration with <@EnableWebSecurity> and SecurityConfig classes, or XML configuration.",
              "code": {
                "language": "java",
                "content": "@Configuration\n@EnableWebSecurity\npublic class SecurityConfig extends WebSecurityConfigurerAdapter { }"
              }
            },
            {
              "question": "What is JWT token-based authentication?",
              "answer": "JWT is a method where authentication information is transmitted as a JSON object to verify the identity of users.",
              "code": null
            }
          ]
        },
        {
          "name": "Microservices",
          "questions": [
            {
              "question": "What is an API gateway?",
              "answer": "An API gateway is a server that acts as an API front-end, receiving API requests, enforcing throttling, routing requests, and aggregating results.",
              "code": null
            },
            {
              "question": "How to implement an API gateway? Which dependency is needed?",
              "answer": "Use Spring Cloud Gateway or Netflix Zuul. Dependencies: spring-cloud-starter-gateway or zuul.",
              "code": {
                "language": "xml",
                "content": "<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-gateway</artifactId>\n</dependency>"
              }
            },
            {
              "question": "What is load balancing?",
              "answer": "Load balancing distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed.",
              "code": null
            },
            {
              "question": "How do you implement load balancing in microservices?",
              "answer": "Client-side load balancing with libraries like Ribbon, or server-side load balancing with tools like Nginx or HAProxy.",
              "code": null
            },
            {
              "question": "What is fault tolerance?",
              "answer": "Fault tolerance refers to the ability of a system to continue operating properly in the event of a failure of some of its components.",
              "code": null
            },
            {
              "question": "What is a circuit breaker?",
              "answer": "A circuit breaker is a design pattern that prevents a system from making calls to a failing service, allowing it to recover and preventing cascading failures.",
              "code": null
            },
            {
              "question": "How do you implement a circuit breaker?",
              "answer": "Using libraries like Resilience4j or Hystrix.",
              "code": {
                "language": "java",
                "content": "@CircuitBreaker(name = \"service\", fallbackMethod = \"fallback\")\npublic String callService() { }"
              }
            },
            {
              "question": "What are the states of a circuit breaker?",
              "answer": "Three states:\n- Closed — normal operation\n- Open — the service is failing\n- Half-Open — test if the service has recovered",
              "code": null
            }
          ]
        },
        {
          "name": "REST & SQL",
          "questions": [
            {
              "question": "What are the features of RESTful web services?",
              "answer": "Features:\n- Stateless communication\n- Resource-based URLs\n- Standard HTTP methods (GET, POST, PUT, DELETE)\n- JSON or XML responses\n- HTTP status codes",
              "code": null
            },
            {
              "question": "What are HTTP status codes?",
              "answer": "200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error.",
              "code": null
            },
            {
              "question": "Write a query to get the username when the name starts with 'A' and ends with 'E'.",
              "answer": "Use LIKE with wildcards.",
              "code": {
                "language": "sql",
                "content": "SELECT username FROM users WHERE name LIKE 'A%E';"
              }
            },
            {
              "question": "Write an SQL query to find the 2nd maximum salary.",
              "answer": "Use a subquery with MAX.",
              "code": {
                "language": "sql",
                "content": "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);"
              }
            },
            {
              "question": "Write an SQL query to find the 10th maximum salary.",
              "answer": "Use LIMIT with OFFSET.",
              "code": {
                "language": "sql",
                "content": "SELECT salary FROM (SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 10) AS temp ORDER BY salary ASC LIMIT 1;"
              }
            },
            {
              "question": "Difference between WHERE and HAVING?",
              "answer": "WHERE filters rows before grouping. HAVING filters groups after the GROUP BY operation. WHERE cannot use aggregate functions, HAVING can.",
              "code": null
            },
            {
              "question": "Write Java code to find names starting with 'A' using streams.",
              "answer": "Use filter with startsWith.",
              "code": {
                "language": "java",
                "content": "List<String> result = names.stream().filter(name -> name.startsWith(\"A\")).collect(Collectors.toList());"
              }
            },
            {
              "question": "Kaprekar Routine - Given number 6178, how many iterations to reach 1629 and 99?",
              "answer": "Sort digits ascending and descending, subtract, and repeat.",
              "code": {
                "language": "java",
                "content": "public class KaprekarRoutine {\n    public static void main(String[] args) {\n        int number = 6178;\n        int iterations = 0;\n        while (number != 6174 && number != 99) {\n            number = performKaprekarIteration(number);\n            iterations++;\n        }\n        System.out.println(\"Total iterations: \" + iterations);\n    }\n\n    private static int performKaprekarIteration(int number) {\n        String numStr = String.format(\"%04d\", number);\n        char[] numChars = numStr.toCharArray();\n        Arrays.sort(numChars);\n        int smallNum = Integer.parseInt(new String(numChars));\n        String largeStr = new StringBuilder(new String(numChars)).reverse().toString();\n        int largeNum = Integer.parseInt(largeStr);\n        return largeNum - smallNum;\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ]
};
