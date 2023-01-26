const mongoose = require('mongoose')
// const {Schema} = require('mongoose')

const Schema = mongoose.Schema 


const User = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, minLength : 3, maxLength : 25},
    password : {type : String, required : true, minLength : 5}
})


module.exports = mongoose.model('User', User)