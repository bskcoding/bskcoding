// AUTO-GENERATED file — company-wise interview data.
// Source: Axis interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "axis",
  "name": "Axis",
  "interviews": [
    {
      "name": "Axis",
      "questionCount": 51,
      "rounds": [
        {
          "name": "Axis L1",
          "questions": [
            {
              "question": "What are streams in Java, and how are they used?",
              "answer": "Java Streams are part of the java.util.stream package and were introduced in Java 8. They provide a high-level abstraction for processing sequences of elements, such as collections, in a functional and declarative way.",
              "code": null
            },
            {
              "question": "Key Features",
              "answer": "Functional Operations: Streams support operations like filter, map, reduce, collect, and forEach that can be chained together.\nLazy Evaluation: Intermediate operations are lazily evaluated, meaning computations are deferred until a terminal operation is invoked.\nParallel Processing: Streams can be processed in parallel to leverage multi-core processors.\nExample Usage:",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class StreamExample {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(\"apple\", \"banana\", \"cherry\", \"date\");\n        List<String> filteredWords = words.stream()\n                                          .filter(word -> word.startsWith(\"b\"))\n                                          .map(String::toUpperCase)\n                                          .collect(Collectors.toList());\n        System.out.println(filteredWords); // Output: [BANANA]\n    }\n}"
              }
            },
            {
              "question": "Explain lambda expressions in Java with an example.",
              "answer": "Lambda expressions in Java provide a concise way to express instances of functional interfaces (interfaces with a single abstract method). They consist of a parameter list, an arrow (->), and a body.\nSyntax:\nIn this example, name -> System.out.println(name) is a lambda expression that prints each name in the list.",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\nimport java.util.List;\n\npublic class LambdaExample {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\n        \n        names.forEach(name -> System.out.println(name)); // Output: Alice Bob Charlie\n    }\n}"
              }
            },
            {
              "question": "What is reactive programming, and where is it used?",
              "answer": "Reactive programming is a programming paradigm that deals with asynchronous data streams and the propagation of changes. It allows systems to react to data changes or events in a non-blocking and efficient manner.\nUse Cases:",
              "code": null
            },
            {
              "question": "Real-Time Systems: Handling real-time data streams, such as stock market data or sensor data.",
              "answer": "",
              "code": null
            },
            {
              "question": "User Interfaces: Building responsive UIs that react to user inputs or data changes.",
              "answer": "",
              "code": null
            },
            {
              "question": "Microservices: Managing asynchronous communication between services and handling high-load data processing.",
              "answer": "Key Libraries/Frameworks:",
              "code": null
            },
            {
              "question": "RxJava: A library for composing asynchronous and event-based programs using observable sequences.",
              "answer": "",
              "code": null
            },
            {
              "question": "Project Reactor: A reactive programming library for building non-blocking applications on the JVM.",
              "answer": "",
              "code": null
            },
            {
              "question": "Describe the architecture of microservices and how services communicate with each other.",
              "answer": "Architecture:",
              "code": null
            },
            {
              "question": "Microservices Architecture: involves breaking down a monolithic application into small, independent services that focus on specific business functions. Each service is developed, deployed, and scaled independently.",
              "answer": "Communication Methods:",
              "code": null
            },
            {
              "question": "HTTP/REST: Services expose RESTful APIs over HTTP for communication.",
              "answer": "",
              "code": null
            },
            {
              "question": "gRPC: A high-performance, language-agnostic RPC framework.",
              "answer": "",
              "code": null
            },
            {
              "question": "Message Brokers: Services communicate asynchronously through message brokers like Kafka, RabbitMQ, or ActiveMQ.",
              "answer": "",
              "code": null
            },
            {
              "question": "Service Discovery: Tools like Eureka or Consul are used for locating services dynamically.",
              "answer": "Example Diagram:",
              "code": {
                "language": "java",
                "content": "+-------------------+      +-------------------+\n|    Service A      | ---> |    Service B      |\n| (REST API)        |      | (Message Queue)   |\n+-------------------+      +-------------------+"
              }
            },
            {
              "question": "Explain the architecture of the Spring Framework and the role of the IoC container.",
              "answer": "Architecture:",
              "code": null
            },
            {
              "question": "Core Container: Provides the foundation for dependency injection (DI) and bean lifecycle management.",
              "answer": "",
              "code": null
            },
            {
              "question": "AOP (Aspect-Oriented Programming): Supports cross-cutting concerns like logging and transactions.",
              "answer": "",
              "code": null
            },
            {
              "question": "Data Access/Integration: Simplifies data access with JDBC and ORM support.",
              "answer": "",
              "code": null
            },
            {
              "question": "Web: Provides support for building web applications, including RESTful APIs.",
              "answer": "IoC Container:",
              "code": null
            },
            {
              "question": "Role: Manages the lifecycle and configuration of application objects (beans). It uses Dependency Injection (DI) to decouple the creation of objects from their usage.",
              "answer": "",
              "code": null
            },
            {
              "question": "Types of IoC Containers: BeanFactory (basic container) and ApplicationContext (more advanced container).",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import org.springframework.context.ApplicationContext;\nimport org.springframework.context.annotation.AnnotationConfigApplicationContext;\n\npublic class Main {\n    public static void main(String[] args) {\n        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);\n        MyService myService = context.getBean(MyService.class);\n        myService.performAction();\n    }\n}"
              }
            },
            {
              "question": "What is Docker, and how does it relate to Kubernetes?",
              "answer": "Docker:",
              "code": null
            },
            {
              "question": "Definition: Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and include everything needed to run an application.",
              "answer": "Kubernetes:",
              "code": null
            },
            {
              "question": "Relation: Kubernetes is an orchestration platform that manages the deployment, scaling, and operation of containerized applications across a cluster of machines. It provides automated scheduling, scaling, and management of Docker containers.",
              "answer": "Example Workflow:",
              "code": null
            },
            {
              "question": "Develop:",
              "answer": "Write application code and Dockerize it.",
              "code": null
            },
            {
              "question": "Deploy:",
              "answer": "Use Kubernetes to deploy and manage the Docker containers.",
              "code": null
            },
            {
              "question": "Explain the architecture of a Kafka cluster.",
              "answer": "Architecture:",
              "code": null
            },
            {
              "question": "Brokers: Kafka brokers store and manage data. Each broker handles a subset of partitions and replicas.",
              "answer": "",
              "code": null
            },
            {
              "question": "Topics: Data is organized into topics. Each topic can be divided into multiple partitions for parallel processing.",
              "answer": "",
              "code": null
            },
            {
              "question": "Producers: Publish messages to topics.",
              "answer": "",
              "code": null
            },
            {
              "question": "Consumers: Subscribe to topics and consume messages.",
              "answer": "",
              "code": null
            },
            {
              "question": "Zookeeper: Manages broker metadata, leader elections, and configuration.",
              "answer": "Diagram:",
              "code": {
                "language": "java",
                "content": "+-----------------+    +-----------------+    +-----------------+\n|   Kafka Broker  |    |   Kafka Broker  |    |   Kafka Broker  |\n+-----------------+    +-----------------+    +-----------------+\n        |                    |                      |\n        |                    |                      |\n+-----------------+    +-----------------+    +-----------------+\n|   Producer      |    |   Consumer      |    |   Zookeeper     |\n+-----------------+    +-----------------+    +-----------------+"
              }
            },
            {
              "question": "What is a Security Context in Spring Security, and how does it work?",
              "answer": "Security Context:",
              "code": null
            },
            {
              "question": "Definition: A Security Context is a container that holds the authentication and authorization information for the currently authenticated user.",
              "answer": "",
              "code": null
            },
            {
              "question": "Usage: It is stored in a ThreadLocal and provides access to the current user's roles and permissions.",
              "answer": "How it Works:",
              "code": null
            },
            {
              "question": "Authentication:",
              "answer": "Upon successful login, Spring Security creates a SecurityContext that holds an Authentication object.",
              "code": null
            },
            {
              "question": "Authorization:",
              "answer": "The SecurityContext is used throughout the application to check if the user has the necessary permissions to access resources.",
              "code": {
                "language": "java",
                "content": "import org.springframework.security.core.Authentication;\nimport org.springframework.security.core.context.SecurityContextHolder;\n\npublic class SecurityUtils {\n    public static String getCurrentUsername() {\n        Authentication auth = SecurityContextHolder.getContext().getAuthentication();\n        return auth != null ? auth.getName() : \"Anonymous\";\n    }\n}"
              }
            },
            {
              "question": "How do you implement JWT token-based authentication?",
              "answer": "Implementation Steps:",
              "code": null
            },
            {
              "question": "Generate Token:",
              "answer": "After successful authentication, generate a JWT token containing user details.",
              "code": null
            },
            {
              "question": "Send Token:",
              "answer": "Send the token to the client, typically in the response header.",
              "code": null
            },
            {
              "question": "Authenticate Requests:",
              "answer": "Include the token in the Authorization header of subsequent requests. Verify the token and extract user information.\nExample Code (Java):",
              "code": {
                "language": "java",
                "content": "import io.jsonwebtoken.Jwts;\nimport io.jsonwebtoken.SignatureAlgorithm;\n\npublic class JwtUtil {\n    private static final String SECRET_KEY = \"your-secret-key\";\n\n    public static String generateToken(String username) {\n        return Jwts.builder()\n                   .setSubject(username)\n                   .signWith(SignatureAlgorithm.HS256, SECRET_KEY)\n                   .compact();\n    }\n}"
              }
            },
            {
              "question": "How do you use salt and hash in JWT to secure tokens?",
              "answer": "Salt and Hash:",
              "code": null
            },
            {
              "question": "Salt: A random value added to the token before hashing to enhance security and prevent precomputed attacks.",
              "answer": "",
              "code": null
            },
            {
              "question": "Hash: A cryptographic function applied to the salted token to ensure its integrity.",
              "answer": "Steps:",
              "code": null
            },
            {
              "question": "Generate Salt:",
              "answer": "Create a unique salt for each token.",
              "code": null
            },
            {
              "question": "Hash Token:",
              "answer": "Combine the token with the salt and apply a hash function.",
              "code": null
            },
            {
              "question": "Store and Validate:",
              "answer": "Store the salted and hashed token. During validation, combine the incoming token with the salt and hash it to compare with the stored value.\nExample Code (Java):",
              "code": {
                "language": "java",
                "content": "import java.security.MessageDigest;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.SecureRandom;\n\npublic class TokenUtil {\n    private static final SecureRandom random = new SecureRandom();\n\n    public static String generateSalt() {\n        byte[] salt = new byte[16];\n        random.nextBytes(salt);\n        return new String(salt);\n    }\n\n    public static String hashToken(String token, String salt) throws NoSuchAlgorithmException {\n        MessageDigest md = MessageDigest.getInstance(\"SHA-256\");\n        md.update((token + salt).getBytes());\n        byte[] hashedBytes = md.digest();\n        return new String(has\n\nhedBytes);\n    }\n}"
              }
            },
            {
              "question": "Write a code to find the longest palindrome substring length in a string.",
              "answer": "Here is an example code to find the length of the longest palindrome substring:\nCode:",
              "code": {
                "language": "java",
                "content": "public class LongestPalindromeLength {\n\n    private static int expandAroundCenter(String s, int left, int right) {\n        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n            left--;\n            right++;\n        }\n        return right - left - 1;\n    }\n\n    public static int longestPalindromeLength(String s) {\n        if (s == null || s.length() == 0) return 0;\n\n        int maxLength = 0;\n\n        for (int i = 0; i < s.length(); i++) {\n            int len1 = expandAroundCenter(s, i, i); // Odd length palindromes\n            int len2 = expandAroundCenter(s, i, i + 1); // Even length palindromes\n            int len = Math.max(len1, len2);\n            maxLength = Math.max(maxLength, len);\n        }\n\n        return maxLength;\n    }\n\n    public static void main(String[] args) {\n        String input = \"babad\";\n        System.out.println(\"Length of longest palindrome substring: \" + longestPalindromeLength(input));\n    }\n}"
              }
            },
            {
              "question": "Input: \"babad\"",
              "answer": "",
              "code": null
            },
            {
              "question": "Output: 3 (The longest palindromes are \"bab\" or \"aba\", both with a length of 3)",
              "answer": "",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 51
};
