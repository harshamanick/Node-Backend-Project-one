const  mongoose = require('mongoose');
mongoose.set('strictQuery',true);
module.exports= function(){
    mongoose.connect('mongodb://harsha:12345678a@ac-wmb8r1n-shard-00-00.wwgnp1f.mongodb.net:27017,ac-wmb8r1n-shard-00-01.wwgnp1f.mongodb.net:27017,ac-wmb8r1n-shard-00-02.wwgnp1f.mongodb.net:27017/courses?ssl=true&replicaSet=atlas-a0vhns-shard-0&authSource=admin&retryWrites=true&w=majority').then(result=>{
    console.log('connected.....');
}).catch(err=>{
    console.log('error....',err);
});
}
