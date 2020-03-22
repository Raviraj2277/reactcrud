const mongoose = require ("mongoose") ;


mongoose.connect("mongodb://Localhost:27017/ravi",{useNewUrlParser:true}, (error)=>{
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

