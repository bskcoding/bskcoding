export const SQL = `-- 6 tables, normalized, minimal

CREATE TABLE users (
  user_id VARCHAR(20) PRIMARY KEY,
  name    VARCHAR(100) NOT NULL,
  email   VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE groups (
  group_id   VARCHAR(20) PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE group_members (
  group_id VARCHAR(20) NOT NULL,
  user_id  VARCHAR(20) NOT NULL,
  PRIMARY KEY (group_id, user_id),
  FOREIGN KEY (group_id) REFERENCES groups(group_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE expenses (
  expense_id   VARCHAR(20) PRIMARY KEY,
  group_id     VARCHAR(20) NOT NULL,
  paid_by      VARCHAR(20) NOT NULL,
  amount       DECIMAL(10,2) NOT NULL,
  description  VARCHAR(255),
  split_type   ENUM('EQUAL','EXACT','PERCENTAGE') NOT NULL,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (group_id) REFERENCES groups(group_id),
  FOREIGN KEY (paid_by) REFERENCES users(user_id)
);
CREATE INDEX idx_expense_group ON expenses(group_id);

CREATE TABLE expense_shares (
  expense_id VARCHAR(20) NOT NULL,
  user_id    VARCHAR(20) NOT NULL,
  share      DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (expense_id, user_id),
  FOREIGN KEY (expense_id) REFERENCES expenses(expense_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE settlements (
  settlement_id VARCHAR(20) PRIMARY KEY,
  group_id      VARCHAR(20) NOT NULL,
  from_user     VARCHAR(20) NOT NULL,
  to_user       VARCHAR(20) NOT NULL,
  amount        DECIMAL(10,2) NOT NULL,
  settled_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (group_id) REFERENCES groups(group_id),
  FOREIGN KEY (from_user) REFERENCES users(user_id),
  FOREIGN KEY (to_user) REFERENCES users(user_id)
);
CREATE INDEX idx_settlement_group ON settlements(group_id);`;

export const UML = `----------------------------------------
  SplitwiseService  (Singleton)
  - users: Map<String, User>
  - groups: Map<String, Group>
  - expenses: List<Expense>
  - observers: List<NotificationObserver>
  + addUser(user)
  + createGroup(group)
  + addExpense(expense)
  + getBalances(groupId): Map<User, Double>
  + settleUp(from, to, amount)
  + addObserver(observer)
----------------------------------------
      |owns (groups die with service)
      v
----------------------------------------
  Group                       User
  - id: String                - id: String
  - name: String              - name: String
  - members: Set<User>        - email: String
  - balanceSheet
  + addMember()
  + isMember()
----------------------------------------
      |owns
      v
----------------------------------------
  BalanceSheet
  - balances: Map<User, Double>
  + updateBalance()
  + getBalance()
----------------------------------------

SplitwiseService --creates--> Expense
  - payer: User
  - amount: double
  - participants: List<User>
  - splitStrategy: SplitStrategy
  - shares: Map<User, Double>

SplitwiseService --uses--> SplitStrategy (interface)
                            |-- EqualSplit
                            |-- ExactSplit
                            +-- PercentageSplit
SplitwiseService --uses--> NotificationObserver (interface)
                            |-- EmailNotifier
                            +-- PushNotifier`;