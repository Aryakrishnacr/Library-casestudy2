const express=require("express");
const signupRouter=express.Router();
const signupdata=require('../model/signupdata');
function router(nav){
    
    signupRouter.get('/',function(req,res){
        res.render("signup",{nav,
        title:'library',
        
    
    });
    });
    signupRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render("book",{nav,
        title:'library',
        
    
    });
    });
    signupRouter.post('/submit',function(req,res){
        var item={
           fname:req.body.fname,
           lname:req.body.lname,
           password:req.body.password,
           gender:req.body.gender,
           dob:req.body.dob,
           mail:req.body.mail,
           phone:req.body.phone,
        address:req.body.address

          }
          var signup= signupdata(item);
          signup.save();
          res.redirect('/books')
          
          
       });
       
   
    return signupRouter;

}

module.exports=router;