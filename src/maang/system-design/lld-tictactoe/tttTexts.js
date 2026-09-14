export const SQL = `-- 4 tables, normalized, minimal

CREATE TABLE games (
  game_id      VARCHAR(20) PRIMARY KEY,
  board_size   INT NOT NULL DEFAULT 3,
  state        ENUM('IN_PROGRESS','X_WINS','O_WINS','DRAW') DEFAULT 'IN_PROGRESS',
  winner_name  VARCHAR(100) NULL,
  started_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ended_at     TIMESTAMP NULL
);

CREATE TABLE players (
  player_id  VARCHAR(20) PRIMARY KEY,
  game_id    VARCHAR(20) NOT NULL,
  name       VARCHAR(100) NOT NULL,
  symbol     ENUM('X','O') NOT NULL,
  is_ai      BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (game_id) REFERENCES games(game_id)
);
CREATE INDEX idx_player_game ON players(game_id);

CREATE TABLE moves (
  move_id      BIGINT AUTO_INCREMENT PRIMARY KEY,
  game_id      VARCHAR(20) NOT NULL,
  move_number  INT NOT NULL,
  row_idx      INT NOT NULL,
  col_idx      INT NOT NULL,
  symbol       ENUM('X','O') NOT NULL,
  played_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(game_id)
);
CREATE INDEX idx_move_game ON moves(game_id, move_number);

CREATE TABLE game_snapshots (
  snapshot_id  BIGINT AUTO_INCREMENT PRIMARY KEY,
  game_id      VARCHAR(20) NOT NULL,
  move_number  INT NOT NULL,
  board_state  VARCHAR(100) NOT NULL,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(game_id)
);
CREATE INDEX idx_snapshot_game ON game_snapshots(game_id, move_number);`;

export const UML = `----------------------------------------
  TicTacToeGame  (Singleton + Facade)
  - board: Board
  - players: List<Player>
  - currentTurn: int
  - moveHistory: Deque<Move>
  - gameState: GameState
  - winStrategy: WinStrategy
  + makeMove(row, col): boolean
  + undo(): boolean
  + getWinner(): Optional<Player>
  + reset()
----------------------------------------
      |owns (board dies with game)
      v
----------------------------------------
  Board                       Symbol (enum)
  - grid: Symbol[N][N]        X, O, EMPTY
  - size: int
  + place(r,c,s)
  + getCell(r,c)
  + isFull()
  + reset()
----------------------------------------

TicTacToeGame --has--> Player (abstract)
  - name, symbol
  - getMove(): Move
  |-- HumanPlayer
  +-- AIPlayer (future)

TicTacToeGame --uses--> WinStrategy (interface)
                         +-- StandardWinStrategy
TicTacToeGame --creates--> Move
  - row, col, symbol, timestamp`;