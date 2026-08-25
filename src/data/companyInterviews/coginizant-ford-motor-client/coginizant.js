// AUTO-GENERATED file — company-wise interview data.
// Source: Coginizant (Ford Motor Client) interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "coginizant-ford-motor-client",
  "name": "Coginizant (Ford Motor Client)",
  "interviews": [
    {
      "name": "Coginizant",
      "questionCount": 122,
      "rounds": [
        {
          "name": "First Round Assessment",
          "questions": [
            {
              "question": "Coding Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "Question 1: Implement a React component that filters a list of transactions based on an input date and sorts the list based on the amount when the amount header is clicked",
              "answer": "",
              "code": null
            },
            {
              "question": "Question 2:Implement a Spring Boot application with POST, GET, and DELETE APIs. Include proper response statuses and separate the controller, service, and repository layers",
              "answer": "",
              "code": null
            },
            {
              "question": "4 Multiple Choice Questions",
              "answer": "",
              "code": null
            }
          ]
        },
        {
          "name": "Technical Round 1 - Cognizant Interview",
          "questions": [
            {
              "question": "Self Introduction",
              "answer": "Answer: [Provide a brief introduction about yourself, your experience, and your technical expertise.]",
              "code": null
            },
            {
              "question": "About your project",
              "answer": "Answer: [Explain your project, its objectives, the technologies used, and your role in it.]",
              "code": null
            },
            {
              "question": "Have you worked on GCP and deployed any project in GCP?",
              "answer": "Answer: [Yes/No. If yes, explain the project and deployment process.]",
              "code": null
            },
            {
              "question": "How many React projects have you worked on?",
              "answer": "Answer: [State the number of projects and briefly describe each.]",
              "code": null
            },
            {
              "question": "Explain props in React.",
              "answer": "Answer: Props are short for properties and are used to pass data from one component to another in React.",
              "code": null
            },
            {
              "question": "How to pass data from child to parent in React.",
              "answer": "Answer: By passing a function as a prop to the child component and then calling that function in the child component with the data you want to pass.",
              "code": null
            },
            {
              "question": "How to validate props in React.",
              "answer": "Answer: By using PropTypes, a library for type-checking props.",
              "code": null
            },
            {
              "question": "Have you used reusable components in React? Give an example.",
              "answer": "Answer: Yes, for example, a Button component that can be used across different parts of an application.",
              "code": null
            },
            {
              "question": "Explain lazy loading in React.",
              "answer": "Answer: Lazy loading in React is a technique for delaying the loading of non-critical resources during the initial loading phase.",
              "code": null
            },
            {
              "question": "What is React.lazy?",
              "answer": "Answer: React.lazy is a function that lets you render a dynamic import as a regular component.",
              "code": null
            },
            {
              "question": "What are React fragments?",
              "answer": "Answer: React fragments allow you to group a list of children without adding extra nodes to the DOM.",
              "code": null
            },
            {
              "question": "Difference between fragment and div tag in React.",
              "answer": "Answer: A fragment does not add an extra node to the DOM, whereas a div does.",
              "code": null
            },
            {
              "question": "Does using div instead of fragment take extra memory?",
              "answer": "Answer: Yes, using div adds an extra node to the DOM, which can consume more memory.",
              "code": null
            },
            {
              "question": "Which hooks have you used in React?",
              "answer": "Answer: useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, etc.",
              "code": null
            },
            {
              "question": "Explain useCallback hook.",
              "answer": "Answer: useCallback returns a memoized callback function that only changes if one of its dependencies changes.",
              "code": null
            },
            {
              "question": "Explain useEffect.",
              "answer": "Answer: useEffect is a hook that runs side effects in function components. It can be used for data fetching, direct DOM updates, and more.",
              "code": null
            },
            {
              "question": "What is a dependency array in useEffect?",
              "answer": "Answer: The dependency array in useEffect specifies when the effect should be re-run based on the changes in the array items.",
              "code": null
            },
            {
              "question": "How do you call APIs in React?",
              "answer": "Answer: By using fetch, axios, or other HTTP client libraries within a useEffect hook or event handler.",
              "code": null
            },
            {
              "question": "Explain the API intersection observer for lazy loading.",
              "answer": "Answer: The Intersection Observer API is used to asynchronously observe changes in the intersection of a target element with an ancestor element or the top-level document’s viewport.",
              "code": null
            },
            {
              "question": "What do you use for state management in React?",
              "answer": "Answer: useState, useReducer, Context API, Redux, etc.",
              "code": null
            },
            {
              "question": "What is Context API in React?",
              "answer": "Answer: The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.",
              "code": null
            },
            {
              "question": "Do you know Redux?",
              "answer": "Answer: Yes, Redux is a state management library for JavaScript applications, used to manage the application state in a predictable way.",
              "code": null
            },
            {
              "question": "How do you memorize in React?",
              "answer": "Answer: By using useMemo and useCallback hooks to memoize values and functions.",
              "code": null
            },
            {
              "question": "Using map, write any code in JavaScript.",
              "answer": "",
              "code": {
                "language": "javascript",
                "content": "const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled); // [2, 4, 6, 8]"
              }
            },
            {
              "question": "What is the return type of map and forEach in JavaScript?",
              "answer": "Answer: map returns a new array, forEach returns undefined.",
              "code": null
            },
            {
              "question": "Write and explain a callback function in JavaScript.",
              "answer": "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.",
              "code": {
                "language": "javascript",
                "content": "function fetchData(callback) {\n  setTimeout(() => {\n    callback('Data received');\n  }, 1000);\n}\n\nfetchData(data => {\n  console.log(data); // Data received\n});"
              }
            },
            {
              "question": "Write a code for a promise example.",
              "answer": "",
              "code": {
                "language": "javascript",
                "content": "const promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('Promise resolved');\n  }, 1000);\n});\n\npromise.then(data => {\n  console.log(data); // Promise resolved\n});"
              }
            },
            {
              "question": "Have you used async and await in JavaScript?",
              "answer": "Answer: Yes, async and await are used to handle asynchronous operations in a more readable way.",
              "code": null
            },
            {
              "question": "What is callback hell in React?",
              "answer": "Answer: Callback hell refers to the situation where callbacks are nested within other callbacks, leading to difficult-to-read and maintain code.",
              "code": null
            },
            {
              "question": "How do you handle errors in ReactJS?",
              "answer": "Answer: By using try-catch blocks, error boundaries, and error handling in promises.",
              "code": null
            },
            {
              "question": "If we are displaying some employee data and the employee is null, how can you handle it in React code?",
              "answer": "Answer: By using conditional rendering to check if the employee data is null before attempting to display it.",
              "code": null
            },
            {
              "question": "Have you used the ?? operator in React?",
              "answer": "Answer: Yes, the ?? (nullish coalescing) operator is used to provide a fallback value if the left-hand operand is null or undefined.",
              "code": null
            },
            {
              "question": "Which Java version are you using?",
              "answer": "Answer: [Specify the Java version you are using.]",
              "code": null
            },
            {
              "question": "What are the new features in Java 8?",
              "answer": "Answer: Lambda expressions, functional interfaces, Stream API, new Date and Time API, Optional class, and more.",
              "code": null
            },
            {
              "question": "Write a code to display today’s date and the date one month before using Java 8 features.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.time.LocalDate;\n\npublic class DateExample {\n  public static void main(String[] args) {\n    LocalDate today = LocalDate.now();\n    LocalDate oneMonthBefore = today.minusMonths(1);\n    System.out.println(\"Today: \" + today);\n    System.out.println(\"One Month Before: \" + oneMonthBefore);\n  }\n}"
              }
            },
            {
              "question": "Write code to display age difference using the Period class.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.time.LocalDate;\nimport java.time.Period;\n\npublic class AgeDifference {\n  public static void main(String[] args) {\n    LocalDate birthDate = LocalDate.of(1990, 1, 1);\n    LocalDate today = LocalDate.now();\n    Period age = Period.between(birthDate, today);\n    System.out.println(\"Age: \" + age.getYears() + \" years, \" + age.getMonths() + \" months, \" + age.getDays() + \" days.\");\n  }\n}"
              }
            },
            {
              "question": "What is a functional interface in Java?",
              "answer": "Answer: A functional interface is an interface with exactly one abstract method, which can be used as a target for lambda expressions and method references.",
              "code": null
            },
            {
              "question": "Write a custom functional interface.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\npublic interface MyFunctionalInterface {\n    int sum(int a, int b);\n}\n\n// Example usage\npublic class FunctionalInterfaceExample {\n    public static void main(String[] args) {\n        // Implementing the sum method using a lambda expression\n        MyFunctionalInterface addition = (a, b) -> a + b;\n\n        // Executing the sum method\n        int result = addition.sum(5, 3);\n        System.out.println(\"Sum: \" + result); // Sum: 8\n    }\n}"
              }
            },
            {
              "question": "Why use the sum method instead of the apply method in Java?",
              "answer": "In the context of the custom functional interface, the sum method is specifically named and defined to perform a summation operation on two integers. Here's why using the sum method instead of a more generic method name like apply can be advantageous:",
              "code": null
            },
            {
              "question": "Clarity and Intent",
              "answer": ": Naming the method sum clearly indicates its purpose is to add two numbers. This makes the code more readable and the intent of the method obvious to anyone who reads it.",
              "code": null
            },
            {
              "question": "Domain-Specific Naming",
              "answer": ": In this case, the interface is designed for summing two integers. Using a domain-specific name like sum rather than a generic name like apply aligns with the single-responsibility principle and makes the code easier to understand and maintain.",
              "code": null
            },
            {
              "question": "Consistency with Functional Interfaces",
              "answer": ": While the standard functional interfaces like Function use generic names like apply to support a wide range of operations, custom functional interfaces can benefit from specific names that denote the exact operation they perform.\nExample with apply:\nExample with sum:\nUsing sum in the custom functional interface makes the purpose of the method clear and specific, enhancing code readability and maintainability.",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\npublic interface MyFunctionalInterface {\n    int sum(int a, int b);\n}\n\n// Usage\npublic class FunctionalInterfaceExample {\n    public static void main(String[] args) {\n        MyFunctionalInterface addition = (a, b) -> a + b;\n        int result = addition.sum(5, 3);\n        System.out.println(\"Sum: \" + result); // Sum: 8\n    }\n}"
              }
            },
            {
              "question": "Why do you need a custom functional interface? Give an example.",
              "answer": "Answer: Custom functional interfaces are needed when you want to define a specific contract that doesn't match existing functional interfaces.",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\npublic interface StringConcatenator {\n  String concatenate(String a, String b);\n}"
              }
            },
            {
              "question": "What are streams in Java?",
              "answer": "Answer: Streams represent a sequence of elements supporting sequential and parallel aggregate operations.",
              "code": null
            },
            {
              "question": "Explain stream functions.",
              "answer": "Answer: Stream functions include operations like filter, map, reduce, collect, forEach, sorted, etc., used to process collections of objects.",
              "code": null
            },
            {
              "question": "Find the first non-repeated character using streams (code).",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.LinkedHashMap;\nimport java.util.Map;\nimport java.util.function.Function;\nimport java.util.stream.Collectors;\n\npublic class FirstNonRepeated {\n  public static void main(String[] args) {\n    String input = \"swiss\";\n    Character result = input.chars()\n        .mapToObj(c -> (char) c)\n        .collect(Collectors.groupingBy(Function.identity(), LinkedHashMap::new, Collectors.counting()))\n        .entrySet()\n        .stream()\n        .filter(entry -> entry.getValue() == 1)\n        .map(Map.Entry::getKey)\n        .findFirst()\n        .orElse(null);\n\n    System.out.println(\"First non-repeated character: \" + result);\n  }\n}"
              }
            },
            {
              "question": "44 Given two arrays, arr1 = [4,2,3,4,6] and arr2 = [6,8,2], the output should be distinct array [2,3,4,6,8].",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\nimport java.util.Set;\nimport java.util.TreeSet;\n\npublic class MergeArrays {\n  public static void main(String[] args) {\n    Integer[] arr1 = {4, 2, 3, 4, 6};\n    Integer[] arr2 = {6, 8, 2};\n    Set<Integer> resultSet = new TreeSet<>(Arrays.asList(arr1));\n    resultSet.addAll(Arrays.asList(arr2));\n    System.out.println(resultSet); // [2, 3, 4, 6, 8]\n  }\n}"
              }
            },
            {
              "question": "What is Spring Boot?",
              "answer": "Answer: Spring Boot is a framework for building production-ready Spring applications quickly with convention over configuration.",
              "code": null
            },
            {
              "question": "What are the basic annotations in Spring Boot?",
              "answer": "Answer: @SpringBootApplication, @RestController, @RequestMapping, @Autowired, etc.",
              "code": null
            },
            {
              "question": "What is Spring Security?",
              "answer": "Answer: Spring Security is a framework that focuses on providing authentication and authorization to Spring applications.",
              "code": null
            },
            {
              "question": "What is method-level security?",
              "answer": "Answer: Method-level security allows you to apply security rules directly on methods using annotations like @PreAuthorize and @Secured.",
              "code": null
            },
            {
              "question": "What is the difference between @Component and @Bean?",
              "answer": "Answer: @Component is used to denote a class as a Spring component, while @Bean is used to declare a bean inside a configuration class.",
              "code": null
            },
            {
              "question": "What is the difference between @Primary and @Qualifier?",
              "answer": "Answer: @Primary is used to give a higher preference to a bean when multiple beans of the same type exist, while @Qualifier is used to specify which bean to use when multiple options are available.",
              "code": null
            },
            {
              "question": "What is the difference between @Controller and @RestController?",
              "answer": "Answer: @Controller is used for traditional MVC controllers, returning views. @RestController combines @Controller and @ResponseBody, returning JSON/XML responses directly.",
              "code": null
            },
            {
              "question": "Given the following structure, create an entity class in Spring Boot using JPA annotations.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import javax.persistence.*;\nimport java.util.List;\n\n@Entity\npublic class Employee {\n  @Id\n  @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long empId;\n  private String empName;\n  private String email;\n\n  @ManyToOne\n  @JoinColumn(name = \"deptId\")\n  private Department department;\n\n  // Getters and Setters\n}\n\n@Entity\npublic class Department {\n  @Id\n  @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long deptId;\n  private String deptName;\n\n  @OneToMany(mappedBy = \"department\", cascade = CascadeType.ALL)\n  private List<Project> projects;\n\n  // Getters and Setters\n}\n\n@Entity\npublic class Project {\n  @Id\n  @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long projectId;\n  private String projectName;\n\n  @ManyToOne\n  @JoinColumn(name = \"deptId\")\n  private Department department;\n\n  // Getters and Setters\n}"
              }
            },
            {
              "question": "Final Round  - Cognizant Interview",
              "answer": "",
              "code": null
            },
            {
              "question": "Explain your experience in React projects and the components you have worked on.",
              "answer": "Answer: I have worked on several React projects, including a bank application where I primarily focused on the user registration page and transaction data handling. I have worked with various components such as forms, modals, tables, and custom reusable components.",
              "code": null
            },
            {
              "question": "What is the purpose of Context API?",
              "answer": "Answer: The Context API is used to share data across the component tree without passing props down manually at every level. It helps manage state globally, making it easier to handle shared data like user authentication, themes, and settings.",
              "code": null
            },
            {
              "question": "Have you passed data through the backend using authentication via headers or body?",
              "answer": "Answer: Yes, I have passed data through the backend using authentication via headers. Typically, I use JWT tokens in the headers for secure communication between the client and server.",
              "code": null
            },
            {
              "question": "How do you validate your data and which components have you used in your project?",
              "answer": "Answer: I validate data using Formik along with Yup for schema validation. Formik handles form state management and validation, while Yup is used for defining validation schemas.",
              "code": null
            },
            {
              "question": "Are you using Formik in your project globally or in every component?",
              "answer": "Answer: I use Formik in every component where form handling is required. This ensures each form has its own state and validation logic.",
              "code": null
            },
            {
              "question": "How do you validate passwords in your ReactJS application?",
              "answer": "Answer: I validate passwords using Formik and Yup. Yup allows me to define complex validation rules, such as minimum length, inclusion of special characters, and matching confirmation passwords.",
              "code": null
            },
            {
              "question": "Have you created any reusable components in your project?",
              "answer": "Answer: Yes, I have created several reusable components, such as input fields, buttons, modals, and form validation schemas. These components help maintain consistency and reduce code duplication.",
              "code": null
            },
            {
              "question": "For security purposes, are you passing JWT tokens from client-side to server-side?",
              "answer": "Answer: Yes, I pass JWT tokens from the client-side to the server-side through HTTP headers to ensure secure communication and authentication.",
              "code": null
            },
            {
              "question": "How is JWT working, and are you validating it on the server-side or client-side?",
              "answer": "Answer: JWT tokens are generated upon user authentication and sent to the client. They are then included in the HTTP headers for subsequent requests. Validation is done on the server-side to ensure the token's authenticity and to grant access to protected routes.",
              "code": null
            },
            {
              "question": "How do you test your React components?",
              "answer": "Answer: I test my React components using tools like Jest and React Testing Library. These tools allow me to write unit tests and integration tests to ensure component functionality and behavior.",
              "code": null
            },
            {
              "question": "How do you improve performance in your components?",
              "answer": "Answer: I improve performance by using techniques such as memoization with React.memo, optimizing re-renders with useCallback and useMemo, lazy loading components with React.lazy, and ensuring efficient state management.",
              "code": null
            },
            {
              "question": "Have you used refs in your project?",
              "answer": "Answer: Yes, I have used refs for accessing DOM elements directly, managing focus, and integrating with third-party libraries where direct DOM manipulation is required.",
              "code": null
            },
            {
              "question": "13 What are the key features introduced in ES6?",
              "answer": "",
              "code": null
            },
            {
              "question": "Arrow Functions:",
              "answer": "Provides a shorter syntax for writing functions.",
              "code": {
                "language": "javascript",
                "content": "const add = (a, b) => a + b;"
              }
            },
            {
              "question": "Classes:",
              "answer": "Simplifies the creation of objects and inheritance.",
              "code": {
                "language": "javascript",
                "content": "class Person {\n    constructor(name) {\n        this.name = name;\n    }\n\n    greet() {\n        console.log(`Hello, my name is ${this.name}`);\n    }\n}\n\nconst john = new Person('John');\njohn.greet();"
              }
            },
            {
              "question": "Template Literals:",
              "answer": "Allows string interpolation and multi-line strings.",
              "code": {
                "language": "javascript",
                "content": "const name = 'John';\nconst message = `Hello, ${name}!`;\nconsole.log(message);"
              }
            },
            {
              "question": "Default Parameters:",
              "answer": "Enables function parameters to have default values.",
              "code": {
                "language": "javascript",
                "content": "function greet(name = 'Guest') {\n    console.log(`Hello, ${name}`);\n}\n\ngreet(); // Hello, Guest"
              }
            },
            {
              "question": "Destructuring Assignment:",
              "answer": "Extracts values from arrays or objects into distinct variables.",
              "code": {
                "language": "javascript",
                "content": "const person = { name: 'John', age: 30 };\nconst { name, age } = person;\nconsole.log(name, age); // John 30\n\nconst [first, second] = [10, 20];\nconsole.log(first, second); // 10 20"
              }
            },
            {
              "question": "Rest and Spread Operators:",
              "answer": "Used with arrays and objects.",
              "code": {
                "language": "javascript",
                "content": "function sum(...numbers) {\n    return numbers.reduce((acc, curr) => acc + curr, 0);\n}\n\nconsole.log(sum(1, 2, 3)); // 6\n\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5, 6];\nconsole.log(arr2); // [1, 2, 3, 4, 5, 6]\n\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = { ...obj1, c: 3 };\nconsole.log(obj2); // { a: 1, b: 2, c: 3 }"
              }
            },
            {
              "question": "Promises:",
              "answer": "For asynchronous programming.",
              "code": {
                "language": "javascript",
                "content": "const promise = new Promise((resolve, reject) => {\n    setTimeout(() => resolve('Success!'), 1000);\n});\n\npromise.then(result => console.log(result)); // Success!"
              }
            },
            {
              "question": "Modules:",
              "answer": "Enables import and export of modules.",
              "code": {
                "language": "javascript",
                "content": "// module.js\nexport const name = 'John';\n\n// main.js\nimport { name } from './module.js';\nconsole.log(name); // John"
              }
            },
            {
              "question": "Enhanced Object Literals:",
              "answer": "Makes object creation easier.",
              "code": {
                "language": "javascript",
                "content": "const name = 'John';\nconst person = {\n    name,\n    greet() {\n        console.log(`Hello, my name is ${this.name}`);\n    }\n};\n\nperson.greet(); // Hello, my name is John"
              }
            },
            {
              "question": "Let and Const:",
              "answer": "Introduces block-scoped variables and constants.",
              "code": {
                "language": "javascript",
                "content": "let variable = 'I can be reassigned';\nconst constant = 'I cannot be reassigned';\n\nvariable = 'New value';\nconsole.log(variable); // New value\n\n// constant = 'New value'; // Error: Assignment to constant variable"
              }
            },
            {
              "question": "What is the difference between a React functional component and an arrow component?",
              "answer": "",
              "code": null
            },
            {
              "question": "React Functional Component",
              "answer": "A React functional component is a JavaScript function that returns a React element. It can be written using the function keyword.",
              "code": {
                "language": "javascript",
                "content": "function MyComponent() {\n    return <div>Hello, World!</div>;\n}"
              }
            },
            {
              "question": "Arrow Component",
              "answer": "An arrow component is a functional component defined using the ES6 arrow function syntax. It also returns a React element.\nKey Differences:",
              "code": {
                "language": "javascript",
                "content": "const MyComponent = () => {\n    return <div>Hello, World!</div>;\n}"
              }
            },
            {
              "question": "Syntax:",
              "answer": "Functional components use the function keyword, while arrow components use the arrow function => syntax.",
              "code": null
            },
            {
              "question": "this Binding:",
              "answer": "Arrow functions do not have their own this context, inheriting it from the parent scope. Functional components with the function keyword have their own this context, which can be useful in class components but less so in functional components.",
              "code": null
            },
            {
              "question": "Conciseness:",
              "answer": "Arrow functions are often more concise and can be written in a single line if the function body is simple.",
              "code": null
            },
            {
              "question": "15 Why would you use an arrow function in a React component?",
              "answer": "",
              "code": null
            },
            {
              "question": "Lexical this Binding:",
              "answer": "Arrow functions do not have their own this context and inherit this from the parent scope. This prevents common mistakes with this binding in class components.",
              "code": {
                "language": "javascript",
                "content": "class MyComponent extends React.Component {\n    handleClick = () => {\n        console.log(this); // `this` refers to the component instance\n    }\n\n    render() {\n        return <button onClick={this.handleClick}>Click me</button>;\n    }\n}"
              }
            },
            {
              "question": "Simplified Syntax:",
              "answer": "Arrow functions provide a more concise and readable syntax, especially for simple functions.",
              "code": {
                "language": "javascript",
                "content": "const MyComponent = () => <div>Hello, World!</div>;"
              }
            },
            {
              "question": "No Need for Binding:",
              "answer": "In class components, methods defined with arrow functions do not need to be explicitly bound in the constructor, reducing boilerplate code.",
              "code": {
                "language": "javascript",
                "content": "class MyComponent extends React.Component {\n    constructor(props) {\n        super(props);\n        this.handleClick = this.handleClick.bind(this); // Not needed with arrow functions\n    }\n\n    handleClick() {\n        console.log(this); // `this` is undefined without binding\n    }\n\n    render() {\n        return <button onClick={this.handleClick}>Click me</button>;\n    }\n}"
              }
            },
            {
              "question": "Consistency:",
              "answer": "Using arrow functions throughout your codebase can provide consistency, especially when working with functional components and hooks.\n......etc (General Questions && Project-Oriented Questions)",
              "code": null
            }
          ]
        },
        {
          "name": "HR Round - Cognizant Interview",
          "questions": [
            {
              "question": "Ford Motor Client Interview",
              "answer": "",
              "code": null
            },
            {
              "question": "Can you provide a brief self-introduction and explain your current project?",
              "answer": "Answer: This question typically requires a personalized response where you introduce yourself, your background, skills, and experience. Followed by a brief description of your current project, including its goals, technologies used, and your role in the project.",
              "code": null
            },
            {
              "question": "Given the string String st = \"Win Win!!! You have got a lottery\";, write a Java program using stream that:",
              "answer": "Processes this string to determine if it should be classified as \"Spam\" or \"Not Spam\".\nCounts the occurrences of the words \"win\" and \"lottery\".\nIf the count is 2.5 or less, classify the string as \"Not Spam\"; otherwise, classify it as \"Spam\".",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\n\npublic class SpamChecker {\n    public static void main(String[] args) {\n        String st = \"Win Win!!! You have got a lottery\";\n\n        long ans = Arrays.stream(st.toLowerCase().split(\"\\\\s+\"))\n                         .map(word -> word.replaceAll(\"[^a-zA-Z]\", \"\"))\n                         .filter(e -> e.equals(\"win\") || e.equals(\"lottery\"))\n                         .count();\n\n        String result = ans <= 2.5 ? \"Not Spam\" : \"Spam\";\n        System.out.println(result);\n    }\n}"
              }
            },
            {
              "question": "Is count a terminal operator or an intermediate operator in Java Streams?",
              "answer": "Answer: count is a terminal operator in Java Streams. It triggers the processing of the stream and produces a result.",
              "code": null
            },
            {
              "question": "What is upcasting and downcasting in Java?",
              "answer": "Answer\nUpcasting: Converting a subclass reference to a superclass reference. It is implicit and safe, e.g., Dog dog = new Dog(); Animal animal = dog;\nDowncasting: Converting a superclass reference back to a subclass reference. It is explicit and requires a cast, e.g., Animal animal = new Dog(); Dog dog = (Dog) animal; It can cause a ClassCastException if the object is not actually an instance of the subclass.",
              "code": null
            },
            {
              "question": "For a music player where you want to add and remove songs in middle, which collection is suitable and why?",
              "answer": "Answer: For a music player where you need to frequently add and remove songs in the middle of the collection, a LinkedList is more suitable compared to an ArrayList. Here's why:\nEfficient Insertions/Deletions: LinkedList provides constant time complexity (O(1)) for inserting and deleting elements if you have a reference to the node where the operation needs to occur. This is because it involves only changing pointers between nodes, which is efficient.\nNo Resizing Overhead: Unlike ArrayList, which requires resizing and copying elements to a new array when it grows, LinkedList does not require resizing. This makes it more efficient for frequent insertions and deletions.\nSequential Access: While LinkedList has a higher overhead for accessing elements by index (O(n) time complexity), it excels in scenarios where you are performing many insertions and deletions rather than random access.",
              "code": null
            },
            {
              "question": "What is the difference between map and flatMap in Java Streams?",
              "answer": "Answer\nmap: Transforms each element in the stream into another object. It applies a function to each element and returns a stream of the results.\nflatMap: Transforms each element into a stream of objects and then flattens these streams into a single stream. It is used when the transformation results in multiple elements for each input element.",
              "code": null
            },
            {
              "question": "What are fail-fast and fail-safe iterators, and how can you overcome issues related to them?",
              "answer": "Answer\nFail-fast iterators: Throw a ConcurrentModificationException if the collection is modified while iterating. To avoid issues, use synchronized collections or concurrent collections like CopyOnWriteArrayList.\nFail-safe iterators: Do not throw exceptions if the collection is modified. They work on a clone of the collection, e.g., ConcurrentHashMap provides fail-safe iterators.",
              "code": null
            },
            {
              "question": "Which databases have you worked with?",
              "answer": "Answer: This answer should be specific to your experience. Common databases include MySQL, PostgreSQL, Oracle, SQL Server, MongoDB, etc.",
              "code": null
            },
            {
              "question": "How would you design table structures for a scenario where a customer can place multiple orders, and each order can contain multiple products?",
              "answer": "Answer",
              "code": {
                "language": "sql",
                "content": "CREATE TABLE Customer (\n    customer_id INT PRIMARY KEY,\n    customer_name VARCHAR(100)\n);\n\nCREATE TABLE Product (\n    product_id INT PRIMARY KEY,\n    product_name VARCHAR(100),\n    price DECIMAL\n);\n\nCREATE TABLE `Order` (\n    order_id INT PRIMARY KEY,\n    customer_id INT,\n    order_date DATE,\n    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)\n);\n\nCREATE TABLE OrderProduct (\n    order_id INT,\n    product_id INT,\n    quantity INT,\n    PRIMARY KEY (order_id, product_id),\n    FOREIGN KEY (order_id) REFERENCES `Order`(order_id),\n    FOREIGN KEY (product_id) REFERENCES Product(product_id)\n);"
              }
            },
            {
              "question": "Write a query to get the customer name and total order price for customers named \"Bharath\" where the order is placed today.",
              "answer": "Answer",
              "code": {
                "language": "sql",
                "content": "SELECT c.customer_name, SUM(p.price * op.quantity) AS total_order_price\nFROM Customer c\nJOIN `Order` o ON c.customer_id = o.customer_id\nJOIN OrderProduct op ON o.order_id = op.order_id\nJOIN Product p ON op.product_id = p.product_id\nWHERE c.customer_name = 'Bharath'\nAND o.order_date = CURDATE()\nGROUP BY c.customer_name;"
              }
            },
            {
              "question": "Given the following Spring Boot code, will it work?",
              "answer": "Answer: No, it will not work as intended. Spring will not be able to resolve the Filter bean because there are multiple implementations (Abc and Abc1). You need to use @Qualifier to specify which implementation should be injected.",
              "code": {
                "language": "java",
                "content": "@Component\npublic class Controller {\n    @Autowired\n    private Filter filter;\n}\n\npublic interface Filter {\n}\n\n@Component\npublic class Abc implements Filter {\n}\n\n@Component\npublic class Abc1 implements Filter {\n}"
              }
            },
            {
              "question": "How would you fix the issue in the Spring Boot code provided above?",
              "answer": "Answer: Use @Qualifier to specify which bean to inject:",
              "code": {
                "language": "java",
                "content": "@Component\npublic class Controller {\n    @Autowired\n    @Qualifier(\"abc\")\n    private Filter filter;\n}\n\n@Component(\"abc\")\npublic class Abc implements Filter {\n}\n\n@Component(\"abc1\")\npublic class Abc1 implements Filter {\n}"
              }
            },
            {
              "question": "What is the difference between @Primary and @Qualifier in Spring?",
              "answer": "Answer\n@Primary: Indicates the preferred bean when multiple candidates are available for autowiring. It is used at the bean definition level.\n@Qualifier: Used to specify which bean to inject when multiple beans of the same type are available. It is used at the injection point.",
              "code": null
            },
            {
              "question": "How can you ensure that an API request processes data and responds while sending a notification to another API simultaneously in Spring Boot?",
              "answer": "Answer: Use asynchronous processing with @Async or CompletableFuture to handle the notification separately from the main request processing. Here’s an example:",
              "code": {
                "language": "java",
                "content": "@Service\npublic class MyService {\n    @Async\n    public CompletableFuture<Void> sendNotification() {\n        // Code to send notification\n        return CompletableFuture.completedFuture(null);\n    }\n    \n    public void processRequest() {\n        // Process request\n        sendNotification(); // Non-blocking call\n    }\n}"
              }
            },
            {
              "question": "How do you communicate between one API and another API?",
              "answer": "Answer: You can use HTTP clients such as RestTemplate, WebClient (for reactive applications), or external libraries to make API calls. For example, using RestTemplate:",
              "code": {
                "language": "java",
                "content": "@Autowired\nprivate RestTemplate restTemplate;\n\npublic String callAnotherApi() {\n    String url = \"http://example.com/api\";\n    return restTemplate.getForObject(url, String.class);\n}"
              }
            },
            {
              "question": "What is Mono and Flux in WebClient?",
              "answer": "Answer\nMono: Represents a single asynchronous value or an empty value.\nFlux: Represents a stream of 0 to N asynchronous values.",
              "code": null
            },
            {
              "question": "What is a Kafka server?",
              "answer": "Answer: Apache Kafka is a distributed event streaming platform used for building real-time data pipelines and streaming applications. It is designed for high-throughput, fault tolerance, and scalability.",
              "code": null
            },
            {
              "question": "Given a controller with a GET API that takes a number as a @PathVariable, and returns a 404 Not Found for invalid values, how would you implement a JUnit test case for this controller?",
              "answer": "Answer",
              "code": {
                "language": "java",
                "content": "@SpringBootTest\n@AutoConfigureMockMvc\npublic class MyControllerTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    public void testGetApiNotFound() throws Exception {\n        mockMvc.perform(get(\"/api/{number}\", 999)) // assuming 999 is invalid\n               .andExpect(status().isNotFound());\n    }\n}"
              }
            },
            {
              "question": "How do you configure and connect a Spring Boot application to a database, and how does it work?",
              "answer": "Answer: Configure the application.properties or application.yml with database connection details:\nSpring Boot uses these properties to configure the DataSource, EntityManagerFactory, and TransactionManager beans automatically.",
              "code": {
                "language": "properties",
                "content": "spring.datasource.url=jdbc:mysql://localhost:3306/mydb\n      spring.datasource.username=root\n      spring.datasource.password=password\n      spring.jpa.hibernate.dd\n\nl-auto=update"
              }
            },
            {
              "question": "How can you determine if the application is connected to MySQL or Oracle?",
              "answer": "Answer: Check the application.properties or application.yml for the JDBC URL. The URL usually contains the database type, e.g., jdbc:mysql:// for MySQL or jdbc:oracle:thin:@ for Oracle.",
              "code": null
            },
            {
              "question": "What is the @Transactional annotation in Spring?",
              "answer": "Answer: The @Transactional annotation is used to define the scope of a single database transaction. It ensures that all operations within the annotated method are completed successfully before committing the transaction, and rolls back the transaction in case of errors.",
              "code": null
            },
            {
              "question": "Are you familiar with entity graphs in JPA?",
              "answer": "Answer: Yes, entity graphs in JPA allow you to specify fetch strategies for entities dynamically. They help in optimizing queries by specifying which related entities should be fetched eagerly.",
              "code": null
            },
            {
              "question": "Have you used join and joinFetch in JPA?",
              "answer": "Answer: Yes, join is used in JPQL queries to perform joins between entities, while joinFetch is used to fetch related entities eagerly in a single query to avoid the N+1 select problem.",
              "code": null
            },
            {
              "question": "What are closures in JavaScript, and can you provide an example?",
              "answer": "Answer: Closures are functions that have access to variables from their outer scope, even after the outer function has finished executing. Example:",
              "code": {
                "language": "javascript",
                "content": "function outerFunction() {\n    let outerVariable = 'I am from outer function';\n    return function innerFunction() {\n        console.log(outerVariable);\n    }\n}\nlet closureFunction = outerFunction();\nclosureFunction(); // Outputs: 'I am from outer function'"
              }
            },
            {
              "question": "What is debouncing in JavaScript?",
              "answer": "Answer: Debouncing is a technique used to limit the rate at which a function is executed. It ensures that a function is not called repeatedly in quick succession, which helps in optimizing performance. Example:",
              "code": {
                "language": "javascript",
                "content": "function debounce(func, wait) {\n    let timeout;\n    return function(...args) {\n        clearTimeout(timeout);\n        timeout = setTimeout(() => func.apply(this, args), wait);\n    }\n}"
              }
            },
            {
              "question": "What is useEffect in React?",
              "answer": "Answer: useEffect is a React hook that allows you to perform side effects in functional components. It is used to handle operations like data fetching, subscriptions, or manually changing the DOM.",
              "code": null
            },
            {
              "question": "What is the difference between state and props in React?",
              "answer": "Answer\nstate: Represents data that changes over time within a component. It is mutable and managed within the component using useState or this.setState.\nprops: Short for properties, they are read-only data passed from parent to child components. Props are immutable and used to pass data and event handlers between components.",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 122
};
