const authMidware = (req, res, next) => {
    if (req.session.active) {
        next()
    } else {
        req.app.locals.err = 'Unauthorized access. Login required.'
        res.redirect('/login')
    }
}

module.exports = authMidware