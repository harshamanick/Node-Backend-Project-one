const express = require('express');
const lodash = require('lodash');
const bcrypt = require('bcrypt');
const {User, ValidateUser} = require('../models/Users');
const route = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const hashing = require('../Hasing/hash');
const {auth} = require('../middleware/auth');

route.get('/me',auth,async(req,res)=>{
    const id = req.user._id;
    try{
    const result = await User.findById(id);
    res.send(result);
    }
    catch(error){
        console.log(error);
        res.send(error);
    }
})
route.post('/',async(req,res)=>{
    const {error}= ValidateUser(req.body);
    if(error)
    {
        res.send(error);
    }
    else{
        const userData = lodash.pick(req.body,['name','email','password']);
        var isExistUser= await User.findOne({email:userData.email})
        if(isExistUser){
          return  res.status(404).send('User Already Exist');
        }
        userData.password = await hashing(userData.password);
        const user = new User(userData);
        const result = await user.save();
        const jsonToken = user.generateToken();
        res.set('X-AuthToken',jsonToken).send(result);
    }
})

module.exports.route=route;