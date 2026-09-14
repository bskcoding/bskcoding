export const JAVA_B = `// B. Member hierarchy + Loan + Strategies
abstract class Member {
    protected final String id;
    protected final String name;
    protected final String email;
    protected final int maxBooks;
    protected final int loanPeriodDays;
    protected final List<BookCopy> borrowedCopies = new ArrayList<>();

    protected Member(String id, String n, String e, int max, int days) {
        this.id = id; name = n; email = e;
        maxBooks = max; loanPeriodDays = days;
    }
    public String getId() { return id; }
    public String getName() { return name; }
    public int getMaxBooks() { return maxBooks; }
    public int getLoanPeriodDays() { return loanPeriodDays; }
    public List<BookCopy> getBorrowedCopies() { return borrowedCopies; }

    public synchronized boolean canBorrow() {
        return borrowedCopies.size() < maxBooks;
    }
    public synchronized void addBorrowed(BookCopy c) { borrowedCopies.add(c); }
    public synchronized void removeBorrowed(BookCopy c) { borrowedCopies.remove(c); }
}

class RegularMember extends Member {
    RegularMember(String id, String n, String e) { super(id, n, e, 3, 14); }
}
class PremiumMember extends Member {
    PremiumMember(String id, String n, String e) { super(id, n, e, 10, 30); }
}

class Loan {
    private final String id;
    private final BookCopy copy;
    private final Member member;
    private final LocalDate borrowDate;
    private final LocalDate dueDate;
    private LocalDate returnDate;
    private double fine = 0;
    private LoanStatus status = LoanStatus.ACTIVE;

    Loan(String id, BookCopy c, Member m, LocalDate borrow) {
        this.id = id; copy = c; member = m;
        borrowDate = borrow;
        dueDate = borrow.plusDays(m.getLoanPeriodDays());
    }
    public void markReturned(LocalDate d, double f) {
        returnDate = d; fine = f; status = LoanStatus.RETURNED;
    }
    public String getId() { return id; }
    public BookCopy getCopy() { return copy; }
    public Member getMember() { return member; }
    public LocalDate getBorrowDate() { return borrowDate; }
    public LocalDate getDueDate() { return dueDate; }
    public LocalDate getReturnDate() { return returnDate; }
    public double getFine() { return fine; }
    public LoanStatus getStatus() { return status; }
}

interface SearchStrategy {
    List<Book> search(Collection<Book> books, String query);
}

class TitleSearch implements SearchStrategy {
    public List<Book> search(Collection<Book> books, String q) {
        List<Book> r = new ArrayList<>();
        for (Book b : books)
            if (b.getTitle().toLowerCase().contains(q.toLowerCase())) r.add(b);
        return r;
    }
}
class AuthorSearch implements SearchStrategy {
    public List<Book> search(Collection<Book> books, String q) {
        List<Book> r = new ArrayList<>();
        for (Book b : books)
            if (b.getAuthor().toLowerCase().contains(q.toLowerCase())) r.add(b);
        return r;
    }
}
class ISBNSearch implements SearchStrategy {
    public List<Book> search(Collection<Book> books, String q) {
        List<Book> r = new ArrayList<>();
        for (Book b : books)
            if (b.getIsbn().equals(q)) r.add(b);
        return r;
    }
}

interface FineStrategy {
    double calculateFine(Loan loan, LocalDate returnDate);
}

class StandardFine implements FineStrategy {
    private final double perDayRate;
    StandardFine(double rate) { perDayRate = rate; }
    public double calculateFine(Loan loan, LocalDate returnDate) {
        if (!returnDate.isAfter(loan.getDueDate())) return 0;
        long daysLate = ChronoUnit.DAYS.between(loan.getDueDate(), returnDate);
        return daysLate * perDayRate;
    }
}`;