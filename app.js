const express=require("express");
const bodyParser = require('body-parser')
const multer  = require('multer');
const StoreImage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/images/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});
const nav=[
    {
        link:'/books',name:'books'},
{
    link:'/authors',name:'authors'},
{
        link:'/signup',name:'signup'},
    {
            link:'/login',name:'login'},
     {
            link:'admin',name:'add book'},
    
     {
            link:'/author',name:'add author'}
    


];

const booksRouter=require("./src/routes/booksRoutes")(nav)
const authorsRouter=require("./src/routes/authorsRoutes")(nav)
const signupRouter=require("./src/routes/signupRoutes")(nav)
const loginRouter=require("./src/routes/loginRoutes")(nav)
const adminRouter=require("./src/routes/adminRoutes")(nav)
const addauthorRouter=require("./src/routes/addauthorRoutes")(nav)

const app=new express();
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer({storage:StoreImage}).single('image'));

app.use(express.static('./public'));
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/signup",signupRouter);
app.use("/login",loginRouter);
app.use("/admin",adminRouter);
app.use("/author",addauthorRouter);

app.set('view engine','ejs');
app.set('views','./src/views');
app.get('/',function(req,res){
    res.render("index",{
    nav,
    title:'library'
});
});


app.listen(5000);
