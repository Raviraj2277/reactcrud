const mongoose = require("mongoose");
var CourseSchema = new mongoose.Schema({

    courseName:{
        type : String,
        require : "Required" 
                 },
    courseId :{
        type: Number
                } ,
    courseDuration:{
        type:String
                    },
    courseFees:{
        type:String 

             }

                                    });

mongoose.model("Course",CourseSchema)