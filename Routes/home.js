const express = require('express');
const courses =[{id:'1',name:'math'},{id:'2',name:'social'},{id:'3',name:'science'},{id:'4',name:'tamil'}];
const route = express.Router();
route.get('/',(req,res)=>{
    res.send(courses);
});
module.exports=route;