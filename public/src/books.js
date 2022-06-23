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
    for(let accountInfo in accounts){
      if(accounts[accountInfo].id === idValue && (finalArray.length < 10)){
        accounts[accountInfo].returned = borrow[borrowed].returned;
        finalArray.push(accounts[accountInfo]);
      }
    }
  }
  return finalArray;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
