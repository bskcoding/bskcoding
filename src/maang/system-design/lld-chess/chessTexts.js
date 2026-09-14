export const SQL = `-- 4 tables, normalized, minimal

CREATE TABLE games (
  game_id      VARCHAR(20) PRIMARY KEY,
  white_player VARCHAR(100) NOT NULL,
  black_player VARCHAR(100) NOT NULL,
  state        ENUM('ACTIVE','CHECK','CHECKMATE','STALEMATE','RESIGNED','DRAW') DEFAULT 'ACTIVE',
  winner       ENUM('WHITE','BLACK','DRAW') NULL,
  started_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ended_at     TIMESTAMP NULL
);

CREATE TABLE moves (
  move_id      BIGINT AUTO_INCREMENT PRIMARY KEY,
  game_id      VARCHAR(20) NOT NULL,
  move_number  INT NOT NULL,
  from_row     INT NOT NULL,
  from_col     INT NOT NULL,
  to_row       INT NOT NULL,
  to_col       INT NOT NULL,
  piece_type   ENUM('KING','QUEEN','ROOK','BISHOP','KNIGHT','PAWN') NOT NULL,
  piece_color  ENUM('WHITE','BLACK') NOT NULL,
  captured_type ENUM('KING','QUEEN','ROOK','BISHOP','KNIGHT','PAWN') NULL,
  is_check     BOOLEAN DEFAULT FALSE,
  is_checkmate BOOLEAN DEFAULT FALSE,
  played_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(game_id)
);
CREATE INDEX idx_move_game ON moves(game_id, move_number);

CREATE TABLE game_snapshots (
  snapshot_id  BIGINT AUTO_INCREMENT PRIMARY KEY,
  game_id      VARCHAR(20) NOT NULL,
  move_number  INT NOT NULL,
  board_fen    VARCHAR(100) NOT NULL,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(game_id)
);
CREATE INDEX idx_snapshot_game ON game_snapshots(game_id, move_number);

CREATE TABLE captured_pieces (
  capture_id   BIGINT AUTO_INCREMENT PRIMARY KEY,
  game_id      VARCHAR(20) NOT NULL,
  move_id      BIGINT NOT NULL,
  piece_type   ENUM('KING','QUEEN','ROOK','BISHOP','KNIGHT','PAWN') NOT NULL,
  piece_color  ENUM('WHITE','BLACK') NOT NULL,
  FOREIGN KEY (game_id) REFERENCES games(game_id),
  FOREIGN KEY (move_id) REFERENCES moves(move_id)
);`;

export const UML = `----------------------------------------
  ChessGame  (Singleton + Facade)
  - board: Board
  - players: List<Player>
  - currentTurn: Color
  - moveHistory: Deque<Move>
  - gameState: GameState
  + makeMove(from, to): boolean
  + undo(): boolean
  + isCheckmate(color): boolean
  + isStalemate(color): boolean
----------------------------------------
      |owns (board dies with game)
      v
----------------------------------------
  Board                         Cell
  - grid: Cell[8][8]            - row: int
  + getPiece(r,c)               - col: int
  + setPiece(r,c,p)             - piece: Piece
  + movePiece(f,t)
  + isPathClear(f,t)
----------------------------------------
      Cell holds 0..1
      v
----------------------------------------
  Piece  (abstract)
  - color: Color
  + canMove(board,f,t)
  + getSymbol()
----------------------------------------
  |-- King    |-- Queen   |-- Pawn
  |-- Rook    |-- Bishop  +-- Knight

ChessGame --uses--> MoveValidator (interface)
                     +-- StandardValidator
ChessGame --uses--> Player
  - name, color, capturedPieces
ChessGame --creates--> Move
  - from, to, piece, captured, timestamp`;