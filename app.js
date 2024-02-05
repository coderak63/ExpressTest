const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello - from Express JS! ------ fourth change')
})

app.get('/abhi', (req, res) => {
    res.send('Hi, Abhishek here!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
