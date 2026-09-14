export const JAVA_A = `// A. Enums + Product + Slot
enum VendingMachineState { IDLE, PRODUCT_SELECTED, PAYMENT_PENDING, DISPENSING, OUT_OF_STOCK }
enum TransactionStatus { PENDING, SUCCESS, FAILED, REFUNDED }
enum PaymentStatus { SUCCESS, FAILED }

class Product {
    private final String code;
    private final String name;
    private final double price;
    Product(String c, String n, double p) { code = c; name = n; price = p; }
    public String getCode() { return code; }
    public String getName() { return name; }
    public double getPrice() { return price; }
}

class Slot {
    private final String code;
    private final Product product;
    private int quantity;
    private final int maxCapacity;
    Slot(String c, Product p, int q, int max) {
        code = c; product = p; quantity = q; maxCapacity = max;
    }
    public synchronized boolean isAvailable() { return quantity > 0; }
    public synchronized boolean dispense() {
        if (quantity <= 0) return false;
        quantity--; return true;
    }
    public synchronized void restock(int qty) {
        quantity = Math.min(maxCapacity, quantity + qty);
    }
    public String getCode() { return code; }
    public Product getProduct() { return product; }
    public int getQuantity() { return quantity; }
}`;