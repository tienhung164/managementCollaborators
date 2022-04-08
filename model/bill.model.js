const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let bill = new Schema({
    customer: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    sdt: {
        type: String,
        require: true,
    }
    ,
    address: {
        type: String,
        require: true,
    }
    , 
    link: {
        type: String,
        require: true,
    }
    ,
    discount: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    price_increase: {
        type: Number,
        default: 0
    },
    fee: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum : ['pending','reject','shipping','successful delivery','boom'],
        default: 'pending'
        
    },   
    date: {
        type: String,
        default: Date.now
    },
   
})

module.exports = mongoose.model('bill', bill);


