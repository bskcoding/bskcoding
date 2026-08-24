// AUTO-GENERATED file — company-wise interview data.
// Source: Altimetrix interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "altimetrix",
  "name": "Altimetrix",
  "interviews": [
    {
      "name": "Altimetrix",
      "questionCount": 44,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "What are the key features introduced in Java 8?",
              "answer": "",
              "code": null
            },
            {
              "question": "Lambda Expressions: Allows for concise representation of instances of single-method interfaces (functional interfaces).",
              "answer": "",
              "code": null
            },
            {
              "question": "Stream API: Provides a new abstraction for processing sequences of elements, supporting operations like map, filter, and reduce.",
              "answer": "",
              "code": null
            },
            {
              "question": "Optional Class: A container object which may or may not contain a value, used to avoid null references.",
              "answer": "",
              "code": null
            },
            {
              "question": "Default Methods: Interfaces can now have methods with a body, allowing for backward compatibility.",
              "answer": "",
              "code": null
            },
            {
              "question": "Method References: Shortcuts to call methods using the syntax ClassName::methodName.",
              "answer": "",
              "code": null
            },
            {
              "question": "New Date and Time API: A new, comprehensive API for handling dates and times (java.time package).",
              "answer": "",
              "code": null
            },
            {
              "question": "What are the built-in functional interfaces available in Java 8?",
              "answer": "",
              "code": null
            },
            {
              "question": "Predicate<T>: Represents a boolean-valued function of one argument.",
              "answer": "",
              "code": null
            },
            {
              "question": "Function<T, R>: Represents a function that takes an argument of type T and returns a result of type R.",
              "answer": "",
              "code": null
            },
            {
              "question": "Consumer<T>: Represents an operation that accepts a single input argument and returns no result.",
              "answer": "",
              "code": null
            },
            {
              "question": "Supplier<T>: Represents a supplier of results, providing instances of type T.",
              "answer": "",
              "code": null
            },
            {
              "question": "UnaryOperator<T>: A specialized form of Function that takes a single argument and returns a result of the same type.",
              "answer": "",
              "code": null
            },
            {
              "question": "BinaryOperator<T>: A specialized form of Function that takes two arguments of the same type and returns a result of the same type.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is a profile in Spring Boot, and how do you use it?",
              "answer": "",
              "code": null
            },
            {
              "question": "Profile: A feature that allows for the segregation of application configuration based on different environments (e.g., development, testing, production).",
              "answer": "",
              "code": null
            },
            {
              "question": "Usage: Define profiles using the @Profile annotation in Spring components or specify them in application.properties or application.yml. Activate profiles via command-line arguments or environment variables (e.g., --spring.profiles.active=dev).",
              "answer": "",
              "code": null
            },
            {
              "question": "What configurations can be managed within a Spring Boot profile?",
              "answer": "",
              "code": null
            },
            {
              "question": "Data Source Configurations: Define different database configurations for various environments.",
              "answer": "",
              "code": null
            },
            {
              "question": "Service Endpoints: Configure different API endpoints or service URLs based on the active profile.",
              "answer": "",
              "code": null
            },
            {
              "question": "Logging Levels: Set different logging levels or loggers for different environments.",
              "answer": "",
              "code": null
            },
            {
              "question": "Security Settings: Adjust security configurations such as authentication mechanisms or access controls.",
              "answer": "",
              "code": null
            },
            {
              "question": "What are the advantages of using microservices architecture?",
              "answer": "",
              "code": null
            },
            {
              "question": "Scalability: Individual components can be scaled independently.",
              "answer": "",
              "code": null
            },
            {
              "question": "Flexibility: Different services can be developed, deployed, and maintained separately.",
              "answer": "",
              "code": null
            },
            {
              "question": "Resilience: Failure in one service does not necessarily impact others.",
              "answer": "",
              "code": null
            },
            {
              "question": "Technology Agnostic: Different services can use different technologies or frameworks.",
              "answer": "",
              "code": null
            },
            {
              "question": "Faster Time to Market: Smaller teams can develop and deploy services more quickly.",
              "answer": "",
              "code": null
            },
            {
              "question": "How do you integrate microservices in a project?",
              "answer": "",
              "code": null
            },
            {
              "question": "API Gateway: Use an API gateway to handle requests and route them to the appropriate microservices.",
              "answer": "",
              "code": null
            },
            {
              "question": "Service Registry: Use tools like Eureka for service discovery and registration.",
              "answer": "",
              "code": null
            },
            {
              "question": "Inter-Service Communication: Implement communication between services using REST APIs, messaging queues, or gRPC.",
              "answer": "",
              "code": null
            },
            {
              "question": "Configuration Management: Use tools like Spring Cloud Config to manage configuration centrally.",
              "answer": "",
              "code": null
            },
            {
              "question": "Monitoring and Logging: Implement centralized logging and monitoring using tools like ELK stack or Prometheus.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is a Eureka Server, and how is it used in microservices?",
              "answer": "",
              "code": null
            },
            {
              "question": "Eureka Server: A service discovery tool provided by Netflix, part of the Spring Cloud ecosystem.",
              "answer": "",
              "code": null
            },
            {
              "question": "Usage: Services register themselves with the Eureka Server, and other services can discover and communicate with them using the server's registry. It helps in managing service instances and load balancing.",
              "answer": "",
              "code": null
            },
            {
              "question": "Can you explain the internal working of a HashMap in Java?",
              "answer": "",
              "code": null
            },
            {
              "question": "HashMap: stores key-value pairs. Internally, it uses an array of buckets, where each bucket is a linked list or a tree (if many entries hash to the same bucket).",
              "answer": "",
              "code": null
            },
            {
              "question": "Hashing: Keys are hashed to determine their bucket location.",
              "answer": "",
              "code": null
            },
            {
              "question": "Collision Resolution: If multiple keys hash to the same bucket, they are stored in a linked list or tree structure within that bucket.",
              "answer": "",
              "code": null
            },
            {
              "question": "Resizing: When the number of entries exceeds a threshold, the HashMap resizes and rehashes all entries.",
              "answer": "",
              "code": null
            },
            {
              "question": "Given a list of integers [1, 2, 4, 6, 8, 9], with the numbers 3, 5, and 7 missing, how would you print the missing numbers using Java Streams?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\nimport java.util.stream.IntStream;\n\npublic class MissingNumbers {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 4, 6, 8, 9);\n        int min = 1;\n        int max = 9;\n\n        List<Integer> missingNumbers = IntStream.rangeClosed(min, max)\n            .filter(n -> !numbers.contains(n))\n            .boxed()\n            .collect(Collectors.toList());\n\n        System.out.println(\"Missing numbers: \" + missingNumbers);\n    }\n}"
              }
            },
            {
              "question": "Given a list of strings [\"blue\", \"green\", \"red\", \"pink\"], how would you find the longest string and print its length using Java Streams?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\nimport java.util.List;\nimport java.util.Comparator;\n\npublic class LongestStringLength {\n    public static void main(String[] args) {\n        List<String> strings = Arrays.asList(\"blue\", \"green\", \"red\", \"pink\");\n\n        int maxLength = strings.stream()\n            .sorted(Comparator.comparingInt(String::length).reversed())\n            .findFirst()\n            .map(String::length)\n            .orElse(0);\n\n        System.out.println(\"Length of the longest string: \" + maxLength);\n    }\n}"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Altimetrix_Interview",
      "questionCount": 20,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Briefly explain the project you are currently working on.",
              "answer": "- I am currently working on a microservices-based banking application that handles user registration and transaction data. The project uses Spring Boot for the backend, ReactJS for the frontend, and JPA for database interactions. We also implement security using Spring Security and JWT for authentication.",
              "code": null
            },
            {
              "question": "What is Jenkins, and how do you use it in your project?",
              "answer": "- Jenkins is a continuous integration/continuous deployment (CI/CD) tool used to automate the build and deployment process. In my project, Jenkins is configured to build the application automatically whenever there is a new commit to the Git repository. It also runs unit tests, integration tests, and deploys the application to the staging/production environment.",
              "code": null
            },
            {
              "question": "Which tools do you use for monitoring purposes in Spring Boot?",
              "answer": "- We use tools like Prometheus and Grafana for monitoring metrics, Spring Boot Actuator for exposing health and metrics endpoints, and ELK Stack (Elasticsearch, Logstash, Kibana) for logging and real-time monitoring.",
              "code": null
            },
            {
              "question": "What Git commands do you commonly use in your project?",
              "answer": "- Common Git commands include:\n- git clone: Clone a repository\n- git pull: Fetch and merge changes from the remote repository\n- git push: Push local changes to the remote repository\n- git branch: Create, list, or switch branches\n- git checkout: Switch between branches or restore files\n- git merge: Merge branches\n- git commit -m \"message\": Commit changes with a message\n- git stash: Temporarily save changes not ready to commit",
              "code": null
            },
            {
              "question": "What is Agile methodology? Explain your experience working in Agile.",
              "answer": "- Agile methodology is an iterative approach to software development where requirements and solutions evolve through collaboration between cross-functional teams. I have experience working in Agile, specifically using Scrum. We follow sprints, conduct daily standups, sprint planning, and retrospective meetings. This approach allows us to quickly adapt to changes and deliver incremental updates.",
              "code": null
            },
            {
              "question": "What is the difference between shallow copy and deep copy?",
              "answer": "Shallow Copy: Creates a new object, but copies the references to the same memory addresses of the objects inside. Changes to the internal objects affect both copies.\nDeep Copy: Creates a new object and recursively copies all objects within it, meaning both the original and copied objects are independent of each other.",
              "code": null
            },
            {
              "question": "How many ways can you create an object in Java?",
              "answer": "- There are several ways to create an object in Java:\n1. Using the new keyword.\n2. Using reflection (Class.newInstance() or Constructor.newInstance()).\n3. Using clone() (if the class implements Cloneable).\n4. Using serialization and deserialization.\n5. Using the Factory or Builder design pattern.",
              "code": null
            },
            {
              "question": "Why is the main method in Java static?",
              "answer": "- The main method is static because it can be called without creating an instance of the class. This allows the JVM to call it directly to start the program.",
              "code": null
            },
            {
              "question": "What is a deadlock in Java?",
              "answer": "- A deadlock occurs when two or more threads are blocked forever, waiting for each other to release a lock they need to proceed. Each thread holds a resource the other thread requires, leading to a cycle of dependency.",
              "code": null
            },
            {
              "question": "How can we avoid deadlock in Java?",
              "answer": "- To avoid deadlock:\n1. Always acquire locks in a consistent order.\n2. Use a timeout for acquiring locks.\n3. Use fewer synchronized blocks or locks, and keep them as short as possible.\n4. Use lock hierarchy or deadlock detection algorithms.",
              "code": null
            },
            {
              "question": "Do you know any design patterns?",
              "answer": "- Yes, I am familiar with several design patterns like Singleton, Factory, Builder, Observer, Strategy, and Decorator.",
              "code": null
            },
            {
              "question": "What is the Factory Design Pattern?",
              "answer": "- The Factory Design Pattern is a creational pattern that provides an interface for creating objects in a super class, but allows subclasses to alter the type of objects that will be created. It promotes loose coupling and is used when the object creation process involves some logic.",
              "code": null
            },
            {
              "question": "Check if a given string containing brackets is balanced.",
              "answer": "- Approach: Use a stack to track the open brackets and check for matching closing brackets.",
              "code": {
                "language": "java",
                "content": "public boolean isBalanced(String str) {\n    Stack<Character> stack = new Stack<>();\n    for (char ch : str.toCharArray()) {\n        if (ch == '(' || ch == '{' || ch == '[') {\n            stack.push(ch);\n        } else if (ch == ')' && (stack.isEmpty() || stack.pop() != '(')) {\n            return false;\n        } else if (ch == '}' && (stack.isEmpty() || stack.pop() != '{')) {\n            return false;\n        } else if (ch == ']' && (stack.isEmpty() || stack.pop() != '[')) {\n            return false;\n        }\n    }\n    return stack.isEmpty();\n}"
              }
            },
            {
              "question": "Find the most repeated IP address.",
              "answer": "- Approach: Use a HashMap to count the occurrences of each IP.",
              "code": {
                "language": "java",
                "content": "public String findMostRepeatedIP(List<String> logs) {\n    Map<String, Integer> ipCount = new HashMap<>();\n    for (String log : logs) {\n        String ip = log.split(\" \")[0];\n        ipCount.put(ip, ipCount.getOrDefault(ip, 0) + 1);\n    }\n    return Collections.max(ipCount.entrySet(), Map.Entry.comparingByValue()).getKey();\n}"
              }
            },
            {
              "question": "How do you communicate between two microservices?",
              "answer": "- Communication between microservices can be done using REST APIs (synchronous) or message brokers like RabbitMQ or Kafka (asynchronous). REST APIs use HTTP requests, while message brokers allow communication through event-driven architecture.",
              "code": null
            },
            {
              "question": "How do you secure communication between microservices?",
              "answer": "- You can secure communication using:\nJWT  (JSON Web Tokens) for authentication and authorization.\nOAuth2  for secure access delegation.\nSSL/TLS  for encrypted communication.\nAPI Gateway  with security filters to control traffic and access.",
              "code": null
            },
            {
              "question": "Have you worked with JPA (Java Persistence API)?",
              "answer": "- Yes, I have used JPA in my projects for managing database entities, relationships, and queries using Hibernate as the JPA provider. I also work with annotations like @Entity, @OneToMany, @ManyToOne, and @Query.",
              "code": null
            },
            {
              "question": "What is the N+1 select problem in JPA, and how do you handle it?",
              "answer": "- The N+1 select problem occurs when a query retrieves an entity, but subsequent queries are made to load related entities one by one. It can be handled using:\nFetchType.LAZY: or FetchType.EAGER.\n- Using JOIN FETCH queries to load related entities in a single query.",
              "code": null
            },
            {
              "question": "Have you worked on writing unit test cases? How do you approach it?",
              "answer": "- Yes, I write unit test cases using JUnit and Mockito. My approach is to test individual methods, mock external dependencies, and ensure high code coverage by writing tests for both positive and negative scenarios.",
              "code": null
            },
            {
              "question": "How do you mock private methods in unit testing?",
              "answer": "- Private methods can be mocked using PowerMock along with Mockito, which allows for mocking private, static, and final methods.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 64
};
