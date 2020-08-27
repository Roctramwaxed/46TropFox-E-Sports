const {Team, Game, TeamGame} = require('./models')
const bcrypt = require('bcryptjs')

class Controller {
    static home (req, res) {
        Game.findAll({
            order: [['id', 'ASC']]
        })
            .then(games => {
                res.render('homePage', {games})
            })
    }

    static loginPage (req, res) {
        let err = req.app.locals.err
        delete req.app.locals.err
        res.render('login', {err})
    }

    static login (req, res) {
        Team.findOne({
            where: {
                name: req.body.name
        }})
        .then(data => {
            if (data) {
                let flag = bcrypt.compareSync(req.body.password, data.password)
                if (flag) {
                    req.session.active = data.name
                    res.redirect(`/dashboard`)
                } else {
                    req.app.locals.err = 'Username/password salah'
                    res.redirect('/login')
                }
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

    static registerPage (req, res) {
        Game.findAll()
            .then(games => {
                res.render('register', {games})
            })
            .catch(err => res.send(err))
    }

    static register (req, res) {
        let params = {
            name: req.body.name,
            password: req.body.password,
            country: req.body.country
        }

        Team.create(params, {
            returning: true
        })
            .then(data => {
                if (req.body.GameId.length > 1) {
                    req.body.GameId.forEach(game => {
                        TeamGame.create({
                            TeamId: data.id,
                            GameId: game
                        })
                    })
                } else {
                    TeamGame.create({
                        TeamId: data.id,
                        GameId: req.body.GameId
                    })
                }

                res.redirect('/login')
            })
            .catch(err => {
                console.log(err);
            })
    }

    static dashboard (req, res) {
        Team.findOne({
            where: {
                name: req.session.active
            },
            include: [Game]
        }).then(team => {
            res.render('teamViews/dashboard', {team})
        })
    }

    static games (req, res) {
        Game.findAll({
            include: [Team]
        }).then(games => {
            res.render('games', {games})
        })
    }

    static logout (req, res) {
        req.session.active = undefined
        res.redirect('/')
    }
}

module.exports = Controller