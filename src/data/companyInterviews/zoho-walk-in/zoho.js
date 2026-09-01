// AUTO-GENERATED file — company-wise interview data.
// Source: ZOHO (walk_in) interview document(s).
// Regenerate with:  node scripts/rebuild-zoho.mjs

export const company = {
  "id": "zoho-walk-in",
  "name": "ZOHO (walk_in)",
  "interviews": [
    {
      "name": "Zoho Walk-in Interview",
      "questionCount": 14,
      "rounds": [
        {
          "name": "Coding Round 1: Factorial Sum",
          "questions": [
            {
              "question": "Given a number, find the sum of the factorials of its digits without recalculating previously computed factorials.",
              "answer": "Input: 145\nOutput: 1! + 4! + 5! = 1 + 24 + 120 = 145\n\n✅ Avoids recalculating factorial using a HashMap.",
              "code": {
                "language": "java",
                "content": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class FactorialSum {\n    private static final Map<Integer, Integer> factorialCache = new HashMap<>();\n\n    public static void main(String[] args) {\n        int num = 145;\n        System.out.println(\"Factorial Sum: \" + factorialSum(num));\n    }\n\n    public static int factorialSum(int num) {\n        int sum = 0;\n        while (num > 0) {\n            int digit = num % 10;\n            sum += factorial(digit);\n            num /= 10;\n        }\n        return sum;\n    }\n\n    private static int factorial(int n) {\n        if (!factorialCache.containsKey(n)) {\n            factorialCache.put(n, (n == 0 || n == 1) ? 1 : n * factorial(n - 1));\n        }\n        return factorialCache.get(n);\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Coding Round 2: Character Occurrence Sorting",
          "questions": [
            {
              "question": "Given a string, count the occurrences of each character and sort by frequency in descending order.",
              "answer": "Input: \"zoho\"\nOutput: \"o:2, z:1, h:1\"\n\n✅ Uses Java Streams for efficient sorting and counting.",
              "code": {
                "language": "java",
                "content": "import java.util.*;\nimport java.util.stream.Collectors;\n\npublic class CharacterFrequencySort {\n    public static void main(String[] args) {\n        String input = \"zoho\";\n        System.out.println(sortByFrequency(input));\n    }\n\n    public static String sortByFrequency(String s) {\n        Map<Character, Long> frequencyMap = s.chars()\n                .mapToObj(c -> (char) c)\n                .collect(Collectors.groupingBy(c -> c, Collectors.counting()));\n\n        return frequencyMap.entrySet().stream()\n                .sorted((a, b) -> Long.compare(b.getValue(), a.getValue()))  // Sort by frequency descending\n                .map(e -> e.getKey() + \":\" + e.getValue())\n                .collect(Collectors.joining(\", \"));\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Coding Round 3: Matrix Rotation Validation",
          "questions": [
            {
              "question": "Check if a given matrix is a rotated version of itself.",
              "answer": "Valid Rotation:\n[\n  [1, 2, 3]\n  [3, 1, 2]\n  [2, 3, 1]\n]\n\nInvalid Rotation:\n[\n  [1, 2, 3]\n  [3, 1, 2]\n  [1, 2, 3]\n]\n\n✅ Checks each row's rotation efficiently.",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\n\npublic class MatrixRotation {\n    public static void main(String[] args) {\n        int[][] matrix1 = {\n                {1, 2, 3},\n                {3, 1, 2},\n                {2, 3, 1}\n        };\n\n        int[][] matrix2 = {\n                {1, 2, 3},\n                {3, 1, 2},\n                {1, 2, 3}\n        };\n\n        System.out.println(isRotatedMatrix(matrix1)); // true\n        System.out.println(isRotatedMatrix(matrix2)); // false\n    }\n\n    public static boolean isRotatedMatrix(int[][] matrix) {\n        int n = matrix.length;\n        for (int i = 1; i < n; i++) {\n            if (!Arrays.equals(matrix[i], rotateRight(matrix[i - 1]))) {\n                return false;\n            }\n        }\n        return Arrays.equals(matrix[0], rotateRight(matrix[n - 1]));\n    }\n\n    private static int[] rotateRight(int[] row) {\n        int[] result = new int[row.length];\n        for (int i = 0; i < row.length; i++) {\n            result[(i + 1) % row.length] = row[i];\n        }\n        return result;\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Coding Round 4: Cipher Text Encryption",
          "questions": [
            {
              "question": "Encrypt a given string by shifting characters forward based on a given number.",
              "answer": "Input: (\"zoho\", 2)\nOutput: \"bqjq\"\n\n✅ Uses a character-by-character shift with a wrap-around alphabet.",
              "code": {
                "language": "java",
                "content": "public class CipherText {\n    public static void main(String[] args) {\n        String input = \"zoho\";\n        int shift = 2;\n        System.out.println(encrypt(input, shift));\n    }\n\n    public static String encrypt(String text, int shift) {\n        StringBuilder encrypted = new StringBuilder();\n\n        for (char ch : text.toCharArray()) {\n            if (Character.isLetter(ch)) {\n                char base = Character.isUpperCase(ch) ? 'A' : 'a';\n                encrypted.append((char) ((ch - base + shift) % 26 + base));\n            } else {\n                encrypted.append(ch);\n            }\n        }\n        return encrypted.toString();\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Coding Round 5: Zig-Zag String Transformation",
          "questions": [
            {
              "question": "Given a string and number of rows, convert it into a Zig-Zag pattern.",
              "answer": "Input: \"PAYPALISHIRING\", Rows = 3\nOutput: \"PAHNAPLSIIGYIR\"\n\n✅ Uses an efficient approach with StringBuilder arrays.",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\nimport java.util.stream.Collectors;\n\npublic class ZigZagConversion {\n    public static void main(String[] args) {\n        String s = \"PAYPALISHIRING\";\n        int numRows = 3;\n        System.out.println(convertZigZag(s, numRows));\n    }\n\n    public static String convertZigZag(String s, int numRows) {\n        if (numRows == 1) return s;\n\n        StringBuilder[] rows = new StringBuilder[numRows];\n        for (int i = 0; i < numRows; i++) {\n            rows[i] = new StringBuilder();\n        }\n\n        int i = 0, step = 1;\n        for (char c : s.toCharArray()) {\n            rows[i].append(c);\n            if (i == 0) step = 1;\n            if (i == numRows - 1) step = -1;\n            i += step;\n        }\n\n        return Arrays.stream(rows).map(StringBuilder::toString).collect(Collectors.joining());\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Database Round: SQL & Data Modeling",
          "questions": [
            {
              "question": "Explain data flow in a full-stack application (frontend → backend → database).",
              "answer": "Typical flow:\n- User interacts with the React/HTML frontend\n- Frontend issues an HTTP request (GET/POST) to the backend\n- Spring Boot controller receives the request, validates it, and calls the service layer\n- Service layer applies business logic and queries the database via JPA/JDBC\n- Result is mapped to a DTO and returned as JSON\n- Frontend renders the response",
              "code": null
            },
            {
              "question": "Write a SQL query to fetch all employees in the HR department.",
              "answer": "Example:",
              "code": {
                "language": "sql",
                "content": "SELECT * FROM employees WHERE department = 'HR';"
              }
            },
            {
              "question": "Fetch data from multiple tables using a JOIN.",
              "answer": "Example Using JOIN:",
              "code": {
                "language": "sql",
                "content": "SELECT e.name, d.department_name\nFROM employees e\nJOIN departments d ON e.department_id = d.id;"
              }
            },
            {
              "question": "Explain the difference between a Primary Key and a Foreign Key.",
              "answer": "- Primary Key: Unique identifier in a table (cannot be NULL, only one per table).\n- Foreign Key: References another table's primary key (used to establish relationships).",
              "code": null
            },
            {
              "question": "List the types of SQL joins with an example.",
              "answer": "Example using INNER JOIN and LEFT JOIN:",
              "code": {
                "language": "sql",
                "content": "-- INNER JOIN\nSELECT e.name, d.department_name\nFROM employees e\nINNER JOIN departments d ON e.department_id = d.id;\n\n-- LEFT JOIN\nSELECT e.name, d.department_name\nFROM employees e\nLEFT JOIN departments d ON e.department_id = d.id;"
              }
            },
            {
              "question": "Compare Subqueries vs Joins — when would you use each?",
              "answer": "- Joins are used for merging tables and are generally faster because the database engine can optimise them.\n- Subqueries are nested queries (used inside WHERE/SELECT) and are helpful for step-by-step filtering or when the result of one query feeds another.\n\n✅ Database concepts covered efficiently.",
              "code": null
            }
          ]
        },
        {
          "name": "HR Round: Package & Cultural Fit",
          "questions": [
            {
              "question": "What is your expected package?",
              "answer": "Discuss based on current CTC, market standards, role scope, and skill set. Be realistic and justify with research.",
              "code": null
            },
            {
              "question": "How do you keep up with new technologies?",
              "answer": "Suggested approach:\n- Follow official docs and release notes\n- Read tech blogs and newsletters (e.g., Baeldung, InfoQ, DZone)\n- Build small POCs / side projects\n- Take online courses (Udemy, Coursera, Pluralsight)\n- Attend meetups / conferences and engage with the community",
              "code": null
            },
            {
              "question": "Tell me about your college life and how you got your first job.",
              "answer": "Talk about:\n- Academic highlights and projects\n- Extracurriculars or leadership roles\n- Internships / campus placements\n- How the first job shaped your technical foundation and work ethic",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 14
};
