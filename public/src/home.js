function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const result = books.filter((book) => (book.borrows[0].returned === false));
  return (result.length);
}

function getMostCommonGenres(books) {
  let done = [];
  const genreArr = books.map((book) => book.genre)
  for (element in genreArr){
    const name = genreArr[element];
    const found = done.find((item) => item.name === name);
    if (found != undefined ){
      found.count++;
    }
    else {
      done.push( { 
        name: name,
        count: 1 
      } );
    }
  }
  const sorted = done.sort((gen1, gen2) => 
    gen1.count < gen2.count ? 1 : -1);
  return sorted.slice(0, 5);
}

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const { title, borrows } = book;
    return {
      name: title,
      count: borrows.length
    }
    } );
  const sorted = result.sort((book1, book2) =>
    book1.count < book2.count ? 1 : -1);
  return sorted.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const result = books.map((book) => {
    const { authorId, borrows } = book;
    const count = borrows.length;
    for (obj in authors){
      const author = authors[obj];
      if (author.id === authorId){
        const { 
          name: { first, last }
        } = author;
        return {
          name: `${first} ${last}`,
          count: count
        }
      }
    }
  })
  const sorted = result.sort((author1, author2) =>
    author1.count < author2.count ? 1 : -1);
  return sorted.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
