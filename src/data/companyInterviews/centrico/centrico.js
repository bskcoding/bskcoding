// AUTO-GENERATED file — company-wise interview data.
// Source: Centrico interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "centrico",
  "name": "Centrico",
  "interviews": [
    {
      "name": "Centrico",
      "questionCount": 42,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Self Introduction and Project Details",
              "answer": "",
              "code": null
            },
            {
              "question": "Self Introduction and Project Details:",
              "answer": "- Briefly introduce yourself, mentioning your experience, key skills, and current role.\n- Briefly describe your current project, the technologies you are using, the version of Java and React you are using, and the testing frameworks in use.\n- Mention the version of Java (Java 8, familiar with Java 17) and React (React 16.8 or React 18).",
              "code": null
            },
            {
              "question": "JavaScript and React Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "What are ES6 features in JavaScript?",
              "answer": "- ES6 features include let and const, arrow functions, template literals, default parameters, rest and spread operators, destructuring assignment, classes, promises, modules, and enhanced object literals.",
              "code": null
            },
            {
              "question": "Difference between var and let.",
              "answer": "- var is function-scoped, while let is block-scoped. Variables declared with let are not hoisted to the top of their block, unlike var.",
              "code": null
            },
            {
              "question": "What is object cloning in JavaScript?",
              "answer": "- Object cloning is the process of creating a copy of an object with the same properties and values.",
              "code": null
            },
            {
              "question": "Why do we need to clone an object?",
              "answer": "- Cloning an object is needed to avoid mutating the original object, ensuring data integrity and avoiding side effects in the code.",
              "code": null
            },
            {
              "question": "How to clone an object in JavaScript? Provide code.",
              "answer": "",
              "code": {
                "language": "javascript",
                "content": "const original = { a: 1, b: 2 };\nconst clone = { ...original }; // Shallow copy using spread operator"
              }
            },
            {
              "question": "Write a JavaScript function to count every character in a string and display it.",
              "answer": "",
              "code": {
                "language": "javascript",
                "content": "function countCharacters(str) {\n    const charCount = {};\n    for (let char of str) {\n        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;\n    }\n    return charCount;\n}\nconsole.log(countCharacters(\"hello\"));"
              }
            },
            {
              "question": "Which version of React are you using?",
              "answer": "- I am using React 17.",
              "code": null
            },
            {
              "question": "Are you using functional components or class components?",
              "answer": "- I am primarily using functional components.",
              "code": null
            },
            {
              "question": "What is useRef in React? Explain.",
              "answer": "- useRef is a React hook that allows you to create a mutable object that persists for the lifetime of the component. It can be used to access DOM elements directly or to hold a mutable value that doesn’t trigger re-renders when changed.",
              "code": null
            },
            {
              "question": "What is a common component in ReactJS?",
              "answer": "- A common component is a reusable piece of UI that can be used across different parts of an application, like buttons, form inputs, or modal dialogs.",
              "code": null
            },
            {
              "question": "Have you used reusable components in your project, like tables?",
              "answer": "- Yes, I have created reusable components such as tables, buttons, and form inputs to maintain consistency and reduce code duplication.",
              "code": null
            },
            {
              "question": "How do you get data from an API and display it in the UI in ReactJS? How do you handle errors? (Example: employee data with id, name, salary)",
              "answer": "",
              "code": {
                "language": "javascript",
                "content": "import React, { useState, useEffect } from 'react';\nimport axios from 'axios';\n\nconst EmployeeList = () => {\n    const [employees, setEmployees] = useState([]);\n    const [error, setError] = useState(null);\n\n    useEffect(() => {\n        axios.get('/api/employees')\n            .then(response => setEmployees(response.data))\n            .catch(error => setError(error.message));\n    }, []);\n\n    if (error) {\n        return <div>Error: {error}</div>;\n    }\n\n    return (\n        <div>\n            <ul>\n                {employees.map(emp => (\n                    <li key={emp.id}>{emp.name} - ${emp.salary}</li>\n                ))}\n            </ul>\n        </div>\n    );\n};\n\nexport default EmployeeList;"
              }
            },
            {
              "question": "Are you using CSS in your project?",
              "answer": "- Yes, I am using CSS for styling the components.",
              "code": null
            },
            {
              "question": "Write code to change the color of text in a div or span when data is posted.",
              "answer": "",
              "code": {
                "language": "javascript",
                "content": "import React, { useState } from 'react';\n\nconst ChangeTextColor = () => {\n    const [color, setColor] = useState('black');\n\n    const handleSubmit = (e) => {\n        e.preventDefault();\n        setColor('blue');\n    };\n\n    return (\n        <div>\n            <form onSubmit={handleSubmit}>\n                <button type=\"submit\">Post Data</button>\n            </form>\n            <div style={{ color: color }}>This text will change color when data is posted.</div>\n        </div>\n    );\n};\n\nexport default ChangeTextColor;"
              }
            },
            {
              "question": "Java Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "Which version of Java are you using? (Java 8, familiar with Java 17)",
              "answer": "- I am using Java 8 and familiar with Java 17.",
              "code": null
            },
            {
              "question": "Write a custom exception in Java and use it.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public class CustomException extends Exception {\n    public CustomException(String message) {\n        super(message);\n    }\n}\n\npublic class TestCustomException {\n    public static void main(String[] args) {\n        try {\n            validateAge(15);\n        } catch (CustomException e) {\n            e.printStackTrace();\n        }\n    }\n\n    static void validateAge(int age) throws CustomException {\n        if (age < 18) {\n            throw new CustomException(\"Age is not valid\");\n        }\n    }\n}"
              }
            },
            {
              "question": "Implement a method in Java to check if a string is present in a list.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.List;\n\npublic class StringChecker {\n    public static boolean isStringPresent(List<String> list, String str) {\n        return list.contains(str);\n    }\n}"
              }
            },
            {
              "question": "Write Java code to remove repeated strings from a list.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.ArrayList;\nimport java.util.HashSet;\nimport java.util.List;\nimport java.util.Set;\n\npublic class RemoveDuplicates {\n    public static List<String> removeDuplicates(List<String> list) {\n        Set<String> set = new HashSet<>(list);\n        return new ArrayList<>(set);\n    }\n}"
              }
            },
            {
              "question": "How do you provide security in Spring Boot?",
              "answer": "- Security in Spring Boot is provided through Spring Security, which offers authentication, authorization, and other security features. It can be configured using Java configuration and annotations.",
              "code": null
            },
            {
              "question": "Explain how JWT token-based authentication works briefly.",
              "answer": "- JWT token-based authentication works by generating a token after a user successfully logs in. This token is then sent with each subsequent request in the Authorization header. The server validates the token to authenticate the user.",
              "code": null
            },
            {
              "question": "What is the use of the @Transactional annotation in Spring Data?",
              "answer": "- The @Transactional annotation in Spring Data is used to manage transactions declaratively. It ensures that a method runs within a transaction and manages commit or rollback based on the method’s execution.",
              "code": null
            },
            {
              "question": "Have you used threads in your project?",
              "answer": "- Yes, I have used threads in my project to handle concurrent processing tasks like processing multiple requests simultaneously.",
              "code": null
            },
            {
              "question": "How do you limit API calls in Spring Boot?",
              "answer": "- API calls in Spring Boot can be limited using rate-limiting libraries like Bucket4j or implementing custom rate-limiting logic using interceptors.",
              "code": null
            },
            {
              "question": "Have you created any custom annotations in Spring Boot?",
              "answer": "- Yes, I have created custom annotations to encapsulate repetitive logic and apply cross-cutting concerns.",
              "code": null
            },
            {
              "question": "Create a Age validation custom annotation.",
              "answer": "- Steps",
              "code": null
            },
            {
              "question": "Create the Annotation Interface",
              "answer": "",
              "code": null
            },
            {
              "question": "Create the Validator Class",
              "answer": "",
              "code": null
            },
            {
              "question": "Apply the Custom Annotation",
              "answer": "",
              "code": null
            },
            {
              "question": "Create the Annotation Interface",
              "answer": "First, create a custom annotation interface for DOB validation.",
              "code": {
                "language": "java",
                "content": "import javax.validation.Constraint;\nimport javax.validation.Payload;\nimport java.lang.annotation.Documented;\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n@Documented\n@Constraint(validatedBy = DOBValidator.class)\n@Target({ ElementType.METHOD, ElementType.FIELD })\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface ValidDOB {\n    String message() default \"Invalid Date of Birth\";\n    Class<?>[] groups() default {};\n    Class<? extends Payload>[] payload() default {};\n}"
              }
            },
            {
              "question": "Create the Validator Class",
              "answer": "Next, implement the validator class that will contain the logic for validating the DOB.",
              "code": {
                "language": "java",
                "content": "import javax.validation.ConstraintValidator;\nimport javax.validation.ConstraintValidatorContext;\nimport java.time.LocalDate;\n\npublic class DOBValidator implements ConstraintValidator<ValidDOB, LocalDate> {\n\n    @Override\n    public void initialize(ValidDOB constraintAnnotation) {\n        // Initialization code if necessary\n    }\n\n    @Override\n    public boolean isValid(LocalDate dob, ConstraintValidatorContext context) {\n        if (dob == null) {\n            return false; // or true, based on whether null is considered valid\n        }\n        // Check if the DOB is in the past\n        return dob.isBefore(LocalDate.now());\n    }\n}"
              }
            },
            {
              "question": "Have you used a logger in your Spring Boot project?",
              "answer": "- Yes, I have used SLF4J with Logback for logging in my Spring Boot project.",
              "code": null
            },
            {
              "question": "How can you see which controller API methods are running?",
              "answer": "- You can see which controller API methods are running by enabling logging for HTTP requests in Spring Boot or using tools like Actuator to monitor endpoints.",
              "code": null
            },
            {
              "question": "How do you create a Spring Boot project?",
              "answer": "- A Spring Boot project can be created using Spring Initializr, which generates a project structure with the necessary dependencies and configurations.",
              "code": null
            },
            {
              "question": "What does Spring Starter provide?",
              "answer": "- Spring Starter provides pre-configured templates for specific functionalities like web, security, JPA, etc., making it easier to set up a Spring Boot project.",
              "code": null
            },
            {
              "question": "Which dependencies do you commonly use in Spring Boot?",
              "answer": "- Common dependencies include Spring Boot Starter Web, Spring Boot Starter Data JPA, Spring Boot Starter Security, and Spring Boot Starter Test.",
              "code": null
            },
            {
              "question": "Which annotations do you use in Spring Boot?",
              "answer": "- Common annotations include @SpringBootApplication, @RestController, @RequestMapping, @Autowired, @Entity, @Repository, and @Service.",
              "code": null
            },
            {
              "question": "Which annotations do you use in JUnit tests?",
              "answer": "- Common annotations include @Test, @BeforeEach, @AfterEach, @Mock, @InjectMocks, and @RunWith.",
              "code": null
            },
            {
              "question": "Which libraries do you use for JUnit tests?",
              "answer": "- Common libraries include JUnit 5, Mockito, and Spring Boot Test.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 42
};
