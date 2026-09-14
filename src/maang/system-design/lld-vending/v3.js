export const JAVA_C = `// C. States + VendingMachine + Main
interface VendingMachineStateI {
    boolean selectProduct(VendingMachine m, String code);
    boolean insertPayment(VendingMachine m, PaymentStrategy pay, double amount);
    Product dispense(VendingMachine m);
}

class IdleState implements VendingMachineStateI {
    public boolean selectProduct(VendingMachine m, String code) {
        Slot s = m.getSlot(code);
        if (s == null || !s.isAvailable()) return false;
        m.setSelectedSlot(s);
        m.setState(new PaymentPendingState());
        return true;
    }
    public boolean insertPayment(VendingMachine m, PaymentStrategy p, double a) { return false; }
    public Product dispense(VendingMachine m) { return null; }
}

class PaymentPendingState implements VendingMachineStateI {
    public boolean selectProduct(VendingMachine m, String code) { return false; }
    public boolean insertPayment(VendingMachine m, PaymentStrategy pay, double amount) {
        Slot s = m.getSelectedSlot();
        if (s == null) return false;
        double price = s.getProduct().getPrice();
        if (amount < price) return false;
        if (pay.pay(amount) != PaymentStatus.SUCCESS) return false;
        double change = m.getChangeDispenser().calculateChange(amount, price);
        m.setCurrentTransaction(new Transaction(
            "TXN-" + System.currentTimeMillis(), s.getProduct(), System.currentTimeMillis()));
        m.getCurrentTransaction().markPaid(amount, change);
        m.setState(new DispensingState());
        return true;
    }
    public Product dispense(VendingMachine m) { return null; }
}

class DispensingState implements VendingMachineStateI {
    public boolean selectProduct(VendingMachine m, String code) { return false; }
    public boolean insertPayment(VendingMachine m, PaymentStrategy p, double a) { return false; }
    public Product dispense(VendingMachine m) {
        Slot s = m.getSelectedSlot();
        if (s == null || !s.dispense()) {
            m.getCurrentTransaction().markFailed();
            m.setState(new IdleState());
            return null;
        }
        Product p = s.getProduct();
        m.setState(new IdleState());
        return p;
    }
}

class VendingMachine {
    private static volatile VendingMachine ins;
    private final java.util.Map<String, Slot> slots = new java.util.HashMap<>();
    private VendingMachineStateI state = new IdleState();
    private Slot selectedSlot;
    private Transaction currentTransaction;
    private final ChangeDispenser changeDispenser = new StandardChangeDispenser();

    private VendingMachine() {}

    public static VendingMachine get() {
        if (ins == null) { synchronized (VendingMachine.class) {
            if (ins == null) ins = new VendingMachine(); } }
        return ins;
    }

    public void addSlot(Slot s) { slots.put(s.getCode(), s); }
    public Slot getSlot(String code) { return slots.get(code); }
    public Slot getSelectedSlot() { return selectedSlot; }
    public void setSelectedSlot(Slot s) { selectedSlot = s; }
    public void setState(VendingMachineStateI s) { state = s; }
    public VendingMachineStateI getState() { return state; }
    public Transaction getCurrentTransaction() { return currentTransaction; }
    public void setCurrentTransaction(Transaction t) { currentTransaction = t; }
    public ChangeDispenser getChangeDispenser() { return changeDispenser; }

    public boolean selectProduct(String code) { return state.selectProduct(this, code); }
    public boolean insertPayment(PaymentStrategy pay, double amount) {
        return state.insertPayment(this, pay, amount);
    }
    public Product dispense() { return state.dispense(this); }
}

public class Main {
    public static void main(String[] args) {
        VendingMachine vm = VendingMachine.get();
        vm.addSlot(new Slot("A1", new Product("P001", "Coke", 1.50), 5, 10));
        vm.addSlot(new Slot("A2", new Product("P002", "Chips", 1.00), 3, 10));

        vm.selectProduct("A1");
        vm.insertPayment(new CashPayment(), 2.00);
        Product p = vm.dispense();
        System.out.println("Dispensed: " + p.getName());
        System.out.println("Change: " + vm.getCurrentTransaction().getChange());
    }
}`;