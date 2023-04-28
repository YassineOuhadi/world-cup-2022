const db = require('../../models');

conndb=require('../../models');

async function findGuardiansByMatch(id_match){
    return await db.GARDER_MATCH.findAll({
        attributes:[
            'ID',
            'MIN_ENTREE',
            'ID_MATCH',
            'ID_GARDIEN'
        ],
        include: [
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
    findGuardiansByMatch
}