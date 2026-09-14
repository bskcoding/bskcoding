export const SQL = `-- 6 tables, normalized, minimal

CREATE TABLE rooms (
  room_number    VARCHAR(10) PRIMARY KEY,
  room_type      ENUM('SINGLE','DOUBLE','SUITE') NOT NULL,
  price_per_night DECIMAL(10,2) NOT NULL,
  status         ENUM('AVAILABLE','MAINTENANCE') DEFAULT 'AVAILABLE',
  floor_number   INT
);
CREATE INDEX idx_room_type ON rooms(room_type, status);

CREATE TABLE guests (
  guest_id  VARCHAR(20) PRIMARY KEY,
  name      VARCHAR(100) NOT NULL,
  email     VARCHAR(100) UNIQUE NOT NULL,
  phone     VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_guest_email ON guests(email);

CREATE TABLE bookings (
  booking_id    VARCHAR(20) PRIMARY KEY,
  room_number   VARCHAR(10) NOT NULL,
  guest_id      VARCHAR(20) NOT NULL,
  check_in      DATE NOT NULL,
  check_out     DATE NOT NULL,
  status        ENUM('PENDING','CONFIRMED','CHECKED_IN','CHECKED_OUT','CANCELLED') DEFAULT 'PENDING',
  total_amount  DECIMAL(10,2) NOT NULL,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  cancelled_at  TIMESTAMP NULL,
  FOREIGN KEY (room_number) REFERENCES rooms(room_number),
  FOREIGN KEY (guest_id) REFERENCES guests(guest_id),
  CHECK (check_out > check_in)
);
CREATE INDEX idx_booking_room_dates ON bookings(room_number, check_in, check_out, status);
CREATE INDEX idx_booking_guest ON bookings(guest_id, status);

CREATE TABLE payments (
  payment_id    VARCHAR(20) PRIMARY KEY,
  booking_id    VARCHAR(20) NOT NULL,
  method        ENUM('CARD','UPI','CASH') NOT NULL,
  amount        DECIMAL(10,2) NOT NULL,
  status        ENUM('PENDING','SUCCESS','FAILED','REFUNDED') DEFAULT 'PENDING',
  transaction_ref VARCHAR(100),
  paid_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);
CREATE INDEX idx_payment_booking ON payments(booking_id);

CREATE TABLE refunds (
  refund_id     VARCHAR(20) PRIMARY KEY,
  payment_id    VARCHAR(20) NOT NULL,
  booking_id    VARCHAR(20) NOT NULL,
  amount        DECIMAL(10,2) NOT NULL,
  reason        ENUM('FREE_CANCEL','PARTIAL','NO_REFUND') NOT NULL,
  status        ENUM('PENDING','PROCESSED','FAILED') DEFAULT 'PENDING',
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (payment_id) REFERENCES payments(payment_id),
  FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);
CREATE INDEX idx_refund_booking ON refunds(booking_id);

CREATE TABLE availability_locks (
  lock_id       VARCHAR(20) PRIMARY KEY,
  room_number   VARCHAR(10) NOT NULL,
  check_in      DATE NOT NULL,
  check_out     DATE NOT NULL,
  booking_id    VARCHAR(20),
  expires_at    TIMESTAMP NOT NULL,
  FOREIGN KEY (room_number) REFERENCES rooms(room_number)
);
CREATE INDEX idx_lock_room_dates ON availability_locks(room_number, check_in, check_out);`;

export const UML = `----------------------------------------
  HotelBookingService  (Singleton + Facade)
  - rooms: Map<String, Room>
  - bookings: Map<String, Booking>
  - availabilityChecker: AvailabilityChecker
  + searchAvailable(type, in, out): List<Room>
  + book(guest, room, in, out): Optional<Booking>
  + cancel(bookingId): double
  + checkIn(bookingId)
  + checkOut(bookingId)
----------------------------------------
      |owns (rooms die with service)
      v
----------------------------------------
  Room                    RoomType (enum)
  - number: String        SINGLE, DOUBLE, SUITE
  - type: RoomType
  - pricePerNight
  - status: RoomStatus
----------------------------------------

Service --creates--> Booking
  - id, room, guest, checkIn, checkOut
  - state: BookingState
  - payment: Payment

Booking --has--> BookingState (interface)
  |-- PendingState    |-- ConfirmedState
  |-- CheckedInState  |-- CheckedOutState
  +-- CancelledState

Booking --uses--> PaymentStrategy (Card/UPI/Cash)
Booking --uses--> RefundStrategy (FreeCancel/Partial/NoRefund)
AvailabilityChecker --checks--> Booking overlaps`;