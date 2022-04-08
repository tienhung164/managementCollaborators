const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let bill = new Schema({
    customer: {
        type: String
    },
    sdt: {
        type: String
    }
    ,
    address: {
        type: String
    }
    , 
    link: {
        type: String
    }
    ,
    verify: {
        type: Number
        default: 0
    }
    ,
    sussces: {
        type: Number
        default: 0
    },
    
    date: {
        type: String,
        default: Date.now
    },
   
})

module.exports = mongoose.model('bill', bill);

//verifi 0 
//verifi 0 - dduowjc chấp nhận bởi admin và vận chuyển

//sussces 0 là đang giao 
//sussces 1 là giao thành công
//sussces 3 là đơn bị hoàn
