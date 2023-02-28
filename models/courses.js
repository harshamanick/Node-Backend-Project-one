const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        validate :{
            validator :(v)=>{ v.length>8},
            message : 'min length should be 8',
            }
        },
    id:{
        type:String,
        required:true,
    }
});
const Courses = mongoose.model('course',schema);
module.exports=Courses;
