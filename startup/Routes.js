const express = require('express');
const courses = require('../Routes/courses');
const home = require('../Routes/home');
const courseDetails = require('../Routes/courseDetails');
const {route:users} = require('../Routes/Users');
const {auth} = require('../Routes/auth');
module.exports= function(App){
App.use(express.json());
App.use('/api/courses',courses);
App.use('/api/coursesdetails',courseDetails);
App.use('/',home);
App.use('/api/users',users);
App.use('/api/auth',auth);
}