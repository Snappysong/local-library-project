function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = [];
  const notCheckedOut = [];
  for (book in books){
    const bookObj = books[book];
    if (bookObj.borrows[0].returned === false) {
      checkedOut.push(bookObj)
    }
    else {notCheckedOut.push(bookObj)}
  }
  return done = [checkedOut, notCheckedOut];
}

function getBorrowersForBook(book, accounts) {
  let done = [];
  const people = book.borrows;
  for (obj in people){
    const person = people[obj];
    for (obj2 in accounts){
      const account = accounts[obj2];
      if (person.id === account.id){
        done.push({...person, ...account})
      }
    }
  }
  if (done.length > 10){
    done = done.slice(0, 10);
  }
  return done;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
