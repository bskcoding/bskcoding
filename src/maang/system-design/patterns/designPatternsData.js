// ===== Design Patterns — topic data =====
import {
  svgSingleton,
  svgFactory,
  svgBuilder,
  svgObserver,
  svgStrategy,
  svgDecorator,
  svgAdapter,
} from "./designPatternsDiagrams";

const CHANNEL_UPLOADS =
  "https://www.youtube.com/playlist?list=UUTirDqmh7EyUCB8661XdwYw";

export const designPatternsTopics = [
  // ---------- 1. SINGLETON ----------
  {
    id: "singleton",
    icon: "fa-infinity",
    title: "Singleton",
    sub: "Creational · one instance",
    desc: "Ensures a class has only one instance and provides a global point of access.",
    definition:
      "Singleton restricts instantiation to a single object with a private constructor and a static getInstance() method. Thread-safe (double-checked locking) variant included.",
    videoLink: CHANNEL_UPLOADS,
    code: `// ===== SINGLETON PATTERN =====

// Thread-safe Singleton with double-checked locking
class DatabaseConnection {
    private static volatile DatabaseConnection instance;
    private boolean connected;

    private DatabaseConnection() {
        // private constructor → no external new
        this.connected = false;
    }

    public static DatabaseConnection getInstance() {
        if (instance == null) {              // first check
            synchronized (DatabaseConnection.class) {
                if (instance == null) {      // second check
                    instance = new DatabaseConnection();
                }
            }
        }
        return instance;
    }

    public void connect() {
        if (!connected) {
            connected = true;
            System.out.println("Connected to primary DB");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        DatabaseConnection a = DatabaseConnection.getInstance();
        DatabaseConnection b = DatabaseConnection.getInstance();

        System.out.println(a == b);   // true — same instance
        a.connect();                  // Connected once
        b.connect();                  // already connected
    }
}`,
    diagram: svgSingleton,
    relation: "🔂 One instance throughout the app — global access point",
    points: [
      "Private constructor",
      "Static getInstance() with double-checked locking",
      "Thread-safe (volatile field)",
      "Used for DB pools, config, logging",
    ],
  },

  // ---------- 2. FACTORY ----------
  {
    id: "factory",
    icon: "fa-industry",
    title: "Factory Method",
    sub: "Creational · object creation",
    desc: "Defines an interface for creating objects but lets subclasses decide which class to instantiate.",
    definition:
      "Factory Method moves the instantiation logic away from the client into a factory. The client depends on the interface, and the factory decides the concrete type — perfect for OCP.",
    videoLink: CHANNEL_UPLOADS,
    code: `// ===== FACTORY METHOD PATTERN =====

// Product interface
interface Notification {
    void send(String message);
}

// Concrete products
class EmailNotification implements Notification {
    public void send(String message) {
        System.out.println("📧 Email: " + message);
    }
}
class SMSNotification implements Notification {
    public void send(String message) {
        System.out.println("📱 SMS: " + message);
    }
}
class PushNotification implements Notification {
    public void send(String message) {
        System.out.println("🔔 Push: " + message);
    }
}

// Factory — decides which concrete object to create
class NotificationFactory {
    public static Notification create(String channel) {
        switch (channel) {
            case "email": return new EmailNotification();
            case "sms":   return new SMSNotification();
            case "push":  return new PushNotification();
            default: throw new IllegalArgumentException("Unknown: " + channel);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Client never uses 'new' — factory does the work
        Notification n1 = NotificationFactory.create("email");
        n1.send("Welcome!");

        Notification n2 = NotificationFactory.create("push");
        n2.send("New message");
    }
}`,
    diagram: svgFactory,
    relation: "🏭 Factory decides the concrete object — client hides 'new'",
    points: [
      "Client depends on the interface",
      "Factory encapsulates creation logic",
      "Easy to add new product types (OCP)",
      "Reduces tight coupling",
    ],
  },

  // ---------- 3. BUILDER ----------
  {
    id: "builder",
    icon: "fa-layer-group",
    title: "Builder",
    sub: "Creational · complex objects",
    desc: "Separates object construction from its representation, step by step.",
    definition:
      "Builder lets you construct complex objects piece by piece with a fluent API. Useful when an object has many optional parameters or an awkward constructor.",
    videoLink: CHANNEL_UPLOADS,
    code: `// ===== BUILDER PATTERN =====

class HttpRequest {
    private final String method;
    private final String url;
    private final String body;      // optional
    private final boolean retry;    // optional

    private HttpRequest(Builder b) {
        this.method = b.method;
        this.url = b.url;
        this.body = b.body;
        this.retry = b.retry;
    }

    public String toString() {
        return method + " " + url + " body='" + body + "' retry=" + retry;
    }

    // Fluent Builder
    public static class Builder {
        private String method = "GET"; // defaults
        private String url = "/";
        private String body = "";
        private boolean retry = false;

        public Builder method(String m) { this.method = m; return this; }
        public Builder url(String u)    { this.url = u; return this; }
        public Builder body(String b)   { this.body = b; return this; }
        public Builder retry(boolean r) { this.retry = r; return this; }

        public HttpRequest build() { return new HttpRequest(this); }
    }
}

public class Main {
    public static void main(String[] args) {
        // Only set what you need — fluent chain
        HttpRequest req = new HttpRequest.Builder()
                .method("POST")
                .url("/api/order")
                .body("{\\"userId\\": 1}")
                .retry(true)
                .build();

        System.out.println(req);
        // POST /api/order body='{"userId": 1}' retry=true
    }
}`,
    diagram: svgBuilder,
    relation: "🧱 Fluent step-by-step construction — optional params without megaconstructors",
    points: [
      "Fluent chained setters",
      "Immutability after build",
      "Handles many optional parameters",
      "Improves readability",
    ],
  },

  // ---------- 4. OBSERVER ----------
  {
    id: "observer",
    icon: "fa-bell",
    title: "Observer",
    sub: "Behavioural · publish-subscribe",
    desc: "Define a one-to-many dependency so when one object changes, its dependents are notified.",
    definition:
      "Observer (publish/subscribe): a Subject maintains a list of Observers and notifies them of state changes. Decouples producer from consumers — new observers can be added without touching the subject.",
    videoLink: CHANNEL_UPLOADS,
    code: `// ===== OBSERVER PATTERN =====
import java.util.*;

interface Observer {
    void update(String message);
}

// Subject (Publisher)
class NewsAgency {
    private List<Observer> observers = new ArrayList<>();
    private String latestNews;

    public void subscribe(Observer o) { observers.add(o); }
    public void unsubscribe(Observer o) { observers.remove(o); }

    // When news arrives, notify everyone
    public void publish(String news) {
        this.latestNews = news;
        for (Observer o : observers) {
            o.update(news);
        }
    }
}

// Observers (Subscribers)
class EmailSubscriber implements Observer {
    private String name;
    public EmailSubscriber(String name) { this.name = name; }
    public void update(String message) {
        System.out.println(name + " got email: " + message);
    }
}
class PushSubscriber implements Observer {
    private String name;
    public PushSubscriber(String name) { this.name = name; }
    public void update(String message) {
        System.out.println(name + " got push: " + message);
    }
}

public class Main {
    public static void main(String[] args) {
        NewsAgency agency = new NewsAgency();

        Observer alice = new EmailSubscriber("Alice");
        Observer bob   = new PushSubscriber("Bob");

        agency.subscribe(alice);
        agency.subscribe(bob);

        agency.publish("Breaking: AI wins gold!");
        // Alice got email: Breaking...
        // Bob got push: Breaking...
    }
}`,
    diagram: svgObserver,
    relation: "🔔 Subject notifies observers on change — publish/subscribe",
    points: [
      "One-to-many dependency",
      "Observer decoupled from subject",
      "New observers added without subject change",
      "Event-driven design",
    ],
  },

  // ---------- 5. STRATEGY ----------
  {
    id: "strategy",
    icon: "fa-bullseye",
    title: "Strategy",
    sub: "Behavioural · interchangeable algorithms",
    desc: "Define a family of algorithms, encapsulate each, and make them interchangeable at runtime.",
    definition:
      "Strategy pattern lets you swap algorithms at runtime by encapsulating them behind an interface. The context delegates to the current strategy — no if/else chains for behavior selection.",
    videoLink: CHANNEL_UPLOADS,
    code: `// ===== STRATEGY PATTERN =====

// Strategy interface
interface PaymentStrategy {
    void pay(double amount);
}

// Concrete strategies
class CreditCardPayment implements PaymentStrategy {
    private String cardNo;
    public CreditCardPayment(String cardNo) { this.cardNo = cardNo; }
    public void pay(double amount) {
        System.out.println("💳 Paid $" + amount + " via card " + cardNo);
    }
}
class PayPalPayment implements PaymentStrategy {
    private String email;
    public PayPalPayment(String email) { this.email = email; }
    public void pay(double amount) {
        System.out.println("🌐 Paid $" + amount + " via PayPal " + email);
    }
}
class CryptoPayment implements PaymentStrategy {
    public void pay(double amount) {
        System.out.println("🪙 Paid $" + amount + " via Crypto");
    }
}

// Context — uses a chosen strategy
class Checkout {
    private PaymentStrategy strategy;
    public void setStrategy(PaymentStrategy s) { this.strategy = s; }
    public void checkout(double amount) {
        strategy.pay(amount);   // delegate to current strategy
    }
}

public class Main {
    public static void main(String[] args) {
        Checkout cart = new Checkout();

        cart.setStrategy(new CreditCardPayment("4242-****"));
        cart.checkout(100);   // via card

        cart.setStrategy(new PayPalPayment("user@mail.com"));
        cart.checkout(250);   // swap strategy at runtime

        cart.setStrategy(new CryptoPayment());
        cart.checkout(500);
    }
}`,
    diagram: svgStrategy,
    relation: "🎯 Swap algorithms at runtime — no if/else for behavior",
    points: [
      "Encapsulated interchangeable algorithms",
      "Runtime strategy switching",
      "Follows OCP (add strategy, don't modify)",
      "Delegation to current strategy",
    ],
  },

  // ---------- 6. DECORATOR ----------
  {
    id: "decorator",
    icon: "fa-wand-magic-sparkles",
    title: "Decorator",
    sub: "Structural · add behavior dynamically",
    desc: "Attach additional responsibilities to an object dynamically at runtime.",
    definition:
      "Decorator wraps an object to add new behavior without modifying its class. Composing multiple decorators stacks behavior — an alternative to subclassing for adding features.",
    videoLink: CHANNEL_UPLOADS,
    code: `// ===== DECORATOR PATTERN =====

// Component interface
interface Coffee {
    double cost();
    String description();
}

// Concrete component
class SimpleCoffee implements Coffee {
    public double cost() { return 2.0; }
    public String description() { return "Plain Coffee"; }
}

// Decorator base
abstract class CoffeeDecorator implements Coffee {
    protected Coffee coffee;
    public CoffeeDecorator(Coffee coffee) { this.coffee = coffee; }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee c) { super(c); }
    public double cost() { return coffee.cost() + 0.5; }
    public String description() { return coffee.description() + " + Milk"; }
}
class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee c) { super(c); }
    public double cost() { return coffee.cost() + 0.2; }
    public String description() { return coffee.description() + " + Sugar"; }
}
class WhippedCreamDecorator extends CoffeeDecorator {
    public WhippedCreamDecorator(Coffee c) { super(c); }
    public double cost() { return coffee.cost() + 0.7; }
    public String description() { return coffee.description() + " + Cream"; }
}

public class Main {
    public static void main(String[] args) {
        // Start with base, then stack decorators at runtime
        Coffee myCoffee = new WhippedCreamDecorator(
                            new SugarDecorator(
                              new MilkDecorator(
                                new SimpleCoffee())));

        System.out.println(myCoffee.description());
        // Plain Coffee + Milk + Sugar + Cream
        System.out.println("Cost: $" + myCoffee.cost());
        // Cost: $3.4
    }
}`,
    diagram: svgDecorator,
    relation: "🪄 Wrap objects to stack new behavior — an alternative to subclassing",
    points: [
      "Add behavior dynamically at runtime",
      "Compose multiple decorators",
      "Avoids subclass explosion",
      "Wraps component with same interface",
    ],
  },

  // ---------- 7. ADAPTER ----------
  {
    id: "adapter",
    icon: "fa-plug-circle-bolt",
    title: "Adapter",
    sub: "Structural · make interfaces compatible",
    desc: "Allows incompatible interfaces to work together by acting as a bridge.",
    definition:
      "Adapter converts the interface of a class into another interface the client expects. Two equally-named classes (Thermal/ElectricalPrinter) or incompatible APIs are bridged so they can collaborate without changing either side.",
    videoLink: CHANNEL_UPLOADS,
    code: `// ===== ADAPTER PATTERN =====

// Target interface the client expects
interface USB {
    void connect();
}

// Adaptee — existing, incompatible interface
class LightningConnector {
    public void plugLightning() {
        System.out.println("🔗 Lightning cable connected");
    }
}

// Adapter — bridges Lightning → USB
class LightningToUSBAdapter implements USB {
    private LightningConnector lightning;
    public LightningToUSBAdapter(LightningConnector lightning) {
        this.lightning = lightning;
    }
    public void connect() {
        lightning.plugLightning();   // translate USB.connect → plugLightning
    }
}

// Client
class Laptop {
    public void acceptUsb(USB usb) {
        usb.connect();
        System.out.println("💻 Laptop reading data over USB");
    }
}

// Another example: XML → JSON adapter
interface DataLoader { String loadData(); }
class XMLDataService {
    public String fetchXML() { return "<user><name>Alice</name></user>"; }
}
class XMLToJSONAdapter implements DataLoader {
    private XMLDataService xmlService;
    public XMLToJSONAdapter(XMLDataService s) { this.xmlService = s; }
    public String loadData() {
        String xml = xmlService.fetchXML();
        // simplified conversion
        return xml.replace("<", "{").replace(">", "}");
    }
}

public class Main {
    public static void main(String[] args) {
        Laptop laptop = new Laptop();
        // Client only knows USB — adapter translates
        USB adapter = new LightningToUSBAdapter(new LightningConnector());
        laptop.acceptUsb(adapter);
    }
}`,
    diagram: svgAdapter,
    relation: "🔌 Adapter bridges incompatible interfaces — no change to either side",
    points: [
      "Translates target interface to adaptee",
      "No modification to client or adaptee",
      "Lightning → USB, XML → JSON examples",
      "Useful for legacy integration",
    ],
  },
];