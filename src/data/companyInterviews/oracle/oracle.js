// AUTO-GENERATED file — company-wise interview data.
// Source: Oracle interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "oracle",
  "name": "Oracle",
  "interviews": [
    {
      "name": "oracle",
      "questionCount": 23,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Oracle Interview Questions",
              "answer": "",
              "code": null
            }
          ]
        },
        {
          "name": "First Round",
          "questions": [
            {
              "question": "Self-introduction",
              "answer": "",
              "code": null
            },
            {
              "question": "Coding Questions",
              "answer": "-HackerRank coding\n- Code 1-Find higest and lowest Rank of Students\n- Code 2- Vending machine Problem",
              "code": null
            },
            {
              "question": "SQL Queries",
              "answer": "- Query 1- joins Based Query\n- Query 2- Pivot Based Query",
              "code": null
            }
          ]
        },
        {
          "name": "Second Round",
          "questions": [
            {
              "question": "Self-introduction based on project",
              "answer": "Answer: Provide a concise overview of your current project, highlighting key technologies used, your role, and major achievements.\n-",
              "code": null
            },
            {
              "question": "Write a Spring Boot project for login and register using JWT token through an online Java compiler",
              "answer": "Answer",
              "code": {
                "language": "java",
                "content": "@SpringBootApplication\npublic class JwtDemoApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(JwtDemoApplication.class, args);\n    }\n}\n\n@RestController\n@RequestMapping(\"/auth\")\npublic class AuthController {\n\n    @PostMapping(\"/register\")\n    public ResponseEntity<?> register(@RequestBody User user) {\n        // Code to save user\n        return ResponseEntity.ok(\"User registered successfully\");\n    }\n\n    @PostMapping(\"/login\")\n    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {\n        // Code to authenticate user and generate JWT\n        return ResponseEntity.ok(new AuthResponse(jwtToken));\n    }\n}\n\n@Service\npublic class JwtService {\n    public String generateToken(UserDetails userDetails) {\n        // Code to generate JWT\n    }\n}"
              }
            },
            {
              "question": "How to handle when microservices fail",
              "answer": "Answer: Use fallback mechanisms, retry policies, and circuit breakers to handle microservice failures. Implementing a circuit breaker pattern using libraries like Resilience4j helps isolate failing services and prevent cascading failures.",
              "code": null
            },
            {
              "question": "How to implement circuit breakers in microservices",
              "answer": "Answer: Use Resilience4j to implement circuit breakers:",
              "code": {
                "language": "java",
                "content": "@Service\npublic class MyService {\n\n    @CircuitBreaker(name = \"myService\", fallbackMethod = \"fallbackMethod\")\n    public String performOperation() {\n        // Code that may fail\n    }\n\n    public String fallbackMethod(Throwable t) {\n        return \"Fallback response\";\n    }\n}"
              }
            },
            {
              "question": "Write a program to sort a string array without using any sort method or inbuilt functions",
              "answer": "Answer",
              "code": {
                "language": "java",
                "content": "public class StringArraySort {\n    public static void main(String[] args) {\n        String[] arr = {\"banana\", \"apple\", \"cherry\"};\n        for (int i = 0; i < arr.length - 1; i++) {\n            for (int j = i + 1; j < arr.length; j++) {\n                if (compareStrings(arr[i], arr[j]) > 0) {\n                    String temp = arr[i];\n                    arr[i] = arr[j];\n                    arr[j] = temp;\n                }\n            }\n        }\n        for (String str : arr) {\n            System.out.println(str);\n        }\n    }\n\n    public static int compareStrings(String s1, String s2) {\n        int len = Math.min(s1.length(), s2.length());\n        for (int i = 0; i < len; i++) {\n            if (s1.charAt(i) != s2.charAt(i)) {\n                return s1.charAt(i) - s2.charAt(i);\n            }\n        }\n        return s1.length() - s2.length();\n    }\n}"
              }
            },
            {
              "question": "Internal working process of HashMap",
              "answer": "Answer: HashMap works on the principle of hashing. It uses an array of buckets to store key-value pairs. The hashCode() method determines the bucket index. When collisions occur (i.e., multiple keys hash to the same index), they are stored in a linked list or tree structure within the bucket. When retrieving, the key's hash code and equals() method are used to find the correct value.",
              "code": null
            },
            {
              "question": "Scenario where overriding hashCode and equals is necessary in Java",
              "answer": "Answer: When creating a custom object to be used as a key in a HashMap or other hash-based collections, you must override hashCode and equals to ensure correct behavior. For example:",
              "code": {
                "language": "java",
                "content": "public class Employee {\n    private int id;\n    private String name;\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        Employee employee = (Employee) o;\n        return id == employee.id && Objects.equals(name, employee.name);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(id, name);\n    }\n}"
              }
            },
            {
              "question": "Difference between HashMap and Hashtable",
              "answer": "Answer\nHashMap: Non-synchronized, allows one null key and multiple null values, generally faster.\nHashtable: Synchronized, does not allow null keys or values, generally slower due to synchronization overhead.",
              "code": null
            },
            {
              "question": "Difference between synchronized and non-synchronized with real-time examples",
              "answer": "Answer\nSynchronized: Thread-safe, ensures only one thread can access a resource at a time. Example: Hashtable is synchronized.\nNon-synchronized: Not thread-safe, multiple threads can access resources simultaneously. Example: HashMap is non-synchronized.",
              "code": null
            },
            {
              "question": "Write a program to make a HashMap synchronized",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Collections;\nimport java.util.HashMap;\nimport java.util.Map;\npublic class SyncHashMapExample {\n    public static void main(String[] args) {\n        Map<String, String> map = new HashMap<>();\n        map.put(\"1\", \"One\");\n        map.put(\"2\", \"Two\"); \n        Map<String, String> syncMap = Collections.synchronizedMap(map);\n        \n        synchronized (syncMap) {\n            for (Map.Entry<String, String> entry : syncMap.entrySet()) {\n                System.out.println(entry.getKey() + \": \" + entry.getValue());\n            }\n        }\n    }\n}"
              }
            },
            {
              "question": "Final Round",
              "answer": "",
              "code": null
            },
            {
              "question": "Self-introduction",
              "answer": "",
              "code": null
            },
            {
              "question": "About qualification",
              "answer": "",
              "code": null
            },
            {
              "question": "About project",
              "answer": "",
              "code": null
            },
            {
              "question": "How you learned coding and family details",
              "answer": "",
              "code": null
            },
            {
              "question": "Which technology you know",
              "answer": "",
              "code": null
            },
            {
              "question": "If we offer you new technology, which technology would you choose?",
              "answer": "",
              "code": null
            },
            {
              "question": "In your developing project, which is your most struggling phase?",
              "answer": "",
              "code": null
            },
            {
              "question": "How did you overcome that?",
              "answer": "... Etc...",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 23
};
