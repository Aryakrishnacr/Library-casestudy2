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
       
        var Id={
            mail:req.body.mail,
            password:req.body.password

        }
        var login=logindata(Id);
        signupdata.findOne({  username:req.body.username,
            password:req.body.password},function(err,users){
                if(err){
                    console.log(err);
                    return res.status(500).send();
                }
                if(!users){
                    return res.status(404).send("please enter a vald username and password");

                }
                if(users){
                    res.redirect('/')
                }
          });
    });
    return loginRouter;

}

module.exports=router;
