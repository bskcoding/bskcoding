// AUTO-GENERATED file — company-wise interview data.
// Source: FSS interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "fss",
  "name": "FSS",
  "interviews": [
    {
      "name": "FSS",
      "questionCount": 13,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Brief about the project:",
              "answer": "- The project is a real-time banking application designed to handle customer transactions and registration. It includes functionalities such as account management, transaction processing, and secure data handling using microservices architecture and deployed on Docker.",
              "code": null
            },
            {
              "question": "Steps to deploy microservices to Docker:",
              "answer": "- 1. Dockerize each microservice by creating a Dockerfile.\n- 2. Build Docker images using the docker build command.\n- 3. Run containers using docker run, specifying network configurations if needed.\n- 4. Configure networking (optional) with Docker Compose or custom networks.\n- 5. Monitor and scale using Docker commands or orchestration tools.",
              "code": null
            },
            {
              "question": "Write a SQL query to retrieve first name, last name, age from the customer table, and item, amount from the item table where age is greater than 25:",
              "answer": "",
              "code": {
                "language": "sql",
                "content": "SELECT c.first_name, c.last_name, c.age, i.item, i.amount\nFROM customer c\nJOIN item i ON c.customer_id = i.customer_id\nWHERE c.age > 25;"
              }
            },
            {
              "question": "Explain Actuator in Spring Boot:",
              "answer": "- Actuator provides production-ready features in Spring Boot, such as monitoring and managing applications via endpoints like health, metrics, and environment information, making it easier to maintain and troubleshoot services.",
              "code": null
            },
            {
              "question": "What are Servlet and JSP?",
              "answer": "Servlet: A Java class that handles HTTP requests and generates dynamic web content.\nJSP (JavaServer Pages): A technology that allows embedding Java code into HTML to create dynamic web pages, simplifying web development by separating business logic from presentation.",
              "code": null
            },
            {
              "question": "Describe Java Streams and Lambda functions:",
              "answer": "Streams: A sequence of elements supporting functional-style operations to process collections, like filtering and mapping.\nLambda Functions: Anonymous functions used to implement functional interfaces, enabling concise and readable code, especially in stream operations.",
              "code": null
            },
            {
              "question": "What are the steps to establish a JDBC connection?",
              "answer": "- 1. Load the JDBC driver using Class.forName().\n- 2. Establish a connection using DriverManager.getConnection().\n- 3. Create a statement object using connection.createStatement().\n- 4. Execute SQL queries with statement.executeQuery() or executeUpdate().\n- 5. Close the connection using connection.close().",
              "code": null
            },
            {
              "question": "Difference between StringBuffer and StringBuilder:",
              "answer": "StringBuffer: Synchronized and thread-safe but slower due to overhead.\nStringBuilder: Non-synchronized, faster, and preferable in single-threaded environments for string manipulation.",
              "code": null
            },
            {
              "question": "How to document request and response options using Swagger, and how to convert to YAML?",
              "answer": "- Swagger annotations in code (e.g., @ApiOperation, @ApiResponse) document API endpoints. Convert the generated Swagger JSON documentation to YAML using tools like Swagger Editor or online converters.",
              "code": null
            },
            {
              "question": "How do you expose REST API call endpoints?",
              "answer": "- Expose endpoints by annotating controller methods with @GetMapping, @PostMapping, etc., and defining the URI paths in Spring Boot applications.",
              "code": null
            },
            {
              "question": "Which mechanism did you use to develop the project?",
              "answer": "- The project was developed using a microservices architecture with Spring Boot for creating RESTful services, Docker for containerization, and a CI/CD pipeline for automated deployments.",
              "code": null
            },
            {
              "question": "What are implicit objects in JSP?",
              "answer": "- Implicit objects are pre-defined objects available in JSP for accessing various functionalities like request, response, session, application, out, and more, without explicit declaration.",
              "code": null
            },
            {
              "question": "Create two lists: List 1 (java, aws, oracle, python), List 2 (java, oracle, jquery). Find common elements and unique elements using Streams in Java code:",
              "answer": "",
              "code": {
                "language": "java",
                "content": "List<String> list1 = Arrays.asList(\"java\", \"aws\", \"oracle\", \"python\");\nList<String> list2 = Arrays.asList(\"java\", \"oracle\", \"jquery\");\n\n// Common elements\nList<String> common = list1.stream()\n    .filter(list2::contains)\n    .collect(Collectors.toList());\n\n// Unique elements\nList<String> unique = Stream.concat(list1.stream(), list2.stream())\n    .distinct()\n    .filter(e -> !(list1.contains(e) && list2.contains(e)))\n    .collect(Collectors.toList());"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 13
};
