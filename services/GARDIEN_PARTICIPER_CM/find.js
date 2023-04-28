const db = require('../../models');

conndb=require('../../models');

async function findParticipationGardiens(id_coupe_monde,id_pays){
    return await db.GARDIEN_PARTICIPER_CM.findAll({
        attributes:[
            'ID',
            'ID_COUPE_MONDE',
            'ID_GARDIEN'
        ],
        include: [
            {
                model: db.GARDIEN,
                as: 'gardien',
                attributes: ['ID','NOM','IMAGE','ID_PAYS'],
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
    findParticipationGardiens
}