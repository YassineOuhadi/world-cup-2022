const db = require('../../models');

conndb=require('../../models');
async function findByUsername(username){
    if(!username) throw new error('User not found');
    return await db.user.findOne({
        where:{
            username
        }
    });
}

async function findAll(){
    return await db.user.findAll({
        attributes:[
            'id',
            'username',
            'created_at'  
        ]
    });
}

module.exports={
    findByUsername,findAll
}