export const JAVA_B = `// B. Transaction + Payment + Change
class Transaction {
    private final String id;
    private final Product product;
    private double amountPaid;
    private double change;
    private final long timestamp;
    private TransactionStatus status;
    Transaction(String id, Product p, long t) {
        this.id = id; product = p; timestamp = t; status = TransactionStatus.PENDING;
    }
    public void markPaid(double amt, double ch) {
        amountPaid = amt; change = ch; status = TransactionStatus.SUCCESS;
    }
    public void markFailed() { status = TransactionStatus.FAILED; }
    public void markRefunded() { status = TransactionStatus.REFUNDED; }
    public String getId() { return id; }
    public Product getProduct() { return product; }
    public double getAmountPaid() { return amountPaid; }
    public double getChange() { return change; }
    public TransactionStatus getStatus() { return status; }
}

interface PaymentStrategy {
    PaymentStatus pay(double amount);
}
class CashPayment implements PaymentStrategy {
    public PaymentStatus pay(double a) { return PaymentStatus.SUCCESS; }
}
class CardPayment implements PaymentStrategy {
    public PaymentStatus pay(double a) { return PaymentStatus.SUCCESS; }
}

interface ChangeDispenser {
    double calculateChange(double paid, double price);
}
class StandardChangeDispenser implements ChangeDispenser {
    public double calculateChange(double paid, double price) {
        return Math.max(0, paid - price);
    }
}`;