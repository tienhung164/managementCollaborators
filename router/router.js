const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const routerAuth = require('./auth.router')

function route(app) {
    app.get('/', (req, res) => {
        res.redirect('/auth/login')
    })

    app.use('/auth', routerAuth)
}

module.exports = route
