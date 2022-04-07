class UserControll{

    getHome(req,res){
        res.render('./user/home')
    }
    getCreateBill(req,res){
        res.render('./user/createBill')
    }
    getListRank(req,res){
        res.render('./user/listRank')
    }
    getListBill(req,res){
        res.render('./user/listBill')
    }

} 

module.exports = new  UserControll()