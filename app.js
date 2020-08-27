const express = require('express')
const route = require('./route')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.listen(port, () => console.log(`App listening on port ${port}`))