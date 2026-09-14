export const JAVA_C = `// C. TicTacToeGame + Main
class TicTacToeGame {
    private static volatile TicTacToeGame ins;
    private final Board board;
    private final Player[] players = new Player[2];
    private int currentTurn = 0;
    private GameState gameState = GameState.IN_PROGRESS;
    private final Deque<Move> moveHistory = new ArrayDeque<>();
    private final WinStrategy winStrategy;

    private TicTacToeGame(int size, Player p1, Player p2, WinStrategy ws) {
        board = new Board(size);
        players[0] = p1;
        players[1] = p2;
        winStrategy = ws;
    }

    public static TicTacToeGame get(int size, Player p1, Player p2, WinStrategy ws) {
        if (ins == null) { synchronized (TicTacToeGame.class) {
            if (ins == null) ins = new TicTacToeGame(size, p1, p2, ws); } }
        return ins;
    }

    public synchronized boolean makeMove(int row, int col) {
        if (gameState != GameState.IN_PROGRESS) return false;
        Player current = players[currentTurn];
        if (!board.place(row, col, current.getSymbol())) return false;

        Move move = new Move(row, col, current.getSymbol());
        moveHistory.push(move);

        Optional<Symbol> winner = winStrategy.checkWinner(board, move);
        if (winner.isPresent()) {
            gameState = (winner.get() == Symbol.X) ? GameState.X_WINS : GameState.O_WINS;
        } else if (board.isFull()) {
            gameState = GameState.DRAW;
        } else {
            currentTurn = 1 - currentTurn;
        }
        return true;
    }

    public synchronized boolean undo() {
        if (moveHistory.isEmpty()) return false;
        Move last = moveHistory.pop();
        board.resetCell(last.getRow(), last.getCol());
        currentTurn = 1 - currentTurn;
        gameState = GameState.IN_PROGRESS;
        return true;
    }

    public GameState getGameState() { return gameState; }
    public Board getBoard() { return board; }
    public Player getCurrentPlayer() { return players[currentTurn]; }
    public Optional<Player> getWinner() {
        if (gameState == GameState.X_WINS) return Optional.of(players[0]);
        if (gameState == GameState.O_WINS) return Optional.of(players[1]);
        return Optional.empty();
    }
    public synchronized void reset() {
        board.reset();
        moveHistory.clear();
        currentTurn = 0;
        gameState = GameState.IN_PROGRESS;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HumanPlayer p1 = new HumanPlayer("Alice", Symbol.X, sc);
        HumanPlayer p2 = new HumanPlayer("Bob", Symbol.O, sc);

        TicTacToeGame game = TicTacToeGame.get(3, p1, p2, new StandardWinStrategy());
        game.getBoard().print();

        int[][] moves = {{0,0},{1,1},{0,1},{1,0},{0,2}};
        for (int[] m : moves) {
            if (!game.makeMove(m[0], m[1])) {
                System.out.println("Invalid move at " + m[0] + "," + m[1]);
                continue;
            }
            game.getBoard().print();
            if (game.getGameState() != GameState.IN_PROGRESS) break;
        }
        System.out.println("State: " + game.getGameState());
        game.getWinner().ifPresent(w -> System.out.println("Winner: " + w.getName()));
    }
}`;