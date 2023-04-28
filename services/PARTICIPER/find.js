const db = require('../../models');

conndb=require('../../models');
var moment = require('moment');

async function findParticipation(id_pays,id_coupe_monde){
    return await db.PARTICIPER.findOne({
        attributes:[
            'ID',
            'IMAGE_EQUIPE',
            'ID_PAYS',
            'ID_COUPE_MONDE',
            'ID_ENTRAINEUR'
        ],
        include: [
            {
                model: db.ENTRAINEUR,
                as: 'entraineur',
                attributes: ['ID','NOM','DATE_NAIS','IMAGE']
            },
            {
                model: db.PAYS,
                as: 'pays',
                attributes: ['ID','DRAPAU']
            }
        ],
        where:{
            ID_PAYS:id_pays,
            ID_COUPE_MONDE:id_coupe_monde
        }                     
    });
}

async function findAllParticipations(id_coupe_monde){
    return await db.PARTICIPER.findAll({
        attributes:[
            'ID',
            'IMAGE_EQUIPE',
            'ID_PAYS',
            'ID_COUPE_MONDE',
            'ID_ENTRAINEUR',
            'ID_POOL'
        ],
        include: [
            {
                model: db.ENTRAINEUR,
                as: 'entraineur',
                attributes: ['ID','NOM','DATE_NAIS','IMAGE']
            },
            {
                model: db.PAYS,
                as: 'pays',
                attributes: ['ID','NOM','DRAPAU']
            },
            {
                model: db.POOL,
                as: 'pool',
                attributes:['ID','NOM']
            }
        ],
        where:{
            ID_COUPE_MONDE:id_coupe_monde
        }                     
    });
}


module.exports={
    findParticipation,findAllParticipations
}