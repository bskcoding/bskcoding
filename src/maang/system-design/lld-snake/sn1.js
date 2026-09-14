export const JAVA_A = `// A. Enums + Player + Board
import java.util.*;

enum GameState { IN_PROGRESS, FINISHED }

class Player {
    private final int id;
    private final String name;
    private int position = 0;
    Player(int id, String n) { this.id = id; name = n; }
    public int getId() { return id; }
    public String getName() { return name; }
    public int getPosition() { return position; }
    public void setPosition(int p) { position = p; }
}

class Board {
    private final int size;
    private final Map<Integer, Integer> snakes = new HashMap<>();
    private final Map<Integer, Integer> ladders = new HashMap<>();

    Board(int s) { size = s; }
    public int getSize() { return size; }

    public void addSnake(int head, int tail) {
        if (head <= tail) throw new IllegalArgumentException("Snake head must be > tail");
        snakes.put(head, tail);
    }
    public void addLadder(int start, int end) {
        if (start >= end) throw new IllegalArgumentException("Ladder start must be < end");
        ladders.put(start, end);
    }

    public int getNextPosition(int pos) {
        if (snakes.containsKey(pos)) return snakes.get(pos);
        if (ladders.containsKey(pos)) return ladders.get(pos);
        return pos;
    }
    public boolean isSnake(int pos) { return snakes.containsKey(pos); }
    public boolean isLadder(int pos) { return ladders.containsKey(pos); }
}`;