const db = require('../../models');

conndb=require('../../models');

async function findPlayersByMatch(id_match){
    return await db.JOUER_MATCH.findAll({
        attributes:[
            'ID',
            'MIN_ENTREE',
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
    findPlayersByMatch
}