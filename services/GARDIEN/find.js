const db = require('../../models');

conndb=require('../../models');

async function findGardienByID(id){
    return await db.GARDIEN.findOne({
        attributes:[
            'ID',
            'NOM',
            'IMAGE',
            'ID_PAYS'
        ],
        where:{
            ID:id
        }
    });
}

module.exports={
    findGardienByID
}