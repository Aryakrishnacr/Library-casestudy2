const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema=mongoose.Schema;
const signupSchema=new Schema({
    fname:String,
           lname:String,
           password:String,
           gender:String,
           dob:String,
           mail:String,
           phone:String,
        address:String

});
var Signupdata=mongoose.model('signupdata',signupSchema);
module.exports=Signupdata;