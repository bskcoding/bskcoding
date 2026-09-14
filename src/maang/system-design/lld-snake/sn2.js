export const JAVA_B = `// B. Dice strategies + Move
interface Dice {
    int roll();
}

class StandardDice implements Dice {
    private final Random random = new Random();
    public int roll() { return random.nextInt(6) + 1; }
}

class LoadedDice implements Dice {
    private final int fixed;
    LoadedDice(int f) { fixed = f; }
    public int roll() { return fixed; }
}

class MultiDice implements Dice {
    private final List<Dice> dice;
    MultiDice(List<Dice> d) { dice = d; }
    public int roll() {
        int sum = 0;
        for (Dice d : dice) sum += d.roll();
        return sum;
    }
}

class Move {
    private final Player player;
    private final int diceValue;
    private final int fromPos;
    private final int toPos;
    private final boolean jumped;
    private final long timestamp;

    Move(Player p, int d, int from, int to, boolean j) {
        player = p; diceValue = d; fromPos = from; toPos = to; jumped = j;
        timestamp = System.currentTimeMillis();
    }
    public Player getPlayer() { return player; }
    public int getDiceValue() { return diceValue; }
    public int getFromPos() { return fromPos; }
    public int getToPos() { return toPos; }
    public boolean isJumped() { return jumped; }
    public long getTimestamp() { return timestamp; }
}`;