const db = require('../../models');

conndb=require('../../models');

async function findAvertissementByMatch(id_match){
    return await db.AVERTISSEMENT.findAll({
        attributes:[
            'ID',
            'MIN_AVERTISSEMENT',
            'ID_TYPE_CARTE',
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
    findAvertissementByMatch
}