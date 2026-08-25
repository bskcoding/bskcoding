// AUTO-GENERATED file — company-wise interview data.
// Source: IBS Software (walk_in 2025, 2026) interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "ibs-software-walk-in-2025-2026",
  "name": "IBS Software (walk_in 2025, 2026)",
  "interviews": [
    {
      "name": "IBS (2026)",
      "questionCount": 46,
      "rounds": [
        {
          "name": "🧾 1st Round: Pen & Paper Coding",
          "questions": [
            {
              "question": "Max Chunks to Make Sorted",
              "answer": "",
              "code": null
            },
            {
              "question": "🔹 Problem Understanding",
              "answer": "We need to split an array into maximum number of chunks such that:\n* Sorting each chunk individually\n* Concatenating them\n👉 Results in a fully sorted array",
              "code": null
            },
            {
              "question": "🔹 Key Idea",
              "answer": "At any index i, if the maximum element till that index equals i,\nthen all elements before it are in correct position → we can form a chunk.",
              "code": null
            },
            {
              "question": "🔹 Code",
              "answer": "",
              "code": {
                "language": "java",
                "content": "public int maxChunksToSorted(int[] arr) {\n    int max = 0, chunks = 0;\n\n    for (int i = 0; i < arr.length; i++) {\n        max = Math.max(max, arr[i]);\n\n        if (max == i) {\n            chunks++;\n        }\n    }\n    return chunks;\n}"
              }
            },
            {
              "question": "🔹 Complexity",
              "answer": "* Time → O(n)\n* Space → O(1)",
              "code": null
            }
          ]
        },
        {
          "name": "💻 2nd Round: Technical",
          "questions": [
            {
              "question": "Project Overview & Orchestration",
              "answer": "",
              "code": null
            },
            {
              "question": "🔹 Architecture Flow",
              "answer": "Client → API Gateway → Microservices → Kafka → Database",
              "code": null
            },
            {
              "question": "🔹 Explanation",
              "answer": "* API Gateway handles routing, authentication, rate limiting\n* Microservices are independently deployable services\n* Kafka ensures asynchronous communication\n* Reactive WebFlux used for non-blocking operations",
              "code": null
            },
            {
              "question": "🔹 Why Reactive?",
              "answer": "* Handles high traffic\n* Better resource utilization\n* Non-blocking I/O",
              "code": null
            },
            {
              "question": "Group Strings by Frequency & Find Unique",
              "answer": "",
              "code": null
            },
            {
              "question": "🔹 Problem",
              "answer": "Given a list of strings:\n* Count frequency\n* Return only unique elements",
              "code": null
            },
            {
              "question": "🔹 Approach",
              "answer": "Use groupingBy + counting",
              "code": null
            },
            {
              "question": "🔹 Code",
              "answer": "",
              "code": {
                "language": "java",
                "content": "Map<String, Long> freq = list.stream()\n    .collect(Collectors.groupingBy(\n        Function.identity(),\n        Collectors.counting()\n    ));\n\nList<String> unique = freq.entrySet().stream()\n    .filter(entry -> entry.getValue() == 1)\n    .map(Map.Entry::getKey)\n    .toList();"
              }
            },
            {
              "question": "🔹 Interview Tip",
              "answer": "* Return type → Map<String, Long>\n* Use case → analytics, logs, duplicate detection",
              "code": null
            }
          ]
        },
        {
          "name": "3. Two Threads Print 1–100 (Odd/Even)",
          "questions": [
            {
              "question": "🔹 Concept",
              "answer": "We use:\n* wait() → pause thread\n* notify() → wake other thread\n* synchronized → ensure mutual exclusion",
              "code": null
            },
            {
              "question": "🔹 Code",
              "answer": "",
              "code": {
                "language": "java",
                "content": "class NumberPrinter {\n    private int num = 1;\n\n    public synchronized void printOdd() throws InterruptedException {\n        while (num <= 100) {\n            if (num % 2 == 0) {\n                wait();\n            } else {\n                System.out.println(\"Odd: \" + num++);\n                notify();\n            }\n        }\n    }\n\n    public synchronized void printEven() throws InterruptedException {\n        while (num <= 100) {\n            if (num % 2 != 0) {\n                wait();\n            } else {\n                System.out.println(\"Even: \" + num++);\n                notify();\n            }\n        }\n    }\n}"
              }
            },
            {
              "question": "🔹 Key Points",
              "answer": "* Avoid race conditions\n* Thread coordination",
              "code": null
            },
            {
              "question": "Immutable Class",
              "answer": "",
              "code": null
            },
            {
              "question": "🔹 Rules",
              "answer": "* Class → final\n* Fields → private final\n* No setters\n* Defensive copy for mutable objects",
              "code": null
            },
            {
              "question": "🔹 Code",
              "answer": "",
              "code": {
                "language": "java",
                "content": "final class Employee {\n    private final String name;\n\n    public Employee(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}"
              }
            },
            {
              "question": "🔹 Why Immutable?",
              "answer": "* Thread-safe\n* Secure\n* Used in caching",
              "code": null
            },
            {
              "question": "Neural Networks",
              "answer": "",
              "code": null
            },
            {
              "question": "🔹 Explanation",
              "answer": "Neural Networks are models inspired by human brain:\n* Input Layer\n* Hidden Layers\n* Output Layer\nUsed in:\n* Image recognition\n* NLP\n* Predictions",
              "code": null
            },
            {
              "question": "MCP Service",
              "answer": "",
              "code": null
            },
            {
              "question": "🔹 Explanation",
              "answer": "Model Context Protocol:\n* Connects AI models to tools/APIs\n* Enables contextual reasoning",
              "code": null
            },
            {
              "question": "Generative AI",
              "answer": "",
              "code": null
            },
            {
              "question": "🔹 Explanation",
              "answer": "Generates:\n* Text (ChatGPT)\n* Code\n* Images\nUses:\n* Transformers\n* LLM models",
              "code": null
            }
          ]
        },
        {
          "name": "8. Multithreading Lifecycle",
          "questions": [
            {
              "question": "Kafka Internal Working",
              "answer": "",
              "code": null
            },
            {
              "question": "🔹 Flow",
              "answer": "Producer → Topic → Partition → Consumer",
              "code": null
            },
            {
              "question": "🔹 Important Concepts",
              "answer": "* Partition → parallelism\n* Offset → message position\n* Consumer Group → load balancing",
              "code": null
            },
            {
              "question": "Kafka Deep Concepts",
              "answer": "* Offsets stored per consumer group\n* Each partition consumed by one consumer in group\n* Enables fault tolerance",
              "code": null
            },
            {
              "question": "HashMap Internal Working",
              "answer": "",
              "code": null
            },
            {
              "question": "🔹 Structure",
              "answer": "* Array + LinkedList / Tree",
              "code": null
            },
            {
              "question": "🔹 Steps",
              "answer": "1. hash(key)\n2. find index\n3. store in bucket",
              "code": null
            },
            {
              "question": "Hash Collision",
              "answer": "When multiple keys map to same index\nHandled using chaining",
              "code": null
            },
            {
              "question": "HashMap Resize (20 → 2000)",
              "answer": "",
              "code": null
            },
            {
              "question": "🔹 Process",
              "answer": "* Load factor exceeds (0.75)\n* Capacity doubles\n* Rehashing happens",
              "code": null
            },
            {
              "question": "Production Issue Handling",
              "answer": "* Check logs\n* Monitor CPU/memory\n* Analyze API latency\n* Trace request flow",
              "code": null
            },
            {
              "question": "No Logs Scenario",
              "answer": "* Use APM tools\n* DB verification\n* Enable debug mode\n* Reproduce issue locally",
              "code": null
            },
            {
              "question": "JUnit",
              "answer": "Framework for writing unit tests",
              "code": null
            },
            {
              "question": "Why JUnit?",
              "answer": "* Early bug detection\n* Regression testing\n* Improves code quality",
              "code": null
            }
          ]
        },
        {
          "name": "👨‍💼 4th Round: Manager Round",
          "questions": [
            {
              "question": "IBS Products",
              "answer": "* Airline systems\n* Travel booking\n* Logistics platforms",
              "code": null
            },
            {
              "question": "Project Flow",
              "answer": "Requirement → Design → Development → Testing → Deployment",
              "code": null
            },
            {
              "question": "AI Usage",
              "answer": "* Chatbots\n* Automation\n* Smart recommendations",
              "code": null
            },
            {
              "question": "Why Developers in AI Era?",
              "answer": "* Design architecture\n* Handle business logic\n* Integrate AI\n* Maintain systems",
              "code": null
            }
          ]
        },
        {
          "name": "🧑‍💼 5th Round: HR Round",
          "questions": [
            {
              "question": "Pending",
              "answer": "",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 46
};
