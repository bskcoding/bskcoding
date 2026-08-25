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
    }
  ],
  "questionCount": 18
};
