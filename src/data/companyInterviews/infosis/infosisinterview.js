// AUTO-GENERATED file — company-wise interview data.
// Source: Infosis interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "infosis",
  "name": "Infosis",
  "interviews": [
    {
      "name": "InfosysInterview",
      "questionCount": 50,
      "rounds": [
        {
          "name": "Technical Round",
          "questions": [
            {
              "question": "Self-introduction with a brief explanation about your project.",
              "answer": "Hello, I'm [Your Name]. I have been working in software development for 3 years, specializing in Java and React. Currently, I am involved in a project that focuses on developing a distributed banking application for customer registration and transaction processing.",
              "code": null
            },
            {
              "question": "Have you developed any project for your referencing purpose?",
              "answer": "Yes, I have worked on several projects for reference, including customer registration systems and transaction processing applications. These projects helped me enhance my skills in Java, Spring Boot, React, and microservices.",
              "code": null
            },
            {
              "question": "Explain about your developed project. (Follow-up questions based on the project)",
              "answer": "My recent project involved building a real-time banking application with a microservices architecture. It was designed to handle customer registration, account management, and secure transaction processing. We utilized technologies such as Spring Boot, Kafka, Docker, and React to achieve scalability and reliability.",
              "code": null
            },
            {
              "question": "How do you monitor your project?",
              "answer": "I use various tools like New Relic and Grafana for monitoring application performance and logs. Additionally, I rely on automated tests and CI/CD pipelines to ensure the project's stability.",
              "code": null
            },
            {
              "question": "Which database did you use?",
              "answer": "I used SQL for managing relational data due to its robust features and performance advantages. Also used H2 for in-memory testing purposes.",
              "code": null
            },
            {
              "question": "What is a class loader?",
              "answer": "A class loader is a part of the Java Runtime Environment (JRE) that loads Java classes into memory. It dynamically loads, links, and initializes classes as needed.",
              "code": null
            },
            {
              "question": "What is the Object class?",
              "answer": "The Object class is the root class of the Java class hierarchy. Every class in Java inherits from Object, and it provides basic methods like toString(), equals(), and hashCode().",
              "code": null
            },
            {
              "question": "What are the equals and hashCode methods in the Object class?",
              "answer": "equals() is used to compare two objects for equality, while hashCode() returns a unique integer for each object. These methods are used in collections like HashMap.",
              "code": null
            },
            {
              "question": "Explain encapsulation.",
              "answer": "Encapsulation is the concept of wrapping data (variables) and methods (functions) into a single unit or class. It restricts direct access to some of the object's components, which can help prevent accidental interference and misuse.",
              "code": null
            },
            {
              "question": "Give a real-time example of encapsulation.",
              "answer": "A real-time example is a bank account class. The account details (balance, account number) are private, and access is provided through public methods (deposit, withdraw) to ensure controlled and secure manipulation of the data.",
              "code": {
                "language": "java",
                "content": "class BankAccount {\n    private double balance;\n    public void deposit(double amount) { balance += amount; }\n    public void withdraw(double amount) { balance -= amount; }\n    public double getBalance() { return balance; }\n}"
              }
            },
            {
              "question": "Compare static block vs static method.",
              "answer": "A static block is used for initializing static variables or performing initialization when the class is first loaded. A static method can be called without creating an instance and can only access static members.",
              "code": {
                "language": "java",
                "content": "static { System.out.println(\"Static block\"); }\nstatic void display() { System.out.println(\"Static method\"); }"
              }
            },
            {
              "question": "Does a static block execute first or does a constructor execute first?",
              "answer": "A static block executes before a constructor. It runs when the class is first loaded, whereas the constructor is executed when an instance of the class is created.",
              "code": null
            },
            {
              "question": "If I remove static from the main method, will it work?",
              "answer": "No, the main method must be static because it is the entry point for the JVM to start the application. Without static, the JVM cannot call the method.",
              "code": null
            },
            {
              "question": "Write a code to move array elements with 0s to the last. arr={1,0,1,1,0,0,1} output={1,1,1,1,0,0,0}",
              "answer": "Traverse the array, move non-zero elements to the front, and fill the remaining positions with zeros.",
              "code": {
                "language": "java",
                "content": "public class MoveZeros {\n    public static void moveZeros(int[] arr) {\n        int count = 0;\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] != 0) {\n                arr[count++] = arr[i];\n            }\n        }\n        while (count < arr.length) {\n            arr[count++] = 0;\n        }\n    }\n}\n// Input: {1,0,1,1,0,0,1} Output: {1,1,1,1,0,0,0}"
              }
            },
            {
              "question": "Class Inheritance Issue: class C extends A, B - Compilation error. How to resolve?",
              "answer": "Java does not support multiple inheritance directly. You need to refactor the code using interfaces or abstract classes.",
              "code": {
                "language": "java",
                "content": "// Compilation error\nclass C extends A, B { } // Invalid\n\n// Solution: Use interfaces\ninterface A { void sum(); }\ninterface B { void sum(); }\nclass C implements A, B {\n    @Override\n    public void sum() { System.out.println(\"Sum\"); }\n}"
              }
            },
            {
              "question": "Interface Implementation Issue: Class C implements A, B with same method sum(). Which sum method to implement?",
              "answer": "When a class implements multiple interfaces with the same method name and signature, you only need to provide one implementation.",
              "code": {
                "language": "java",
                "content": "interface A { void sum(); }\ninterface B { void sum(); }\nclass C implements A, B {\n    @Override\n    public void sum() {\n        System.out.println(\"Sum method implemented in class C\");\n    }\n}"
              }
            },
            {
              "question": "What is a functional interface?",
              "answer": "A functional interface is an interface with a single abstract method. They are used as the target type for lambda expressions and method references. Examples include Runnable and Callable.",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\ninterface Calculator { int add(int a, int b); }"
              }
            },
            {
              "question": "Write code to find the second largest number in the array [1, 2, 3, 4, 5, 2, 4] using Java 8.",
              "answer": "Use a stream with distinct, sorted reverse, skip, and findFirst.",
              "code": {
                "language": "java",
                "content": "int[] a = {1, 2, 3, 4, 5, 2, 4};\nint secondLargest = Arrays.stream(a)\n    .boxed()\n    .sorted(Comparator.reverseOrder())\n    .distinct()\n    .skip(1)\n    .findFirst()\n    .orElseThrow(() -> new IllegalArgumentException(\"Array must contain at least two distinct elements\"));\nSystem.out.println(\"Second Largest: \" + secondLargest); // 4"
              }
            },
            {
              "question": "What is a HashMap?",
              "answer": "HashMap is a collection that stores key-value pairs. It allows for efficient retrieval of values based on their keys.",
              "code": {
                "language": "java",
                "content": "Map<String, Integer> map = new HashMap<>();\nmap.put(\"Key\", 10);"
              }
            },
            {
              "question": "Can a HashMap key be null?",
              "answer": "Yes, HashMap allows one null key and multiple null values.",
              "code": {
                "language": "java",
                "content": "map.put(null, 10); // Valid"
              }
            },
            {
              "question": "Explain the internal working process of a HashMap.",
              "answer": "HashMap uses an array of buckets to store key-value pairs. The hash code of the key determines the bucket in which the entry is stored. Collisions are handled by linking entries in the same bucket (chaining).",
              "code": null
            },
            {
              "question": "What is the new change in Java 8 hashCode?",
              "answer": "Java 8 introduced improvements to hash-based collections. HashMap uses a balanced tree structure for high collision scenarios (when bucket size exceeds threshold).",
              "code": null
            },
            {
              "question": "What is the default size of a HashMap?",
              "answer": "The default initial capacity of a HashMap is 16 buckets.",
              "code": null
            },
            {
              "question": "Explain fail-safe and fail-fast iterators.",
              "answer": "Fail-fast iterators throw ConcurrentModificationException if the collection is modified during iteration. Fail-safe iterators work on a copy of the collection and do not throw exceptions.",
              "code": {
                "language": "java",
                "content": "// Fail-fast\nList<String> list = new ArrayList<>();\nIterator<String> it = list.iterator();\nlist.add(\"D\"); // ConcurrentModificationException\n\n// Fail-safe\nCopyOnWriteArrayList<String> cowList = new CopyOnWriteArrayList<>();\nfor (String item : cowList) { cowList.add(\"D\"); } // No exception"
              }
            },
            {
              "question": "What is Hibernate?",
              "answer": "Hibernate is an ORM (Object-Relational Mapping) framework that simplifies database interactions by mapping Java objects to database tables.",
              "code": null
            },
            {
              "question": "Does JPA implement Hibernate? (True or False and why)",
              "answer": "False. JPA (Java Persistence API) is a specification for ORM in Java. Hibernate is an implementation of JPA.",
              "code": null
            },
            {
              "question": "If JDBC is there, why do we need Hibernate?",
              "answer": "Hibernate provides a higher level of abstraction compared to JDBC. It handles complex database operations, caching, and object mapping more efficiently than raw JDBC.",
              "code": null
            },
            {
              "question": "Do you know SQL and NoSQL databases?",
              "answer": "Yes, I am familiar with both SQL databases (e.g., PostgreSQL, MySQL) and NoSQL databases (e.g., MongoDB, Cassandra).",
              "code": null
            },
            {
              "question": "What is the difference between HAVING and WHERE clause?",
              "answer": "WHERE is used to filter rows before aggregation, while HAVING is used to filter groups after aggregation.",
              "code": null
            },
            {
              "question": "Can I use WHERE to filter a group of records?",
              "answer": "No, WHERE filters rows, not groups. Use HAVING to filter groups.",
              "code": {
                "language": "sql",
                "content": "SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 10;"
              }
            },
            {
              "question": "What is an index in SQL?",
              "answer": "An index is a database object that improves the speed of data retrieval operations on a table. It creates a separate data structure that allows for faster searches.",
              "code": {
                "language": "sql",
                "content": "CREATE INDEX idx_name ON employees(name);"
              }
            },
            {
              "question": "What is the difference between PUT and PATCH?",
              "answer": "PUT is used to update an entire resource, while PATCH is used to update partial data of a resource.",
              "code": null
            },
            {
              "question": "Can we use PUT in place of POST? Will it work or not?",
              "answer": "Yes, PUT can be used in place of POST, but they have different semantics. PUT is idempotent, meaning multiple identical requests have the same effect as a single request, while POST may result in different outcomes.",
              "code": null
            },
            {
              "question": "What is the difference between @RestController and @Controller?",
              "answer": "@RestController is a specialized version of @Controller that combines @Controller and @ResponseBody, meaning it returns JSON/XML responses directly. @Controller is used for rendering views (like JSPs).",
              "code": null
            },
            {
              "question": "Why is REST API stateless?",
              "answer": "REST APIs are stateless to ensure scalability and reliability. Each request from the client to the server must contain all the information needed to understand and process the request.",
              "code": null
            },
            {
              "question": "How do you know .NET?",
              "answer": "I have basic knowledge of .NET Core. I learned by working on personal projects and following online tutorials.",
              "code": null
            },
            {
              "question": "Can you give an example of where you have used all your technical skills?",
              "answer": "In my banking application project, I used Java and Spring Boot for backend APIs, React for the frontend, JPA/Hibernate for database operations, JWT for security, Docker for containerization, and Git for version control.",
              "code": null
            }
          ]
        },
        {
          "name": "Manager Round",
          "questions": [
            {
              "question": "Can you provide a brief explanation of your project?",
              "answer": "I have been working on a distributed banking application that handles real-time transactions using a microservices architecture. It includes features like customer registration, account management, and secure transaction processing. Technologies used include Spring Boot, Kafka, Docker, and React.",
              "code": null
            },
            {
              "question": "What specific work did you do with ReactJS in your project?",
              "answer": "I worked on creating reusable components, implementing form validation with Formik, and managing state using React's Context API. I also optimized the application's performance by using React hooks like useMemo and useCallback, and implemented lazy loading for certain components to enhance loading times.",
              "code": null
            },
            {
              "question": "On a scale of 1 to 10, how would you rate yourself in Java, Spring Boot, and microservices?",
              "answer": "I would rate myself as follows: Java - 8, Spring Boot - 8, Microservices - 7.5.\n- I have extensive experience in Java and Spring Boot\n- I am comfortable developing and managing microservices architectures, though I continue to seek opportunities to deepen my expertise",
              "code": null
            },
            {
              "question": "How did you learn .NET?",
              "answer": "I learned .NET Core by working on a personal project and by following tutorials and courses available online. I also created content about .NET on my YouTube channel, which helped reinforce my learning by teaching the concepts to others.",
              "code": null
            },
            {
              "question": "Which databases have you used in your projects?",
              "answer": "I have used MySQL and H2 databases in my projects.\n- MySQL was utilized for managing relational data due to its robustness and scalability\n- H2 was used for in-memory data storage and testing purposes",
              "code": null
            },
            {
              "question": "What issues did you face in your first and second projects, and how did you overcome them?",
              "answer": "In my first project, a bank application, I faced issues with data integrity, security, and performance.\n- I resolved these by implementing strong transaction management, using Spring Security for authentication, and optimizing database queries\n- In my second project, I did not encounter significant issues",
              "code": null
            },
            {
              "question": "How have you improved the performance of your code?",
              "answer": "I have improved code performance by profiling and identifying bottlenecks, optimizing algorithms and data structures, and implementing caching strategies. Additionally, I have refactored code for better readability and maintainability, which also contributes to improved performance and reduced complexity.",
              "code": null
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
              "question": "Why do you want to join Infosys?",
              "answer": "Infosys is a global leader in technology and innovation. I'm excited about the opportunity to work on large-scale projects, learn from industry experts, and contribute to the company's growth.",
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
              "answer": "- Strengths: quick learner, problem-solving skills, strong technical foundation, good team player\n- Weakness: sometimes focus too much on perfection; working on delegating tasks better",
              "code": null
            },
            {
              "question": "Why are you looking for a job change?",
              "answer": "Looking for better growth opportunities, challenging projects, and a chance to work with new technologies. Infosys offers the perfect environment for professional growth.",
              "code": null
            }
          ]
        }
      ]
    }
  ]
};
