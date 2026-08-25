// AUTO-GENERATED file — company-wise interview data.
// Source: ACL Digital (Paypal,Adobe) interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "acl-digital-paypal-adobe",
  "name": "ACL Digital (Paypal,Adobe)",
  "interviews": [
    {
      "name": "Paypal-new Client",
      "questionCount": 10,
      "rounds": [
        {
          "name": "Techincal L1",
          "questions": [
            {
              "question": "Self-Introduction",
              "answer": "Hello, my name is-----. I have 3 years of experience as a Java Full Stack Developer, specializing in Java, Spring Boot, Hibernate, Microservices, and ReactJS. I have worked on multiple projects, including customer registration services and banking applications, where I implemented secure transaction handling, API development, and front-end components. I am proficient in writing clean, testable code using JUnit, Mockito, and TDD principles. I am also experienced in deploying applications using cloud platforms. I am eager to leverage my skills to contribute to innovative solutions in my next role.",
              "code": null
            },
            {
              "question": "Sorting an Array of {-1, 0, 1} in O(n) Time and O(1) Space",
              "answer": "Given an array containing only three types of elements (-1, 0, and 1), sort it in O(n) time and O(1) space complexity.\nInput: [1, 0, -1, 0, 1]\nOutput: [-1, 0, 0, 1, 1]",
              "code": {
                "language": "java",
                "content": "public class SortThreeElements {\n    public static void sortArray(int[] arr) {\n        int low = 0, mid = 0, high = arr.length - 1;\n        while (mid <= high) {\n            if (arr[mid] == -1) {\n                swap(arr, low, mid);\n                low++;\n                mid++;\n            } else if (arr[mid] == 0) {\n                mid++;\n            } else {\n                swap(arr, mid, high);\n                high--;\n            }\n        }\n    }\n\n    private static void swap(int[] arr, int i, int j) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 0, -1, 0, 1};\n        sortArray(arr);\n        System.out.println(Arrays.toString(arr));\n    }\n}"
              }
            },
            {
              "question": "Quantitative Trading Firm Profit Calculation",
              "answer": "A quantitative trading firm processes a list of events, each classified into one of four categories:",
              "code": null
            },
            {
              "question": "BUY <stock> <quantity>",
              "answer": ": Buy <quantity> shares of <stock> at market price.",
              "code": null
            },
            {
              "question": "SELL <stock> <quantity>",
              "answer": ": Sell <quantity> shares of <stock> at market price.",
              "code": null
            },
            {
              "question": "CHANGE <stock> <price>",
              "answer": ": Change market price of <stock> by <price> (can be positive or negative).",
              "code": null
            },
            {
              "question": "QUERY",
              "answer": ": Return the gross profit/loss from start to present.",
              "code": {
                "language": "java",
                "content": "import java.io.*;\nimport java.util.*;\n\n\npublic class Solution {\n    public static void main(String[] args) throws IOException {\n        List<String> events = Arrays.asList(\n            \"BUY googl 20\", \"BUY aapl 50\", \"CHANGE googl 6\", \n            \"QUERY\", \"SELL aapl 10\", \"CHANGE aapl -2\", \"QUERY\"\n        );\n\n        List<Long> result = Result.getNetProfit(events);\n        for (Long value : result) {\n            System.out.println(value);\n        }\n    }\n}\nclass Result {\n    public static List<Long> getNetProfit(List<String> events) {\n        List<Long> ansList = new ArrayList<>();\n        Map<String, Long> portfolio = new HashMap<>();\n        long query = 0;\n\n        for (String event : events) {\n            String[] word = event.split(\" \");\n            String type = word[0];\n\n            if (type.equals(\"QUERY\")) {\n                ansList.add(query);\n            } else {\n                String company = word[1];\n                long unit = Long.parseLong(word[2]);\n\n                switch (type) {\n                    case \"BUY\":\n                        portfolio.put(company, portfolio.getOrDefault(company, 0L) + unit);\n                        break;\n                    case \"SELL\":\n                        portfolio.put(company, portfolio.getOrDefault(company, 0L) - unit);\n                        break;\n                    case \"CHANGE\":\n                        if (portfolio.containsKey(company)) {\n                            query += portfolio.get(company) * unit;\n                        }\n                        break;\n                }\n            }\n        }\n        return ansList;\n    }\n}"
              }
            },
            {
              "question": "Another Trading Firm Example",
              "answer": "- The price of stock2 dropped by -8, affecting overall profit calculations.\n- Final profit/loss calculation after all events is 16.",
              "code": {
                "language": "java",
                "content": "-16"
              }
            }
          ]
        },
        {
          "name": "Techincal L2",
          "questions": [
            {
              "question": "Self-Introduction",
              "answer": "Hello, my name is-----. I have 3 years of experience as a Java Full Stack Developer, specializing in Java, Spring Boot, Hibernate, Microservices, and ReactJS. I have worked on multiple projects, including customer registration services and banking applications, where I implemented secure transaction handling, API development, and front-end components. I am proficient in writing clean, testable code using JUnit, Mockito, and TDD principles. I am also experienced in deploying applications using cloud platforms. I am eager to leverage my skills to contribute to innovative solutions in my next role.",
              "code": null
            },
            {
              "question": "Find the minimum element in a rotated sorted array. A rotated sorted array is an array that was originally sorted in increasing order but then rotated at some pivot. Your task is to find the minimum element in the given array in O(log N) time complexity.",
              "answer": "Input: [100,105,110,90,95]\nOutput: 90\nInput: [3,4,5,6,7,8,9,10,1,2]\nOutput: 1\nInput: [1,2,3,4,5,6,7,8,9,10]\nOutput: 1\nInput: [5,4,3,2,1]\nOutput: 1\n- The solution uses binary search, making it O(log N).",
              "code": {
                "language": "java",
                "content": "public class RotatedSortedArray {\n    public static int findMin(int[] nums) {\n        int left = 0, right = nums.length - 1;\n        \n        while (left < right) {\n            int mid = left + (right - left) / 2;\n            \n            if (nums[mid] > nums[right]) {\n                left = mid + 1;\n            } else {\n                right = mid;\n            }\n        }\n        return nums[left];\n    }\n\n    public static void main(String[] args) {\n        int[][] testCases = {\n            {100, 105, 110, 90, 95},\n            {3, 4, 5, 6, 7, 8, 9, 10, 1, 2},\n            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},\n            {5, 4, 3, 2, 1}\n        };\n\n        for (int[] testCase : testCases) {\n            System.out.println(\"Minimum Element: \" + findMin(testCase));\n        }\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 10
};
