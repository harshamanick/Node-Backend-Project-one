const mongoose = require('mongoose');
const Joi = require('joi');
const CoursesDetails = mongoose.model('CoursesDetail',mongoose.Schema({
    name:{
        type: String,
    },
    authorDetails:new mongoose.Schema({
        name:String,
        numberOfBooks:Number,
        Languages:[String],
    }),
}));
const ValidateCourseDetail =(data)=>{
    const schema = Joi.object({
        name:Joi.string().required(),
        authorDetails: Joi.object({
            name:Joi.string().required(),
            numberOfBooks:Joi.number().required(),
            Languages:Joi.array().items(Joi.string()),
        }),
    })
    return schema.validate(data);
}
module.exports.CoursesDetails=CoursesDetails;
module.exports.ValidateCourseDetail = ValidateCourseDetail;
