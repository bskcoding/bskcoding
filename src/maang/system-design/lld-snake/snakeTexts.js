export const SQL = `-- 5 tables, normalized, minimal

CREATE TABLE games (
  game_id      VARCHAR(20) PRIMARY KEY,
  board_size   INT NOT NULL DEFAULT 100,
  state        ENUM('IN_PROGRESS','FINISHED') DEFAULT 'IN_PROGRESS',
  winner_name  VARCHAR(100) NULL,
  started_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ended_at     TIMESTAMP NULL
);

CREATE TABLE players (
  player_id  VARCHAR(20) PRIMARY KEY,
  game_id    VARCHAR(20) NOT NULL,
  name       VARCHAR(100) NOT NULL,
  position   INT NOT NULL DEFAULT 0,
  turn_order INT NOT NULL,
  FOREIGN KEY (game_id) REFERENCES games(game_id)
);
CREATE INDEX idx_player_game ON players(game_id, turn_order);

CREATE TABLE board_config (
  config_id  BIGINT AUTO_INCREMENT PRIMARY KEY,
  game_id    VARCHAR(20) NOT NULL,
  type       ENUM('SNAKE','LADDER') NOT NULL,
  start_pos  INT NOT NULL,
  end_pos    INT NOT NULL,
  FOREIGN KEY (game_id) REFERENCES games(game_id)
);
CREATE INDEX idx_config_game ON board_config(game_id);

CREATE TABLE moves (
  move_id      BIGINT AUTO_INCREMENT PRIMARY KEY,
  game_id      VARCHAR(20) NOT NULL,
  player_id    VARCHAR(20) NOT NULL,
  move_number  INT NOT NULL,
  dice_value   INT NOT NULL,
  from_pos     INT NOT NULL,
  to_pos       INT NOT NULL,
  jumped       BOOLEAN DEFAULT FALSE,
  played_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(game_id),
  FOREIGN KEY (player_id) REFERENCES players(player_id)
);
CREATE INDEX idx_move_game ON moves(game_id, move_number);

CREATE TABLE game_snapshots (
  snapshot_id  BIGINT AUTO_INCREMENT PRIMARY KEY,
  game_id      VARCHAR(20) NOT NULL,
  move_number  INT NOT NULL,
  positions    VARCHAR(255) NOT NULL,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(game_id)
);
CREATE INDEX idx_snapshot_game ON game_snapshots(game_id, move_number);`;

export const UML = `----------------------------------------
  SnakeLadderGame  (Singleton + Facade)
  - board: Board
  - players: List<Player>
  - dice: Dice
  - currentTurn: int
  - moveHistory: List<Move>
  - gameState: GameState
  + playTurn(): Move
  + getWinner(): Optional<Player>
  + reset()
----------------------------------------
      |owns (board dies with game)
      v
----------------------------------------
  Board
  - size: int
  - snakes: Map<Int,Int>
  - ladders: Map<Int,Int>
  + getNextPosition()
  + addSnake()
  + addLadder()
----------------------------------------

SnakeLadderGame --has--> Player
  - id, name, position

SnakeLadderGame --uses--> Dice (interface)
  |-- StandardDice
  |-- LoadedDice
  +-- MultiDice
SnakeLadderGame --creates--> Move
  - player, diceValue, fromPos, toPos, jumped, timestamp`;