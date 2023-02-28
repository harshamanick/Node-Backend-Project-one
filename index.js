/** Express For Creating web App */
const express = require('express');
const App= express();
require('./startup/Routes')(App);
require('./startup/Config')();
require('./startup/Db')();
/** DEBUGG */
/** Middleware function */

/** configure  we can create config json for env like dev,test,production */
 /** ---> it will point out to the devlopment.json under config folder because NODE_ENV point to the devlopment */


/** Environment Variable accesed using process gloabal object*/
const port = process.env.PORT || 3000;

/** All the function in below methods are middleware function is nothing but function receive req,res,next either it will end response or call next to execute sequence function */

/** App now Listerning on port */
App.listen(port,()=>{
console.log(`listerning on port ${port}`)
})
