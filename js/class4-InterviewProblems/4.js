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
  { title: "Book6", author: "Author1", isAvailable: true },
  { title: "Book7", author: "Author1", isAvailable: true },
];

function listBooks() {
  // TODO 
}

function markAsBorrowed(title) {
  // TO DO
}

function returnBook(title) {
  // TO DO
}

function findBooksByAuthor(author) {
  // TO DO
}

console.log(listBooks());
console.log(markAsBorrowed("Book1"));
console.log(returnBook("Book1"));
console.log(findBooksByAuthor("Author1"));