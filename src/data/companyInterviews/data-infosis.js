// AUTO-GENERATED file — company-wise interview data.
// Source: Infosis interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "infosis",
  "name": "Infosis",
  "interviews": [
    {
      "name": "InfosisInterview",
      "questionCount": 50,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Self-Introduction and Project Explanation",
              "answer": "",
              "code": null
            },
            {
              "question": "Self-introduction with a brief explanation about your project.",
              "answer": "- *\"Hello, I’m [Your Name]. I have been working in software development for [X] years, specializing in Java and React. Currently, I am involved in a project that focuses on developing a [brief description of the project].\"*",
              "code": null
            },
            {
              "question": "Have you developed any project for your referencing purpose?",
              "answer": "- *\"Yes, I have worked on several projects for reference, including [briefly mention training projects or key projects you’ve worked on]. These projects helped me enhance my skills in [mention technologies or areas].\"*",
              "code": null
            },
            {
              "question": "Explain about your developed project. (Follow-up questions based on the project)",
              "answer": "- *\"My recent project involved [describe the scope of your project]. It was designed to [mention key objectives or features]. We utilized technologies such as [mention technologies] to achieve [mention goals or results].\"*",
              "code": null
            },
            {
              "question": "How do you monitor your project?",
              "answer": "- *\"I use various tools like New Relic and Grafana for monitoring application performance and logs. Additionally, I rely on automated tests and CI/CD pipelines to ensure the project’s stability.\"*",
              "code": null
            },
            {
              "question": "Which database did you use?",
              "answer": "- *\"I used SQL for managing relational data due to its robust features and performance advantages.\"*",
              "code": null
            },
            {
              "question": "Java",
              "answer": "",
              "code": null
            },
            {
              "question": "What is a class loader?",
              "answer": "- *A class loader is a part of the Java Runtime Environment (JRE) that loads Java classes into memory. It dynamically loads, links, and initializes classes as needed.*",
              "code": null
            },
            {
              "question": "What is the Object class?",
              "answer": "- *The Object class is the root class of the Java class hierarchy. Every class in Java inherits from Object, and it provides basic methods like toString(), equals(), and hashCode().*",
              "code": null
            },
            {
              "question": "What are the equals and hashCode methods in the Object class?",
              "answer": "- *equals() is used to compare two objects for equality, while hashCode() returns a unique integer for each object. These methods are used in collections like HashMap.*",
              "code": null
            },
            {
              "question": "Explain encapsulation.",
              "answer": "- *Encapsulation is the concept of wrapping data (variables) and methods (functions) into a single unit or class. It restricts direct access to some of the object's components, which can help prevent accidental interference and misuse.*",
              "code": null
            },
            {
              "question": "Give a real-time example of encapsulation.",
              "answer": "- *A real-time example is a bank account class. The account details (balance, account number) are private, and access is provided through public methods (deposit, withdraw) to ensure controlled and secure manipulation of the data.*",
              "code": null
            },
            {
              "question": "Compare static block vs static method.",
              "answer": "- *A static block is used for initializing static variables or performing some initialization when the class is first loaded. A static method, on the other hand, can be called without creating an instance of the class and can only access static members.*",
              "code": null
            },
            {
              "question": "Does a static block execute first or does a constructor execute first?",
              "answer": "- *A static block executes before a constructor. It runs when the class is first loaded, whereas the constructor is executed when an instance of the class is created.*",
              "code": null
            },
            {
              "question": "If I remove static from the main method, will it work?",
              "answer": "- *No, the main method must be static because it is the entry point for the JVM to start the application. Without static, the JVM cannot call the method.*",
              "code": null
            },
            {
              "question": "Write a code to move array elements with 0s to the last and explain. arr={1,0,1,1,0,0,1} output={1,1,1,1,0,0,0}",
              "answer": "- *This code iterates through the array, moving all non-zero elements to the front. After that, it fills the remaining positions with zeros.*",
              "code": {
                "language": "java",
                "content": "public class MoveZeros {\n    public static void moveZeros(int[] arr) {\n        int count = 0; // Count of non-zero elements\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] != 0) {\n                arr[count++] = arr[i]; // Move non-zero elements to the front\n            }\n        }\n        while (count < arr.length) {\n            arr[count++] = 0; // Fill remaining positions with zeros\n        }\n    }\n}"
              }
            },
            {
              "question": "Class Inheritance Issue:",
              "answer": "- *Java does not support multiple inheritance directly. You need to refactor the code, perhaps using interfaces or abstract classes.*",
              "code": {
                "language": "java",
                "content": "class A {\n    public void sum() {}\n}\nclass B extends A {\n    public void sum() {}\n}\n// class C extends A, B {} // Compilation error"
              }
            },
            {
              "question": "Interface Implementation Issue:",
              "answer": "- *In Java, when a class implements multiple interfaces that declare methods with the same name and signature, you only need to provide one implementation for that method in the class. This single implementation will be used for both interfaces.*",
              "code": {
                "language": "java",
                "content": "class C implements A, B {\n    @Override\n    public void sum() {\n        // Single implementation of the sum method\n        System.out.println(\"Sum method implemented in class C\");\n    }\n}"
              }
            },
            {
              "question": "What is a functional interface?",
              "answer": "- *A functional interface is an interface with a single abstract method. They are used as the target type for lambda expressions and method references. Examples include Runnable and Callable.*",
              "code": null
            },
            {
              "question": "Write code to find the second largest number in the array [1, 2, 3, 4, 5, 2, 4] using Java 8.",
              "answer": "- *This code first removes duplicates, sorts the array, and then retrieves the second last element.*",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\nimport java.util.Comparator;\n\npublic class SecondLargestNumber {\n    public static void main(String[] args) {\n        int[] a = {3, 6, 32, 1, 8, 5, 31, 22};\n\n        int secondLargest = Arrays.stream(a)\n                                  .boxed()\n                                  .sorted(Comparator.reverseOrder())\n                                  .distinct()\n                                  .skip(1)\n                                  .findFirst()\n                                  .orElseThrow(() -> new IllegalArgumentException(\"Array must contain at least two distinct elements\"));\n\n        System.out.println(\"Second Largest Number: \" + secondLargest);\n    }\n}"
              }
            },
            {
              "question": "What is a HashMap?",
              "answer": "- *HashMap is a collection that stores key-value pairs. It allows for efficient retrieval of values based on their keys.*",
              "code": null
            },
            {
              "question": "Can a HashMap key be null?",
              "answer": "- *Yes, HashMap allows one null key and multiple null values.*",
              "code": null
            },
            {
              "question": "Explain the internal working process of a HashMap.",
              "answer": "- *HashMap uses an array of buckets to store key-value pairs. The hash code of the key determines the bucket in which the entry is stored. Collisions are handled by linking entries in the same bucket.*",
              "code": null
            },
            {
              "question": "What is the new change in Java 8 hashCode?",
              "answer": "- *Java 8 introduced improvements to the hashCode method, particularly in hash-based collections. For example, HashMap uses a balanced tree structure for high collision scenarios.*",
              "code": null
            },
            {
              "question": "What is the default size of a HashMap?",
              "answer": "- *The default initial capacity of a HashMap is 16 buckets.*",
              "code": null
            },
            {
              "question": "Explain fail-safe and fail-fast iterators.",
              "answer": "- *Fail-fast iterators immediately throw ConcurrentModificationException if the collection is modified during iteration. Fail-safe iterators, like those in CopyOnWriteArrayList, work on a copy of the collection and do not throw exceptions if the collection is modified.*\n-*[Reference code]*\n*Code Example for Fail-Fast Iterators:*\n*Code Example for Fail-Safe Iterators:*",
              "code": {
                "language": "java",
                "content": "import java.util.List;\nimport java.util.concurrent.CopyOnWriteArrayList;\n\npublic class FailSafeExample {\n    public static void main(String[] args) {\n        List<String> list = new CopyOnWriteArrayList<>();\n        list.add(\"A\");\n        list.add(\"B\");\n        list.add(\"C\");\n\n        for (String item : list) {\n            System.out.println(item);\n            list.add(\"D\"); // This will not cause ConcurrentModificationException\n        }\n\n        // Print the list after modification\n        System.out.println(\"List after modification: \" + list);\n    }\n}"
              }
            },
            {
              "question": "Hibernate",
              "answer": "",
              "code": null
            },
            {
              "question": "What is Hibernate?",
              "answer": "- *Hibernate is an ORM (Object-Relational Mapping) framework that simplifies database interactions by mapping Java objects to database tables.*",
              "code": null
            },
            {
              "question": "Does JPA implement Hibernate? (True or False and why)",
              "answer": "- *False. JPA (Java Persistence API) is a specification for ORM in Java. Hibernate is an implementation of JPA.*",
              "code": null
            },
            {
              "question": "If JDBC is there, why do we need Hibernate?",
              "answer": "- *Hibernate provides a higher level of abstraction compared to JDBC. It handles complex database operations, caching, and object mapping more efficiently than raw JDBC.*",
              "code": null
            },
            {
              "question": "Do you know SQL and NoSQL databases?",
              "answer": "- *Yes, I am familiar with both SQL databases (e.g., PostgreSQL, MySQL) and NoSQL databases (e.g., MongoDB, Cassandra).*",
              "code": null
            },
            {
              "question": "SQL",
              "answer": "",
              "code": null
            },
            {
              "question": "What is the difference between HAVING and WHERE clause?",
              "answer": "- *WHERE is used to filter rows before aggregation, while HAVING is used to filter groups after aggregation.*",
              "code": null
            },
            {
              "question": "Can I use WHERE to filter a group of records?",
              "answer": "- *No, WHERE filters rows, not groups. Use HAVING to filter groups.*",
              "code": null
            },
            {
              "question": "What is an index in SQL?",
              "answer": "- *An index is a database object that improves the speed of data retrieval operations on a table. It creates a separate data structure that allows for faster searches.*",
              "code": null
            },
            {
              "question": "Spring Boot",
              "answer": "",
              "code": null
            },
            {
              "question": "What is the difference between PUT and PATCH?",
              "answer": "- *PUT is used to update an entire resource, while PATCH is used to update partial data of a resource.*",
              "code": null
            },
            {
              "question": "Can we use PUT in place of POST? Will it work or not?",
              "answer": "- *Yes, PUT can be used in place of POST, but they have different semantics. PUT is idempotent, meaning multiple identical requests have the same effect as a single request, while POST may result in different outcomes.*",
              "code": null
            },
            {
              "question": "What is the difference between @RestController and @Controller?",
              "answer": "- *@RestController is a specialized version of @Controller that combines @Controller and @ResponseBody, meaning it returns JSON/XML responses directly. @Controller is used for rendering views (like JSPs).*",
              "code": null
            },
            {
              "question": "Why is REST API stateless?",
              "answer": "- *REST APIs are stateless to ensure scalability and reliability. Each request from the client to the server must contain all the information needed to understand and process the request.*",
              "code": null
            },
            {
              "question": "Additional Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "How do you know .NET?",
              "answer": "- *[_____]*",
              "code": null
            },
            {
              "question": "Can you give an example of where you have used all your technical skills?",
              "answer": "- *[_____]*",
              "code": null
            }
          ]
        },
        {
          "name": "Manager Round",
          "questions": [
            {
              "question": "Can you provide a brief explanation of your project?",
              "answer": "- *[your self].*",
              "code": null
            },
            {
              "question": "What specific work did you do with ReactJS in your project?",
              "answer": "- *I worked on creating reusable components, implementing form validation with Formik, and managing state using React’s Context API. I also optimized the application's performance by using React hooks like useMemo and useCallback, and implemented lazy loading for certain components to enhance loading times.*",
              "code": null
            },
            {
              "question": "On a scale of 1 to 10, how would you rate yourself in Java, Spring Boot, and microservices?",
              "answer": "- *I would rate myself as follows: Java - 8, Spring Boot - 8, Microservices - 7.5. I have extensive experience in Java and Spring Boot, and I am comfortable developing and managing microservices architectures, though I continue to seek opportunities to deepen my expertise in microservices.*",
              "code": null
            },
            {
              "question": "How did you learn .NET?",
              "answer": "- *I learned .NET Core by working on a personal project and by following tutorials and courses available online. I also created content about .NET on my YouTube channel, which helped reinforce my learning by teaching the concepts to others. This approach allowed me to deepen my understanding and gain practical experience.*",
              "code": null
            },
            {
              "question": "Which databases have you used in your projects?",
              "answer": "- *I have used MySQL and H2 databases in my projects. MySQL was utilized for managing relational data due to its robustness and scalability, while H2 was used for in-memory data storage and testing purposes, which helped in speeding up the development and testing processes*",
              "code": null
            },
            {
              "question": "What issues did you face in your first and second projects, and how did you overcome them?",
              "answer": "- *In my first project, a bank application, I faced issues with data integrity, security, and performance. I resolved these by implementing strong transaction management, using Spring Security for authentication, and optimizing database queries. In my second project, I did not encounter significant issues.*",
              "code": null
            },
            {
              "question": "How have you improved the performance of your code?",
              "answer": "- *I have improved code performance by profiling and identifying bottlenecks, optimizing algorithms and data structures, and implementing caching strategies. Additionally, I have refactored code for better readability and maintainability, which also contributes to improved performance and reduced complexity.*",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 50
};
