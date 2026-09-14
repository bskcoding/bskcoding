// ELEVATOR LLD — Part 1: Enums + Request + Elevator core
// Step-by-step, simple words for fresher + expert

export const JAVA1 = `// === Enums ===
enum Direction { UP, DOWN, IDLE }
enum ElevatorState { MOVING, STOPPED, DOOR_OPEN, DOOR_CLOSED }
enum DoorState { OPEN, CLOSED }

// === Request: someone pressed a button ===
class Request {
    int floor;          // which floor pressed
    Direction dir;      // UP or DOWN (for external button)
    boolean internal;   // true = inside elevator, false = floor button
    long time;          // when pressed (for FIFO)

    Request(int f, Direction d, boolean internal) {
        this.floor = f; this.dir = d;
        this.internal = internal;
        this.time = System.currentTimeMillis();
    }
}

// === Elevator: one box that moves ===
class Elevator {
    int id;
    int currentFloor = 1;
    Direction direction = Direction.IDLE;
    DoorState door = DoorState.CLOSED;
    List<Integer> targetFloors = new ArrayList<>(); // floors to stop

    Elevator(int id) { this.id = id; }

    // Add a floor to stop at
    void addTarget(int floor) {
        if (!targetFloors.contains(floor)) targetFloors.add(floor);
    }

    // Move one floor in current direction
    void move() {
        if (direction == Direction.UP) currentFloor++;
        else if (direction == Direction.DOWN) currentFloor--;
    }

    // Open door, let people in/out, close door
    void openDoor() { door = DoorState.OPEN; }
    void closeDoor() { door = DoorState.CLOSED; }
}`;