const bcrypt = require('bcrypt');
const hashing = async (val)=>{
    return new Promise((resolve,reject)=>{
        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(val,salt).then((result)=>{
            resolve(result);
        })
    })
}
// const decript = async (val)=>{
//     return await bcrypt.compare()
// }
module.exports=hashing;