const User = require('../model/user.model')


class UserControll{

    getHome(req,res){
        res.locals.title='Trang chủ'       
        res.render('./user/home')
    }
    getInfor(req,res){
        res.locals.title='Thông tin cá nhân' 
        User.findOne({email:res.locals.email},(err,_data)=>{
            console.log(_data)
            res.render('./user/infor',{
                data:_data

            })
        }) 
        
    }
    postInfor(req,res){
       //console.log(req.file,res.body)   
       let _avatar 
       try {
             _avatar = req.file.path 
       } catch (error){}   
        let dataUpdate={
            avatar: _avatar,
            sdt: req.body.sdt,
            fb: req.body.fb,
            insta: req.body.insta,
            yearOfBirth: req.body.year,
        }
       
        res.locals.title='Thông tin cá nhân' 
        User.findOneAndUpdate({email:res.locals.email},dataUpdate,(err,_data)=>{
           if(_data) return res.redirect('/user/infor')
           else return res.json({code:0 , msg:'update that bai'})
        }) 
        
    }
    getCreateBill(req,res){
        res.locals.title='Tạo đơn hàng'
        res.render('./user/createBill')
    }
    getListRank(req,res){
        res.locals.title='Xếp hạng ctv'
        res.render('./user/listRank')
    }
    getListBill(req,res){
        res.locals.title='Quản lí đơn hàng'
        res.render('./user/listBill')
    }

} 

module.exports = new  UserControll()