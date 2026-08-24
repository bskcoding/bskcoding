// AUTO-GENERATED file — company-wise interview data.
// Source: MindGate interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "mindgate",
  "name": "MindGate",
  "interviews": [
    {
      "name": "MindGate",
      "questionCount": 14,
      "rounds": [
        {
          "name": "L1 Interview",
          "questions": [
            {
              "question": "Self-introduction based on your project.",
              "answer": "- \"I am ______ with 3 years of experience in Java and ReactJS. In my current project, I developed a customer registration service using ReactJS and Spring Boot, integrating with multiple microservices to ensure secure and efficient data handling.\"",
              "code": null
            },
            {
              "question": "Explain microservices architecture.",
              "answer": "- \"Microservices architecture divides an application into small, independent services, each responsible for a specific business functionality. These services communicate over a network, allowing for decentralized development, scaling, and deployment.\"",
              "code": null
            },
            {
              "question": "How do microservices communicate internally?",
              "answer": "- \"Microservices communicate internally using protocols like HTTP/REST, gRPC, or messaging systems like Kafka. Service discovery tools and load balancers help manage requests and ensure service availability.\"",
              "code": null
            },
            {
              "question": "How does a JWT token work internally?",
              "answer": "- \"A JWT token encodes user information and is signed with a secret key. The token is sent to the client and included in subsequent requests. The server verifies the token's signature to authenticate the user.\"",
              "code": null
            },
            {
              "question": "Explain the Collection hierarchy in Java.",
              "answer": "- \"The Collection hierarchy starts with Iterable, followed by Collection, branching into List, Set, and Queue. Map is a separate interface for key-value pairs, not extending Collection.\"",
              "code": null
            },
            {
              "question": "If a List is declared as final, can we modify it?",
              "answer": "- \"Yes, a final List can have its contents modified, but its reference cannot be reassigned to another List object.\"",
              "code": null
            },
            {
              "question": "Why does a Set not allow duplicates?",
              "answer": "- \"A Set does not allow duplicates because it uses the equals() and hashCode() methods to ensure all elements are unique.\"",
              "code": null
            },
            {
              "question": "What is the difference between fail-safe and fail-fast iterators?",
              "answer": "- \"Fail-fast iterators throw a ConcurrentModificationException if the collection is modified during iteration. Fail-safe iterators work on a copy of the collection, allowing safe iteration.\"",
              "code": null
            },
            {
              "question": "Explain ConcurrentHashMap.",
              "answer": "- \"ConcurrentHashMap is a thread-safe implementation of Map that allows concurrent read and write operations by dividing the map into segments, reducing contention.\"",
              "code": null
            },
            {
              "question": "What happens when you use HashMap in a multithreaded environment?",
              "answer": "- \"Using HashMap in a multithreaded environment can lead to data corruption and unpredictable results due to concurrent modifications. ConcurrentHashMap should be used instead.\"",
              "code": null
            },
            {
              "question": "Describe the Java thread lifecycle.",
              "answer": "- \"The Java thread lifecycle includes New, Runnable, Blocked, Waiting, Timed Waiting, and Terminated states. A thread transitions through these states based on its execution and synchronization.\"",
              "code": null
            },
            {
              "question": "Write a custom ArrayList that does not allow duplicates.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.ArrayList;\n\npublic class UniqueArrayList<E> extends ArrayList<E> {\n    @Override\n    public boolean add(E e) {\n        if (!contains(e)) {\n            return super.add(e);\n        }\n        return false;\n    }\n}"
              }
            },
            {
              "question": "How do you find the occurrences of words using HashMap in Java?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class WordCount {\n    public static void main(String[] args) {\n        String text = \"apple apple banana apple orange banana\";\n        Map<String, Integer> wordCount = new HashMap<>();\n        for (String word : text.split(\" \")) {\n            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);\n        }\n        for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {\n            System.out.println(entry.getKey() + \": \" + entry.getValue());\n        }\n    }\n}"
              }
            },
            {
              "question": "Write an SQL query to print account names based on the currency name.",
              "answer": "",
              "code": {
                "language": "sql",
                "content": "SELECT A.ACCNAME\nFROM ACCOUNT A\nJOIN COUNTRY C ON A.COUNTRYID = C.COUNTRYID\nJOIN CURRENCY CUR ON C.CURRID = CUR.CURRID\nWHERE CUR.CURRNAME = 'currency_name';"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "MindGate1",
      "questionCount": 25,
      "rounds": [
        {
          "name": "L1 MindGate",
          "questions": [
            {
              "question": "How to migrate HTML & JavaScript code to ReactJS?",
              "answer": "To migrate HTML and JavaScript code to ReactJS, follow these steps:\nSet Up React Environment: Initialize a new React project using Create React App or any other setup tool.\nComponent Structure: Identify distinct sections of your HTML and JavaScript that can be transformed into React components.\nConvert HTML to JSX: Replace HTML with JSX in your React components. Ensure that you adjust syntax issues like class attributes (class to className), inline styles, and self-closing tags.\nState Management: Convert JavaScript logic related to state and events into React state and event handlers.\nRefactor Functions: Transform your JavaScript functions into React component methods or hooks.\nRouting: If your application has multiple pages, set up React Router to handle navigation.",
              "code": null
            },
            {
              "question": "How to consume already shared messages in Kafka?",
              "answer": "To consume messages that have already been shared in Kafka:\nSet Consumer Group: Configure your Kafka consumer to be part of a consumer group. Kafka maintains offsets per consumer group.\nSeek to Offset: Use the seek method on your Kafka consumer to set the offset to the position from which you want to start consuming messages. You can seek to the beginning of the topic or a specific offset.\nConfigure Consumer Properties: Ensure your consumer properties are set correctly, such as auto.offset.reset (e.g., earliest to read from the beginning).",
              "code": null
            },
            {
              "question": "What are your daily roles and responsibilities?",
              "answer": "This answer will vary depending on the role, but generally:\nDevelopment: Writing and maintaining code for various features and fixing bugs.\nCollaboration: Working with cross-functional teams including designers, product managers, and other developers.\nCode Reviews: Participating in code reviews to ensure code quality and adherence to best practices.\nTesting: Writing and running unit tests and integration tests.\nDeployment: Assisting with the deployment of applications and ensuring smooth production operations.",
              "code": null
            },
            {
              "question": "What is the difference between @RestController and @Controller in Spring?",
              "answer": "@Controller: Used in Spring MVC to define a controller class. It is used for building web applications and returns views (JSP, Thymeleaf).\n@RestController: A specialized version of @Controller used for RESTful web services. It combines @Controller and @ResponseBody, meaning it returns data (usually JSON or XML) directly rather than rendering a view.",
              "code": null
            },
            {
              "question": "What is the difference between method overloading and method overriding in Java?",
              "answer": "Method Overloading: Occurs when multiple methods in a class have the same name but different parameters (different type or number). It is resolved at compile-time.\nMethod Overriding: Occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. It is resolved at runtime and must have the same name, return type, and parameters.",
              "code": null
            },
            {
              "question": "What is a thread in Java?",
              "answer": "A thread in Java is a lightweight subprocess that runs concurrently with other threads. Threads allow a program to perform multiple tasks simultaneously. Each thread has its own execution path but shares the same process resources.",
              "code": null
            },
            {
              "question": "How do you handle exceptions in a Runnable since it cannot throw checked exceptions?",
              "answer": "Since Runnable does not allow throwing checked exceptions, handle exceptions within the run method using a try-catch block. Log or manage the exception as needed:",
              "code": {
                "language": "java",
                "content": "public class MyRunnable implements Runnable {\n    @Override\n    public void run() {\n        try {\n            // Code that might throw an exception\n        } catch (Exception e) {\n            // Handle the exception\n            e.printStackTrace();\n        }\n    }\n}"
              }
            },
            {
              "question": "What are the differences between Callable and Runnable in Java?",
              "answer": "Runnable: Represents a task that can be executed by a thread. It does not return a result and cannot throw checked exceptions.\nCallable: Similar to Runnable, but it can return a result and can throw checked exceptions. It has a call method that returns a value and may throw exceptions.",
              "code": null
            },
            {
              "question": "What is the difference between wait() and sleep() methods in Java?",
              "answer": "wait(): Called on an object’s monitor to release the lock and wait until notified. It is used for inter-thread communication and requires synchronization.\nsleep(): A static method of the Thread class that pauses the thread for a specified time but does not release the lock on any object.",
              "code": null
            },
            {
              "question": "Can you explain the thread life cycle in Java?",
              "answer": "The thread life cycle consists of:\nNew: The thread is created but not yet started.\nRunnable: The thread is ready to run and waiting for CPU time.\nBlocked: The thread is waiting to acquire a lock or resource.\nWaiting: The thread is waiting indefinitely for another thread to perform a particular action.\nTimed Waiting: The thread is waiting for a specified period.\nTerminated: The thread has completed execution or terminated.",
              "code": null
            },
            {
              "question": "What is a thread pool in Java and how does it work?",
              "answer": "A thread pool is a collection of reusable threads that are used to perform multiple tasks. It reduces the overhead of thread creation and destruction by reusing existing threads. The ExecutorService interface in Java provides a way to manage thread pools, using classes like ThreadPoolExecutor and ScheduledThreadPoolExecutor.",
              "code": null
            },
            {
              "question": "What are the differences between Spring MVC and Spring Boot?",
              "answer": "Spring MVC: A framework for building web applications using the Model-View-Controller design pattern. Requires configuration for setting up the application.\nSpring Boot: A framework that simplifies the setup and development of Spring applications. It provides auto-configuration, embedded servers, and a convention-over-configuration approach, allowing for rapid development.",
              "code": null
            },
            {
              "question": "How do you join two tables in SQL? Provide an example query.",
              "answer": "To join two tables in SQL, you use the JOIN clause. For example, to join employees and departments tables:",
              "code": {
                "language": "sql",
                "content": "SELECT e.employee_id, e.name, d.department_name\nFROM employees e\nJOIN departments d ON e.department_id = d.department_id;"
              }
            },
            {
              "question": "Write a Java code snippet to find the top element in a mountain array.",
              "answer": "Input: [1, 3, 8, 12, 4, 2]\nOutput: 12",
              "code": {
                "language": "java",
                "content": "public class MountainArrayTop {\n\n    public static int findTopElement(int[] arr) {\n        int left = 0, right = arr.length - 1;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {\n                return arr[mid];\n            } else if (arr[mid] > arr[mid - 1]) {\n                left = mid + 1;\n            } else {\n                right = mid - 1;\n            }\n        }\n        return -1; // should not reach here if input is a valid mountain array\n    }\n\n    public static void main(String[] args) {\n        int[] mountainArray = {1, 3, 8, 12, 4, 2};\n        System.out.println(\"Top element: \" + findTopElement(mountainArray));\n    }\n}"
              }
            },
            {
              "question": "Which technologies have you worked with, and how have you utilized them in your projects?",
              "answer": "This question is specific to your experience and will vary. Here’s an example structure:\nReactJS: Used for building dynamic and responsive user interfaces.\nSpring Boot: Utilized for creating RESTful APIs and microservices.\nKafka: Implemented for handling real-time data streams and message processing.\nDocker/Kubernetes: Deployed and managed containerized applications for scalable and consistent environments.",
              "code": null
            }
          ]
        },
        {
          "name": "L2 MindGate",
          "questions": [
            {
              "question": "Can you describe a project you have worked on?",
              "answer": "- Provide an overview of the project, including its objectives, technology stack, and your role.\n- Mention key features or functionalities, any challenges faced, and how they were overcome.",
              "code": null
            },
            {
              "question": "How do you scale your project?",
              "answer": "- Describe the strategies you use for scaling, such as load balancing, database optimization, caching, or microservices architecture.\n- Explain how you ensure the application can handle increased traffic or data volume.",
              "code": null
            },
            {
              "question": "How do you analyze code for performance and quality?",
              "answer": "- Mention tools and techniques used, such as code reviews, static analysis tools, profiling, and performance testing.\n- Explain how you identify and address bottlenecks or issues in the code.",
              "code": null
            },
            {
              "question": "Which version of Spring Boot and Java have you used in your project?",
              "answer": "- Specify the versions of Spring Boot and Java used.\n- Explain why you chose these versions and how they fit with your project requirements.",
              "code": null
            },
            {
              "question": "Why did you choose this company?",
              "answer": "- Discuss what attracted you to the company, such as its reputation, culture, projects, or growth opportunities.\n- Mention how your goals and skills align with the company’s mission and values.",
              "code": null
            },
            {
              "question": "Have you used threads in your project? If so, how?",
              "answer": "- Provide examples of how you used threads, such as for parallel processing, improving performance, or handling concurrent tasks.\n- Describe any challenges related to thread management and how you addressed them.",
              "code": null
            },
            {
              "question": "Why do you use ExecutorService in your projects?",
              "answer": "- Explain the benefits of using ExecutorService, such as managing thread pools, simplifying concurrent task execution, and improving resource management.\n- Discuss how it helps avoid issues related to manual thread management.",
              "code": null
            },
            {
              "question": "Is it possible to solve tasks without using ExecutorService?",
              "answer": "- Explain that while tasks can be solved without ExecutorService using raw threads, ExecutorService provides a more efficient and manageable approach.\n- Discuss the potential difficulties of manual thread management and how ExecutorService simplifies concurrency.",
              "code": null
            },
            {
              "question": "How do you ensure code quality and maintainability in your projects?",
              "answer": "- Talk about practices such as code reviews, adherence to coding standards, writing unit tests, and using design patterns.\n- Mention tools and processes that help maintain code quality over time.",
              "code": null
            },
            {
              "question": "How do you handle version control and collaboration in your projects?",
              "answer": "- Describe your version control strategy, such as branching, merging, and pull requests.\n- Explain how you use collaboration tools and practices to work effectively with your team.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 39
};
