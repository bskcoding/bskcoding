export const JAVA_C = `// C. Observer + Service + Main
interface NotificationObserver {
    void onExpenseAdded(Expense e);
    void onSettlement(String groupId, User from, User to, double amount);
}
class EmailNotifier implements NotificationObserver {
    public void onExpenseAdded(Expense e) {
        System.out.println("[EMAIL] Expense " + e.getId() + " by " + e.getPaidBy().getName());
    }
    public void onSettlement(String g, User f, User t, double a) {
        System.out.println("[EMAIL] " + f.getName() + " settled " + a + " with " + t.getName());
    }
}
class PushNotifier implements NotificationObserver {
    public void onExpenseAdded(Expense e) {
        System.out.println("[PUSH] New expense: " + e.getAmount());
    }
    public void onSettlement(String g, User f, User t, double a) {
        System.out.println("[PUSH] Settlement recorded");
    }
}

class SplitwiseService {
    private static volatile SplitwiseService ins;
    private final Map<String, User> users = new HashMap<>();
    private final Map<String, Group> groups = new HashMap<>();
    private final List<Expense> expenses = new ArrayList<>();
    private final List<NotificationObserver> observers = new ArrayList<>();

    private SplitwiseService() {}

    public static SplitwiseService get() {
        if (ins == null) { synchronized (SplitwiseService.class) {
            if (ins == null) ins = new SplitwiseService(); } }
        return ins;
    }

    public void addUser(User u) { users.put(u.getId(), u); }
    public void createGroup(Group g) { groups.put(g.getId(), g); }
    public void addObserver(NotificationObserver o) { observers.add(o); }
    public Group getGroup(String id) { return groups.get(id); }

    public synchronized Expense addExpense(String groupId, User paidBy, double amount,
                                            List<User> participants, SplitType type,
                                            Map<User, Double> rawShares) {
        Group g = groups.get(groupId);
        if (g == null) throw new IllegalArgumentException("Group not found");
        SplitStrategy strategy = switch (type) {
            case EQUAL -> new EqualSplit();
            case EXACT -> new ExactSplit();
            case PERCENTAGE -> new PercentageSplit();
        };
        Expense e = new Expense("EXP-" + System.currentTimeMillis(),
                paidBy, amount, participants, type, rawShares, strategy);
        expenses.add(e);
        BalanceSheet bs = g.getBalanceSheet();
        bs.updateBalance(paidBy, amount);
        for (Map.Entry<User, Double> entry : e.getShares().entrySet())
            bs.updateBalance(entry.getKey(), -entry.getValue());
        for (NotificationObserver o : observers) o.onExpenseAdded(e);
        return e;
    }

    public synchronized Map<User, Double> getBalances(String groupId) {
        Group g = groups.get(groupId);
        if (g == null) return Collections.emptyMap();
        return g.getBalanceSheet().getAllBalances();
    }

    public synchronized void settleUp(String groupId, User from, User to, double amount) {
        Group g = groups.get(groupId);
        if (g == null) throw new IllegalArgumentException("Group not found");
        BalanceSheet bs = g.getBalanceSheet();
        bs.updateBalance(from, amount);
        bs.updateBalance(to, -amount);
        for (NotificationObserver o : observers) o.onSettlement(groupId, from, to, amount);
    }
}

public class Main {
    public static void main(String[] args) {
        SplitwiseService svc = SplitwiseService.get();
        svc.addObserver(new EmailNotifier());
        svc.addObserver(new PushNotifier());

        User alice = new User("U1", "Alice", "a@x.com");
        User bob   = new User("U2", "Bob",   "b@x.com");
        User carol = new User("U3", "Carol", "c@x.com");
        svc.addUser(alice); svc.addUser(bob); svc.addUser(carol);

        Group trip = new Group("G1", "Goa Trip");
        trip.addMember(alice); trip.addMember(bob); trip.addMember(carol);
        svc.createGroup(trip);

        svc.addExpense("G1", alice, 300.0,
                List.of(alice, bob, carol), SplitType.EQUAL, Collections.emptyMap());

        System.out.println("Balances: " + svc.getBalances("G1"));

        svc.settleUp("G1", bob, alice, 100.0);
        System.out.println("After settlement: " + svc.getBalances("G1"));
    }
}`;