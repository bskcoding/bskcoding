// AUTO-GENERATED file — company-wise interview data.
// Source: TCS interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "tcs",
  "name": "TCS",
  "interviews": [
    {
      "name": "TCS",
      "questionCount": 20,
      "rounds": [
        {
          "name": "Technical Interview",
          "questions": [
            {
              "question": "Can you briefly introduce yourself?",
              "answer": "I am [Your Name] with 3 years of experience as a Java Full Stack Developer. I specialize in Spring Boot, React, and Microservices. I have worked on banking applications, customer registration systems, and real-time transaction processing. I am passionate about building scalable applications and learning new technologies.",
              "code": null
            },
            {
              "question": "Can you give a brief explanation about your projects?",
              "answer": "I worked on a banking application with microservices architecture. The project handled customer registration, transaction processing, and account management. Used Spring Boot, React, Kafka, and MySQL. My role included API development, database design, and frontend integration.",
              "code": null
            },
            {
              "question": "What are the common error status codes?",
              "answer": "400 Bad Request: Invalid syntax. 401 Unauthorized: Authentication required. 403 Forbidden: No access rights. 404 Not Found: Resource not found. 500 Internal Server Error: Server error.",
              "code": null
            },
            {
              "question": "What are the new features in Java 8?",
              "answer": "Lambda Expressions, Functional Interfaces, Stream API, Optional class, new Date and Time API, Default Methods in interfaces.",
              "code": null
            },
            {
              "question": "What is the String pool in Java?",
              "answer": "The String pool is a special storage area in the Java heap where String literals are stored. It helps in saving memory and improving performance by reusing instances of String literals.",
              "code": {
                "language": "java",
                "content": "String s1 = \"Hello\";\nString s2 = \"Hello\"; // s1 and s2 point to same object in pool"
              }
            },
            {
              "question": "What is a marker interface and what are some inbuilt marker interfaces in Java?",
              "answer": "A marker interface is an interface with no methods or fields, used to signal special behavior to JVM or compiler. Examples: Serializable, Cloneable, Remote.",
              "code": {
                "language": "java",
                "content": "public interface Serializable { } // Marker interface"
              }
            },
            {
              "question": "What is an HTTP POST method?",
              "answer": "The HTTP POST method is used to send data to the server to create a resource. The data is stored in the request body of the HTTP request.",
              "code": null
            },
            {
              "question": "What is the difference between POST and GET methods?",
              "answer": "GET: Requests data from a resource, data sent in URL. POST: Submits data to be processed, data sent in request body.",
              "code": null
            },
            {
              "question": "Can you use a try block without a catch block?",
              "answer": "Yes, a try block can be used without a catch block if it is followed by a finally block. The finally block executes regardless of whether an exception occurs or not.",
              "code": {
                "language": "java",
                "content": "try {\n    // code\n} finally {\n    // cleanup\n}"
              }
            },
            {
              "question": "How do you use try with multiple catch blocks?",
              "answer": "Use multiple catch blocks for different exception types. Specific exceptions should be caught before general exceptions.",
              "code": {
                "language": "java",
                "content": "try {\n    // code that may throw exceptions\n} catch (IOException e) {\n    // handle IOException\n} catch (SQLException e) {\n    // handle SQLException\n} finally {\n    // cleanup code\n}"
              }
            },
            {
              "question": "What is try with resources?",
              "answer": "Try with resources is a feature that allows you to declare resources to be closed automatically after the try block. Used for managing resources like streams, files.",
              "code": {
                "language": "java",
                "content": "try (BufferedReader br = new BufferedReader(new FileReader(\"file.txt\"))) {\n    // use br\n} catch (IOException e) {\n    // handle IOException\n}"
              }
            },
            {
              "question": "How do you connect multiple databases in Spring Boot?",
              "answer": "Configure multiple DataSource beans using @Primary for default. Configure multiple EntityManagerFactory and TransactionManager beans for different data sources.",
              "code": {
                "language": "java",
                "content": "@Configuration\npublic class DataSourceConfig {\n    @Bean @Primary\n    @ConfigurationProperties(\"spring.datasource1\")\n    public DataSource dataSource1() { return DataSourceBuilder.create().build(); }\n    @Bean\n    @ConfigurationProperties(\"spring.datasource2\")\n    public DataSource dataSource2() { return DataSourceBuilder.create().build(); }\n}"
              }
            },
            {
              "question": "What is the difference between 400 and 403 status codes?",
              "answer": "400 Bad Request: Server cannot process request due to client error (malformed syntax). 403 Forbidden: Request is valid but server is refusing action - client does not have necessary permissions.",
              "code": null
            },
            {
              "question": "How do you create a singleton class in Java?",
              "answer": "Create private constructor, private static instance, and public static getInstance method.",
              "code": {
                "language": "java",
                "content": "public class Singleton {\n    private static Singleton instance;\n    private Singleton() { }\n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}"
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
              "question": "Why do you want to join TCS?",
              "answer": "TCS is a global leader in IT services. I'm excited about the opportunity to work on large-scale projects, learn from industry experts, and contribute to the company's growth.",
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
              "answer": "Looking for better growth opportunities, challenging projects, and a chance to work with new technologies. TCS offers the perfect environment for professional growth.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 20
};
