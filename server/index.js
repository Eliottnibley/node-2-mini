const express = require('express')
const app = express()
const ctlr = require('../server/controllers/books_controller')
const SERVER_PORT = 3000

app.use(express.json())
app.use(express.static(__dirname + '/../build'))

app.get('/api/books', ctlr.read)
app.post('/api/books', ctlr.create)
app.put('/api/books/:id', ctlr.update)
app.delete('/api/books/:id', ctlr.delete)

app.listen(SERVER_PORT, () => {
  console.log(`Running on port ${SERVER_PORT}`)
})