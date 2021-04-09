function findAccountById(accounts, id) {
   return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => 
    accountA.name.last > accountB.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  const accID = account.id;
  let borrowed = [];
  for (book in books){
    const bookObj = books[book];
    bookObj.borrows.forEach((book1) =>
      book1.id === accID ? borrowed.push(1) : borrowed);
  }
  return result = borrowed.reduce((acc, each) => acc + each);
}

function getBooksPossessedByAccount(account, books, authors) {
  
  function combineBooksAndAuthors(books, authors){
    const finishedArr = [];
    for (book in books){
      const object1 = books[book];
      const authorNum = object1.authorId;
      for (author in authors){
        const object2 = authors[author]
        if (authorNum === object2.id){
          finishedArr.push({ ...object1, author: object2})
        }
      }
    }
    return finishedArr;
  }
  
  const accountId = account.id;
  const checkedOut = [];
  for (book in books){
    const bookObj = books[book];
    for (element in bookObj.borrows){
      borrowsObj = bookObj.borrows[element];
      if (borrowsObj.id === accountId && borrowsObj.returned === false){
        checkedOut.push(bookObj);
      }
    }
  }
  const combined = combineBooksAndAuthors(books, authors);
  const done = [];
  for (let index = 0; index < checkedOut.length; index++){
    const found = combined.find((obj) => checkedOut[index].id === obj.id);
    done.push(found);
  }
  return done;
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
