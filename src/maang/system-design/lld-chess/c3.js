export const JAVA_C = `// C. ChessGame + Main
class ChessGame {
    private static volatile ChessGame ins;
    private final Board board;
    private final Player white, black;
    private Color currentTurn = Color.WHITE;
    private GameState gameState = GameState.ACTIVE;
    private final Deque<Move> moveHistory = new ArrayDeque<>();
    private final MoveValidator validator;

    private ChessGame(String whiteName, String blackName, MoveValidator v) {
        board = new Board();
        white = new Player(whiteName, Color.WHITE);
        black = new Player(blackName, Color.BLACK);
        validator = v;
        setupBoard();
    }

    public static ChessGame get(String w, String b, MoveValidator v) {
        if (ins == null) { synchronized (ChessGame.class) {
            if (ins == null) ins = new ChessGame(w, b, v); } }
        return ins;
    }

    private void setupBoard() {
        board.setPiece(0, 0, new Rook(Color.BLACK));
        board.setPiece(0, 1, new Knight(Color.BLACK));
        board.setPiece(0, 2, new Bishop(Color.BLACK));
        board.setPiece(0, 3, new Queen(Color.BLACK));
        board.setPiece(0, 4, new King(Color.BLACK));
        board.setPiece(0, 5, new Bishop(Color.BLACK));
        board.setPiece(0, 6, new Knight(Color.BLACK));
        board.setPiece(0, 7, new Rook(Color.BLACK));
        for (int c = 0; c < 8; c++) board.setPiece(1, c, new Pawn(Color.BLACK));
        board.setPiece(7, 0, new Rook(Color.WHITE));
        board.setPiece(7, 1, new Knight(Color.WHITE));
        board.setPiece(7, 2, new Bishop(Color.WHITE));
        board.setPiece(7, 3, new Queen(Color.WHITE));
        board.setPiece(7, 4, new King(Color.WHITE));
        board.setPiece(7, 5, new Bishop(Color.WHITE));
        board.setPiece(7, 6, new Knight(Color.WHITE));
        board.setPiece(7, 7, new Rook(Color.WHITE));
        for (int c = 0; c < 8; c++) board.setPiece(6, c, new Pawn(Color.WHITE));
    }

    public synchronized boolean makeMove(Cell from, Cell to) {
        if (gameState == GameState.CHECKMATE || gameState == GameState.STALEMATE) return false;
        if (!validator.isValidMove(board, from, to, currentTurn)) return false;
        Piece piece = board.getPiece(from.row, from.col);
        Piece captured = board.getPiece(to.row, to.col);
        board.movePiece(from, to);
        moveHistory.push(new Move(from, to, piece, captured));
        if (captured != null) {
            Player capturer = (currentTurn == Color.WHITE) ? white : black;
            capturer.addCapture(captured);
        }
        currentTurn = (currentTurn == Color.WHITE) ? Color.BLACK : Color.WHITE;
        updateGameState();
        return true;
    }

    private void updateGameState() {
        boolean inCheck = isInCheck(currentTurn);
        boolean hasLegalMove = hasAnyLegalMove(currentTurn);
        if (inCheck && !hasLegalMove) gameState = GameState.CHECKMATE;
        else if (!inCheck && !hasLegalMove) gameState = GameState.STALEMATE;
        else if (inCheck) gameState = GameState.CHECK;
        else gameState = GameState.ACTIVE;
    }

    private boolean isInCheck(Color color) {
        Cell kingPos = null;
        for (int r = 0; r < 8; r++)
            for (int c = 0; c < 8; c++) {
                Piece p = board.getPiece(r, c);
                if (p != null && p.getType() == PieceType.KING && p.getColor() == color)
                    kingPos = new Cell(r, c);
            }
        if (kingPos == null) return true;
        Color enemy = (color == Color.WHITE) ? Color.BLACK : Color.WHITE;
        for (int r = 0; r < 8; r++)
            for (int c = 0; c < 8; c++) {
                Piece p = board.getPiece(r, c);
                if (p != null && p.getColor() == enemy
                        && p.canMove(board, new Cell(r, c), kingPos)) return true;
            }
        return false;
    }

    private boolean hasAnyLegalMove(Color color) {
        for (int r = 0; r < 8; r++)
            for (int c = 0; c < 8; c++) {
                Piece p = board.getPiece(r, c);
                if (p == null || p.getColor() != color) continue;
                for (int tr = 0; tr < 8; tr++)
                    for (int tc = 0; tc < 8; tc++) {
                        if (validator.isValidMove(board, new Cell(r, c),
                                new Cell(tr, tc), color)) return true;
                    }
            }
        return false;
    }

    public synchronized boolean undo() {
        if (moveHistory.isEmpty()) return false;
        Move m = moveHistory.pop();
        board.setPiece(m.getFrom().row, m.getFrom().col, m.getPiece());
        board.setPiece(m.getTo().row, m.getTo().col, m.getCaptured());
        currentTurn = (currentTurn == Color.WHITE) ? Color.BLACK : Color.WHITE;
        updateGameState();
        return true;
    }

    public GameState getGameState() { return gameState; }
    public Color getCurrentTurn() { return currentTurn; }
    public Board getBoard() { return board; }

    public void printBoard() {
        for (int r = 0; r < 8; r++) {
            for (int c = 0; c < 8; c++) {
                Piece p = board.getPiece(r, c);
                System.out.print((p == null ? "." : p.getSymbol()) + " ");
            }
            System.out.println();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        ChessGame game = ChessGame.get("Alice", "Bob", new StandardValidator());
        game.printBoard();
        game.makeMove(new Cell(6, 4), new Cell(4, 4));
        game.makeMove(new Cell(1, 4), new Cell(3, 4));
        System.out.println("Turn: " + game.getCurrentTurn());
        System.out.println("State: " + game.getGameState());
        game.printBoard();
    }
}`;