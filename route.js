const route = require('express').Router()
const multer = require('multer')
const authMidware = require('./middleware/authMidware')
const Controller = require('./controller')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'team_icons/')
    },
    filename: function (req, file, cb) {
      cb(null, `${req.body.name}.jpg`)
    }
})

const upload = multer({
    storage: storage
})

// Home
route.get('/', Controller.home)

route.get('/games', Controller.games)

//-----------------Team-----------------
// login
route.get('/login', Controller.loginPage)
route.post('/login', Controller.login)

// register
route.get('/register', Controller.registerPage)
route.post('/register', upload.single('icon'), Controller.register)

route.use(authMidware)
route.get('/dashboard', Controller.dashboard)

route.get('/logout', Controller.logout)

module.exports = route