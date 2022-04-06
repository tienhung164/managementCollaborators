const User = require('../model/user.model')
const stmp = require('../config/sendMail')
class AuthController {
    index(req, res) {
        res.render('./auth/login')
    }

    postRegister(req, res) {
        let _email = req.body.email
        let _password = req.body.password
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
                    yearOfBrith: _yearOfBrith,
                    stk: _stk,
                })
                console.log(user)
                user.save()
                    .then((data) => {
                        return res.json({
                            code: 2,
                            message: 'da dang ki thanh cong',
                        })
                    })
                    .catch((err) => {
                        //console.log(err)
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
}

module.exports = new AuthController()
