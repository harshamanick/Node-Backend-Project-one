const express = require('express');
const Courses = require('../models/courses');
const {auth} = require('../middleware/auth');
const {admin} = require('../middleware/admin');
const route = express.Router();

route.get('/:id',auth, async (req,res)=>{
    const id =req.params.id;
    try{
    const result = await Courses.find({id:id});
        res.status(200);
        res.send(result);
        console.log('Result', result);
    }catch(err){
        console.log('ERROR',err);
        res.send(500,err);
    }
})
route.post('/',auth,async(req,res)=>{

    if(req.body){
        const course =  new Courses(req.body);
        try{
        const data = await course.save();
        res.send(data);
        }catch(error){
            res.send(error);
        }

    }
})
route.delete('/:id',[auth,admin],async (req,res)=>{
    try{
    const result = await Courses.findByIdAndRemove(req.params.id,{new:true})
    return res.send(result);
    }catch(error){
       return  res.send(error);
    }
})
route.put('/:id', async (req,res)=>{
    try{
    const result =  await Courses.updateMany({id:id},
        {
        name:'mike',
        new: true,
        }
    );
    res.send(result);
    }catch(error){
        console.log('ERROR',error);
        res.send(error);
    }
})

module.exports=route;
