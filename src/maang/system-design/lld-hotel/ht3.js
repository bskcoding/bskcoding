export const JAVA_C = `// C. Booking + AvailabilityChecker + Service + Main
class Booking {
    private final String id;
    private final Room room;
    private final Guest guest;
    private final LocalDate checkIn;
    private final LocalDate checkOut;
    private BookingState state = new PendingState();
    private double paidAmount = 0;
    private RefundStrategy refundStrategy = new FreeCancel();

    Booking(String id, Room r, Guest g, LocalDate in, LocalDate out) {
        this.id = id; room = r; guest = g; checkIn = in; checkOut = out;
    }
    public boolean overlaps(LocalDate in, LocalDate out) {
        return checkIn.isBefore(out) && in.isBefore(checkOut);
    }
    public long nights() { return ChronoUnit.DAYS.between(checkIn, checkOut); }
    public double totalAmount() { return nights() * room.getPricePerNight(); }

    public String getId() { return id; }
    public Room getRoom() { return room; }
    public Guest getGuest() { return guest; }
    public LocalDate getCheckIn() { return checkIn; }
    public LocalDate getCheckOut() { return checkOut; }
    public BookingState getState() { return state; }
    public void setState(BookingState s) { state = s; }
    public double getPaidAmount() { return paidAmount; }
    public void setPaidAmount(double a) { paidAmount = a; }
    public RefundStrategy getRefundStrategy() { return refundStrategy; }
    public void setRefundStrategy(RefundStrategy r) { refundStrategy = r; }

    public boolean confirm() { return state.confirm(this); }
    public boolean checkIn() { return state.checkIn(this); }
    public boolean checkOut() { return state.checkOut(this); }
    public double cancel(LocalDate today) { return state.cancel(this, today); }
    public BookingStatus getStatus() { return state.getStatus(); }
}

class AvailabilityChecker {
    public boolean isAvailable(Room room, LocalDate in, LocalDate out,
                                 Collection<Booking> allBookings) {
        if (room.getStatus() == RoomStatus.MAINTENANCE) return false;
        for (Booking b : allBookings) {
            if (!b.getRoom().getNumber().equals(room.getNumber())) continue;
            if (b.getStatus() == BookingStatus.CANCELLED
                    || b.getStatus() == BookingStatus.CHECKED_OUT) continue;
            if (b.overlaps(in, out)) return false;
        }
        return true;
    }
}

class HotelBookingService {
    private static volatile HotelBookingService ins;
    private final Map<String, Room> rooms = new ConcurrentHashMap<>();
    private final Map<String, Booking> bookings = new ConcurrentHashMap<>();
    private final Map<String, Guest> guests = new ConcurrentHashMap<>();
    private final AvailabilityChecker checker = new AvailabilityChecker();

    private HotelBookingService() {}

    public static HotelBookingService get() {
        if (ins == null) { synchronized (HotelBookingService.class) {
            if (ins == null) ins = new HotelBookingService(); } }
        return ins;
    }

    public void addRoom(Room r) { rooms.put(r.getNumber(), r); }
    public void addGuest(Guest g) { guests.put(g.getId(), g); }

    public List<Room> searchAvailable(RoomType type, LocalDate in, LocalDate out) {
        List<Room> result = new ArrayList<>();
        for (Room r : rooms.values()) {
            if (r.getType() != type) continue;
            if (checker.isAvailable(r, in, out, bookings.values())) result.add(r);
        }
        return result;
    }

    public synchronized Optional<Booking> book(String guestId, String roomNumber,
                                                LocalDate in, LocalDate out,
                                                PaymentStrategy payment) {
        Guest g = guests.get(guestId);
        Room r = rooms.get(roomNumber);
        if (g == null || r == null) return Optional.empty();
        if (in.isAfter(out) || in.isEqual(out)) return Optional.empty();
        if (!checker.isAvailable(r, in, out, bookings.values())) return Optional.empty();

        Booking b = new Booking("B-" + System.currentTimeMillis(), r, g, in, out);
        double amount = b.totalAmount();
        if (payment.pay(amount) != PaymentStatus.SUCCESS) return Optional.empty();

        b.setPaidAmount(amount);
        b.confirm();
        bookings.put(b.getId(), b);
        return Optional.of(b);
    }

    public synchronized double cancel(String bookingId, LocalDate today) {
        Booking b = bookings.get(bookingId);
        if (b == null) return 0;
        return b.cancel(today);
    }

    public boolean checkIn(String bookingId) {
        Booking b = bookings.get(bookingId);
        return b != null && b.checkIn();
    }
    public boolean checkOut(String bookingId) {
        Booking b = bookings.get(bookingId);
        return b != null && b.checkOut();
    }
    public Booking getBooking(String id) { return bookings.get(id); }
}

public class Main {
    public static void main(String[] args) {
        HotelBookingService svc = HotelBookingService.get();
        svc.addRoom(new Room("101", RoomType.SINGLE, 100));
        svc.addRoom(new Room("102", RoomType.DOUBLE, 200));
        svc.addRoom(new Room("201", RoomType.SUITE, 500));
        svc.addGuest(new Guest("G1", "Alice", "a@x.com", "111"));
        svc.addGuest(new Guest("G2", "Bob", "b@x.com", "222"));

        LocalDate in = LocalDate.of(2024, 6, 1);
        LocalDate out = LocalDate.of(2024, 6, 5);

        System.out.println("Available DOUBLE: "
                + svc.searchAvailable(RoomType.DOUBLE, in, out).size());

        Optional<Booking> b1 = svc.book("G1", "102", in, out, new CardPayment());
        b1.ifPresent(b -> System.out.println("Booked: " + b.getId()
                + " amount=" + b.getPaidAmount() + " status=" + b.getStatus()));

        Optional<Booking> b2 = svc.book("G2", "102", in.plusDays(2), out.plusDays(2), new UpiPayment());
        System.out.println("Overlap booking succeeded? " + b2.isPresent());

        b1.ifPresent(b -> {
            b.setRefundStrategy(new PartialRefund(0.5));
            double refund = svc.cancel(b.getId(), LocalDate.of(2024, 5, 25));
            System.out.println("Cancelled. Refund: " + refund);
        });
    }
}`;