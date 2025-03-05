const mongoose = require('mongoose')

const {dbConnect} =  require('../db.js')


dbConnect();

let userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String 
})

let userModel = mongoose.model('projectuserregs',userSchema)

module.exports = userModel;
