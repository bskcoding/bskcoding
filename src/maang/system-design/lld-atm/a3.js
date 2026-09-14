export const JAVA_C = `// C. States + ATM + Main
interface ATMState {
    void insertCard(ATM atm, Card card);
    boolean enterPin(ATM atm, String pin);
    void withdraw(ATM atm, double amount);
    void ejectCard(ATM atm);
}

class IdleState implements ATMState {
    public void insertCard(ATM atm, Card card) {
        atm.setCurrentCard(card);
        atm.setState(new HasCardState());
        System.out.println("Card inserted. Enter PIN.");
    }
    public boolean enterPin(ATM atm, String pin) { System.out.println("Insert card first"); return false; }
    public void withdraw(ATM atm, double amount) { System.out.println("Insert card first"); }
    public void ejectCard(ATM atm) { System.out.println("No card"); }
}

class HasCardState implements ATMState {
    public void insertCard(ATM atm, Card card) { System.out.println("Card already inserted"); }
    public boolean enterPin(ATM atm, String pin) {
        if (atm.getBankService().authenticate(atm.getCurrentCard(), pin)) {
            atm.setState(new AuthenticatedState());
            System.out.println("Authenticated.");
            return true;
        }
        System.out.println("Invalid PIN.");
        return false;
    }
    public void withdraw(ATM atm, double amount) { System.out.println("Enter PIN first"); }
    public void ejectCard(ATM atm) {
        atm.setCurrentCard(null);
        atm.setState(new IdleState());
        System.out.println("Card ejected.");
    }
}

class AuthenticatedState implements ATMState {
    public void insertCard(ATM atm, Card card) { System.out.println("Already authenticated"); }
    public boolean enterPin(ATM atm, String pin) { return true; }
    public void withdraw(ATM atm, double amount) {
        Card card = atm.getCurrentCard();
        Account acc = card.getAccount();
        try {
            atm.getBankService().debit(acc, amount);
            Map<Integer, Integer> notes = atm.getDispenserChain().dispense(amount);
            Transaction txn = new Transaction("TXN-" + System.currentTimeMillis(),
                    TransactionType.WITHDRAWAL, card, amount);
            txn.markSuccess();
            atm.addTransaction(txn);
            System.out.println("Dispensed: " + notes);
        } catch (Exception e) {
            System.out.println("Withdrawal failed: " + e.getMessage());
        }
    }
    public void ejectCard(ATM atm) {
        atm.setCurrentCard(null);
        atm.setState(new IdleState());
        System.out.println("Card ejected.");
    }
}

class ATM {
    private static volatile ATM ins;
    private ATMState state = new IdleState();
    private Card currentCard;
    private final BankService bankService;
    private final CashDispenser dispenserChain;
    private final List<Transaction> transactions = new ArrayList<>();

    private ATM(BankService bs, CashDispenser chain) {
        bankService = bs; dispenserChain = chain;
    }
    public static ATM get(BankService bs, CashDispenser chain) {
        if (ins == null) { synchronized (ATM.class) {
            if (ins == null) ins = new ATM(bs, chain); } }
        return ins;
    }
    public void setState(ATMState s) { state = s; }
    public ATMState getState() { return state; }
    public Card getCurrentCard() { return currentCard; }
    public void setCurrentCard(Card c) { currentCard = c; }
    public BankService getBankService() { return bankService; }
    public CashDispenser getDispenserChain() { return dispenserChain; }
    public void addTransaction(Transaction t) { transactions.add(t); }

    public void insertCard(Card c) { state.insertCard(this, c); }
    public boolean enterPin(String pin) { return state.enterPin(this, pin); }
    public void withdraw(double amt) { state.withdraw(this, amt); }
    public void ejectCard() { state.ejectCard(this); }
}

public class Main {
    public static void main(String[] args) {
        Account acc = new Account("A1", "1234567890", "Alice", 5000);
        Card card = new Card("4111-1111", acc, "HDFC", "1234");

        CashDispenser chain = new TwoThousandDispenser(5);
        chain.setNext(new FiveHundredDispenser(10));
        chain.next.setNext(new TwoHundredDispenser(20));
        chain.next.next.setNext(new HundredDispenser(50));

        ATM atm = ATM.get(new MockBankService(), chain);
        atm.insertCard(card);
        atm.enterPin("1234");
        atm.withdraw(2700);
        System.out.println("Balance: " + acc.getBalance());
        atm.ejectCard();
    }
}`;