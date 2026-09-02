// AUTO-GENERATED file — company-wise interview data.
// Source: MindGate interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "mindgate",
  "name": "MindGate",
  "interviews": [
    {
      "name": "MindGate",
      "questionCount": 43,
      "rounds": [
        {
          "name": "L1 Technical Interview",
          "questions": [
            {
              "question": "Self-introduction based on your project.",
              "answer": "I am [Your Name] with 3 years of experience in Java and ReactJS. In my current project, I developed a customer registration service using ReactJS and Spring Boot, integrating with multiple microservices to ensure secure and efficient data handling.",
              "code": null
            },
            {
              "question": "Explain microservices architecture.",
              "answer": "Microservices architecture divides an application into small, independent services, each responsible for a specific business functionality. These services communicate over a network, allowing for decentralized development, scaling, and deployment.",
              "code": null
            },
            {
              "question": "How do microservices communicate internally?",
              "answer": "Microservices communicate internally using protocols like HTTP/REST, gRPC, or messaging systems like Kafka. Service discovery tools and load balancers help manage requests and ensure service availability.",
              "code": null
            },
            {
              "question": "How does a JWT token work internally?",
              "answer": "A JWT token encodes user information and is signed with a secret key. The token is sent to the client and included in subsequent requests. The server verifies the token's signature to authenticate the user.",
              "code": null
            },
            {
              "question": "Explain the Collection hierarchy in Java.",
              "answer": "The Collection hierarchy starts with Iterable, followed by Collection, branching into List, Set, and Queue. Map is a separate interface for key-value pairs, not extending Collection.",
              "code": null
            },
            {
              "question": "If a List is declared as final, can we modify it?",
              "answer": "Yes, a final List can have its contents modified, but its reference cannot be reassigned to another List object.",
              "code": {
                "language": "java",
                "content": "final List<String> list = new ArrayList<>();\nlist.add(\"Hello\"); // Allowed\nlist = new ArrayList<>(); // Compilation error"
              }
            },
            {
              "question": "Why does a Set not allow duplicates?",
              "answer": "A Set does not allow duplicates because it uses the equals() and hashCode() methods to ensure all elements are unique.",
              "code": null
            },
            {
              "question": "What is the difference between fail-safe and fail-fast iterators?",
              "answer": "Fail-fast iterators throw a ConcurrentModificationException if the collection is modified during iteration. Fail-safe iterators work on a copy of the collection, allowing safe iteration.",
              "code": {
                "language": "java",
                "content": "// Fail-fast\nArrayList<String> list = new ArrayList<>();\nfor(String s : list) { list.remove(s); } // Exception\n// Fail-safe\nCopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();\nfor(String s : list) { list.remove(s); } // Safe"
              }
            },
            {
              "question": "Explain ConcurrentHashMap.",
              "answer": "ConcurrentHashMap is a thread-safe implementation of Map that allows concurrent read and write operations by dividing the map into segments, reducing contention.",
              "code": {
                "language": "java",
                "content": "ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();\nmap.put(\"key\", 10);"
              }
            },
            {
              "question": "What happens when you use HashMap in a multithreaded environment?",
              "answer": "Using HashMap in a multithreaded environment can lead to data corruption and unpredictable results due to concurrent modifications. ConcurrentHashMap should be used instead.",
              "code": null
            },
            {
              "question": "Describe the Java thread lifecycle.",
              "answer": "The Java thread lifecycle includes New, Runnable, Blocked, Waiting, Timed Waiting, and Terminated states. A thread transitions through these states based on its execution and synchronization.",
              "code": null
            },
            {
              "question": "Write a custom ArrayList that does not allow duplicates.",
              "answer": "Extend ArrayList and override add method to check for duplicates using contains.",
              "code": {
                "language": "java",
                "content": "import java.util.ArrayList;\npublic class UniqueArrayList<E> extends ArrayList<E> {\n    @Override\n    public boolean add(E e) {\n        if (!contains(e)) {\n            return super.add(e);\n        }\n        return false;\n    }\n}\n// Usage\nUniqueArrayList<String> list = new UniqueArrayList<>();\nlist.add(\"A\"); // true\nlist.add(\"A\"); // false"
              }
            },
            {
              "question": "How do you find the occurrences of words using HashMap in Java?",
              "answer": "Split string into words, use HashMap with getOrDefault to count occurrences.",
              "code": {
                "language": "java",
                "content": "public class WordCount {\n    public static void main(String[] args) {\n        String text = \"apple apple banana apple orange banana\";\n        Map<String, Integer> wordCount = new HashMap<>();\n        for (String word : text.split(\" \")) {\n            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);\n        }\n        for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {\n            System.out.println(entry.getKey() + \": \" + entry.getValue());\n        }\n    }\n}"
              }
            },
            {
              "question": "Write an SQL query to print account names based on the currency name.",
              "answer": "Join ACCOUNT, COUNTRY, and CURRENCY tables to filter by currency name.",
              "code": {
                "language": "sql",
                "content": "SELECT A.ACCNAME\nFROM ACCOUNT A\nJOIN COUNTRY C ON A.COUNTRYID = C.COUNTRYID\nJOIN CURRENCY CUR ON C.CURRID = CUR.CURRID\nWHERE CUR.CURRNAME = 'currency_name';"
              }
            },
            {
              "question": "What are your daily roles and responsibilities?",
              "answer": "Development: Writing and maintaining code for various features and fixing bugs. Collaboration: Working with cross-functional teams including designers, product managers, and other developers. Code Reviews: Participating in code reviews to ensure code quality and adherence to best practices. Testing: Writing and running unit tests and integration tests. Deployment: Assisting with the deployment of applications and ensuring smooth production operations.",
              "code": null
            },
            {
              "question": "What is the difference between @RestController and @Controller in Spring?",
              "answer": "@Controller: Used in Spring MVC to define a controller class. Used for building web applications and returns views (JSP, Thymeleaf). @RestController: A specialized version of @Controller used for RESTful web services. Combines @Controller and @ResponseBody, returns data (JSON/XML) directly.",
              "code": null
            },
            {
              "question": "What is the difference between method overloading and method overriding in Java?",
              "answer": "Method Overloading: Multiple methods same name different parameters, resolved at compile-time. Method Overriding: Subclass provides specific implementation for superclass method, resolved at runtime.",
              "code": {
                "language": "java",
                "content": "// Overloading\nvoid add(int a, int b) { }\nvoid add(int a, int b, int c) { }\n// Overriding\nclass Parent { void display() { } }\nclass Child extends Parent { @Override void display() { } }"
              }
            },
            {
              "question": "What is a thread in Java?",
              "answer": "A thread in Java is a lightweight subprocess that runs concurrently with other threads. Threads allow a program to perform multiple tasks simultaneously. Each thread has its own execution path but shares the same process resources.",
              "code": {
                "language": "java",
                "content": "Thread thread = new Thread(() -> System.out.println(\"Running\"));\nthread.start();"
              }
            },
            {
              "question": "How do you handle exceptions in a Runnable since it cannot throw checked exceptions?",
              "answer": "Since Runnable does not allow throwing checked exceptions, handle exceptions within the run method using a try-catch block. Log or manage the exception as needed.",
              "code": {
                "language": "java",
                "content": "public class MyRunnable implements Runnable {\n    @Override\n    public void run() {\n        try {\n            // Code that might throw an exception\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}"
              }
            },
            {
              "question": "What are the differences between Callable and Runnable in Java?",
              "answer": "Runnable: Represents task, does not return result, cannot throw checked exceptions. Callable: Similar to Runnable but can return a result and can throw checked exceptions.",
              "code": {
                "language": "java",
                "content": "Runnable r = () -> System.out.println(\"Hello\");\nCallable<String> c = () -> \"Hello\";"
              }
            },
            {
              "question": "What is the difference between wait() and sleep() methods in Java?",
              "answer": "wait(): Called on object's monitor, releases lock, waits until notified, requires synchronization. sleep(): Static method of Thread class, pauses thread, does not release lock.",
              "code": {
                "language": "java",
                "content": "synchronized(obj) { obj.wait(); }\nThread.sleep(1000);"
              }
            },
            {
              "question": "What are the differences between Spring MVC and Spring Boot?",
              "answer": "Spring MVC: Framework for building web applications using MVC pattern. Requires configuration. Spring Boot: Simplifies Spring application setup with auto-configuration, embedded servers, convention-over-configuration.",
              "code": null
            },
            {
              "question": "How do you join two tables in SQL? Provide an example query.",
              "answer": "Use JOIN clause to combine tables based on common column.",
              "code": {
                "language": "sql",
                "content": "SELECT e.employee_id, e.name, d.department_name\nFROM employees e\nJOIN departments d ON e.department_id = d.department_id;"
              }
            },
            {
              "question": "Write a Java code snippet to find the top element in a mountain array.",
              "answer": "Use binary search to find peak element.",
              "code": {
                "language": "java",
                "content": "public class MountainArrayTop {\n    public static int findTopElement(int[] arr) {\n        int left = 0, right = arr.length - 1;\n        while (left < right) {\n            int mid = left + (right - left) / 2;\n            if (arr[mid] > arr[mid + 1]) {\n                right = mid;\n            } else {\n                left = mid + 1;\n            }\n        }\n        return arr[left];\n    }\n    public static void main(String[] args) {\n        int[] arr = {1, 3, 8, 12, 4, 2};\n        System.out.println(\"Top element: \" + findTopElement(arr)); // 12\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "L1 React & Kafka",
          "questions": [
            {
              "question": "How to migrate HTML & JavaScript code to ReactJS?",
              "answer": "1) Set up React Environment using Create React App. 2) Component Structure - Identify distinct sections as React components. 3) Convert HTML to JSX. 4) State Management - Convert JavaScript logic to React state and event handlers. 5) Refactor Functions to component methods or hooks. 6) Routing - Set up React Router for navigation.",
              "code": null
            },
            {
              "question": "How to consume already shared messages in Kafka?",
              "answer": "1) Set Consumer Group - Configure consumer to be part of consumer group. 2) Seek to Offset - Use seek method to set offset. 3) Configure Consumer Properties - Set auto.offset.reset to earliest to read from beginning.",
              "code": {
                "language": "java",
                "content": "Properties props = new Properties();\nprops.put(\"bootstrap.servers\", \"localhost:9092\");\nprops.put(\"group.id\", \"my-group\");\nprops.put(\"key.deserializer\", \"org.apache.kafka.common.serialization.StringDeserializer\");\nprops.put(\"value.deserializer\", \"org.apache.kafka.common.serialization.StringDeserializer\");\nprops.put(\"auto.offset.reset\", \"earliest\");\nKafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);\nconsumer.subscribe(Arrays.asList(\"my-topic\"));"
              }
            }
          ]
        },
        {
          "name": "L2 Technical Interview",
          "questions": [
            {
              "question": "Can you describe a project you have worked on?",
              "answer": "I worked on a banking application with microservices architecture. The project handled customer registration, transaction processing, and account management. Used Spring Boot, React, Kafka, and MySQL. My role included API development, database design, and frontend integration.",
              "code": null
            },
            {
              "question": "How do you scale your project?",
              "answer": "Strategies for scaling: load balancing using NGINX or AWS ALB, database optimization with indexing and caching, implementing microservices for independent scaling, using caching solutions like Redis, horizontal scaling of service instances.",
              "code": null
            },
            {
              "question": "How do you analyze code for performance and quality?",
              "answer": "Use code reviews, static analysis tools (SonarQube), profiling tools (JProfiler), performance testing (JMeter). Identify bottlenecks, optimize algorithms, reduce database queries, implement caching.",
              "code": null
            },
            {
              "question": "Which version of Spring Boot and Java have you used in your project?",
              "answer": "I have used Spring Boot 2.7.x and Java 11 in my projects. Also familiar with Spring Boot 3.x and Java 17.",
              "code": null
            },
            {
              "question": "Why did you choose this company?",
              "answer": "I am attracted to this company's reputation for innovation, its focus on technology, and the opportunities for professional growth. The projects align with my skills and career aspirations.",
              "code": null
            },
            {
              "question": "Have you used threads in your project? If so, how?",
              "answer": "Yes, used threads for parallel processing of batch jobs, async email notifications, and handling concurrent API requests. Used ExecutorService for thread pool management.",
              "code": {
                "language": "java",
                "content": "ExecutorService executor = Executors.newFixedThreadPool(10);\nexecutor.submit(() -> processBatch());\nexecutor.shutdown();"
              }
            },
            {
              "question": "Why do you use ExecutorService in your projects?",
              "answer": "ExecutorService provides thread pool management, simplifies concurrent task execution, improves resource management, avoids overhead of manual thread creation, and provides better control over task scheduling.",
              "code": null
            },
            {
              "question": "Is it possible to solve tasks without using ExecutorService?",
              "answer": "Yes, tasks can be solved using raw threads (new Thread()). However, ExecutorService provides better resource management, reusability, and easier task scheduling. Manual thread management can lead to resource exhaustion.",
              "code": null
            },
            {
              "question": "How do you ensure code quality and maintainability in your projects?",
              "answer": "Follow coding standards, conduct code reviews, write unit tests with JUnit and Mockito, use design patterns, implement CI/CD pipelines, use static code analysis tools (SonarQube).",
              "code": null
            },
            {
              "question": "How do you handle version control and collaboration in your projects?",
              "answer": "Use Git for version control with feature branch workflow. Create pull requests for code reviews. Use tools like Jira for task tracking and Slack for team communication.",
              "code": {
                "language": "bash",
                "content": "git checkout -b feature-branch\ngit add .\ngit commit -m \"message\"\ngit push origin feature-branch"
              }
            }
          ]
        },
        {
          "name": "HR Round",
          "questions": [
            {
              "question": "Tell me about yourself.",
              "answer": "I am [Your Name] with 3 years of experience as a Java Full Stack Developer. I specialize in Spring Boot, React, and Microservices. I have worked on banking applications and customer registration systems. I am passionate about building scalable applications and learning new technologies.",
              "code": null
            },
            {
              "question": "Why do you want to join MindGate?",
              "answer": "MindGate has a strong reputation in technology consulting. I'm excited about the opportunity to work on challenging projects, learn from industry experts, and contribute to the company's growth.",
              "code": null
            },
            {
              "question": "What are your salary expectations?",
              "answer": "Based on my experience and market standards, I am looking for a competitive package. I'm flexible and happy to discuss further based on the role.",
              "code": null
            },
            {
              "question": "Where do you see yourself in 5 years?",
              "answer": "I see myself as a technical lead, contributing to architecture decisions, mentoring junior developers, and driving technical excellence.",
              "code": null
            },
            {
              "question": "What are your strengths and weaknesses?",
              "answer": "Strengths: Quick learner, problem-solving skills, strong technical foundation, good team player. Weakness: Sometimes focus too much on perfection, working on delegating tasks better.",
              "code": null
            },
            {
              "question": "Why are you looking for a job change?",
              "answer": "Looking for better growth opportunities, challenging projects, and a chance to work with new technologies. MindGate offers the perfect environment for professional growth.",
              "code": null
            },
            {
              "question": "What is your preferred location?",
              "answer": "I am open to working in [location] or remote based on company requirements.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 43
};
