// AUTO-GENERATED file — company-wise interview data.
// Source: Tech Mahindra interview document(s).
// Do not edit manually — regenerate with: node scripts/_build-tm.cjs

export const company = {
  "id": "tech-mahindra",
  "name": "Tech Mahindra",
  "interviews": [
    {
      "name": "TechMahindra",
      "questionCount": 35,
      "rounds": [
        {
          "name": "Technical Interview",
          "questions": [
            {
              "question": "What are the new features in Java 8?",
              "answer": "Lambda Expressions, Stream API, Optional Class, Default Methods in Interfaces, Method References, New Date and Time API (java.time), Nashorn JavaScript Engine.",
              "code": null
            },
            {
              "question": "What is batch processing in Java?",
              "answer": "Batch processing refers to executing a series of jobs without manual intervention. It can be implemented using frameworks like Spring Batch, which provides reusable functions that process large volumes of data.",
              "code": null
            },
            {
              "question": "What is job scheduling in Java?",
              "answer": "Job scheduling involves setting up tasks to run at specified times or intervals. Java provides APIs like java.util.Timer and java.util.concurrent.ScheduledExecutorService. Libraries like Quartz Scheduler offer more advanced features.",
              "code": {
                "language": "java",
                "content": "ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);\nscheduler.scheduleAtFixedRate(() -> System.out.println(\"Task\"), 0, 1, TimeUnit.SECONDS);"
              }
            },
            {
              "question": "What are the inbuilt Java functional interfaces?",
              "answer": "Predicate<T>, Function<T,R>, Supplier<T>, Consumer<T>, BiFunction<T,U,R>.",
              "code": {
                "language": "java",
                "content": "Predicate<Integer> isEven = n -> n % 2 == 0;\nFunction<String, Integer> length = String::length;\nSupplier<Double> random = Math::random;\nConsumer<String> print = System.out::println;"
              }
            },
            {
              "question": "What is the difference between an interface and a functional interface?",
              "answer": "An interface can have any number of abstract methods. A functional interface has exactly one abstract method and can have any number of default or static methods. It is used as the assignment target for lambda expressions.",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\ninterface Calculator { int add(int a, int b); }"
              }
            },
            {
              "question": "Explain the Singleton design pattern.",
              "answer": "The Singleton design pattern ensures that a class has only one instance and provides a global point of access to it. It is implemented by making the constructor private and providing a static method that returns the instance.",
              "code": {
                "language": "java",
                "content": "public class Singleton {\n    private static Singleton instance;\n    private Singleton() { }\n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}"
              }
            },
            {
              "question": "How can you break the Singleton design pattern?",
              "answer": "Using reflection to call the private constructor, using serialization and deserialization, using cloning.",
              "code": null
            },
            {
              "question": "What is a default method in Java and what is its use?",
              "answer": "A default method in an interface provides a default implementation that can be overridden by implementing classes. It allows interfaces to evolve without breaking existing implementations.",
              "code": {
                "language": "java",
                "content": "interface Vehicle { default void start() { System.out.println(\"Starting\"); } }"
              }
            },
            {
              "question": "How do you handle errors in Java?",
              "answer": "Using try-catch blocks to catch and handle exceptions, using throws keyword to declare exceptions, using custom exception classes for specific error handling.",
              "code": {
                "language": "java",
                "content": "try { riskyOperation(); } catch (Exception e) { e.printStackTrace(); }"
              }
            },
            {
              "question": "How many types of exceptions are there in Java?",
              "answer": "Checked exceptions (subclasses of Exception except RuntimeException), Unchecked exceptions (subclasses of RuntimeException), Errors (subclasses of Error).",
              "code": null
            },
            {
              "question": "Explain checked and unchecked exceptions.",
              "answer": "Checked exceptions must be declared in a method's throws clause if they can be thrown. Unchecked exceptions do not need to be declared in a throws clause.",
              "code": {
                "language": "java",
                "content": "// Checked - must handle\npublic void readFile() throws IOException { }\n// Unchecked - optional\npublic void divide() throws ArithmeticException { }"
              }
            },
            {
              "question": "What is the difference between shallow copy and deep copy?",
              "answer": "Shallow copy copies the object's fields as they are - only reference is copied for objects. Deep copy creates a new instance of each object, recursively copying all nested objects.",
              "code": {
                "language": "java",
                "content": "// Shallow\nEmployee emp2 = emp1; // Same reference\n// Deep\nEmployee emp2 = new Employee(emp1.getName()); // New object"
              }
            },
            {
              "question": "If you throw an IOException inside a try block, can you handle it in a catch block with a runtime exception?",
              "answer": "No, it will not work. IOException is a checked exception and must be caught or declared. A catch block for runtime exception (unchecked) will not handle it.",
              "code": null
            },
            {
              "question": "What is serialization and deserialization?",
              "answer": "Serialization is converting an object into a byte stream for storage or transmission. Deserialization is converting a byte stream back into an object.",
              "code": {
                "language": "java",
                "content": "// Serialization\nObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(\"file.ser\"));\noos.writeObject(obj);\n// Deserialization\nObjectInputStream ois = new ObjectInputStream(new FileInputStream(\"file.ser\"));\nObject obj = ois.readObject();"
              }
            },
            {
              "question": "Implement a generic double linked list with a method to remove an element based on the index in Java.",
              "answer": "Create DoublyLinkedList class with Node inner class. Implement remove(int index) method traversing to index and updating prev/next pointers.",
              "code": {
                "language": "java",
                "content": "public class DoublyLinkedList<T> {\n    class Node { T data; Node prev, next; Node(T data) { this.data = data; } }\n    private Node head, tail;\n    public void remove(int index) {\n        if (index < 0) return;\n        Node current = head;\n        for (int i = 0; i < index && current != null; i++) {\n            current = current.next;\n        }\n        if (current == null) return;\n        if (current.prev != null) {\n            current.prev.next = current.next;\n        } else {\n            head = current.next;\n        }\n        if (current.next != null) {\n            current.next.prev = current.prev;\n        } else {\n            tail = current.prev;\n        }\n    }\n}"
              }
            },
            {
              "question": "Given two arrays, combine them into a single sorted array.",
              "answer": "Use merge logic similar to merge sort - compare elements and add smaller one.",
              "code": {
                "language": "java",
                "content": "int[] solution(int[] list1, int[] list2) {\n    int i = 0, j = 0, a = list1.length - 1, b = list2.length - 1;\n    int[] ans = new int[a + 1 + b + 1];\n    int k = 0;\n    while (i <= a || j <= b) {\n        if (i <= a && j <= b) {\n            if (list1[i] <= list2[j]) {\n                ans[k++] = list1[i++];\n            } else {\n                ans[k++] = list2[j++];\n            }\n        } else if (i <= a) {\n            ans[k++] = list1[i++];\n        } else if (j <= b) {\n            ans[k++] = list2[j++];\n        }\n    }\n    return ans;\n}"
              }
            },
            {
              "question": "Ladder array code in Java.",
              "answer": "Create 2D array where row i has i+1 elements with values 1 to i+1.",
              "code": {
                "language": "java",
                "content": "public void printLadderArray(int n) {\n    int[][] ladder = new int[n][];\n    for (int i = 0; i < n; i++) {\n        ladder[i] = new int[i + 1];\n        for (int j = 0; j < i + 1; j++) {\n            ladder[i][j] = j + 1;\n        }\n    }\n    for (int[] row : ladder) {\n        System.out.println(Arrays.toString(row));\n    }\n}"
              }
            },
            {
              "question": "What are profiles in Spring Boot?",
              "answer": "Profiles in Spring Boot are a way to segregate parts of your application configuration and make it only available in certain environments. Activate using --spring.profiles.active command-line argument.",
              "code": {
                "language": "properties",
                "content": "spring.profiles.active=dev\n# application-dev.properties\nserver.port=8081"
              }
            },
            {
              "question": "How do you provide security in Spring Boot?",
              "answer": "By using Spring Security, which provides authentication and authorization. Common methods include in-memory authentication, JDBC authentication, and LDAP authentication.",
              "code": {
                "language": "java",
                "content": "@Configuration\n@EnableWebSecurity\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.authorizeRequests().anyRequest().authenticated();\n    }\n}"
              }
            },
            {
              "question": "Explain the process of JWT token-based authentication.",
              "answer": "Client sends login credentials -> Server validates and generates JWT token -> Client stores token and includes in Authorization header -> Server validates token and processes request.",
              "code": null
            },
            {
              "question": "What classes do you use in JWT token security?",
              "answer": "JwtTokenProvider for token generation and validation, JwtAuthenticationFilter to filter and validate requests, JwtAuthenticationEntryPoint for handling authentication errors.",
              "code": null
            },
            {
              "question": "Why do you need the UserDetails class in Spring Security?",
              "answer": "The UserDetails class represents core user information. It provides necessary information like username, password, and authorities for authentication and authorization.",
              "code": {
                "language": "java",
                "content": "public class MyUserDetails implements UserDetails {\n    private String username;\n    private String password;\n    private List<GrantedAuthority> authorities;\n}"
              }
            },
            {
              "question": "How do you handle exceptions in Spring Boot?",
              "answer": "Using @ControllerAdvice and @ExceptionHandler to handle exceptions globally. Customizing error response with ResponseEntity.",
              "code": {
                "language": "java",
                "content": "@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleException(Exception e) {\n        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());\n    }\n}"
              }
            },
            {
              "question": "What is fault tolerance in microservices?",
              "answer": "Fault tolerance is the ability of a system to continue operating properly in the event of component failure. Achieved using patterns like circuit breaker, retry mechanisms, and fallback methods.",
              "code": null
            },
            {
              "question": "What is logging and distributed tracing in microservices?",
              "answer": "Logging records information about system operation. Distributed tracing tracks and analyzes requests as they propagate through distributed system. Tools: ELK stack, Zipkin, Jaeger.",
              "code": null
            },
            {
              "question": "How do you communicate between one microservice and another microservice?",
              "answer": "Using REST APIs over HTTP, messaging queues like RabbitMQ or Kafka, using gRPC for efficient communication.",
              "code": null
            },
            {
              "question": "How do you limit requests in microservices?",
              "answer": "Using rate limiting techniques (token bucket algorithm, leaky bucket algorithm). Implementing API gateway tools like Netflix Zuul or Spring Cloud Gateway.",
              "code": null
            },
            {
              "question": "What is a Kafka server?",
              "answer": "Kafka is a distributed event streaming platform capable of handling high throughput and low-latency data streams. Used for building real-time data pipelines and streaming applications.",
              "code": null
            },
            {
              "question": "Explain Jenkins and its use in microservices.",
              "answer": "Jenkins is a CI/CD tool that automates building, testing, and deploying applications. In microservices, Jenkins manages pipelines for each microservice, ensuring smooth integration and deployment.",
              "code": null
            }
          ]
        },
        {
          "name": "HR Round",
          "questions": [
            {
              "question": "Tell me about yourself.",
              "answer": "I am [Your Name] with 3 years of experience as a Java Full Stack Developer. I specialize in Spring Boot, React, and Microservices. I have worked on banking applications and customer registration systems. I am passionate about building scalable applications and learning new technologies.",
              "code": null
            },
            {
              "question": "Why do you want to join Tech Mahindra?",
              "answer": "Tech Mahindra is a global leader in IT services. I'm excited about the opportunity to work on innovative projects, learn from industry experts, and contribute to the company's growth.",
              "code": null
            },
            {
              "question": "What are your salary expectations?",
              "answer": "Based on my experience and market standards, I am looking for a competitive package. I'm flexible and happy to discuss further based on the role.",
              "code": null
            },
            {
              "question": "Where do you see yourself in 5 years?",
              "answer": "I see myself as a technical lead, contributing to architecture decisions, mentoring junior developers, and driving technical excellence.",
              "code": null
            },
            {
              "question": "What are your strengths and weaknesses?",
              "answer": "Strengths: Quick learner, problem-solving skills, strong technical foundation, good team player. Weakness: Sometimes focus too much on perfection, working on delegating tasks better.",
              "code": null
            },
            {
              "question": "Why are you looking for a job change?",
              "answer": "Looking for better growth opportunities, challenging projects, and a chance to work with new technologies. Tech Mahindra offers the perfect environment for professional growth.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 35
};
