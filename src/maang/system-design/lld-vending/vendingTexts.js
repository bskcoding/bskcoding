export const SQL = `-- 4 tables, normalized, minimal

CREATE TABLE products (
  product_code VARCHAR(20) PRIMARY KEY,
  name         VARCHAR(100) NOT NULL,
  price        DECIMAL(10,2) NOT NULL
);

CREATE TABLE slots (
  slot_code    VARCHAR(20) PRIMARY KEY,
  product_code VARCHAR(20) NOT NULL,
  quantity     INT NOT NULL DEFAULT 0,
  max_capacity INT NOT NULL DEFAULT 10,
  FOREIGN KEY (product_code) REFERENCES products(product_code)
);
CREATE INDEX idx_slot_product ON slots(product_code);

CREATE TABLE transactions (
  transaction_id VARCHAR(20) PRIMARY KEY,
  slot_code      VARCHAR(20) NOT NULL,
  product_code   VARCHAR(20) NOT NULL,
  amount_paid    DECIMAL(10,2) NOT NULL,
  change_given   DECIMAL(10,2) DEFAULT 0,
  status         ENUM('PENDING','SUCCESS','FAILED','REFUNDED') DEFAULT 'PENDING',
  created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (slot_code) REFERENCES slots(slot_code),
  FOREIGN KEY (product_code) REFERENCES products(product_code)
);

CREATE TABLE payments (
  payment_id     VARCHAR(20) PRIMARY KEY,
  transaction_id VARCHAR(20) NOT NULL,
  method         ENUM('CASH','CARD','UPI') NOT NULL,
  amount         DECIMAL(10,2) NOT NULL,
  status         ENUM('SUCCESS','FAILED') NOT NULL,
  paid_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (transaction_id) REFERENCES transactions(transaction_id)
);`;

export const UML = `----------------------------------------
  VendingMachine  (Singleton)
  - slots: Map<String, Slot>
  - state: VendingMachineState
  - currentTransaction: Transaction
  + selectProduct(code): boolean
  + insertPayment(strategy, amount): boolean
  + dispense(): Product
  + restock(code, qty)
----------------------------------------
      |owns (slots die with machine)
      v
----------------------------------------
  Slot                      Product
  - code: String            - code: String
  - quantity: int           - name: String
  - product: Product        - price: double
  + isAvailable()
  + dispense()
  + restock(qty)
----------------------------------------
      |holds 0..1
      v
----------------------------------------
  Transaction
  - id: String
  - product: Product
  - amountPaid: double
  - change: double
  - timestamp: long
  - status: TransactionStatus
----------------------------------------

VendingMachine --uses--> PaymentStrategy (interface)
                          |-- CashPayment
                          +-- CardPayment
VendingMachine --uses--> ChangeDispenser (interface)
                          +-- StandardChangeDispenser
VendingMachine --has--> VendingMachineState (State pattern)
                          |-- IdleState
                          |-- ProductSelectedState
                          |-- PaymentPendingState
                          +-- DispensingState`;