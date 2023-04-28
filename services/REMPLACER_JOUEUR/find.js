const db = require('../../models');

conndb=require('../../models');

async function findRemplacementPlayers(id_match){
    return await db.REMPLACER_JOUEUR.findAll({
        attributes:[
            'ID',
            'MIN_REMPLACEMENT',
            'ID_REMPLACANT',
            'ID_MATCH',
            'ID_JOUEUR'
        ],
        include: [
            {
                model: db.JOUEUR,
                as: 'remplacant',
                attributes: ['ID','NOM','IMAGE','ID_PAYS']
            },
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
    findRemplacementPlayers
}