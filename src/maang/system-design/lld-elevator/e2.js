// ELEVATOR LLD — Part 2: SchedulingStrategy + ElevatorController
// Strategy pattern = swap algorithm without changing core (OCP)

export const JAVA2 = `// === SchedulingStrategy interface ===
// Why interface? You can swap "nearest elevator" with "SCAN algorithm"
// without touching ElevatorController — Open/Closed Principle
interface SchedulingStrategy {
    Elevator selectElevator(List<Elevator> elevators, Request req);
}

// === Nearest Elevator Strategy ===
// Pick the elevator closest to request floor, preferring same direction
class NearestElevatorStrategy implements SchedulingStrategy {
    public Elevator selectElevator(List<Elevator> elevators, Request req) {
        Elevator best = null;
        int minDist = Integer.MAX_VALUE;
        for (Elevator e : elevators) {
            int dist = Math.abs(e.currentFloor - req.floor);
            // Prefer elevator going same direction or IDLE
            boolean sameDir = (e.direction == req.dir) || (e.direction == Direction.IDLE);
            if (sameDir && dist < minDist) {
                minDist = dist; best = e;
            }
        }
        // If no same-direction found, just pick nearest
        if (best == null) {
            for (Elevator e : elevators) {
                int dist = Math.abs(e.currentFloor - req.floor);
                if (dist < minDist) { minDist = dist; best = e; }
            }
        }
        return best;
    }
}

// === ElevatorController: the boss ===
// Holds all elevators + assigns requests using strategy
class ElevatorController {
    List<Elevator> elevators;
    SchedulingStrategy strategy;

    ElevatorController(int numElevators, SchedulingStrategy strategy) {
        this.strategy = strategy;
        this.elevators = new ArrayList<>();
        for (int i = 0; i < numElevators; i++)
            elevators.add(new Elevator(i + 1));
    }

    // External button pressed on floor (up/down)
    void requestElevator(int floor, Direction dir) {
        Request req = new Request(floor, dir, false);
        Elevator e = strategy.selectElevator(elevators, req);
        if (e != null) {
            e.addTarget(floor);
            updateDirection(e);
        }
    }

    // Internal button pressed inside elevator (floor number)
    void requestFloor(Elevator e, int floor) {
        e.addTarget(floor);
        updateDirection(e);
    }

    // Decide which way elevator should go based on targets
    void updateDirection(Elevator e) {
        if (e.targetFloors.isEmpty()) { e.direction = Direction.IDLE; return; }
        int next = e.targetFloors.get(0);
        e.direction = (next > e.currentFloor) ? Direction.UP : Direction.DOWN;
    }

    // Process one step: move elevators, open doors at target
    void step() {
        for (Elevator e : elevators) {
            if (e.targetFloors.isEmpty()) { e.direction = Direction.IDLE; continue; }
            if (e.currentFloor == e.targetFloors.get(0)) {
                e.openDoor();
                e.targetFloors.remove(0);
                e.closeDoor();
            } else {
                e.move();
            }
        }
    }
}`;