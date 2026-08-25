// AUTO-GENERATED file — company-wise interview data.
// Source: ACL Digital (Paypal,Adobe) interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "acl-digital-paypal-adobe",
  "name": "ACL Digital (Paypal,Adobe)",
  "interviews": [
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
    }
  ],
  "questionCount": 112
};
