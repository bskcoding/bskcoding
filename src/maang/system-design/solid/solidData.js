// ===== SOLID Principles — topic data =====
import {
  svgSRP,
  svgOCP,
  svgLSP,
  svgISP,
  svgDIP,
} from "./solidDiagrams";

const CHANNEL_UPLOADS =
  "https://www.youtube.com/playlist?list=UUTirDqmh7EyUCB8661XdwYw";

export const solidTopics = [
  {
    id: "srp",
    icon: "fa-gem",
    title: "S — Single Responsibility (SRP)",
    sub: "One reason to change",
    desc: "A class should have only one reason to change, i.e., only one responsibility.",
    definition:
      "SRP states that a class should have only one reason to change — one responsibility. High cohesion within a module and loose coupling between modules. Split large classes into focused, single-purpose ones.",
    videoLink: "https://www.youtube.com/watch?v=EMbCnn01rxc",
    code: `// ===== SINGLE RESPONSIBILITY PRINCIPLE (SRP) =====
// BAD: One class doing three jobs
class ReportGenerator {
    private ReportData data;
    private Database db;
    private EmailService emailService;

    // 1. Builds report
    public String buildReport() {
        return "Report: " + data.toString();
    }
    // 2. Saves to DB
    public void saveToDatabase() {
        db.save(data);
    }
    // 3. Sends email
    public void sendEmail(String recipient) {
        emailService.send(recipient, buildReport());
    }
}

// GOOD: Three single-responsibility classes
class ReportBuilder {
    public String buildReport(ReportData data) {
        return "Report: " + data.toString();
    }
}

class ReportRepository {
    private Database db = new Database();
    public void save(ReportData data) {
        db.save(data);
    }
}

class NotificationService {
    private EmailService emailService = new EmailService();
    public void sendReport(String recipient, String report) {
        emailService.send(recipient, report);
    }
}

// Orchestrator
class ReportWorkflow {
    private ReportBuilder builder = new ReportBuilder();
    private ReportRepository repo = new ReportRepository();
    private NotificationService notifier = new NotificationService();

    public void generateAndSend(ReportData data, String recipient) {
        String report = builder.buildReport(data);   // 1 job
        repo.save(data);                              // 1 job
                notifier.sendReport(recipient, report);      // 1 job
    }
}`,
    diagram: svgSRP,
    relation: "🎯 One class = one job → one reason to change",
    points: [
      "Single responsibility per class",
      "Split large classes",
      "Increases cohesion, reduces coupling",
      "Easier to test, reuse, maintain",
    ],
  },

  // ---------- 2. OCP ----------
  {
    id: "ocp",
    icon: "fa-lock-open",
    title: "O — Open/Closed (OCP)",
    sub: "Open for extension, closed for modification",
    desc: "Software entities should be open for extension but closed for modification.",
    definition:
      "Classes should be open for extension (you can add new behavior) but closed for modification (you don't change existing code). Achieve this with abstractions and dependency injection.",
    videoLink: "https://www.youtube.com/watch?v=j1ZxAKLonl4",
    code: `// ===== OPEN/CLOSED PRINCIPLE (OCP) =====
import java.util.*;

interface DiscountStrategy {
    double apply(double price);
}

class RegularDiscount implements DiscountStrategy {
    public double apply(double price) { return price; }
}
class SeasonalDiscount implements DiscountStrategy {
    public double apply(double price) { return price * 0.9; }
}
class VIPDiscount implements DiscountStrategy {
    public double apply(double price) { return price * 0.8; }
}

class PriceCalculator {
    private final List<DiscountStrategy> strategies = new ArrayList<>();
    public void addStrategy(DiscountStrategy s) { strategies.add(s); }
    public double calculate(double price) {
        double total = price;
        for (DiscountStrategy s : strategies) { total = s.apply(total); }
        return total;
    }
}

// NEW strategy added without touching PriceCalculator
class BlackFridayDiscount implements DiscountStrategy {
    public double apply(double price) { return price * 0.7; }
}

public class Main {
    public static void main(String[] args) {
        PriceCalculator calc = new PriceCalculator();
        calc.addStrategy(new SeasonalDiscount());
        calc.addStrategy(new VIPDiscount());
        System.out.println(calc.calculate(1000));  // 720.0

        PriceCalculator bf = new PriceCalculator();
        bf.addStrategy(new BlackFridayDiscount());
            }\n}`,
    diagram: svgOCP,
    relation: "🔓 Extend behavior via new classes/interfaces — don't edit existing code",
    points: [
      "Abstraction over implementation",
      "Strategy pattern fits OCP",
      "Add new behavior without modifying",
      "Dependency injection for flexibility",
    ],
  },

  // ---------- 3. LSP ----------
  {
    id: "lsp",
    icon: "fa-object-extend",
    title: "L — Liskov Substitution (LSP)",
    sub: "Subtypes must be substitutable",
    desc: "Objects of a superclass should be replaceable with objects of its subclasses without breaking.",
    definition:
      "LSP: if S is a subtype of T, objects of T may be replaced with objects of type S without altering desirable properties of the program. In practice, subclasses must honor the contract/promises of their parent.",
    videoLink: "https://www.youtube.com/watch?v=irHHnn7CZAA",
    code: `// ===== LISKOV SUBSTITUTION PRINCIPLE (LSP) =====
// BAD: Square is a Rectangle but can't honor setWidth/setHeight contract
abstract class Rectangle {
    protected double width, height;
    public abstract void setWidth(double w);
    public abstract void setHeight(double h);
    public abstract double getArea();
}
class BadSquare extends Rectangle {
    public void setWidth(double w) { this.width = this.height = w; }
    public void setHeight(double h) { this.width = this.height = h; }
    public double getArea() { return width * width; }  // violates Rectangle contract
}

// GOOD: Shared base with proper contract
abstract class Shape {
    public abstract double getArea();
}
class RectangleGood extends Shape {
    private double width, height;
    public RectangleGood(double w, double h) { this.width = w; this.height = h; }
    public double getArea() { return width * height; }
}
class SquareGood extends Shape {
    private double side;
    public SquareGood(double side) { this.side = side; }
    public double getArea() { return side * side; }
}

// Works for both — substitution holds
public class Main {
    public static void printArea(Shape s) {
        System.out.println("Area: " + s.getArea());
    }
    public static void main(String[] args) {
        printArea(new RectangleGood(4, 5));  // Area: 20.0
                printArea(new SquareGood(5));        // Area: 25.0
    }
}`,
    diagram: svgLSP,
    relation: "↪️ Subtypes must honor the parent's contract — substitutability",
    points: [
      "Subclasses must preserve invariants",
      "Don't narrow preconditions / widen postconditions",
      "Favor composition over inheritance when in doubt",
      "Substitutability = behavior preserved",
    ],
  },

  // ---------- 4. ISP ----------
  {
    id: "isp",
    icon: "fa-plug",
    title: "I — Interface Segregation (ISP)",
    sub: "Many slim clients over one fat interface",
    desc: "Clients should not be forced to depend on interfaces they don't use.",
    definition:
      'ISP: many client-specific interfaces are better than one general-purpose "fat" interface. Each interface should have only the methods a particular client cares about.',
    videoLink: "https://www.youtube.com/watch?v=4ZdsinALUX8",
    code: `// ===== INTERFACE SEGREGATION PRINCIPLE (ISP) =====
// BAD: One fat interface forces everyone to implement unused methods
interface WorkerAllInOne {
    void code();
    void test();
    void designUI();
    void leadTeam();
    void writeDocs();
}
class Developer implements WorkerAllInOne {
    public void code() { }
    public void test() { }
    public void designUI() { }
    public void leadTeam() { }       // forced — dev doesn't lead
    public void writeDocs() { }      // forced — dev avoids docs
}
class TechLead implements WorkerAllInOne {
    public void code() { }
    // ... must still implement test, designUI, writeDocs
}

// GOOD: Slim, segregated interfaces
interface Coder { void code(); }
interface Tester { void test(); }
interface Designer { void designUI(); }
interface Leader  { void leadTeam(); }
interface Documenter { void writeDocs(); }

class Developer implements Coder, Tester, Designer {
    public void code() { System.out.println("Writing Java code"); }
    public void test() { System.out.println("Writing unit tests"); }
    public void designUI() { System.out.println("Designing screens"); }
}
class Manager implements Leader, Documenter {
    public void leadTeam() { System.out.println("Leading team"); }
    public void writeDocs() { System.out.println("Writing docs"); }
}
}`,
    diagram: svgISP,
    relation: "✂️ Slim interfaces — clients implement only what they need",
    points: [
      "No empty method implementations",
      "Role-based interfaces",
      "Reduce coupling between modules",
      "Single-responsibility for interfaces too",
    ],
  },

  // ---------- 5. DIP ----------
  {
    id: "dip",
    icon: "fa-plug-circle-plus",
    title: "D — Dependency Inversion (DIP)",
    sub: "Depend on abstractions, not concretions",
    desc: "High-level modules should not depend on low-level modules. Both should depend on abstractions.",
    definition:
      "DIP: depend on abstractions (interfaces/abstract classes), not concrete implementations. Inject the concrete dependency from outside (constructor/ method injection).",
    videoLink: "https://www.youtube.com/watch?v=XDRSpWS8urM",
    code: `// ===== DEPENDENCY INVERSION PRINCIPLE (DIP) =====
// BAD: High-level class directly creates low-level class
class OrderService {
    private MySQLDatabase db = new MySQLDatabase();   // hard dependency
    public void save(String order) {
        db.save(order);   // tied to MySQL forever
    }
}

// GOOD: Depend on abstraction; inject concrete impl
interface Database {
    void save(String data);
}
class MySQLDatabase implements Database {
    public void save(String data) { System.out.println("Saved to MySQL: " + data); }
}
class PostgresDatabase implements Database {
    public void save(String data) { System.out.println("Saved to Postgres: " + data); }
}

class OrderServiceGood {
    private Database db;                          // depends on abstraction
    public OrderServiceGood(Database db) {        // injected from outside
        this.db = db;
    }
    public void save(String order) { db.save(order); }
}

public class Main {
    public static void main(String[] args) {
        Database mysql = new MySQLDatabase();
        OrderServiceGood service = new OrderServiceGood(mysql);
        service.save("Order #123");

        Database pg = new PostgresDatabase();     // swap — no code change to service
        OrderServiceGood service2 = new OrderServiceGood(pg);
        service2.save("Order #124");
    }
}`,
    diagram: svgDIP,
    relation: "🔄 High-level ↔ Abstraction ← Low-level (inject the impl)",
    points: [
      "Depend on abstractions, not concretions",
      "Constructor / setter / method injection",
      "Enables testability (easily mocked)",
      "Swappable implementations",
    ],
  },
];