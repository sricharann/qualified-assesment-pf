function findAuthorById(authors, id) {
  return authors.find((author)=> author.id === id);
}

function findBookById(books, id) {
  return books.find((book)=> book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooksArray = [];
  let returnedBooksArray = [];
  let finalArray = [];
  for(let book in books){
    let borrowerObj = books[book].borrows;
    for(let borrower in borrowerObj){
      if(borrowerObj[borrower].returned === true){
        returnedBooksArray.push(borrowerObj[borrower]);
        break;
      } else{
        borrowedBooksArray.push(borrowerObj[borrower]);
       break;
      }
    }
  }
  finalArray = [borrowedBooksArray,returnedBooksArray];
  return finalArray;
}

function getBorrowersForBook(book, accounts) {
  let finalArray = [];
  const borrow= book.borrows;
  for(let borrowed in borrow){
    let idValue = borrow[borrowed].id;
    let returnedVal = borrow[borrowed].returned;
     accounts.reduce((resultArray, account) => {
      if(account.id === idValue && finalArray.length <10){
        account.returned = returnedVal;
        finalArray.push(account);
      }
    });
  }
  return finalArray;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
