const connection = require("./model");
const express = require("express");
const application = express();
const path =require("path");
const expressHandlerbars = require("express-handlebars");
const bodyparser = require("body-parser");

const Coursecontroller = require("./controler/courses")

application.use(bodyparser.urlencoded({
    extended: true 
}));

application.set('views' , path.join(__dirname , "/views/"));


application.engine("hbs", expressHandlerbars({
    extname: "hbs",
     defaultLayout : "mainlayout" ,
     layoutsDir: __dirname + "/views/layouts"
})); 
application.get("/", (req ,res)=>{
    //res.send('<h1>Hello world !!<h1>')
    res.render("index", {} )
});

application.use ("/course" , Coursecontroller)

application.listen("3000", ()=>{
    console.log("server started") 
});

application.set ("view engine" , "hbs")