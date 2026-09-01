// Rebuild the PayPal interview data file with clean, well-structured rounds.
//
// The original auto-generated file had 24 entries in a single "Interview
// Questions" round, of which 16 were empty headings. This script restores
// the intended structure: 4 distinct rounds
//   1. HackerRank Coding Assessment (3 problems)
//   2. Technical L1 Interview       (2 problems)
//   3. Technical L2 Interview       (2 problems)
//   4. Technical L3 Interview       (1 problem)
//
// Run:  node scripts/rebuild-paypal.mjs
//
// Output:  src/data/companyInterviews/paypal/paypal.js

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPANY_DIR = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "companyInterviews",
  "paypal",
);

const code = (language, content) => ({ language, content });
const Q = (question, answer, codeBlock = null) => ({
  question,
  answer,
  code: codeBlock,
});

// -----------------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------------

const rounds = [
  // ------------------------------ Round 1: HackerRank ------------------------------
  {
    name: "HackerRank Coding Assessment",
    questions: [
      Q(
        "Inventory Clearance Sale",
        "Process inventory items during a clearance sale. Sort items by discount percentage or final price, calculate sale prices, and determine the maximum savings or the optimal purchase combinations.",
        code(
          "java",
          `public class InventoryClearance {
    public static int maxSavings(int[] prices, int[] discounts) {
        // Sort items by discount percentage
        // Calculate final price after discount
        // Return maximum possible savings
        return 0;
    }
}`,
        ),
      ),
      Q(
        "Item Purchase",
        "Optimize item purchases given a budget. Find the maximum number of items that can be bought or the optimal combination of items within the budget.",
        code(
          "java",
          `public class ItemPurchase {
    public static int maxItems(int[] prices, int budget) {
        // Sort prices
        // Buy cheapest items first
        // Return maximum count of items
        return 0;
    }
}`,
        ),
      ),
      Q(
        "Minimum Total Weight",
        "Minimize total weight by combining items or selecting optimal subsets. Typically solved with a greedy approach or dynamic programming.",
        code(
          "java",
          `public class MinimumTotalWeight {
    public static int minWeight(int[] weights, int k) {
        // Combine items or select subsets
        // Return minimum possible weight
        return 0;
    }
}`,
        ),
      ),
    ],
  },

  // ------------------------------ Round 2: L1 ------------------------------
  {
    name: "Technical L1 Interview",
    questions: [
      Q(
        "Find the longest substring with non-repeating characters",
        "Use the sliding-window technique with a HashSet to track characters. Expand the right pointer when the character is not in the set; shrink the left pointer when a duplicate is found. Track the maximum window size.\n\nExamples:\n- Input: \"abcabcbb\" → 3 (\"abc\")\n- Input: \"bbbbb\"    → 1 (\"b\")\n- Input: \"pwwkew\"   → 3 (\"wke\")\n\nTime Complexity: O(n). Space Complexity: O(min(n, m)) where m is the charset size.",
        code(
          "java",
          `import java.util.HashSet;

public class LongestSubstring {
    public static int lengthOfLongestSubstring(String s) {
        int left = 0, right = 0, maxLength = 0;
        HashSet<Character> set = new HashSet<>();

        while (right < s.length()) {
            if (!set.contains(s.charAt(right))) {
                set.add(s.charAt(right));
                maxLength = Math.max(maxLength, right - left + 1);
                right++;
            } else {
                set.remove(s.charAt(left));
                left++;
            }
        }
        return maxLength;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // 1
        System.out.println(lengthOfLongestSubstring("pwwkew"));   // 3
    }
}`,
        ),
      ),
      Q(
        "Find the maximum water trapped between bars",
        "Use the two-pointer technique. Track leftMax and rightMax. When the left height is smaller, process the left side: if the current height is greater than or equal to leftMax, update leftMax; otherwise, add the difference. Apply the same logic on the right side.\n\nExamples:\n- Input: [0,1,0,2,1,0,1,3,2,1,2,1] → 6\n- Input: [4,2,0,3,2,5]            → 9\n\nTime Complexity: O(n). Space Complexity: O(1).",
        code(
          "java",
          `public class TrappingRainWater {
    public static int trap(int[] height) {
        if (height == null || height.length == 0) return 0;

        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0, trappedWater = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    trappedWater += (leftMax - height[left]);
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    trappedWater += (rightMax - height[right]);
                }
                right--;
            }
        }
        return trappedWater;
    }

    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // 6
        System.out.println(trap(new int[]{4,2,0,3,2,5})); // 9
    }
}`,
        ),
      ),
    ],
  },

  // ------------------------------ Round 3: L2 ------------------------------
  {
    name: "Technical L2 Interview",
    questions: [
      Q(
        "Peer-to-Peer Payment System Design - Send Payment API",
        "Design a payment system where users can send money to each other. The implementation has:\n- User class with balance (userId, balance, getters/setters)\n- Transaction class to record senderId, receiverId, amount, status\n- PaymentService with addUser, sendPayment, requestPayment, printTransactions, printRequests\n\nsendPayment() validates users, checks the sender's balance, updates both balances atomically, and records the transaction with status COMPLETED (or FAILED on insufficient balance).",
        code(
          "java",
          `import java.util.*;

class User {
    private String userId;
    private double balance;

    public User(String userId, double balance) {
        this.userId = userId;
        this.balance = balance;
    }

    public String getUserId() { return userId; }
    public double getBalance() { return balance; }
    public void setBalance(double balance) { this.balance = balance; }
}

class Transaction {
    private String senderId;
    private String receiverId;
    private double amount;
    private String status;

    public Transaction(String senderId, String receiverId, double amount, String status) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.amount = amount;
        this.status = status;
    }

    public String toString() {
        return "Transaction: " + senderId + " -> " + receiverId +
               " | Amount: " + amount + " | Status: " + status;
    }
}

class PaymentService {
    private Map<String, User> users = new HashMap<>();
    private List<Transaction> transactions = new ArrayList<>();
    private List<String> paymentRequests = new ArrayList<>();

    public void addUser(String userId, double balance) {
        users.put(userId, new User(userId, balance));
    }

    public String sendPayment(String senderId, String receiverId, double amount) {
        if (!users.containsKey(senderId) || !users.containsKey(receiverId)) {
            return "Invalid user IDs";
        }

        User sender = users.get(senderId);
        User receiver = users.get(receiverId);

        if (sender.getBalance() < amount) {
            transactions.add(new Transaction(senderId, receiverId, amount, "FAILED"));
            return "Insufficient balance";
        }

        sender.setBalance(sender.getBalance() - amount);
        receiver.setBalance(receiver.getBalance() + amount);
        transactions.add(new Transaction(senderId, receiverId, amount, "COMPLETED"));

        return "Payment Successful";
    }

    public String requestPayment(String requesterId, String payerId, double amount) {
        if (!users.containsKey(requesterId) || !users.containsKey(payerId)) {
            return "Invalid user IDs";
        }

        String request = "Request from " + requesterId + " to " + payerId + " for amount " + amount;
        paymentRequests.add(request);
        return "Payment Request Sent";
    }

    public void printTransactions() {
        transactions.forEach(System.out::println);
    }

    public void printRequests() {
        paymentRequests.forEach(System.out::println);
    }
}

public class PeerToPeerPayment {
    public static void main(String[] args) {
        PaymentService service = new PaymentService();
        service.addUser("user1", 1000);
        service.addUser("user2", 500);

        System.out.println(service.sendPayment("user1", "user2", 200));
        System.out.println(service.requestPayment("user2", "user1", 150));

        service.printTransactions();
        service.printRequests();
    }
}`,
        ),
      ),
      Q(
        "Peer-to-Peer Payment System Design - Request Payment API",
        "Design a request-payment API where one user can ask another user to pay a specific amount. The requestPayment() method creates a pending payment request and stores the requester, payer, amount, and status. Requests are tracked separately from completed transactions so that pending asks can be listed independently.",
        code(
          "java",
          `// Key method (used by the PaymentService in the Send Payment API design):
public String requestPayment(String requesterId, String payerId, double amount) {
    if (!users.containsKey(requesterId) || !users.containsKey(payerId)) {
        return "Invalid user IDs";
    }
    String request = "Request from " + requesterId + " to " + payerId + " for amount " + amount;
    paymentRequests.add(request);
    return "Payment Request Sent";
}`,
        ),
      ),
    ],
  },

  // ------------------------------ Round 4: L3 ------------------------------
  {
    name: "Technical L3 Interview",
    questions: [
      Q(
        "Furniture Order System - Enum Implementation",
        "Design a furniture ordering system using a Java enum for furniture types. Each furniture item has a unit cost. The FurnitureOrder class exposes methods to add orders, get per-type and total counts, compute the total order cost, and get the cost of a particular furniture type.\n\nFurniture costs:\n- CHAIR = 1500\n- FAN   = 2000\n- BED   = 5000\n\nThe solution uses an EnumMap for type-safe storage and a stream-based total computation. The 7 JUnit 5 tests cover addOrder, getAllOrders, getTotalFurnitureCount, getFurnitureCount, getTotalOrderCost, getFurnitureTypeCost, and the empty-order case.",
        code(
          "java",
          `import java.util.EnumMap;
import java.util.Map;

enum Furniture {
    CHAIR(1500), FAN(2000), BED(5000);

    private final int cost;

    Furniture(int cost) {
        this.cost = cost;
    }

    public int getCost() {
        return cost;
    }
}

class FurnitureOrder {
    private final Map<Furniture, Integer> orders = new EnumMap<>(Furniture.class);

    public void addOrder(Furniture furniture, int quantity) {
        orders.put(furniture, orders.getOrDefault(furniture, 0) + quantity);
    }

    public Map<Furniture, Integer> getAllOrders() {
        return new EnumMap<>(orders);
    }

    public int getTotalFurnitureCount() {
        return orders.values().stream().mapToInt(Integer::intValue).sum();
    }

    public int getFurnitureCount(Furniture furniture) {
        return orders.getOrDefault(furniture, 0);
    }

    public int getTotalOrderCost() {
        return orders.entrySet().stream()
            .mapToInt(e -> e.getKey().getCost() * e.getValue())
            .sum();
    }

    public int getFurnitureTypeCost(Furniture furniture) {
        return getFurnitureCount(furniture) * furniture.getCost();
    }
}

// JUnit 5 Test Cases
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class FurnitureOrderTest {
    private FurnitureOrder order;

    @BeforeEach
    void setUp() {
        order = new FurnitureOrder();
    }

    @Test
    void testAddOrder() {
        order.addOrder(Furniture.CHAIR, 2);
        assertEquals(2, order.getFurnitureCount(Furniture.CHAIR));
    }

    @Test
    void testGetAllOrders() {
        order.addOrder(Furniture.FAN, 1);
        assertTrue(order.getAllOrders().containsKey(Furniture.FAN));
    }

    @Test
    void testGetTotalFurnitureCount() {
        order.addOrder(Furniture.BED, 2);
        order.addOrder(Furniture.CHAIR, 3);
        assertEquals(5, order.getTotalFurnitureCount());
    }

    @Test
    void testGetFurnitureCount() {
        order.addOrder(Furniture.FAN, 4);
        assertEquals(4, order.getFurnitureCount(Furniture.FAN));
    }

    @Test
    void testGetTotalOrderCost() {
        order.addOrder(Furniture.CHAIR, 2);
        order.addOrder(Furniture.BED, 1);
        assertEquals(8000, order.getTotalOrderCost());
    }

    @Test
    void testGetFurnitureTypeCost() {
        order.addOrder(Furniture.FAN, 3);
        assertEquals(6000, order.getFurnitureTypeCost(Furniture.FAN));
    }

    @Test
    void testEmptyOrderCost() {
        assertEquals(0, order.getTotalOrderCost());
    }
}`,
        ),
      ),
    ],
  },
];

// -----------------------------------------------------------------------------
// Build the company object that matches the existing app schema.
// -----------------------------------------------------------------------------
const questionCount = rounds.reduce(
  (sum, round) => sum + round.questions.length,
  0,
);

const company = {
  id: "paypal",
  name: "PayPal",
  interviews: [
    {
      name: "PayPal Interview",
      questionCount,
      rounds,
    },
  ],
  questionCount,
};

// -----------------------------------------------------------------------------
// Write the file
// -----------------------------------------------------------------------------
fs.mkdirSync(COMPANY_DIR, { recursive: true });
const outFile = path.join(COMPANY_DIR, "paypal.js");
const banner =
  "// AUTO-GENERATED file — company-wise interview data.\n" +
  "// Source: PayPal interview document(s).\n" +
  "// Regenerate with:  node scripts/rebuild-paypal.mjs\n\n";
const body =
  "export const company = " + JSON.stringify(company, null, 2) + ";\n";
fs.writeFileSync(outFile, banner + body, "utf8");

console.log(
  `✓ wrote ${path.relative(path.join(__dirname, ".."), outFile)}  (${rounds.length} rounds, ${questionCount} questions)`,
);
