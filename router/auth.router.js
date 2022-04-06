const express = require('express')
const app = express()
const router = express.Router()
const authControll = require('../controller/auth.controller')

router.get('/login',authControll.index)
router.get('/register',authControll.getRegister)
router.post('/register',authControll.postRegister)
router.get('/checkOTP',authControll.getCheckOTP)
router.post('/checkOTP',authControll.postCheckOTP)

module.exports = router
