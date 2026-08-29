// ===== UML Diagrams — topic data =====
import {
  svgClassDiagram,
  svgSequenceDiagram,
  svgUseCaseDiagram,
  svgActivityDiagram,
  svgStateDiagram,
} from "./umlDiagrams";

const CHANNEL_UPLOADS =
  "https://www.youtube.com/playlist?list=UUTirDqmh7EyUCB8661XdwYw";

export const umlTopics = [
  // ---------- 1. CLASS DIAGRAM ----------
  {
    id: "class-diagram",
    icon: "fa-th-large",
    title: "Class Diagram",
    sub: "Structure · static view",
    desc: "Shows classes, their attributes, methods, and the relationships among them.",
    definition:
      "The most common UML diagram. Represents the static structure: classes (name, attributes with type, operations), relationships (inheritance, association, aggregation, composition, dependency), and multiplicities.",
    videoLink: CHANNEL_UPLOADS,
    code: `// ==== CLASS DIAGRAM (structural) ====
// Rendered as boxes with 3 sections: name / attributes / operations

class Employee {                 // ┌──────────┐
    private String name;         // │ Employee │  ← class name
    private int id;              // ├──────────┤
    private double salary;       // │ - name    │  ← attributes
                                 // │ - id      │
    public Employee(String n){ } // │ - salary  │
    public double getSalary(){   // ├──────────┤
        return salary;           // │ + Employee│  ← operations
    }                            // │ + getSalary
    public void setName(String n) { // + setName
        this.name = n;
    }
}

// Relationships to show on the diagram:
//   Employee "1" ────────── "1..*" works in "0..*" Department  (association + multiplicity)
//   Manager ──▷ Employee                                        (inheritance)
//   House ◆── Room                                             (composition)
//   Car  ◇── Wheel                                             (aggregation)
//   Order ┄┄▷ Logger                                           (dependency, dashed)
`,
    diagram: svgClassDiagram,
    relation: "🏛️ Static structure: classes + attributes + operations + relationships",
    points: [
      "3-section box (name/attrs/ops)",
      "Visibility: + public, - private, # protected",
      "Multiplicity (1, 0..*, 1..*)",
      "Association / inheritance / composition arrows",
    ],
  },

  // ---------- 2. SEQUENCE DIAGRAM ----------
  {
    id: "sequence-diagram",
    icon: "fa-arrows-alt-v",
    title: "Sequence Diagram",
    sub: "Behaviour · time-ordered",
    desc: "Shows how objects interact over time via messages, in a vertical lifeline timeline.",
    definition:
      "A Sequence diagram maps an object interaction as a vertical timeline: each participant has a lifeline (dashed), activation bars (rectangles), and horizontal arrows for messages, incl. self-calls and returns.",
    videoLink: CHANNEL_UPLOADS,
    code: `/* ==== SEQUENCE DIAGRAM (behavioural, time-ordered) ====
   User         OrderService        PaymentGateway        OrderRepository
    │  placeOrder() │                    │                      │
    │──────────────>│  processPayment()  │                      │
    │               │───────────────────>│                      │
    │               │   paymentOk()      │                      │
    │               │<───────────────────│                      │
    │               │  save(order)       │                      │
    │               │───────────────────────────────────────────>│
    │               │         orderSaved()                       │
    │               │<───────────────────────────────────────────│
    │ <confirm>     │                    │                      │
    │<──────────────│                    │                      │
─── The vertical dashed lines are LIFELINES.
─── Arrows are MESSAGES sent in time order (top → bottom).
─── Solid arrows = call, dashed arrow = return.
─── Thin rectangles = ACTIVATION (focus of control).
*/

class OrderService {
    void placeOrder(Order order) {
        boolean ok = pay(order);        // message to PaymentGateway
        if (ok) repository.save(order);  // message to OrderRepository
    }
}
`,
    diagram: svgSequenceDiagram,
    relation: "⏱️ Time-ordered messages between objects — lifelines + activation bars",
    points: [
      "Lifelines for each participant",
      "Activation bars show focus",
      "Call (solid) vs return (dashed) arrows",
      "Top-to-bottom time flow",
    ],
  },
];