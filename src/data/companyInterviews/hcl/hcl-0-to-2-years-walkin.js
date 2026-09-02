// AUTO-GENERATED file — company-wise interview data.
// Source: HCL Technologies interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "hcl",
  "name": "HCL",
  "interviews": [
    {
      "name": "HCL 0-2 Years Walk-in Interview",
      "questionCount": 46,
      "rounds": [
        {
          "name": "Java MCQ Questions",
          "questions": [
            {
              "question": "What is the output? Animal obj = new Dog(); System.out.println(obj.sound());",
              "answer": "Bark — Runtime polymorphism, child class method called.",
              "code": {
                "language": "java",
                "content": "class Animal { String sound() { return \"Animal sound\"; } }\nclass Dog extends Animal { String sound() { return \"Bark\"; } }\n\nAnimal obj = new Dog();\nSystem.out.println(obj.sound()); // Bark"
              }
            },
            {
              "question": "What happens if you call a static method on a subclass object?",
              "answer": "Parent — static methods are not overridden, the method is called based on the reference type.",
              "code": {
                "language": "java",
                "content": "Parent obj = new Child();\nobj.display(); // Parent"
              }
            },
            {
              "question": "How do you enforce a class to have certain methods?",
              "answer": "By implementing an interface.",
              "code": {
                "language": "java",
                "content": "interface Vehicle { void start(); void stop(); }\nclass Car implements Vehicle { public void start() { } public void stop() { } }"
              }
            },
            {
              "question": "What is the output of inheritance? A obj = new B(); obj.add(2,3);",
              "answer": "5 — wait, method overriding means the child class method is called. With the code below the result is 6 (2 * 3).",
              "code": {
                "language": "java",
                "content": "class A { int add(int x, int y) { return x + y; } }\nclass B extends A { int add(int x, int y) { return x * y; } }\n\nA obj = new B();\nSystem.out.println(obj.add(2, 3)); // 6"
              }
            },
            {
              "question": "What is the purpose of using super in inheritance?",
              "answer": "To call the parent's constructor or access the parent class members.",
              "code": {
                "language": "java",
                "content": "class Child extends Parent { Child() { super(); } }"
              }
            },
            {
              "question": "What is the output? int x=10, y=20; int result = (x > y) ? x : y;",
              "answer": "20 — the ternary selects y since the condition (10 > 20) is false.",
              "code": {
                "language": "java",
                "content": "int result = (10 > 20) ? 10 : 20; // 20"
              }
            },
            {
              "question": "What is the output? Test obj = null; obj.display(); (static method)",
              "answer": "Static method in Test — static methods don't need an instance.",
              "code": {
                "language": "java",
                "content": "Test obj = null;\nobj.display(); // Static method called"
              }
            },
            {
              "question": "What happens if you override equals but not hashCode?",
              "answer": "The set size becomes 2 — the HashSet uses hashCode for bucketing, so the two equal objects are treated as different.",
              "code": {
                "language": "java",
                "content": "HashSet<Person> set = new HashSet<>();\nset.add(new Person(\"Alice\", 25));\nset.add(new Person(\"Alice\", 25));\nSystem.out.println(set.size()); // 2"
              }
            },
            {
              "question": "What is the purpose of final keyword?",
              "answer": "All of the above — prevent inheritance, make a variable constant, prevent method overriding.",
              "code": {
                "language": "java",
                "content": "final class Test { final int x = 10; final void display() { } }"
              }
            },
            {
              "question": "What is the output of the method reference example?",
              "answer": "Hello World.",
              "code": {
                "language": "java",
                "content": "Consumer<String> ref = obj::display;\nref.accept(\"Hello World\"); // Hello World"
              }
            },
            {
              "question": "What is the purpose of the Optional class?",
              "answer": "All of the above — avoid null pointer exceptions, simplify null checks, and provide default values.",
              "code": {
                "language": "java",
                "content": "Optional<String> opt = Optional.ofNullable(null);\nSystem.out.println(opt.orElse(\"Default Value\"));"
              }
            },
            {
              "question": "What happens if a stream is reused?",
              "answer": "IllegalStateException — streams cannot be reused after a terminal operation.",
              "code": {
                "language": "java",
                "content": "Stream<String> stream = Stream.of(\"A\", \"B\", \"C\");\nstream.forEach(System.out::println);\nstream.forEach(System.out::println); // IllegalStateException"
              }
            },
            {
              "question": "What is the output of Stream.iterate?",
              "answer": "1 2 3 4 5",
              "code": {
                "language": "java",
                "content": "Stream.iterate(1, n -> n + 1).limit(5).forEach(System.out::println); // 1 2 3 4 5"
              }
            },
            {
              "question": "What happens when an exception is thrown inside a stream pipeline?",
              "answer": "ArithmeticException.",
              "code": {
                "language": "java",
                "content": "Stream.of(1, 2, 0).map(x -> 10 / x).forEach(System.out::println); // ArithmeticException"
              }
            },
            {
              "question": "Difference between map and flatMap?",
              "answer": "map processes elements, flatMap flattens nested streams.",
              "code": {
                "language": "java",
                "content": "list.stream().flatMap(List::stream).collect(Collectors.toList());"
              }
            }
          ]
        },
        {
          "name": "Coding & SQL",
          "questions": [
            {
              "question": "Find the highest salary from the Employee table.",
              "answer": "Use MAX(salary) or ORDER BY DESC LIMIT 1.",
              "code": {
                "language": "sql",
                "content": "SELECT MAX(salary) FROM Employee;\nSELECT salary FROM Employee ORDER BY salary DESC LIMIT 1;"
              }
            },
            {
              "question": "Count students by grade (A, B, C, F) based on marks.",
              "answer": "Use a CASE statement with GROUP BY.",
              "code": {
                "language": "sql",
                "content": "SELECT \n    CASE \n        WHEN marks > 80 THEN 'A'\n        WHEN marks > 70 THEN 'B'\n        WHEN marks > 50 THEN 'C'\n        ELSE 'F'\n    END AS Grade,\n    COUNT(*) AS Count\nFROM student\nGROUP BY Grade;"
              }
            },
            {
              "question": "List employees with their department names.",
              "answer": "Use a JOIN between the Employee and Department tables.",
              "code": {
                "language": "sql",
                "content": "SELECT Employee.name, Department.name \nFROM Employee \nINNER JOIN Department ON Employee.department_id = Department.id;"
              }
            },
            {
              "question": "Count employees in each department.",
              "answer": "Use GROUP BY department_id.",
              "code": {
                "language": "sql",
                "content": "SELECT department_id, COUNT(*) FROM Employee GROUP BY department_id;"
              }
            },
            {
              "question": "Increase salary by 10% for employees in department 2.",
              "answer": "Use UPDATE with a salary calculation.",
              "code": {
                "language": "sql",
                "content": "UPDATE Employee SET salary = salary * 1.10 WHERE department_id = 2;"
              }
            },
            {
              "question": "Find the name with the highest score (L=1, M=3, H=5 points).",
              "answer": "Calculate the score for each string and compare.",
              "code": {
                "language": "java",
                "content": "public class HighScore {\n    public static String findHighScore(String bob, String shirly) {\n        int bobScore = calculateScore(bob);\n        int shirlyScore = calculateScore(shirly);\n        return bobScore > shirlyScore ? \"bob\" : \"shirly\";\n    }\n\n    private static int calculateScore(String input) {\n        int score = 0;\n        for (char ch : input.toCharArray()) {\n            if (ch == 'L') score += 1;\n            else if (ch == 'M') score += 3;\n            else if (ch == 'H') score += 5;\n        }\n        return score;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(findHighScore(\"LMM\", \"HHH\")); // shirly\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Streams & Lambda MCQ",
          "questions": [
            {
              "question": "How to filter even numbers from a list using streams?",
              "answer": "filter(x -> x % 2 == 0)",
              "code": {
                "language": "java",
                "content": "numbers.stream().filter(x -> x % 2 == 0).collect(Collectors.toList());"
              }
            },
            {
              "question": "How to sort a list of strings using streams?",
              "answer": "sorted()",
              "code": {
                "language": "java",
                "content": "names.stream().sorted().collect(Collectors.toList());"
              }
            },
            {
              "question": "How to convert a list of integers into their squares?",
              "answer": "map(x -> x * x)",
              "code": {
                "language": "java",
                "content": "numbers.stream().map(x -> x * x).collect(Collectors.toList());"
              }
            },
            {
              "question": "How to group employees by department?",
              "answer": "collect(Collectors.groupingBy(Employee::getDepartment))",
              "code": {
                "language": "java",
                "content": "employees.stream().collect(Collectors.groupingBy(Employee::getDepartment));"
              }
            },
            {
              "question": "How to find the first element in a stream?",
              "answer": "findFirst()",
              "code": {
                "language": "java",
                "content": "numbers.stream().findFirst();"
              }
            },
            {
              "question": "How to calculate the sum of all elements in a list?",
              "answer": "reduce(0, (a, b) -> a + b)",
              "code": {
                "language": "java",
                "content": "numbers.stream().reduce(0, (a, b) -> a + b);"
              }
            },
            {
              "question": "How to find the maximum value in a list?",
              "answer": "Any of the above — reduce(Integer::max), max(Integer::compare), mapToInt(x->x).max()",
              "code": {
                "language": "java",
                "content": "numbers.stream().reduce(Integer::max);\nnumbers.stream().mapToInt(x -> x).max();"
              }
            },
            {
              "question": "How to create a custom functional interface?",
              "answer": "(x, y) -> x + y",
              "code": {
                "language": "java",
                "content": "Calculator add = (x, y) -> x + y;"
              }
            },
            {
              "question": "How to find duplicate elements in a list?",
              "answer": "filter(x -> Collections.frequency(numbers, x) > 1)",
              "code": {
                "language": "java",
                "content": "numbers.stream().filter(x -> Collections.frequency(numbers, x) > 1).collect(Collectors.toSet());"
              }
            },
            {
              "question": "How to concatenate two streams?",
              "answer": "Stream.concat(stream1, stream2)",
              "code": {
                "language": "java",
                "content": "Stream<String> combined = Stream.concat(stream1, stream2);"
              }
            }
          ]
        },
        {
          "name": "HTML, CSS & JavaScript MCQ",
          "questions": [
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
            }
          ]
        }
      ]
    }
  ]
};
