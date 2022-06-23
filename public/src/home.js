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
  let resultArray = new Array(5);
  let genreArray = [];
  for(let genreObj in books){
    genreArray.push(books[genreObj].genre);
  }
  const uniqueArry = [...new Set(genreArray)];
  let result = [];
  for(let k=0; k<uniqueArry.length;k++){
    let obj ={name:"",count:0 };
    for(let i=0;i<genreArray.length;i++){
      if(uniqueArry[k] == genreArray[i]){
        obj.name = genreArray[i];
        obj.count += 1;
      }
    }result.push(obj);
  }
  result.sort((resultArrayA, resultArrayB) => (resultArrayA.count>resultArrayB.count? -1:1));
  // console.log('before '+result);
  result.length = 5;
  //console.log(result);
  return result;
}


function getMostPopularBooks(books) {
  let result = [];
  let resultArray = [];
  for(let book in books){
    let bookObj = new Object();
    bookObj.name = books[book].title;
    bookObj.count = books[book].borrows.length;
    resultArray.push(bookObj);
  }
  resultArray.sort((a,b) => b.count - a.count);
  result = resultArray.slice(0,5);
  return result;
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  let mostPopularResult = [];
  for(let author in authors){
    for(book in books){
      let authorObj = new Object();
      if(books[book].authorId === authors[author].id){
        authorObj.name = authors[author].name.first+' '+authors[author].name.last;
        authorObj.count = books[book].borrows.length;
        result.push(authorObj);
      }
    }
  }result.sort((a,b) => b.count - a.count);
  mostPopularResult = result.slice(0,5);
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
