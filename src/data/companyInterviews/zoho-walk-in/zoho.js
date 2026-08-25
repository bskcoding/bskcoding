// AUTO-GENERATED file — company-wise interview data.
// Source: ZOHO (walk_in) interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "zoho-walk-in",
  "name": "ZOHO (walk_in)",
  "interviews": [
    {
      "name": "zoho",
      "questionCount": 24,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "1st Round: Factorial Sum (Avoiding Repeated Calculations)",
              "answer": "",
              "code": null
            },
            {
              "question": "Given a number, find the sum of the factorials of its digits without recalculating previously computed factorials.",
              "answer": "Input: 145\nOutput: 1! + 4! + 5! = 1 + 24 + 120 = 145\n✅ Avoids recalculating factorial using a HashMap.",
              "code": {
                "language": "java",
                "content": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class FactorialSum {\n    private static final Map<Integer, Integer> factorialCache = new HashMap<>();\n\n    public static void main(String[] args) {\n        int num = 145;\n        System.out.println(\"Factorial Sum: \" + factorialSum(num));\n    }\n\n    public static int factorialSum(int num) {\n        int sum = 0;\n        while (num > 0) {\n            int digit = num % 10;\n            sum += factorial(digit);\n            num /= 10;\n        }\n        return sum;\n    }\n\n    private static int factorial(int n) {\n        if (!factorialCache.containsKey(n)) {\n            factorialCache.put(n, (n == 0 || n == 1) ? 1 : n * factorial(n - 1));\n        }\n        return factorialCache.get(n);\n    }\n}"
              }
            },
            {
              "question": "2nd Round: Character Occurrence Sorting",
              "answer": "",
              "code": null
            },
            {
              "question": "Given a string, count the occurrences of each character and sort by frequency in descending order.",
              "answer": "Input: \"zoho\"\nOutput: \"o:2, z:1, h:1\"\n✅ Uses Java Streams for efficient sorting and counting.",
              "code": {
                "language": "java",
                "content": "import java.util.*;\nimport java.util.stream.Collectors;\n\npublic class CharacterFrequencySort {\n    public static void main(String[] args) {\n        String input = \"zoho\";\n        System.out.println(sortByFrequency(input));\n    }\n\n    public static String sortByFrequency(String s) {\n        Map<Character, Long> frequencyMap = s.chars()\n                .mapToObj(c -> (char) c)\n                .collect(Collectors.groupingBy(c -> c, Collectors.counting()));\n\n        return frequencyMap.entrySet().stream()\n                .sorted((a, b) -> Long.compare(b.getValue(), a.getValue()))  // Sort by frequency descending\n                .map(e -> e.getKey() + \":\" + e.getValue())\n                .collect(Collectors.joining(\", \"));\n    }\n}"
              }
            },
            {
              "question": "3rd Round: Matrix Rotation Validation",
              "answer": "",
              "code": null
            },
            {
              "question": "Check if a given matrix is a rotated version of itself.",
              "answer": "Valid Rotation:\nInvalid Rotation:\n✅ Checks each row’s rotation efficiently.",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\n\npublic class MatrixRotation {\n    public static void main(String[] args) {\n        int[][] matrix1 = {\n                {1, 2, 3},\n                {3, 1, 2},\n                {2, 3, 1}\n        };\n\n        int[][] matrix2 = {\n                {1, 2, 3},\n                {3, 1, 2},\n                {1, 2, 3}\n        };\n\n        System.out.println(isRotatedMatrix(matrix1)); // true\n        System.out.println(isRotatedMatrix(matrix2)); // false\n    }\n\n    public static boolean isRotatedMatrix(int[][] matrix) {\n        int n = matrix.length;\n        for (int i = 1; i < n; i++) {\n            if (!Arrays.equals(matrix[i], rotateRow(matrix[i - 1]))) {\n                return false;\n            }\n        }\n        return true;\n    }\n\n    private static int[] rotateRow(int[] row) {\n        int n = row.length;\n        int[] rotated = new int[n];\n        System.arraycopy(row, 1, rotated, 0, n - 1);\n        rotated[n - 1] = row[0];\n        return rotated;\n    }\n}"
              }
            },
            {
              "question": "4th Round: Cipher Text Encryption",
              "answer": "",
              "code": null
            },
            {
              "question": "Encrypt a given string by shifting characters forward based on a given number.",
              "answer": "Input: (\"zoho\", 2)\nOutput: \"bqjq\"",
              "code": {
                "language": "java",
                "content": "public class CipherText {\n    public static void main(String[] args) {\n        String input = \"zoho\";\n        int shift = 2;\n        System.out.println(encrypt(input, shift));\n    }\n\n    public static String encrypt(String text, int shift) {\n        StringBuilder encrypted = new StringBuilder();\n\n        for (char ch : text.toCharArray()) {\n            if (Character.isLetter(ch)) {\n                char base = Character.isUpperCase(ch) ? 'A' : 'a';\n                encrypted.append((char) ((ch - base + shift) % 26 + base));\n            } else {\n                encrypted.append(ch);\n            }\n        }\n        return encrypted.toString();\n    }\n}"
              }
            },
            {
              "question": "5th Round: Zig-Zag String Transformation",
              "answer": "",
              "code": null
            },
            {
              "question": "Given a string and number of rows, convert it into a Zig-Zag pattern.",
              "answer": "Input: \"PAYPALISHIRING\", Rows = 3\nOutput: \"PAHNAPLSIIGYIR\"\n✅ Uses an efficient approach with StringBuilder arrays.",
              "code": {
                "language": "java",
                "content": "public class ZigZagConversion {\n    public static void main(String[] args) {\n        String s = \"PAYPALISHIRING\";\n        int numRows = 3;\n        System.out.println(convertZigZag(s, numRows));\n    }\n\n    public static String convertZigZag(String s, int numRows) {\n        if (numRows == 1) return s;\n\n        StringBuilder[] rows = new StringBuilder[numRows];\n        for (int i = 0; i < numRows; i++) {\n            rows[i] = new StringBuilder();\n        }\n\n        int i = 0, step = 1;\n        for (char c : s.toCharArray()) {\n            rows[i].append(c);\n            if (i == 0) step = 1;\n            if (i == numRows - 1) step = -1;\n            i += step;\n        }\n\n        return Arrays.stream(rows).map(StringBuilder::toString).collect(Collectors.joining());\n    }\n}"
              }
            },
            {
              "question": "6th Round: Database Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "Full Stack Application Data Flow",
              "answer": "Explain data flow from frontend to backend and database.",
              "code": null
            },
            {
              "question": "SQL Queries for Employee Table",
              "answer": "",
              "code": {
                "language": "sql",
                "content": "SELECT * FROM employees WHERE department = 'HR';"
              }
            },
            {
              "question": "Fetching Data from Multiple Tables",
              "answer": "Example Using JOIN:",
              "code": {
                "language": "sql",
                "content": "SELECT e.name, d.department_name\nFROM employees e\nJOIN departments d ON e.department_id = d.id;"
              }
            },
            {
              "question": "Primary Key vs Foreign Key",
              "answer": "",
              "code": null
            },
            {
              "question": "Primary Key: Unique identifier in a table.",
              "answer": "",
              "code": null
            },
            {
              "question": "Foreign Key: References another table’s primary key.",
              "answer": "",
              "code": null
            },
            {
              "question": "Types of Joins with Example",
              "answer": "",
              "code": {
                "language": "sql",
                "content": "-- INNER JOIN\nSELECT e.name, d.department_name\nFROM employees e\nINNER JOIN departments d ON e.department_id = d.id;\n\n-- LEFT JOIN\nSELECT e.name, d.department_name\nFROM employees e\nLEFT JOIN departments d ON e.department_id = d.id;"
              }
            },
            {
              "question": "Subqueries vs Joins",
              "answer": "",
              "code": null
            },
            {
              "question": "Joins: are used for merging tables.",
              "answer": "",
              "code": null
            },
            {
              "question": "Subqueries: are nested queries.",
              "answer": "✅ Database concepts covered efficiently.",
              "code": null
            },
            {
              "question": "Expected Package: discussion.",
              "answer": "",
              "code": null
            },
            {
              "question": "How do you keep up with new technologies?",
              "answer": "",
              "code": null
            },
            {
              "question": "College life & how you got your first job.",
              "answer": "",
              "code": null
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 24
};
