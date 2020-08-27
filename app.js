const express = require('express')
const route = require('./route')
const session = require('express-session')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use('/', route)
app.use('/team_icons', express.static('team_icons'))

app.listen(port, () => console.log(`App listening on port ${port}`))