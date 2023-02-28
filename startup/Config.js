module.exports = function(){
const config = require('config');
if(!config.get('JwtKey')){
    console.log('ERROR ENV variable not set....');
    process.exit(1);
}
}