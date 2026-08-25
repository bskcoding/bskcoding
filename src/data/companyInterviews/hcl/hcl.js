// AUTO-GENERATED file — company-wise interview data.
// Source: HCL interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "hcl",
  "name": "HCL",
  "interviews": [
    {
      "name": "hcl",
      "questionCount": 16,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "What are the main features introduced in Java 8?",
              "answer": "- Lambda Expressions\n- Functional Interfaces\n- Streams API\n- Default Methods in Interfaces\n- Optional Class\n- New Date and Time API (java.time)\n- Nashorn JavaScript Engine\n- Method References",
              "code": null
            },
            {
              "question": "What are the key differences between an interface and an abstract class in Java?",
              "answer": "- Interfaces can only have abstract methods (until Java 8, which introduced default and static methods), while abstract classes can have both abstract and concrete methods.\n- A class can implement multiple interfaces but can inherit from only one abstract class.\n- Interfaces cannot have instance variables, while abstract classes can.\n- Interfaces provide a form of multiple inheritance; abstract classes provide a form of single inheritance.",
              "code": null
            },
            {
              "question": "How do you implement Executor Services in Java?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\n\npublic class ExecutorServiceExample {\n    public static void main(String[] args) {\n        ExecutorService executor = Executors.newFixedThreadPool(5);\n\n        for (int i = 0; i < 10; i++) {\n            Runnable worker = new WorkerThread(\"\" + i);\n            executor.execute(worker);\n        }\n        executor.shutdown();\n        while (!executor.isTerminated()) {\n        }\n        System.out.println(\"Finished all threads\");\n    }\n}\n\nclass WorkerThread implements Runnable {\n    private String command;\n\n    public WorkerThread(String s) {\n        this.command = s;\n    }\n\n    @Override\n    public void run() {\n        System.out.println(Thread.currentThread().getName() + \" Start. Command = \" + command);\n        processCommand();\n        System.out.println(Thread.currentThread().getName() + \" End.\");\n    }\n\n    private void processCommand() {\n        try {\n            Thread.sleep(5000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n}"
              }
            },
            {
              "question": "Which databases have you used in your projects, and what was your experience with them?",
              "answer": "MySQL: Used for web applications; strong support for transactions and data integrity.\nPostgreSQL: Preferred for complex queries and large datasets; excellent support for JSON data types and extensions.\nMongoDB: Utilized for handling unstructured data and fast prototyping; great for horizontal scaling.\nOracle: Employed in enterprise-level applications requiring robust security and advanced features.",
              "code": null
            },
            {
              "question": "How can you declare and use functional programming constructs in Java?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "// Lambda Expression\nList<String> names = Arrays.asList(\"John\", \"Jane\", \"Jack\");\nnames.forEach(name -> System.out.println(name));\n\n// Functional Interface Example\n@FunctionalInterface\ninterface MathOperation {\n    int operation(int a, int b);\n}\n\nMathOperation addition = (a, b) -> a + b;\nSystem.out.println(\"10 + 5 = \" + addition.operation(10, 5));"
              }
            },
            {
              "question": "What are the differences between @RestController and @Controller in Spring Boot?",
              "answer": "- @RestController is a combination of @Controller and @ResponseBody. It automatically serializes return objects into JSON or XML and writes them into the HTTP response.\n- @Controller is used to mark classes as Spring MVC controllers. Methods in these classes typically return view names and are resolved by view resolvers.",
              "code": null
            },
            {
              "question": "How do you schedule tasks in Spring Boot?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import org.springframework.scheduling.annotation.Scheduled;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class ScheduledTasks {\n\n    @Scheduled(fixedRate = 5000)\n    public void reportCurrentTime() {\n        System.out.println(\"The time is now \" + new Date());\n    }\n}"
              }
            },
            {
              "question": "How is Jenkins integrated with Spring Boot? What dependencies or configuration files are needed?",
              "answer": "Jenkinsfile\nDependencies\n- Jenkins server\n- Maven or Gradle for build automation\n- Docker for containerization (if deploying with Docker)",
              "code": {
                "language": "groovy",
                "content": "pipeline {\n    agent any\n    stages {\n        stage('Build') {\n            steps {\n                sh './mvnw clean package'\n            }\n        }\n        stage('Test') {\n            steps {\n                sh './mvnw test'\n            }\n        }\n        stage('Deploy') {\n            steps {\n                sh 'docker build -t spring-boot-app .'\n                sh 'docker run -d -p 8080:8080 spring-boot-app'\n            }\n        }\n    }\n}"
              }
            },
            {
              "question": "What is the difference between HashMap and ConcurrentHashMap in Java?",
              "answer": "- HashMap is not synchronized and is not thread-safe.\n- ConcurrentHashMap is thread-safe and allows concurrent access to its segments.",
              "code": null
            },
            {
              "question": "What are the key classes and interfaces in the java.util.concurrent package?",
              "answer": "Key Classes: ExecutorService, ScheduledExecutorService, Future, CountDownLatch, CyclicBarrier, Semaphore, ConcurrentHashMap, CopyOnWriteArrayList\nKey Interfaces: Executor, Callable, Future, BlockingQueue",
              "code": null
            },
            {
              "question": "Describe the collections framework in Java.",
              "answer": "Core Interfaces: Collection, List, Set, Queue, Map\nImplementations: ArrayList, LinkedList, HashSet, TreeSet, PriorityQueue, HashMap, TreeMap\nUtilities: Collections, Arrays",
              "code": null
            },
            {
              "question": "How do you use profiles in Spring Boot?",
              "answer": "",
              "code": {
                "language": "yaml",
                "content": "# application.yml\nspring:\n  profiles:\n    active: dev\n---\n# application-dev.yml\nserver:\n  port: 8081\n---\n# application-prod.yml\nserver:\n  port: 8082"
              }
            },
            {
              "question": "If both application.properties and application.yaml are present in a Spring Boot application, which one takes precedence?",
              "answer": "- application.properties takes precedence over application.yaml.",
              "code": null
            },
            {
              "question": "Explain the @Autowired annotation in Spring.",
              "answer": "- @Autowired is used for automatic dependency injection. Spring's dependency injection mechanism uses this annotation to resolve and inject collaborating beans into the desired bean.",
              "code": null
            },
            {
              "question": "Using a lambda expression, write a Java program to sum the elements of an array.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\npublic class SumArray {\npublic static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n\n    // Using a lambda expression with Stream API\n    int sum = Arrays.stream(array)\n                     .reduce(0, (a, b) -> a + b);\n\n    System.out.println(\"Sum: \" + sum);\n  }\n}"
              }
            },
            {
              "question": "Write a Java program to generate all permutations of an array using lambda expressions.",
              "answer": "Etc...",
              "code": {
                "language": "java",
                "content": "import java.util.ArrayList;\nimport java.util.List;\nimport java.util.stream.Collectors;\nimport java.util.stream.IntStream;\n\npublic class Permutations {\n    public static void main(String[] args) {\n        int[] array = {1, 2, 3};\n        List<List<Integer>> result = permute(array);\n        result.forEach(System.out::println);\n    }\n\n    public static List<List<Integer>> permute(int[] nums) {\n        return permute(IntStream.range(0, nums.length).boxed().collect(Collectors.toList()), nums);\n    }\n\n    private static List<List<Integer>> permute(List<Integer> indices, int[] nums) {\n        if (indices.isEmpty()) {\n            List<Integer> perm = new ArrayList<>();\n            for (int num : nums) {\n                perm.add(num);\n            }\n            return List.of(perm);\n        }\n\n        return indices.stream()\n            .flatMap(i -> {\n                List<Integer> remaining = new ArrayList<>(indices);\n                remaining.remove(Integer.valueOf(i));\n                return permute(remaining, swap(nums, i)).stream();\n            })\n            .collect(Collectors.toList());\n    }\n\n    private static int[] swap(int[] array, int i) {\n        int[] newArray = array.clone();\n        int temp = newArray[i];\n        newArray[i] = newArray[0];\n        newArray[0] = temp;\n        return newArray;\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 16
};
