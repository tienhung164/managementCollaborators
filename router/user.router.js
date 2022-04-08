const express = require('express')
const app = express()
const router = express.Router()
const userControll = require('../controller/user.controller')
const isUser = require('../middleware/isUser.middleware')
const isVerify = require('../middleware/isVerify.middleware')
const multer = require('multer')
const upload = multer({ dest: './public/img-upload/' })


router.get('/home',isUser,userControll.getHome)
router.get('/createBill',isVerify,userControll.getCreateBill)
router.post('/createBill',isVerify,userControll.postCreateBill)
router.get('/listBill',isUser,userControll.getListBill)
router.get('/listRank',isUser,userControll.getListRank)
router.get('/infor',isUser,userControll.getInfor )
router.post('/infor',upload.single('upload_img'),isUser,userControll.postInfor )

module.exports = router
