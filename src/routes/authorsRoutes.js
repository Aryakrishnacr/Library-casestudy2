const express=require("express");
const authordata = require("../model/authordata");
const authorsRouter=express.Router();
function router(nav){


    // var authors=[
    //     { 
    //         name:'Benyamin',
    //         title:'Books',
    //         img:'author1.jpg'
    //     },
    //     { 
    //         name:'M.Mukundan',
    //         title:'Books',
    //         img:'author2.jpg'
    //     },
    //     { 
    //         name:'S.K Pottakkad',
    //         title:'Books',
    //         img:'author3.jpg'
    //     }
    // ]
    authorsRouter.get('/',function(req,res){
        authordata.find()
        .then(function(authors){
            res.render("authors",{nav,
                title:'library',
                authors
            
            });
        })
       
    });
authorsRouter.get('/:id',function(req,res){
        const id=req.params.id
    authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{nav,
                title:'library',
                author
            
            });
        })
        
    });
    return authorsRouter;
}

module.exports=router;