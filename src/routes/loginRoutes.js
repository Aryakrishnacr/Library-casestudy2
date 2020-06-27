const express=require("express");
const loginRouter=express.Router();
const logindata=require('../model/logindata');
const signupdata=require('../model/signupdata');

function router(nav){

    
    loginRouter.get('/',function(req,res){
        res.render("login",{nav,
         title:'library'
       
    
    });
    });
    loginRouter.post("/submit", (req,res)=>{
        signupdata.findOne({mail:req.body.mail,password:req.body.password}, function(err,item)
        {
            if(err)
            {
            res.send("User not found.")
            }
            res.send("Logged in succesfully.")
        }
    )});
    return loginRouter;

}

module.exports=router;