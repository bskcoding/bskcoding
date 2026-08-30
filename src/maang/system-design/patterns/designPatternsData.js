// ===== Design Patterns — topic data =====
import {
  svgSingleton,
  svgFactory,
  svgBuilder,
  svgObserver,
  svgStrategy,
  svgProxy,
  svgChainOfResponsibility,
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
    category: "creational",
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
    category: "creational",
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
    category: "creational",
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
    category: "behavioral",
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
    category: "behavioral",
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

  // ---------- 6. PROXY ----------
  {
    id: "proxy",
    icon: "fa-shield-halved",
    title: "Proxy",
    sub: "Structural · controlled access",
    category: "structural",
    desc: "Provide a placeholder or surrogate for another object to control access to it.",
    definition:
      "Proxy provides a surrogate/placeholder for another object to control access. Common types: Virtual (lazy loading), Protection (auth checks), Remote (network), Caching (memoize). Same interface as the real object.",
    videoLink: CHANNEL_UPLOADS,
    code: `// ===== PROXY PATTERN =====
// Proxy controls access to a real object.
// RealImage is heavy (loads from disk); ProxyImage loads lazily + caches.

public class Main {

    // ---- Subject interface (both Real and Proxy implement this) ----
    interface Image {
        void display();
    }

    // ---- Real subject (heavy / expensive to construct) ----
    static class RealImage implements Image {
        private String filename;

        public RealImage(String filename) {
            this.filename = filename;
            loadFromDisk();             // expensive operation
        }

        private void loadFromDisk() {
            System.out.println("Loading image from disk: " + filename);
        }

        public void display() {
            System.out.println("Displaying image: " + filename);
        }
    }

    // ---- Proxy: lazy load + cache ----
    static class ProxyImage implements Image {
        private String filename;
        private RealImage realImage;     // holds the real subject

        public ProxyImage(String filename) {
            this.filename = filename;     // NOT loading yet
        }

        public void display() {
            // Lazy: only create RealImage when first needed
            if (realImage == null) {
                realImage = new RealImage(filename);
            }
            realImage.display();
        }
    }

    public static void main(String[] args) {
        // Client uses the proxy — does NOT know about RealImage
        Image img1 = new ProxyImage("photo1.jpg");
        Image img2 = new ProxyImage("photo2.jpg");

        // First display → triggers loading
        img1.display();
        img1.display();                  // already loaded, no re-load

        img2.display();
    }
}`,
    diagram: svgProxy,
    relation: "🛡️ Proxy controls access to real subject — lazy load / cache / auth / remote",
    points: [
      "Same interface as the real object",
      "Virtual proxy = lazy initialization",
      "Protection proxy = access control / auth",
      "Caching & remote proxies are common",
    ],
  },

  // ---------- 7. CHAIN OF RESPONSIBILITY ----------
  {
    id: "chain",
    icon: "fa-link",
    title: "Chain of Responsibility",
    sub: "Behavioural · pass the request",
    category: "behavioral",
    desc: "Pass a request along a chain of handlers until one of them handles it.",
    definition:
      "Chain of Responsibility decouples sender from receiver by giving multiple objects a chance to handle the request. Each handler holds a reference to the next; if it can't handle, it forwards. Common in logging, auth, approval flows, middleware.",
    videoLink: CHANNEL_UPLOADS,
    code: `// ===== CHAIN OF RESPONSIBILITY PATTERN =====
// A support ticket flows through handlers until one resolves it.
//   $50  → Bot handles
//   $500 → Supervisor handles
//   else → Manager handles

public class Main {

    // ---- Request ----
    static class SupportTicket {
        private String issue;
        private int amount;
        public SupportTicket(String issue, int amount) {
            this.issue = issue;
            this.amount = amount;
        }
        public String getIssue() { return issue; }
        public int    getAmount() { return amount; }
    }

    // ---- Abstract Handler ----
    abstract static class SupportHandler {
        protected SupportHandler next;   // link to next handler
        public void setNext(SupportHandler next) { this.next = next; }
        public abstract void handle(SupportTicket t);
        protected void forward(SupportTicket t) {
            if (next != null) next.handle(t);
            else              System.out.println("No one could handle: " + t.getIssue());
        }
    }

    // ---- Concrete Handler 1: Bot (small issues) ----
    static class BotHandler extends SupportHandler {
        public void handle(SupportTicket t) {
            if (t.getAmount() < 100) {
                System.out.println("[Bot]     resolved: " + t.getIssue() + " ($" + t.getAmount() + ")");
            } else {
                forward(t);     // pass to next
            }
        }
    }

    // ---- Concrete Handler 2: Supervisor ----
    static class SupervisorHandler extends SupportHandler {
        public void handle(SupportTicket t) {
            if (t.getAmount() <= 1000) {
                System.out.println("[Sup]     resolved: " + t.getIssue() + " ($" + t.getAmount() + ")");
            } else {
                forward(t);
            }
        }
    }

    // ---- Concrete Handler 3: Manager ----
    static class ManagerHandler extends SupportHandler {
        public void handle(SupportTicket t) {
            System.out.println("[Mgr]     resolved: " + t.getIssue() + " ($" + t.getAmount() + ")");
        }
    }

    public static void main(String[] args) {
        // Build the chain: Bot → Supervisor → Manager
        SupportHandler bot = new BotHandler();
        SupportHandler sup = new SupervisorHandler();
        SupportHandler mgr = new ManagerHandler();
        bot.setNext(sup);
        sup.setNext(mgr);

        // Send tickets — each finds its handler
        bot.handle(new SupportTicket("Reset password",  0));
        bot.handle(new SupportTicket("Refund request",  500));
        bot.handle(new SupportTicket("Server outage",  10000));
    }
}`,
    diagram: svgChainOfResponsibility,
    relation: "🔗 Request flows through handlers until one processes it",
    points: [
      "Decouples sender from receiver",
      "Each handler decides: handle or pass on",
      "Easy to add / remove handlers at runtime",
      "Used in: middleware, auth, logging, approvals",
    ],
  },
];