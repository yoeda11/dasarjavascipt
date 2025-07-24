const books = {};

// Mengambil semua buku
function getBooks() {
    return books;
}

// Mengambil buku berdasarkan ID
function getBookById(id) {
    const book = books[id];
    if (!book) {
        return null;
    }
    return book; // Mengembalikan objek buku, bukan hanya ID-nya
}

// Menyimpan buku ke dalam koleksi
function saveBook(book) {
    books[book.id] = book;
}

// Menyimpan satu buku
saveBook({ id: 'book-1', name: 'Book 1' });

// Mengambil semua buku yang disimpan
const myBooks = getBooks();

// Mengambil buku dengan ID tertentu
const myBook = getBookById('book-1');

// Menampilkan hasil
console.log(myBooks); // Output: { 'book-1': { id: 'book-1', name: 'Book 1' } }
console.log(myBook);  // Output: { id: 'book-1', name: 'Book 1' }
