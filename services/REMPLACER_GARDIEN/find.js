const db = require('../../models');

conndb=require('../../models');

async function findRemplacementGuardians(id_match){
    return await db.REMPLACER_GARDIEN.findAll({
        attributes:[
            'ID',
            'MIN_REMPLACEMENT',
            'ID_REMPLACANT',
            'ID_MATCH',
            'ID_GARDIEN'
        ],
        include: [
            {
                model: db.GARDIEN,
                as: 'remplacant',
                attributes: ['ID','NOM','IMAGE','ID_PAYS']
            },
            {
                model: db.GARDIEN,
                as: 'gardien',
                attributes: ['ID','NOM','IMAGE','ID_PAYS']
            }
        ],
        where:{
            ID_MATCH:id_match
        }                     
    });
}



module.exports={
    findRemplacementGuardians
}