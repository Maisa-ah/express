//Maisa Ahmad
//July 23, 2020

const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('Connected...')
})
.catch(err=>console.log(err))

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/about', function (req, res) {
    res.send('do u work')
})

app.get('/example/a', function (req, res) {
    res.send('Hello from A!')
  })

  app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
  }, function (req, res) {
    res.send('Hello from B!')
  })

app.get(/.*fish$/, function (req, res) {
    res.redirect('/about');
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))