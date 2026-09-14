export const JAVA_B = `// B. Move + WinStrategy
class Move {
    private final int row, col;
    private final Symbol symbol;
    private final long timestamp;
    Move(int r, int c, Symbol s) {
        row = r; col = c; symbol = s;
        timestamp = System.currentTimeMillis();
    }
    public int getRow() { return row; }
    public int getCol() { return col; }
    public Symbol getSymbol() { return symbol; }
    public long getTimestamp() { return timestamp; }
}

interface WinStrategy {
    Optional<Symbol> checkWinner(Board board, Move lastMove);
}

class StandardWinStrategy implements WinStrategy {
    public Optional<Symbol> checkWinner(Board board, Move lastMove) {
        int r = lastMove.getRow(), c = lastMove.getCol();
        Symbol s = lastMove.getSymbol();
        int n = board.getSize();

        boolean rowWin = true;
        for (int j = 0; j < n; j++)
            if (board.getCell(r, j) != s) { rowWin = false; break; }
        if (rowWin) return Optional.of(s);

        boolean colWin = true;
        for (int i = 0; i < n; i++)
            if (board.getCell(i, c) != s) { colWin = false; break; }
        if (colWin) return Optional.of(s);

        if (r == c) {
            boolean diagWin = true;
            for (int i = 0; i < n; i++)
                if (board.getCell(i, i) != s) { diagWin = false; break; }
            if (diagWin) return Optional.of(s);
        }

        if (r + c == n - 1) {
            boolean antiWin = true;
            for (int i = 0; i < n; i++)
                if (board.getCell(i, n - 1 - i) != s) { antiWin = false; break; }
            if (antiWin) return Optional.of(s);
        }

        return Optional.empty();
    }
}`;