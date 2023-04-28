const db = require('../../models');

conndb=require('../../models');

async function findPinaltyByMatch(id_match){
    return await db.PINALTY.findAll({
        attributes:[
            'ID',
            'MIN_PINALTY',
            'ID_TYPE_PENALTY',
            'ID_MATCH',
            'ID_JOUEUR'
        ],
        include: [
            {
                model: db.JOUEUR,
                as: 'joueur',
                attributes: ['ID','NOM','IMAGE','ID_PAYS']
            }
        ],
        where:{
            ID_MATCH:id_match
        }                     
    });
}



module.exports={
    findPinaltyByMatch
}