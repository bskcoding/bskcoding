// ELEVATOR LLD — DB Schema + UML (multi-line, colorful IDE blocks)

export const SQL = `-- ELEVATOR SYSTEM — Database Schema
-- 4 tables: buildings, elevators, elevator_log, requests

CREATE TABLE buildings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    num_floors INT NOT NULL,
    num_elevators INT NOT NULL
);

CREATE TABLE elevators (
    id INT PRIMARY KEY AUTO_INCREMENT,
    building_id INT NOT NULL,
    current_floor INT DEFAULT 1,
    direction ENUM('UP','DOWN','IDLE') DEFAULT 'IDLE',
    door_state ENUM('OPEN','CLOSED') DEFAULT 'CLOSED',
    state ENUM('MOVING','STOPPED','DOOR_OPEN','DOOR_CLOSED') DEFAULT 'STOPPED',
    FOREIGN KEY (building_id) REFERENCES buildings(id)
);

CREATE TABLE elevator_log (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    elevator_id INT NOT NULL,
    from_floor INT,
    to_floor INT,
    direction ENUM('UP','DOWN','IDLE'),
    event_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (elevator_id) REFERENCES elevators(id)
);

CREATE TABLE requests (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    building_id INT NOT NULL,
    floor_num INT NOT NULL,
    direction ENUM('UP','DOWN') NOT NULL,
    assigned_elevator INT NULL,
    request_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_time TIMESTAMP NULL,
    status ENUM('PENDING','ASSIGNED','COMPLETED') DEFAULT 'PENDING',
    FOREIGN KEY (building_id) REFERENCES buildings(id),
    FOREIGN KEY (assigned_elevator) REFERENCES elevators(id)
);
CREATE INDEX idx_req_pending ON requests(status) WHERE status = 'PENDING';`;

export const UML = `┌─────────────────────────────────────────────────────┐
│                    Building                         │
│  - numFloors: int                                   │
│  - controller: ElevatorController                   │
│  + pressFloorButton(floor, dir)                     │
│  + pressElevatorButton(elevId, floor)               │
│  + tick()                                           │
└────────────────────┬────────────────────────────────┘
                     │ 1 owns 1
                     ▼
┌─────────────────────────────────────────────────────┐
│              ElevatorController                     │
│  - elevators: List<Elevator>                        │
│  - strategy: SchedulingStrategy                     │
│  + requestElevator(floor, dir)                      │
│  + requestFloor(e, floor)                           │
│  + step()                                           │
└───────┬──────────────────────────────┬──────────────┘
        │ 1 uses *                    │ 1 uses 1
        ▼                              ▼
┌──────────────────┐      ┌──────────────────────────┐
│    Elevator      │      │   «interface»             │
│  - id: int       │      │  SchedulingStrategy       │
│  - currentFloor  │      │  + selectElevator(list,req)│
│  - direction     │      └────────────┬─────────────┘
│  - door          │                   │ implements
│  - targetFloors  │                   ▼
│  + move()        │      ┌──────────────────────────┐
│  + openDoor()    │      │ NearestElevatorStrategy   │
│  + closeDoor()   │      │  + selectElevator(list,req)│
└──────────────────┘      └──────────────────────────┘

┌──────────────────┐      ┌──────────────────────────┐
│     Request      │      │        Enums              │
│  - floor: int    │      │  Direction: UP,DOWN,IDLE  │
│  - dir: Direction│      │  ElevatorState: MOVING... │
│  - internal: bool│      │  DoorState: OPEN,CLOSED   │
│  - time: long    │      └──────────────────────────┘
└──────────────────┘

Relationships:
  Building 1 ── 1 ElevatorController  (Composition)
  ElevatorController 1 ── * Elevator  (Composition)
  ElevatorController ── SchedulingStrategy  (Dependency / DIP)
  Request ── Elevator  (Association: assigned)`;