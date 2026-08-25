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
    }
  ],
  "questionCount": 44
};
