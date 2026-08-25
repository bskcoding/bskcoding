// AUTO-GENERATED file — company-wise interview data.
// Source: Altimetrix interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "altimetrix",
  "name": "Altimetrix",
  "interviews": [
    {
      "name": "Altimetrix_Interview",
      "questionCount": 20,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Briefly explain the project you are currently working on.",
              "answer": "- I am currently working on a microservices-based banking application that handles user registration and transaction data. The project uses Spring Boot for the backend, ReactJS for the frontend, and JPA for database interactions. We also implement security using Spring Security and JWT for authentication.",
              "code": null
            },
            {
              "question": "What is Jenkins, and how do you use it in your project?",
              "answer": "- Jenkins is a continuous integration/continuous deployment (CI/CD) tool used to automate the build and deployment process. In my project, Jenkins is configured to build the application automatically whenever there is a new commit to the Git repository. It also runs unit tests, integration tests, and deploys the application to the staging/production environment.",
              "code": null
            },
            {
              "question": "Which tools do you use for monitoring purposes in Spring Boot?",
              "answer": "- We use tools like Prometheus and Grafana for monitoring metrics, Spring Boot Actuator for exposing health and metrics endpoints, and ELK Stack (Elasticsearch, Logstash, Kibana) for logging and real-time monitoring.",
              "code": null
            },
            {
              "question": "What Git commands do you commonly use in your project?",
              "answer": "- Common Git commands include:\n- git clone: Clone a repository\n- git pull: Fetch and merge changes from the remote repository\n- git push: Push local changes to the remote repository\n- git branch: Create, list, or switch branches\n- git checkout: Switch between branches or restore files\n- git merge: Merge branches\n- git commit -m \"message\": Commit changes with a message\n- git stash: Temporarily save changes not ready to commit",
              "code": null
            },
            {
              "question": "What is Agile methodology? Explain your experience working in Agile.",
              "answer": "- Agile methodology is an iterative approach to software development where requirements and solutions evolve through collaboration between cross-functional teams. I have experience working in Agile, specifically using Scrum. We follow sprints, conduct daily standups, sprint planning, and retrospective meetings. This approach allows us to quickly adapt to changes and deliver incremental updates.",
              "code": null
            },
            {
              "question": "What is the difference between shallow copy and deep copy?",
              "answer": "Shallow Copy: Creates a new object, but copies the references to the same memory addresses of the objects inside. Changes to the internal objects affect both copies.\nDeep Copy: Creates a new object and recursively copies all objects within it, meaning both the original and copied objects are independent of each other.",
              "code": null
            },
            {
              "question": "How many ways can you create an object in Java?",
              "answer": "- There are several ways to create an object in Java:\n1. Using the new keyword.\n2. Using reflection (Class.newInstance() or Constructor.newInstance()).\n3. Using clone() (if the class implements Cloneable).\n4. Using serialization and deserialization.\n5. Using the Factory or Builder design pattern.",
              "code": null
            },
            {
              "question": "Why is the main method in Java static?",
              "answer": "- The main method is static because it can be called without creating an instance of the class. This allows the JVM to call it directly to start the program.",
              "code": null
            },
            {
              "question": "What is a deadlock in Java?",
              "answer": "- A deadlock occurs when two or more threads are blocked forever, waiting for each other to release a lock they need to proceed. Each thread holds a resource the other thread requires, leading to a cycle of dependency.",
              "code": null
            },
            {
              "question": "How can we avoid deadlock in Java?",
              "answer": "- To avoid deadlock:\n1. Always acquire locks in a consistent order.\n2. Use a timeout for acquiring locks.\n3. Use fewer synchronized blocks or locks, and keep them as short as possible.\n4. Use lock hierarchy or deadlock detection algorithms.",
              "code": null
            },
            {
              "question": "Do you know any design patterns?",
              "answer": "- Yes, I am familiar with several design patterns like Singleton, Factory, Builder, Observer, Strategy, and Decorator.",
              "code": null
            },
            {
              "question": "What is the Factory Design Pattern?",
              "answer": "- The Factory Design Pattern is a creational pattern that provides an interface for creating objects in a super class, but allows subclasses to alter the type of objects that will be created. It promotes loose coupling and is used when the object creation process involves some logic.",
              "code": null
            },
            {
              "question": "Check if a given string containing brackets is balanced.",
              "answer": "- Approach: Use a stack to track the open brackets and check for matching closing brackets.",
              "code": {
                "language": "java",
                "content": "public boolean isBalanced(String str) {\n    Stack<Character> stack = new Stack<>();\n    for (char ch : str.toCharArray()) {\n        if (ch == '(' || ch == '{' || ch == '[') {\n            stack.push(ch);\n        } else if (ch == ')' && (stack.isEmpty() || stack.pop() != '(')) {\n            return false;\n        } else if (ch == '}' && (stack.isEmpty() || stack.pop() != '{')) {\n            return false;\n        } else if (ch == ']' && (stack.isEmpty() || stack.pop() != '[')) {\n            return false;\n        }\n    }\n    return stack.isEmpty();\n}"
              }
            },
            {
              "question": "Find the most repeated IP address.",
              "answer": "- Approach: Use a HashMap to count the occurrences of each IP.",
              "code": {
                "language": "java",
                "content": "public String findMostRepeatedIP(List<String> logs) {\n    Map<String, Integer> ipCount = new HashMap<>();\n    for (String log : logs) {\n        String ip = log.split(\" \")[0];\n        ipCount.put(ip, ipCount.getOrDefault(ip, 0) + 1);\n    }\n    return Collections.max(ipCount.entrySet(), Map.Entry.comparingByValue()).getKey();\n}"
              }
            },
            {
              "question": "How do you communicate between two microservices?",
              "answer": "- Communication between microservices can be done using REST APIs (synchronous) or message brokers like RabbitMQ or Kafka (asynchronous). REST APIs use HTTP requests, while message brokers allow communication through event-driven architecture.",
              "code": null
            },
            {
              "question": "How do you secure communication between microservices?",
              "answer": "- You can secure communication using:\nJWT  (JSON Web Tokens) for authentication and authorization.\nOAuth2  for secure access delegation.\nSSL/TLS  for encrypted communication.\nAPI Gateway  with security filters to control traffic and access.",
              "code": null
            },
            {
              "question": "Have you worked with JPA (Java Persistence API)?",
              "answer": "- Yes, I have used JPA in my projects for managing database entities, relationships, and queries using Hibernate as the JPA provider. I also work with annotations like @Entity, @OneToMany, @ManyToOne, and @Query.",
              "code": null
            },
            {
              "question": "What is the N+1 select problem in JPA, and how do you handle it?",
              "answer": "- The N+1 select problem occurs when a query retrieves an entity, but subsequent queries are made to load related entities one by one. It can be handled using:\nFetchType.LAZY: or FetchType.EAGER.\n- Using JOIN FETCH queries to load related entities in a single query.",
              "code": null
            },
            {
              "question": "Have you worked on writing unit test cases? How do you approach it?",
              "answer": "- Yes, I write unit test cases using JUnit and Mockito. My approach is to test individual methods, mock external dependencies, and ensure high code coverage by writing tests for both positive and negative scenarios.",
              "code": null
            },
            {
              "question": "How do you mock private methods in unit testing?",
              "answer": "- Private methods can be mocked using PowerMock along with Mockito, which allows for mocking private, static, and final methods.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 20
};
