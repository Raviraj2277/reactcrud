const express = require ("express");
const mongoose = require("mongoose");

const router = express.Router();
const CourseModel= mongoose.model("Course")



 router.get("/add" ,(req,res)=>{
res.render("add-course")


 })
 router.post("/add" ,(req,res)=>{
    
    
    var course = new CourseModel();
     course.courseName=req.body.courseName;
     course.courseId="04";
     course.courseFees=req.body.courseFees;
     course.courseDuration=req.body.courseDuration;
     course.save((err, doc)=>{  
     if (!err){
        res.redirect("/course/list")
     }
     else{
         res.send("error occured")
     }
     
    });
    
     })

router.get("/list", (req,res)=>{

    
 


    CourseModel.find((err , docs )=>{
        if (!err){
            
            res.render("list", { data : docs })
        }
        else{
            res.send("fail")
        }
    })


});

module.exports = router;