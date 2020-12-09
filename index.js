const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/mensagens', function (req, res) {
  res.send('Exibir a lista de mensagens.')
})

app.post('/mensagens', function (req, res) {
  res.send('Criar uma mensagem.')
})

app.listen(3000)
