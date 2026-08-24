// AUTO-GENERATED file — company-wise interview data.
// Source: Tech Mahindra interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "tech-mahindra",
  "name": "Tech Mahindra",
  "interviews": [
    {
      "name": "TechMahindra",
      "questionCount": 31,
      "rounds": [
        {
          "name": "Tech Mahindra",
          "questions": [
            {
              "question": "Java Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "What are the new features in Java 8?",
              "answer": "- Lambda Expressions\n- Stream API\n- Optional Class\n- Default Methods in Interfaces\n- Method References\n- New Date and Time API (java.time)\n- Nashorn JavaScript Engine",
              "code": null
            },
            {
              "question": "What is batch processing in Java?",
              "answer": "- Batch processing refers to executing a series of jobs without manual intervention. It can be implemented using frameworks like Spring Batch, which provides reusable functions that process large volumes of data.",
              "code": null
            },
            {
              "question": "What is job scheduling in Java?",
              "answer": "- Job scheduling involves setting up tasks to run at specified times or intervals. Java provides APIs like java.util.Timer and java.util.concurrent.ScheduledExecutorService. Additionally, libraries like Quartz Scheduler offer more advanced features.",
              "code": null
            },
            {
              "question": "What are the inbuilt Java functional interfaces?",
              "answer": "- Predicate<T>\n- Function<T, R>\n- Supplier<T>\n- Consumer<T>\n- BiFunction<T, U, R>",
              "code": null
            },
            {
              "question": "What is the difference between an interface and a functional interface?",
              "answer": "- An interface can have any number of abstract methods.\n- A functional interface has exactly one abstract method and can have any number of default or static methods. It is used as the assignment target for lambda expressions.",
              "code": null
            },
            {
              "question": "Explain the Singleton design pattern.",
              "answer": "- The Singleton design pattern ensures that a class has only one instance and provides a global point of access to it. It is typically implemented by making the constructor private and providing a static method that returns the instance.",
              "code": null
            },
            {
              "question": "How can you break the Singleton design pattern?",
              "answer": "- Using reflection to call the private constructor.\n- Using serialization and deserialization.\n- Using cloning.",
              "code": null
            },
            {
              "question": "What is a default method in Java and what is its use?",
              "answer": "- A default method in an interface provides a default implementation that can be overridden by implementing classes. It allows interfaces to evolve without breaking existing implementations.",
              "code": null
            },
            {
              "question": "How do you handle errors in Java?",
              "answer": "- Using try-catch blocks to catch and handle exceptions.\n- Using throws keyword to declare exceptions.\n- Using custom exception classes for specific error handling.",
              "code": null
            },
            {
              "question": "How many types of exceptions are there in Java?",
              "answer": "- Checked exceptions (subclasses of Exception except RuntimeException)\n- Unchecked exceptions (subclasses of RuntimeException)\n- Errors (subclasses of Error)",
              "code": null
            },
            {
              "question": "Explain checked and unchecked exceptions.",
              "answer": "- Checked exceptions must be declared in a method or constructor's throws clause if they can be thrown by the execution of the method or constructor and propagated outside the method or constructor boundary.\n- Unchecked exceptions do not need to be declared in a throws clause and can be thrown at any time during the execution of the program.",
              "code": null
            },
            {
              "question": "What is the difference between shallow copy and deep copy?",
              "answer": "- Shallow copy copies the object's fields as they are, so if the field is a reference to another object, only the reference is copied.\n- Deep copy creates a new instance of each object, recursively copying all nested objects.",
              "code": null
            },
            {
              "question": "If you throw an IOException inside a try block, can you handle it in a catch block with a runtime exception? Will it work or not and why?",
              "answer": "- No, it will not work. An IOException is a checked exception and must be caught or declared to be thrown. A catch block for a runtime exception (unchecked exception) will not handle it.",
              "code": null
            },
            {
              "question": "What is serialization and deserialization?",
              "answer": "- Serialization is the process of converting an object into a byte stream for storage or transmission.\n- Deserialization is the process of converting a byte stream back into an object.\n15. Implement a generic double linked list with a method to remove an element based on the index in Java.",
              "code": {
                "language": "java",
                "content": "public class DoublyLinkedList<T> {\n    class Node {\n        T data;\n        Node prev, next;\n\n        Node(T data) {\n            this.data = data;\n        }\n    }\n\n    private Node head, tail;\n\n    public void remove(int index) {\n        if (index < 0) return;\n        Node current = head;\n        for (int i = 0; i < index && current != null; i++) {\n            current = current.next;\n        }\n        if (current == null) return;\n\n        if (current.prev != null) {\n            current.prev.next = current.next;\n        } else {\n            head = current.next;\n        }\n        if (current.next != null) {\n            current.next.prev = current.prev;\n        } else {\n            tail = current.prev;\n        }\n    }\n}"
              }
            },
            {
              "question": "Given two arrays, combine them into a single sorted array.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "int[] solution(int[] list1, int[] list2) {\n      \n      int i = 0, j = 0, a = list1.length - 1, b = list2.length - 1;\n      int[] ans = new int[a+1 + b+1];\n      int k = 0;\n      while (i <= a || j <= b) {\n          if (i <= a && j <= b) {\n              if (list1[i] <= list2[j]) {\n                  ans[k++] = list1[i++];\n              } else {\n                  ans[k++] = list2[j++];\n              }\n          } else if (i <= a) {\n              ans[k++] = list1[i++];\n          } else if (j <= b) {\n              ans[k++] = list2[j++];\n          }\n      }\n      return ans;\n  }"
              }
            },
            {
              "question": "Ladder array code in Java.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public void printLadderArray(int n) {\n    int[][] ladder = new int[n][];\n    for (int i = 0; i < n; i++) {\n        ladder[i] = new int[i + 1];\n        for (int j = 0; j < i + 1; j++) {\n            ladder[i][j] = j + 1;\n        }\n    }\n    for (int[] row : ladder) {\n        System.out.println(Arrays.toString(row));\n    }\n}"
              }
            },
            {
              "question": "Spring Boot Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "What are profiles in Spring Boot?",
              "answer": "- Profiles in Spring Boot are a way to segregate parts of your application configuration and make it only available in certain environments. You can activate profiles using the --spring.profiles.active command-line argument or by setting the spring.profiles.active property in application properties.",
              "code": null
            },
            {
              "question": "How do you provide security in Spring Boot?",
              "answer": "- By using Spring Security, which provides authentication and authorization. Common methods include in-memory authentication, JDBC authentication, and LDAP authentication.",
              "code": null
            },
            {
              "question": "Explain the process of JWT token-based authentication.",
              "answer": "- The client sends a login request with credentials.\n- The server validates the credentials and generates a JWT token.\n- The client stores the token and includes it in the Authorization header of subsequent requests.\n- The server validates the token and processes the request if the token is valid.",
              "code": null
            },
            {
              "question": "What classes do you use in JWT token security?",
              "answer": "- JwtTokenProvider for token generation and validation.\n- JwtAuthenticationFilter to filter and validate requests.\n- JwtAuthenticationEntryPoint for handling authentication errors.",
              "code": null
            },
            {
              "question": "Why do you need the UserDetails class in Spring Security?",
              "answer": "- The UserDetails class represents a core user information. It provides necessary information like username, password, and authorities for authentication and authorization.",
              "code": null
            },
            {
              "question": "How do you handle exceptions in Spring Boot?",
              "answer": "- Using @ControllerAdvice and @ExceptionHandler to handle exceptions globally.\n- Customizing the error response by defining a ResponseEntity with appropriate status and message.",
              "code": null
            },
            {
              "question": "Microservices Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "What is fault tolerance in microservices?",
              "answer": "- Fault tolerance is the ability of a system to continue operating properly in the event of the failure of some of its components. This can be achieved using patterns like circuit breaker, retry mechanisms, and fallback methods.",
              "code": null
            },
            {
              "question": "What is logging and distributed tracing in microservices?",
              "answer": "- Logging involves recording information about the system's operation. Distributed tracing helps in tracking and analyzing requests as they propagate through a distributed system. Tools like ELK stack, Zipkin, and Jaeger are used for this purpose.",
              "code": null
            },
            {
              "question": "How do you communicate between one microservice and another microservice?",
              "answer": "- Using REST APIs over HTTP.\n- Using messaging queues like RabbitMQ or Kafka.\n- Using gRPC for efficient communication.",
              "code": null
            },
            {
              "question": "How do you limit requests in microservices?",
              "answer": "- Using rate limiting techniques, such as token bucket algorithm or leaky bucket algorithm.\n- Implementing API gateway tools like Netflix Zuul or Spring Cloud Gateway to enforce rate limiting.",
              "code": null
            },
            {
              "question": "What is a Kafka server?",
              "answer": "- Kafka is a distributed event streaming platform capable of handling high throughput and low-latency data streams. It is used for building real-time data pipelines and streaming applications.",
              "code": null
            },
            {
              "question": "Explain Jenkins and its use in microservices.",
              "answer": "- Jenkins is a continuous integration and continuous delivery tool. It automates the building, testing, and deploying of applications. In microservices, Jenkins can manage the pipelines for each microservice, ensuring that changes are integrated and deployed smoothly.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 31
};
