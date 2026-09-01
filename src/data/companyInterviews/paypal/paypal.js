// AUTO-GENERATED file — company-wise interview data.
// Source: PayPal interview document(s).
// Regenerate with:  node scripts/rebuild-paypal.mjs

export const company = {
  "id": "paypal",
  "name": "PayPal",
  "interviews": [
    {
      "name": "PayPal Interview",
      "questionCount": 8,
      "rounds": [
        {
          "name": "HackerRank Coding Assessment",
          "questions": [
            {
              "question": "Inventory Clearance Sale",
              "answer": "Process inventory items during a clearance sale. Sort items by discount percentage or final price, calculate sale prices, and determine the maximum savings or the optimal purchase combinations.",
              "code": {
                "language": "java",
                "content": "public class InventoryClearance {\n    public static int maxSavings(int[] prices, int[] discounts) {\n        // Sort items by discount percentage\n        // Calculate final price after discount\n        // Return maximum possible savings\n        return 0;\n    }\n}"
              }
            },
            {
              "question": "Item Purchase",
              "answer": "Optimize item purchases given a budget. Find the maximum number of items that can be bought or the optimal combination of items within the budget.",
              "code": {
                "language": "java",
                "content": "public class ItemPurchase {\n    public static int maxItems(int[] prices, int budget) {\n        // Sort prices\n        // Buy cheapest items first\n        // Return maximum count of items\n        return 0;\n    }\n}"
              }
            },
            {
              "question": "Minimum Total Weight",
              "answer": "Minimize total weight by combining items or selecting optimal subsets. Typically solved with a greedy approach or dynamic programming.",
              "code": {
                "language": "java",
                "content": "public class MinimumTotalWeight {\n    public static int minWeight(int[] weights, int k) {\n        // Combine items or select subsets\n        // Return minimum possible weight\n        return 0;\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Technical L1 Interview",
          "questions": [
            {
              "question": "Find the longest substring with non-repeating characters",
              "answer": "Use the sliding-window technique with a HashSet to track characters. Expand the right pointer when the character is not in the set; shrink the left pointer when a duplicate is found. Track the maximum window size.\n\nExamples:\n- Input: \"abcabcbb\" → 3 (\"abc\")\n- Input: \"bbbbb\"    → 1 (\"b\")\n- Input: \"pwwkew\"   → 3 (\"wke\")\n\nTime Complexity: O(n). Space Complexity: O(min(n, m)) where m is the charset size.",
              "code": {
                "language": "java",
                "content": "import java.util.HashSet;\n\npublic class LongestSubstring {\n    public static int lengthOfLongestSubstring(String s) {\n        int left = 0, right = 0, maxLength = 0;\n        HashSet<Character> set = new HashSet<>();\n\n        while (right < s.length()) {\n            if (!set.contains(s.charAt(right))) {\n                set.add(s.charAt(right));\n                maxLength = Math.max(maxLength, right - left + 1);\n                right++;\n            } else {\n                set.remove(s.charAt(left));\n                left++;\n            }\n        }\n        return maxLength;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(lengthOfLongestSubstring(\"abcabcbb\")); // 3\n        System.out.println(lengthOfLongestSubstring(\"bbbbb\"));    // 1\n        System.out.println(lengthOfLongestSubstring(\"pwwkew\"));   // 3\n    }\n}"
              }
            },
            {
              "question": "Find the maximum water trapped between bars",
              "answer": "Use the two-pointer technique. Track leftMax and rightMax. When the left height is smaller, process the left side: if the current height is greater than or equal to leftMax, update leftMax; otherwise, add the difference. Apply the same logic on the right side.\n\nExamples:\n- Input: [0,1,0,2,1,0,1,3,2,1,2,1] → 6\n- Input: [4,2,0,3,2,5]            → 9\n\nTime Complexity: O(n). Space Complexity: O(1).",
              "code": {
                "language": "java",
                "content": "public class TrappingRainWater {\n    public static int trap(int[] height) {\n        if (height == null || height.length == 0) return 0;\n\n        int left = 0, right = height.length - 1;\n        int leftMax = 0, rightMax = 0, trappedWater = 0;\n\n        while (left < right) {\n            if (height[left] < height[right]) {\n                if (height[left] >= leftMax) {\n                    leftMax = height[left];\n                } else {\n                    trappedWater += (leftMax - height[left]);\n                }\n                left++;\n            } else {\n                if (height[right] >= rightMax) {\n                    rightMax = height[right];\n                } else {\n                    trappedWater += (rightMax - height[right]);\n                }\n                right--;\n            }\n        }\n        return trappedWater;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // 6\n        System.out.println(trap(new int[]{4,2,0,3,2,5})); // 9\n    }\n}"
              }
            }
          ]
        },
        {
          "name": "Technical L2 Interview",
          "questions": [
            {
              "question": "Peer-to-Peer Payment System Design - Send Payment API",
              "answer": "Design a payment system where users can send money to each other. The implementation has:\n- User class with balance (userId, balance, getters/setters)\n- Transaction class to record senderId, receiverId, amount, status\n- PaymentService with addUser, sendPayment, requestPayment, printTransactions, printRequests\n\nsendPayment() validates users, checks the sender's balance, updates both balances atomically, and records the transaction with status COMPLETED (or FAILED on insufficient balance).",
              "code": {
                "language": "java",
                "content": "import java.util.*;\n\nclass User {\n    private String userId;\n    private double balance;\n\n    public User(String userId, double balance) {\n        this.userId = userId;\n        this.balance = balance;\n    }\n\n    public String getUserId() { return userId; }\n    public double getBalance() { return balance; }\n    public void setBalance(double balance) { this.balance = balance; }\n}\n\nclass Transaction {\n    private String senderId;\n    private String receiverId;\n    private double amount;\n    private String status;\n\n    public Transaction(String senderId, String receiverId, double amount, String status) {\n        this.senderId = senderId;\n        this.receiverId = receiverId;\n        this.amount = amount;\n        this.status = status;\n    }\n\n    public String toString() {\n        return \"Transaction: \" + senderId + \" -> \" + receiverId +\n               \" | Amount: \" + amount + \" | Status: \" + status;\n    }\n}\n\nclass PaymentService {\n    private Map<String, User> users = new HashMap<>();\n    private List<Transaction> transactions = new ArrayList<>();\n    private List<String> paymentRequests = new ArrayList<>();\n\n    public void addUser(String userId, double balance) {\n        users.put(userId, new User(userId, balance));\n    }\n\n    public String sendPayment(String senderId, String receiverId, double amount) {\n        if (!users.containsKey(senderId) || !users.containsKey(receiverId)) {\n            return \"Invalid user IDs\";\n        }\n\n        User sender = users.get(senderId);\n        User receiver = users.get(receiverId);\n\n        if (sender.getBalance() < amount) {\n            transactions.add(new Transaction(senderId, receiverId, amount, \"FAILED\"));\n            return \"Insufficient balance\";\n        }\n\n        sender.setBalance(sender.getBalance() - amount);\n        receiver.setBalance(receiver.getBalance() + amount);\n        transactions.add(new Transaction(senderId, receiverId, amount, \"COMPLETED\"));\n\n        return \"Payment Successful\";\n    }\n\n    public String requestPayment(String requesterId, String payerId, double amount) {\n        if (!users.containsKey(requesterId) || !users.containsKey(payerId)) {\n            return \"Invalid user IDs\";\n        }\n\n        String request = \"Request from \" + requesterId + \" to \" + payerId + \" for amount \" + amount;\n        paymentRequests.add(request);\n        return \"Payment Request Sent\";\n    }\n\n    public void printTransactions() {\n        transactions.forEach(System.out::println);\n    }\n\n    public void printRequests() {\n        paymentRequests.forEach(System.out::println);\n    }\n}\n\npublic class PeerToPeerPayment {\n    public static void main(String[] args) {\n        PaymentService service = new PaymentService();\n        service.addUser(\"user1\", 1000);\n        service.addUser(\"user2\", 500);\n\n        System.out.println(service.sendPayment(\"user1\", \"user2\", 200));\n        System.out.println(service.requestPayment(\"user2\", \"user1\", 150));\n\n        service.printTransactions();\n        service.printRequests();\n    }\n}"
              }
            },
            {
              "question": "Peer-to-Peer Payment System Design - Request Payment API",
              "answer": "Design a request-payment API where one user can ask another user to pay a specific amount. The requestPayment() method creates a pending payment request and stores the requester, payer, amount, and status. Requests are tracked separately from completed transactions so that pending asks can be listed independently.",
              "code": {
                "language": "java",
                "content": "// Key method (used by the PaymentService in the Send Payment API design):\npublic String requestPayment(String requesterId, String payerId, double amount) {\n    if (!users.containsKey(requesterId) || !users.containsKey(payerId)) {\n        return \"Invalid user IDs\";\n    }\n    String request = \"Request from \" + requesterId + \" to \" + payerId + \" for amount \" + amount;\n    paymentRequests.add(request);\n    return \"Payment Request Sent\";\n}"
              }
            }
          ]
        },
        {
          "name": "Technical L3 Interview",
          "questions": [
            {
              "question": "Furniture Order System - Enum Implementation",
              "answer": "Design a furniture ordering system using a Java enum for furniture types. Each furniture item has a unit cost. The FurnitureOrder class exposes methods to add orders, get per-type and total counts, compute the total order cost, and get the cost of a particular furniture type.\n\nFurniture costs:\n- CHAIR = 1500\n- FAN   = 2000\n- BED   = 5000\n\nThe solution uses an EnumMap for type-safe storage and a stream-based total computation. The 7 JUnit 5 tests cover addOrder, getAllOrders, getTotalFurnitureCount, getFurnitureCount, getTotalOrderCost, getFurnitureTypeCost, and the empty-order case.",
              "code": {
                "language": "java",
                "content": "import java.util.EnumMap;\nimport java.util.Map;\n\nenum Furniture {\n    CHAIR(1500), FAN(2000), BED(5000);\n\n    private final int cost;\n\n    Furniture(int cost) {\n        this.cost = cost;\n    }\n\n    public int getCost() {\n        return cost;\n    }\n}\n\nclass FurnitureOrder {\n    private final Map<Furniture, Integer> orders = new EnumMap<>(Furniture.class);\n\n    public void addOrder(Furniture furniture, int quantity) {\n        orders.put(furniture, orders.getOrDefault(furniture, 0) + quantity);\n    }\n\n    public Map<Furniture, Integer> getAllOrders() {\n        return new EnumMap<>(orders);\n    }\n\n    public int getTotalFurnitureCount() {\n        return orders.values().stream().mapToInt(Integer::intValue).sum();\n    }\n\n    public int getFurnitureCount(Furniture furniture) {\n        return orders.getOrDefault(furniture, 0);\n    }\n\n    public int getTotalOrderCost() {\n        return orders.entrySet().stream()\n            .mapToInt(e -> e.getKey().getCost() * e.getValue())\n            .sum();\n    }\n\n    public int getFurnitureTypeCost(Furniture furniture) {\n        return getFurnitureCount(furniture) * furniture.getCost();\n    }\n}\n\n// JUnit 5 Test Cases\nimport static org.junit.jupiter.api.Assertions.*;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\n\nclass FurnitureOrderTest {\n    private FurnitureOrder order;\n\n    @BeforeEach\n    void setUp() {\n        order = new FurnitureOrder();\n    }\n\n    @Test\n    void testAddOrder() {\n        order.addOrder(Furniture.CHAIR, 2);\n        assertEquals(2, order.getFurnitureCount(Furniture.CHAIR));\n    }\n\n    @Test\n    void testGetAllOrders() {\n        order.addOrder(Furniture.FAN, 1);\n        assertTrue(order.getAllOrders().containsKey(Furniture.FAN));\n    }\n\n    @Test\n    void testGetTotalFurnitureCount() {\n        order.addOrder(Furniture.BED, 2);\n        order.addOrder(Furniture.CHAIR, 3);\n        assertEquals(5, order.getTotalFurnitureCount());\n    }\n\n    @Test\n    void testGetFurnitureCount() {\n        order.addOrder(Furniture.FAN, 4);\n        assertEquals(4, order.getFurnitureCount(Furniture.FAN));\n    }\n\n    @Test\n    void testGetTotalOrderCost() {\n        order.addOrder(Furniture.CHAIR, 2);\n        order.addOrder(Furniture.BED, 1);\n        assertEquals(8000, order.getTotalOrderCost());\n    }\n\n    @Test\n    void testGetFurnitureTypeCost() {\n        order.addOrder(Furniture.FAN, 3);\n        assertEquals(6000, order.getFurnitureTypeCost(Furniture.FAN));\n    }\n\n    @Test\n    void testEmptyOrderCost() {\n        assertEquals(0, order.getTotalOrderCost());\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 8
};
