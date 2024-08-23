require('dotenv').config()
const express = require('express')
const app = express()
const port = 443

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('<h1> Hello Abhisek </h1>')
})

app.get('/login', (req, res) => {
    res.send('Please login  ')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
