export const JAVA_A = `// A. Enums + Room + Guest
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

enum RoomType { SINGLE, DOUBLE, SUITE }
enum RoomStatus { AVAILABLE, MAINTENANCE }
enum BookingStatus { PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED }
enum PaymentStatus { PENDING, SUCCESS, FAILED, REFUNDED }

class Room {
    private final String number;
    private final RoomType type;
    private final double pricePerNight;
    private RoomStatus status = RoomStatus.AVAILABLE;

    Room(String n, RoomType t, double p) { number = n; type = t; pricePerNight = p; }
    public String getNumber() { return number; }
    public RoomType getType() { return type; }
    public double getPricePerNight() { return pricePerNight; }
    public RoomStatus getStatus() { return status; }
    public void setStatus(RoomStatus s) { status = s; }
}

class Guest {
    private final String id;
    private final String name;
    private final String email;
    private final String phone;
    Guest(String id, String n, String e, String p) {
        this.id = id; name = n; email = e; phone = p;
    }
    public String getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }
}`;