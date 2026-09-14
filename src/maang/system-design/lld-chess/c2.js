export const JAVA_B = `// B. Board + Move + Player + Validator
class Board {
    private final Piece[][] grid = new Piece[8][8];
    public Piece getPiece(int r, int c) {
        if (r < 0 || r > 7 || c < 0 || c > 7) return null;
        return grid[r][c];
    }
    public void setPiece(int r, int c, Piece p) { grid[r][c] = p; }
    public boolean isPathClear(Cell from, Cell to) {
        int dr = Integer.signum(to.row - from.row);
        int dc = Integer.signum(to.col - from.col);
        int r = from.row + dr, c = from.col + dc;
        while (r != to.row || c != to.col) {
            if (grid[r][c] != null) return false;
            r += dr; c += dc;
        }
        return true;
    }
    public void movePiece(Cell from, Cell to) {
        grid[to.row][to.col] = grid[from.row][from.col];
        grid[from.row][from.col] = null;
    }
    public Board copy() {
        Board b = new Board();
        for (int r = 0; r < 8; r++)
            for (int c = 0; c < 8; c++)
                b.grid[r][c] = grid[r][c];
        return b;
    }
}

class Move {
    private final Cell from, to;
    private final Piece piece;
    private final Piece captured;
    private final long timestamp;
    Move(Cell f, Cell t, Piece p, Piece cap) {
        from = f; to = t; piece = p; captured = cap;
        timestamp = System.currentTimeMillis();
    }
    public Cell getFrom() { return from; }
    public Cell getTo() { return to; }
    public Piece getPiece() { return piece; }
    public Piece getCaptured() { return captured; }
    public long getTimestamp() { return timestamp; }
}

class Player {
    private final String name;
    private final Color color;
    private final List<Piece> capturedPieces = new ArrayList<>();
    Player(String n, Color c) { name = n; color = c; }
    public String getName() { return name; }
    public Color getColor() { return color; }
    public void addCapture(Piece p) { capturedPieces.add(p); }
    public List<Piece> getCapturedPieces() { return capturedPieces; }
}

interface MoveValidator {
    boolean isValidMove(Board board, Cell from, Cell to, Color turn);
}

class StandardValidator implements MoveValidator {
    public boolean isValidMove(Board board, Cell from, Cell to, Color turn) {
        Piece p = board.getPiece(from.row, from.col);
        if (p == null || p.getColor() != turn) return false;
        Piece target = board.getPiece(to.row, to.col);
        if (target != null && target.getColor() == turn) return false;
        if (!p.canMove(board, from, to)) return false;
        Board copy = board.copy();
        copy.movePiece(from, to);
        return !isKingInCheck(copy, turn);
    }
    private boolean isKingInCheck(Board board, Color color) {
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
}`;