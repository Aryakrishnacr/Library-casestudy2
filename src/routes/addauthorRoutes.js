const express=require("express");
const addauthorRouter=express.Router();
const authordata=require('../model/authordata');
function router(nav){


    
addauthorRouter.get('/',function(req,res){
        res.render("addauthor",{nav,
        title:'library'
    
    });
    });
    addauthorRouter.post('/add',function(req,res){
     var item={
        name:req.body.name,
        books:req.body.books,
         image:req.body.image
       }
       var author= authordata(item);
       author.save();
       res.redirect('/authors')
       
    });
    

    
    return addauthorRouter;
}

module.exports=router;