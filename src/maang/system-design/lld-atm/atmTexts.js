export const SQL = `-- 5 tables, normalized, minimal

CREATE TABLE accounts (
  account_id     VARCHAR(20) PRIMARY KEY,
  account_number VARCHAR(20) UNIQUE NOT NULL,
  owner_name     VARCHAR(100) NOT NULL,
  balance        DECIMAL(15,2) NOT NULL DEFAULT 0,
  status         ENUM('ACTIVE','FROZEN','CLOSED') DEFAULT 'ACTIVE'
);

CREATE TABLE cards (
  card_number VARCHAR(20) PRIMARY KEY,
  account_id  VARCHAR(20) NOT NULL,
  bank_name   VARCHAR(50) NOT NULL,
  expiry_date DATE NOT NULL,
  pin_hash    VARCHAR(255) NOT NULL,
  status      ENUM('ACTIVE','BLOCKED','EXPIRED') DEFAULT 'ACTIVE',
  failed_attempts INT DEFAULT 0,
  FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);
CREATE INDEX idx_card_account ON cards(account_id);

CREATE TABLE atms (
  atm_id       VARCHAR(20) PRIMARY KEY,
  location     VARCHAR(255) NOT NULL,
  status       ENUM('ACTIVE','OUT_OF_SERVICE') DEFAULT 'ACTIVE'
);

CREATE TABLE cash_inventory (
  atm_id       VARCHAR(20) NOT NULL,
  denomination INT NOT NULL,
  count        INT NOT NULL DEFAULT 0,
  PRIMARY KEY (atm_id, denomination),
  FOREIGN KEY (atm_id) REFERENCES atms(atm_id)
);

CREATE TABLE transactions (
  transaction_id VARCHAR(20) PRIMARY KEY,
  atm_id         VARCHAR(20) NOT NULL,
  card_number    VARCHAR(20) NOT NULL,
  account_id     VARCHAR(20) NOT NULL,
  type           ENUM('WITHDRAWAL','DEPOSIT','TRANSFER','BALANCE_ENQUIRY') NOT NULL,
  amount         DECIMAL(15,2) NOT NULL,
  status         ENUM('PENDING','SUCCESS','FAILED') DEFAULT 'PENDING',
  created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (atm_id) REFERENCES atms(atm_id),
  FOREIGN KEY (card_number) REFERENCES cards(card_number),
  FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);
CREATE INDEX idx_txn_card ON transactions(card_number);
CREATE INDEX idx_txn_created ON transactions(created_at);`;

export const UML = `----------------------------------------
  ATM  (Singleton + Context)
  - state: ATMState
  - currentCard: Card
  - dispenserChain: CashDispenser
  - bankService: BankService
  + insertCard(card)
  + enterPin(pin)
  + withdraw(amount)
  + deposit(amount)
  + ejectCard()
----------------------------------------
      |has (state dies with ATM)
      v
----------------------------------------
  ATMState (interface)
  + insertCard()
  + enterPin()
  + withdraw()
  + ejectCard()
----------------------------------------
  |-- Idle
  |-- HasCard
  |-- Authenticated
  +-- Dispensing

ATM --uses--> BankService (interface)
               +-- MockBankService
ATM --uses--> Card --references--> Account

ATM --owns--> CashDispenser (abstract, Chain of Responsibility)
  - denomination, count, next
  |-- TwoThousandDispenser --> FiveHundredDispenser
  |-- TwoHundredDispenser --> HundredDispenser

ATM --creates--> Transaction
  - type: TransactionType
  - card: Card
  - amount: double
  - status: TransactionStatus
  - timestamp: long`;