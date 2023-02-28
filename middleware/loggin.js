const logger = (req,res,next)=>{
    console.log('logggingg....');
    next();
}
module.exports=logger;