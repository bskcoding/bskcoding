// AUTO-GENERATED file — company-wise interview data.
// Source: HCL Technologies interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "hcl",
  "name": "HCL",
  "interviews": [
    {
      "name": "HCL L1 Interview",
      "questionCount": 10,
      "rounds": [
        {
          "name": "Project & Architecture",
          "questions": [
            {
              "question": "Brief about the project.",
              "answer": "The project is focused on developing a distributed banking application that handles real-time transactions using a microservices architecture. It includes features like customer registration, account management, and secure transaction processing. Technologies like Spring Boot, Kafka, Docker, and React are used, ensuring high scalability and reliability.",
              "code": null
            },
            {
              "question": "Explain Kafka architecture.",
              "answer": "Kafka architecture consists of Producers, Consumers, Brokers, Topics, and Zookeeper.\n- Producers send data to Kafka topics, while Consumers read data from these topics\n- Kafka Brokers manage the storage and retrieval of messages\n- Zookeeper handles metadata, including leader election and partition management\n- Together this ensures Kafka's fault tolerance and distributed nature",
              "code": null
            },
            {
              "question": "What is Jenkins and how do you use it?",
              "answer": "Jenkins is an open-source automation server used for continuous integration and continuous delivery (CI/CD).\n- It automates the build, test, and deployment processes, enabling faster and more reliable software delivery\n- I use Jenkins to trigger automated builds on code commits, run tests, and deploy applications to different environments",
              "code": null
            }
          ]
        },
        {
          "name": "Java Features",
          "questions": [
            {
              "question": "What are the features of Java 17?",
              "answer": "Java 17 includes several new features:\n- Sealed classes\n- Pattern matching for switch (preview)\n- New macOS rendering pipeline\n- Enhanced pseudo-random number generators\n- Removal of the experimental AOT and JIT compilers\n- Long-term support (LTS) for stability in enterprise applications",
              "code": null
            },
            {
              "question": "What are the features of Java 8?",
              "answer": "Java 8 introduced several major features:\n- Lambda expressions\n- The Stream API for functional-style operations on collections\n- The new Date and Time API (java.time)\n- Default methods in interfaces\n- The Optional class to handle null values more gracefully",
              "code": null
            }
          ]
        },
        {
          "name": "Coding Questions",
          "questions": [
            {
              "question": "Create a single thread in Java using different approaches.",
              "answer": "Three ways to create threads: extending the Thread class, implementing the Runnable interface, or using ExecutorService.",
              "code": {
                "language": "java",
                "content": "// Using Thread class\nThread thread1 = new Thread() {\n    public void run() { System.out.println(\"Thread using Thread class\"); }\n};\nthread1.start();\n\n// Using Runnable interface\nRunnable runnable = () -> System.out.println(\"Thread using Runnable\");\nThread thread2 = new Thread(runnable);\nthread2.start();\n\n// Using ExecutorService\nExecutorService executor = Executors.newSingleThreadExecutor();\nexecutor.submit(() -> System.out.println(\"Thread using ExecutorService\"));\nexecutor.shutdown();"
              }
            },
            {
              "question": "Create a text input and password input in React and display them when a button is clicked.",
              "answer": "Use useState for text and password state, and display them on button click.",
              "code": {
                "language": "jsx",
                "content": "import React, { useState } from 'react';\n\nfunction App() {\n    const [text, setText] = useState('');\n    const [password, setPassword] = useState('');\n    const [show, setShow] = useState(false);\n\n    return (\n        <div>\n            <input type=\"text\" placeholder=\"Enter text\" value={text} onChange={(e) => setText(e.target.value)} />\n            <input type=\"password\" placeholder=\"Enter password\" value={password} onChange={(e) => setPassword(e.target.value)} />\n            <button onClick={() => setShow(true)}>Show</button>\n            {show && <div><p>Text: {text}</p><p>Password: {password}</p></div>}\n        </div>\n    );\n}\n\nexport default App;"
              }
            }
          ]
        },
        {
          "name": "General Questions",
          "questions": [
            {
              "question": "Explain your weekly tasks.",
              "answer": "My weekly tasks typically involve developing new features, fixing bugs, and optimizing existing code for better performance.\n- Collaborate with team members in daily stand-up meetings\n- Write unit and integration tests\n- Participate in code reviews\n- Contribute to the continuous integration pipeline and ensure smooth deployments",
              "code": null
            },
            {
              "question": "What is Agile methodology?",
              "answer": "Agile methodology is an iterative approach to software development and project management.\n- Emphasizes collaboration, flexibility, and customer feedback\n- Allows teams to deliver small, functional pieces of software incrementally\n- Promotes adaptive planning, evolutionary development, early delivery, and continuous improvement",
              "code": null
            },
            {
              "question": "What is Jira and how do you use it?",
              "answer": "Jira is a project management tool used for tracking tasks, bugs, and issues.\n- Supports Agile methodologies like Scrum and Kanban\n- I use Jira to manage and prioritize tasks, track progress through sprints, create and assign issues, and document project workflows\n- Jira also integrates with CI/CD pipelines for automated updates",
              "code": null
            }
          ]
        }
      ]
    }
  ]
};
