// Gen an array of object like
// {title : ”Book Name”, author: “Author Name”, isAvailable: true}

// write functions for
// 1. List all books
// 2. Mark a book as borrowed (isAvailable = false)
// 3. Mark a book as returned (isAvailable = true)
// 4. Find a book(s) by author name

const books = [
  { title: "Book1", author: "Author1", isAvailable: true },
  { title: "Book2", author: "Author2", isAvailable: true },
  { title: "Book3", author: "Author3", isAvailable: true },
  { title: "Book4", author: "Author4", isAvailable: true },
  { title: "Book5", author: "Author5", isAvailable: true },
  { title: "Book6", author: "Author6", isAvailable: true },
  { title: "Book7", author: "Author7", isAvailable: true },
];

function listBooks() {
  return books;
}

// for-OF loop -> arrays a = [1, 2, 3, 4]
// for-IN loop -> objects
function markAsBorrowed(title) {
  for (let book of books) {
    if (book.title == title) {
      if (book.isAvailable) {
        book.isAvailable = false;
        return book;
      }
    }
  }
}

function returnBook(title) {
  for (let book of books) {
    if (book.title == title) {
      if (!book.isAvailable) {
        book.isAvailable = true;
        return book;
      }
    }
  }
}

function findBooksByAuthor(author) {
  const authoredBooks = [];
  for (let book of books) {
    if (book.author == author) {
      authoredBooks.push(book);
    }
  }
  return authoredBooks;
}

console.log(listBooks());
console.log(markAsBorrowed("Book1"));
console.log(returnBook("Book1"));
console.log(findBooksByAuthor("Author1"));
