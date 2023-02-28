const jwt = require('jsonwebtoken');
const config = require('config');
function authendicate(req,res,next){
    const token = req.header('X-AuthToken');
    if(!token)
    return res.send('token is required');
    try{
    const payload = jwt.verify(token,config.get('JwtKey'));
    req.user=payload;
    next();
    }
    catch(error){
        return res.send('Invalid Token');
    }
}
module.exports.auth=authendicate;