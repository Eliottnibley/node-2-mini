let books = []
let id = 0

module.exports = {
  read: (req, res) => {
    if(!books) {
      return res.status(404).send('Get did not work')
    }
    res.status(200).send(books)
  },

  create: (req, res) => {
    const {title, author} = req.body
    let newBook = {
      id: id,
      title: title,
      author: author
    }
    id++
    books.push(newBook)

    res.status(200).send(books)
  },

  update: (req, res) => {
    const updateId = req.params.id

    const index = books.findIndex(book => book.id === +updateId)

    if(index === -1) {
      return res.status(500).send('no book with this id exists')
    }

    books[index] = {
      id: books[index].id,
      title: req.body.title || books[index].title,
      author: req.body.author || books[index].author
    }

    res.status(200).send(books)
  }, 

  delete: (req, res) => {
    const updateId = req.params.id

    const index = books.findIndex(elem => elem.id === +updateId)
    
    if(index === -1) {
      return res.status(500).send('no book with this id exists')
    }

    books.splice(index, 1)

    res.status(200).send(books)
  }
}