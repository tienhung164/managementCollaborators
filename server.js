require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const router = express.Router()
const ejs = require('ejs')
const route = require('./router/router')
const path = require('path')
const db = require('./config/db/connectMonggo')

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, '/public')))

// config router and monggodb
route(app)
db.connect()

app.listen(PORT, () => {
    console.log(`Local host start on port ${PORT}`)
})
