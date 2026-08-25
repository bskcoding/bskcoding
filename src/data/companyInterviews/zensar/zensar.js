// AUTO-GENERATED file — company-wise interview data.
// Source: Zensar interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "zensar",
  "name": "Zensar",
  "interviews": [
    {
      "name": "Zensar",
      "questionCount": 29,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Self Introduction (Project-Oriented)",
              "answer": "I have around 4.5 years of experience as a Java Full Stack Developer. Currently working on a customer onboarding and transaction processing system.",
              "code": null
            },
            {
              "question": "Responsibilities:",
              "answer": "* Developing REST & Reactive APIs using Spring Boot & WebFlux\n* Handling high-volume traffic using non-blocking architecture\n* Integrating Kafka for async communication\n* Writing unit tests using JUnit & Mockito\n* Frontend development using ReactJS",
              "code": null
            },
            {
              "question": "Achievements:",
              "answer": "* Improved API performance using reactive programming\n* Implemented JWT-based authentication\n* Optimized microservices communication",
              "code": null
            },
            {
              "question": "Reactive Programming (Mono vs Flux)",
              "answer": "Reactive Programming is an asynchronous, non-blocking approach.\n* Mono → 0 or 1 element\n* Flux → 0 to N elements",
              "code": null
            },
            {
              "question": "Where do we use Mono?",
              "answer": "Used when we expect a single result.\nExamples:\n* Get user by ID\n* Login response\n* Payment status",
              "code": null
            },
            {
              "question": "Real-Time Example for Mono",
              "answer": "Fetching bank account balance returns only one value.",
              "code": {
                "language": "java",
                "content": "public Mono<Double> getBalance(String accountId) {\n    return webClient.get()\n        .uri(\"/balance/\" + accountId)\n        .retrieve()\n        .bodyToMono(Double.class);\n}"
              }
            },
            {
              "question": "API Calling using WebClient",
              "answer": "",
              "code": {
                "language": "java",
                "content": "@Service\npublic class UserService {\n\n    private final WebClient webClient;\n\n    public UserService(WebClient.Builder builder) {\n        this.webClient = builder.baseUrl(\"http://localhost:8081\").build();\n    }\n\n    public Mono<String> getUser() {\n        return webClient.get()\n            .uri(\"/user\")\n            .retrieve()\n            .bodyToMono(String.class)\n            .onErrorReturn(\"Fallback User\");\n    }\n}"
              }
            },
            {
              "question": "How do you secure APIs?",
              "answer": "* Spring Security\n* JWT Authentication\n* Role-based authorization\n* HTTPS\n* Input validation",
              "code": null
            },
            {
              "question": "JWT Authentication Workflow",
              "answer": "1. User sends login credentials\n2. Server validates credentials\n3. JWT token generated\n4. Token sent to client\n5. Client sends token in header\n6. Server validates token\n👉 Validation done by JWT Filter",
              "code": null
            },
            {
              "question": "HTTP Status Codes",
              "answer": "* 200 → OK\n* 201 → Created\n* 400 → Bad Request\n* 401 → Unauthorized\n* 403 → Forbidden\n* 404 → Not Found\n* 500 → Internal Server Error",
              "code": null
            },
            {
              "question": "Difference between 501 and 502",
              "answer": "* 501 Not Implemented → Server doesn’t support functionality\n* 502 Bad Gateway → Invalid response from upstream server",
              "code": null
            },
            {
              "question": "What is CORS?",
              "answer": "CORS allows cross-origin requests.\nOrigin = protocol + host + port",
              "code": null
            },
            {
              "question": "CORS Configuration",
              "answer": "",
              "code": {
                "language": "java",
                "content": "@Configuration\npublic class CorsConfig {\n    @Bean\n    public WebMvcConfigurer corsConfigurer() {\n        return registry -> registry.addMapping(\"/**\")\n            .allowedOrigins(\"*\")\n            .allowedMethods(\"*\");\n    }\n}"
              }
            },
            {
              "question": "Java 17 Features",
              "answer": "* Records\n* Sealed Classes\n* Pattern Matching\n* Text Blocks\n* Enhanced Switch",
              "code": null
            },
            {
              "question": "Java 8 Supplier and Consumer",
              "answer": "",
              "code": {
                "language": "java",
                "content": "Supplier<String> supplier = () -> \"Hello\";\n\nConsumer<String> consumer = x -> System.out.println(x);\nconsumer.accept(supplier.get());"
              }
            },
            {
              "question": "Method Reference",
              "answer": "Short form of lambda.\nUsed for better readability and cleaner code.",
              "code": {
                "language": "java",
                "content": "list.forEach(System.out::println);"
              }
            },
            {
              "question": "CompletableFuture Example",
              "answer": "",
              "code": {
                "language": "java",
                "content": "CompletableFuture.supplyAsync(() -> \"Hello\")\n    .thenApply(String::toUpperCase)\n    .thenAccept(System.out::println);"
              }
            },
            {
              "question": "Executor Framework (Realtime)",
              "answer": "Used for:\n* Background jobs\n* Async processing\n* Email sending",
              "code": null
            },
            {
              "question": "Callable and Future",
              "answer": "* Callable → returns value\n* Future → holds result",
              "code": {
                "language": "java",
                "content": "ExecutorService executor = Executors.newFixedThreadPool(1);\nFuture<Integer> future = executor.submit(() -> 10 + 20);\nSystem.out.println(future.get());"
              }
            },
            {
              "question": "Parallel Stream vs flatMap",
              "answer": "* parallelStream → multi-threading\n* flatMap → flatten nested collections",
              "code": null
            },
            {
              "question": "List of List of List → Single Stream",
              "answer": "Yes, using multiple flatMap",
              "code": {
                "language": "java",
                "content": "List<Integer> result = list.stream()\n    .flatMap(List::stream)\n    .flatMap(List::stream)\n    .toList();"
              }
            },
            {
              "question": "flatMap Example",
              "answer": "",
              "code": {
                "language": "java",
                "content": "List<List<Integer>> list = List.of(\n    List.of(1,2),\n    List.of(3,4)\n);\n\nList<Integer> result = list.stream()\n    .flatMap(Collection::stream)\n    .toList();"
              }
            },
            {
              "question": "HashSet vs TreeSet",
              "answer": "| Operation | HashSet | TreeSet  |\n| --------- | ------- | -------- |\n| Insert    | O(1)    | O(log n) |\n| Delete    | O(1)    | O(log n) |\n| Search    | O(1)    | O(log n) |\nHashSet → unordered\nTreeSet → sorted",
              "code": null
            },
            {
              "question": "Composition vs Aggregation",
              "answer": "* Composition → strong relationship (Car–Engine)\n* Aggregation → weak relationship (School–Student)",
              "code": null
            },
            {
              "question": "Strengths and Weaknesses",
              "answer": "Strengths:\n* Problem solving\n* Quick learner\nWeakness:\n* Sometimes focus too much on perfection",
              "code": null
            },
            {
              "question": "Why are you looking for a job change?",
              "answer": "Looking for better growth, learning opportunities, and challenging work.",
              "code": null
            },
            {
              "question": "Builder vs Strategy Pattern",
              "answer": "",
              "code": null
            },
            {
              "question": "Builder Pattern",
              "answer": "",
              "code": {
                "language": "java",
                "content": "User user = User.builder()\n    .name(\"Venkatesh\")\n    .age(25)\n    .build();"
              }
            },
            {
              "question": "Strategy Pattern",
              "answer": "",
              "code": {
                "language": "java",
                "content": "interface PaymentStrategy {\n    void pay();\n}\n\nclass UpiPayment implements PaymentStrategy {\n    public void pay() {\n        System.out.println(\"Paid using UPI\");\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 29
};
