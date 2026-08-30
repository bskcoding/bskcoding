// ===== OOP System Design — topic data =====
// Content matches the original standalone HTML guide 1:1.
// NOTE: videoLink currently points to the BSK CODING channel uploads
// (opens inside the app via VideoPlayerModal). Replace each with the
// topic's exact video URL when available, e.g.
//   "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"

import {
  svgClassObject,
  svgEncapsulation,
  svgInheritance,
  svgPolymorphism,
  svgAbstraction,
  svgAssociation,
  svgDependency,
} from "./oopsDiagrams";

const CHANNEL_UPLOADS =
  "https://www.youtube.com/playlist?list=UUTirDqmh7EyUCB8661XdwYw";

export const oopsTopics = [
  // ---------- 1. CLASS & OBJECT ----------
  {
    id: "class-object",
    icon: "fa-object-group",
    category: "foundation",
    title: "Class & Object",
    sub: "Blueprint & Instance",
    desc: "A Class is a template/blueprint. An Object is an instance of a class with actual values.",
    definition:
      'Class defines structure (fields + methods). Object is a concrete entity created from the class using the "new" keyword. Objects hold state (field values) and behavior (methods).',
    videoLink: CHANNEL_UPLOADS,
    code: `// ========== CLASS & OBJECT ==========

// 1. Define a Class (Blueprint)
class Student {
    // Fields (state)
    private String name;
    private int rollNo;
    private double gpa;

    // Constructor
    public Student(String name, int rollNo, double gpa) {
        this.name = name;
        this.rollNo = rollNo;
        this.gpa = gpa;
    }

    // Methods (behavior)
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNo);
        System.out.println("GPA: " + gpa);
    }

    public void study(int hours) {
        System.out.println(name + " studied for " + hours + " hours.");
    }

    // Getters
    public String getName() { return name; }
    public double getGpa() { return gpa; }
}

// 2. Create Objects (Instances)
public class Main {
    public static void main(String[] args) {
        // Object 1
        Student s1 = new Student("Alice", 101, 3.8);
        s1.displayInfo();
        s1.study(4);

        // Object 2
        Student s2 = new Student("Bob", 102, 3.2);
        s2.displayInfo();
        s2.study(2);

        // Object 3
        Student s3 = new Student("Charlie", 103, 3.9);
        s3.displayInfo();
    }
}`,
    diagram: svgClassObject,
    relation: "📦 Class = Blueprint | Object = Instance with state",
    points: [
      "One class → many objects",
      "Objects hold unique state",
      "Objects share behavior (methods)",
    ],
  },

  // ---------- 2. ENCAPSULATION ----------
  {
    id: "encapsulation",
    icon: "fa-shield-halved",
    category: "pillar",
    title: "Encapsulation",
    sub: "Data Hiding + Access Control",
    desc: "Bundling data with methods that operate on it, hiding internal state via private fields.",
    definition:
      "Encapsulation protects data integrity by making fields private and exposing controlled access via public getters/setters. It reduces complexity and prevents unwanted interference.",
    videoLink: CHANNEL_UPLOADS,
    code: `// ========== ENCAPSULATION ==========

class BankAccount {
    // Private fields — hidden from outside
    private String accountHolder;
    private double balance;
    private String accountNumber;

    // Constructor
    public BankAccount(String holder, String accNo, double initial) {
        this.accountHolder = holder;
        this.accountNumber = accNo;
        this.balance = initial;
    }

    // Public getters (read-only access)
    public String getAccountHolder() {
        return accountHolder;
    }

    public double getBalance() {
        return balance;
    }

    // Controlled setter with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance or invalid amount");
        }
    }

    // Business logic method
    public void applyInterest(double rate) {
        double interest = balance * rate / 100;
        balance += interest;
        System.out.println("Interest applied: " + interest);
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount("Alice", "SB-12345", 5000);

        // Cannot directly access balance
        // acc.balance = 99999;  // ❌ Compile error (private)

        // Use public methods
        acc.deposit(2000);
        acc.withdraw(500);
        acc.applyInterest(4.5);
        System.out.println("Final Balance: " + acc.getBalance());
    }
}`,
    diagram: svgEncapsulation,
    relation: "🔒 Private fields + Public methods = Controlled access",
    points: [
      "Fields are private (hidden)",
      "Getters/Setters provide controlled access",
      "Validation in setters",
      "Reduces complexity",
    ],
  },

  // ---------- 3. INHERITANCE ----------
  {
    id: "inheritance",
    icon: "fa-sitemap",
    category: "pillar",
    title: "Inheritance",
    sub: "IS-A Relationship",
    desc: "A child class inherits fields and methods from a parent class, enabling code reuse and hierarchy.",
    definition:
      'Inheritance creates a parent-child relationship using "extends". Child inherits all public/protected members and can override methods. Promotes reusability and polymorphism.',
    videoLink: CHANNEL_UPLOADS,
    code: `// ========== INHERITANCE ==========

// Parent class (Superclass)
class Employee {
    protected String name;
    protected int id;
    protected double baseSalary;

    public Employee(String name, int id, double baseSalary) {
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
    }

    public double calculateSalary() {
        return baseSalary;
    }

    public void displayInfo() {
        System.out.println("ID: " + id + ", Name: " + name);
        System.out.println("Salary: " + calculateSalary());
    }
}

// Child class 1
class Manager extends Employee {
    private double bonus;

    public Manager(String name, int id, double baseSalary, double bonus) {
        super(name, id, baseSalary);  // call parent constructor
        this.bonus = bonus;
    }

    @Override
    public double calculateSalary() {
        return super.calculateSalary() + bonus;
    }

    public void conductMeeting() {
        System.out.println(name + " is conducting a meeting.");
    }
}

// Child class 2
class Developer extends Employee {
    private String programmingLanguage;

    public Developer(String name, int id, double baseSalary, String lang) {
        super(name, id, baseSalary);
        this.programmingLanguage = lang;
    }

    @Override
    public double calculateSalary() {
        return super.calculateSalary() * 1.1;  // 10% hike
    }

    public void writeCode() {
        System.out.println(name + " is writing " + programmingLanguage + " code.");
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Manager mgr = new Manager("Alice", 101, 80000, 20000);
        Developer dev = new Developer("Bob", 102, 60000, "Java");

        mgr.displayInfo();    // Inherited
        mgr.conductMeeting(); // Own method

        dev.displayInfo();    // Inherited
        dev.writeCode();      // Own method
    }
}`,
    diagram: svgInheritance,
    relation: "🔄 Child extends Parent — IS-A relationship",
    points: [
      "extends keyword",
      "super() calls parent constructor",
      "@Override for method overriding",
      "Promotes code reuse",
    ],
  },

  // ---------- 4. POLYMORPHISM ----------
  {
    id: "polymorphism",
    icon: "fa-shapes",
    category: "pillar",
    title: "Polymorphism",
    sub: "Many Forms — Override + Overload",
    desc: "Objects of different types respond to the same method call in their own way. Compile-time (overloading) + Runtime (overriding).",
    definition:
      'Polymorphism means "many forms". Runtime polymorphism: parent reference, child object. Compile-time polymorphism: method overloading (same name, different params).',
    videoLink: CHANNEL_UPLOADS,
    code: `// ========== POLYMORPHISM ==========

// ===== 1. Runtime Polymorphism (Overriding) =====
class Shape {
    public void draw() {
        System.out.println("Drawing a generic shape");
    }
}

class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("⭕ Drawing a Circle");
    }
}

class Rectangle extends Shape {
    @Override
    public void draw() {
        System.out.println("▭ Drawing a Rectangle");
    }
}

class Triangle extends Shape {
    @Override
    public void draw() {
        System.out.println("△ Drawing a Triangle");
    }
}

// ===== 2. Compile-time Polymorphism (Overloading) =====
class MathOperations {
    // Same name, different parameters
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public String add(String a, String b) {
        return a + b;
    }
}

// ===== Usage =====
public class Main {
    public static void main(String[] args) {
        // Runtime Polymorphism
        Shape s1 = new Circle();
        Shape s2 = new Rectangle();
        Shape s3 = new Triangle();

        s1.draw();  // ⭕ Drawing a Circle
        s2.draw();  // ▭ Drawing a Rectangle
        s3.draw();  // △ Drawing a Triangle

        // Compile-time Polymorphism (Overloading)
        MathOperations math = new MathOperations();
        System.out.println(math.add(5, 10));            // 15
        System.out.println(math.add(2.5, 3.7));         // 6.2
        System.out.println(math.add(1, 2, 3));          // 6
        System.out.println(math.add("Hello", "World")); // HelloWorld
    }
}`,
    diagram: svgPolymorphism,
    relation: "🔄 Override (runtime) + Overload (compile-time)",
    points: [
      "Method Overriding (runtime)",
      "Method Overloading (compile-time)",
      "Parent reference, child object",
      "Dynamic method dispatch",
    ],
  },

  // ---------- 5. ABSTRACTION ----------
  {
    id: "abstraction",
    icon: "fa-layer-group",
    category: "pillar",
    title: "Abstraction",
    sub: "Hide Implementation, Show Interface",
    desc: "Exposing only essential features while hiding internal details using abstract classes and interfaces.",
    definition:
      "Abstraction focuses on what an object does instead of how. Abstract classes (partial implementation) and Interfaces (full abstraction) achieve this.",
    videoLink: CHANNEL_UPLOADS,
    code: `// ========== ABSTRACTION ==========

// 1. Abstract Class (Partial Abstraction)
abstract class PaymentProcessor {
    // Abstract method — must be implemented by child
    public abstract void processPayment(double amount);

    // Concrete method — shared by all children
    public void logTransaction(String type) {
        System.out.println("📝 [LOG] " + type + " payment initiated");
    }

    // Template method pattern
    public final void executePayment(double amount) {
        logTransaction("Payment");
        processPayment(amount);
        System.out.println("✅ Payment completed");
    }
}

// Concrete implementation 1
class CreditCardProcessor extends PaymentProcessor {
    private String cardNumber;

    public CreditCardProcessor(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    @Override
    public void processPayment(double amount) {
        System.out.println("💳 Charging " + amount + " to card: " + cardNumber);
    }
}

// Concrete implementation 2
class PayPalProcessor extends PaymentProcessor {
    private String email;

    public PayPalProcessor(String email) {
        this.email = email;
    }

    @Override
    public void processPayment(double amount) {
        System.out.println("🌐 Processing PayPal payment of " + amount + " for " + email);
    }
}

// 2. Interface (Full Abstraction)
interface Notifiable {
    void sendNotification(String message);
}

class EmailNotifier implements Notifiable {
    @Override
    public void sendNotification(String message) {
        System.out.println("📧 Email sent: " + message);
    }
}

class SMSNotifier implements Notifiable {
    @Override
    public void sendNotification(String message) {
        System.out.println("📱 SMS sent: " + message);
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        PaymentProcessor p1 = new CreditCardProcessor("****1234");
        p1.executePayment(150.00);

        PaymentProcessor p2 = new PayPalProcessor("user@example.com");
        p2.executePayment(75.50);

        Notifiable n1 = new EmailNotifier();
        n1.sendNotification("Order confirmed");
    }
}`,
    diagram: svgAbstraction,
    relation:
      "🎯 Abstract classes (partial) + Interfaces (full) = Abstraction",
    points: [
      "Abstract classes = partial implementation",
      "Interfaces = full abstraction",
      "Hides implementation details",
      "Promotes loose coupling",
    ],
  },

  // ---------- 6. ASSOCIATION (Aggregation + Composition) ----------
  {
    id: "association",
    icon: "fa-link",
    category: "relation",
    title: "Association",
    sub: "Has-A: Aggregation + Composition",
    desc: "Association defines relationships between classes. Aggregation (weak, shared) and Composition (strong, owned).",
    definition:
      "Association is a relationship where one object uses another. Aggregation: parts can exist independently (empty diamond). Composition: parts are owned and destroyed with the whole (filled diamond).",
    videoLink: CHANNEL_UPLOADS,
    code: `// ========== ASSOCIATION ==========

import java.util.*;

// ===== 1. Simple Association =====
class Department {
    private String name;
    public Department(String name) { this.name = name; }
    public String getName() { return name; }
}

class Employee {
    private String name;
    private Department dept;  // Association

    public Employee(String name, Department dept) {
        this.name = name;
        this.dept = dept;
    }
    public void work() {
        System.out.println(name + " works in " + dept.getName());
    }
}

// ===== 2. Aggregation (Weak Has-A) =====
class Wheel {
    private String type;
    private double pressure;

    public Wheel(String type, double pressure) {
        this.type = type;
        this.pressure = pressure;
    }
    public void rotate() {
        System.out.println(type + " wheel rotating at " + pressure + " PSI");
    }
}

class Car {
    private String model;
    private List<Wheel> wheels;  // Aggregation

    public Car(String model, List<Wheel> wheels) {
        this.model = model;
        this.wheels = wheels;  // Wheels are passed from outside
    }

    public void drive() {
        System.out.println("🚗 " + model + " is driving on " + wheels.size() + " wheels");
        for (Wheel w : wheels) {
            w.rotate();
        }
    }
}

// ===== 3. Composition (Strong Has-A) =====
class Room {
    private String name;
    private double area;

    public Room(String name, double area) {
        this.name = name;
        this.area = area;
    }
    public void describe() {
        System.out.println("   🏠 " + name + " (" + area + " sq ft)");
    }
}

class House {
    private String address;
    private List<Room> rooms;  // Composition

    public House(String address) {
        this.address = address;
        // Rooms are CREATED INSIDE — owned by House
        rooms = new ArrayList<>();
        rooms.add(new Room("Living Room", 250));
        rooms.add(new Room("Kitchen", 150));
        rooms.add(new Room("Bedroom", 180));
        rooms.add(new Room("Bathroom", 80));
    }

    public void showHouse() {
        System.out.println("🏠 House at " + address);
        System.out.println("Rooms:");
        for (Room r : rooms) {
            r.describe();
        }
    }
}

// ===== Usage =====
public class Main {
    public static void main(String[] args) {
        // Association
        Department it = new Department("IT");
        Employee e = new Employee("Alice", it);
        e.work();

        // Aggregation
        List<Wheel> wheelSet = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            wheelSet.add(new Wheel("All-Season", 32.5));
        }
        Car car = new Car("Tesla", wheelSet);
        car.drive();

        // Composition
        House house = new House("123 Main St");
        house.showHouse();
    }
}`,
    diagram: svgAssociation,
    relation:
      "🔗 Association (simple) | ◇ Aggregation (weak) | ● Composition (strong)",
    points: [
      "Association = general relationship",
      "Aggregation = shared parts (empty diamond)",
      "Composition = owned parts (filled diamond)",
      "Multiplicity defines cardinality",
    ],
  },

  // ---------- 7. DEPENDENCY ----------
  {
    id: "dependency",
    icon: "fa-arrow-right-arrow-left",
    category: "relation",
    title: "Dependency",
    sub: "Uses-A (Temporary)",
    desc: 'One class depends on another when it uses it as a method parameter, local variable, or return type. Weakest coupling.',
    definition:
      'Dependency is a temporary relationship where a class "uses" another class briefly. It\'s the loosest form of coupling. Shown as a dashed arrow in UML.',
    videoLink: CHANNEL_UPLOADS,
    code: `// ========== DEPENDENCY ==========

class Logger {
    public void log(String message) {
        System.out.println("📋 [LOG] " + message);
    }
}

class Order {
    private int orderId;
    private double amount;

    public Order(int orderId, double amount) {
        this.orderId = orderId;
        this.amount = amount;
    }

    // 1. Dependency as method parameter
    public void process(Logger logger) {
        logger.log("Processing order #" + orderId + " for $" + amount);
        logger.log("Order #" + orderId + " completed");
    }

    // 2. Dependency as local variable
    public void saveToDatabase() {
        DatabaseConnector connector = new DatabaseConnector();
        connector.saveOrder(this);
    }

    public int getOrderId() { return orderId; }
    public double getAmount() { return amount; }
}

class DatabaseConnector {
    public void saveOrder(Order order) {
        System.out.println("💾 Saving order #" + order.getOrderId() + " to DB");
    }
}

// 3. Dependency as return type
class ReportGenerator {
    public Report generateReport(Order order) {
        return new Report(order);
    }
}

class Report {
    private Order order;
    public Report(Order order) { this.order = order; }
    public void print() {
        System.out.println("📊 Report for Order #" + order.getOrderId());
        System.out.println("   Amount: $" + order.getAmount());
    }
}

// 4. Dependency on interface
interface PaymentGateway {
    void charge(double amount);
}

class StripeGateway implements PaymentGateway {
    @Override
    public void charge(double amount) {
        System.out.println("💳 Stripe: Charged $" + amount);
    }
}

class CheckoutService {
    public void checkout(Order order, PaymentGateway gateway) {
        System.out.println("🛒 Checking out order #" + order.getOrderId());
        gateway.charge(order.getAmount());
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Order order = new Order(1001, 250.50);
        Logger logger = new Logger();
        order.process(logger);

        CheckoutService service = new CheckoutService();
        service.checkout(order, new StripeGateway());
    }
}`,
    diagram: svgDependency,
    relation:
      "➡️ Dependency = temporary usage (method param / local var / return type)",
    points: [
      "Method parameter dependency",
      "Local variable dependency",
      "Return type dependency",
      "Weakest coupling",
      "Dashed arrow in UML",
    ],
  },
];
