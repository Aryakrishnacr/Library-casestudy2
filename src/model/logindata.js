const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/library');
const Schema=mongoose.Schema;
const loginSchema=new Schema({
    mail:String,
    password:String
});
var Logindata=mongoose.model('logindata',loginSchema);
module.exports=Logindata;