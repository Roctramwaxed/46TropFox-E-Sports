const express = require('express')
const route = require('./route')
const app = express()
const port = 4000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(route)

app.listen(port, () => console.log(`App listening on port ${port}`))