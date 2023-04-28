const db = require('../../models');

conndb=require('../../models');
var moment = require('moment');

async function findParticipationJoueurs(id_coupe_monde,id_pays){
    return await db.JOUEUR_PARTICIPER_CM.findAll({
        attributes:[
            'ID',
            'ID_COUPE_MONDE',
            'ID_JOUEUR'
        ],
        include: [
            {
                model: db.JOUEUR,
                as: 'joueur',
                attributes: ['ID','NOM','POSITION','IMAGE','ID_PAYS'],
                include: [
                    {
                        model: db.TYPE_JOUEUR,
                        as: 'position',
                        attributes: ['ID','LIBELLE']
                    }
                ],
                where:{
                    ID_PAYS:id_pays
                } 
            }
        ],
        where:{
            ID_COUPE_MONDE:id_coupe_monde
        }                     
    });
}



module.exports={
    findParticipationJoueurs
}