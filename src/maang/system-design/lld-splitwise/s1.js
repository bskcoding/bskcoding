export const JAVA_A = `// A. Enums + User + Group + BalanceSheet
import java.util.*;

enum SplitType { EQUAL, EXACT, PERCENTAGE }

class User {
    private final String id;
    private final String name;
    private final String email;
    User(String id, String n, String e) { this.id = id; name = n; email = e; }
    public String getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    @Override public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        return id.equals(((User) o).id);
    }
    @Override public int hashCode() { return id.hashCode(); }
}

class BalanceSheet {
    private final Map<User, Double> balances = new HashMap<>();
    public synchronized void updateBalance(User u, double delta) {
        balances.merge(u, delta, Double::sum);
    }
    public synchronized double getBalance(User u) {
        return balances.getOrDefault(u, 0.0);
    }
    public synchronized Map<User, Double> getAllBalances() {
        return new HashMap<>(balances);
    }
}

class Group {
    private final String id;
    private final String name;
    private final Set<User> members = new HashSet<>();
    private final BalanceSheet balanceSheet = new BalanceSheet();
    Group(String id, String n) { this.id = id; name = n; }
    public void addMember(User u) { members.add(u); }
    public boolean isMember(User u) { return members.contains(u); }
    public String getId() { return id; }
    public String getName() { return name; }
    public Set<User> getMembers() { return members; }
    public BalanceSheet getBalanceSheet() { return balanceSheet; }
}`;