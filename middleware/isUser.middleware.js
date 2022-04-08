const User = require('../model/user.model')
const jwt = require('jsonwebtoken')

function isUser(req,res,next){
    
   let access_token= req.cookies._pall_token
   jwt.verify(access_token, process.env.JWT_ACCESS_TOKEN, function(err, data){
       if(data.role==1 || data.role==0 ) { 
         res.locals.name=data.name
         res.locals.email=data.email
         res.locals.avatar=data.avatar

         next()}
       else res.redirect('/')
   })


}

module.exports = isUser