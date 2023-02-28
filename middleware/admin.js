const admin = (req,res,next)=>{
if(!req.user.isAdmin)
{
   return  res.status(401).send("Not allowed");
} 
next();
}
module.exports.admin = admin;