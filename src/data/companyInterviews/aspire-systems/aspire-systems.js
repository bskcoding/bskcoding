// AUTO-GENERATED file — company-wise interview data.
// Source: Aspire Systems interview document(s).
// Regenerate with:  node scripts/rebuild-aspire.mjs

export const company = {
  "id": "aspire-systems",
  "name": "Aspire Systems",
  "interviews": [
    {
      "name": "Aspire Systems Interview",
      "questionCount": 66,
      "rounds": [
        {
          "name": "Technical L1 Interview",
          "questions": [
            {
              "question": "Briefly describe your project experience and the versions of languages you used.",
              "answer": "I have 3 years of experience in full-stack development using Java 8 and ReactJS. I've worked on customer registration services and transaction data handling in a bank application. For backend development, I utilized Spring Boot, Hibernate, and JPA. Additionally, I've worked on implementing unit tests using JUnit and Mockito.",
              "code": null
            },
            {
              "question": "What are the features of Java 8?",
              "answer": "Java 8 introduced several key features, including lambda expressions, the Stream API, default methods in interfaces, the new java.time API for date and time, Optional class, and improvements in the Collections API.",
              "code": null
            },
            {
              "question": "What is a lambda expression?",
              "answer": "A lambda expression is a concise way to represent a method interface using an expression. It provides a clear and concise way to write inline implementations of functional interfaces.",
              "code": {
                "language": "java",
                "content": "// Lambda expression example\nRunnable r = () -> System.out.println(\"Hello\");"
              }
            },
            {
              "question": "What is a functional interface?",
              "answer": "A functional interface is an interface with exactly one abstract method. It can have multiple default or static methods. Functional interfaces are used as the types for lambda expressions and method references.",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\ninterface Calculator { int add(int a, int b); }"
              }
            },
            {
              "question": "What is a normal interface?",
              "answer": "A normal interface can have multiple abstract methods. It serves as a contract for implementing classes to provide specific behaviors.",
              "code": {
                "language": "java",
                "content": "interface Vehicle { void start(); void stop(); }"
              }
            },
            {
              "question": "What is the difference between a functional interface and a normal interface?",
              "answer": "A functional interface has only one abstract method, making it suitable for lambda expressions, while a normal interface can have multiple abstract methods.",
              "code": null
            },
            {
              "question": "Can I use lambda expressions in normal methods?",
              "answer": "Yes, lambda expressions can be used in any context where a functional interface is expected, including in normal methods.",
              "code": {
                "language": "java",
                "content": "public void process() {\n    List<String> list = Arrays.asList(\"a\", \"b\");\n    list.forEach(s -> System.out.println(s));\n}"
              }
            },
            {
              "question": "What is the difference between HashMap and ConcurrentHashMap?",
              "answer": "HashMap is not thread-safe and can have performance issues in a concurrent environment. ConcurrentHashMap is thread-safe, allowing concurrent read and write operations without blocking.",
              "code": null
            },
            {
              "question": "Can multiple threads access ConcurrentHashMap?",
              "answer": "Yes, ConcurrentHashMap allows multiple threads to read and write simultaneously without locking the entire map.",
              "code": null
            },
            {
              "question": "If I use ConcurrentHashMap and perform get and put operations at the same time, will it work?",
              "answer": "Yes, ConcurrentHashMap is designed to handle concurrent read and write operations safely and efficiently.",
              "code": null
            },
            {
              "question": "How does HashMap work internally?",
              "answer": "HashMap uses an array of buckets, where each bucket is a linked list or tree. It calculates the hash code of the key, determines the index of the bucket, and stores the key-value pair in the appropriate bucket.",
              "code": null
            },
            {
              "question": "What is a bucket in HashMap?",
              "answer": "A bucket is a slot in the HashMap's internal array, used to store key-value pairs that have the same hash code.",
              "code": null
            },
            {
              "question": "What is the difference between map and flatMap?",
              "answer": "map transforms each element in the stream, while flatMap transforms each element to a stream and flattens the resulting streams into a single stream.",
              "code": {
                "language": "java",
                "content": "// map - one-to-one\nList<String> upper = list.stream().map(String::toUpperCase).collect(Collectors.toList());\n// flatMap - one-to-many\nList<Integer> flat = list.stream().flatMap(Collection::stream).collect(Collectors.toList());"
              }
            },
            {
              "question": "What is the difference between throw and throws?",
              "answer": "throw is used to explicitly throw an exception in the code, while throws is used in the method signature to declare that the method can throw certain exceptions.",
              "code": {
                "language": "java",
                "content": "// throw\nthrow new RuntimeException(\"Error\");\n// throws\npublic void method() throws IOException { }"
              }
            },
            {
              "question": "What is the ternary operator in Java?",
              "answer": "The ternary operator is a concise way to express conditional logic. It takes the form condition ? ifTrue : ifFalse.",
              "code": {
                "language": "java",
                "content": "int result = (a > b) ? a : b;"
              }
            },
            {
              "question": "Write a code to find the 3rd non-repeated character in the string 'hi am Bharath'.",
              "answer": "Use LinkedHashMap to maintain insertion order, count characters, then find the 3rd character with count 1.",
              "code": {
                "language": "java",
                "content": "public static Character getThirdNonRepeatedCharacter(String str) {\n    Map<Character, Integer> charCount = new LinkedHashMap<>();\n    for (char c : str.toCharArray()) {\n        charCount.put(c, charCount.getOrDefault(c, 0) + 1);\n    }\n    int count = 0;\n    for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {\n        if (entry.getValue() == 1) {\n            count++;\n            if (count == 3) return entry.getKey();\n        }\n    }\n    return null;\n}"
              }
            },
            {
              "question": "Write a code to count every character in the string 'hi am Bharath'.",
              "answer": "Use HashMap to store character counts.",
              "code": {
                "language": "java",
                "content": "public static Map<Character, Integer> countCharacters(String str) {\n    Map<Character, Integer> charCount = new HashMap<>();\n    for (char c : str.toCharArray()) {\n        charCount.put(c, charCount.getOrDefault(c, 0) + 1);\n    }\n    return charCount;\n}"
              }
            },
            {
              "question": "Given list1 = [1,2,4,6,7] and list2 = [3,5,4,6], print elements from list1 that are not present in list2.",
              "answer": "Use stream filter with contains check.",
              "code": {
                "language": "java",
                "content": "List<Integer> result = list1.stream()\n    .filter(e -> !list2.contains(e))\n    .collect(Collectors.toList());\nSystem.out.println(result); // [1, 2, 7]"
              }
            },
            {
              "question": "What is the Lombok dependency?",
              "answer": "Lombok is a Java library that helps reduce boilerplate code. It provides annotations to automatically generate getters, setters, constructors, equals, hashCode, toString, and other methods.",
              "code": {
                "language": "java",
                "content": "@Data @AllArgsConstructor @NoArgsConstructor\npublic class User { private String name; private int age; }"
              }
            },
            {
              "question": "What is a no-argument constructor in Lombok?",
              "answer": "In Lombok, the @NoArgsConstructor annotation generates a no-argument constructor for the class.",
              "code": {
                "language": "java",
                "content": "@NoArgsConstructor\npublic class User { private String name; }"
              }
            },
            {
              "question": "What is serialization and where have you used it?",
              "answer": "Serialization is the process of converting an object into a byte stream for storage or transmission. I have used serialization in a bank project to serialize transaction statements for storage and retrieval.",
              "code": {
                "language": "java",
                "content": "class User implements Serializable { private static final long serialVersionUID = 1L; }"
              }
            },
            {
              "question": "What is a serialization ID?",
              "answer": "A serialization ID (serialVersionUID) is a unique identifier for a Serializable class. It is used during deserialization to verify that the sender and receiver of a serialized object maintain compatibility.",
              "code": {
                "language": "java",
                "content": "private static final long serialVersionUID = 123456789L;"
              }
            },
            {
              "question": "If two objects have the same serialization ID, what happens when calling another microservice with both serialized objects?",
              "answer": "If two objects have the same serialization ID, they are considered compatible for deserialization. However, it is crucial that their class definitions are compatible to avoid InvalidClassException.",
              "code": null
            },
            {
              "question": "What is a String?",
              "answer": "A String is an immutable sequence of characters in Java. It is an instance of the java.lang.String class.",
              "code": {
                "language": "java",
                "content": "String str = \"Hello\";"
              }
            },
            {
              "question": "What is a String pool?",
              "answer": "The String pool is a special memory region where Java stores interned strings. When a string is created, the JVM checks the pool first to see if the string already exists. If it does, the reference to the existing string is returned; otherwise, a new string is added to the pool.",
              "code": {
                "language": "java",
                "content": "String s1 = \"Hello\"; // Pool\nString s2 = \"Hello\"; // Same pool reference\nString s3 = new String(\"Hello\"); // Heap"
              }
            },
            {
              "question": "What does the @Qualifier annotation mean?",
              "answer": "The @Qualifier annotation is used to resolve ambiguity in Spring's dependency injection when multiple beans of the same type are present. It specifies which bean should be injected.",
              "code": {
                "language": "java",
                "content": "@Autowired @Qualifier(\"emailService\") private MessageService service;"
              }
            },
            {
              "question": "Give an example of @Qualifier in real-time.",
              "answer": "When multiple implementations of MessageService exist (EmailService and SMSService), @Qualifier specifies which one to inject.",
              "code": {
                "language": "java",
                "content": "@Service\npublic class NotificationService {\n    @Autowired @Qualifier(\"emailService\")\n    private MessageService messageService;\n}\n@Service(\"emailService\")\npublic class EmailService implements MessageService { }\n@Service(\"smsService\")\npublic class SMSService implements MessageService { }"
              }
            },
            {
              "question": "What is @Primary and give a real-time example.",
              "answer": "The @Primary annotation indicates which bean should be preferred when multiple candidates qualify for autowiring.",
              "code": {
                "language": "java",
                "content": "@Configuration\npublic class AppConfig {\n    @Bean @Primary\n    public MessageService primaryMessageService() {\n        return new EmailService();\n    }\n}"
              }
            },
            {
              "question": "What are collections in Java?",
              "answer": "Collections in Java are frameworks that provide an architecture to store and manipulate a group of objects. They include interfaces like List, Set, and Map, and classes like ArrayList, HashSet, and HashMap.",
              "code": null
            },
            {
              "question": "Is Set an interface or a class?",
              "answer": "Set is an interface in Java.",
              "code": null
            },
            {
              "question": "Is LinkedList an interface or a class?",
              "answer": "LinkedList is a class in Java.",
              "code": null
            },
            {
              "question": "What is the difference between Spring and Spring Boot?",
              "answer": "Spring is a comprehensive framework for enterprise Java development. Spring Boot simplifies the setup and development of new Spring applications with default configurations, embedded servers, and minimal configuration.",
              "code": null
            },
            {
              "question": "Why use Spring Boot?",
              "answer": "Spring Boot is used for its ease of setup, embedded servers, reduced boilerplate code, auto-configuration, and rapid development capabilities.",
              "code": null
            },
            {
              "question": "What is AOP in Spring Boot?",
              "answer": "AOP (Aspect-Oriented Programming) in Spring Boot is a programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns, such as logging, transaction management, and security.",
              "code": {
                "language": "java",
                "content": "@Aspect\n@Component\npublic class LoggingAspect {\n    @Around(\"execution(* com.service.*.*(..))\")\n    public Object log(ProceedingJoinPoint joinPoint) throws Throwable { }\n}"
              }
            },
            {
              "question": "Explain microservices architecture.",
              "answer": "Microservices architecture is a design approach where an application is composed of small, loosely coupled, and independently deployable services. Each service handles a specific business function and communicates with other services through APIs.",
              "code": null
            },
            {
              "question": "What is @Autowired?",
              "answer": "@Autowired is a Spring annotation used for automatic dependency injection. It can be applied to constructors, fields, and setter methods to inject the required beans.",
              "code": {
                "language": "java",
                "content": "@Autowired private UserService userService;"
              }
            },
            {
              "question": "What is the difference between @PathVariable and @RequestParam?",
              "answer": "@PathVariable is used to extract values from the URI path, while @RequestParam is used to extract query parameters from the request.",
              "code": {
                "language": "java",
                "content": "@GetMapping(\"/users/{id}\")\npublic User getUser(@PathVariable Long id) { }\n@GetMapping(\"/users\")\npublic List<User> getUsers(@RequestParam String name) { }"
              }
            },
            {
              "question": "What is the difference between POST and PUT?",
              "answer": "POST is used to create new resources, while PUT is used to update existing resources or create a resource if it does not exist.",
              "code": null
            },
            {
              "question": "Which HTTP method do we use for creating resources?",
              "answer": "The POST method is used for creating resources.",
              "code": null
            },
            {
              "question": "Can we use PUT for creating resources?",
              "answer": "Yes, PUT can be used to create resources if the resource does not already exist.",
              "code": null
            },
            {
              "question": "What are HTTP status codes?",
              "answer": "HTTP status codes are standard response codes given by web servers on the internet. They indicate the result of the client's request, such as 200 (OK), 404 (Not Found), and 500 (Internal Server Error).",
              "code": null
            },
            {
              "question": "What is fail-safe and fail-fast?",
              "answer": "Fail-safe iterators allow modifications to the collection while iterating without throwing an exception. Fail-fast iterators throw a ConcurrentModificationException if the collection is modified during iteration.",
              "code": null
            },
            {
              "question": "Explain JWT token-based authentication.",
              "answer": "JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. It is used for stateless authentication by encoding user information in a token, which is then used to verify the user's identity.",
              "code": null
            },
            {
              "question": "What is the @Transactional annotation?",
              "answer": "@Transactional is used to manage transaction boundaries in Spring. It ensures that a method or a block of code is executed within a transaction, providing rollback and commit mechanisms.",
              "code": {
                "language": "java",
                "content": "@Transactional\npublic void transferMoney() { }"
              }
            },
            {
              "question": "Write an SQL query to find the Nth maximum salary.",
              "answer": "Use ORDER BY with LIMIT/OFFSET or DENSE_RANK window function.",
              "code": {
                "language": "java",
                "content": "SELECT DISTINCT salary FROM employee ORDER BY salary DESC LIMIT 1 OFFSET N-1;\n-- For 3rd maximum:\nSELECT DISTINCT salary FROM employee ORDER BY salary DESC LIMIT 1 OFFSET 2;"
              }
            }
          ]
        },
        {
          "name": "Technical L2 Interview",
          "questions": [
            {
              "question": "Self introduction based on project.",
              "answer": "I have 3+ years of experience as a Java Full Stack Developer. Currently working on customer registration and transaction processing systems using Java 17, Spring Boot, Microservices, and ReactJS. I handle REST API development, Kafka integration, JWT authentication, and cloud deployment.",
              "code": null
            },
            {
              "question": "Which Java version are you using?",
              "answer": "Previously using Java 8 with features like lambda expressions, Stream API, Date-Time API, and Optional class. Currently using Java 17 with new features like pattern matching for switch, sealed classes, records, and enhanced Date-Time API.",
              "code": null
            },
            {
              "question": "Where did you generate the JWT token?",
              "answer": "JWT token is generated during user authentication in the backend service using a secure secret key. The token is sent to the client, which includes it in the Authorization header of subsequent requests to access protected resources.",
              "code": {
                "language": "java",
                "content": "// JWT Generation\nString jwt = Jwts.builder()\n    .setSubject(username)\n    .setIssuedAt(new Date())\n    .setExpiration(new Date(System.currentTimeMillis() + 3600000))\n    .signWith(SignatureAlgorithm.HS256, secretKey)\n    .compact();"
              }
            },
            {
              "question": "How do you provide JWT security in Spring Boot?",
              "answer": "Using Spring Security with a custom JWT filter that intercepts requests, extracts token from Authorization header, validates it, and sets authentication in security context. Configure security settings to protect specific endpoints.",
              "code": {
                "language": "java",
                "content": "@Component\npublic class JwtFilter extends OncePerRequestFilter {\n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) {\n        String token = extractToken(request);\n        if (token != null && validateToken(token)) {\n            Authentication auth = getAuthentication(token);\n            SecurityContextHolder.getContext().setAuthentication(auth);\n        }\n        chain.doFilter(request, response);\n    }\n}"
              }
            },
            {
              "question": "How do you override the hashCode and equals methods in Java?",
              "answer": "Override equals to compare object content, hashCode to return same value for equal objects. Use Objects utility methods.",
              "code": {
                "language": "java",
                "content": "@Override\npublic boolean equals(Object obj) {\n    if (this == obj) return true;\n    if (obj == null || getClass() != obj.getClass()) return false;\n    Employee employee = (Employee) obj;\n    return id == employee.id &&\n        Double.compare(employee.salary, salary) == 0 &&\n        Objects.equals(name, employee.name) &&\n        Objects.equals(department, employee.department);\n}\n@Override\npublic int hashCode() {\n    return Objects.hash(name, id, department, salary);\n}"
              }
            },
            {
              "question": "Find department-wise names using streams.",
              "answer": "Use groupingBy with mapping collector to get department-wise list of employee names.",
              "code": {
                "language": "java",
                "content": "Map<String, List<String>> departmentWiseNames = employees.stream()\n    .collect(Collectors.groupingBy(\n        Employee::getDepartment,\n        Collectors.mapping(Employee::getName, Collectors.toList())\n    ));\ndepartmentWiseNames.forEach((dept, names) -> {\n    System.out.println(\"Department: \" + dept);\n    System.out.println(\"Names: \" + names);\n});"
              }
            },
            {
              "question": "Find the second highest salary employee using streams.",
              "answer": "Sort by salary descending, skip first, find first.",
              "code": {
                "language": "java",
                "content": "Employee secondHighestSalaryEmployee = employees.stream()\n    .sorted(Comparator.comparingDouble(Employee::getSalary).reversed())\n    .skip(1)\n    .findFirst()\n    .orElse(null);\nSystem.out.println(\"Second Highest Salary Employee: \" + secondHighestSalaryEmployee);"
              }
            },
            {
              "question": "What will be the output of string comparison code?",
              "answer": "s1 == s2 true (same pool), s1 == s3 false (new object), s1.equals(s3) true (same content).",
              "code": {
                "language": "java",
                "content": "String s1 = \"hello\";\nString s2 = \"hello\";\nString s3 = new String(\"hello\");\nSystem.out.println(s1 == s2); // true\nSystem.out.println(s1 == s3); // false\nSystem.out.println(s1.equals(s3)); // true"
              }
            },
            {
              "question": "What will be the output with intern() method?",
              "answer": "s1 == s4 true (intern returns pool reference), s3 == s4 false (different objects).",
              "code": {
                "language": "java",
                "content": "String s1 = \"hello\";\nString s2 = \"hello\";\nString s3 = new String(\"hello\");\nString s4 = s3.intern();\nSystem.out.println(s1 == s2); // true\nSystem.out.println(s1 == s3); // false\nSystem.out.println(s1.equals(s3)); // true\nSystem.out.println(s1 == s4); // true\nSystem.out.println(s3 == s4); // false"
              }
            }
          ]
        },
        {
          "name": "Additional Interview Questions",
          "questions": [
            {
              "question": "What is a hash collision?",
              "answer": "A hash collision occurs when two different keys in a hash-based collection produce the same hash code and are placed in the same bucket. This can lead to performance degradation as multiple keys have to be stored and managed in the same location.",
              "code": null
            },
            {
              "question": "When does a collision error occur in hash-based collections?",
              "answer": "A collision error occurs when multiple keys map to the same hash code and are stored in the same bucket. Collections handle collisions through chaining (linked list) or open addressing (probing).",
              "code": null
            },
            {
              "question": "What are the key differences between Runnable and Callable?",
              "answer": "Runnable does not return a result and cannot throw checked exceptions. Callable returns a result (T) and can throw checked exceptions. Runnable is executed by Thread or Executor, while Callable is executed by ExecutorService.",
              "code": {
                "language": "java",
                "content": "// Runnable\nRunnable r = () -> System.out.println(\"Hello\");\n// Callable\nCallable<String> c = () -> \"Hello\";"
              }
            },
            {
              "question": "What is the difference between map and flatMap in Java Streams?",
              "answer": "map transforms each element into another form, producing a stream of same structure. flatMap flattens multiple streams into a single stream by applying a one-to-many transformation function.",
              "code": {
                "language": "java",
                "content": "// map: one-to-one\nlist.stream().map(String::toUpperCase)\n// flatMap: one-to-many\nlist.stream().flatMap(Collection::stream)"
              }
            },
            {
              "question": "How does flatMap work internally?",
              "answer": "flatMap applies a function that returns a stream for each element, then flattens these streams into a single stream through a combination of map operation and Stream.flatMap method, which merges nested streams.",
              "code": null
            }
          ]
        },
        {
          "name": "Coding Problems",
          "questions": [
            {
              "question": "Find and Insert Target in a Sorted Array",
              "answer": "First check if target exists in original array. If not, sort array and use binary search to find insertion position.\n\nExamples:\n- arr=[4,1,7,2], target=4 → 0\n- arr=[4,1,7,2], target=5 → 3",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\npublic class InsertAndFindIndex {\n    public static int insertAndFindIndex(int[] arr, int target) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == target) return i;\n        }\n        Arrays.sort(arr);\n        int index = Arrays.binarySearch(arr, target);\n        if (index >= 0) return index;\n        return -(index + 1);\n    }\n}"
              }
            },
            {
              "question": "Capitalize and Count Words in a List Using Streams",
              "answer": "Use map to capitalize first letter, use groupingBy with counting to get word counts.\n\nExample:\n- Input: [\"hello\", \"world\", \"this\", \"hello\"] → Hello:2, World:1, This:1",
              "code": {
                "language": "java",
                "content": "List<String> words = Arrays.asList(\"hello\", \"world\", \"this\", \"hello\");\nList<String> capitalized = words.stream()\n    .map(word -> Character.toUpperCase(word.charAt(0)) + word.substring(1))\n    .collect(Collectors.toList());\nMap<String, Long> counts = words.stream()\n    .map(word -> Character.toUpperCase(word.charAt(0)) + word.substring(1))\n    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));"
              }
            }
          ]
        },
        {
          "name": "Manager Round",
          "questions": [
            {
              "question": "Briefly describe your current project and daily responsibilities.",
              "answer": "Currently working on a library system microservice handling book checkouts. Responsibilities include developing REST APIs, ensuring thread-safe operations, handling exceptions, and providing consistent API responses. Daily tasks include coding, code reviews, debugging, and collaborating with cross-functional teams.",
              "code": null
            },
            {
              "question": "Design a microservice for library book checkout with concurrency handling.",
              "answer": "Design includes: 1) REST endpoint with @PostMapping, 2) Thread-safe checkout using synchronized block or database locks, 3) Atomic operations with @Transactional, 4) Custom exception for book unavailable, 5) Consistent error responses with proper HTTP status codes.",
              "code": {
                "language": "java",
                "content": "@RestController\n@RequestMapping(\"/api/checkout\")\npublic class CheckoutController {\n    @PostMapping(\"/{bookId}\")\n    public ResponseEntity<?> checkoutBook(@PathVariable Long bookId, @RequestParam String userId) {\n        try {\n            Checkout checkout = checkoutService.checkoutBook(bookId, userId);\n            return ResponseEntity.status(HttpStatus.OK).body(checkout);\n        } catch (BookUnavailableException e) {\n            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());\n        } catch (Exception e) {\n            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)\n                .body(\"An error occurred during checkout.\");\n        }\n    }\n}\n@Service\npublic class CheckoutService {\n    @Transactional\n    public Checkout checkoutBook(Long bookId, String userId) throws BookUnavailableException {\n        synchronized (bookId) {\n            int availableCopies = bookRepository.getAvailableCopies(bookId);\n            if (availableCopies <= 0) {\n                throw new BookUnavailableException(\"No copies available.\");\n            }\n            bookRepository.decrementAvailableCopies(bookId);\n            Checkout checkout = new Checkout();\n            checkout.setBookId(bookId);\n            checkout.setCheckedOutBy(userId);\n            checkout.setCheckedOutOn(LocalDateTime.now());\n            return checkoutRepository.save(checkout);\n        }\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "HR Round",
          "questions": [
            {
              "question": "Why do you want to join Aspire Systems?",
              "answer": "Aspire Systems has a strong reputation for innovation and technology excellence. I'm excited about the opportunity to work on challenging projects, learn new technologies, and contribute to the company's growth. The company culture and focus on employee development align with my career goals.",
              "code": null
            },
            {
              "question": "What are your strengths and weaknesses?",
              "answer": "Strengths: Quick learner, problem-solving skills, strong technical foundation, good team player. Weakness: Sometimes focus too much on details, working on delegating tasks better.",
              "code": null
            },
            {
              "question": "Why are you looking for a job change?",
              "answer": "Looking for better growth opportunities, challenging projects, and a chance to work with new technologies. Aspire Systems offers the perfect environment for professional growth.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 66
};
