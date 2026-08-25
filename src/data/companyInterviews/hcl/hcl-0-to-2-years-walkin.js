// AUTO-GENERATED file — company-wise interview data.
// Source: HCL interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "hcl",
  "name": "HCL",
  "interviews": [
    {
      "name": "HCL_0 to 2 Years Walkin",
      "questionCount": 55,
      "rounds": [
        {
          "name": "Online Assesment",
          "questions": [
            {
              "question": "52 Questions = 50 MCQ 1 Code 1 SQL",
              "answer": "",
              "code": null
            },
            {
              "question": "What is the output of the following pseudo-code?",
              "answer": "a) Animal sound\nb) Bark\nc) Compile-time error\nd) Runtime error\nAnswer: b) Bark",
              "code": {
                "language": "java",
                "content": "class Animal {\n    String sound() {\n        return \"Animal sound\";\n    }\n}\n\nclass Dog extends Animal {\n    String sound() {\n        return \"Bark\";\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal obj = new Dog();\n        System.out.println(obj.sound());\n    }\n}"
              }
            },
            {
              "question": "What happens if you call a static method on a subclass object?",
              "answer": "a) Parent\nb) Child\nc) Compile-time error\nd) Runtime error\nAnswer: a) Parent",
              "code": {
                "language": "java",
                "content": "class Parent {\n    static void display() {\n        System.out.println(\"Parent\");\n    }\n}\n\nclass Child extends Parent {\n    static void display() {\n        System.out.println(\"Child\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Parent obj = new Child();\n        obj.display();\n    }\n}"
              }
            },
            {
              "question": "How do you enforce a class to have certain methods in Java?",
              "answer": "a) By inheriting from another class\nb) By implementing an interface\nc) By using a static method\nd) By overriding methods\nAnswer: b) By implementing an interface",
              "code": {
                "language": "java",
                "content": "interface Vehicle {\n    void start();\n    void stop();\n}\n\nclass Car implements Vehicle {\n    // <missing_methods>\n}"
              }
            },
            {
              "question": "What is the output of this inheritance pseudo-code?",
              "answer": "a) 5\nb) 6\nc) Compile-time error\nd) Runtime error\nAnswer: a) 5",
              "code": {
                "language": "java",
                "content": "class A {\n    int add(int x, int y) {\n        return x + y;\n    }\n}\n\nclass B extends A {\n    int add(int x, int y) {\n        return x * y;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        A obj = new B();\n        System.out.println(obj.add(2, 3));\n    }\n}"
              }
            },
            {
              "question": "What is the purpose of using super in inheritance?",
              "answer": "a) To call the parent's constructor\nb) To override a method in the parent class\nc) To access a private method in the parent class\nd) None of the above\nAnswer: a) To call the parent's constructor",
              "code": {
                "language": "java",
                "content": "class Parent {\n    Parent() {\n        System.out.println(\"Parent Constructor\");\n    }\n}\n\nclass Child extends Parent {\n    Child() {\n        super();\n        System.out.println(\"Child Constructor\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new Child();\n    }\n}"
              }
            },
            {
              "question": "How do you filter a list of numbers to get even numbers only?",
              "answer": "a) filter(x -> x % 2 == 0)\nb) map(x -> x % 2 == 0)\nc) forEach(x -> x % 2 == 0)\nd) None of the above\nAnswer: a) filter(x -> x % 2 == 0)",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nList<Integer> evens = numbers.stream()\n    .<missing_code>\n    .collect(Collectors.toList());"
              }
            },
            {
              "question": "How do you sort a list of strings using streams?",
              "answer": "a) filter()\nb) sorted()\nc) collect()\nd) map()\nAnswer: b) sorted()",
              "code": {
                "language": "java",
                "content": "List<String> names = Arrays.asList(\"Bob\", \"Alice\", \"Charlie\");\nList<String> sortedNames = names.stream()\n    .<missing_code>\n    .collect(Collectors.toList());"
              }
            },
            {
              "question": "How do you convert a list of integers into their squares?",
              "answer": "a) map(x -> x * x)\nb) filter(x -> x * x)\nc) flatMap(x -> x * x)\nd) None of the above\nAnswer: a) map(x -> x * x)",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(1, 2, 3, 4);\nList<Integer> squares = numbers.stream()\n    .<missing_code>\n    .collect(Collectors.toList());"
              }
            },
            {
              "question": "How do you group employees by department using streams?",
              "answer": "a) collect(Collectors.groupingBy(Employee::getDepartment))\nb) collect(Collectors.toMap(Employee::getDepartment))\nc) groupBy(Employee::getDepartment)\nd) None of the above\nAnswer: a) collect(Collectors.groupingBy(Employee::getDepartment))",
              "code": {
                "language": "java",
                "content": "Map<String, List<Employee>> grouped = employees.stream()\n    .<missing_code>;"
              }
            },
            {
              "question": "How do you find the first element in a stream?",
              "answer": "a) findFirst()\nb) findAny()\nc) filter()\nd) map()\nAnswer: a) findFirst()",
              "code": {
                "language": "java",
                "content": "Optional<Integer> first = numbers.stream()\n    .<missing_code>;"
              }
            },
            {
              "question": "What will be the output of the following code?",
              "answer": "a) 10\nb) 20\nc) Compile-time error\nd) None of the above\nAnswer: b) 20",
              "code": {
                "language": "java",
                "content": "int x = 10, y = 20;\nint result = (x > y) ? x : y;\nSystem.out.println(result);"
              }
            },
            {
              "question": "How do you check if a string starts with \"Hello\"?",
              "answer": "a) startsWith\nb) endsWith\nc) contains\nd) equals\nAnswer: a) startsWith",
              "code": {
                "language": "java",
                "content": "String str = \"Hello World\";\nboolean result = str.<missing_code>(\"Hello\");"
              }
            },
            {
              "question": "What is the output of this pseudo-code?",
              "answer": "a) Static method in Test\nb) NullPointerException\nc) Compile-time error\nd) Runtime error\nAnswer: a) Static method in Test",
              "code": {
                "language": "java",
                "content": "class Test {\n    static void display() {\n        System.out.println(\"Static method in Test\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Test obj = null;\n        obj.display();\n    }\n}"
              }
            },
            {
              "question": "How do you calculate the sum of all elements in a list using streams?",
              "answer": "a) reduce((a, b) -> a + b).get()\nb) reduce(0, (a, b) -> a + b)\nc) mapToInt(x -> x).sum()\nd) None of the above\nAnswer: b) reduce(0, (a, b) -> a + b)",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nint sum = numbers.stream()\n    .<missing_code>\n    .orElse(0);"
              }
            },
            {
              "question": "What happens if you override equals but not hashCode?",
              "answer": "a) 1\nb) 2\nc) Compile-time error\nd) Runtime error\nAnswer: b) 2",
              "code": {
                "language": "java",
                "content": "class Person {\n    private String name;\n    private int age;\n\n    @Override\n    public boolean equals(Object obj) {\n        // custom logic here\n    }\n}\n\npublic static void main(String[] args) {\n    HashSet<Person> set = new HashSet<>();\n    set.add(new Person(\"Alice\", 25));\n    set.add(new Person(\"Alice\", 25));\n    System.out.println(set.size());\n}"
              }
            },
            {
              "question": "What is the purpose of the final keyword in Java?",
              "answer": "a) To prevent inheritance\nb) To make a variable constant\nc) To prevent method overriding\nd) All of the above\nAnswer: d) All of the above",
              "code": {
                "language": "java",
                "content": "final class Test {\n    final int x = 10;\n\n    final void display() {\n        System.out.println(\"Final method\");\n    }\n}"
              }
            },
            {
              "question": "How do you find the maximum value in a list using streams?",
              "answer": "a) reduce(Integer::max)\nb) max(Integer::compare)\nc) mapToInt(x -> x).max()\nd) Any of the above\nAnswer: d) Any of the above",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);\nOptional<Integer> max = numbers.stream()\n    .<missing_code>;"
              }
            },
            {
              "question": "What is the output of this method reference example?",
              "answer": "a) Compile-time error\nb) Hello World\nc) NullPointerException\nd) None of the above\nAnswer: b) Hello World",
              "code": {
                "language": "java",
                "content": "class Test {\n    void display(String msg) {\n        System.out.println(msg);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Test obj = new Test();\n        Consumer<String> ref = obj::display;\n        ref.accept(\"Hello World\");\n    }\n}"
              }
            },
            {
              "question": "What is the purpose of the Optional class in Java?",
              "answer": "a) To avoid null pointer exceptions\nb) To simplify null checks\nc) To provide default values when null\nd) All of the above\nAnswer: d) All of the above",
              "code": {
                "language": "java",
                "content": "Optional<String> opt = Optional.ofNullable(null);\nSystem.out.println(opt.orElse(\"Default Value\"));"
              }
            },
            {
              "question": "How do you create a custom functional interface in Java?",
              "answer": "a) (x, y) -> x + y\nb) new Calculator()\nc) Calculator::calculate\nd) None of the above\nAnswer: a) (x, y) -> x + y",
              "code": {
                "language": "java",
                "content": "@FunctionalInterface\ninterface Calculator {\n    int calculate(int a, int b);\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Calculator add = <missing_code>;\n        System.out.println(add.calculate(10, 20));\n    }\n}"
              }
            },
            {
              "question": "How do you find duplicate elements in a list using streams?",
              "answer": "a) filter(x -> Collections.frequency(numbers, x) > 1)\nb) groupBy(x -> x)\nc) distinct()\nd) None of the above\nAnswer: a) filter(x -> Collections.frequency(numbers, x) > 1)",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 1, 3);\nSet<Integer> duplicates = numbers.stream()\n    .<missing_code>\n    .collect(Collectors.toSet());"
              }
            },
            {
              "question": "What is the output of this method chaining example?",
              "answer": "a) JOHN JANE JAKE\nb) Runtime error\nc) Compile-time error\nd) None of the above\nAnswer: a) JOHN JANE JAKE",
              "code": {
                "language": "java",
                "content": "List<String> names = Arrays.asList(\"John\", \"Jane\", \"Jake\");\nnames.stream()\n    .filter(name -> name.startsWith(\"J\"))\n    .map(String::toUpperCase)\n    .forEach(System.out::println);"
              }
            },
            {
              "question": "What happens if a stream is reused?",
              "answer": "a) All elements printed twice\nb) Stream reused without issues\nc) IllegalStateException\nd) None of the above\nAnswer: c) IllegalStateException",
              "code": {
                "language": "java",
                "content": "Stream<String> stream = Stream.of(\"A\", \"B\", \"C\");\nstream.forEach(System.out::println);\nstream.forEach(System.out::println);"
              }
            },
            {
              "question": "What is the output of the following?",
              "answer": "a) 1 2 3 4 5\nb) Infinite loop\nc) Compile-time error\nd) None of the above\nAnswer: a) 1 2 3 4 5",
              "code": {
                "language": "java",
                "content": "Stream<Integer> numbers = Stream.iterate(1, n -> n + 1);\nnumbers.limit(5)\n    .forEach(System.out::println);"
              }
            },
            {
              "question": "How do you concatenate two streams in Java?",
              "answer": "a) Stream.concat(s1, s2)\nb) s1.addAll(s2)\nc) s1.merge(s2)\nd) None of the above\nAnswer: a) Stream.concat(s1, s2)",
              "code": {
                "language": "java",
                "content": "Stream<Integer> s1 = Stream.of(1, 2, 3);\nStream<Integer> s2 = Stream.of(4, 5, 6);\nStream<Integer> combined = <missing_code>;"
              }
            },
            {
              "question": "What happens when an exception is thrown inside a stream pipeline?",
              "answer": "a) All elements processed\nb) ArithmeticException\nc) Compile-time error\nd) None of the above\nAnswer: b) ArithmeticException",
              "code": {
                "language": "java",
                "content": "Stream<Integer> numbers = Stream.of(1, 2, 0);\nnumbers.map(x -> 10 / x)\n    .forEach(System.out::println);"
              }
            },
            {
              "question": "How do you handle exceptions in streams?",
              "answer": "a) try-catch inside lambda\nb) Custom exception handler\nc) Both a and b\nd) None of the above\nAnswer: c) Both a and b",
              "code": {
                "language": "java",
                "content": "List<Integer> numbers = Arrays.asList(1, 2, 0);\nList<Integer> results = numbers.stream()\n    .<missing_code>\n    .collect(Collectors.toList());"
              }
            },
            {
              "question": "What is the difference between map and flatMap?",
              "answer": "a) map processes elements, flatMap flattens nested streams\nb) Both are the same\nc) Both flatten nested lists\nd) None of the above\nAnswer: a) map processes elements, flatMap flattens nested streams",
              "code": {
                "language": "java",
                "content": "List<List<Integer>> numbers = Arrays.asList(\n    Arrays.asList(1, 2, 3),\n    Arrays.asList(4, 5, 6)\n);\nList<Integer> flat = numbers.stream()\n    .flatMap(List::stream)\n    .collect(Collectors.toList());"
              }
            },
            {
              "question": "Which of the following ensures a thread-safe Singleton class?",
              "answer": "a) Use double-checked locking as shown in the code.\nb) Use a synchronized method instead of a synchronized block.\nc) Use an enum to implement Singleton.\nd) All of the above.\nAnswer: d) All of the above.",
              "code": {
                "language": "java",
                "content": "public class Singleton {\n    private static Singleton instance;\n\n    private Singleton() {}\n\n    public static Singleton getInstance() {\n        if (instance == null) {\n            synchronized (Singleton.class) {\n                if (instance == null) {\n                    instance = new Singleton();\n                }\n            }\n        }\n        return instance;\n    }\n}"
              }
            },
            {
              "question": "What is the output of this pseudo-code for a Singleton class?",
              "answer": "a) Constructor Called\ntrue\nb) Constructor Called\nConstructor Called\nfalse\nc) true\nd) Compile-time error\nAnswer: a) Constructor Called\ntrue",
              "code": {
                "language": "java",
                "content": "public class Singleton {\n    private static Singleton instance = new Singleton();\n\n    private Singleton() {\n        System.out.println(\"Constructor Called\");\n    }\n\n    public static Singleton getInstance() {\n        return instance;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Singleton s1 = Singleton.getInstance();\n        Singleton s2 = Singleton.getInstance();\n        System.out.println(s1 == s2);\n    }\n}"
              }
            },
            {
              "question": "Given a table Employee with columns id, name, and salary, write a query to find the highest salary from the table.",
              "answer": "a) SELECT MAX(salary) FROM Employee;\nb) SELECT salary FROM Employee ORDER BY salary DESC LIMIT 1;\nc) SELECT salary FROM Employee WHERE salary = (SELECT MAX(salary) FROM Employee);\nd) All of the above\nAnswer: d) All of the above",
              "code": null
            },
            {
              "question": "Given a table Student with a marks column, write a query to count the number of students who have grade 'A' (marks > 80), grade 'B' (marks > 70), grade 'C' (marks > 50), and grade 'F' (marks <= 50).",
              "answer": "a)\nb)\nc)\nd)\nAnswer: a)",
              "code": {
                "language": "sql",
                "content": "SELECT marks FROM Student ORDER BY marks DESC;"
              }
            },
            {
              "question": "Given two tables, Employee(id, name, department_id) and Department(id, name), write a query to list all employees with their department names.",
              "answer": "a)\nb)\nc)\nd) All of the above\nAnswer: d) All of the above",
              "code": {
                "language": "sql",
                "content": "SELECT Employee.name, Department.name FROM Employee JOIN Department ON Employee.department_id = Department.id;"
              }
            },
            {
              "question": "Write a query to count the number of employees in each department.",
              "answer": "a)\nb)\nc)\nd)\nAnswer: a) SELECT department_id, COUNT(*) FROM Employee GROUP BY department_id;",
              "code": {
                "language": "sql",
                "content": "SELECT department_id FROM Employee;"
              }
            },
            {
              "question": "Write a query to increase the salary by 10% for all employees in department 2.",
              "answer": "a)\nb)\nc)\nd) Both a) and b)\nAnswer: d) Both a) and b)",
              "code": {
                "language": "sql",
                "content": "UPDATE Employee SET salary = salary + 10 WHERE department_id = 2;"
              }
            },
            {
              "question": "Which CSS property is used to align items in a flex container along the cross-axis?",
              "answer": "a) align-items\nb) justify-content\nc) align-self\nd) flex-direction\nAnswer: a) align-items",
              "code": null
            },
            {
              "question": "Which property is used to position an element relative to its normal position in CSS?",
              "answer": "a) absolute\nb) relative\nc) fixed\nd) sticky\nAnswer: b) relative",
              "code": null
            },
            {
              "question": "Which of the following properties is used to set the margin between an element's border and its surroundings?",
              "answer": "a) border\nb) padding\nc) margin\nd) content\nAnswer: c) margin",
              "code": null
            },
            {
              "question": "Which CSS rule is used for applying styles based on screen width?",
              "answer": "a) @screen\nb) @media\nc) @viewport\nd) @responsive\nAnswer: b) @media",
              "code": null
            },
            {
              "question": "Which CSS property controls the stacking order of elements?",
              "answer": "a) z-order\nb) z-index\nc) order\nd) stacking\nAnswer: b) z-index",
              "code": null
            },
            {
              "question": "Which HTML tag is used to create a table header?",
              "answer": "a) <thead>\nb) <th>\nc) <tr>\nd) <table>\nAnswer: b) <th>",
              "code": null
            },
            {
              "question": "Which attribute is used to specify the destination of a hyperlink?",
              "answer": "a) href\nb) src\nc) link\nd) target\nAnswer: a) href",
              "code": null
            },
            {
              "question": "Which element is used to define a form in HTML?",
              "answer": "a) <form>\nb) <input>\nc) <textarea>\nd) <button>\nAnswer: a) <form>",
              "code": null
            },
            {
              "question": "Which tag is used to define an ordered list?",
              "answer": "a) <ul>\nb) <li>\nc) <ol>\nd) <dl>\nAnswer: c) <ol>",
              "code": null
            },
            {
              "question": "Which attribute is used to provide an alternative text for an image in HTML?",
              "answer": "a) alt\nb) title\nc) src\nd) desc\nAnswer: a) alt",
              "code": null
            },
            {
              "question": "Which of the following is the correct way to declare a function in JavaScript?",
              "answer": "a) function myFunction() {}\nb) let myFunction() {}\nc) function = myFunction() {}\nd) myFunction() function {}\nAnswer: a) function myFunction() {}",
              "code": null
            },
            {
              "question": "How do you access the second element in an array arr = [10, 20, 30]?",
              "answer": "a) arr[2]\nb) arr[1]\nc) arr(2)\nd) arr[3]\nAnswer: b) arr[1]",
              "code": null
            },
            {
              "question": "How do you access the name property of an object person = {name: \"John\", age: 30}?",
              "answer": "a) person[\"name\"]\nb) person.name\nc) person[name]\nd) Both a) and b)\nAnswer: d) Both a) and b)",
              "code": null
            },
            {
              "question": "Which method is used to attach an event listener to an element in JavaScript?",
              "answer": "a) addEvent()\nb) attachEvent()\nc) addEventListener()\nd) bindEvent()\nAnswer: c) addEventListener()",
              "code": null
            },
            {
              "question": "Which JavaScript loop will print numbers from 1 to 5?",
              "answer": "a)\nb)\nc)\nd) All of the above\nAnswer: d) All of the above",
              "code": {
                "language": "javascript",
                "content": "while (i < 5) {\n    console.log(i);\n    i++;\n}"
              }
            },
            {
              "question": "SQL Query",
              "answer": "",
              "code": null
            },
            {
              "question": "Question:",
              "answer": "A student table contains a marks column. Display the count of students in each grade:\n- A: Marks > 80\n- B: Marks > 70 and <= 80\n- C: Marks > 50 and <= 70\n- F: Marks <= 50\nSQL Query:",
              "code": {
                "language": "sql",
                "content": "SELECT \n    CASE \n        WHEN marks > 80 THEN 'A'\n        WHEN marks > 70 THEN 'B'\n        WHEN marks > 50 THEN 'C'\n        ELSE 'F'\n    END AS Grade,\n    COUNT(*) AS Count\nFROM student\nGROUP BY \n    CASE \n        WHEN marks > 80 THEN 'A'\n        WHEN marks > 70 THEN 'B'\n        WHEN marks > 50 THEN 'C'\n        ELSE 'F'\n    END;"
              }
            },
            {
              "question": "Coding",
              "answer": "",
              "code": null
            },
            {
              "question": "Question:",
              "answer": "Write a method to find the name with the highest score based on the input strings.\n- L = 1 point, M = 3 points, H = 5 points.\nExample: findHighScore(\"LMM\", \"HHH\") should return \"shirly\" because HHH (15 points) is greater than LMM (7 points).",
              "code": {
                "language": "java",
                "content": "public class HighScore {\n    public static String findHighScore(String bob, String shirly) {\n        int bobScore = calculateScore(bob);\n        int shirlyScore = calculateScore(shirly);\n\n        return bobScore > shirlyScore ? \"bob\" : \"shirly\";\n    }\n\n    private static int calculateScore(String input) {\n        int score = 0;\n        for (char ch : input.toCharArray()) {\n            if (ch == 'L') score += 1;\n            else if (ch == 'M') score += 3;\n            else if (ch == 'H') score += 5;\n        }\n        return score;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(findHighScore(\"LMM\", \"HHH\")); // Output: shirly\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 55
};
