const { string, boolean } = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('joi');
const schema = new mongoose.Schema({
    name: String,
    email:{
        type:String,
        unique:true,
    },
    password:String,
    isAdmin: Boolean,
});
schema.methods.generateToken = function(){
    const key=config.get('JwtKey');
    const jsonToken = jwt.sign({_id:this._id, isAdmin: !!this.isAdmin},key);
    return jsonToken;
};
const User = mongoose.model('user',schema)

const ValidateUser =(data)=>{
    const schema = Joi.object({
        name: Joi.string().required(),
        email:Joi.string().required(),
        password:Joi.string().required(),
    })
    return schema.validate(data);
}
module.exports.User=User;
module.exports.ValidateUser=ValidateUser;