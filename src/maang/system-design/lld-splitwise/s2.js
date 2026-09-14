export const JAVA_B = `// B. Expense + Split Strategies
abstract class SplitStrategy {
    public abstract Map<User, Double> calculate(double amount, List<User> participants,
                                                 Map<User, Double> shares);
}

class EqualSplit extends SplitStrategy {
    public Map<User, Double> calculate(double amount, List<User> participants,
                                        Map<User, Double> shares) {
        Map<User, Double> result = new HashMap<>();
        double each = amount / participants.size();
        for (User u : participants) result.put(u, each);
        return result;
    }
}

class ExactSplit extends SplitStrategy {
    public Map<User, Double> calculate(double amount, List<User> participants,
                                        Map<User, Double> shares) {
        double sum = shares.values().stream().mapToDouble(Double::doubleValue).sum();
        if (Math.abs(sum - amount) > 0.01)
            throw new IllegalArgumentException("Exact shares must sum to amount");
        return new HashMap<>(shares);
    }
}

class PercentageSplit extends SplitStrategy {
    public Map<User, Double> calculate(double amount, List<User> participants,
                                        Map<User, Double> shares) {
        double pctSum = shares.values().stream().mapToDouble(Double::doubleValue).sum();
        if (Math.abs(pctSum - 100.0) > 0.01)
            throw new IllegalArgumentException("Percentages must sum to 100");
        Map<User, Double> result = new HashMap<>();
        for (Map.Entry<User, Double> e : shares.entrySet())
            result.put(e.getKey(), amount * e.getValue() / 100.0);
        return result;
    }
}

class Expense {
    private final String id;
    private final User paidBy;
    private final double amount;
    private final List<User> participants;
    private final SplitType splitType;
    private final Map<User, Double> shares;
    private final long timestamp;

    Expense(String id, User paidBy, double amount, List<User> participants,
            SplitType splitType, Map<User, Double> rawShares, SplitStrategy strategy) {
        this.id = id; this.paidBy = paidBy; this.amount = amount;
        this.participants = participants; this.splitType = splitType;
        this.shares = strategy.calculate(amount, participants, rawShares);
        this.timestamp = System.currentTimeMillis();
    }
    public String getId() { return id; }
    public User getPaidBy() { return paidBy; }
    public double getAmount() { return amount; }
    public List<User> getParticipants() { return participants; }
    public SplitType getSplitType() { return splitType; }
    public Map<User, Double> getShares() { return shares; }
    public long getTimestamp() { return timestamp; }
}`;