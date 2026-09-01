// AUTO-GENERATED file — company-wise interview data.
// Source: Axis Bank interview document(s).
// Regenerate with:  node scripts/rebuild-axis.mjs

export const company = {
  "id": "axis",
  "name": "Axis Bank",
  "interviews": [
    {
      "name": "Axis Bank Interview",
      "questionCount": 11,
      "rounds": [
        {
          "name": "L1 Technical Interview",
          "questions": [
            {
              "question": "What are streams in Java, and how are they used?",
              "answer": "Java Streams are part of java.util.stream package introduced in Java 8. They provide a high-level abstraction for processing sequences of elements in a functional and declarative way. Key features include: Functional Operations (filter, map, reduce, collect), Lazy Evaluation (intermediate operations deferred until terminal operation), and Parallel Processing for multi-core processors.",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class StreamExample {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(\"apple\", \"banana\", \"cherry\", \"date\");\n        List<String> filteredWords = words.stream()\n            .filter(word -> word.startsWith(\"b\"))\n            .map(String::toUpperCase)\n            .collect(Collectors.toList());\n        System.out.println(filteredWords); // Output: [BANANA]\n    }\n}"
              }
            },
            {
              "question": "Explain lambda expressions in Java with an example.",
              "answer": "Lambda expressions provide a concise way to express instances of functional interfaces (interfaces with single abstract method). They consist of parameters, arrow (->), and body. Syntax: (parameters) -> expression or (parameters) -> { statements; }.",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\nimport java.util.List;\n\npublic class LambdaExample {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\n        // Lambda expression\n        names.forEach(name -> System.out.println(name));\n        // Method reference (shorter)\n        names.forEach(System.out::println);\n    }\n}"
              }
            },
            {
              "question": "Write a code to find the longest palindrome substring length in a string.",
              "answer": "Use expand around center technique. For each character, expand outward for odd and even length palindromes. Track maximum length found.\n\nExamples:\n- Input: \"babad\" → 3\n- Input: \"cbbd\"  → 2\n\nTime Complexity: O(n^2). Space Complexity: O(1).",
              "code": {
                "language": "java",
                "content": "public class LongestPalindromeLength {\n    private static int expandAroundCenter(String s, int left, int right) {\n        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n            left--;\n            right++;\n        }\n        return right - left - 1;\n    }\n    public static int longestPalindromeLength(String s) {\n        if (s == null || s.length() == 0) return 0;\n        int maxLength = 0;\n        for (int i = 0; i < s.length(); i++) {\n            int len1 = expandAroundCenter(s, i, i);     // Odd length\n            int len2 = expandAroundCenter(s, i, i + 1); // Even length\n            int len = Math.max(len1, len2);\n            maxLength = Math.max(maxLength, len);\n        }\n        return maxLength;\n    }\n    public static void main(String[] args) {\n        String input = \"babad\";\n        System.out.println(\"Length: \" + longestPalindromeLength(input)); // 3\n    }\n}"
              }
            },
            {
              "question": "What is reactive programming, and where is it used?",
              "answer": "Reactive programming is a programming paradigm dealing with asynchronous data streams and propagation of changes. It allows systems to react to data changes in non-blocking, efficient manner. Use Cases: Real-Time Systems (stock market data, sensor data), User Interfaces (responsive UIs), Microservices (async communication, high-load processing). Key Libraries: RxJava, Project Reactor.",
              "code": {
                "language": "java",
                "content": "// Project Reactor example\nFlux.just(1, 2, 3, 4, 5)\n    .filter(n -> n % 2 == 0)\n    .map(n -> n * 2)\n    .subscribe(System.out::println); // Output: 4, 8"
              }
            },
            {
              "question": "Describe the architecture of microservices and how services communicate with each other.",
              "answer": "Microservices Architecture breaks monolithic applications into small, independent services focusing on specific business functions. Each service is developed, deployed, and scaled independently. Communication Methods: HTTP/REST APIs, gRPC (high-performance RPC), Message Brokers (Kafka, RabbitMQ for async), Service Discovery (Eureka, Consul).",
              "code": null
            },
            {
              "question": "Explain the architecture of the Spring Framework and the role of the IoC container.",
              "answer": "Spring Architecture includes: Core Container (DI and bean lifecycle), AOP (cross-cutting concerns), Data Access/Integration (JDBC, ORM support), Web (web applications, REST APIs). IoC Container: Manages lifecycle and configuration of beans using Dependency Injection. Types: BeanFactory (basic) and ApplicationContext (advanced).",
              "code": {
                "language": "java",
                "content": "import org.springframework.context.ApplicationContext;\nimport org.springframework.context.annotation.AnnotationConfigApplicationContext;\n\npublic class Main {\n    public static void main(String[] args) {\n        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);\n        MyService myService = context.getBean(MyService.class);\n        myService.performAction();\n    }\n}"
              }
            },
            {
              "question": "What is Docker, and how does it relate to Kubernetes?",
              "answer": "Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and include everything needed to run an application. Kubernetes is an orchestration platform that manages deployment, scaling, and operation of containerized applications across clusters. Workflow: Develop → Dockerize → Deploy with Kubernetes (automated scheduling, scaling, management).",
              "code": {
                "language": "java",
                "content": "# Dockerfile\nFROM openjdk:17\nCOPY target/app.jar app.jar\nENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]\n\n# Kubernetes Deployment\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n      - name: myapp\n        image: myapp:latest\n        ports:\n        - containerPort: 8080"
              }
            },
            {
              "question": "Explain the architecture of a Kafka cluster.",
              "answer": "Kafka Architecture includes: Brokers (store/manage data, handle partitions/replicas), Topics (organize data with multiple partitions for parallel processing), Producers (publish messages), Consumers (subscribe and consume messages), Zookeeper (manages broker metadata, leader elections, configuration).",
              "code": null
            },
            {
              "question": "What is a Security Context in Spring Security, and how does it work?",
              "answer": "Security Context holds authentication and authorization information for currently authenticated user. Stored in ThreadLocal, provides access to user's roles/permissions. Workflow: 1) Authentication - Spring Security creates SecurityContext with Authentication object after successful login, 2) Authorization - SecurityContext checks user permissions throughout application.",
              "code": {
                "language": "java",
                "content": "import org.springframework.security.core.Authentication;\nimport org.springframework.security.core.context.SecurityContextHolder;\n\npublic class SecurityUtils {\n    public static String getCurrentUsername() {\n        Authentication auth = SecurityContextHolder.getContext().getAuthentication();\n        return auth != null ? auth.getName() : \"Anonymous\";\n    }\n}"
              }
            },
            {
              "question": "How do you implement JWT token-based authentication?",
              "answer": "Implementation Steps: 1) Generate Token - After successful authentication, generate JWT token containing user details using secret key, 2) Send Token - Send token to client in response header, 3) Authenticate Requests - Client includes token in Authorization header, server verifies token and extracts user information.",
              "code": {
                "language": "java",
                "content": "import io.jsonwebtoken.Jwts;\nimport io.jsonwebtoken.SignatureAlgorithm;\n\npublic class JwtUtil {\n    private static final String SECRET_KEY = \"your-secret-key\";\n    public static String generateToken(String username) {\n        return Jwts.builder()\n            .setSubject(username)\n            .setIssuedAt(new Date())\n            .setExpiration(new Date(System.currentTimeMillis() + 3600000))\n            .signWith(SignatureAlgorithm.HS256, SECRET_KEY)\n            .compact();\n    }\n    public static boolean validateToken(String token, String username) {\n        String extractedUsername = Jwts.parser()\n            .setSigningKey(SECRET_KEY)\n            .parseClaimsJws(token)\n            .getBody()\n            .getSubject();\n        return extractedUsername.equals(username) && !isTokenExpired(token);\n    }\n}"
              }
            },
            {
              "question": "How do you use salt and hash in JWT to secure tokens?",
              "answer": "Salt and Hash enhance security: Salt is random value added before hashing to prevent precomputed attacks. Hash is cryptographic function applied to salted token for integrity. Steps: 1) Generate unique salt for each token, 2) Combine token with salt and apply hash function, 3) Store salted/hashed token, 4) During validation, combine incoming token with salt and hash to compare with stored value.",
              "code": {
                "language": "java",
                "content": "import java.security.MessageDigest;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.SecureRandom;\n\npublic class TokenUtil {\n    private static final SecureRandom random = new SecureRandom();\n    public static String generateSalt() {\n        byte[] salt = new byte[16];\n        random.nextBytes(salt);\n        return new String(salt);\n    }\n    public static String hashToken(String token, String salt) throws NoSuchAlgorithmException {\n        MessageDigest md = MessageDigest.getInstance(\"SHA-256\");\n        md.update((token + salt).getBytes());\n        byte[] hashedBytes = md.digest();\n        return new String(hashedBytes);\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 11
};
