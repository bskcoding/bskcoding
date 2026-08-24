// AUTO-GENERATED file — company-wise interview data.
// Source: HCL interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "hcl",
  "name": "HCL",
  "interviews": [
    {
      "name": "HCL JAVA FSD",
      "questionCount": 61,
      "rounds": [
        {
          "name": "HCL L1",
          "questions": [
            {
              "question": "Brief about the project:",
              "answer": "- The project is focused on developing a distributed banking application that handles real-time transactions using microservices architecture. It includes features like customer registration, account management, and secure transaction processing. Technologies like Spring Boot, Kafka, Docker, and React are used, ensuring high scalability and reliability.",
              "code": null
            },
            {
              "question": "Explain Kafka architecture:",
              "answer": "- Kafka architecture consists of Producers, Consumers, Brokers, Topics, and Zookeeper. Producers send data to Kafka topics, while Consumers read data from these topics. Kafka Brokers manage the storage and retrieval of messages, and Zookeeper handles metadata, including leader election and partition management, ensuring Kafka's fault tolerance and distributed nature.",
              "code": null
            },
            {
              "question": "What is Jenkins and how do you use it?",
              "answer": "- Jenkins is an open-source automation server used for continuous integration and continuous delivery (CI/CD). It automates the build, test, and deployment processes, enabling faster and more reliable software delivery. I use Jenkins to trigger automated builds on code commits, run tests, and deploy applications to different environments.",
              "code": null
            },
            {
              "question": "What are the features of Java 17?",
              "answer": "- Java 17 includes several new features such as sealed classes, pattern matching for switch (preview), new macOS rendering pipeline, enhanced pseudo-random number generators, and the removal of the experimental AOT and JIT compilers. It also includes long-term support (LTS) for stability in enterprise applications.",
              "code": null
            },
            {
              "question": "What are the features of Java 8?",
              "answer": "- Java 8 introduced several major features, including Lambda expressions, the Stream API for functional-style operations on collections, the new Date and Time API (java.time), default methods in interfaces, and the Optional class to handle null values more gracefully.",
              "code": null
            },
            {
              "question": "Create a single thread in Java using different approaches (code):",
              "answer": "",
              "code": {
                "language": "java",
                "content": "// Using Thread class\nThread thread1 = new Thread() {\n    public void run() {\n        System.out.println(\"Thread using Thread class\");\n    }\n};\nthread1.start();\n\n// Using Runnable interface\nRunnable runnable = () -> System.out.println(\"Thread using Runnable interface\");\nThread thread2 = new Thread(runnable);\nthread2.start();\n\n// Using ExecutorService\nExecutorService executor = Executors.newSingleThreadExecutor();\nexecutor.submit(() -> System.out.println(\"Thread using ExecutorService\"));\nexecutor.shutdown();"
              }
            },
            {
              "question": "Create a text input and password input in React and display them when a button is clicked using functional components:",
              "answer": "",
              "code": {
                "language": "javascript",
                "content": "import React, { useState } from 'react';\n\nfunction App() {\n    const [text, setText] = useState('');\n    const [password, setPassword] = useState('');\n    const [show, setShow] = useState(false);\n\n    const handleClick = () => {\n        setShow(true);\n    };\n\n    return (\n        <div>\n            <input \n                type=\"text\" \n                placeholder=\"Enter text\" \n                value={text} \n                onChange={(e) => setText(e.target.value)} \n            />\n            <input \n                type=\"password\" \n                placeholder=\"Enter password\" \n                value={password} \n                onChange={(e) => setPassword(e.target.value)} \n            />\n            <button onClick={handleClick}>Show</button>\n            {show && (\n                <div>\n                    <p>Text: {text}</p>\n                    <p>Password: {password}</p>\n                </div>\n            )}\n        </div>\n    );\n}\n\nexport default App;"
              }
            },
            {
              "question": "Explain your weekly tasks:",
              "answer": "- My weekly tasks typically involve developing new features, fixing bugs, and optimizing existing code for better performance. I collaborate with team members in daily stand-up meetings, work on writing unit and integration tests, and participate in code reviews. Additionally, I contribute to the continuous integration pipeline and ensure smooth deployments.",
              "code": null
            },
            {
              "question": "What is Agile methodology?",
              "answer": "- Agile methodology is an iterative approach to software development and project management. It emphasizes collaboration, flexibility, and customer feedback, allowing teams to deliver small, functional pieces of software incrementally. Agile promotes adaptive planning, evolutionary development, early delivery, and continuous improvement.",
              "code": null
            },
            {
              "question": "What is Jira and how do you use it?",
              "answer": "- Jira is a project management tool used for tracking tasks, bugs, and issues. It supports Agile methodologies like Scrum and Kanban. I use Jira to manage and prioritize tasks, track progress through sprints, create and assign issues, and document project workflows. Jira also integrates with CI/CD pipelines for automated updates.",
              "code": null
            }
          ]
        },
        {
          "name": "HCL L2",
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
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\n\npublic class KaprekarRoutine {\n    public static void main(String[] args) {\n        int number = 6178;\n        int iterations = 0;\n\n        while (number != 6174 && number != 99) {\n            number = performKaprekarIteration(number);\n            System.out.println(\"Current number: \" + number);\n            iterations++;\n        }\n\n        System.out.println(\"Total iterations: \" + iterations);\n    }\n\n    private static int performKaprekarIteration(int number) {\n        String numStr = String.format(\"%04d\", number); // Pad with zeros if necessary\n        char[] numChars = numStr.toCharArray();\n        \n        Arrays.sort(numChars); // Ascending order\n        int smallNum = Integer.parseInt(new String(numChars));\n        \n        // Reverse the order for descending\n        String largeStr = new StringBuilder(new String(numChars)).reverse().toString();\n        int largeNum = Integer.parseInt(largeStr);\n        \n        return largeNum - smallNum;\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "HR",
          "questions": [
            {
              "question": "self-salary etc..",
              "answer": "",
              "code": null
            }
          ]
        }
      ]
    },
    {
      "name": "hcl",
      "questionCount": 16,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "What are the main features introduced in Java 8?",
              "answer": "- Lambda Expressions\n- Functional Interfaces\n- Streams API\n- Default Methods in Interfaces\n- Optional Class\n- New Date and Time API (java.time)\n- Nashorn JavaScript Engine\n- Method References",
              "code": null
            },
            {
              "question": "What are the key differences between an interface and an abstract class in Java?",
              "answer": "- Interfaces can only have abstract methods (until Java 8, which introduced default and static methods), while abstract classes can have both abstract and concrete methods.\n- A class can implement multiple interfaces but can inherit from only one abstract class.\n- Interfaces cannot have instance variables, while abstract classes can.\n- Interfaces provide a form of multiple inheritance; abstract classes provide a form of single inheritance.",
              "code": null
            },
            {
              "question": "How do you implement Executor Services in Java?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\n\npublic class ExecutorServiceExample {\n    public static void main(String[] args) {\n        ExecutorService executor = Executors.newFixedThreadPool(5);\n\n        for (int i = 0; i < 10; i++) {\n            Runnable worker = new WorkerThread(\"\" + i);\n            executor.execute(worker);\n        }\n        executor.shutdown();\n        while (!executor.isTerminated()) {\n        }\n        System.out.println(\"Finished all threads\");\n    }\n}\n\nclass WorkerThread implements Runnable {\n    private String command;\n\n    public WorkerThread(String s) {\n        this.command = s;\n    }\n\n    @Override\n    public void run() {\n        System.out.println(Thread.currentThread().getName() + \" Start. Command = \" + command);\n        processCommand();\n        System.out.println(Thread.currentThread().getName() + \" End.\");\n    }\n\n    private void processCommand() {\n        try {\n            Thread.sleep(5000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n}"
              }
            },
            {
              "question": "Which databases have you used in your projects, and what was your experience with them?",
              "answer": "MySQL: Used for web applications; strong support for transactions and data integrity.\nPostgreSQL: Preferred for complex queries and large datasets; excellent support for JSON data types and extensions.\nMongoDB: Utilized for handling unstructured data and fast prototyping; great for horizontal scaling.\nOracle: Employed in enterprise-level applications requiring robust security and advanced features.",
              "code": null
            },
            {
              "question": "How can you declare and use functional programming constructs in Java?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "// Lambda Expression\nList<String> names = Arrays.asList(\"John\", \"Jane\", \"Jack\");\nnames.forEach(name -> System.out.println(name));\n\n// Functional Interface Example\n@FunctionalInterface\ninterface MathOperation {\n    int operation(int a, int b);\n}\n\nMathOperation addition = (a, b) -> a + b;\nSystem.out.println(\"10 + 5 = \" + addition.operation(10, 5));"
              }
            },
            {
              "question": "What are the differences between @RestController and @Controller in Spring Boot?",
              "answer": "- @RestController is a combination of @Controller and @ResponseBody. It automatically serializes return objects into JSON or XML and writes them into the HTTP response.\n- @Controller is used to mark classes as Spring MVC controllers. Methods in these classes typically return view names and are resolved by view resolvers.",
              "code": null
            },
            {
              "question": "How do you schedule tasks in Spring Boot?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import org.springframework.scheduling.annotation.Scheduled;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class ScheduledTasks {\n\n    @Scheduled(fixedRate = 5000)\n    public void reportCurrentTime() {\n        System.out.println(\"The time is now \" + new Date());\n    }\n}"
              }
            },
            {
              "question": "How is Jenkins integrated with Spring Boot? What dependencies or configuration files are needed?",
              "answer": "Jenkinsfile\nDependencies\n- Jenkins server\n- Maven or Gradle for build automation\n- Docker for containerization (if deploying with Docker)",
              "code": {
                "language": "groovy",
                "content": "pipeline {\n    agent any\n    stages {\n        stage('Build') {\n            steps {\n                sh './mvnw clean package'\n            }\n        }\n        stage('Test') {\n            steps {\n                sh './mvnw test'\n            }\n        }\n        stage('Deploy') {\n            steps {\n                sh 'docker build -t spring-boot-app .'\n                sh 'docker run -d -p 8080:8080 spring-boot-app'\n            }\n        }\n    }\n}"
              }
            },
            {
              "question": "What is the difference between HashMap and ConcurrentHashMap in Java?",
              "answer": "- HashMap is not synchronized and is not thread-safe.\n- ConcurrentHashMap is thread-safe and allows concurrent access to its segments.",
              "code": null
            },
            {
              "question": "What are the key classes and interfaces in the java.util.concurrent package?",
              "answer": "Key Classes: ExecutorService, ScheduledExecutorService, Future, CountDownLatch, CyclicBarrier, Semaphore, ConcurrentHashMap, CopyOnWriteArrayList\nKey Interfaces: Executor, Callable, Future, BlockingQueue",
              "code": null
            },
            {
              "question": "Describe the collections framework in Java.",
              "answer": "Core Interfaces: Collection, List, Set, Queue, Map\nImplementations: ArrayList, LinkedList, HashSet, TreeSet, PriorityQueue, HashMap, TreeMap\nUtilities: Collections, Arrays",
              "code": null
            },
            {
              "question": "How do you use profiles in Spring Boot?",
              "answer": "",
              "code": {
                "language": "yaml",
                "content": "# application.yml\nspring:\n  profiles:\n    active: dev\n---\n# application-dev.yml\nserver:\n  port: 8081\n---\n# application-prod.yml\nserver:\n  port: 8082"
              }
            },
            {
              "question": "If both application.properties and application.yaml are present in a Spring Boot application, which one takes precedence?",
              "answer": "- application.properties takes precedence over application.yaml.",
              "code": null
            },
            {
              "question": "Explain the @Autowired annotation in Spring.",
              "answer": "- @Autowired is used for automatic dependency injection. Spring's dependency injection mechanism uses this annotation to resolve and inject collaborating beans into the desired bean.",
              "code": null
            },
            {
              "question": "Using a lambda expression, write a Java program to sum the elements of an array.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\npublic class SumArray {\npublic static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n\n    // Using a lambda expression with Stream API\n    int sum = Arrays.stream(array)\n                     .reduce(0, (a, b) -> a + b);\n\n    System.out.println(\"Sum: \" + sum);\n  }\n}"
              }
            },
            {
              "question": "Write a Java program to generate all permutations of an array using lambda expressions.",
              "answer": "Etc...",
              "code": {
                "language": "java",
                "content": "import java.util.ArrayList;\nimport java.util.List;\nimport java.util.stream.Collectors;\nimport java.util.stream.IntStream;\n\npublic class Permutations {\n    public static void main(String[] args) {\n        int[] array = {1, 2, 3};\n        List<List<Integer>> result = permute(array);\n        result.forEach(System.out::println);\n    }\n\n    public static List<List<Integer>> permute(int[] nums) {\n        return permute(IntStream.range(0, nums.length).boxed().collect(Collectors.toList()), nums);\n    }\n\n    private static List<List<Integer>> permute(List<Integer> indices, int[] nums) {\n        if (indices.isEmpty()) {\n            List<Integer> perm = new ArrayList<>();\n            for (int num : nums) {\n                perm.add(num);\n            }\n            return List.of(perm);\n        }\n\n        return indices.stream()\n            .flatMap(i -> {\n                List<Integer> remaining = new ArrayList<>(indices);\n                remaining.remove(Integer.valueOf(i));\n                return permute(remaining, swap(nums, i)).stream();\n            })\n            .collect(Collectors.toList());\n    }\n\n    private static int[] swap(int[] array, int i) {\n        int[] newArray = array.clone();\n        int temp = newArray[i];\n        newArray[i] = newArray[0];\n        newArray[0] = temp;\n        return newArray;\n    }\n}"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "HCL_0 to 2 Years Walkin",
      "questionCount": 55,
      "rounds": [
        {
          "name": "Online Assesment",
          "questions": [
            {
              "question": "52 Questions = 50 MCQ 1 Code 1 SQL",
              "answer": "",
              "code": null
            },
            {
              "question": "What is the output of the following pseudo-code?",
              "answer": "a) Animal sound\nb) Bark\nc) Compile-time error\nd) Runtime error\nAnswer: b) Bark",
              "code": {
                "language": "java",
                "content": "class Animal {\n    String sound() {\n        return \"Animal sound\";\n    }\n}\n\nclass Dog extends Animal {\n    String sound() {\n        return \"Bark\";\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal obj = new Dog();\n        System.out.println(obj.sound());\n    }\n}"
              }
            },
            {
              "question": "What happens if you call a static method on a subclass object?",
              "answer": "a) Parent\nb) Child\nc) Compile-time error\nd) Runtime error\nAnswer: a) Parent",
              "code": {
                "language": "java",
                "content": "class Parent {\n    static void display() {\n        System.out.println(\"Parent\");\n    }\n}\n\nclass Child extends Parent {\n    static void display() {\n        System.out.println(\"Child\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Parent obj = new Child();\n        obj.display();\n    }\n}"
              }
            },
            {
              "question": "How do you enforce a class to have certain methods in Java?",
              "answer": "a) By inheriting from another class\nb) By implementing an interface\nc) By using a static method\nd) By overriding methods\nAnswer: b) By implementing an interface",
              "code": {
                "language": "java",
                "content": "interface Vehicle {\n    void start();\n    void stop();\n}\n\nclass Car implements Vehicle {\n    // <missing_methods>\n}"
              }
            },
            {
              "question": "What is the output of this inheritance pseudo-code?",
              "answer": "a) 5\nb) 6\nc) Compile-time error\nd) Runtime error\nAnswer: a) 5",
              "code": {
                "language": "java",
                "content": "class A {\n    int add(int x, int y) {\n        return x + y;\n    }\n}\n\nclass B extends A {\n    int add(int x, int y) {\n        return x * y;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        A obj = new B();\n        System.out.println(obj.add(2, 3));\n    }\n}"
              }
            },
            {
              "question": "What is the purpose of using super in inheritance?",
              "answer": "a) To call the parent's constructor\nb) To override a method in the parent class\nc) To access a private method in the parent class\nd) None of the above\nAnswer: a) To call the parent's constructor",
              "code": {
                "language": "java",
                "content": "class Parent {\n    Parent() {\n        System.out.println(\"Parent Constructor\");\n    }\n}\n\nclass Child extends Parent {\n    Child() {\n        super();\n        System.out.println(\"Child Constructor\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new Child();\n    }\n}"
              }
            },
            {
              "question": "How do you filter a list of numbers to get even numbers only?",
              "answer": "a) filter(x -> x % 2 == 0)\nb) map(x -> x % 2 == 0)\nc) forEach(x -> x % 2 == 0)\nd) None of the above\nAnswer: a) filter(x -> x % 2 == 0)",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nList<Integer> evens = numbers.stream()\n    .<missing_code>\n    .collect(Collectors.toList());"
              }
            },
            {
              "question": "How do you sort a list of strings using streams?",
              "answer": "a) filter()\nb) sorted()\nc) collect()\nd) map()\nAnswer: b) sorted()",
              "code": {
                "language": "java",
                "content": "List<String> names = Arrays.asList(\"Bob\", \"Alice\", \"Charlie\");\nList<String> sortedNames = names.stream()\n    .<missing_code>\n    .collect(Collectors.toList());"
              }
            },
            {
              "question": "How do you convert a list of integers into their squares?",
              "answer": "a) map(x -> x * x)\nb) filter(x -> x * x)\nc) flatMap(x -> x * x)\nd) None of the above\nAnswer: a) map(x -> x * x)",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(1, 2, 3, 4);\nList<Integer> squares = numbers.stream()\n    .<missing_code>\n    .collect(Collectors.toList());"
              }
            },
            {
              "question": "How do you group employees by department using streams?",
              "answer": "a) collect(Collectors.groupingBy(Employee::getDepartment))\nb) collect(Collectors.toMap(Employee::getDepartment))\nc) groupBy(Employee::getDepartment)\nd) None of the above\nAnswer: a) collect(Collectors.groupingBy(Employee::getDepartment))",
              "code": {
                "language": "java",
                "content": "Map<String, List<Employee>> grouped = employees.stream()\n    .<missing_code>;"
              }
            },
            {
              "question": "How do you find the first element in a stream?",
              "answer": "a) findFirst()\nb) findAny()\nc) filter()\nd) map()\nAnswer: a) findFirst()",
              "code": {
                "language": "java",
                "content": "Optional<Integer> first = numbers.stream()\n    .<missing_code>;"
              }
            },
            {
              "question": "What will be the output of the following code?",
              "answer": "a) 10\nb) 20\nc) Compile-time error\nd) None of the above\nAnswer: b) 20",
              "code": {
                "language": "java",
                "content": "int x = 10, y = 20;\nint result = (x > y) ? x : y;\nSystem.out.println(result);"
              }
            },
            {
              "question": "How do you check if a string starts with \"Hello\"?",
              "answer": "a) startsWith\nb) endsWith\nc) contains\nd) equals\nAnswer: a) startsWith",
              "code": {
                "language": "java",
                "content": "String str = \"Hello World\";\nboolean result = str.<missing_code>(\"Hello\");"
              }
            },
            {
              "question": "What is the output of this pseudo-code?",
              "answer": "a) Static method in Test\nb) NullPointerException\nc) Compile-time error\nd) Runtime error\nAnswer: a) Static method in Test",
              "code": {
                "language": "java",
                "content": "class Test {\n    static void display() {\n        System.out.println(\"Static method in Test\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Test obj = null;\n        obj.display();\n    }\n}"
              }
            },
            {
              "question": "How do you calculate the sum of all elements in a list using streams?",
              "answer": "a) reduce((a, b) -> a + b).get()\nb) reduce(0, (a, b) -> a + b)\nc) mapToInt(x -> x).sum()\nd) None of the above\nAnswer: b) reduce(0, (a, b) -> a + b)",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nint sum = numbers.stream()\n    .<missing_code>\n    .orElse(0);"
              }
            },
            {
              "question": "What happens if you override equals but not hashCode?",
              "answer": "a) 1\nb) 2\nc) Compile-time error\nd) Runtime error\nAnswer: b) 2",
              "code": {
                "language": "java",
                "content": "class Person {\n    private String name;\n    private int age;\n\n    @Override\n    public boolean equals(Object obj) {\n        // custom logic here\n    }\n}\n\npublic static void main(String[] args) {\n    HashSet<Person> set = new HashSet<>();\n    set.add(new Person(\"Alice\", 25));\n    set.add(new Person(\"Alice\", 25));\n    System.out.println(set.size());\n}"
              }
            },
            {
              "question": "What is the purpose of the final keyword in Java?",
              "answer": "a) To prevent inheritance\nb) To make a variable constant\nc) To prevent method overriding\nd) All of the above\nAnswer: d) All of the above",
              "code": {
                "language": "java",
                "content": "final class Test {\n    final int x = 10;\n\n    final void display() {\n        System.out.println(\"Final method\");\n    }\n}"
              }
            },
            {
              "question": "How do you find the maximum value in a list using streams?",
              "answer": "a) reduce(Integer::max)\nb) max(Integer::compare)\nc) mapToInt(x -> x).max()\nd) Any of the above\nAnswer: d) Any of the above",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);\nOptional<Integer> max = numbers.stream()\n    .<missing_code>;"
              }
            },
            {
              "question": "What is the output of this method reference example?",
              "answer": "a) Compile-time error\nb) Hello World\nc) NullPointerException\nd) None of the above\nAnswer: b) Hello World",
              "code": {
                "language": "java",
                "content": "class Test {\n    void display(String msg) {\n        System.out.println(msg);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Test obj = new Test();\n        Consumer<String> ref = obj::display;\n        ref.accept(\"Hello World\");\n    }\n}"
              }
            },
            {
              "question": "What is the purpose of the Optional class in Java?",
              "answer": "a) To avoid null pointer exceptions\nb) To simplify null checks\nc) To provide default values when null\nd) All of the above\nAnswer: d) All of the above",
              "code": {
                "language": "java",
                "content": "Optional<String> opt = Optional.ofNullable(null);\nSystem.out.println(opt.orElse(\"Default Value\"));"
              }
            },
            {
              "question": "How do you create a custom functional interface in Java?",
              "answer": "a) (x, y) -> x + y\nb) new Calculator()\nc) Calculator::calculate\nd) None of the above\nAnswer: a) (x, y) -> x + y",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\ninterface Calculator {\n    int calculate(int a, int b);\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Calculator add = <missing_code>;\n        System.out.println(add.calculate(10, 20));\n    }\n}"
              }
            },
            {
              "question": "How do you find duplicate elements in a list using streams?",
              "answer": "a) filter(x -> Collections.frequency(numbers, x) > 1)\nb) groupBy(x -> x)\nc) distinct()\nd) None of the above\nAnswer: a) filter(x -> Collections.frequency(numbers, x) > 1)",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 1, 3);\nSet<Integer> duplicates = numbers.stream()\n    .<missing_code>\n    .collect(Collectors.toSet());"
              }
            },
            {
              "question": "What is the output of this method chaining example?",
              "answer": "a) JOHN JANE JAKE\nb) Runtime error\nc) Compile-time error\nd) None of the above\nAnswer: a) JOHN JANE JAKE",
              "code": {
                "language": "java",
                "content": "List<String> names = Arrays.asList(\"John\", \"Jane\", \"Jake\");\nnames.stream()\n    .filter(name -> name.startsWith(\"J\"))\n    .map(String::toUpperCase)\n    .forEach(System.out::println);"
              }
            },
            {
              "question": "What happens if a stream is reused?",
              "answer": "a) All elements printed twice\nb) Stream reused without issues\nc) IllegalStateException\nd) None of the above\nAnswer: c) IllegalStateException",
              "code": {
                "language": "java",
                "content": "Stream<String> stream = Stream.of(\"A\", \"B\", \"C\");\nstream.forEach(System.out::println);\nstream.forEach(System.out::println);"
              }
            },
            {
              "question": "What is the output of the following?",
              "answer": "a) 1 2 3 4 5\nb) Infinite loop\nc) Compile-time error\nd) None of the above\nAnswer: a) 1 2 3 4 5",
              "code": {
                "language": "java",
                "content": "Stream<Integer> numbers = Stream.iterate(1, n -> n + 1);\nnumbers.limit(5)\n    .forEach(System.out::println);"
              }
            },
            {
              "question": "How do you concatenate two streams in Java?",
              "answer": "a) Stream.concat(s1, s2)\nb) s1.addAll(s2)\nc) s1.merge(s2)\nd) None of the above\nAnswer: a) Stream.concat(s1, s2)",
              "code": {
                "language": "java",
                "content": "Stream<Integer> s1 = Stream.of(1, 2, 3);\nStream<Integer> s2 = Stream.of(4, 5, 6);\nStream<Integer> combined = <missing_code>;"
              }
            },
            {
              "question": "What happens when an exception is thrown inside a stream pipeline?",
              "answer": "a) All elements processed\nb) ArithmeticException\nc) Compile-time error\nd) None of the above\nAnswer: b) ArithmeticException",
              "code": {
                "language": "java",
                "content": "Stream<Integer> numbers = Stream.of(1, 2, 0);\nnumbers.map(x -> 10 / x)\n    .forEach(System.out::println);"
              }
            },
            {
              "question": "How do you handle exceptions in streams?",
              "answer": "a) try-catch inside lambda\nb) Custom exception handler\nc) Both a and b\nd) None of the above\nAnswer: c) Both a and b",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(1, 2, 0);\nList<Integer> results = numbers.stream()\n    .<missing_code>\n    .collect(Collectors.toList());"
              }
            },
            {
              "question": "What is the difference between map and flatMap?",
              "answer": "a) map processes elements, flatMap flattens nested streams\nb) Both are the same\nc) Both flatten nested lists\nd) None of the above\nAnswer: a) map processes elements, flatMap flattens nested streams",
              "code": {
                "language": "java",
                "content": "List<List<Integer>> numbers = Arrays.asList(\n    Arrays.asList(1, 2, 3),\n    Arrays.asList(4, 5, 6)\n);\nList<Integer> flat = numbers.stream()\n    .flatMap(List::stream)\n    .collect(Collectors.toList());"
              }
            },
            {
              "question": "Which of the following ensures a thread-safe Singleton class?",
              "answer": "a) Use double-checked locking as shown in the code.\nb) Use a synchronized method instead of a synchronized block.\nc) Use an enum to implement Singleton.\nd) All of the above.\nAnswer: d) All of the above.",
              "code": {
                "language": "java",
                "content": "public class Singleton {\n    private static Singleton instance;\n\n    private Singleton() {}\n\n    public static Singleton getInstance() {\n        if (instance == null) {\n            synchronized (Singleton.class) {\n                if (instance == null) {\n                    instance = new Singleton();\n                }\n            }\n        }\n        return instance;\n    }\n}"
              }
            },
            {
              "question": "What is the output of this pseudo-code for a Singleton class?",
              "answer": "a) Constructor Called\ntrue\nb) Constructor Called\nConstructor Called\nfalse\nc) true\nd) Compile-time error\nAnswer: a) Constructor Called\ntrue",
              "code": {
                "language": "java",
                "content": "public class Singleton {\n    private static Singleton instance = new Singleton();\n\n    private Singleton() {\n        System.out.println(\"Constructor Called\");\n    }\n\n    public static Singleton getInstance() {\n        return instance;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Singleton s1 = Singleton.getInstance();\n        Singleton s2 = Singleton.getInstance();\n        System.out.println(s1 == s2);\n    }\n}"
              }
            },
            {
              "question": "Given a table Employee with columns id, name, and salary, write a query to find the highest salary from the table.",
              "answer": "a) SELECT MAX(salary) FROM Employee;\nb) SELECT salary FROM Employee ORDER BY salary DESC LIMIT 1;\nc) SELECT salary FROM Employee WHERE salary = (SELECT MAX(salary) FROM Employee);\nd) All of the above\nAnswer: d) All of the above",
              "code": null
            },
            {
              "question": "Given a table Student with a marks column, write a query to count the number of students who have grade 'A' (marks > 80), grade 'B' (marks > 70), grade 'C' (marks > 50), and grade 'F' (marks <= 50).",
              "answer": "a)\nb)\nc)\nd)\nAnswer: a)",
              "code": {
                "language": "sql",
                "content": "SELECT marks FROM Student ORDER BY marks DESC;"
              }
            },
            {
              "question": "Given two tables, Employee(id, name, department_id) and Department(id, name), write a query to list all employees with their department names.",
              "answer": "a)\nb)\nc)\nd) All of the above\nAnswer: d) All of the above",
              "code": {
                "language": "sql",
                "content": "SELECT Employee.name, Department.name FROM Employee JOIN Department ON Employee.department_id = Department.id;"
              }
            },
            {
              "question": "Write a query to count the number of employees in each department.",
              "answer": "a)\nb)\nc)\nd)\nAnswer: a) SELECT department_id, COUNT(*) FROM Employee GROUP BY department_id;",
              "code": {
                "language": "sql",
                "content": "SELECT department_id FROM Employee;"
              }
            },
            {
              "question": "Write a query to increase the salary by 10% for all employees in department 2.",
              "answer": "a)\nb)\nc)\nd) Both a) and b)\nAnswer: d) Both a) and b)",
              "code": {
                "language": "sql",
                "content": "UPDATE Employee SET salary = salary + 10 WHERE department_id = 2;"
              }
            },
            {
              "question": "Which CSS property is used to align items in a flex container along the cross-axis?",
              "answer": "a) align-items\nb) justify-content\nc) align-self\nd) flex-direction\nAnswer: a) align-items",
              "code": null
            },
            {
              "question": "Which property is used to position an element relative to its normal position in CSS?",
              "answer": "a) absolute\nb) relative\nc) fixed\nd) sticky\nAnswer: b) relative",
              "code": null
            },
            {
              "question": "Which of the following properties is used to set the margin between an element's border and its surroundings?",
              "answer": "a) border\nb) padding\nc) margin\nd) content\nAnswer: c) margin",
              "code": null
            },
            {
              "question": "Which CSS rule is used for applying styles based on screen width?",
              "answer": "a) @screen\nb) @media\nc) @viewport\nd) @responsive\nAnswer: b) @media",
              "code": null
            },
            {
              "question": "Which CSS property controls the stacking order of elements?",
              "answer": "a) z-order\nb) z-index\nc) order\nd) stacking\nAnswer: b) z-index",
              "code": null
            },
            {
              "question": "Which HTML tag is used to create a table header?",
              "answer": "a) <thead>\nb) <th>\nc) <tr>\nd) <table>\nAnswer: b) <th>",
              "code": null
            },
            {
              "question": "Which attribute is used to specify the destination of a hyperlink?",
              "answer": "a) href\nb) src\nc) link\nd) target\nAnswer: a) href",
              "code": null
            },
            {
              "question": "Which element is used to define a form in HTML?",
              "answer": "a) <form>\nb) <input>\nc) <textarea>\nd) <button>\nAnswer: a) <form>",
              "code": null
            },
            {
              "question": "Which tag is used to define an ordered list?",
              "answer": "a) <ul>\nb) <li>\nc) <ol>\nd) <dl>\nAnswer: c) <ol>",
              "code": null
            },
            {
              "question": "Which attribute is used to provide an alternative text for an image in HTML?",
              "answer": "a) alt\nb) title\nc) src\nd) desc\nAnswer: a) alt",
              "code": null
            },
            {
              "question": "Which of the following is the correct way to declare a function in JavaScript?",
              "answer": "a) function myFunction() {}\nb) let myFunction() {}\nc) function = myFunction() {}\nd) myFunction() function {}\nAnswer: a) function myFunction() {}",
              "code": null
            },
            {
              "question": "How do you access the second element in an array arr = [10, 20, 30]?",
              "answer": "a) arr[2]\nb) arr[1]\nc) arr(2)\nd) arr[3]\nAnswer: b) arr[1]",
              "code": null
            },
            {
              "question": "How do you access the name property of an object person = {name: \"John\", age: 30}?",
              "answer": "a) person[\"name\"]\nb) person.name\nc) person[name]\nd) Both a) and b)\nAnswer: d) Both a) and b)",
              "code": null
            },
            {
              "question": "Which method is used to attach an event listener to an element in JavaScript?",
              "answer": "a) addEvent()\nb) attachEvent()\nc) addEventListener()\nd) bindEvent()\nAnswer: c) addEventListener()",
              "code": null
            },
            {
              "question": "Which JavaScript loop will print numbers from 1 to 5?",
              "answer": "a)\nb)\nc)\nd) All of the above\nAnswer: d) All of the above",
              "code": {
                "language": "javascript",
                "content": "while (i < 5) {\n    console.log(i);\n    i++;\n}"
              }
            },
            {
              "question": "SQL Query",
              "answer": "",
              "code": null
            },
            {
              "question": "Question:",
              "answer": "A student table contains a marks column. Display the count of students in each grade:\n- A: Marks > 80\n- B: Marks > 70 and <= 80\n- C: Marks > 50 and <= 70\n- F: Marks <= 50\nSQL Query:",
              "code": {
                "language": "sql",
                "content": "SELECT \n    CASE \n        WHEN marks > 80 THEN 'A'\n        WHEN marks > 70 THEN 'B'\n        WHEN marks > 50 THEN 'C'\n        ELSE 'F'\n    END AS Grade,\n    COUNT(*) AS Count\nFROM student\nGROUP BY \n    CASE \n        WHEN marks > 80 THEN 'A'\n        WHEN marks > 70 THEN 'B'\n        WHEN marks > 50 THEN 'C'\n        ELSE 'F'\n    END;"
              }
            },
            {
              "question": "Coding",
              "answer": "",
              "code": null
            },
            {
              "question": "Question:",
              "answer": "Write a method to find the name with the highest score based on the input strings.\n- L = 1 point, M = 3 points, H = 5 points.\nExample: findHighScore(\"LMM\", \"HHH\") should return \"shirly\" because HHH (15 points) is greater than LMM (7 points).",
              "code": {
                "language": "java",
                "content": "public class HighScore {\n    public static String findHighScore(String bob, String shirly) {\n        int bobScore = calculateScore(bob);\n        int shirlyScore = calculateScore(shirly);\n\n        return bobScore > shirlyScore ? \"bob\" : \"shirly\";\n    }\n\n    private static int calculateScore(String input) {\n        int score = 0;\n        for (char ch : input.toCharArray()) {\n            if (ch == 'L') score += 1;\n            else if (ch == 'M') score += 3;\n            else if (ch == 'H') score += 5;\n        }\n        return score;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(findHighScore(\"LMM\", \"HHH\")); // Output: shirly\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 132
};
