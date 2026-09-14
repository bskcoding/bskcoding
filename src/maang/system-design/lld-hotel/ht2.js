export const JAVA_B = `// B. BookingState + Payment + Refund Strategies
interface BookingState {
    boolean confirm(Booking b);
    boolean checkIn(Booking b);
    boolean checkOut(Booking b);
    double cancel(Booking b, LocalDate today);
    BookingStatus getStatus();
}

class PendingState implements BookingState {
    public boolean confirm(Booking b) { b.setState(new ConfirmedState()); return true; }
    public boolean checkIn(Booking b) { return false; }
    public boolean checkOut(Booking b) { return false; }
    public double cancel(Booking b, LocalDate today) {
        b.setState(new CancelledState());
        return b.getPaidAmount();
    }
    public BookingStatus getStatus() { return BookingStatus.PENDING; }
}

class ConfirmedState implements BookingState {
    public boolean confirm(Booking b) { return false; }
    public boolean checkIn(Booking b) { b.setState(new CheckedInState()); return true; }
    public boolean checkOut(Booking b) { return false; }
    public double cancel(Booking b, LocalDate today) {
        b.setState(new CancelledState());
        return b.getRefundStrategy().calculateRefund(b, today);
    }
    public BookingStatus getStatus() { return BookingStatus.CONFIRMED; }
}

class CheckedInState implements BookingState {
    public boolean confirm(Booking b) { return false; }
    public boolean checkIn(Booking b) { return false; }
    public boolean checkOut(Booking b) { b.setState(new CheckedOutState()); return true; }
    public double cancel(Booking b, LocalDate today) { return 0; }
    public BookingStatus getStatus() { return BookingStatus.CHECKED_IN; }
}

class CheckedOutState implements BookingState {
    public boolean confirm(Booking b) { return false; }
    public boolean checkIn(Booking b) { return false; }
    public boolean checkOut(Booking b) { return false; }
    public double cancel(Booking b, LocalDate today) { return 0; }
    public BookingStatus getStatus() { return BookingStatus.CHECKED_OUT; }
}

class CancelledState implements BookingState {
    public boolean confirm(Booking b) { return false; }
    public boolean checkIn(Booking b) { return false; }
    public boolean checkOut(Booking b) { return false; }
    public double cancel(Booking b, LocalDate today) { return 0; }
    public BookingStatus getStatus() { return BookingStatus.CANCELLED; }
}

interface PaymentStrategy {
    PaymentStatus pay(double amount);
}
class CardPayment implements PaymentStrategy {
    public PaymentStatus pay(double a) { return PaymentStatus.SUCCESS; }
}
class UpiPayment implements PaymentStrategy {
    public PaymentStatus pay(double a) { return PaymentStatus.SUCCESS; }
}
class CashPayment implements PaymentStrategy {
    public PaymentStatus pay(double a) { return PaymentStatus.SUCCESS; }
}

interface RefundStrategy {
    double calculateRefund(Booking b, LocalDate cancelDate);
}
class FreeCancel implements RefundStrategy {
    public double calculateRefund(Booking b, LocalDate cancelDate) {
        return b.getPaidAmount();
    }
}
class PartialRefund implements RefundStrategy {
    private final double pct;
    PartialRefund(double p) { pct = p; }
    public double calculateRefund(Booking b, LocalDate cancelDate) {
        return b.getPaidAmount() * pct;
    }
}
class NoRefund implements RefundStrategy {
    public double calculateRefund(Booking b, LocalDate cancelDate) { return 0; }
}`;