const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const routerAuth = require('./auth.router')
const routerUser = require('./user.router')

function route(app) {
    app.get('/', (req, res) => {
        res.redirect('/user/home')
    })

    app.use('/auth', routerAuth)
    app.use('/user', routerUser)
}

module.exports = route
