// AUTO-GENERATED file — company-wise interview data.
// Source: TCS interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "tcs",
  "name": "TCS",
  "interviews": [
    {
      "name": "tcs",
      "questionCount": 32,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Can you briefly introduce yourself?",
              "answer": "",
              "code": null
            },
            {
              "question": "Can you give a brief explanation about your projects?",
              "answer": "",
              "code": null
            },
            {
              "question": "What are the common error status codes?",
              "answer": "",
              "code": null
            },
            {
              "question": "400 Bad Request: The server could not understand the request due to invalid syntax.",
              "answer": "",
              "code": null
            },
            {
              "question": "401 Unauthorized: The client must authenticate itself to get the requested response.",
              "answer": "",
              "code": null
            },
            {
              "question": "403 Forbidden: The client does not have access rights to the content.",
              "answer": "",
              "code": null
            },
            {
              "question": "404 Not Found: The server can not find the requested resource.",
              "answer": "",
              "code": null
            },
            {
              "question": "500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.",
              "answer": "",
              "code": null
            },
            {
              "question": "What are the new features in Java 8?",
              "answer": "",
              "code": null
            },
            {
              "question": "Lambda Expressions: Introduce a new syntax and way to pass behavior as a parameter.",
              "answer": "",
              "code": null
            },
            {
              "question": "Functional Interfaces: Interfaces with a single abstract method.",
              "answer": "",
              "code": null
            },
            {
              "question": "Stream API: For processing sequences of elements.",
              "answer": "",
              "code": null
            },
            {
              "question": "Optional: A container object which may or may not contain a value.",
              "answer": "",
              "code": null
            },
            {
              "question": "New Date and Time API: For improved date and time manipulation.",
              "answer": "",
              "code": null
            },
            {
              "question": "Default Methods: Allow methods in interfaces to have implementations.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is the String pool in Java?",
              "answer": "The String pool is a special storage area in the Java heap where String literals are stored. It helps in saving memory and improving performance by reusing instances of String literals.",
              "code": null
            },
            {
              "question": "What is a marker interface and what are some inbuilt marker interfaces in Java?",
              "answer": "A marker interface is an interface with no methods or fields, used to signal to the JVM or compiler some special behavior. Examples include:",
              "code": null
            },
            {
              "question": "Serializable: Indicates that a class can be serialized.",
              "answer": "",
              "code": null
            },
            {
              "question": "Cloneable: Indicates that a class can be cloned.",
              "answer": "",
              "code": null
            },
            {
              "question": "Remote: Indicates that a class can be used in RMI (Remote Method Invocation).",
              "answer": "",
              "code": null
            },
            {
              "question": "What is an HTTP POST method?",
              "answer": "The HTTP POST method is used to send data to the server to create a resource. The data sent to the server with POST is stored in the request body of the HTTP request.",
              "code": null
            },
            {
              "question": "What is the difference between POST and GET methods?",
              "answer": "",
              "code": null
            },
            {
              "question": "GET: Requests data from a specified resource, and the data is sent in the URL.",
              "answer": "",
              "code": null
            },
            {
              "question": "POST: Submits data to be processed to a specified resource, and the data is sent in the request body.",
              "answer": "",
              "code": null
            },
            {
              "question": "Can you use a try block without a catch block?",
              "answer": "Yes, a try block can be used without a catch block if it is followed by a finally block. The finally block will execute regardless of whether an exception occurs or not.",
              "code": null
            },
            {
              "question": "How do you use try with multiple catch blocks?",
              "answer": "This allows handling different types of exceptions separately.",
              "code": {
                "language": "java",
                "content": "try {\n    // code that may throw exceptions\n} catch (IOException e) {\n    // handle IOException\n} catch (SQLException e) {\n    // handle SQLException\n} finally {\n    // cleanup code\n}"
              }
            },
            {
              "question": "What is try with resources?",
              "answer": "Try with resources is a feature in Java that allows you to declare resources to be closed automatically after the try block. It is used for managing resources such as streams, files, etc.",
              "code": {
                "language": "java",
                "content": "try (BufferedReader br = new BufferedReader(new FileReader(\"file.txt\"))) {\n    // use br\n} catch (IOException e) {\n    // handle IOException\n}"
              }
            },
            {
              "question": "How do you connect multiple databases in Spring Boot?",
              "answer": "You can configure multiple data sources in Spring Boot by defining multiple DataSource beans and using @Primary to specify the default data source. You also need to configure multiple EntityManagerFactory and TransactionManager beans for different data sources.",
              "code": null
            },
            {
              "question": "What is the difference between 400 and 403 status codes?",
              "answer": "",
              "code": null
            },
            {
              "question": "400 Bad Request: Indicates that the server cannot process the request due to client error (e.g., malformed request syntax).",
              "answer": "",
              "code": null
            },
            {
              "question": "403 Forbidden: Indicates that the client’s request is valid, but the server is refusing action. The client does not have the necessary permissions.",
              "answer": "",
              "code": null
            },
            {
              "question": "How do you create a singleton class in Java?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public class Singleton {\n    private static Singleton instance;\n\n    private Singleton() {\n        // private constructor\n    }\n\n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 32
};
