const express=require("express");
const adminRouter=express.Router();
const Bookdata=require('../model/Bookdata');
function router(nav){


    
    adminRouter.get('/',function(req,res){
        res.render("addbook",{nav,
        title:'library'
    
    });
    });
    adminRouter.post('/add',function(req,res){
     var item={
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
      image:req.body.image
       }
       var book= Bookdata(item);
       book.save();
       res.redirect('/books')
       
    });
    adminRouter.get('/delete/:id',function(req,res){
        Bookdata.deleteOne({_id:id})
        .then(function(books){
            res.render("/books",{nav,
                title:'library',
                books
            
            });
        })
       
    });

    
    return adminRouter;
}

module.exports=router;