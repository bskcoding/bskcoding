export const JAVA_C = `// C. SnakeLadderGame + Main
class SnakeLadderGame {
    private static volatile SnakeLadderGame ins;
    private final Board board;
    private final List<Player> players;
    private final Dice dice;
    private int currentTurn = 0;
    private GameState gameState = GameState.IN_PROGRESS;
    private final List<Move> moveHistory = new ArrayList<>();

    private SnakeLadderGame(Board b, List<Player> p, Dice d) {
        board = b; players = p; dice = d;
    }

    public static SnakeLadderGame get(Board b, List<Player> p, Dice d) {
        if (ins == null) { synchronized (SnakeLadderGame.class) {
            if (ins == null) ins = new SnakeLadderGame(b, p, d); } }
        return ins;
    }

    public synchronized Move playTurn() {
        if (gameState == GameState.FINISHED) return null;
        Player current = players.get(currentTurn);
        int from = current.getPosition();
        int roll = dice.roll();
        int raw = from + roll;

        int landed;
        if (raw > board.getSize()) {
            landed = from;
        } else {
            landed = raw;
        }

        int finalPos = board.getNextPosition(landed);
        boolean jumped = finalPos != landed;
        current.setPosition(finalPos);

        Move move = new Move(current, roll, from, finalPos, jumped);
        moveHistory.add(move);

        System.out.println(current.getName() + " rolled " + roll
                + " -> moved from " + from + " to " + landed
                + (jumped ? (" -> jumped to " + finalPos) : ""));

        if (finalPos == board.getSize()) {
            gameState = GameState.FINISHED;
            System.out.println(current.getName() + " WINS!");
        } else {
            currentTurn = (currentTurn + 1) % players.size();
        }
        return move;
    }

    public Optional<Player> getWinner() {
        if (gameState == GameState.FINISHED) {
            for (Player p : players)
                if (p.getPosition() == board.getSize()) return Optional.of(p);
        }
        return Optional.empty();
    }

    public GameState getGameState() { return gameState; }
    public Player getCurrentPlayer() { return players.get(currentTurn); }
    public List<Move> getMoveHistory() { return moveHistory; }

    public synchronized void reset() {
        for (Player p : players) p.setPosition(0);
        moveHistory.clear();
        currentTurn = 0;
        gameState = GameState.IN_PROGRESS;
    }
}

public class Main {
    public static void main(String[] args) {
        Board board = new Board(100);
        board.addSnake(99, 54);
        board.addSnake(70, 55);
        board.addSnake(52, 42);
        board.addSnake(25, 2);
        board.addLadder(6, 25);
        board.addLadder(11, 40);
        board.addLadder(60, 85);
        board.addLadder(46, 90);

        List<Player> players = List.of(
                new Player(1, "Alice"),
                new Player(2, "Bob"));

        SnakeLadderGame game = SnakeLadderGame.get(board, players, new StandardDice());

        int turns = 0;
        while (game.getGameState() != GameState.FINISHED && turns < 200) {
            game.playTurn();
            turns++;
        }
        game.getWinner().ifPresent(w ->
                System.out.println("Winner: " + w.getName() + " after " + turns + " turns"));
    }
}`;