
var request = require('request')

var bookList = []

/* The standard pattern for asynchronous callbacks is for the first parameter to be the error, this should be null if no error is thrown with the second parameter being the data. */
exports.search = (query, callback) => {
  if (typeof query !== 'string' || query.length === 0) {
    callback(new Error('missing query parameter'))
  }
  const url = 'https://www.googleapis.com/books/v1/volumes'
  const query_string = {q: query, maxResults: 3, fields: 'items(id,volumeInfo(title,authors))'}
  request.get({url: url, qs: query_string}, (err, res, body) => {
    if (err) {
      callback(new Error('error making google books request'))
    }
    const json = JSON.parse(body)
    const items = json.items
    if (items === undefined) {
      //console.log('found undefined property')
      callback(new Error('no books found matching search'))
      return
    }
    const books = items.map( element => {
      return {id:element.id, title:element.volumeInfo.title, authors:element.volumeInfo.authors}
    })
    /* the first callback parameter is the error, which in this case will be null, the second parameter is the data returned. */
    callback(null, books)
  })
}

exports.describe = (id, callback) => {
  if (id.length !== 12) {
    callback(new Error ('invalid book id'))
  }
  const url = 'https://www.googleapis.com/books/v1/volumes'
  const query_string = {q: id}
  request.get({url: url, qs: query_string}, (err, res, body) => {
    if (err) {
      callback(new Error('error making google books request'))
    }
    const json = JSON.parse(body)
  
    const item = json.items
    
    if (item === undefined) {
      callback(new Error('no book found'))
      return
    } 
    const book = {id:item[0].id, title:item[0].volumeInfo.title, authors:item[0].volumeInfo.authors, description: item[0].volumeInfo.description}
    
    callback(null, book)
  })
}

/* a synchronous function will either return data or throw an error */
exports.add = bookId => {
  if (bookId.length != 12) {
    /* this throws a user-defined exception. */
    throw('bookId should be 12 character long')
  }
  if (bookList.indexOf(bookId) != -1) {
    throw('book has already been added to the list')
  }
  bookList.push(bookId)
  //console.log(bookList.length)
  return 'book '+bookId+' added'
}

exports.bookCount = () => {
  return bookList.length
}

exports.delete = bookId => {
  let index = bookList.indexOf(bookId);
  if (bookId.length != 12) {
    throw('bookId should be 12 character long')
  }
  if (index == -1) {
    throw(`there is no book with id ${bookId} in the list`)
  }
  bookList.splice(index, 1);
  //console.log(bookList)
  return index;
}