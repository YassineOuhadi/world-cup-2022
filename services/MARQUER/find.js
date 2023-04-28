const db = require('../../models');

conndb=require('../../models');

async function findGoalsByMatch(id_match){
    return await db.MARQUER.findAll({
        attributes:[
            'ID',
            'MIN_BIT',
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
    findGoalsByMatch
}