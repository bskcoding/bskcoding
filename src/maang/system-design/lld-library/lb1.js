export const JAVA_A = `// A. Enums + Book + BookCopy
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

enum CopyStatus { AVAILABLE, BORROWED, RESERVED, LOST }
enum MemberType { REGULAR, PREMIUM }
enum LoanStatus { ACTIVE, RETURNED, OVERDUE, LOST }

class Book {
    private final String isbn;
    private final String title;
    private final String author;
    private final String genre;
    Book(String i, String t, String a, String g) {
        isbn = i; title = t; author = a; genre = g;
    }
    public String getIsbn() { return isbn; }
    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public String getGenre() { return genre; }
}

class BookCopy {
    private final String barcode;
    private final Book book;
    private CopyStatus status = CopyStatus.AVAILABLE;

    BookCopy(String b, Book bk) { barcode = b; book = bk; }

    public synchronized boolean borrow() {
        if (status != CopyStatus.AVAILABLE) return false;
        status = CopyStatus.BORROWED;
        return true;
    }
    public synchronized void returnCopy() {
        status = CopyStatus.AVAILABLE;
    }
    public String getBarcode() { return barcode; }
    public Book getBook() { return book; }
    public CopyStatus getStatus() { return status; }
    public boolean isAvailable() { return status == CopyStatus.AVAILABLE; }
}`;