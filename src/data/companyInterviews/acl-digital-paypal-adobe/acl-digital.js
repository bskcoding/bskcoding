// AUTO-GENERATED file — company-wise interview data.
// Source: ACL Digital (Paypal,Adobe) interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "acl-digital-paypal-adobe",
  "name": "ACL Digital (Paypal,Adobe)",
  "interviews": [
    {
      "name": "ACL DIGITAL",
      "questionCount": 50,
      "rounds": [
        {
          "name": "Technical Round",
          "questions": [
            {
              "question": "Explain your recent project.",
              "answer": "- *Provide details about your recent project, including the technology stack, your role, the objectives, challenges faced, and how you overcame those challenges.*",
              "code": null
            },
            {
              "question": "What are the new features in Java 8?",
              "answer": "- *Java 8 introduced several new features, including:*\n- *Lambda expressions*\n- *Functional interfaces*\n- *Stream API*\n- *New Date and Time API (java.time)*\n- *Default methods in interfaces*\n- *Method references*\n- *Optional class*",
              "code": null
            },
            {
              "question": "What is a static method in Java?",
              "answer": "- *A static method belongs to the class rather than instances of the class. It can be called without creating an instance of the class.*",
              "code": null
            },
            {
              "question": "How can we use static methods in an interface?",
              "answer": "- *Static methods in interfaces can be used to provide utility methods that are related to the interface but do not need an instance. They are called using the interface name.*",
              "code": null
            },
            {
              "question": "How can we call a static method?",
              "answer": "- *Static methods can be called using the class name or the interface name if defined in an interface, e.g., ClassName.staticMethod() or InterfaceName.staticMethod().*",
              "code": null
            },
            {
              "question": "How many ways can we call static methods?",
              "answer": "- *Static methods can be called in two ways:*\n- *Using the class name (e.g., Math.sqrt(4) for Math.sqrt)*\n- *Directly if in the same class (e.g., staticMethod())*",
              "code": null
            },
            {
              "question": "What is a default method in Java?",
              "answer": "- *Default methods are methods in interfaces that have a body. They provide a default implementation that can be used by implementing classes.*",
              "code": null
            },
            {
              "question": "What is the use of default methods in interfaces?",
              "answer": "- *Default methods allow interfaces to evolve without breaking existing implementations. They enable the addition of new methods with default behavior.*",
              "code": null
            },
            {
              "question": "What is a method reference in Java?",
              "answer": "- *Method references are a shorthand notation for calling a method. They provide a way to refer to methods without invoking them.*",
              "code": null
            },
            {
              "question": "How many ways can we create method references?",
              "answer": "- *Method references can be created in the following ways:*\n- *Reference to a static method*\n- *Reference to an instance method of a specific object*\n- *Reference to an instance method of an arbitrary object*\n- *Reference to a constructor*",
              "code": null
            },
            {
              "question": "Provide a customized example of a method reference with full code and explanation.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\nimport java.util.List;\n\npublic class MethodReferenceExample {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\n\n        // Using method reference to call static method\n        names.forEach(MethodReferenceExample::printName);\n\n        // Using method reference to call instance method\n        MethodReferenceExample instance = new MethodReferenceExample();\n        names.forEach(instance::printNameInstance);\n    }\n\n    // Static method\n    public static void printName(String name) {\n        System.out.println(name);\n    }\n\n    // Instance method\n    public void printNameInstance(String name) {\n        System.out.println(name);\n    }\n}"
              }
            },
            {
              "question": "What is a stream in Java?",
              "answer": "- *A stream in Java is a sequence of elements supporting sequential and parallel aggregate operations. It is used for processing collections of objects in a functional style.*",
              "code": null
            },
            {
              "question": "What is a parallel stream?",
              "answer": "- *A parallel stream is a type of stream that enables parallel processing of data by splitting the data into multiple chunks and processing them concurrently.*",
              "code": null
            },
            {
              "question": "What is the difference between a stream and a parallel stream?",
              "answer": "- *A stream processes data sequentially, while a parallel stream divides the data into multiple chunks and processes them concurrently using multiple threads.*",
              "code": null
            },
            {
              "question": "How does the internal process work in parallel streams?",
              "answer": "- *Parallel streams use the ForkJoinPool to split the data into smaller chunks, process them concurrently in multiple threads, and then merge the results.*",
              "code": null
            },
            {
              "question": "How many ways can we create a thread in Java?",
              "answer": "- *Threads can be created in two main ways:*\n- *By implementing the Runnable interface*\n- *By extending the Thread class*",
              "code": null
            },
            {
              "question": "Provide example code for implementing the Runnable interface and explain how to use it.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public class RunnableExample implements Runnable {\n    @Override\n    public void run() {\n        System.out.println(\"Thread is running\");\n    }\n\n    public static void main(String[] args) {\n        RunnableExample runnable = new RunnableExample();\n        Thread thread = new Thread(runnable);\n        thread.start();\n    }\n}"
              }
            },
            {
              "question": "If MyThread implements Runnable, and I create a thread like this: Thread t = new Thread(new MyThread()), how is this different from extending the Thread class?",
              "answer": "- *Implementing Runnable allows you to use composition and separate the thread's job from its execution. Extending Thread tightly couples the thread's job with its execution, limiting flexibility.*",
              "code": null
            },
            {
              "question": "What is ExecutorService in threads?",
              "answer": "- *ExecutorService is a high-level replacement for managing and controlling thread execution. It provides methods for managing a pool of threads and scheduling tasks.*",
              "code": null
            },
            {
              "question": "How many ways can we create an ExecutorService?",
              "answer": "- *ExecutorService can be created using:*\n- *Executors.newFixedThreadPool(int nThreads)*\n- *Executors.newSingleThreadExecutor()*\n- *Executors.newCachedThreadPool()*\n- *Executors.newScheduledThreadPool(int corePoolSize)*",
              "code": null
            },
            {
              "question": "What is autowiring in Spring?",
              "answer": "- *Autowiring is a feature in Spring that allows the framework to automatically inject dependencies into a bean.*",
              "code": null
            },
            {
              "question": "How many modes of autowiring are there?",
              "answer": "- *Autowiring modes include:*\n- *@Autowired (by type)*\n- *@Qualifier (by name)*\n- *@Resource (by name)*\n- *@Inject (by type)*",
              "code": null
            },
            {
              "question": "Explain @Qualifier and @Inject.",
              "answer": "- *@Qualifier is used to provide specific beans when multiple candidates are available. @Inject is a Java standard annotation used to inject dependencies.*",
              "code": null
            },
            {
              "question": "What is the difference between @Autowired and @Qualifier?",
              "answer": "- *@Autowired is used for automatic injection by type, while @Qualifier is used in conjunction with @Autowired to specify which bean to inject when multiple beans are available.*",
              "code": null
            },
            {
              "question": "Can we use @Autowired in place of @Qualifier?",
              "answer": "- *@Autowired alone cannot specify which bean to inject if there are multiple candidates. @Qualifier is needed to resolve such ambiguities.*",
              "code": null
            },
            {
              "question": "What are the limitations of autowiring?",
              "answer": "- *Limitations include:*\n- *Ambiguity when multiple beans of the same type are available.*\n- *Difficulty in identifying dependencies at runtime.*\n- *Inability to inject beans based on dynamic conditions.*",
              "code": null
            },
            {
              "question": "What is Spring Security?",
              "answer": "- *Spring Security is a framework that provides comprehensive security services for Java applications, including authentication, authorization, and protection against various security threats.*",
              "code": null
            },
            {
              "question": "How do you configure Spring Security?",
              "answer": "- *Spring Security can be configured using:*\n- *Java configuration with @EnableWebSecurity and SecurityConfig classes.*\n- *XML configuration (less common in recent versions).*",
              "code": null
            },
            {
              "question": "What is JWT token-based authentication?",
              "answer": "- *JWT (JSON Web Token) token-based authentication is a method where authentication information is transmitted as a JSON object and is used to verify the identity of users.*",
              "code": null
            },
            {
              "question": "How many ways can you configure custom security?",
              "answer": "- *Custom security can be configured using:*\n- *Java-based configuration with SecurityConfigurerAdapter*\n- *Custom filters and handlers*\n- *Spring Security extensions*",
              "code": null
            },
            {
              "question": "What is an API gateway?",
              "answer": "- *An API gateway is a server that acts as an API front-end, receiving API requests, enforcing throttling, routing requests, and aggregating results.*",
              "code": null
            },
            {
              "question": "How to implement an API gateway? Which dependency is needed?",
              "answer": "- *To implement an API gateway, you can use tools like Spring Cloud Gateway or Netflix Zuul. Dependencies needed include:*\n- *spring-cloud-starter-gateway for Spring Cloud Gateway*\n- *zuul for Netflix Zuul*",
              "code": null
            },
            {
              "question": "What is load balancing?",
              "answer": "- *Load balancing distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, enhancing reliability and performance.*",
              "code": null
            },
            {
              "question": "How do you implement load balancing in microservices?",
              "answer": "- *Load balancing in microservices can be implemented using:*\n- *Client-side load balancing with libraries like Ribbon*\n- *Server-side load balancing with tools like Nginx or HAProxy*",
              "code": null
            },
            {
              "question": "What is fault tolerance?",
              "answer": "- *Fault tolerance refers to the ability of a system to continue operating properly in the event of a failure of some of its components.*",
              "code": null
            },
            {
              "question": "How do you handle fault tolerance?",
              "answer": "- *Fault tolerance can be handled using:*\n- *Redundancy and failover strategies*\n- *Circuit breakers (e.g., using Resilience4j)*\n- *Retry mechanisms and fallback methods*\n38. **What is a circuit breaker\n?**\n- *A circuit breaker is a design pattern that prevents a system from making calls to a failing service, allowing it to recover and preventing cascading failures.*",
              "code": null
            },
            {
              "question": "How do you implement a circuit breaker?",
              "answer": "- *A circuit breaker can be implemented using libraries like:*\n- *Resilience4j*\n- *Hystrix*",
              "code": null
            },
            {
              "question": "What is the design pattern for a circuit breaker?",
              "answer": "- *The circuit breaker pattern consists of three states:*\n- *Closed (normal operation)*\n- *Open (service is failing)*\n- *Half-Open (test if the service has recovered)*",
              "code": null
            },
            {
              "question": "How do you handle limits in a circuit breaker?",
              "answer": "- *Limits in a circuit breaker can be handled by:*\n- *Setting thresholds for failure rates*\n- *Defining timeout durations for service calls*\n- *Configuring retry and fallback mechanisms*",
              "code": null
            },
            {
              "question": "What are the features of RESTful web services?",
              "answer": "- *Features include:*\n- *Stateless communication*\n- *Resource-based URLs*\n- *Standard HTTP methods (GET, POST, PUT, DELETE)*\n- *JSON or XML responses*\n- *HTTP status codes for responses*",
              "code": null
            },
            {
              "question": "What are the available HTTP status codes, and why are they important?",
              "answer": "- *Common HTTP status codes include:*\n- *200 OK*\n- *201 Created*\n- *204 No Content*\n- *400 Bad Request*\n- *401 Unauthorized*\n- *404 Not Found*\n- *500 Internal Server Error*\n- *They are important for indicating the result of an HTTP request and guiding client-side behavior.*",
              "code": null
            },
            {
              "question": "Which database are you using?",
              "answer": "- *Provide the name of the database you are using (e.g., MySQL, PostgreSQL, MongoDB) and any relevant details about its configuration and usage.*",
              "code": null
            },
            {
              "question": "Write a query to get the username when the name starts with 'A' and ends with 'E'.",
              "answer": "",
              "code": {
                "language": "sql",
                "content": "SELECT username \nFROM users \nWHERE name LIKE 'A%E';"
              }
            },
            {
              "question": "Write an SQL query to find the 2nd maximum salary.",
              "answer": "",
              "code": {
                "language": "sql",
                "content": "SELECT MAX(salary) \nFROM employees \nWHERE salary < (SELECT MAX(salary) FROM employees);"
              }
            },
            {
              "question": "Write an SQL query to find the 10th maximum salary.",
              "answer": "",
              "code": {
                "language": "sql",
                "content": "SELECT salary \nFROM (\n    SELECT DISTINCT salary \n    FROM employees \n    ORDER BY salary DESC \n    LIMIT 10\n) AS temp \nORDER BY salary ASC \nLIMIT 1;"
              }
            },
            {
              "question": "What is the difference between the WHERE and HAVING clauses?",
              "answer": "- *The WHERE clause filters rows before any groupings are made, while the HAVING clause filters groups after the GROUP BY operation.*",
              "code": null
            },
            {
              "question": "Give an example of using the HAVING clause.",
              "answer": "",
              "code": {
                "language": "sql",
                "content": "SELECT department, COUNT(*) \nFROM employees \nGROUP BY department \nHAVING COUNT(*) > 10;"
              }
            },
            {
              "question": "Can you use grouping in the WHERE clause?",
              "answer": "- *No, grouping and aggregation functions must be used with the HAVING clause, not the WHERE clause.*",
              "code": null
            },
            {
              "question": "Write a Java code snippet to find names starting with 'A' using streams.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class StreamExample {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Andrew\", \"Amanda\", \"George\");\n\n        List<String> result = names.stream()\n                                   .filter(name -> name.startsWith(\"A\"))\n                                   .collect(Collectors.toList());\n\n        System.out.println(result); // Output: [Alice, Andrew, Amanda]\n    }\n}"
              }
            },
            {
              "question": "Given the number 6178, how many iterations are required to reach 1629 and 99? Write the code logic to solve this.",
              "answer": "Solution Explanation:\n8716 - 6178 = 2538\n8352 - 2538 = 5814\n5814 - 4185 = 1629\n9261 - 1629 = 7632\n7632 - 2367 = 5265\n5625 - 5265 = 0360\n0360 - 0036 = 0324\n0423 - 0324 = 0495\n5490 - 0495 = 4995\n5994 - 4995 = 099",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\n\npublic class KaprekarRoutine {\n    public static void main(String[] args) {\n        int number = 6178;\n        int iterations = 0;\n\n        while (number != 6174 && number != 99) {\n            number = performKaprekarIteration(number);\n            System.out.println(\"Current number: \" + number);\n            iterations++;\n        }\n\n        System.out.println(\"Total iterations: \" + iterations);\n    }\n\n    private static int performKaprekarIteration(int number) {\n        String numStr = String.format(\"%04d\", number); // Pad with zeros if necessary\n        char[] numChars = numStr.toCharArray();\n        \n        Arrays.sort(numChars); // Ascending order\n        int smallNum = Integer.parseInt(new String(numChars));\n        \n        // Reverse the order for descending\n        String largeStr = new StringBuilder(new String(numChars)).reverse().toString();\n        int largeNum = Integer.parseInt(largeStr);\n        \n        return largeNum - smallNum;\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 50
};
