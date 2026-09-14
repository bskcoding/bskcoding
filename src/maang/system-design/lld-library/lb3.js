export const JAVA_C = `// C. Catalog + LibraryService + Main
class Catalog {
    private final Map<String, Book> books = new ConcurrentHashMap<>();
    private final Map<String, BookCopy> copies = new ConcurrentHashMap<>();

    public void addBook(Book b) { books.put(b.getIsbn(), b); }
    public void addCopy(BookCopy c) {
        copies.put(c.getBarcode(), c);
        books.putIfAbsent(c.getBook().getIsbn(), c.getBook());
    }
    public Book getBook(String isbn) { return books.get(isbn); }
    public BookCopy getCopy(String barcode) { return copies.get(barcode); }
    public Collection<Book> getAllBooks() { return books.values(); }

    public Optional<BookCopy> findAvailableCopy(String isbn) {
        for (BookCopy c : copies.values())
            if (c.getBook().getIsbn().equals(isbn) && c.isAvailable()) return Optional.of(c);
        return Optional.empty();
    }

    public List<Book> search(SearchStrategy strategy, String query) {
        return strategy.search(books.values(), query);
    }
}

class LibraryService {
    private static volatile LibraryService ins;
    private final Catalog catalog = new Catalog();
    private final Map<String, Member> members = new ConcurrentHashMap<>();
    private final List<Loan> loans = new ArrayList<>();
    private final FineStrategy fineStrategy = new StandardFine(0.50);

    private LibraryService() {}

    public static LibraryService get() {
        if (ins == null) { synchronized (LibraryService.class) {
            if (ins == null) ins = new LibraryService(); } }
        return ins;
    }

    public void addBook(Book b, int numCopies) {
        catalog.addBook(b);
        for (int i = 1; i <= numCopies; i++)
            catalog.addCopy(new BookCopy(b.getIsbn() + "-C" + i, b));
    }

    public void registerMember(Member m) { members.put(m.getId(), m); }

    public synchronized Optional<Loan> borrow(String memberId, String isbn, LocalDate today) {
        Member m = members.get(memberId);
        if (m == null || !m.canBorrow()) return Optional.empty();
        Optional<BookCopy> copy = catalog.findAvailableCopy(isbn);
        if (copy.isEmpty() || !copy.get().borrow()) return Optional.empty();
        Loan loan = new Loan("L-" + System.currentTimeMillis(), copy.get(), m, today);
        loans.add(loan);
        m.addBorrowed(copy.get());
        return Optional.of(loan);
    }

    public synchronized double returnBook(Loan loan, LocalDate today) {
        double fine = fineStrategy.calculateFine(loan, today);
        loan.markReturned(today, fine);
        loan.getCopy().returnCopy();
        loan.getMember().removeBorrowed(loan.getCopy());
        return fine;
    }

    public List<Book> search(SearchStrategy strategy, String query) {
        return catalog.search(strategy, query);
    }
}

public class Main {
    public static void main(String[] args) {
        LibraryService lib = LibraryService.get();

        Book cleanCode = new Book("978-0132350884", "Clean Code", "Robert Martin", "Tech");
        Book effectiveJava = new Book("978-0134685991", "Effective Java", "Joshua Bloch", "Tech");
        lib.addBook(cleanCode, 3);
        lib.addBook(effectiveJava, 2);

        Member alice = new RegularMember("M1", "Alice", "alice@x.com");
        Member bob = new PremiumMember("M2", "Bob", "bob@x.com");
        lib.registerMember(alice);
        lib.registerMember(bob);

        LocalDate today = LocalDate.of(2024, 1, 1);
        Optional<Loan> loan = lib.borrow("M1", "978-0132350884", today);
        loan.ifPresent(l -> System.out.println("Borrowed: " + l.getId() + " due " + l.getDueDate()));

        LocalDate returnDate = today.plusDays(20);
        loan.ifPresent(l -> {
            double fine = lib.returnBook(l, returnDate);
            System.out.println("Returned late. Fine: $" + fine);
        });

        System.out.println("\\nSearch by author 'Martin':");
        lib.search(new AuthorSearch(), "Martin")
                .forEach(b -> System.out.println("  " + b.getTitle()));

        System.out.println("\\nSearch by title 'Java':");
        lib.search(new TitleSearch(), "Java")
                .forEach(b -> System.out.println("  " + b.getTitle()));
    }
}`;