const express=require("express");
const adminRouter=express.Router();
const Bookdata=require('../model/Bookdata');
const Authordata=require('../model/authordata')
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
    adminRouter.get('/update/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then((book)=>{
            res.render('editbook',{
                nav,
                title:'Edit Book',
                book
            })
        })
    })
    adminRouter.post('/update/:id',function(req,res){
        const id = req.params.id;
        Bookdata.updateOne({_id:id},{title : req.body.title,author : req.body.author,genre : req.body.genre, image : req.body.image
        })
        .then(()=>{
            res.redirect('/books');
        })
    })
    adminRouter.get('/delete/:id',(req,res)=>{
        const id = req.params.id;
        Bookdata.deleteOne({_id:id})
        .then(()=>{
            res.redirect('/books');
        })
    })
adminRouter.get('/editauthor/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then((author)=>{
            res.render('editauthor',{
                nav,
                title:'Edit Author',
                author
            })
        })
    })
    adminRouter.post('/editauthor/:id',function(req,res){
        const id = req.params.id;
        Authordata.updateOne({_id:id},{
            name: req.body.name,
            books : req.body.books,
            image : req.body.image
        })
        .then(()=>{
            res.redirect('/authors');
        })
    })
    adminRouter.get('/deleteauthor/:id',(req,res)=>{
        const id = req.params.id;
        Authordata.deleteOne({_id:id})
        .then(()=>{
            res.redirect('/authors');
        })
    })

    
    return adminRouter;
}

module.exports=router;