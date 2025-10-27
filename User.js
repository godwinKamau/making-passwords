//==========================================Schema for users==============================================//
//                     -This page creates the model for users and stores it in the DB

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('user', UserSchema)