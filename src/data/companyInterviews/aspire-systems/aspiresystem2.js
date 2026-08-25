// AUTO-GENERATED file — company-wise interview data.
// Source: Aspire systems interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "aspire-systems",
  "name": "Aspire systems",
  "interviews": [
    {
      "name": "AspireSystem2",
      "questionCount": 20,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "What is a hash collision?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: A hash collision occurs when two different keys in a hash-based collection, such as a HashMap, produce the same hash code and thus are placed in the same bucket. This can lead to performance degradation as multiple keys have to be stored and managed in the same location.",
              "answer": "",
              "code": null
            },
            {
              "question": "When does a collision error occur in hash-based collections?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: A collision error occurs in hash-based collections when multiple keys are mapped to the same hash code, causing them to be stored in the same bucket. This results in a need for the collection to handle the collision, usually through chaining (linked list) or open addressing (probing).",
              "answer": "",
              "code": null
            },
            {
              "question": "What are the key differences between Runnable and Callable in Java?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer",
              "answer": "Runnable: Does not return a result and cannot throw a checked exception.\nCallable: Returns a result (T) and can throw checked exceptions.\n- Runnable is executed by Thread or Executor, while Callable is executed by ExecutorService.",
              "code": null
            },
            {
              "question": "What is the difference between map and flatMap in Java Streams?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer",
              "answer": "map: Transforms each element in the stream into another form, producing a stream of the same structure.\nflatMap: Flattens multiple streams into a single stream by applying a one-to-many transformation function to each element and then flattening the resulting streams into one.",
              "code": null
            },
            {
              "question": "How does flatMap work internally?",
              "answer": "",
              "code": null
            },
            {
              "question": "Answer: Internally, flatMap applies a function that returns a stream for each element of the original stream. It then flattens these streams into a single stream, effectively concatenating them. This is achieved through a combination of the map operation and the Stream.flatMap method, which merges the nested streams.",
              "answer": "",
              "code": null
            },
            {
              "question": "Find and Insert Target in a Sorted Array:",
              "answer": "",
              "code": null
            },
            {
              "question": "Question: You are given an unsorted array of integers. You need to find the index of a target value within this array. If the target value is not present in the array, insert it into the array such that the array remains sorted after insertion, and return the index where the target value would be if it were inserted.",
              "answer": "",
              "code": null
            },
            {
              "question": "Input 1",
              "answer": "- Array: [4, 1, 7, 2]\n- Target: 4\nOutput: 0",
              "code": null
            },
            {
              "question": "Input 2",
              "answer": "- Array: [4, 1, 7, 2]\n- Target: 5\nOutput: 3 (because the array becomes [1, 2, 4, 5, 7] and 5 is at index 3)",
              "code": null
            },
            {
              "question": "Answer (Java Code)",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.Arrays;\n\npublic class InsertAndFindIndex {\n    public static int insertAndFindIndex(int[] arr, int target) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == target) {\n                return i;\n            }\n        }\n        Arrays.sort(arr);\n        int index = Arrays.binarySearch(arr, target);\n        if (index >= 0) {\n            return index;\n        }\n        return -(index + 1);\n    }\n\n    public static void main(String[] args) {\n        int[] arr1 = {4, 1, 7, 2};\n        int target1 = 4;\n        System.out.println(insertAndFindIndex(arr1, target1)); // Output: 0\n\n        int[] arr2 = {4, 1, 7, 2};\n        int target2 = 5;\n        System.out.println(insertAndFindIndex(arr2, target2)); // Output: 3\n    }\n}"
              }
            },
            {
              "question": "Capitalize and Count Words in a List Using Streams:",
              "answer": "",
              "code": null
            },
            {
              "question": "Question: You are given a list of lowercase strings. Write a Java program that:",
              "answer": "- Capitalizes the first letter of each word.\n- Counts the occurrences of each word after capitalization.",
              "code": null
            },
            {
              "question": "Input",
              "answer": "- List: [\"hello\", \"world\", \"this\", \"hello\"]",
              "code": null
            },
            {
              "question": "Output",
              "answer": "- Capitalized List: [\"Hello\", \"World\", \"This\", \"Hello\"]\n- Word Counts:\n- Hello: 2\n- World: 1\n- This: 1",
              "code": null
            },
            {
              "question": "Answer (Java Code)",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.*;\nimport java.util.function.Function;\nimport java.util.stream.Collectors;\n\npublic class CapitalizeWords {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(\"hello\", \"world\", \"this\", \"hello\");\n\n        List<String> capitalizedWords = words.stream()\n            .map(word -> word.isEmpty() ? word : Character.toUpperCase(word.charAt(0)) + word.substring(1))\n            .collect(Collectors.toList());\n\n        System.out.println(\"Capitalized List: \" + capitalizedWords);\n\n        Map<String, Long> wordCounts = words.stream()\n            .map(word -> word.isEmpty() ? word : Character.toUpperCase(word.charAt(0)) + word.substring(1))\n            .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));\n\n        wordCounts.forEach((word, count) -> System.out.println(word + \": \" + count));\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 20
};
