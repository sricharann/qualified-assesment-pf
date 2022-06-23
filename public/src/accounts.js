function findAccountById(accounts, id) {
  return accounts.find((account)=> account.id ===id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let accountId = account.id;
  let bookCount = 0;
  books.forEach((book) => {
    let booksArr = book.borrows;
    booksArr.forEach((bookItem) => {
      if(bookItem.id === accountId) {
        bookCount ++;
      }
    }
  );
  });
  return bookCount;
}

function getBooksPossessedByAccount(account, books, authors) {
  let accountId = account.id;
  let resultArray = [];
    for(let book in books){
      let bookBorrowerIdArray = books[book].borrows;
      let matchedId = bookBorrowerIdArray.find((borrowerID) => {
        if(borrowerID.id === accountId) 
        return true
        else {
          return false;
        }
        });
        
        if(matchedId && matchedId.returned === false){
          for(let author in authors){
            if(books[book].authorId == authors[author].id){
              books[book].author = authors[author];
              resultArray.push(books[book]);
            }
          }
        
      }
  }
  return resultArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
