const express = require("express");
const application = express();
const path =require("path");

const expressHandlerbars = require ("express-handlerbars");
const bodyparser = require("body-parser");


application.use(bodyparser.urlencoded({
    extended: true 
}));


application.get("/", (req ,res)=>{
    res.send('<h1>Hello world !!<h1>')
})

application.listen("3000", ()=>{
    console.log("server started")
})







const mongoose = require("mongoose");
var CourseSchema = new mongoose.Schema({

    courseName:{
        type : String,
        require : "Required"
                 },
    courseId :{
        type: String 
                } ,
    courseDuration:{
        type:String
                    },
    courseFee:{
        type:String 

             }

                                    });

mongoose.model("Course",CourseSchema)





const mongoose = require ("mongoose") ;


mongoose.connect("mongodb://Localhost:27017/Ravi",{useNewUrlParser:true}, (error)=>{
    if(!error)
    {
        console.log("Success connected");
    }
    else {

        console.log("errr ocuuring");
        }
}
); 


const Course = require ("./course.model");