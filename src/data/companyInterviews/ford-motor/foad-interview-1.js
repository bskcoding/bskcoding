// AUTO-GENERATED file — company-wise interview data.
// Source: Ford Motor interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "ford-motor",
  "name": "Ford Motor",
  "interviews": [
    {
      "name": "Foad Interview_1",
      "questionCount": 30,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "Java/Spring Boot",
              "answer": "",
              "code": null
            },
            {
              "question": "Explain CSR (Cross-Site Request) and how you handle it in your applications.",
              "answer": "Cross-Site Request Forgery (CSRF) is an attack that tricks the victim into submitting a malicious request. It exploits the trust a site has in the user's browser. To handle CSRF in Spring Boot, you can use the CSRF protection provided by Spring Security. By default, CSRF protection is enabled in Spring Security.",
              "code": {
                "language": "java",
                "content": "import org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;\n\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http\n            .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\n            .and()\n            .authorizeRequests()\n            .anyRequest().authenticated();\n    }\n}"
              }
            },
            {
              "question": "What is JWT Security, and how do you implement it?",
              "answer": "JWT (JSON Web Token) Security is a method for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair (using RSA or ECDSA).\nImplementing JWT Security in Spring Boot\nAdd Dependencies: Include necessary dependencies for Spring Security and JWT in your project. These can be added in the pom.xml file for Maven projects or build.gradle for Gradle projects.\nConfigure Spring Security: Configure Spring Security to intercept requests and ensure only authenticated users can access certain endpoints. This involves setting up a security configuration class.\nCreate JWT Utility Class: This class will handle JWT creation, validation, and parsing. It includes methods to generate tokens, extract claims, and validate tokens.\nCreate Authentication Filter: Implement a filter that intercepts incoming requests and checks for a valid JWT in the Authorization header. This filter will use the JWT utility class to validate the token and set the authentication context.\nUser Authentication and Authorization: Implement user authentication by overriding the UserDetailsService to load user-specific data. Use the AuthenticationManager to authenticate users and generate a JWT for authenticated users.",
              "code": null
            },
            {
              "question": "Describe OAuth2 and how it is used in your applications.",
              "answer": "OAuth2 (Open Authorization) is an authorization framework that allows applications to obtain limited access to user accounts on an HTTP service, such as Facebook, GitHub, or Google. It works by delegating user authentication to the service that hosts the user account and authorizing third-party applications to access the user account.",
              "code": null
            },
            {
              "question": "How do you implement paging to get data in Spring Boot?",
              "answer": "You can use Spring Data JPA’s Pageable interface to implement paging.",
              "code": {
                "language": "java",
                "content": "import org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\n\npublic interface UserRepository extends JpaRepository<User, Long> {\n    Page<User> findAll(Pageable pageable);\n}\n\n// Service\npublic Page<User> getUsers(Pageable pageable) {\n    return userRepository.findAll(pageable);\n}\n\n// Controller\n@GetMapping(\"/users\")\npublic Page<User> listUsers(Pageable pageable) {\n    return userService.getUsers(pageable);\n}"
              }
            },
            {
              "question": "How do you sort data based on a property in Spring Boot?",
              "answer": "You can use Spring Data JPA’s Sort class to sort data.",
              "code": {
                "language": "java",
                "content": "import org.springframework.data.domain.Sort;\n\npublic List<User> getUsers() {\n    return userRepository.findAll(Sort.by(Sort.Direction.ASC, \"name\"));\n}"
              }
            },
            {
              "question": "What is an API Gateway, and why is it used?",
              "answer": "An API Gateway is a server that acts as an API front-end, receiving API requests, enforcing throttling and security policies, passing requests to the back-end service, and then passing the response back to the requester. It is used to manage traffic, handle cross-cutting concerns like security, and provide a single entry point for client requests.",
              "code": null
            },
            {
              "question": "How do you implement load balancing in your applications?",
              "answer": "You can implement load balancing using tools like Ribbon or Spring Cloud LoadBalancer in a Spring Boot application.",
              "code": {
                "language": "java",
                "content": "import org.springframework.cloud.client.loadbalancer.LoadBalanced;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.web.client.RestTemplate;\n\n@Bean\n@LoadBalanced\npublic RestTemplate restTemplate() {\n    return new RestTemplate();\n}"
              }
            },
            {
              "question": "Explain the difference between Monolithic and Microservices architectures.",
              "answer": "",
              "code": null
            },
            {
              "question": "Monolithic Architecture: A single unified codebase where all the components and services are tightly coupled and run as a single service.",
              "answer": "",
              "code": null
            },
            {
              "question": "Microservices Architecture: An approach where an application is composed of loosely coupled services, each running in its own process and communicating through lightweight mechanisms like HTTP or messaging queues.",
              "answer": "",
              "code": null
            },
            {
              "question": "What is Kubernetes, and how do you use it in your applications?",
              "answer": "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. You can use it to deploy, manage, and scale your microservices.",
              "code": null
            },
            {
              "question": "How do you connect one microservice to another?",
              "answer": "You can use REST APIs, messaging queues (like RabbitMQ), or service discovery tools (like Eureka) to connect microservices.",
              "code": null
            },
            {
              "question": "What is the difference between @RestController and @Controller in Spring Boot?",
              "answer": "",
              "code": null
            },
            {
              "question": "@RestController: Combines @Controller and @ResponseBody, used to create RESTful web services.",
              "answer": "",
              "code": null
            },
            {
              "question": "@Controller: Used to define a controller and is typically used with view templates to render HTML.",
              "answer": "",
              "code": null
            },
            {
              "question": "How do you perform code quality analysis in your projects?",
              "answer": "You can use tools like SonarQube for static code analysis, which helps in identifying code smells, bugs, and security vulnerabilities.",
              "code": null
            },
            {
              "question": "What is the difference between authentication and authorization?",
              "answer": "",
              "code": null
            },
            {
              "question": "Authentication: The process of verifying the identity of a user.",
              "answer": "",
              "code": null
            },
            {
              "question": "Authorization: The process of verifying what resources an authenticated user has access to.",
              "answer": "",
              "code": null
            },
            {
              "question": "How do you scale your application?",
              "answer": "You can scale your application horizontally by adding more instances or vertically by adding more resources (CPU, memory) to the existing instances. Tools like Kubernetes help in managing scaling.",
              "code": null
            },
            {
              "question": "What are profiles in Spring Boot, and how do you use them?",
              "answer": "Profiles in Spring Boot allow you to configure different environments (e.g., development, testing, production). You can specify different configurations in application-{profile}.properties files.",
              "code": {
                "language": "java",
                "content": "// application-dev.properties\nspring.datasource.url=jdbc:h2:mem:devdb\n\n// application-prod.properties\nspring.datasource.url=jdbc:mysql://localhost/proddb\n\n// Main application\n@SpringBootApplication\n@PropertySource(\"classpath:application-${spring.profiles.active}.properties\")\npublic class MyApp {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApp.class, args);\n    }\n}"
              }
            },
            {
              "question": "React",
              "answer": "",
              "code": null
            },
            {
              "question": "What is middleware in ReactJS, and how do you use it?",
              "answer": "Middleware in React, typically used with state management libraries like Redux, is a way to extend the capabilities of the store by adding custom functionality between dispatching an action and the moment it reaches the reducer.",
              "code": {
                "language": "javascript",
                "content": "const loggerMiddleware = store => next => action => {\n    console.log('Dispatching:', action);\n    let result = next(action);\n    console.log('Next state:', store.getState());\n    return result;\n};\n\nconst store = createStore(\n    rootReducer,\n    applyMiddleware(loggerMiddleware)\n);"
              }
            },
            {
              "question": "Explain the Context API and Redux. How do they differ, and when do you use each?",
              "answer": "",
              "code": null
            },
            {
              "question": "Context API: Built-in feature of React for prop drilling and global state management. Best for small to medium applications.",
              "answer": "",
              "code": null
            },
            {
              "question": "Redux: A state management library that provides a single source of truth and a predictable state container. Best for larger applications with more complex state management needs.",
              "answer": "",
              "code": null
            },
            {
              "question": "How do you write unit tests in React?",
              "answer": "You can use testing libraries like Jest and React Testing Library to write unit tests.",
              "code": {
                "language": "javascript",
                "content": "import { render, screen } from '@testing-library/react';\nimport App from './App';\n\ntest('renders learn react link', () => {\n    render(<App />);\n    const linkElement = screen.getByText(/learn react/i);\n    expect(linkElement).toBeInTheDocument();\n});"
              }
            },
            {
              "question": "Have you worked on reusable components in React? Give an example.",
              "answer": "Yes, for example, a Button component that can be reused across the application.",
              "code": {
                "language": "javascript",
                "content": "const Button = ({ label, onClick }) => (\n    <button onClick={onClick}>\n        {label}\n    </button>\n);\n\n// Usage\n<Button label=\"Click Me\" onClick={handleClick} />"
              }
            },
            {
              "question": "What is a Higher-Order Component (HoC) in ReactJS, and how do you use it?",
              "answer": "A Higher-Order Component (HoC) is a function that takes a component and returns a new component. It’s used for reusing component logic.",
              "code": {
                "language": "javascript",
                "content": "const withLogging = WrappedComponent => {\n    return class extends React.Component {\n        componentDidMount() {\n            console.log('Component mounted');\n        }\n\n        render() {\n            return <WrappedComponent {...this.props} />;\n        }\n    };\n};\n\n// Usage\nconst EnhancedComponent = withLogging(MyComponent);"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 30
};
