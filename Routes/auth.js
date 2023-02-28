const express = require('express');
const config = require('config');
const lodash = require('lodash');
const bcrypt = require('bcrypt');
const {User, ValidateUser} = require('../models/Users');
const jwt = require('jsonwebtoken');
const route = express.Router();

route.post('/',async(req,res)=>{
    const {error}= ValidateUser(req.body);
    if(error)
    {
       return  res.send(error);
    }
    else{
        const userData = lodash.pick(req.body,['name','email','password']);
        const isExistUser= await User.findOne({email:userData.email})
        if(!isExistUser){
          return  res.status(404).send('Invalid username or password');
        }
        const validPassword = await bcrypt.compare(userData.password,isExistUser.password)
        if(!validPassword){
           return  res.send('Invalid UserName or Password');
        }
        else{
            // JWT(Json web token) is a long String which is to identify the user like lisence for calling api 
            const key=config.get('JwtKey');
            const jsonToken = isExistUser.generateToken();
             res.set("X-AuthToken") .send(jsonToken);
        }
    }
})

module.exports.auth=route;