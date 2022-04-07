const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for Business
let user = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    fb: {
        type: String,
    },
    insta: {
        type: String,
    },
    yearOfBirth: {
        type: Number,
    },
    stk: {
        type: String,
    },
    balances: {
        type: Number,
        default: 0,
    },
    role: {
        type: Number,
        default: 0,
    },
    verify: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('user', user)

//role 0 user
//role 1 admin

//verify 0 - no
//verify 1 - yes
