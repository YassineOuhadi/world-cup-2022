
const db = require('../../models');

conndb=require('../../models');

async function findFirstPhase(id){
    return await db.PHASE.findOne({
        attributes:[
            'ID',
            'ID_TYPE_PHASE',
            'ID_COUPE_MONDE'
        ],
        where:{
            ID_COUPE_MONDE:id,
            ID_TYPE_PHASE:1
        }                     
    });
}



module.exports={
    findFirstPhase
}