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
              "question": "Brief about the project.",
              "answer": "The project is a real-time banking application designed to handle customer transactions and registration. It includes functionalities such as account management, transaction processing, and secure data handling using a microservices architecture and deployed on Docker.",
              "code": null
            },
            {
              "question": "Steps to deploy microservices to Docker.",
              "answer": "- Dockerize each microservice by creating a Dockerfile\n- Build Docker images using the docker build command\n- Run containers using docker run, specifying network configurations if needed\n- Configure networking with Docker Compose or custom networks\n- Monitor and scale using Docker commands or orchestration tools",
              "code": {
                "language": "dockerfile",
                "content": "# Dockerfile\nFROM openjdk:17\nCOPY target/app.jar app.jar\nENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]\n\n# Build image\ndocker build -t myapp:latest .\n\n# Run container\ndocker run -p 8080:8080 myapp:latest"
              }
            },
            {
              "question": "Write a SQL query to retrieve first name, last name, age from the customer table, and item, amount from the item table where age is greater than 25.",
              "answer": "Join the customer and item tables on customer_id, and filter by age > 25.",
              "code": {
                "language": "sql",
                "content": "SELECT c.first_name, c.last_name, c.age, i.item, i.amount\nFROM customer c\nJOIN item i ON c.customer_id = i.customer_id\nWHERE c.age > 25;"
              }
            },
            {
              "question": "Explain Actuator in Spring Boot.",
              "answer": "Actuator provides production-ready features in Spring Boot, such as monitoring and managing applications via endpoints like health, metrics, and environment information, making it easier to maintain and troubleshoot services.",
              "code": {
                "language": "properties",
                "content": "management.endpoints.web.exposure.include=health,info,metrics\nmanagement.endpoint.health.show-details=always"
              }
            },
            {
              "question": "How do you expose REST API call endpoints?",
              "answer": "Expose endpoints by annotating controller methods with @GetMapping, @PostMapping, @PutMapping, @DeleteMapping, and defining URI paths in Spring Boot applications.",
              "code": {
                "language": "java",
                "content": "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @GetMapping(\"/{id}\")\n    public User getUser(@PathVariable Long id) { }\n    @PostMapping\n    public User createUser(@RequestBody User user) { }\n}"
              }
            },
            {
              "question": "How do you document request and response options using Swagger, and how to convert to YAML?",
              "answer": "Use Swagger annotations in code (@ApiOperation, @ApiResponse) to document API endpoints. Convert the generated Swagger JSON documentation to YAML using Swagger Editor or online converters.",
              "code": {
                "language": "java",
                "content": "@Operation(summary = \"Get user by ID\")\n@ApiResponses(value = {\n    @ApiResponse(responseCode = \"200\", description = \"User found\"),\n    @ApiResponse(responseCode = \"404\", description = \"User not found\")\n})\n@GetMapping(\"/{id}\")\npublic User getUser(@PathVariable Long id) { }"
              }
            },
            {
              "question": "What are Servlet and JSP?",
              "answer": "Servlet: A Java class that handles HTTP requests and generates dynamic web content.\nJSP (JavaServer Pages): A technology that allows embedding Java code into HTML to create dynamic web pages, simplifying web development by separating business logic from presentation.",
              "code": {
                "language": "java",
                "content": "// Servlet\n@WebServlet(\"/hello\")\npublic class HelloServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest request, HttpServletResponse response) {\n        response.getWriter().println(\"Hello\");\n    }\n}\n\n// JSP\n<%@ page language=\"java\" contentType=\"text/html\" %>\n<html><body>Hello World</body></html>"
              }
            },
            {
              "question": "What are implicit objects in JSP?",
              "answer": "Implicit objects are pre-defined objects available in JSP for accessing various functionalities like request, response, session, application, out, and more, without explicit declaration.",
              "code": {
                "language": "jsp",
                "content": "<%\n    // request, response, session, out are implicit objects\n    out.println(request.getParameter(\"name\"));\n    session.setAttribute(\"user\", \"John\");\n%>"
              }
            },
            {
              "question": "Describe Java Streams and Lambda functions.",
              "answer": "Streams: A sequence of elements supporting functional-style operations to process collections, like filtering and mapping.\nLambda Functions: Anonymous functions used to implement functional interfaces, enabling concise and readable code, especially in stream operations.",
              "code": {
                "language": "java",
                "content": "List<String> names = Arrays.asList(\"John\", \"Jane\", \"Jack\");\nnames.stream()\n    .filter(name -> name.startsWith(\"J\"))\n    .map(String::toUpperCase)\n    .forEach(System.out::println);"
              }
            },
            {
              "question": "What are the steps to establish a JDBC connection?",
              "answer": "- Load the JDBC driver using Class.forName()\n- Establish a connection using DriverManager.getConnection()\n- Create a statement object using connection.createStatement()\n- Execute SQL queries with statement.executeQuery() or executeUpdate()\n- Close the connection using connection.close()",
              "code": {
                "language": "java",
                "content": "Class.forName(\"com.mysql.jdbc.Driver\");\nConnection conn = DriverManager.getConnection(url, user, password);\nStatement stmt = conn.createStatement();\nResultSet rs = stmt.executeQuery(\"SELECT * FROM users\");\nconn.close();"
              }
            },
            {
              "question": "Difference between StringBuffer and StringBuilder.",
              "answer": "StringBuffer: Synchronized and thread-safe but slower due to overhead.\nStringBuilder: Non-synchronized, faster, and preferable in single-threaded environments for string manipulation.",
              "code": {
                "language": "java",
                "content": "// Thread-safe but slower\nStringBuffer sb = new StringBuffer(\"Hello\");\nsb.append(\" World\");\n\n// Faster but not thread-safe\nStringBuilder sb2 = new StringBuilder(\"Hello\");\nsb2.append(\" World\");"
              }
            },
            {
              "question": "Create two lists - find common elements and unique elements using Streams.",
              "answer": "Use filter with contains for common elements. Use concat and distinct for unique elements.",
              "code": {
                "language": "java",
                "content": "List<String> list1 = Arrays.asList(\"java\", \"aws\", \"oracle\", \"python\");\nList<String> list2 = Arrays.asList(\"java\", \"oracle\", \"jquery\");\n\n// Common elements\nList<String> common = list1.stream()\n    .filter(list2::contains)\n    .collect(Collectors.toList());\n\n// Unique elements\nList<String> unique = Stream.concat(list1.stream(), list2.stream())\n    .distinct()\n    .filter(e -> !(list1.contains(e) && list2.contains(e)))\n    .collect(Collectors.toList());\n\nSystem.out.println(\"Common: \" + common); // [java, oracle]\nSystem.out.println(\"Unique: \" + unique); // [aws, python, jquery]"
              }
            },
            {
              "question": "Which mechanism did you use to develop the project?",
              "answer": "The project was developed using a microservices architecture with Spring Boot for creating RESTful services, Docker for containerization, and a CI/CD pipeline for automated deployments.",
              "code": null
            }
          ]
        }
      ]
    }
  ]
};
