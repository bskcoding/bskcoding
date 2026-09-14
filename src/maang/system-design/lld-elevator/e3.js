// ELEVATOR LLD — Part 3: Building + demo main
// This is the entry point — ties everything together

export const JAVA3 = `// === Building: top-level container ===
class Building {
    ElevatorController controller;
    int numFloors;

    Building(int numFloors, int numElevators) {
        this.numFloors = numFloors;
        this.controller = new ElevatorController(
            numElevators, new NearestElevatorStrategy());
    }

    // Floor button pressed (up/down)
    void pressFloorButton(int floor, Direction dir) {
        System.out.println("Floor " + floor + " pressed " + dir);
        controller.requestElevator(floor, dir);
    }

    // Elevator button pressed (inside elevator)
    void pressElevatorButton(int elevatorId, int floor) {
        Elevator e = controller.elevators.get(elevatorId - 1);
        System.out.println("Elevator " + elevatorId + " pressed floor " + floor);
        controller.requestFloor(e, floor);
    }

    // Run one tick of simulation
    void tick() { controller.step(); }

    // Print status of all elevators
    void printStatus() {
        for (Elevator e : controller.elevators) {
            System.out.println("Elevator " + e.id + ": Floor " +
                e.currentFloor + " | " + e.direction + " | Targets: " +
                e.targetFloors);
        }
        System.out.println("---");
    }
}

// === Demo ===
public class Main {
    public static void main(String[] args) {
        // 10 floors, 3 elevators
        Building building = new Building(10, 3);

        // Floor 5 wants to go UP
        building.pressFloorButton(5, Direction.UP);
        building.printStatus();

        // Floor 3 wants to go DOWN
        building.pressFloorButton(3, Direction.DOWN);

        // Elevator 1 pressed floor 7 (internal)
        building.pressElevatorButton(1, 7);

        // Run simulation for 10 ticks
        for (int i = 0; i < 10; i++) {
            building.tick();
            building.printStatus();
        }
    }
}`;