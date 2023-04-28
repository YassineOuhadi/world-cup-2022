const db = require('../../models');

conndb=require('../../models');

async function findAssistesByMatch(id_match){
    return await db.ASSISTE.findAll({
        attributes:[
            'ID',
            'MIN_ASSISTE',
            'ID_MATCH',
            'ID_JOUEUR',
            'ID_MARQUANT'
        ],
        include: [
            {
                model: db.JOUEUR,
                as: 'marquant',
                attributes: ['ID','NOM','IMAGE','ID_PAYS']
            }
        ],
        where:{
            ID_MATCH:id_match
        }                     
    });
}



module.exports={
    findAssistesByMatch
}