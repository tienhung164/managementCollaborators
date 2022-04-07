const User = require('../model/user.model')
const stmp = require('../config/sendMail')
const OTPModel = require('../model/otpConfirm.model')
const OTP = require('otp')
const otp = new OTP()
const bcrypt = require('bcrypt')

class AuthController {
    index(req, res) {
        res.render('./auth/login')
    }

    postRegister(req, res) {
        let _email = req.body.email
        let _password = bcrypt.hashSync(req.body.password, 10);
        let _name = req.body.name
        let _fb = req.body.fb
        let _insta = req.body.insta
        let _yearOfBrith = req.body.yearOfBrith
        let _stk = req.body.stk

        User.find({ email: _email }, (err, data) => {
            if (data.length != 0) {
                return res.json({ code: 1, message: 'email da ton tai' })
            }
            if (data) {
                const user = new User({
                    email: _email,
                    password: _password,
                    name: _name,
                    fb: _fb,
                    insta: _insta,
                    yearOfBirth: _yearOfBrith,
                    stk: _stk,
                })
                
                let _otp = otp.totp()

                stmp.sendM(_email,'Pallgree xin gửi OTP xác minh tài khoản','Mã OTP 6 số của bạn gồm :'+_otp)
                    .then(() => {
                        let otpModule = new OTPModel({otp:_otp,email:_email})
                        otpModule.save()
                        //res.locals.email =_email
                        user.save()
                            .then((data) => {
                                return res.json({
                                    code: 2,
                                    message: 'da dang ki thanh cong',
                                    email: _email,
                                })
                            })                         
                    })
                    .catch((err) => {
                        return res.json({
                            code: 3,
                            message: 'da dang ki khong thanh cong',
                        })
                    })
            }
        })
    }
    getRegister(req, res) {
        res.render('./auth/register')
    }
    getCheckOTP(req, res) {
        let _email = req.query.email
        res.locals.email=_email
        res.render('./auth/checkOTP')
    }
    postCheckOTP(req, res) {       
        let _otp= req.body.otp
        let _email= req.body.email
        
        OTPModel.findOne({otp:_otp ,email:_email})
                .then((data)=>{               
                    let dateOld=data.date  
                    //console.log(dateOld);                     
                    if(Date.now()-dateOld < 6000000){
                        User.findOneAndUpdate({email:_email},{verify:1},(err,data)=>{
                            if(!err) return res.json({code:1,mess:'verify thanh cong'})
                            else return res.json({code:3,mess:'verify khong thanh cong'})
                        })
                           
                        
                    }
                })
                .catch(()=>{

                    return res.json({code:2,mess:'verify khong thanh cong'})
                })
         
    }

    getForgotPassword(req,res){
        res.render('./auth/forgotpassword')
    }
}

module.exports = new AuthController()
