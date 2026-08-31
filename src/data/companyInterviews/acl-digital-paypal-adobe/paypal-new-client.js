// AUTO-GENERATED file — company-wise interview data.
// Source: ACL Digital (Paypal,Adobe) interview document(s).

export const company = {
  "id": "acl-digital-paypal-adobe",
  "name": "ACL Digital (Paypal,Adobe)",
  "interviews": [
    {
      "name": "PayPal CDAS New Client",
      "questionCount": 6,
      "rounds": [
        {
          "name": "Technical L1",
          "questions": [
            {
              "question": "Self-Introduction",
              "answer": "Hello, my name is [Your Name]. I have 3 years of experience as a Java Full Stack Developer, specializing in Java, Spring Boot, Hibernate, Microservices, and ReactJS. I have worked on multiple projects, including customer registration services and banking applications, where I implemented secure transaction handling, API development, and front-end components. I am proficient in writing clean, testable code using JUnit, Mockito, and TDD principles. I am also experienced in deploying applications using cloud platforms.",
              "code": null
            },
            {
              "question": "Problem: Sorting an Array of {-1, 0, 1} in O(n) Time and O(1) Space",
              "answer": "Use the Dutch National Flag algorithm with three pointers (low, mid, high). Traverse the array once, swapping elements to sort in O(n) time with O(1) space.",
              "code": {
                "language": "java",
                "content": "public class SortThreeElements {\n    public static void sortArray(int[] arr) {\n        int low = 0, mid = 0, high = arr.length - 1;\n        while (mid <= high) {\n            if (arr[mid] == -1) {\n                swap(arr, low, mid);\n                low++; mid++;\n            } else if (arr[mid] == 0) {\n                mid++;\n            } else {\n                swap(arr, mid, high);\n                high--;\n            }\n        }\n    }\n    private static void swap(int[] arr, int i, int j) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n}"
              }
            },
            {
              "question": "Problem: Quantitative Trading Firm Profit Calculation",
              "answer": "Track portfolio holdings in a HashMap and maintain a profit/loss variable. For BUY/SELL events, update the portfolio. For CHANGE events, adjust profit based on holdings. For QUERY events, return the current profit.",
              "code": {
                "language": "java",
                "content": "class Result {\n    public static List<Long> getNetProfit(List<String> events) {\n        List<Long> ansList = new ArrayList<>();\n        Map<String, Long> portfolio = new HashMap<>();\n        long query = 0;\n        for (String event : events) {\n            String[] word = event.split(\" \");\n            String type = word[0];\n            if (type.equals(\"QUERY\")) {\n                ansList.add(query);\n            } else {\n                String company = word[1];\n                long unit = Long.parseLong(word[2]);\n                switch (type) {\n                    case \"BUY\":\n                        portfolio.put(company, portfolio.getOrDefault(company, 0L) + unit);\n                        break;\n                    case \"SELL\":\n                        portfolio.put(company, portfolio.getOrDefault(company, 0L) - unit);\n                        break;\n                    case \"CHANGE\":\n                        if (portfolio.containsKey(company)) {\n                            query += portfolio.get(company) * unit;\n                        }\n                        break;\n                }\n            }\n        }\n        return ansList;\n    }\n}"
              }
            },
            {
              "question": "Problem: Another Trading Firm Example",
              "answer": "Input: 6 events with BUY/SELL/CHANGE operations; the final QUERY returns -16. The solution uses the same HashMap approach tracking portfolio and profit.",
              "code": null
            }
          ]
        },
        {
          "name": "Technical L2",
          "questions": [
            {
              "question": "Self-Introduction",
              "answer": "Hello, my name is [Your Name]. I have 3 years of experience as a Java Full Stack Developer, specializing in Java, Spring Boot, Hibernate, Microservices, and ReactJS. I have worked on multiple projects, including customer registration services and banking applications, where I implemented secure transaction handling, API development, and front-end components. I am proficient in writing clean, testable code using JUnit, Mockito, and TDD principles. I am also experienced in deploying applications using cloud platforms.",
              "code": null
            },
            {
              "question": "Find the minimum element in a rotated sorted array",
              "answer": "Use binary search with O(log n) time complexity. Compare mid with the rightmost element. If mid > right, the minimum is in the right half, otherwise in the left half.",
              "code": {
                "language": "java",
                "content": "public class RotatedSortedArray {\n    public static int findMin(int[] nums) {\n        int left = 0, right = nums.length - 1;\n        while (left < right) {\n            int mid = left + (right - left) / 2;\n            if (nums[mid] > nums[right]) {\n                left = mid + 1;\n            } else {\n                right = mid;\n            }\n        }\n        return nums[left];\n    }\n    public static void main(String[] args) {\n        int[][] testCases = {\n            {100, 105, 110, 90, 95},    // Output: 90\n            {3, 4, 5, 6, 7, 8, 9, 10, 1, 2}, // Output: 1\n            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, // Output: 1\n            {5, 4, 3, 2, 1}              // Output: 1\n        };\n        for (int[] testCase : testCases) {\n            System.out.println(\"Minimum Element: \" + findMin(testCase));\n        }\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 6
};
