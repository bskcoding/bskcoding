// Rebuild the ZOHO (walk_in) interview data file with clean, well-structured
// rounds and questions.
//
// The original auto-generated file mixed round headings, sub-headings, and
// stray bullets into a single "Interview Questions" round, leaving many empty
// placeholders. This script restores the intended structure: 5 coding rounds,
// 1 database round (with its sub-questions), and 1 HR round.
//
// Run:  node scripts/rebuild-zoho.mjs
//
// Output:  src/data/companyInterviews/zoho-walk-in/zoho.js

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPANY_DIR = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "companyInterviews",
  "zoho-walk-in",
);

const code = (language, content) => ({ language, content });
const Q = (question, answer, codeBlock = null) => ({
  question,
  answer,
  code: codeBlock,
});

// -----------------------------------------------------------------------------
// Data — answers are taken from the source markdown
// (c:\Users\USER\Downloads\...\ZOHO (walk_in)\zoho.md).
// -----------------------------------------------------------------------------

const rounds = [
  // ------------------------------ Round 1 ------------------------------
  {
    name: "Coding Round 1: Factorial Sum",
    questions: [
      Q(
        "Given a number, find the sum of the factorials of its digits without recalculating previously computed factorials.",
        "Input: 145\nOutput: 1! + 4! + 5! = 1 + 24 + 120 = 145\n\n✅ Avoids recalculating factorial using a HashMap.",
        code(
          "java",
          `import java.util.HashMap;
import java.util.Map;

public class FactorialSum {
    private static final Map<Integer, Integer> factorialCache = new HashMap<>();

    public static void main(String[] args) {
        int num = 145;
        System.out.println("Factorial Sum: " + factorialSum(num));
    }

    public static int factorialSum(int num) {
        int sum = 0;
        while (num > 0) {
            int digit = num % 10;
            sum += factorial(digit);
            num /= 10;
        }
        return sum;
    }

    private static int factorial(int n) {
        if (!factorialCache.containsKey(n)) {
            factorialCache.put(n, (n == 0 || n == 1) ? 1 : n * factorial(n - 1));
        }
        return factorialCache.get(n);
    }
}`,
        ),
      ),
    ],
  },

  // ------------------------------ Round 2 ------------------------------
  {
    name: "Coding Round 2: Character Occurrence Sorting",
    questions: [
      Q(
        "Given a string, count the occurrences of each character and sort by frequency in descending order.",
        'Input: "zoho"\nOutput: "o:2, z:1, h:1"\n\n✅ Uses Java Streams for efficient sorting and counting.',
        code(
          "java",
          `import java.util.*;
import java.util.stream.Collectors;

public class CharacterFrequencySort {
    public static void main(String[] args) {
        String input = "zoho";
        System.out.println(sortByFrequency(input));
    }

    public static String sortByFrequency(String s) {
        Map<Character, Long> frequencyMap = s.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(c -> c, Collectors.counting()));

        return frequencyMap.entrySet().stream()
                .sorted((a, b) -> Long.compare(b.getValue(), a.getValue()))  // Sort by frequency descending
                .map(e -> e.getKey() + ":" + e.getValue())
                .collect(Collectors.joining(", "));
    }
}`,
        ),
      ),
    ],
  },

  // ------------------------------ Round 3 ------------------------------
  {
    name: "Coding Round 3: Matrix Rotation Validation",
    questions: [
      Q(
        "Check if a given matrix is a rotated version of itself.",
        "Valid Rotation:\n[\n  [1, 2, 3]\n  [3, 1, 2]\n  [2, 3, 1]\n]\n\nInvalid Rotation:\n[\n  [1, 2, 3]\n  [3, 1, 2]\n  [1, 2, 3]\n]\n\n✅ Checks each row's rotation efficiently.",
        code(
          "java",
          `import java.util.Arrays;

public class MatrixRotation {
    public static void main(String[] args) {
        int[][] matrix1 = {
                {1, 2, 3},
                {3, 1, 2},
                {2, 3, 1}
        };

        int[][] matrix2 = {
                {1, 2, 3},
                {3, 1, 2},
                {1, 2, 3}
        };

        System.out.println(isRotatedMatrix(matrix1)); // true
        System.out.println(isRotatedMatrix(matrix2)); // false
    }

    public static boolean isRotatedMatrix(int[][] matrix) {
        int n = matrix.length;
        for (int i = 1; i < n; i++) {
            if (!Arrays.equals(matrix[i], rotateRight(matrix[i - 1]))) {
                return false;
            }
        }
        return Arrays.equals(matrix[0], rotateRight(matrix[n - 1]));
    }

    private static int[] rotateRight(int[] row) {
        int[] result = new int[row.length];
        for (int i = 0; i < row.length; i++) {
            result[(i + 1) % row.length] = row[i];
        }
        return result;
    }
}`,
        ),
      ),
    ],
  },

  // ------------------------------ Round 4 ------------------------------
  {
    name: "Coding Round 4: Cipher Text Encryption",
    questions: [
      Q(
        "Encrypt a given string by shifting characters forward based on a given number.",
        'Input: ("zoho", 2)\nOutput: "bqjq"\n\n✅ Uses a character-by-character shift with a wrap-around alphabet.',
        code(
          "java",
          `public class CipherText {
    public static void main(String[] args) {
        String input = "zoho";
        int shift = 2;
        System.out.println(encrypt(input, shift));
    }

    public static String encrypt(String text, int shift) {
        StringBuilder encrypted = new StringBuilder();

        for (char ch : text.toCharArray()) {
            if (Character.isLetter(ch)) {
                char base = Character.isUpperCase(ch) ? 'A' : 'a';
                encrypted.append((char) ((ch - base + shift) % 26 + base));
            } else {
                encrypted.append(ch);
            }
        }
        return encrypted.toString();
    }
}`,
        ),
      ),
    ],
  },

  // ------------------------------ Round 5 ------------------------------
  {
    name: "Coding Round 5: Zig-Zag String Transformation",
    questions: [
      Q(
        'Given a string and number of rows, convert it into a Zig-Zag pattern.',
        'Input: "PAYPALISHIRING", Rows = 3\nOutput: "PAHNAPLSIIGYIR"\n\n✅ Uses an efficient approach with StringBuilder arrays.',
        code(
          "java",
          `import java.util.Arrays;
import java.util.stream.Collectors;

public class ZigZagConversion {
    public static void main(String[] args) {
        String s = "PAYPALISHIRING";
        int numRows = 3;
        System.out.println(convertZigZag(s, numRows));
    }

    public static String convertZigZag(String s, int numRows) {
        if (numRows == 1) return s;

        StringBuilder[] rows = new StringBuilder[numRows];
        for (int i = 0; i < numRows; i++) {
            rows[i] = new StringBuilder();
        }

        int i = 0, step = 1;
        for (char c : s.toCharArray()) {
            rows[i].append(c);
            if (i == 0) step = 1;
            if (i == numRows - 1) step = -1;
            i += step;
        }

        return Arrays.stream(rows).map(StringBuilder::toString).collect(Collectors.joining());
    }
}`,
        ),
      ),
    ],
  },

  // ------------------------------ Round 6: Database ------------------------------
  {
    name: "Database Round: SQL & Data Modeling",
    questions: [
      Q(
        "Explain data flow in a full-stack application (frontend → backend → database).",
        "Typical flow:\n- User interacts with the React/HTML frontend\n- Frontend issues an HTTP request (GET/POST) to the backend\n- Spring Boot controller receives the request, validates it, and calls the service layer\n- Service layer applies business logic and queries the database via JPA/JDBC\n- Result is mapped to a DTO and returned as JSON\n- Frontend renders the response",
      ),
      Q(
        "Write a SQL query to fetch all employees in the HR department.",
        "Example:",
        code(
          "sql",
          `SELECT * FROM employees WHERE department = 'HR';`,
        ),
      ),
      Q(
        "Fetch data from multiple tables using a JOIN.",
        "Example Using JOIN:",
        code(
          "sql",
          `SELECT e.name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.id;`,
        ),
      ),
      Q(
        "Explain the difference between a Primary Key and a Foreign Key.",
        "- Primary Key: Unique identifier in a table (cannot be NULL, only one per table).\n- Foreign Key: References another table's primary key (used to establish relationships).",
      ),
      Q(
        "List the types of SQL joins with an example.",
        "Example using INNER JOIN and LEFT JOIN:",
        code(
          "sql",
          `-- INNER JOIN
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;

-- LEFT JOIN
SELECT e.name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;`,
        ),
      ),
      Q(
        "Compare Subqueries vs Joins — when would you use each?",
        "- Joins are used for merging tables and are generally faster because the database engine can optimise them.\n- Subqueries are nested queries (used inside WHERE/SELECT) and are helpful for step-by-step filtering or when the result of one query feeds another.\n\n✅ Database concepts covered efficiently.",
      ),
    ],
  },

  // ------------------------------ Round 7: HR ------------------------------
  {
    name: "HR Round: Package & Cultural Fit",
    questions: [
      Q("What is your expected package?", "Discuss based on current CTC, market standards, role scope, and skill set. Be realistic and justify with research."),
      Q("How do you keep up with new technologies?", "Suggested approach:\n- Follow official docs and release notes\n- Read tech blogs and newsletters (e.g., Baeldung, InfoQ, DZone)\n- Build small POCs / side projects\n- Take online courses (Udemy, Coursera, Pluralsight)\n- Attend meetups / conferences and engage with the community"),
      Q("Tell me about your college life and how you got your first job.", "Talk about:\n- Academic highlights and projects\n- Extracurriculars or leadership roles\n- Internships / campus placements\n- How the first job shaped your technical foundation and work ethic"),
    ],
  },
];

// -----------------------------------------------------------------------------
// Build the company object that matches the existing app schema.
// -----------------------------------------------------------------------------
const questionCount = rounds.reduce(
  (sum, round) => sum + round.questions.length,
  0,
);

const company = {
  id: "zoho-walk-in",
  name: "ZOHO (walk_in)",
  interviews: [
    {
      name: "Zoho Walk-in Interview",
      questionCount,
      rounds,
    },
  ],
  questionCount,
};

// -----------------------------------------------------------------------------
// Write the file
// -----------------------------------------------------------------------------
fs.mkdirSync(COMPANY_DIR, { recursive: true });
const outFile = path.join(COMPANY_DIR, "zoho.js");
const banner =
  "// AUTO-GENERATED file — company-wise interview data.\n" +
  "// Source: ZOHO (walk_in) interview document(s).\n" +
  "// Regenerate with:  node scripts/rebuild-zoho.mjs\n\n";
const body =
  "export const company = " + JSON.stringify(company, null, 2) + ";\n";
fs.writeFileSync(outFile, banner + body, "utf8");

console.log(
  `✓ wrote ${path.relative(path.join(__dirname, ".."), outFile)}  (${rounds.length} rounds, ${questionCount} questions)`,
);
