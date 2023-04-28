const db =require('../../models');
const bcrypt=require('bcrypt');
async function create(user){
    if(!user.username) throw new Error("Error");
    if(!user.password) throw new Error("Error");
    return await db.user.create({
        ...user,
        password: bcrypt.hashSync(user.password,10)
    });
}
module.exports={
    create 
}