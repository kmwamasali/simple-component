const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const port = 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/hello',(req, res) => {
  res.send('Hello')
})

app.listen(port, () => console.log(`App listening at ${port}`))