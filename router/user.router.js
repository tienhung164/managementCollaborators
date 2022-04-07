const express = require('express')
const app = express()
const router = express.Router()
const userControll = require('../controller/user.controller')

router.get('/home',userControll.getHome)
router.get('/createBill',userControll.getCreateBill)
router.get('/listBill',userControll.getListBill)
router.get('/listRank',userControll.getListRank)

module.exports = router
