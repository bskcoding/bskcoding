export const JAVA_B = `// B. CashDispenser chain + Transaction
abstract class CashDispenser {
    protected CashDispenser next;
    protected final int denomination;
    protected int count;
    CashDispenser(int denom, int cnt) { denomination = denom; count = cnt; }
    public void setNext(CashDispenser n) { next = n; }
    public synchronized Map<Integer, Integer> dispense(int amount) {
        Map<Integer, Integer> result = new LinkedHashMap<>();
        int notesNeeded = amount / denomination;
        int notesToGive = Math.min(notesNeeded, count);
        if (notesToGive > 0) {
            count -= notesToGive;
            result.put(denomination, notesToGive);
        }
        int remainder = amount - notesToGive * denomination;
        if (remainder > 0 && next != null) {
            Map<Integer, Integer> nextResult = next.dispense(remainder);
            result.putAll(nextResult);
            remainder = 0;
        }
        if (remainder > 0) {
            count += notesToGive;
            throw new IllegalStateException("Cannot dispense amount: " + amount);
        }
        return result;
    }
    public int getCount() { return count; }
}

class TwoThousandDispenser extends CashDispenser {
    TwoThousandDispenser(int c) { super(2000, c); }
}
class FiveHundredDispenser extends CashDispenser {
    FiveHundredDispenser(int c) { super(500, c); }
}
class TwoHundredDispenser extends CashDispenser {
    TwoHundredDispenser(int c) { super(200, c); }
}
class HundredDispenser extends CashDispenser {
    HundredDispenser(int c) { super(100, c); }
}

class Transaction {
    private final String id;
    private final TransactionType type;
    private final Card card;
    private final double amount;
    private TransactionStatus status = TransactionStatus.PENDING;
    private final long timestamp;
    Transaction(String id, TransactionType t, Card c, double amt) {
        this.id = id; type = t; card = c; amount = amt;
        timestamp = System.currentTimeMillis();
    }
    public void markSuccess() { status = TransactionStatus.SUCCESS; }
    public void markFailed() { status = TransactionStatus.FAILED; }
    public String getId() { return id; }
    public TransactionType getType() { return type; }
    public double getAmount() { return amount; }
    public TransactionStatus getStatus() { return status; }
}`;