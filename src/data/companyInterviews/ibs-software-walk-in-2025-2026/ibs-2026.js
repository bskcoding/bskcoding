// AUTO-GENERATED file — company-wise interview data.
// Source: IBS Software (walk_in 2025, 2026) interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "ibs-software-walk-in-2025-2026",
  "name": "IBS Software (walk_in 2025, 2026)",
  "interviews": [
    {
      "name": "IBS (2026)",
      "rounds": [
        {
          "name": "First Round: Pen & Paper Coding",
          "questions": [
            {
              "question": "Max Chunks to Make Sorted",
              "answer": "Split the array into the maximum number of chunks such that sorting each chunk individually and concatenating them results in a fully sorted array.\n- Key idea: at any index i, if the maximum element till that index equals i, a chunk can be formed.\n- Time: O(n), Space: O(1)",
              "code": {
                "language": "java",
                "content": "public int maxChunksToSorted(int[] arr) {\n    int max = 0, chunks = 0;\n\n    for (int i = 0; i < arr.length; i++) {\n        max = Math.max(max, arr[i]);\n\n        if (max == i) {\n            chunks++;\n        }\n    }\n    return chunks;\n}"
              }
            }
          ]
        },
        {
          "name": "Second Round: Technical Interview",
          "questions": [
            {
              "question": "Project Overview & Orchestration",
              "answer": "Architecture flow: Client → API Gateway → Microservices → Kafka → Database.\n- API Gateway handles routing, authentication, and rate limiting.\n- Microservices are independently deployable services.\n- Kafka ensures asynchronous communication.\n- Reactive WebFlux is used for non-blocking operations — handles high traffic, better resource utilization, non-blocking I/O.",
              "code": null
            },
            {
              "question": "Group Strings by Frequency & Find Unique",
              "answer": "Use groupingBy with counting to get the frequency map, then filter entries with count 1 to get unique elements.\n- Return type → Map<String, Long>\n- Use cases → analytics, logs, duplicate detection",
              "code": {
                "language": "java",
                "content": "Map<String, Long> freq = list.stream()\n    .collect(Collectors.groupingBy(\n        Function.identity(),\n        Collectors.counting()\n    ));\n\nList<String> unique = freq.entrySet().stream()\n    .filter(entry -> entry.getValue() == 1)\n    .map(Map.Entry::getKey)\n    .toList();"
              }
            },
            {
              "question": "Two Threads Print 1–100 (Odd/Even)",
              "answer": "Use synchronized with wait() and notify() for thread coordination — one thread prints odd numbers, the other prints even numbers.\n- wait() → pause the thread\n- notify() → wake the other thread\n- synchronized → ensures mutual exclusion\n- Avoids race conditions through thread coordination",
              "code": {
                "language": "java",
                "content": "class NumberPrinter {\n    private int num = 1;\n\n    public synchronized void printOdd() throws InterruptedException {\n        while (num <= 100) {\n            if (num % 2 == 0) {\n                wait();\n            } else {\n                System.out.println(\"Odd: \" + num++);\n                notify();\n            }\n        }\n    }\n\n    public synchronized void printEven() throws InterruptedException {\n        while (num <= 100) {\n            if (num % 2 != 0) {\n                wait();\n            } else {\n                System.out.println(\"Even: \" + num++);\n                notify();\n            }\n        }\n    }\n}"
              }
            },
            {
              "question": "Immutable Class",
              "answer": "Rules:\n- Class → final\n- Fields → private final\n- No setters\n- Defensive copy for mutable objects\nBenefits: thread-safe, secure, used in caching.",
              "code": {
                "language": "java",
                "content": "final class Employee {\n    private final String name;\n\n    public Employee(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}"
              }
            },
            {
              "question": "Explain Neural Networks",
              "answer": "Neural Networks are models inspired by the human brain: Input Layer, Hidden Layers, Output Layer.\n- Used in image recognition, NLP, and predictions.\n- Uses activation functions and backpropagation for learning.",
              "code": null
            },
            {
              "question": "What is MCP Service?",
              "answer": "Model Context Protocol connects AI models to tools/APIs, enabling contextual reasoning and tool integration.",
              "code": null
            },
            {
              "question": "What is Generative AI?",
              "answer": "Generative AI generates text (ChatGPT), code, images, and audio using Transformers and LLM models.\n- Examples: GPT, DALL-E, Stable Diffusion.",
              "code": null
            },
            {
              "question": "Multithreading Lifecycle",
              "answer": "Five states:\n- New — thread created but not started\n- Runnable — ready to run\n- Running — currently executing\n- Waiting — waiting for notification\n- Terminated — completed execution",
              "code": null
            },
            {
              "question": "Kafka Internal Working",
              "answer": "Producer → Topic → Partition → Consumer.\n- Partitions provide parallelism\n- Offset is the message position\n- Consumer Group enables load balancing and fault tolerance",
              "code": null
            },
            {
              "question": "Kafka Deep Concepts",
              "answer": "- Offsets are stored per consumer group\n- Each partition is consumed by one consumer in a group\n- Enables fault tolerance, replay capability, and parallel processing",
              "code": null
            },
            {
              "question": "HashMap Internal Working",
              "answer": "Structure: Array + LinkedList/Tree.\n- hash(key) is computed using hashCode()\n- Index is found using hash & (n-1)\n- Entry is stored in the bucket\n- Collisions are handled using chaining",
              "code": null
            },
            {
              "question": "What is Hash Collision and how is it handled?",
              "answer": "Hash collision occurs when multiple keys map to the same index.\n- Handled using chaining (linked list, which treeifies after a threshold of 8).",
              "code": null
            },
            {
              "question": "HashMap Resize (20 → 2000)",
              "answer": "When the load factor exceeds 0.75, capacity doubles and rehashing occurs.\n- All entries are redistributed to the new buckets.",
              "code": null
            }
          ]
        },
        {
          "name": "Third Round: Architect Round",
          "questions": [
            {
              "question": "How do you handle Production Issues?",
              "answer": "- Check application logs for errors\n- Monitor CPU/memory usage\n- Analyze API latency and response times\n- Trace request flow using distributed tracing tools",
              "code": null
            },
            {
              "question": "How to handle Production Issues when no logs are available?",
              "answer": "- Use APM tools (New Relic, Datadog)\n- Verify database state\n- Enable debug mode temporarily\n- Reproduce issue locally\n- Check infrastructure metrics",
              "code": null
            },
            {
              "question": "What is JUnit?",
              "answer": "JUnit is a framework for writing unit tests in Java.\n- Provides annotations like @Test, @BeforeEach, @AfterEach for test lifecycle",
              "code": {
                "language": "java",
                "content": "@Test\npublic void testAddition() {\n    assertEquals(5, calculator.add(2, 3));\n}"
              }
            },
            {
              "question": "Why JUnit?",
              "answer": "- Early bug detection\n- Regression testing\n- Improves code quality\n- Supports CI/CD pipelines\n- Provides test coverage metrics",
              "code": null
            }
          ]
        },
        {
          "name": "Fourth Round: Manager Round",
          "questions": [
            {
              "question": "What are IBS Products?",
              "answer": "IBS Software products include:\n- iCargo — air cargo management\n- iFly — passenger services\n- iTravel — travel booking platform\n- Logistics solutions for airlines",
              "code": null
            },
            {
              "question": "Explain your Project Flow.",
              "answer": "Requirement Gathering → Design → Development → Testing → Deployment → Monitoring → Maintenance.\n- Each stage has specific deliverables and reviews",
              "code": null
            },
            {
              "question": "How is AI used in your projects?",
              "answer": "- Chatbots for customer support\n- Automation of repetitive tasks\n- Smart recommendations for users\n- Predictive analytics for business decisions",
              "code": null
            },
            {
              "question": "Why are developers still needed in the AI era?",
              "answer": "- Design system architecture\n- Handle business logic and rules\n- Integrate AI models into applications\n- Maintain and debug systems\n- Ensure security and compliance",
              "code": null
            }
          ]
        },
        {
          "name": "Fifth Round: HR Round",
          "questions": [
            {
              "question": "Tell me about yourself.",
              "answer": "I am a Java Full Stack Developer with 3+ years of experience.\n- Specializes in Spring Boot, Microservices, Hibernate, and ReactJS\n- Worked on customer registration systems and transaction data handling",
              "code": null
            },
            {
              "question": "Why do you want to join IBS Software?",
              "answer": "IBS Software is a leader in airline and travel technology.\n- Excited about working on innovative solutions in the aviation industry\n- Opportunity to contribute to the company's growth",
              "code": null
            },
            {
              "question": "What are your salary expectations?",
              "answer": "- Based on experience and market standards, looking for a competitive package\n- Flexible and happy to discuss further based on the role",
              "code": null
            },
            {
              "question": "Where do you see yourself in 5 years?",
              "answer": "I see myself as a technical lead.\n- Contributing to architecture decisions\n- Mentoring junior developers\n- Driving technical excellence",
              "code": null
            },
            {
              "question": "What are your strengths and weaknesses?",
              "answer": "- Strengths: Quick learner, problem-solving skills, strong technical foundation, good team player\n- Weakness: Sometimes focus too much on perfection; working on delegating tasks better",
              "code": null
            },
            {
              "question": "Why are you looking for a job change?",
              "answer": "- Looking for better growth opportunities, challenging projects, and a chance to work with new technologies\n- IBS Software offers the perfect environment for professional growth",
              "code": null
            }
          ]
        }
      ],
      "questionCount": 28
    }
  ],
  "questionCount": 28
};
