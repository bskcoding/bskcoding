// AUTO-GENERATED file — company-wise interview data.
// Source: IBS Software (walk_in 2025, 2026) interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "ibs-software-walk-in-2025-2026",
  "name": "IBS Software (walk_in 2025, 2026)",
  "interviews": [
    {
      "name": "IBS (2025)",
      "questionCount": 18,
      "rounds": [
        {
          "name": "First Round: Pen and Paper (Coding Question)",
          "questions": [
            {
              "question": "Question 1:",
              "answer": "Given an array, find the number of target element pairs whose sum equals the target value.\nPairs: (1,3), (4,0), (5,-1) → Output: 3",
              "code": {
                "language": "java",
                "content": "import java.util.*;\n\npublic class TargetPairCount {\n    public static int countPairs(int[] arr, int target) {\n        Set<Integer> seen = new HashSet<>();\n        int count = 0;\n        for (int num : arr) {\n            if (seen.contains(target - num)) {\n                count++;\n            }\n            seen.add(num);\n        }\n        return count;\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 3, 4, 5, 1, 5, 0, -1};\n        int target = 4;\n        System.out.println(countPairs(arr, target)); // Output: 3\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Second Round: Technical Interview",
          "questions": [
            {
              "question": "Question 2:",
              "answer": "Given an array, replace each element with the next largest element. If no larger element exists, replace it with -1.\nInput: [1,2,0,4,11,0,1]\nOutput: [2,4,4,11,-1,1,-1]",
              "code": {
                "language": "java",
                "content": "import java.util.*;\n\npublic class NextGreaterElement {\n    public static int[] nextGreater(int[] arr) {\n        int n = arr.length;\n        int[] result = new int[n];\n        Stack<Integer> stack = new Stack<>();\n\n        for (int i = n - 1; i >= 0; i--) {\n            while (!stack.isEmpty() && stack.peek() <= arr[i]) {\n                stack.pop();\n            }\n            result[i] = stack.isEmpty() ? -1 : stack.peek();\n            stack.push(arr[i]);\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 0, 4, 11, 0, 1};\n        System.out.println(Arrays.toString(nextGreater(arr))); // Output: [2,4,4,11,-1,1,-1]\n    }\n}"
              }
            },
            {
              "question": "Database Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "How can you optimize an SQL query for better performance?",
              "answer": "- Use indexes on frequently searched columns.\n- Avoid SELECT * and fetch only required columns.\n- Use JOINs efficiently and avoid unnecessary subqueries.\n- Use EXPLAIN PLAN to analyze query execution.",
              "code": null
            },
            {
              "question": "When should you use NoSQL instead of SQL?",
              "answer": "- When working with unstructured or semi-structured data.\n- When scalability is more important than ACID compliance.\n- For real-time applications like chat apps and recommendation systems.",
              "code": null
            },
            {
              "question": "What are the best indexing strategies for improving database performance?",
              "answer": "- Use B-Tree indexes for range queries.\n- Use Hash indexes for exact lookups.\nComposite indexes: for multi-column searches.",
              "code": null
            }
          ]
        },
        {
          "name": "Third Round: Technical Interview",
          "questions": [
            {
              "question": "Question 3:",
              "answer": "Given a list of strings, separate palindromes and non-palindromes, then sort each group by length.\nInput: \"hi oo how are your level comes\"",
              "code": {
                "language": "java",
                "content": "import java.util.*;\nimport java.util.stream.Collectors;\n\npublic class PalindromeSort {\n    public static void main(String[] args) {\n        String input = \"hi oo how are your level comes\";\n\n        Map<String, List<String>> result = Arrays.stream(input.split(\" \"))\n                .collect(Collectors.groupingBy(\n                        word -> word.equals(new StringBuilder(word).reverse().toString()) ? \"Palindromes\" : \"Non-Palindromes\",\n                        Collectors.collectingAndThen(\n                                Collectors.toList(),\n                                list -> list.stream()\n                                        .sorted(Comparator.comparingInt(String::length))\n                                        .collect(Collectors.toList())\n                        )\n                ));\n\n        System.out.println(result);\n    }\n}"
              }
            },
            {
              "question": "Database Question",
              "answer": "",
              "code": null
            },
            {
              "question": "Which Java Collection is best for this operation?",
              "answer": "Answer: LinkedHashMap<String, List<String>> (to maintain insertion order).",
              "code": null
            }
          ]
        },
        {
          "name": "Fourth Round: Managerial Interview",
          "questions": [
            {
              "question": "Question 4:",
              "answer": "Why do we use List instead of ArrayList when declaring a variable?\n- List<Integer> is an interface that provides flexibility to switch implementations (ArrayList, LinkedList, etc.).\n- Helps in writing loosely coupled and maintainable code.\n- If later a LinkedList or Vector is needed, only the object needs to change, not the variable type.",
              "code": {
                "language": "java",
                "content": "List<Integer> ans = new ArrayList<>();"
              }
            },
            {
              "question": "Behavioral Questions:",
              "answer": "",
              "code": null
            },
            {
              "question": "What are your strengths and weaknesses?",
              "answer": "- Strengths: Problem-solving, adaptability, teamwork.\n- Weaknesses: Perfectionism (but working on prioritization).",
              "code": null
            },
            {
              "question": "How do you learn new concepts?",
              "answer": "- Hands-on practice, online courses, and contributing to open-source projects.",
              "code": null
            },
            {
              "question": "Discussion about IBS Software projects.",
              "answer": "- Be prepared to discuss what you know about IBS Software and their work in the airline industry.",
              "code": null
            }
          ]
        },
        {
          "name": "Fifth Round: HR Interview",
          "questions": [
            {
              "question": "What is your expected package?",
              "answer": "- Research the industry standard and negotiate based on your experience.",
              "code": null
            },
            {
              "question": "How do you keep up with new technologies?",
              "answer": "- Reading tech blogs, taking online courses, working on projects.",
              "code": null
            },
            {
              "question": "Tell me about your college life and how you got your first job.",
              "answer": "- Share an interesting story or highlight a key learning experience.",
              "code": null
            },
            {
              "question": "Final Tips for the Interview",
              "answer": "✔ Write clean, efficient code and be ready to explain it.\n✔ Prepare database optimization strategies (SQL vs NoSQL).\n✔ Be confident in behavioral rounds and talk about real-life examples.",
              "code": null
            }
          ]
        }
      ]
    },
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
  "questionCount": 64
};
