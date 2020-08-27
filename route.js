const route = require('express').Router()

route.get('/',(req,res) =>{
    res.render('homePage')
})

route.get('/teamPage',(req,res)=>{
    res.render('./teamViews/teamPage')
})

route.get('/games',(req,res)=>{
    res.render('./gameViews/gamePage')
})

route.get('/teams/login',(req,res)=>{
    res.render('login')
})

route.get('/teams/register',(req,res)=>{
    res.render('register')
})

module.exports = route