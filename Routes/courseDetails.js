const express = require('express');
const Route = express.Router();
const {CoursesDetails, ValidateCourseDetail}= require('../models/courseDetails');
Route.get('/:id',async (req,res)=>{
    const data = CoursesDetails.find();
    res.send(data);
});
Route.post('/', async (req,res)=>{
   const validateData= ValidateCourseDetail(req.body);
   if(validateData.error){
    res.status(404);
    res.send(validateData.error);
   }else{
    try{
        const result = await new CoursesDetails(req.body);
        res.send(result);
    }catch(error){
        res.send(error);
    }
   }
})
module.exports=Route;