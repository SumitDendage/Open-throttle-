const mongoose=require('mongoose')
 const UserSchema=new mongoose.Schema({
    Fname:String,
    Lname:String,
    Email:String,
    City:String,
    UserName:String,
    Password:String
 })
 const UserModel = mongoose.model("Resister",UserSchema)
 module.exports=UserModel