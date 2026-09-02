// AUTO-GENERATED file — company-wise interview data.
// Source: IBS Software (walk_in 2025, 2026) interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "ibs-software-walk-in-2025-2026",
  "name": "IBS Software (walk_in 2025, 2026)",
  "interviews": [
    {
      "name": "IBS (2025)",
      "rounds": [
        {
          "name": "First Round: Pen & Paper Coding",
          "questions": [
            {
              "question": "Given an array, find the number of target element pairs whose sum equals the target value.",
              "answer": "Use a HashSet to track seen numbers.\n- For each number, check if its complement (target - num) exists in the set.\n- Count a pair whenever the complement is found.\n- Time: O(n), Space: O(n)\n- Example: arr=[1,3,4,5,1,5,0,-1], target=4 → Pairs: (1,3), (4,0), (5,-1) → Output: 3",
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
              "question": "Given an array, replace each element with the next largest element. If no larger element exists, replace it with -1.",
              "answer": "Use a Stack to find the next greater element by traversing from right to left.\n- For each element, pop all smaller or equal elements from the stack.\n- The top of the stack (if any) is the next greater element.\n- If the stack is empty, the answer is -1.\n- Time: O(n), Space: O(n)\n- Example: Input [1,2,0,4,11,0,1] → Output [2,4,4,11,-1,1,-1]",
              "code": {
                "language": "java",
                "content": "import java.util.*;\n\npublic class NextGreaterElement {\n    public static int[] nextGreater(int[] arr) {\n        int n = arr.length;\n        int[] result = new int[n];\n        Stack<Integer> stack = new Stack<>();\n\n        for (int i = n - 1; i >= 0; i--) {\n            while (!stack.isEmpty() && stack.peek() <= arr[i]) {\n                stack.pop();\n            }\n            result[i] = stack.isEmpty() ? -1 : stack.peek();\n            stack.push(arr[i]);\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 0, 4, 11, 0, 1};\n        System.out.println(Arrays.toString(nextGreater(arr))); // Output: [2,4,4,11,-1,1,-1]\n    }\n}"
              }
            },
            {
              "question": "Given a list of strings, separate palindromes and non-palindromes, then sort each group by length.",
              "answer": "Use Streams with groupingBy on a palindrome check, then sort each group by length.\n- Classify each word as \"Palindromes\" or \"Non-Palindromes\".\n- Use collectingAndThen to sort each group with Comparator.comparingInt(String::length).\n- Example input: \"hi oo how are your level comes\"\n- Output — Palindromes: [oo, level], Non-Palindromes: [hi, how, are, your, comes]",
              "code": {
                "language": "java",
                "content": "import java.util.*;\nimport java.util.stream.Collectors;\n\npublic class PalindromeSort {\n    public static void main(String[] args) {\n        String input = \"hi oo how are your level comes\";\n        Map<String, List<String>> result = Arrays.stream(input.split(\" \"))\n                .collect(Collectors.groupingBy(\n                        word -> word.equals(new StringBuilder(word).reverse().toString())\n                                ? \"Palindromes\" : \"Non-Palindromes\",\n                        Collectors.collectingAndThen(\n                                Collectors.toList(),\n                                list -> list.stream()\n                                        .sorted(Comparator.comparingInt(String::length))\n                                        .collect(Collectors.toList())\n                        )\n                ));\n\n        System.out.println(result);\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Third Round: Technical Interview (Java & Database)",
          "questions": [
            {
              "question": "How can you optimize an SQL query for better performance?",
              "answer": "- Use indexes on frequently searched columns.\n- Avoid SELECT * and fetch only required columns.\n- Use JOINs efficiently and avoid unnecessary subqueries.\n- Use EXPLAIN PLAN to analyze query execution.",
              "code": {
                "language": "sql",
                "content": "CREATE INDEX idx_employee_name ON employees(name);\n\nEXPLAIN SELECT name, salary FROM employees WHERE department = 'IT';"
              }
            },
            {
              "question": "When should you use NoSQL instead of SQL?",
              "answer": "- When working with unstructured or semi-structured data.\n- When scalability is more important than ACID compliance.\n- For real-time applications like chat apps and recommendation systems.",
              "code": null
            },
            {
              "question": "What are the best indexing strategies for improving database performance?",
              "answer": "- Use B-Tree indexes for range queries.\n- Use Hash indexes for exact lookups.\n- Use composite indexes for multi-column searches.",
              "code": {
                "language": "sql",
                "content": "CREATE INDEX idx_multi ON employees(department, salary, hire_date);"
              }
            },
            {
              "question": "Which Java Collection is best for group by operations?",
              "answer": "LinkedHashMap<String, List<String>> — it maintains insertion order and preserves the grouping order.",
              "code": {
                "language": "java",
                "content": "Map<String, List<String>> result = new LinkedHashMap<>();"
              }
            },
            {
              "question": "Why do we use List instead of ArrayList when declaring a variable?",
              "answer": "- List is an interface that provides flexibility to switch implementations (ArrayList, LinkedList, etc.).\n- Helps in writing loosely coupled and maintainable code.\n- If later a LinkedList or Vector is needed, only the object needs to change, not the variable type.",
              "code": {
                "language": "java",
                "content": "List<Integer> ans = new ArrayList<>(); // Can change to LinkedList later"
              }
            }
          ]
        },
        {
          "name": "Fourth Round: Managerial Interview",
          "questions": [
            {
              "question": "What are your strengths and weaknesses?",
              "answer": "- Strengths: Problem-solving, adaptability, teamwork, quick learner.\n- Weaknesses: Perfectionism (but working on prioritization and delegation).",
              "code": null
            },
            {
              "question": "How do you learn new concepts?",
              "answer": "- Hands-on practice, online courses (Udemy, Coursera), reading documentation, and contributing to open-source projects.",
              "code": null
            },
            {
              "question": "Discussion about IBS Software projects.",
              "answer": "- IBS Software specializes in airline and travel technology.\n- Their products include iCargo (air cargo management), iFly (passenger services), and travel booking platforms.",
              "code": null
            }
          ]
        },
        {
          "name": "Fifth Round: HR Interview",
          "questions": [
            {
              "question": "What is your expected package?",
              "answer": "- Based on experience and market standards, I am looking for a competitive package.\n- I'm flexible and happy to discuss further.",
              "code": null
            },
            {
              "question": "How do you keep up with new technologies?",
              "answer": "- Reading tech blogs, taking online courses, working on personal projects, and contributing to open-source.",
              "code": null
            },
            {
              "question": "Tell me about your college life and how you got your first job.",
              "answer": "- Share an interesting story highlighting key learning experiences and how you landed your first opportunity.",
              "code": null
            }
          ]
        }
      ],
      "questionCount": 14
    }
  ],
  "questionCount": 14
};
