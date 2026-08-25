// AUTO-GENERATED file — company-wise interview data.
// Source: MindGate interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "mindgate",
  "name": "MindGate",
  "interviews": [
    {
      "name": "MindGate",
      "questionCount": 14,
      "rounds": [
        {
          "name": "L1 Interview",
          "questions": [
            {
              "question": "Self-introduction based on your project.",
              "answer": "- \"I am ______ with 3 years of experience in Java and ReactJS. In my current project, I developed a customer registration service using ReactJS and Spring Boot, integrating with multiple microservices to ensure secure and efficient data handling.\"",
              "code": null
            },
            {
              "question": "Explain microservices architecture.",
              "answer": "- \"Microservices architecture divides an application into small, independent services, each responsible for a specific business functionality. These services communicate over a network, allowing for decentralized development, scaling, and deployment.\"",
              "code": null
            },
            {
              "question": "How do microservices communicate internally?",
              "answer": "- \"Microservices communicate internally using protocols like HTTP/REST, gRPC, or messaging systems like Kafka. Service discovery tools and load balancers help manage requests and ensure service availability.\"",
              "code": null
            },
            {
              "question": "How does a JWT token work internally?",
              "answer": "- \"A JWT token encodes user information and is signed with a secret key. The token is sent to the client and included in subsequent requests. The server verifies the token's signature to authenticate the user.\"",
              "code": null
            },
            {
              "question": "Explain the Collection hierarchy in Java.",
              "answer": "- \"The Collection hierarchy starts with Iterable, followed by Collection, branching into List, Set, and Queue. Map is a separate interface for key-value pairs, not extending Collection.\"",
              "code": null
            },
            {
              "question": "If a List is declared as final, can we modify it?",
              "answer": "- \"Yes, a final List can have its contents modified, but its reference cannot be reassigned to another List object.\"",
              "code": null
            },
            {
              "question": "Why does a Set not allow duplicates?",
              "answer": "- \"A Set does not allow duplicates because it uses the equals() and hashCode() methods to ensure all elements are unique.\"",
              "code": null
            },
            {
              "question": "What is the difference between fail-safe and fail-fast iterators?",
              "answer": "- \"Fail-fast iterators throw a ConcurrentModificationException if the collection is modified during iteration. Fail-safe iterators work on a copy of the collection, allowing safe iteration.\"",
              "code": null
            },
            {
              "question": "Explain ConcurrentHashMap.",
              "answer": "- \"ConcurrentHashMap is a thread-safe implementation of Map that allows concurrent read and write operations by dividing the map into segments, reducing contention.\"",
              "code": null
            },
            {
              "question": "What happens when you use HashMap in a multithreaded environment?",
              "answer": "- \"Using HashMap in a multithreaded environment can lead to data corruption and unpredictable results due to concurrent modifications. ConcurrentHashMap should be used instead.\"",
              "code": null
            },
            {
              "question": "Describe the Java thread lifecycle.",
              "answer": "- \"The Java thread lifecycle includes New, Runnable, Blocked, Waiting, Timed Waiting, and Terminated states. A thread transitions through these states based on its execution and synchronization.\"",
              "code": null
            },
            {
              "question": "Write a custom ArrayList that does not allow duplicates.",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.ArrayList;\n\npublic class UniqueArrayList<E> extends ArrayList<E> {\n    @Override\n    public boolean add(E e) {\n        if (!contains(e)) {\n            return super.add(e);\n        }\n        return false;\n    }\n}"
              }
            },
            {
              "question": "How do you find the occurrences of words using HashMap in Java?",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class WordCount {\n    public static void main(String[] args) {\n        String text = \"apple apple banana apple orange banana\";\n        Map<String, Integer> wordCount = new HashMap<>();\n        for (String word : text.split(\" \")) {\n            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);\n        }\n        for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {\n            System.out.println(entry.getKey() + \": \" + entry.getValue());\n        }\n    }\n}"
              }
            },
            {
              "question": "Write an SQL query to print account names based on the currency name.",
              "answer": "",
              "code": {
                "language": "sql",
                "content": "SELECT A.ACCNAME\nFROM ACCOUNT A\nJOIN COUNTRY C ON A.COUNTRYID = C.COUNTRYID\nJOIN CURRENCY CUR ON C.CURRID = CUR.CURRID\nWHERE CUR.CURRNAME = 'currency_name';"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 14
};
