// ===== SOLID Principles — topic data =====
import {
  svgSRP,
  svgOCP,
  svgLSP,
  svgISP,
  svgDIP,
} from "./solidDiagrams";

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
// One class → ONE responsibility (one reason to change).
//
// Salary domain — split into 3 SEPARATE classes (one file each):
//
//   SalaryService.java     → calculate salary (business logic)
//   SalaryRepository.java  → save salary to DB  (persistence)
//   SalaryReport.java      → generate payslip   (reporting)
//
// Each class has exactly ONE reason to change.

// ---------- File 1: SalaryService.java ----------
public class SalaryService {
    public void calculateSalary() {
        System.out.println("SalaryService  → Calculate the employee salary");
    }
}

// ---------- File 2: SalaryRepository.java ----------
public class SalaryRepository {
    public void saveSalary() {
        System.out.println("SalaryRepository → Save the salary record to DB");
    }
}

// ---------- File 3: SalaryReport.java ----------
public class SalaryReport {
    public void generateReport() {
        System.out.println("SalaryReport    → Generate the monthly payslip");
    }
}

// ---------- File 4: Main.java ----------
public class Main {
    public static void main(String[] args) {

        // Each class handles its OWN responsibility
        SalaryService    salaryService = new SalaryService();
        SalaryRepository repository    = new SalaryRepository();
        SalaryReport     report        = new SalaryReport();

        salaryService.calculateSalary();   // job 1 — calculation
        repository.saveSalary();           // job 2 — persistence
        report.generateReport();           // job 3 — reporting
    }
}`,
    diagram: svgSRP,
    relation: "🎯 One class = one job → one reason to change",
    points: [
      "One class → one responsibility",
      "3 separate files, 3 separate jobs",
      "Change payslip format? → only SalaryReport changes",
      "Change DB? → only SalaryRepository changes",
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
// Open for EXTENSION (add new payment type)
// Closed for MODIFICATION (don't touch existing code)
//
// Payment domain: a Payment interface with 3 implementations
//   - To add a new payment method (e.g. CryptoPayment) you just
//     create a NEW class — no existing class is modified.

public class Main {

    interface Payment {
        void pay();
    }

    static class PaypalPayment implements Payment {
        public void pay() {
            System.out.println("Payment using PayPal");
        }
    }

    static class UPIPayment implements Payment {
        public void pay() {
            System.out.println("Payment using UPI");
        }
    }

    static class CreditCardPayment implements Payment {
        public void pay() {
            System.out.println("Payment using Credit Card");
        }
    }

    public static void main(String[] args) {

        // Same reference type (Payment), different implementations
        Payment payment1 = new PaypalPayment();
        payment1.pay();                       // → PayPal

        Payment payment2 = new UPIPayment();
        payment2.pay();                       // → UPI

        Payment payment3 = new CreditCardPayment();
        payment3.pay();                       // → Credit Card

        // To add a new payment method → just add a new class.
        // No existing code (PaypalPayment, UPIPayment, etc.) is modified.
    }
}`,
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
// Any child implementation must be replaceable with the parent
// type WITHOUT breaking the program.
//
// Payment domain: a Payment interface with multiple implementations.
// The same "Payment" reference can be swapped between PayPal, UPI,
// Credit Card — and the program still works exactly the same.

public class Main {

    interface Payment {
        void pay();
    }

    static class PaypalPayment implements Payment {
        public void pay() {
            System.out.println("Payment using PayPal");
        }
    }

    static class UPIPayment implements Payment {
        public void pay() {
            System.out.println("Payment using UPI");
        }
    }

    static class CreditCardPayment implements Payment {
        public void pay() {
            System.out.println("Payment using Credit Card");
        }
    }

    public static void main(String[] args) {

        // One parent reference (Payment) holds DIFFERENT children.
        // This is substitutability — the LSP contract.
        Payment payment;

        payment = new PaypalPayment();
        payment.pay();     // works for PayPal

        payment = new UPIPayment();
        payment.pay();     // works for UPI

        payment = new CreditCardPayment();
        payment.pay();     // works for Credit Card
    }
}`,
    diagram: svgLSP,
    relation: "↪️ Subtypes must honor the parent's contract — substitutability",
    points: [
      "Subclasses must preserve invariants",
      "Any child can replace the parent safely",
      "Same reference, different behavior",
      "Behavior preserved → no broken program",
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
// Don't force a class to implement methods it doesn't need.
// Use small, role-based interfaces instead of one "fat" interface.
//
// Loan domain: split operations into 3 small interfaces
//   - ApplyLoan        → who can APPLY for a loan
//   - CheckLoanStatus  → who can CHECK loan status
//   - CancelLoan       → who can CANCEL a loan
//
// Customer needs only the first two; Admin needs all three.

public class Main {

    interface ApplyLoan {
        void applyLoan();
    }

    interface CheckLoanStatus {
        void checkLoanStatus();
    }

    interface CancelLoan {
        void cancelLoan();
    }

    // Customer applies for loan and checks status — but cannot cancel.
    static class Customer implements ApplyLoan, CheckLoanStatus {

        public void applyLoan() {
            System.out.println("Customer applied for loan");
        }

        public void checkLoanStatus() {
            System.out.println("Checking loan status");
        }
    }

    // Admin has all 3 powers including cancelling the loan.
    static class Admin implements ApplyLoan, CheckLoanStatus, CancelLoan {

        public void applyLoan() {
            System.out.println("Admin applied loan");
        }

        public void checkLoanStatus() {
            System.out.println("Admin checking loan status");
        }

        public void cancelLoan() {
            System.out.println("Admin cancelled loan");
        }
    }

    public static void main(String[] args) {

        Customer customer = new Customer();
        customer.applyLoan();
        customer.checkLoanStatus();

        Admin admin = new Admin();
        admin.applyLoan();
        admin.checkLoanStatus();
        admin.cancelLoan();
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
// High-level modules must NOT depend on low-level modules.
// Both must depend on an ABSTRACTION (interface).
//
// Payment domain:
//   - PaymentService (high-level)        → depends on Payment interface
//   - PaypalPayment / UPIPayment (low)   → implement Payment
//   - The concrete payment is INJECTED via constructor.

public class Main {

    // ---- Abstraction ----
    interface Payment {
        void pay();
    }

    // ---- Low-level implementations ----
    static class PaypalPayment implements Payment {
        public void pay() {
            System.out.println("Payment using PayPal");
        }
    }

    static class UPIPayment implements Payment {
        public void pay() {
            System.out.println("Payment using UPI");
        }
    }

    // ---- High-level service depends on the interface, NOT on concrete classes ----
    static class PaymentService {

        private final Payment payment;   // ← abstraction

        // Constructor injection: concrete impl comes from outside
        PaymentService(Payment payment) {
            this.payment = payment;
        }

        public void makePayment() {
            payment.pay();   // delegate to the injected implementation
        }
    }

    public static void main(String[] args) {

        // Inject PayPal
        Payment paypal = new PaypalPayment();
        PaymentService service1 = new PaymentService(paypal);
        service1.makePayment();

        // Inject UPI — same PaymentService, different behavior
        Payment upi = new UPIPayment();
        PaymentService service2 = new PaymentService(upi);
        service2.makePayment();
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