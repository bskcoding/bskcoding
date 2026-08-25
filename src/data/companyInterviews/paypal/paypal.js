// AUTO-GENERATED file — company-wise interview data.
// Source: PayPal interview document(s).
// Do not edit manually — regenerate with: node scripts/convert-company-interviews.cjs

export const company = {
  "id": "paypal",
  "name": "PayPal",
  "interviews": [
    {
      "name": "PayPal",
      "questionCount": 24,
      "rounds": [
        {
          "name": "Interview Questions",
          "questions": [
            {
              "question": "HackerRank Coding Assessment - PayPal",
              "answer": "",
              "code": null
            },
            {
              "question": "Java.Inventory Clearance Sale",
              "answer": "",
              "code": null
            },
            {
              "question": "Item Purchase",
              "answer": "",
              "code": null
            },
            {
              "question": "Minimum Total Weight",
              "answer": "",
              "code": null
            },
            {
              "question": "PayPal Technical L1 Interview - Coding Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "Find the longest substring with non-repeating characters",
              "answer": "Write a function that takes a string and returns the longest substring that contains only unique (non-repeating) characters.\nExample Input & Output:\nInput: \"abcabcbb\"\nOutput: 3 (\"abc\")\nInput: \"bbbbb\"\nOutput: 1 (\"b\")\nInput: \"pwwkew\"\nOutput: 3 (\"wke\")",
              "code": {
                "language": "java",
                "content": "import java.util.HashSet;\n\npublic class LongestSubstring {\n    public static int lengthOfLongestSubstring(String s) {\n        int left = 0, right = 0, maxLength = 0;\n        HashSet<Character> set = new HashSet<>();\n\n        while (right < s.length()) {\n            if (!set.contains(s.charAt(right))) {\n                set.add(s.charAt(right));\n                maxLength = Math.max(maxLength, right - left + 1);\n                right++;\n            } else {\n                set.remove(s.charAt(left));\n                left++;\n            }\n        }\n        return maxLength;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(lengthOfLongestSubstring(\"abcabcbb\")); // Output: 3\n        System.out.println(lengthOfLongestSubstring(\"bbbbb\"));    // Output: 1\n        System.out.println(lengthOfLongestSubstring(\"pwwkew\"));   // Output: 3\n    }\n}"
              }
            },
            {
              "question": "Find the maximum water trapped between bars",
              "answer": "Given an array where each element represents the height of a bar, find the maximum amount of water that can be trapped between the bars after rainfall.\nExample Input & Output:\nInput: [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6\nInput: [4,2,0,3,2,5]\nOutput: 9",
              "code": {
                "language": "java",
                "content": "public class TrappingRainWater {\n    public static int trap(int[] height) {\n        if (height == null || height.length == 0) return 0;\n\n        int left = 0, right = height.length - 1;\n        int leftMax = 0, rightMax = 0, trappedWater = 0;\n\n        while (left < right) {\n            if (height[left] < height[right]) {\n                if (height[left] >= leftMax) {\n                    leftMax = height[left];\n                } else {\n                    trappedWater += (leftMax - height[left]);\n                }\n                left++;\n            } else {\n                if (height[right] >= rightMax) {\n                    rightMax = height[right];\n                } else {\n                    trappedWater += (rightMax - height[right]);\n                }\n                right--;\n            }\n        }\n        return trappedWater;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // Output: 6\n        System.out.println(trap(new int[]{4,2,0,3,2,5})); // Output: 9\n    }\n}"
              }
            },
            {
              "question": "PayPal Technical L2 Interview - Coding Questions",
              "answer": "",
              "code": null
            },
            {
              "question": "Peer-to-Peer Payment System Design",
              "answer": "We will design two APIs:",
              "code": null
            },
            {
              "question": "Send Payment API",
              "answer": "– Allows a user to send money to another user.",
              "code": null
            },
            {
              "question": "Request Payment API",
              "answer": "– Allows a user to request money from another user.",
              "code": null
            },
            {
              "question": "Design Considerations",
              "answer": "- Each user will have a User ID and Balance.\n- Sending money requires checking the sender’s balance.\n- Requesting money creates a pending request.",
              "code": null
            },
            {
              "question": "Implementation Plan",
              "answer": "",
              "code": null
            },
            {
              "question": "User Class",
              "answer": ": Represents a user with an ID and balance.",
              "code": null
            },
            {
              "question": "Transaction Class",
              "answer": ": Represents payment transactions.",
              "code": null
            },
            {
              "question": "PaymentService Class",
              "answer": ": Implements send and request payment logic.",
              "code": null
            },
            {
              "question": "Main Class",
              "answer": ": Demonstrates API usage.",
              "code": null
            },
            {
              "question": "Java Implementation",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.*;\n\nclass User {\n    private String userId;\n    private double balance;\n\n    public User(String userId, double balance) {\n        this.userId = userId;\n        this.balance = balance;\n    }\n\n    public String getUserId() {\n        return userId;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n\n    public void setBalance(double balance) {\n        this.balance = balance;\n    }\n}\n\nclass Transaction {\n    private String senderId;\n    private String receiverId;\n    private double amount;\n    private String status; // \"COMPLETED\" or \"FAILED\"\n\n    public Transaction(String senderId, String receiverId, double amount, String status) {\n        this.senderId = senderId;\n        this.receiverId = receiverId;\n        this.amount = amount;\n        this.status = status;\n    }\n\n    public String toString() {\n        return \"Transaction: \" + senderId + \" -> \" + receiverId + \" | Amount: \" + amount + \" | Status: \" + status;\n    }\n}\n\nclass PaymentService {\n    private Map<String, User> users = new HashMap<>();\n    private List<Transaction> transactions = new ArrayList<>();\n    private List<String> paymentRequests = new ArrayList<>();\n\n    public void addUser(String userId, double balance) {\n        users.put(userId, new User(userId, balance));\n    }\n\n    public String sendPayment(String senderId, String receiverId, double amount) {\n        if (!users.containsKey(senderId) || !users.containsKey(receiverId)) {\n            return \"Invalid user IDs\";\n        }\n\n        User sender = users.get(senderId);\n        User receiver = users.get(receiverId);\n\n        if (sender.getBalance() < amount) {\n            transactions.add(new Transaction(senderId, receiverId, amount, \"FAILED\"));\n            return \"Insufficient balance\";\n        }\n\n        sender.setBalance(sender.getBalance() - amount);\n        receiver.setBalance(receiver.getBalance() + amount);\n        transactions.add(new Transaction(senderId, receiverId, amount, \"COMPLETED\"));\n\n        return \"Payment Successful\";\n    }\n\n    public String requestPayment(String requesterId, String payerId, double amount) {\n        if (!users.containsKey(requesterId) || !users.containsKey(payerId)) {\n            return \"Invalid user IDs\";\n        }\n\n        String request = \"Request from \" + requesterId + \" to \" + payerId + \" for amount \" + amount;\n        paymentRequests.add(request);\n        return \"Payment Request Sent\";\n    }\n\n    public void printTransactions() {\n        transactions.forEach(System.out::println);\n    }\n\n    public void printRequests() {\n        paymentRequests.forEach(System.out::println);\n    }\n}\n\npublic class PeerToPeerPayment {\n    public static void main(String[] args) {\n        PaymentService service = new PaymentService();\n\n        service.addUser(\"user1\", 1000);\n        service.addUser(\"user2\", 500);\n\n        System.out.println(service.sendPayment(\"user1\", \"user2\", 200));\n        System.out.println(service.requestPayment(\"user2\", \"user1\", 150));\n\n        service.printTransactions();\n        service.printRequests();\n    }\n}"
              }
            },
            {
              "question": "Explanation",
              "answer": "",
              "code": null
            },
            {
              "question": "User Class",
              "answer": ": Holds user ID and balance.",
              "code": null
            },
            {
              "question": "Transaction Class",
              "answer": ": Stores transaction details.",
              "code": null
            },
            {
              "question": "PaymentService Class",
              "answer": ":\nsendPayment(): Checks balance and transfers money.\nrequestPayment(): Adds a payment request.",
              "code": null
            },
            {
              "question": "Main Class",
              "answer": ": Demonstrates functionality.",
              "code": null
            },
            {
              "question": "PayPal Technical L3 Interview - Coding Questions",
              "answer": "",
              "code": {
                "language": "java",
                "content": "import java.util.EnumMap;\nimport java.util.Map;\n\n// Enum for Furniture with cost\nenum Furniture {\n    CHAIR(1500), FAN(2000), BED(5000);\n    \n    private final int cost;\n    \n    Furniture(int cost) {\n        this.cost = cost;\n    }\n    \n    public int getCost() {\n        return cost;\n    }\n}\n\n// Furniture Order Class\nclass FurnitureOrder {\n    private final Map<Furniture, Integer> orders = new EnumMap<>(Furniture.class);\n\n    // Add order\n    public void addOrder(Furniture furniture, int quantity) {\n        orders.put(furniture, orders.getOrDefault(furniture, 0) + quantity);\n    }\n\n    // Get all orders\n    public Map<Furniture, Integer> getAllOrders() {\n        return new EnumMap<>(orders);\n    }\n\n    // Get total furniture count\n    public int getTotalFurnitureCount() {\n        return orders.values().stream().mapToInt(Integer::intValue).sum();\n    }\n\n    // Get specific furniture count\n    public int getFurnitureCount(Furniture furniture) {\n        return orders.getOrDefault(furniture, 0);\n    }\n\n    // Get total cost of all orders\n    public int getTotalOrderCost() {\n        return orders.entrySet().stream().mapToInt(e -> e.getKey().getCost() * e.getValue()).sum();\n    }\n\n    // Get cost of specific furniture type\n    public int getFurnitureTypeCost(Furniture furniture) {\n        return getFurnitureCount(furniture) * furniture.getCost();\n    }\n}\n\n// JUnit Test Cases\nimport static org.junit.jupiter.api.Assertions.*;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\n\nclass FurnitureOrderTest {\n    private FurnitureOrder order;\n\n    @BeforeEach\n    void setUp() {\n        order = new FurnitureOrder();\n    }\n\n    @Test\n    void testAddOrder() {\n        order.addOrder(Furniture.CHAIR, 2);\n        assertEquals(2, order.getFurnitureCount(Furniture.CHAIR));\n    }\n\n    @Test\n    void testGetAllOrders() {\n        order.addOrder(Furniture.FAN, 1);\n        assertTrue(order.getAllOrders().containsKey(Furniture.FAN));\n    }\n\n    @Test\n    void testGetTotalFurnitureCount() {\n        order.addOrder(Furniture.BED, 2);\n        order.addOrder(Furniture.CHAIR, 3);\n        assertEquals(5, order.getTotalFurnitureCount());\n    }\n\n    @Test\n    void testGetFurnitureCount() {\n        order.addOrder(Furniture.FAN, 4);\n        assertEquals(4, order.getFurnitureCount(Furniture.FAN));\n    }\n\n    @Test\n    void testGetTotalOrderCost() {\n        order.addOrder(Furniture.CHAIR, 2);\n        order.addOrder(Furniture.BED, 1);\n        assertEquals(8000, order.getTotalOrderCost());\n    }\n\n    @Test\n    void testGetFurnitureTypeCost() {\n        order.addOrder(Furniture.FAN, 3);\n        assertEquals(6000, order.getFurnitureTypeCost(Furniture.FAN));\n    }\n\n    @Test\n    void testEmptyOrderCost() {\n        assertEquals(0, order.getTotalOrderCost());\n    }\n}"
              }
            }
          ]
        }
      ]
    }
  ],
  "questionCount": 24
};
