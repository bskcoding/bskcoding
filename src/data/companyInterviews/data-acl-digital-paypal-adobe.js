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
    },
    {
      "name": "PayPal _ Payments Client",
      "questionCount": 112,
      "rounds": [
        {
          "name": "PayPal client interview (L1):",
          "questions": [
            {
              "question": "Self-introduction about your project:",
              "answer": "- Briefly describe your project, its objective, technologies used (e.g., Java, Spring Boot, ReactJS), and your role (backend developer, full stack developer). Mention any key features, challenges faced, and how you solved them.",
              "code": null
            },
            {
              "question": "Do you know SQL?",
              "answer": "- Yes, SQL is a standard language used to manage and manipulate relational databases. I have experience with queries like SELECT, INSERT, UPDATE, DELETE, and handling joins, indexes, and stored procedures.",
              "code": null
            },
            {
              "question": "Do you know Data Structures and Algorithms (LinkedList)?",
              "answer": "- Yes, LinkedList is a data structure where each element (node) contains data and a reference (or pointer) to the next node. There are two types: singly linked and doubly linked lists.",
              "code": null
            },
            {
              "question": "Do you know OOP concepts? Can you explain what they are?",
              "answer": "- OOP (Object-Oriented Programming) concepts include:\nEncapsulation:  Wrapping data (variables) and code (methods) together.\nAbstraction:  Hiding complexity by providing a simplified interface.\nInheritance:  Deriving new classes from existing ones.\nPolymorphism:  The ability to use the same function in different forms.",
              "code": null
            },
            {
              "question": "What is polymorphism?",
              "answer": "- Polymorphism allows one interface to be used for different data types. In Java, it can be achieved through method overloading and method overriding.",
              "code": null
            },
            {
              "question": "What is method overloading, and what is method overriding?",
              "answer": "Method Overloading: Multiple methods with the same name but different parameters (within the same class).\nMethod Overriding: A subclass provides a specific implementation of a method already defined in its parent class.",
              "code": null
            },
            {
              "question": "How can you declare your override?",
              "answer": "- By using the @Override annotation before the method in the subclass.",
              "code": null
            },
            {
              "question": "What are access modifiers?",
              "answer": "- Access modifiers define the scope of access to classes, variables, and methods:\n- private: Accessible only within the same class.\n- protected: Accessible within the same package and subclasses.\n- public: Accessible everywhere.\n- (default): Accessible within the same package.",
              "code": null
            },
            {
              "question": "Why use private?",
              "answer": "- To restrict access to the class members and maintain encapsulation, ensuring controlled access through getters and setters.",
              "code": null
            },
            {
              "question": "If you provide a variable as private, what happens? How can you set and get the value of that private variable?",
              "answer": "- The variable will be inaccessible from outside the class. You can set and get the value using public getter and setter methods.",
              "code": null
            },
            {
              "question": "Which OOP concept can achieve private variables?",
              "answer": "Encapsulation: ensures private variables can be controlled through public methods like getters and setters.",
              "code": null
            },
            {
              "question": "Do you know about String? Can you explain?",
              "answer": "- A String in Java is an immutable sequence of characters. It is stored in the string pool for memory efficiency.",
              "code": null
            },
            {
              "question": "What is the difference between String, StringBuilder, and StringBuffer?",
              "answer": "- String: Immutable.\n- StringBuilder: Mutable and not thread-safe.\n- StringBuffer: Mutable and thread-safe (synchronized).",
              "code": null
            },
            {
              "question": "What is the string constant pool?",
              "answer": "- It's a special memory area in the Java heap where String literals are stored to optimize memory usage and avoid duplicate string objects.",
              "code": null
            },
            {
              "question": "Given the pseudo-code String str1=\"abc\", String str2=\"abc\", str1 == str2, what will be the output?",
              "answer": "- The output will be true because both str1 and str2 point to the same literal in the string constant pool.",
              "code": null
            },
            {
              "question": "What is an inner class, and why is it useful?",
              "answer": "- An inner class is a class defined within another class. It’s useful to logically group classes, improve encapsulation, and access outer class members.",
              "code": null
            },
            {
              "question": "What is an anonymous class, and why is it used?",
              "answer": "- An anonymous class is a class without a name, often used to instantiate a one-time object. It’s useful for event handling or passing functionality without creating separate named classes.",
              "code": null
            },
            {
              "question": "Have you worked with multithreading?",
              "answer": "- Yes, multithreading allows concurrent execution of two or more threads, improving the performance of tasks like I/O, database calls, etc.",
              "code": null
            },
            {
              "question": "How many ways are there to create a thread?",
              "answer": "- Two ways:\n1. By extending the Thread class.\n2. By implementing the Runnable interface.",
              "code": null
            },
            {
              "question": "Have you used the Future class?",
              "answer": "- Yes, the Future class in Java represents the result of an asynchronous computation, allowing you to check if the task is complete, retrieve the result, or cancel the task.",
              "code": null
            },
            {
              "question": "Have you used Callable?",
              "answer": "- Yes, Callable is an interface similar to Runnable, but it returns a result and can throw a checked exception.",
              "code": null
            },
            {
              "question": "Which collections have you used?",
              "answer": "- I've used various collections like ArrayList, HashSet, HashMap, LinkedList, and TreeMap.",
              "code": null
            },
            {
              "question": "What is the retrieval time complexity of HashMap?",
              "answer": "- The average time complexity for retrieving an element in a HashMap is O(1), assuming good hash function distribution.",
              "code": null
            },
            {
              "question": "How does HashMap work internally?",
              "answer": "- HashMap uses an array of buckets where each bucket is a linked list. The key's hashcode determines the bucket, and keys with the same hashcode are handled via linked lists (or trees in case of hash collision).",
              "code": null
            },
            {
              "question": "What is hash collision?",
              "answer": "- Hash collision occurs when two different keys generate the same hashcode. Java resolves this through linked lists or balanced trees inside the bucket.",
              "code": null
            },
            {
              "question": "What is final, and how does it work with variables, methods, and classes?",
              "answer": "- final prevents modification:\nVariable: Value cannot be changed after initialization.\nMethod: Cannot be overridden.\nClass: Cannot be extended.",
              "code": null
            },
            {
              "question": "How can you handle exceptions? Have you used custom exceptions?",
              "answer": "- Exceptions are handled using try-catch blocks. Yes, I have used custom exceptions to create application-specific error messages by extending the Exception class.",
              "code": null
            },
            {
              "question": "Give me mostly used Spring Boot exceptions.",
              "answer": "- Common exceptions include DataIntegrityViolationException, HttpClientErrorException, HttpServerErrorException, EntityNotFoundException.",
              "code": null
            },
            {
              "question": "What is the difference between throw and throws?",
              "answer": "- throw: Used to explicitly throw an exception.\n- throws: Declares that a method can throw one or more exceptions.",
              "code": null
            },
            {
              "question": "What is the difference between checked and unchecked exceptions?",
              "answer": "Checked exceptions: must be handled at compile-time (e.g., IOException).\nUnchecked exceptions: occur at runtime (e.g., NullPointerException).",
              "code": null
            },
            {
              "question": "What are try, catch, and finally? When do we use them?",
              "answer": "- try defines the code block to monitor for exceptions.\n- catch handles the exception.\n- finally executes code after try-catch, regardless of an exception.",
              "code": null
            },
            {
              "question": "If try contains multiple catch blocks, which catch block will execute? If there is a finally block, what will be the output?",
              "answer": "- The first matching catch block will execute. The finally block will always execute after the catch block, regardless of the exception.",
              "code": null
            },
            {
              "question": "If a single catch can handle multiple exceptions, which exception will it handle?",
              "answer": "- It will handle whichever exception occurs that is listed in the catch block. Java allows multi-catch blocks using |.",
              "code": null
            },
            {
              "question": "Have you worked with Java 8?",
              "answer": "- Yes, I have used features like Lambdas, Streams, Optional, and the Date-Time API.",
              "code": null
            },
            {
              "question": "What are the Java 9 features?",
              "answer": "- Key features include JShell (REPL), Module System, Factory Methods for Collections, Stream API improvements, and Private Interface Methods.",
              "code": null
            },
            {
              "question": "If I provide the string \"leetcode\" and the character \"e\", can you find how many times \"e\" occurs using streams?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "long count = \"leetcode\".chars().filter(ch -> ch == 'e').count();"
              }
            },
            {
              "question": "Which data structure are you familiar with?",
              "answer": "- I am familiar with LinkedList, ArrayList, HashMap, Stack, Queue, etc.",
              "code": null
            },
            {
              "question": "Select any data structure: LinkedList, Stack, or Queue.",
              "answer": "- Let's take LinkedList, which stores elements as nodes where each node points to the next node.",
              "code": null
            },
            {
              "question": "Write code logic: If I provide the head of a linked list, determine if it is a cycle linked list or not.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public boolean hasCycle(ListNode head) {\n      if (head == null) return false;\n      ListNode slow = head, fast =\n\nhead.next;\n      while (slow != fast) {\n          if (fast == null || fast.next == null) return false;\n          slow = slow.next;\n          fast = fast.next.next;\n      }\n      return true;\n  }"
              }
            },
            {
              "question": "What is the time complexity and space complexity of the code to detect a cycle in a linked list?",
              "answer": "Time complexity: O(n) - We traverse the linked list only once, making the time complexity linear.\nSpace complexity: O(1) - We use a constant amount of extra space (two pointers).",
              "code": null
            },
            {
              "question": "What is the Optional class?",
              "answer": "- The Optional class in Java is used to avoid null pointer exceptions by representing a value that may or may not be present. It provides methods like isPresent(), get(), orElse(), and ifPresent() to handle the value safely.",
              "code": null
            },
            {
              "question": "What is a functional interface?",
              "answer": "- A functional interface in Java is an interface that contains exactly one abstract method. It can have multiple default or static methods. Functional interfaces can be implemented using lambda expressions. Example: Runnable, Callable, Comparator.",
              "code": null
            },
            {
              "question": "What are the built-in functional interfaces available in Java?",
              "answer": "- Some of the built-in functional interfaces in Java are:\n- Function<T, R>: Takes one argument and returns a result.\n- Consumer<T>: Takes one argument and returns no result.\n- Supplier<T>: Takes no argument and returns a result.\n- Predicate<T>: Takes one argument and returns a boolean.\n- BiFunction<T, U, R>, BiConsumer<T, U>, BiPredicate<T, U>: Same as the above but with two arguments.",
              "code": null
            },
            {
              "question": "How can we write methods in a functional interface, and how can we utilize those methods?",
              "answer": "- You define a functional interface by declaring one abstract method, then implement it using a lambda expression. For example:",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\ninterface MathOperation {\n    int operate(int a, int b);\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        MathOperation addition = (a, b) -> a + b;\n        System.out.println(\"Result: \" + addition.operate(5, 3));\n    }\n}"
              }
            },
            {
              "question": "Do you know CompletableFuture?",
              "answer": "- Yes, CompletableFuture is a feature of Java 8 that is used to handle asynchronous programming. It allows you to run tasks asynchronously and chain multiple stages of computations. It supports combining multiple asynchronous computations and handling exceptions.",
              "code": null
            },
            {
              "question": "Have you worked with Spring Boot?",
              "answer": "- Yes, I have worked with Spring Boot extensively. It simplifies building stand-alone, production-grade Spring-based applications. It provides default configurations and a wide range of annotations to reduce boilerplate code.",
              "code": null
            },
            {
              "question": "What is configuration and auto-configuration in Spring Boot?",
              "answer": "Configuration: refers to the settings and beans required to run the Spring Boot application.\nAuto-configuration: is a feature in Spring Boot that automatically configures your application based on the dependencies in the classpath. It reduces the need for manual configuration.",
              "code": null
            },
            {
              "question": "What is @Component?",
              "answer": "- @Component is a Spring annotation used to indicate that a class is a Spring-managed bean. The Spring container automatically detects and registers beans marked with @Component for dependency injection.",
              "code": null
            },
            {
              "question": "Can you explain @Controller, @Service, and @Repository?",
              "answer": "@Controller: Marks a class as a Spring MVC controller, typically used to handle web requests.\n@Service: Indicates a service layer class that contains business logic. It is used for business operations and service orchestration.\n@Repository: Marks a data access layer class that interacts with the database, translating exceptions into Spring’s DataAccessException.",
              "code": null
            },
            {
              "question": "Do you know MVC?",
              "answer": "- Yes, MVC (Model-View-Controller) is a software architectural pattern that separates an application into three main logical components:\nModel: Manages the data and business logic.\nView: Responsible for rendering the UI.\nController: Handles user input and controls the flow of data between the Model and View.",
              "code": null
            },
            {
              "question": "Can you explain the MVC architecture?",
              "answer": "- In the MVC architecture:\nModel: Represents the data and the business logic of the application.\nView: Renders the UI, based on the data provided by the Model.\nController: Handles the input from the user, updates the Model, and selects the View to display.",
              "code": null
            },
            {
              "question": "What is the difference between SOAP and RESTful services?",
              "answer": "SOAP: (Simple Object Access Protocol) is a protocol used for exchanging structured information in web services. It uses XML as its message format and operates over various protocols like HTTP, SMTP, etc.\nREST: (Representational State Transfer) is an architectural style for building web services, using standard HTTP methods (GET, POST, PUT, DELETE) and typically communicates using JSON or XML.",
              "code": null
            },
            {
              "question": "What are the features of RESTful services?",
              "answer": "- RESTful services are:\n- Stateless: Each request from the client must contain all the information required for the server to understand and process the request.\n- Cacheable: Responses can be marked as cacheable to improve performance.\n- Scalable: REST is designed to handle high-load scenarios efficiently.\n- Layered: RESTful systems allow layering of services.",
              "code": null
            },
            {
              "question": "You mentioned you worked on microservices, so give me an example API you worked on (e.g., notification services). How does it work? How would you create it in code?",
              "answer": "- Example: A notification service in a microservice architecture can be responsible for sending notifications (email, SMS, etc.) to users.\nController : The user triggers a notification request.\nService : Business logic determines the notification type and message.\nRepository : Interacts with the database to fetch necessary data (like user preferences, templates).\nExternal API : Calls the external notification provider (e.g., email or SMS API).\nHere's an example Spring Boot API for sending email notifications:",
              "code": {
                "language": "java",
                "content": "@RestController\n@RequestMapping(\"/api/notification\")\npublic class NotificationController {\n    @Autowired\n    private NotificationService notificationService;\n\n    @PostMapping(\"/send\")\n    public ResponseEntity<String> sendNotification(@RequestBody NotificationRequest request) {\n        notificationService.sendNotification(request);\n        return ResponseEntity.ok(\"Notification sent successfully\");\n    }\n}\n\n@Service\npublic class NotificationService {\n    public void sendNotification(NotificationRequest request) {\n        // Logic to send notification (e.g., email, SMS)\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "PayPal client interview (L2):",
          "questions": [
            {
              "question": "Self-introduction based on project",
              "answer": "I have been working on a [your project name] for [duration], focusing on full-stack development with technologies like ReactJS on the front end and Spring Boot on the backend. The project involves creating customer registration services, handling transactions, and managing user data. I am responsible for developing APIs, integrating third-party services, and ensuring smooth user experiences. I've also worked on cloud deployments, particularly with GCP, where I implemented features such as auto-scaling and cloud storage integration.",
              "code": null
            },
            {
              "question": "Which GCP concepts have you used?",
              "answer": "- Compute Engine for virtual machine management.\n- Google Cloud Storage for object storage.\n- Pub/Sub for messaging between services.\n- Cloud SQL for managed relational databases.\n- Cloud Load Balancing for distributing traffic.\n- Stackdriver for monitoring and logging.",
              "code": null
            },
            {
              "question": "Are you compatible with Java 8 streams?",
              "answer": "Yes, I am proficient with Java 8 streams. I use them for operations like filtering, mapping, reducing, and collecting data, which allows for a more functional programming approach.",
              "code": null
            },
            {
              "question": "You have one list; can you find how many times a given string occurs using streams?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "List<String> list = Arrays.asList(\"apple\", \"banana\", \"apple\", \"orange\", \"apple\");\nlong count = list.stream().filter(s -> s.equals(\"apple\")).count();\nSystem.out.println(count);  // Output: 3"
              }
            },
            {
              "question": "You have a list of strings; find the occurrence of each string using streams.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "List<String> list = Arrays.asList(\"apple\", \"banana\", \"apple\", \"orange\", \"banana\");\nMap<String, Long> result = list.stream()\n    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));\nSystem.out.println(result);  // Output: {banana=2, orange=1, apple=2}"
              }
            },
            {
              "question": "What is the difference between HashMap vs LinkedHashMap?",
              "answer": "",
              "code": null
            },
            {
              "question": "HashMap: Does not maintain insertion order.",
              "answer": "",
              "code": null
            },
            {
              "question": "LinkedHashMap: Maintains insertion order or access order.",
              "answer": "",
              "code": null
            },
            {
              "question": "You have String s1=\"hello\" and String s2=\"hellow\". What happens when using == and .equals()?",
              "answer": "- ==: Compares reference, so s1 == s2 returns false because they point to different objects.\n- .equals(): Compares value, so s1.equals(s2) returns false because their content is different.",
              "code": null
            },
            {
              "question": "What are exceptions, and can you give types of exceptions?",
              "answer": "Exceptions are events that disrupt normal program execution.",
              "code": null
            },
            {
              "question": "Checked Exceptions: Must be handled or declared, e.g., IOException.",
              "answer": "",
              "code": null
            },
            {
              "question": "Unchecked Exceptions: Include runtime exceptions like NullPointerException, ArithmeticException.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is a checked exception and unchecked exception? Give an example.",
              "answer": "",
              "code": null
            },
            {
              "question": "Checked Exception: Needs explicit handling.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "try {\n    FileReader file = new FileReader(\"file.txt\");\n} catch (FileNotFoundException e) {\n    e.printStackTrace();\n}"
              }
            },
            {
              "question": "Unchecked Exception: Occurs at runtime.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "int a = 10 / 0;  // ArithmeticException"
              }
            },
            {
              "question": "How strong are you in Java theory and programming? Give a rating out of 10.",
              "answer": "I would rate myself 8 out of 10.",
              "code": null
            },
            {
              "question": "Which data structures are you familiar with?",
              "answer": "Arrays, Lists, Maps, Sets, Stacks, Queues, and Trees.",
              "code": null
            },
            {
              "question": "What is the difference between Stack and Queue?",
              "answer": "",
              "code": null
            },
            {
              "question": "Stack: Follows LIFO (Last In First Out).",
              "answer": "",
              "code": null
            },
            {
              "question": "Queue: Follows FIFO (First In First Out).",
              "answer": "",
              "code": null
            },
            {
              "question": "Have you used try-with-resources? Give an example code.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "try (FileReader reader = new FileReader(\"file.txt\")) {\n    // Use the reader\n} catch (IOException e) {\n    e.printStackTrace();\n}"
              }
            },
            {
              "question": "When does a finally block never execute?",
              "answer": "- When System.exit() is called.\n- If a fatal JVM error occurs.",
              "code": null
            },
            {
              "question": "Given the code:",
              "answer": "Output: It prints \"finally\" and returns 5 (for inputs 10, 2).",
              "code": {
                "language": "java",
                "content": "int division(int a, int b) { \n    try {\n        return a / b;\n    } finally {\n        System.out.print(\"finally\");\n    }\n}"
              }
            },
            {
              "question": "How to create a custom exception? Give example code.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "class CustomException extends Exception {\n    public CustomException(String message) {\n        super(message);\n    }\n}"
              }
            },
            {
              "question": "What is a static method?",
              "answer": "A method that belongs to the class rather than any specific instance. It can be called without creating an object of the class.",
              "code": null
            },
            {
              "question": "If you have a class with a static method, is it possible to override it in a subclass?",
              "answer": "No, static methods cannot be overridden, but they can be hidden in a subclass.",
              "code": null
            },
            {
              "question": "What is the diamond problem?",
              "answer": "Occurs in languages that allow multiple inheritance, causing ambiguity. Java avoids this through interfaces with default methods.",
              "code": null
            },
            {
              "question": "What is the difference between a Java 7 interface and a Java 8 interface?",
              "answer": "",
              "code": null
            },
            {
              "question": "Java 7 Interface: Only abstract methods.",
              "answer": "",
              "code": null
            },
            {
              "question": "Java 8 Interface: Can have default and static methods.",
              "answer": "",
              "code": null
            },
            {
              "question": "You have an array arr[]={2,4,6,8,9}; how can you efficiently find the index of element 6? Write code logic and explain.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\n\npublic class BinarySearchExample {\n    public static void main(String[] args) {\n        int[] arr = {2, 4, 6, 8, 9};\n        int target = 6;\n\n        int index = Arrays.binarySearch(arr, target);\n        \n        if (index >= 0) {\n            System.out.println(\"Element found at index: \" + index);\n        } else {\n            System.out.println(\"Element not found\");\n        }\n    }\n}"
              }
            },
            {
              "question": "If you have a Java-based logic to fetch data from a database and use a join query to get data, which one is faster?",
              "answer": "Fetching data using a join query in SQL is generally faster because the database engine is optimized for such operations.",
              "code": null
            },
            {
              "question": "How do you get data from the database in Spring Boot?",
              "answer": "Using Spring Data JPA repositories:",
              "code": {
                "language": "java",
                "content": "@Autowired\nprivate UserRepository userRepository;\n\nList<User> users = userRepository.findAll();"
              }
            },
            {
              "question": "When you have a list containing data and want to remove data in the middle, which collection is best?",
              "answer": "LinkedList is better because it allows faster insertions and deletions in the middle.",
              "code": null
            },
            {
              "question": "If you have one list and it's iteration time, can you remove an element?",
              "answer": "Yes, using Iterator.remove() to avoid ConcurrentModificationException.",
              "code": null
            },
            {
              "question": "If you create a list using List.of() method, can you add data additionally?",
              "answer": "No, List.of() creates an immutable list.",
              "code": null
            },
            {
              "question": "Do you know design patterns?",
              "answer": "Yes, I am familiar with Singleton, Factory, Observer, and other design patterns.",
              "code": null
            },
            {
              "question": "What is the Singleton design pattern?",
              "answer": "A design pattern that ensures a class has only one instance and provides global access to it.",
              "code": null
            },
            {
              "question": "Write a code logic for the Singleton design pattern.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public class Singleton {\n    private static Singleton instance;\n\n    private Singleton() {}\n\n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}"
              }
            },
            {
              "question": "What is the default Spring Boot design pattern?",
              "answer": "The default design pattern in Spring Boot is the Dependency Injection pattern.",
              "code": null
            },
            {
              "question": "If you have multiple catch blocks, how do you handle which exception? Give an example.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "try {\n    // code\n} catch (IOException e) {\n    // handle IOException\n} catch (Exception e) {\n    // handle all other exceptions\n}"
              }
            },
            {
              "question": "If I catch a general exception and then catch an arithmetic exception, what will happen? Write code and explain.",
              "answer": "The more specific exception (ArithmeticException) should be caught first.\nOutput: \"Arithmetic Exception\".",
              "code": {
                "language": "java",
                "content": "try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Arithmetic Exception\");\n} catch (Exception e) {\n    System.out.println(\"General Exception\");\n}"
              }
            },
            {
              "question": "How familiar are you with SQL queries?",
              "answer": "I am quite familiar and can write complex queries with joins, subqueries, and aggregate functions.",
              "code": null
            },
            {
              "question": "What are the joins available in SQL?",
              "answer": "- Inner Join\n- Left Join (Left Outer Join)\n- Right Join (Right Outer Join)\n- Full Join (Full Outer Join)",
              "code": null
            },
            {
              "question": "Explain briefly about all SQL joins.",
              "answer": "",
              "code": null
            },
            {
              "question": "Inner Join: Returns records that have matching values in both tables.",
              "answer": "",
              "code": null
            },
            {
              "question": "Left Join: Returns all records from the left table and matched records from the right table.",
              "answer": "",
              "code": null
            },
            {
              "question": "Right Join: Returns all records from the right table and matched records from the left table.",
              "answer": "",
              "code": null
            },
            {
              "question": "Full Join: Returns all records when there is a match in either left or right table.",
              "answer": "",
              "code": null
            },
            {
              "question": "Why is the main method static?",
              "answer": "The main method is static because it allows the JVM to invoke it without instantiating the class.",
              "code": null
            },
            {
              "question": "What is polymorphism?",
              "answer": "Polymorphism allows one interface to be used for different data types, typically achieved through method overloading or overriding.",
              "code": null
            },
            {
              "question": "What is method overloading and method overriding? Give example code.",
              "answer": "",
              "code": null
            },
            {
              "question": "Method Overloading: Same method name, different parameters.",
              "answer": "",
              "code": null
            },
            {
              "question": "Method Overriding: Subclass redefines a method from the parent class.",
              "answer": "Overloading:\nOverriding:",
              "code": {
                "language": "java",
                "content": "class Parent {\n    void show() {}\n}\n\nclass Child extends Parent {\n    @Override\n    void show() {}\n}"
              }
            },
            {
              "question": "Based on the tables menu -> mid, itemid, order -> oid, cid, orderdate, customer -> cid, cname, address, find order ID based on customer name.",
              "answer": "",
              "code": {
                "language": "sql",
                "content": "SELECT order.oid \nFROM order \nINNER JOIN customer ON order.cid = customer.cid \nWHERE customer.cname = 'customer_name';"
              }
            },
            {
              "question": "Given employee data with id=1, sal=1000; id=2, sal=2000; id=3, sal=10000, find the second maximum salary.",
              "answer": "",
              "code": {
                "language": "sql",
                "content": "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);"
              }
            },
            {
              "question": "What is dependency injection? Give an example.",
              "answer": "Dependency Injection is a design pattern where an object's dependencies are provided rather than hard-coded within the object.",
              "code": {
                "language": "java",
                "content": "@Service\npublic class MyService {\n    private final MyRepository repository;\n\n    @Autowired\n    public MyService(MyRepository repository) {\n        this.repository = repository;\n    }\n}"
              }
            },
            {
              "question": "How many ways can dependency injection be done?",
              "answer": "- Constructor Injection\n- Setter Injection\n- Field Injection (not recommended)",
              "code": null
            }
          ]
        }
      ]
    },
    {
      "name": "Paypal-new Client",
      "questionCount": 10,
      "rounds": [
        {
          "name": "Techincal L1",
          "questions": [
            {
              "question": "Self-Introduction",
              "answer": "Hello, my name is-----. I have 3 years of experience as a Java Full Stack Developer, specializing in Java, Spring Boot, Hibernate, Microservices, and ReactJS. I have worked on multiple projects, including customer registration services and banking applications, where I implemented secure transaction handling, API development, and front-end components. I am proficient in writing clean, testable code using JUnit, Mockito, and TDD principles. I am also experienced in deploying applications using cloud platforms. I am eager to leverage my skills to contribute to innovative solutions in my next role.",
              "code": null
            },
            {
              "question": "Sorting an Array of {-1, 0, 1} in O(n) Time and O(1) Space",
              "answer": "Given an array containing only three types of elements (-1, 0, and 1), sort it in O(n) time and O(1) space complexity.\nInput: [1, 0, -1, 0, 1]\nOutput: [-1, 0, 0, 1, 1]",
              "code": {
                "language": "java",
                "content": "public class SortThreeElements {\n    public static void sortArray(int[] arr) {\n        int low = 0, mid = 0, high = arr.length - 1;\n        while (mid <= high) {\n            if (arr[mid] == -1) {\n                swap(arr, low, mid);\n                low++;\n                mid++;\n            } else if (arr[mid] == 0) {\n                mid++;\n            } else {\n                swap(arr, mid, high);\n                high--;\n            }\n        }\n    }\n\n    private static void swap(int[] arr, int i, int j) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 0, -1, 0, 1};\n        sortArray(arr);\n        System.out.println(Arrays.toString(arr));\n    }\n}"
              }
            },
            {
              "question": "Quantitative Trading Firm Profit Calculation",
              "answer": "A quantitative trading firm processes a list of events, each classified into one of four categories:",
              "code": null
            },
            {
              "question": "BUY <stock> <quantity>",
              "answer": ": Buy <quantity> shares of <stock> at market price.",
              "code": null
            },
            {
              "question": "SELL <stock> <quantity>",
              "answer": ": Sell <quantity> shares of <stock> at market price.",
              "code": null
            },
            {
              "question": "CHANGE <stock> <price>",
              "answer": ": Change market price of <stock> by <price> (can be positive or negative).",
              "code": null
            },
            {
              "question": "QUERY",
              "answer": ": Return the gross profit/loss from start to present.",
              "code": {
                "language": "java",
                "content": "import java.io.*;\nimport java.util.*;\n\n\npublic class Solution {\n    public static void main(String[] args) throws IOException {\n        List<String> events = Arrays.asList(\n            \"BUY googl 20\", \"BUY aapl 50\", \"CHANGE googl 6\", \n            \"QUERY\", \"SELL aapl 10\", \"CHANGE aapl -2\", \"QUERY\"\n        );\n\n        List<Long> result = Result.getNetProfit(events);\n        for (Long value : result) {\n            System.out.println(value);\n        }\n    }\n}\nclass Result {\n    public static List<Long> getNetProfit(List<String> events) {\n        List<Long> ansList = new ArrayList<>();\n        Map<String, Long> portfolio = new HashMap<>();\n        long query = 0;\n\n        for (String event : events) {\n            String[] word = event.split(\" \");\n            String type = word[0];\n\n            if (type.equals(\"QUERY\")) {\n                ansList.add(query);\n            } else {\n                String company = word[1];\n                long unit = Long.parseLong(word[2]);\n\n                switch (type) {\n                    case \"BUY\":\n                        portfolio.put(company, portfolio.getOrDefault(company, 0L) + unit);\n                        break;\n                    case \"SELL\":\n                        portfolio.put(company, portfolio.getOrDefault(company, 0L) - unit);\n                        break;\n                    case \"CHANGE\":\n                        if (portfolio.containsKey(company)) {\n                            query += portfolio.get(company) * unit;\n                        }\n                        break;\n                }\n            }\n        }\n        return ansList;\n    }\n}"
              }
            },
            {
              "question": "Another Trading Firm Example",
              "answer": "- The price of stock2 dropped by -8, affecting overall profit calculations.\n- Final profit/loss calculation after all events is 16.",
              "code": {
                "language": "java",
                "content": "-16"
              }
            }
          ]
        },
        {
          "name": "Techincal L2",
          "questions": [
            {
              "question": "Self-Introduction",
              "answer": "Hello, my name is-----. I have 3 years of experience as a Java Full Stack Developer, specializing in Java, Spring Boot, Hibernate, Microservices, and ReactJS. I have worked on multiple projects, including customer registration services and banking applications, where I implemented secure transaction handling, API development, and front-end components. I am proficient in writing clean, testable code using JUnit, Mockito, and TDD principles. I am also experienced in deploying applications using cloud platforms. I am eager to leverage my skills to contribute to innovative solutions in my next role.",
              "code": null
            },
            {
              "question": "Find the minimum element in a rotated sorted array. A rotated sorted array is an array that was originally sorted in increasing order but then rotated at some pivot. Your task is to find the minimum element in the given array in O(log N) time complexity.",
              "answer": "Input: [100,105,110,90,95]\nOutput: 90\nInput: [3,4,5,6,7,8,9,10,1,2]\nOutput: 1\nInput: [1,2,3,4,5,6,7,8,9,10]\nOutput: 1\nInput: [5,4,3,2,1]\nOutput: 1\n- The solution uses binary search, making it O(log N).",
              "code": {
                "language": "java",
                "content": "public class RotatedSortedArray {\n    public static int findMin(int[] nums) {\n        int left = 0, right = nums.length - 1;\n        \n        while (left < right) {\n            int mid = left + (right - left) / 2;\n            \n            if (nums[mid] > nums[right]) {\n                left = mid + 1;\n            } else {\n                right = mid;\n            }\n        }\n        return nums[left];\n    }\n\n    public static void main(String[] args) {\n        int[][] testCases = {\n            {100, 105, 110, 90, 95},\n            {3, 4, 5, 6, 7, 8, 9, 10, 1, 2},\n            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},\n            {5, 4, 3, 2, 1}\n        };\n\n        for (int[] testCase : testCases) {\n            System.out.println(\"Minimum Element: \" + findMin(testCase));\n        }\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 172
};
