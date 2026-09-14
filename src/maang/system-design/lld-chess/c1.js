export const JAVA_A = `// A. Enums + Cell + Piece hierarchy
import java.util.*;

enum Color { WHITE, BLACK }
enum PieceType { KING, QUEEN, ROOK, BISHOP, KNIGHT, PAWN }
enum GameState { ACTIVE, CHECK, CHECKMATE, STALEMATE, RESIGNED, DRAW }

class Cell {
    final int row, col;
    Cell(int r, int c) { row = r; col = c; }
    @Override public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Cell)) return false;
        Cell c = (Cell) o;
        return row == c.row && col == c.col;
    }
    @Override public int hashCode() { return Objects.hash(row, col); }
    @Override public String toString() { return "(" + row + "," + col + ")"; }
}

abstract class Piece {
    protected final Color color;
    protected final PieceType type;
    protected Piece(Color c, PieceType t) { color = c; type = t; }
    public Color getColor() { return color; }
    public PieceType getType() { return type; }
    public abstract boolean canMove(Board board, Cell from, Cell to);
    public abstract String getSymbol();
}

class King extends Piece {
    King(Color c) { super(c, PieceType.KING); }
    public boolean canMove(Board b, Cell f, Cell t) {
        int dr = Math.abs(f.row - t.row), dc = Math.abs(f.col - t.col);
        return Math.max(dr, dc) == 1;
    }
    public String getSymbol() { return color == Color.WHITE ? "K" : "k"; }
}

class Queen extends Piece {
    Queen(Color c) { super(c, PieceType.QUEEN); }
    public boolean canMove(Board b, Cell f, Cell t) {
        int dr = Math.abs(f.row - t.row), dc = Math.abs(f.col - t.col);
        boolean straight = (f.row == t.row || f.col == t.col);
        boolean diagonal = (dr == dc);
        return (straight || diagonal) && b.isPathClear(f, t);
    }
    public String getSymbol() { return color == Color.WHITE ? "Q" : "q"; }
}

class Rook extends Piece {
    Rook(Color c) { super(c, PieceType.ROOK); }
    public boolean canMove(Board b, Cell f, Cell t) {
        if (f.row != t.row && f.col != t.col) return false;
        return b.isPathClear(f, t);
    }
    public String getSymbol() { return color == Color.WHITE ? "R" : "r"; }
}

class Bishop extends Piece {
    Bishop(Color c) { super(c, PieceType.BISHOP); }
    public boolean canMove(Board b, Cell f, Cell t) {
        if (Math.abs(f.row - t.row) != Math.abs(f.col - t.col)) return false;
        return b.isPathClear(f, t);
    }
    public String getSymbol() { return color == Color.WHITE ? "B" : "b"; }
}

class Knight extends Piece {
    Knight(Color c) { super(c, PieceType.KNIGHT); }
    public boolean canMove(Board b, Cell f, Cell t) {
        int dr = Math.abs(f.row - t.row), dc = Math.abs(f.col - t.col);
        return (dr == 2 && dc == 1) || (dr == 1 && dc == 2);
    }
    public String getSymbol() { return color == Color.WHITE ? "N" : "n"; }
}

class Pawn extends Piece {
    Pawn(Color c) { super(c, PieceType.PAWN); }
    public boolean canMove(Board b, Cell f, Cell t) {
        int dir = (color == Color.WHITE) ? -1 : 1;
        int dr = t.row - f.row, dc = Math.abs(t.col - f.col);
        if (dc == 0 && dr == dir && b.getPiece(t.row, t.col) == null) return true;
        int startRow = (color == Color.WHITE) ? 6 : 1;
        if (dc == 0 && dr == 2 * dir && f.row == startRow
                && b.getPiece(f.row + dir, f.col) == null
                && b.getPiece(t.row, t.col) == null) return true;
        if (dc == 1 && dr == dir) {
            Piece target = b.getPiece(t.row, t.col);
            return target != null && target.getColor() != color;
        }
        return false;
    }
    public String getSymbol() { return color == Color.WHITE ? "P" : "p"; }
}`;