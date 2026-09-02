// AUTO-GENERATED file — company-wise interview data.
// Source: Ford Motor interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "ford-motor",
  "name": "Ford Motor",
  "interviews": [
    {
      "name": "Java/Spring Boot & React Interview",
      "rounds": [
        {
          "name": "Java & Spring Boot",
          "questions": [
            {
              "question": "Explain CSRF (Cross-Site Request Forgery) and how you handle it.",
              "answer": "CSRF is an attack that tricks the victim into submitting a malicious request. In Spring Boot, CSRF protection is enabled by default and can be configured with CookieCsrfTokenRepository.",
              "code": {
                "language": "java",
                "content": "http.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());"
              }
            },
            {
              "question": "What is JWT Security and how do you implement it?",
              "answer": "JWT is a method for securely transmitting information as a JSON object. Implementation steps:\n- Add dependencies\n- Configure Spring Security\n- Create a JWT utility class\n- Create an authentication filter\n- Implement UserDetailsService",
              "code": {
                "language": "java",
                "content": "public class JwtUtil {\n    public String generateToken(String username) {\n        return Jwts.builder()\n            .setSubject(username)\n            .setIssuedAt(new Date())\n            .setExpiration(new Date(System.currentTimeMillis() + 3600000))\n            .signWith(SignatureAlgorithm.HS256, SECRET)\n            .compact();\n    }\n}"
              }
            },
            {
              "question": "Describe OAuth2 and how it is used in your applications.",
              "answer": "OAuth2 is an authorization framework allowing applications to obtain limited access to user accounts. It delegates user authentication to the service hosting the user account.",
              "code": null
            },
            {
              "question": "How do you implement paging to get data in Spring Boot?",
              "answer": "Use Spring Data JPA's Pageable interface.",
              "code": {
                "language": "java",
                "content": "@GetMapping(\"/users\")\npublic Page<User> listUsers(Pageable pageable) {\n    return userService.getUsers(pageable);\n}"
              }
            },
            {
              "question": "How do you sort data based on a property in Spring Boot?",
              "answer": "Use Spring Data JPA's Sort class.",
              "code": {
                "language": "java",
                "content": "return userRepository.findAll(Sort.by(Sort.Direction.ASC, \"name\"));"
              }
            },
            {
              "question": "What is an API Gateway and why is it used?",
              "answer": "An API Gateway acts as an API front-end, receiving requests, enforcing throttling/security, and routing to back-end services. It provides a single entry point.",
              "code": null
            },
            {
              "question": "How do you implement load balancing in your applications?",
              "answer": "Using Ribbon or Spring Cloud LoadBalancer with @LoadBalanced RestTemplate.",
              "code": {
                "language": "java",
                "content": "@Bean @LoadBalanced\npublic RestTemplate restTemplate() {\n    return new RestTemplate();\n}"
              }
            },
            {
              "question": "Explain the difference between Monolithic and Microservices architectures.",
              "answer": "- Monolithic: single unified codebase, tightly coupled, runs as a single service\n- Microservices: loosely coupled services, each in its own process, communicating via HTTP/messaging",
              "code": null
            },
            {
              "question": "What is Kubernetes and how do you use it?",
              "answer": "Kubernetes is a container orchestration platform automating deployment, scaling, and management of containerized applications.",
              "code": null
            },
            {
              "question": "How do you connect one microservice to another?",
              "answer": "Using REST APIs, messaging queues (RabbitMQ), or service discovery tools (Eureka).",
              "code": {
                "language": "java",
                "content": "// Using RestTemplate\nUser user = restTemplate.getForObject(\"http://user-service/users/1\", User.class);"
              }
            },
            {
              "question": "What is the difference between @RestController and @Controller?",
              "answer": "- @RestController: combines @Controller and @ResponseBody, used for REST APIs\n- @Controller: used for MVC with view templates",
              "code": null
            },
            {
              "question": "How do you perform code quality analysis in your projects?",
              "answer": "Using SonarQube for static code analysis to identify code smells, bugs, and security vulnerabilities.",
              "code": null
            },
            {
              "question": "What is the difference between authentication and authorization?",
              "answer": "- Authentication: verifying the identity of a user\n- Authorization: verifying what resources the authenticated user can access",
              "code": null
            },
            {
              "question": "How do you scale your application?",
              "answer": "- Horizontal scaling: adding more instances\n- Vertical scaling: adding more resources (CPU, memory)\n- Tools like Kubernetes help manage scaling",
              "code": null
            },
            {
              "question": "What are profiles in Spring Boot and how do you use them?",
              "answer": "Profiles configure different environments (dev, test, prod). Use application-{profile}.properties files.",
              "code": {
                "language": "properties",
                "content": "# application-dev.properties\nspring.datasource.url=jdbc:h2:mem:devdb\n\n# application-prod.properties\nspring.datasource.url=jdbc:mysql://localhost/proddb"
              }
            }
          ]
        },
        {
          "name": "React Advanced",
          "questions": [
            {
              "question": "What is middleware in ReactJS and how do you use it?",
              "answer": "Middleware extends Redux store capabilities between dispatching an action and it reaching the reducer.",
              "code": {
                "language": "javascript",
                "content": "const loggerMiddleware = store => next => action => {\n    console.log('Dispatching:', action);\n    let result = next(action);\n    console.log('Next state:', store.getState());\n    return result;\n};"
              }
            },
            {
              "question": "Explain Context API and Redux. How do they differ?",
              "answer": "- Context API: built-in, best for small-medium apps\n- Redux: external library, best for large apps with complex state management — a predictable state container",
              "code": null
            },
            {
              "question": "How do you write unit tests in React?",
              "answer": "Using Jest and React Testing Library.",
              "code": {
                "language": "jsx",
                "content": "import { render, screen } from '@testing-library/react';\ntest('renders learn react link', () => {\n    render(<App />);\n    const linkElement = screen.getByText(/learn react/i);\n    expect(linkElement).toBeInTheDocument();\n});"
              }
            },
            {
              "question": "Have you worked on reusable components in React? Give an example.",
              "answer": "Yes — a Button component reused across the application.",
              "code": {
                "language": "jsx",
                "content": "const Button = ({ label, onClick }) => (\n    <button onClick={onClick}>{label}</button>\n);"
              }
            },
            {
              "question": "What is a Higher-Order Component (HoC) and how do you use it?",
              "answer": "A HoC is a function taking a component and returning a new component. It is used for reusing component logic.",
              "code": {
                "language": "jsx",
                "content": "const withLogging = WrappedComponent => {\n    return class extends React.Component {\n        componentDidMount() { console.log('Component mounted'); }\n        render() { return <WrappedComponent {...this.props} />; }\n    };\n};"
              }
            }
          ]
        }
      ],
      "questionCount": 20
    }
  ]
};
