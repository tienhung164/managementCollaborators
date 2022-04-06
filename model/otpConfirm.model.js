const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let otpConfirm = new Schema({
    otp: {
        type: String
    },
    email: {
        type: String
    }
    ,
    date: {
        type: String,
        default: Date.now
    },
   
})

module.exports = mongoose.model('otpConfirm', otpConfirm);