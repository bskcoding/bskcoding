export const JAVA_A = `// A. Enums + Card + Account + BankService
import java.util.*;

enum TransactionType { WITHDRAWAL, DEPOSIT, TRANSFER, BALANCE_ENQUIRY }
enum TransactionStatus { PENDING, SUCCESS, FAILED }
enum CardStatus { ACTIVE, BLOCKED, EXPIRED }
enum AccountStatus { ACTIVE, FROZEN, CLOSED }

class Account {
    private final String id;
    private final String accountNumber;
    private final String ownerName;
    private double balance;
    private AccountStatus status = AccountStatus.ACTIVE;
    Account(String id, String num, String owner, double bal) {
        this.id = id; accountNumber = num; ownerName = owner; balance = bal;
    }
    public String getId() { return id; }
    public String getAccountNumber() { return accountNumber; }
    public double getBalance() { return balance; }
    public AccountStatus getStatus() { return status; }
    public synchronized void debit(double amt) {
        if (balance < amt) throw new IllegalStateException("Insufficient funds");
        balance -= amt;
    }
    public synchronized void credit(double amt) { balance += amt; }
}

class Card {
    private final String cardNumber;
    private final Account account;
    private final String bankName;
    private final String pinHash;
    private CardStatus status = CardStatus.ACTIVE;
    private int failedAttempts = 0;
    Card(String num, Account acc, String bank, String pin) {
        cardNumber = num; account = acc; bankName = bank; pinHash = hash(pin);
    }
    private static String hash(String pin) { return "HASH_" + pin; }
    public boolean verifyPin(String pin) {
        if (status != CardStatus.ACTIVE) return false;
        if (pinHash.equals(hash(pin))) { failedAttempts = 0; return true; }
        failedAttempts++;
        if (failedAttempts >= 3) status = CardStatus.BLOCKED;
        return false;
    }
    public String getCardNumber() { return cardNumber; }
    public Account getAccount() { return account; }
    public CardStatus getStatus() { return status; }
}

interface BankService {
    boolean authenticate(Card card, String pin);
    double getBalance(Account acc);
    void debit(Account acc, double amt);
    void credit(Account acc, double amt);
}

class MockBankService implements BankService {
    public boolean authenticate(Card card, String pin) { return card.verifyPin(pin); }
    public double getBalance(Account acc) { return acc.getBalance(); }
    public void debit(Account acc, double amt) { acc.debit(amt); }
    public void credit(Account acc, double amt) { acc.credit(amt); }
}`;