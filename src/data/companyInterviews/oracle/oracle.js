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
          "name": "First Round - HackerRank",
          "questions": [
            {
              "question": "Self-introduction",
              "answer": "I am [Your Name] with 3 years of experience as a Java Full Stack Developer. I specialize in Spring Boot, React, and Microservices. I have worked on banking applications, customer registration systems, and real-time transaction processing.",
              "code": null
            },
            {
              "question": "Find highest and lowest rank of Students",
              "answer": "Use sorting or streams to find min and max rank.",
              "code": {
                "language": "java",
                "content": "public class StudentRank {\n    public static void main(String[] args) {\n        List<Integer> ranks = Arrays.asList(5, 2, 8, 1, 9, 3);\n        int highest = ranks.stream().max(Integer::compareTo).orElse(0);\n        int lowest = ranks.stream().min(Integer::compareTo).orElse(0);\n        System.out.println(\"Highest Rank: \" + highest);\n        System.out.println(\"Lowest Rank: \" + lowest);\n    }\n}"
              }
            },
            {
              "question": "Vending machine Problem",
              "answer": "Design vending machine with inventory, payment, and dispensing logic.",
              "code": {
                "language": "java",
                "content": "public class VendingMachine {\n    private Map<String, Integer> inventory = new HashMap<>();\n    private int balance = 0;\n    public void addItem(String item, int price) { inventory.put(item, price); }\n    public void insertCoin(int amount) { balance += amount; }\n    public String dispense(String item) {\n        if (inventory.containsKey(item) && balance >= inventory.get(item)) {\n            balance -= inventory.get(item);\n            return \"Dispensed: \" + item;\n        }\n        return \"Insufficient balance or item not available\";\n    }\n}"
              }
            },
            {
              "question": "SQL Query - Joins Based Query",
              "answer": "Query to join tables based on common columns.",
              "code": {
                "language": "sql",
                "content": "SELECT e.employee_id, e.name, d.department_name\nFROM employees e\nJOIN departments d ON e.department_id = d.department_id;"
              }
            },
            {
              "question": "SQL Query - Pivot Based Query",
              "answer": "Use CASE statements to pivot data.",
              "code": {
                "language": "sql",
                "content": "SELECT department,\n    SUM(CASE WHEN month = 'Jan' THEN sales END) AS Jan,\n    SUM(CASE WHEN month = 'Feb' THEN sales END) AS Feb,\n    SUM(CASE WHEN month = 'Mar' THEN sales END) AS Mar\nFROM sales_data\nGROUP BY department;"
              }
            }
          ]
        },
        {
          "name": "Second Round - Technical Interview",
          "questions": [
            {
              "question": "Self-introduction based on project.",
              "answer": "I am [Your Name] with 3 years of experience in Java and React. In my current project, I developed a customer registration service using ReactJS and Spring Boot, integrating with multiple microservices to ensure secure and efficient data handling.",
              "code": null
            },
            {
              "question": "Write a Spring Boot project for login and register using JWT token through an online Java compiler.",
              "answer": "Create Spring Boot application with AuthController for register and login endpoints. Use JwtService for token generation.",
              "code": {
                "language": "java",
                "content": "@SpringBootApplication\npublic class JwtDemoApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(JwtDemoApplication.class, args);\n    }\n}\n@RestController\n@RequestMapping(\"/auth\")\npublic class AuthController {\n    @PostMapping(\"/register\")\n    public ResponseEntity<?> register(@RequestBody User user) {\n        // Save user logic\n        return ResponseEntity.ok(\"User registered successfully\");\n    }\n    @PostMapping(\"/login\")\n    public ResponseEntity<?> login(@RequestBody AuthRequest request) {\n        // Authenticate and generate JWT\n        String token = jwtService.generateToken(username);\n        return ResponseEntity.ok(new AuthResponse(token));\n    }\n}\n@Service\npublic class JwtService {\n    public String generateToken(String username) {\n        return Jwts.builder()\n            .setSubject(username)\n            .setIssuedAt(new Date())\n            .setExpiration(new Date(System.currentTimeMillis() + 3600000))\n            .signWith(SignatureAlgorithm.HS256, SECRET)\n            .compact();\n    }\n}"
              }
            },
            {
              "question": "How to handle when microservices fail?",
              "answer": "Use fallback mechanisms, retry policies, and circuit breakers. Implement circuit breaker pattern using Resilience4j to isolate failing services and prevent cascading failures.",
              "code": null
            },
            {
              "question": "How to implement circuit breakers in microservices?",
              "answer": "Use Resilience4j with @CircuitBreaker annotation and fallback method.",
              "code": {
                "language": "java",
                "content": "@Service\npublic class MyService {\n    @CircuitBreaker(name = \"myService\", fallbackMethod = \"fallbackMethod\")\n    public String performOperation() {\n        // Code that may fail\n        return \"Success\";\n    }\n    public String fallbackMethod(Throwable t) {\n        return \"Fallback response\";\n    }\n}"
              }
            },
            {
              "question": "Write a program to sort a string array without using any sort method or inbuilt functions.",
              "answer": "Use bubble sort algorithm with custom comparison.",
              "code": {
                "language": "java",
                "content": "public class StringArraySort {\n    public static void main(String[] args) {\n        String[] arr = {\"banana\", \"apple\", \"cherry\"};\n        for (int i = 0; i < arr.length - 1; i++) {\n            for (int j = i + 1; j < arr.length; j++) {\n                if (compareStrings(arr[i], arr[j]) > 0) {\n                    String temp = arr[i];\n                    arr[i] = arr[j];\n                    arr[j] = temp;\n                }\n            }\n        }\n        for (String str : arr) {\n            System.out.println(str);\n        }\n    }\n    public static int compareStrings(String s1, String s2) {\n        int len = Math.min(s1.length(), s2.length());\n        for (int i = 0; i < len; i++) {\n            if (s1.charAt(i) != s2.charAt(i)) {\n                return s1.charAt(i) - s2.charAt(i);\n            }\n        }\n        return s1.length() - s2.length();\n    }\n}"
              }
            },
            {
              "question": "Internal working process of HashMap.",
              "answer": "HashMap uses hashing principle. It uses array of buckets to store key-value pairs. hashCode() determines bucket index. Collisions handled by linked list or tree structure within bucket. Retrieval uses hash code and equals() method.",
              "code": null
            },
            {
              "question": "Scenario where overriding hashCode and equals is necessary in Java.",
              "answer": "When custom object is used as key in HashMap or hash-based collections. Must override both for correct behavior.",
              "code": {
                "language": "java",
                "content": "public class Employee {\n    private int id;\n    private String name;\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        Employee emp = (Employee) o;\n        return id == emp.id && Objects.equals(name, emp.name);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(id, name);\n    }\n}"
              }
            },
            {
              "question": "Difference between HashMap and Hashtable.",
              "answer": "HashMap: Non-synchronized, allows one null key and multiple null values, faster. Hashtable: Synchronized, does not allow null keys or values, slower due to synchronization overhead.",
              "code": null
            },
            {
              "question": "Difference between synchronized and non-synchronized with real-time examples.",
              "answer": "Synchronized: Thread-safe, only one thread can access resource at a time. Example: Hashtable. Non-synchronized: Not thread-safe, multiple threads can access simultaneously. Example: HashMap.",
              "code": null
            },
            {
              "question": "Write a program to make a HashMap synchronized.",
              "answer": "Use Collections.synchronizedMap() to make HashMap thread-safe.",
              "code": {
                "language": "java",
                "content": "import java.util.Collections;\nimport java.util.HashMap;\nimport java.util.Map;\npublic class SyncHashMapExample {\n    public static void main(String[] args) {\n        Map<String, String> map = new HashMap<>();\n        map.put(\"1\", \"One\");\n        map.put(\"2\", \"Two\");\n        Map<String, String> syncMap = Collections.synchronizedMap(map);\n        synchronized (syncMap) {\n            for (Map.Entry<String, String> entry : syncMap.entrySet()) {\n                System.out.println(entry.getKey() + \": \" + entry.getValue());\n            }\n        }\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Final Round - HR/Manager",
          "questions": [
            {
              "question": "Self-introduction",
              "answer": "I am [Your Name] with 3 years of experience as a Java Full Stack Developer. I specialize in Spring Boot, React, and Microservices. I am passionate about building scalable applications and learning new technologies.",
              "code": null
            },
            {
              "question": "About qualification",
              "answer": "I have completed [Your Degree] in [Your Field] from [Your University]. I also hold Oracle Certified Associate (OCA) certification.",
              "code": null
            },
            {
              "question": "About project",
              "answer": "I worked on a banking application with microservices architecture. The project handled customer registration, transaction processing, and account management using Spring Boot, React, Kafka, and MySQL.",
              "code": null
            },
            {
              "question": "How you learned coding and family details",
              "answer": "I started coding during college and continued with online courses and personal projects. I come from a supportive family background.",
              "code": null
            },
            {
              "question": "Which technology you know?",
              "answer": "I am proficient in Java, Spring Boot, React, Microservices, Hibernate, JPA, MySQL, Docker, Kubernetes, and Git.",
              "code": null
            },
            {
              "question": "If we offer you new technology, which technology would you choose?",
              "answer": "I would love to learn and work with cloud technologies like AWS and Kubernetes, or explore AI/ML with Python.",
              "code": null
            },
            {
              "question": "In your developing project, which is your most struggling phase?",
              "answer": "The most struggling phase was integrating multiple microservices and ensuring data consistency across them.",
              "code": null
            },
            {
              "question": "How did you overcome that?",
              "answer": "We implemented the Saga pattern for distributed transactions, used Kafka for event-driven communication, and added circuit breakers for fault tolerance.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 23
};
