export const JAVA_A = `// A. Enums + Board + Player
import java.util.*;

enum Symbol { X, O, EMPTY }
enum GameState { IN_PROGRESS, X_WINS, O_WINS, DRAW }

class Board {
    private final int size;
    private final Symbol[][] grid;
    Board(int n) {
        size = n;
        grid = new Symbol[n][n];
        reset();
    }
    public void reset() {
        for (int r = 0; r < size; r++)
            for (int c = 0; c < size; c++)
                grid[r][c] = Symbol.EMPTY;
    }
    public boolean place(int r, int c, Symbol s) {
        if (r < 0 || r >= size || c < 0 || c >= size) return false;
        if (grid[r][c] != Symbol.EMPTY) return false;
        grid[r][c] = s;
        return true;
    }
    public void resetCell(int r, int c) { grid[r][c] = Symbol.EMPTY; }
    public Symbol getCell(int r, int c) { return grid[r][c]; }
    public int getSize() { return size; }
    public boolean isFull() {
        for (int r = 0; r < size; r++)
            for (int c = 0; c < size; c++)
                if (grid[r][c] == Symbol.EMPTY) return false;
        return true;
    }
    public void print() {
        for (int r = 0; r < size; r++) {
            for (int c = 0; c < size; c++) {
                Symbol s = grid[r][c];
                System.out.print((s == Symbol.EMPTY ? "." : s.toString()) + " ");
            }
            System.out.println();
        }
    }
}

abstract class Player {
    protected final String name;
    protected final Symbol symbol;
    protected Player(String n, Symbol s) { name = n; symbol = s; }
    public String getName() { return name; }
    public Symbol getSymbol() { return symbol; }
    public abstract Move getMove(Board board);
}

class HumanPlayer extends Player {
    private final Scanner scanner;
    HumanPlayer(String n, Symbol s, Scanner sc) { super(n, s); scanner = sc; }
    public Move getMove(Board board) {
        System.out.print(name + " (" + symbol + ") enter row col: ");
        int r = scanner.nextInt();
        int c = scanner.nextInt();
        return new Move(r, c, symbol);
    }
}`;