const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(function(req,res,next){
    console.log("Middleware started");
    next();
})

app.get("/",function(req,res){
    res.send("Hello everyone guys");
});

app.get("/about",function(req,res){
    res.send("About page");
});


app.get("/profile",function(req,res,next){
    return next(new Error("Error"));
});

app.use(function(err,req,res,next){
    console.error(err.stack)
    res.status(500).send("Something went wrong")
})

app.listen(8000);