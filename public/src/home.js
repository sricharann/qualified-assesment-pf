function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedCount = 0;
  books.forEach(book => {
    let booksArr = book.borrows;
    booksArr.find(item => {
      if(item.returned === false){
        borrowedCount += 1;
      }
    }); 
  });
  return borrowedCount;
}

function getMostCommonGenres(books) {
  let genreArray = [];
  for(let genreObj in books){
    genreArray.push(books[genreObj].genre);
  }
  const uniqueArry = [...new Set(genreArray)];
  let resultArray = [];
  for(let k=0; k<uniqueArry.length;k++){
    let objVal ={name:"",count:0 };
    for(let i=0;i<genreArray.length;i++){
      if(uniqueArry[k] == genreArray[i]){
        objVal.name = genreArray[i];
        objVal.count += 1;
      }
    }resultArray.push(objVal);
  }
  resultArray.sort((resultArrayA, resultArrayB) => (resultArrayA.count>resultArrayB.count? -1:1));
  resultArray.length = 5;
  return resultArray;
}


function getMostPopularBooks(books) {
  let resultArray = [];
  let tempArray = [];
  for(let book in books){
    let bookObj = new Object();
    bookObj.name = books[book].title;
    bookObj.count = books[book].borrows.length;
    tempArray.push(bookObj);
  }
  tempArray.sort((a,b) => b.count - a.count);
  resultArray = tempArray.slice(0,5);
  return resultArray;
}

function getMostPopularAuthors(books, authors) {
  let resultArray = [];
  let mostPopularResult = [];
  for(let author in authors){
    for(book in books){
      let authorObj = new Object();
      if(books[book].authorId === authors[author].id){
        authorObj.name = authors[author].name.first+' '+authors[author].name.last;
        authorObj.count = books[book].borrows.length;
        resultArray.push(authorObj);
      }
    }
  }resultArray.sort((a,b) => b.count - a.count);
  mostPopularResult = resultArray.slice(0,5);
  return mostPopularResult;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
