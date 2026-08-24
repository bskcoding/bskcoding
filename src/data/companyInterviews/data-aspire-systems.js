// AUTO-GENERATED file — company-wise interview data.
// Source: Aspire systems interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "aspire-systems",
  "name": "Aspire systems",
  "interviews": [
    {
      "name": "AspireSystem2",
      "questionCount": 20,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "What is a hash collision?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: A hash collision occurs when two different keys in a hash-based collection, such as a HashMap, produce the same hash code and thus are placed in the same bucket. This can lead to performance degradation as multiple keys have to be stored and managed in the same location.",
              "answer": "",
              "code": null
            },
            {
              "question": "When does a collision error occur in hash-based collections?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: A collision error occurs in hash-based collections when multiple keys are mapped to the same hash code, causing them to be stored in the same bucket. This results in a need for the collection to handle the collision, usually through chaining (linked list) or open addressing (probing).",
              "answer": "",
              "code": null
            },
            {
              "question": "What are the key differences between Runnable and Callable in Java?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer",
              "answer": "Runnable: Does not return a result and cannot throw a checked exception.\nCallable: Returns a result (T) and can throw checked exceptions.\n- Runnable is executed by Thread or Executor, while Callable is executed by ExecutorService.",
              "code": null
            },
            {
              "question": "What is the difference between map and flatMap in Java Streams?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer",
              "answer": "map: Transforms each element in the stream into another form, producing a stream of the same structure.\nflatMap: Flattens multiple streams into a single stream by applying a one-to-many transformation function to each element and then flattening the resulting streams into one.",
              "code": null
            },
            {
              "question": "How does flatMap work internally?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: Internally, flatMap applies a function that returns a stream for each element of the original stream. It then flattens these streams into a single stream, effectively concatenating them. This is achieved through a combination of the map operation and the Stream.flatMap method, which merges the nested streams.",
              "answer": "",
              "code": null
            },
            {
              "question": "Find and Insert Target in a Sorted Array:",
              "answer": "",
              "code": null
            },
            {
              "question": "Question: You are given an unsorted array of integers. You need to find the index of a target value within this array. If the target value is not present in the array, insert it into the array such that the array remains sorted after insertion, and return the index where the target value would be if it were inserted.",
              "answer": "",
              "code": null
            },
            {
              "question": "Input 1",
              "answer": "- Array: [4, 1, 7, 2]\n- Target: 4\nOutput: 0",
              "code": null
            },
            {
              "question": "Input 2",
              "answer": "- Array: [4, 1, 7, 2]\n- Target: 5\nOutput: 3 (because the array becomes [1, 2, 4, 5, 7] and 5 is at index 3)",
              "code": null
            },
            {
              "question": "Answer (Java Code)",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\n\npublic class InsertAndFindIndex {\n    public static int insertAndFindIndex(int[] arr, int target) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == target) {\n                return i;\n            }\n        }\n        Arrays.sort(arr);\n        int index = Arrays.binarySearch(arr, target);\n        if (index >= 0) {\n            return index;\n        }\n        return -(index + 1);\n    }\n\n    public static void main(String[] args) {\n        int[] arr1 = {4, 1, 7, 2};\n        int target1 = 4;\n        System.out.println(insertAndFindIndex(arr1, target1)); // Output: 0\n\n        int[] arr2 = {4, 1, 7, 2};\n        int target2 = 5;\n        System.out.println(insertAndFindIndex(arr2, target2)); // Output: 3\n    }\n}"
              }
            },
            {
              "question": "Capitalize and Count Words in a List Using Streams:",
              "answer": "",
              "code": null
            },
            {
              "question": "Question: You are given a list of lowercase strings. Write a Java program that:",
              "answer": "- Capitalizes the first letter of each word.\n- Counts the occurrences of each word after capitalization.",
              "code": null
            },
            {
              "question": "Input",
              "answer": "- List: [\"hello\", \"world\", \"this\", \"hello\"]",
              "code": null
            },
            {
              "question": "Output",
              "answer": "- Capitalized List: [\"Hello\", \"World\", \"This\", \"Hello\"]\n- Word Counts:\n- Hello: 2\n- World: 1\n- This: 1",
              "code": null
            },
            {
              "question": "Answer (Java Code)",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.*;\nimport java.util.function.Function;\nimport java.util.stream.Collectors;\n\npublic class CapitalizeWords {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(\"hello\", \"world\", \"this\", \"hello\");\n\n        List<String> capitalizedWords = words.stream()\n            .map(word -> word.isEmpty() ? word : Character.toUpperCase(word.charAt(0)) + word.substring(1))\n            .collect(Collectors.toList());\n\n        System.out.println(\"Capitalized List: \" + capitalizedWords);\n\n        Map<String, Long> wordCounts = words.stream()\n            .map(word -> word.isEmpty() ? word : Character.toUpperCase(word.charAt(0)) + word.substring(1))\n            .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));\n\n        wordCounts.forEach((word, count) -> System.out.println(word + \": \" + count));\n    }\n}"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Aspiresystems",
      "questionCount": 59,
      "rounds": [
        {
          "name": "L1 Interview Questions",
          "questions": [
            {
              "question": "Java Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "Briefly describe your project experience and the versions of languages you used.",
              "answer": "- I have 3 years of experience in full-stack development using Java 8 and ReactJS. I've worked on customer registration services and transaction data handling in a bank application. For backend development, I utilized Spring Boot, Hibernate, and JPA. Additionally, I've worked on implementing unit tests using JUnit and Mockito.",
              "code": null
            },
            {
              "question": "What are the features of Java 8?",
              "answer": "- Java 8 introduced several key features, including lambda expressions, the Stream API, default methods in interfaces, the new java.time API for date and time, Optional class, and improvements in the Collections API.",
              "code": null
            },
            {
              "question": "What is a lambda expression?",
              "answer": "- A lambda expression is a concise way to represent a method interface using an expression. It provides a clear and concise way to write inline implementations of functional interfaces.",
              "code": null
            },
            {
              "question": "What is a functional interface?",
              "answer": "- A functional interface is an interface with exactly one abstract method. It can have multiple default or static methods. Functional interfaces are used as the types for lambda expressions and method references.",
              "code": null
            },
            {
              "question": "What is a normal interface?",
              "answer": "- A normal interface can have multiple abstract methods. It serves as a contract for implementing classes to provide specific behaviors.",
              "code": null
            },
            {
              "question": "What is the difference between a functional interface and a normal interface?",
              "answer": "- A functional interface has only one abstract method, making it suitable for lambda expressions, while a normal interface can have multiple abstract methods.",
              "code": null
            },
            {
              "question": "Can I use lambda expressions in normal methods?",
              "answer": "- Yes, lambda expressions can be used in any context where a functional interface is expected, including in normal methods.",
              "code": null
            },
            {
              "question": "What is the difference between HashMap and ConcurrentHashMap?",
              "answer": "- HashMap is not thread-safe and can have performance issues in a concurrent environment. ConcurrentHashMap is thread-safe, allowing concurrent read and write operations without blocking.",
              "code": null
            },
            {
              "question": "Can multiple threads access ConcurrentHashMap?",
              "answer": "- Yes, ConcurrentHashMap allows multiple threads to read and write simultaneously without locking the entire map.",
              "code": null
            },
            {
              "question": "If I use ConcurrentHashMap and perform get and put operations at the same time, will it work?",
              "answer": "- Yes, ConcurrentHashMap is designed to handle concurrent read and write operations safely and efficiently.",
              "code": null
            },
            {
              "question": "How does HashMap work internally?",
              "answer": "- HashMap uses an array of buckets, where each bucket is a linked list or tree. It calculates the hash code of the key, determines the index of the bucket, and stores the key-value pair in the appropriate bucket.",
              "code": null
            },
            {
              "question": "What is a bucket in HashMap?",
              "answer": "- A bucket is a slot in the HashMap's internal array, used to store key-value pairs that have the same hash code.",
              "code": null
            },
            {
              "question": "What is the difference between map and flatMap?",
              "answer": "- map transforms each element in the stream, while flatMap transforms each element to a stream and flattens the resulting streams into a single stream.",
              "code": null
            },
            {
              "question": "What is the difference between throw and throws?",
              "answer": "- throw is used to explicitly throw an exception in the code, while throws is used in the method signature to declare that the method can throw certain exceptions.",
              "code": null
            },
            {
              "question": "What is the ternary operator in Java?",
              "answer": "- The ternary operator is a concise way to express conditional logic. It takes the form condition ? ifTrue : ifFalse.",
              "code": null
            },
            {
              "question": "Write a code to find the 3rd non-repeated character in the string \"hi am Bharath\".",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.LinkedHashMap;\nimport java.util.Map;\n\npublic class NonRepeatedCharacter {\n    public static void main(String[] args) {\n        String str = \"hi am Bharath\";\n        System.out.println(getThirdNonRepeatedCharacter(str));\n    }\n\n    public static Character getThirdNonRepeatedCharacter(String str) {\n        Map<Character, Integer> charCount = new LinkedHashMap<>();\n        for (char c : str.toCharArray()) {\n            charCount.put(c, charCount.getOrDefault(c, 0) + 1);\n        }\n\n        int count = 0;\n        for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {\n            if (entry.getValue() == 1) {\n                count++;\n                if (count == 3) {\n                    return entry.getKey();\n                }\n            }\n        }\n        return null; // or throw an exception if you prefer\n    }\n}"
              }
            },
            {
              "question": "Write a code to count every characters in the string \"hi am Bharath\".",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class CharacterCount {\n    public static void main(String[] args) {\n        String str = \"hi am Bharath\";\n        Map<Character, Integer> charCount = countCharacters(str);\n        charCount.forEach((k, v) -> System.out.println(k + \": \" + v));\n    }\n\n    public static Map<Character, Integer> countCharacters(String str) {\n        Map<Character, Integer> charCount = new HashMap<>();\n        for (char c : str.toCharArray()) {\n            charCount.put(c, charCount.getOrDefault(c, 0) + 1);\n        }\n        return charCount;\n    }\n}"
              }
            },
            {
              "question": "Given list1 = [1,2,4,6,7] and list2 = [3,5,4,6], print elements from list1 that are not present in list2.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class ListDifference {\n    public static void main(String[] args) {\n        List<Integer> list1 = Arrays.asList(1, 2, 4, 6, 7);\n        List<Integer> list2 = Arrays.asList(3, 5, 4, 6);\n\n        List<Integer> result = list1.stream()\n                                    .filter(e -> !list2.contains(e))\n                                    .collect(Collectors.toList());\n\n        System.out.println(result);\n    }\n}"
              }
            },
            {
              "question": "What is the Lombok dependency?",
              "answer": "- Lombok is a Java library that helps reduce boilerplate code. It provides annotations to automatically generate getters, setters, constructors, equals, hashCode, toString, and other methods.",
              "code": null
            },
            {
              "question": "What is a no-argument constructor in Lombok?",
              "answer": "- In Lombok, the @NoArgsConstructor annotation generates a no-argument constructor for the class.",
              "code": null
            },
            {
              "question": "What is serialization and where have you used it?",
              "answer": "- Serialization is the process of converting an object into a byte stream for storage or transmission. I have used serialization in a bank project to serialize transaction statements for storage and retrieval.",
              "code": null
            },
            {
              "question": "What is a serialization ID?",
              "answer": "- A serialization ID (serialVersionUID) is a unique identifier for a Serializable class. It is used during deserialization to verify that the sender and receiver of a serialized object maintain compatibility.",
              "code": null
            },
            {
              "question": "If two objects have the same serialization ID, what happens when calling another microservice with both serialized objects?",
              "answer": "- If two objects have the same serialization ID, they are considered compatible for deserialization. However, it is crucial that their class definitions are compatible to avoid InvalidClassException.",
              "code": null
            },
            {
              "question": "What is a String?",
              "answer": "- A String is an immutable sequence of characters in Java. It is an instance of the java.lang.String class.",
              "code": null
            },
            {
              "question": "What is a String pool?",
              "answer": "- The String pool is a special memory region where Java stores interned strings. When a string is created, the JVM checks the pool first to see if the string already exists. If it does, the reference to the existing string is returned; otherwise, a new string is added to the pool.",
              "code": null
            },
            {
              "question": "What does the @Qualifier annotation mean?",
              "answer": "- The @Qualifier annotation is used to resolve ambiguity in Spring's dependency injection when multiple beans of the same type are present. It specifies which bean should be injected.",
              "code": null
            },
            {
              "question": "Give an example of @Qualifier in real-time.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "@Service\npublic class NotificationService {\n    private final MessageService messageService;\n\n    @Autowired\n    public NotificationService(@Qualifier(\"emailService\") MessageService messageService) {\n        this.messageService = messageService;\n    }\n\n    public void sendNotification(String message) {\n        messageService.sendMessage(message);\n    }\n}\n\n@Service(\"emailService\")\npublic class EmailService implements MessageService {\n    @Override\n    public void sendMessage(String message) {\n        System.out.println(\"Sending email: \" + message);\n    }\n}\n\n@Service(\"smsService\")\npublic class SMSService implements MessageService {\n    @Override\n    public void sendMessage(String message) {\n        System.out.println(\"Sending SMS: \" + message);\n    }\n}"
              }
            },
            {
              "question": "What is @Primary and give a real-time example.",
              "answer": "- The @Primary annotation indicates which bean should be preferred when multiple candidates qualify for autowiring.",
              "code": {
                "language": "java",
                "content": "@Configuration\npublic class AppConfig {\n\n    @Bean\n    @Primary\n    public MessageService primaryMessageService() {\n        return new EmailService();\n    }\n\n    @Bean\n    public MessageService secondaryMessageService() {\n        return new SMSService();\n    }\n}"
              }
            },
            {
              "question": "What are collections in Java?",
              "answer": "- Collections in Java are frameworks that provide an architecture to store and manipulate a group of objects. They include interfaces like List, Set, and Map, and classes like ArrayList, HashSet, and HashMap.",
              "code": null
            },
            {
              "question": "Is Set an interface or a class?",
              "answer": "- Set is an interface in Java.",
              "code": null
            },
            {
              "question": "Is LinkedList an interface or a class?",
              "answer": "- LinkedList is a class in Java.",
              "code": null
            },
            {
              "question": "Spring Boot Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "What is the difference between Spring and Spring Boot?",
              "answer": "- Spring is a comprehensive framework for enterprise Java development. Spring Boot simplifies the setup and development of new Spring applications with default configurations, embedded servers, and minimal configuration.",
              "code": null
            },
            {
              "question": "Why use Spring Boot?",
              "answer": "- Spring Boot is used for its ease of setup, embedded servers, reduced boilerplate code, auto-configuration, and rapid development capabilities.",
              "code": null
            },
            {
              "question": "What is AOP in Spring Boot?",
              "answer": "- AOP (Aspect-Oriented Programming) in Spring Boot is a programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns, such as logging, transaction management, and security.",
              "code": null
            },
            {
              "question": "Explain microservices architecture.",
              "answer": "- Microservices architecture is a design approach where an application is composed of small, loosely coupled, and independently deployable services. Each service handles a specific business function and communicates with other services through APIs.",
              "code": null
            },
            {
              "question": "What is @Autowired?",
              "answer": "- @Autowired is a Spring annotation used for automatic dependency injection. It can be applied to constructors, fields, and setter methods to inject the required beans.",
              "code": null
            },
            {
              "question": "What is the difference between @PathVariable and @RequestParam?",
              "answer": "- @PathVariable is used to extract values from the URI path, while @RequestParam is used to extract query parameters from the request.",
              "code": null
            },
            {
              "question": "What is the difference between POST and PUT?",
              "answer": "- POST is used to create new resources, while PUT is used to update existing resources or create a resource if it does not exist.",
              "code": null
            },
            {
              "question": "Which HTTP method do we use for creating resources?",
              "answer": "- The POST method is used for creating resources.",
              "code": null
            },
            {
              "question": "Can we use PUT for creating resources?",
              "answer": "- Yes, PUT can be used to create resources if the resource does not already exist.",
              "code": null
            },
            {
              "question": "What are HTTP status codes?",
              "answer": "- HTTP status codes are standard response codes given by web servers on the internet. They indicate the result of the client's request, such as 200 (OK), 404 (Not Found), and 500 (Internal Server Error).",
              "code": null
            },
            {
              "question": "What is fail-safe and fail-fast?",
              "answer": "- Fail-safe iterators allow modifications to the collection while iterating without throwing an exception. Fail-fast iterators throw a ConcurrentModificationException if the collection is modified during iteration.",
              "code": null
            },
            {
              "question": "Explain JWT token-based authentication.",
              "answer": "- JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. It is used for stateless authentication by encoding user information in a token, which is then used to verify the user's identity.",
              "code": null
            },
            {
              "question": "What is the @Transactional annotation?",
              "answer": "- @Transactional is used to manage transaction boundaries in Spring. It ensures that a method or a block of code is executed within a transaction, providing rollback and commit mechanisms.",
              "code": null
            },
            {
              "question": "SQL Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "Write an SQL query to find the Nth maximum salary.",
              "answer": "For example, to find the 3rd maximum salary:",
              "code": {
                "language": "sql",
                "content": "SELECT DISTINCT salary\nFROM employee\nORDER BY salary DESC\nLIMIT 1 OFFSET 2;"
              }
            }
          ]
        },
        {
          "name": "L2 Interview Questions",
          "questions": [
            {
              "question": "Self introduction based on project.",
              "answer": "Answer: \" about your project\"",
              "code": null
            },
            {
              "question": "Which Java version are you using?",
              "answer": "Answer: \"Before, I was using Java 8, which introduced several important features such as lambda expressions, the Stream API, the new Date-Time API, and the Optional class. These features significantly improved the way we write Java code. Currently, I am using Java 17. Java 17 includes several new features such as pattern matching for switch expressions, sealed classes, records, and the new Date-Time API enhancements. These features provide more concise and expressive syntax, better performance, and enhanced security.\"",
              "code": null
            },
            {
              "question": "Where did you generate the JWT token?",
              "answer": "Answer: \"In my current project, we generate the JWT token during the user authentication process. The token is generated in the backend service using a secure secret key and is then sent to the client. The client includes this token in the Authorization header of subsequent requests to access protected resources.\"",
              "code": null
            },
            {
              "question": "How do you provide JWT security in Spring Boot?",
              "answer": "Answer: \"In Spring Boot, we provide JWT security by using Spring Security along with a custom filter that validates the JWT token. The filter intercepts incoming requests, extracts the token from the Authorization header, and validates it. If the token is valid, the filter sets the authentication in the security context, allowing the request to proceed. Additionally, we configure the security settings to protect specific endpoints and ensure only authenticated users can access them.\"",
              "code": null
            },
            {
              "question": "How do you override the hashCode and equals methods in Java?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "@Override\n   public boolean equals(Object obj) {\n       if (this == obj) return true;\n       if (obj == null || getClass() != obj.getClass()) return false;\n       Employee employee = (Employee) obj;\n       return id == employee.id &&\n              Double.compare(employee.salary, salary) == 0 &&\n              Objects.equals(name, employee.name) &&\n              Objects.equals(department, employee.department);\n   }\n\n   @Override\n   public int hashCode() {\n       return Objects.hash(name, id, department, salary);\n   }"
              }
            },
            {
              "question": "Find department-wise names using streams.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "Map<String, List<String>> departmentWiseNames = employees.stream()\n    .collect(Collectors.groupingBy(\n        Employee::getDepartment,\n        Collectors.mapping(Employee::getName, Collectors.toList())\n    ));\n\ndepartmentWiseNames.forEach((department, names) -> {\n    System.out.println(\"Department: \" + department);\n    System.out.println(\"Names: \" + names);\n});"
              }
            },
            {
              "question": "Find the second highest salary employee using streams.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "Employee secondHighestSalaryEmployee = employees.stream()\n    .sorted(Comparator.comparingDouble(Employee::getSalary).reversed())\n    .skip(1)\n    .findFirst()\n    .orElse(null);\nSystem.out.println(\"Second Highest Salary Employee: \" + secondHighestSalaryEmployee);"
              }
            },
            {
              "question": "String Comparison",
              "answer": "",
              "code": null
            },
            {
              "question": "What will be the output of the following code?",
              "answer": "- System.out.println(s1 == s2);  - This is true because s1 and s2 refer to the same string literal in the string pool.\n- System.out.println(s1 == s3);  - This is false because s3 is created using the new keyword, resulting in a different object in memory.\n- System.out.println(s1.equals(s3)); - This is true because equals compares the content of the strings, which are the same.",
              "code": {
                "language": "java",
                "content": "public class Test {\n    public static void main(String[] args) {\n        String s1 = \"hello\";\n        String s2 = \"hello\";\n        String s3 = new String(\"hello\");\n\n        System.out.println(s1 == s2); \n        System.out.println(s1 == s3);\n        System.out.println(s1.equals(s3)); \n    }\n}"
              }
            },
            {
              "question": "What will be the output of the following code?",
              "answer": "- System.out.println(s1 == s2);  - This is true because s1 and s2 refer to the same string literal in the string pool.\n- System.out.println(s1 == s3);  - This is false because s3 is created using the new keyword, resulting in a different object in memory.\n- System.out.println(s1.equals(s3));  - This is true because equals compares the content of the strings, which are the same.\n- System.out.println(s1 == s4);  - This is true because s4 is the interned version of s3, which points to the string literal in the string pool, the same as s1.\n-  System.out.println(s3 == s4) This is false because s3 is a new String object created with new String(), while s4 is a reference to the string literal in the pool. Therefore, they are different objects.",
              "code": {
                "language": "java",
                "content": "public class Test {\n    public static void main(String[] args) {\n        String s1 = \"hello\";\n        String s2 = \"hello\";\n        String s3 = new String(\"hello\");\n        String s4 = s3.intern();\n\n        System.out.println(s1 == s2); \n        System.out.println(s1 == s3); \n        System.out.println(s1.equals(s3));\n        System.out.println(s1 == s4); \n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Manager Round Interview Questions",
          "questions": [
            {
              "question": "Answer",
              "answer": "",
              "code": {
                "language": "java",
                "content": "@RestController\n@RequestMapping(\"/api/checkout\")\npublic class CheckoutController {\n\n    @Autowired\n    private CheckoutService checkoutService;\n\n    @PostMapping(\"/{bookId}\")\n    public ResponseEntity<?> checkoutBook(@PathVariable Long bookId, @RequestParam String userId) {\n        try {\n            Checkout checkout = checkoutService.checkoutBook(bookId, userId);\n            return ResponseEntity.status(HttpStatus.OK).body(checkout);\n        } catch (BookUnavailableException e) {\n            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());\n        } catch (Exception e) {\n            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(\"An error occurred during checkout.\");\n        }\n    }\n}\n\n@Service\npublic class CheckoutService {\n\n    @Autowired\n    private CheckoutRepository checkoutRepository;\n\n    @Autowired\n    private BookRepository bookRepository;\n\n    @Transactional\n    public Checkout checkoutBook(Long bookId, String userId) throws BookUnavailableException {\n        synchronized (bookId) {\n            int availableCopies = bookRepository.getAvailableCopies(bookId);\n            if (availableCopies <= 0) {\n                throw new BookUnavailableException(\"No copies of the book are currently available.\");\n            }\n\n            // Reduce the available copies by 1\n            bookRepository.decrementAvailableCopies(bookId);\n\n            // Create and save the checkout record\n            Checkout checkout = new Checkout();\n            checkout.setBookId(bookId);\n            checkout.setCheckedOutBy(userId);\n            checkout.setCheckedOutOn(LocalDateTime.now());\n            return checkoutRepository.save(checkout);\n        }\n    }\n}\n\n@Repository\npublic interface CheckoutRepository extends JpaRepository<Checkout, Long> {\n}\n\n@Repository\npublic interface BookRepository {\n\n    @Query(\"SELECT b.availableCopies FROM Book b WHERE b.id = :bookId\")\n    int getAvailableCopies(@Param(\"bookId\") Long bookId);\n\n    @Modifying\n    @Query(\"UPDATE Book b SET b.availableCopies = b.availableCopies - 1 WHERE b.id = :bookId AND b.availableCopies > 0\")\n    int decrementAvailableCopies(@Param(\"bookId\") Long bookId);\n}\n\n@ResponseStatus(HttpStatus.CONFLICT)\npublic class BookUnavailableException extends RuntimeException {\n    public BookUnavailableException(String message) {\n        super(message);\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 79
};
