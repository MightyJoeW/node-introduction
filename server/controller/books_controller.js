let books = []; //A book will be an object that has an id, title, and author property
let id = 0; //After a creation of a book, we will increment this by 1 to insure no books have the same id

module.exports = {
  create: (req, res) => {
    const { title, author } = req.body;
    books.push({ id, title, author });
    id++;
    res.status(200).json(books);
  },
  read: (req, res) => {
    res.status(200).json(books);
  },
  update: (req, res) => {
    const updateID = req.params.id;
    let index = books.findIndex(book => book.id == updateID);

    books[index] = {
      id: books[index].id,
      title: req.body.title || books[index].title,
      author: req.body.author || books[index].author
    };

    res.status(200).json(books);
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    bookID = books.findIndex(book => book.id == deleteID);
    books.splice(bookID, 1);
    res.status(200).json(books);
  }
};
