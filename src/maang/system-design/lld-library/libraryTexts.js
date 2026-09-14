export const SQL = `-- 6 tables, normalized, minimal

CREATE TABLE books (
  isbn        VARCHAR(20) PRIMARY KEY,
  title       VARCHAR(255) NOT NULL,
  author      VARCHAR(255) NOT NULL,
  genre       VARCHAR(50),
  published_year INT
);
CREATE INDEX idx_book_title ON books(title);
CREATE INDEX idx_book_author ON books(author);

CREATE TABLE book_copies (
  barcode    VARCHAR(30) PRIMARY KEY,
  isbn       VARCHAR(20) NOT NULL,
  status     ENUM('AVAILABLE','BORROWED','RESERVED','LOST') DEFAULT 'AVAILABLE',
  added_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (isbn) REFERENCES books(isbn)
);
CREATE INDEX idx_copy_isbn ON book_copies(isbn);
CREATE INDEX idx_copy_status ON book_copies(status);

CREATE TABLE members (
  member_id    VARCHAR(20) PRIMARY KEY,
  name         VARCHAR(100) NOT NULL,
  email        VARCHAR(100) UNIQUE NOT NULL,
  member_type  ENUM('REGULAR','PREMIUM') NOT NULL DEFAULT 'REGULAR',
  max_books    INT NOT NULL DEFAULT 3,
  loan_period_days INT NOT NULL DEFAULT 14,
  joined_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status       ENUM('ACTIVE','SUSPENDED','CLOSED') DEFAULT 'ACTIVE'
);
CREATE INDEX idx_member_email ON members(email);

CREATE TABLE loans (
  loan_id      VARCHAR(20) PRIMARY KEY,
  barcode      VARCHAR(30) NOT NULL,
  member_id    VARCHAR(20) NOT NULL,
  borrow_date  DATE NOT NULL,
  due_date     DATE NOT NULL,
  return_date  DATE NULL,
  fine_amount  DECIMAL(10,2) DEFAULT 0,
  status       ENUM('ACTIVE','RETURNED','OVERDUE','LOST') DEFAULT 'ACTIVE',
  FOREIGN KEY (barcode) REFERENCES book_copies(barcode),
  FOREIGN KEY (member_id) REFERENCES members(member_id)
);
CREATE INDEX idx_loan_member ON loans(member_id, status);
CREATE INDEX idx_loan_due ON loans(due_date, status);

CREATE TABLE fines (
  fine_id      VARCHAR(20) PRIMARY KEY,
  loan_id      VARCHAR(20) NOT NULL,
  member_id    VARCHAR(20) NOT NULL,
  amount       DECIMAL(10,2) NOT NULL,
  reason       ENUM('LATE_RETURN','DAMAGE','LOST') NOT NULL,
  status       ENUM('PENDING','PAID','WAIVED') DEFAULT 'PENDING',
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  paid_at      TIMESTAMP NULL,
  FOREIGN KEY (loan_id) REFERENCES loans(loan_id),
  FOREIGN KEY (member_id) REFERENCES members(member_id)
);
CREATE INDEX idx_fine_member ON fines(member_id, status);

CREATE TABLE reservations (
  reservation_id VARCHAR(20) PRIMARY KEY,
  isbn           VARCHAR(20) NOT NULL,
  member_id      VARCHAR(20) NOT NULL,
  reserved_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status         ENUM('ACTIVE','FULFILLED','CANCELLED') DEFAULT 'ACTIVE',
  FOREIGN KEY (isbn) REFERENCES books(isbn),
  FOREIGN KEY (member_id) REFERENCES members(member_id)
);
CREATE INDEX idx_reservation_isbn ON reservations(isbn, status);`;

export const UML = `----------------------------------------
  LibraryService  (Singleton + Facade)
  - catalog: Catalog
  - members: Map<String, Member>
  - loans: List<Loan>
  + addBook(book, copies)
  + registerMember(member)
  + borrow(memberId, barcode): Optional<Loan>
  + returnBook(loan): double
  + search(strategy, query): List<Book>
----------------------------------------
      |owns (catalog dies with service)
      v
----------------------------------------
  Catalog                          Book
  - books: Map<ISBN,Book>          - isbn, title
  - copies: Map<barcode,Copy>      - author, genre
  + addBook()
  + getCopy(barcode)
  + search(strategy)
----------------------------------------
      |has
      v
----------------------------------------
  BookCopy
  - barcode, book, status
  + borrow()
  + returnCopy()
----------------------------------------

LibraryService --has--> Member (abstract)
  |-- RegularMember  +-- PremiumMember
LibraryService --uses--> SearchStrategy (Title/Author/ISBN)
LibraryService --uses--> FineStrategy (StandardFine)
LibraryService --creates--> Loan (copy, member, dates, fine)`;