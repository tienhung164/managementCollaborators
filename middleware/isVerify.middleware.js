const User = require('../model/user.model')
const jwt = require('jsonwebtoken')

function isVetify(req,res,next){
    
  let access_token= req.cookies._pall_token
  jwt.verify(access_token, process.env.JWT_ACCESS_TOKEN, function(err, data){
      User.find({email:data.email},(err, kq)=>{    
        if( kq.length>0 && kq[0].verify == 1) {
         res.locals.name= kq[0].name
         res.locals.email= kq[0].email
         res.locals.avatar= kq[0].avatar
        
         next()
       }else res.redirect('/auth/login')
        })
        
      })


}

module.exports = isVetify