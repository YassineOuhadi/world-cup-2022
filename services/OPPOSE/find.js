const db = require('../../models');

conndb=require('../../models');
var moment = require('moment');
async function findAll(){
    return await db.OPPOSE.findAll({
        attributes:[
            'ID',
            'RESULTAT',
            'ID_PAYS',
            'ID_MATCH'
        ],
        include: [
            {
                model: db.PAYS,
                as: 'pays',
                attributes: ['ID', 'NOM','DRAPAU']
            }
        ]                        
    });
}

async function findByMatch(ID){
    return await db.OPPOSE.findAll({
        attributes:[
            'ID',
            'RESULTAT',
            'ID_PAYS',
            'ID_MATCH'
        ],
        include: [
            {
                model: db.PAYS,
                as: 'pays',
                attributes: ['ID', 'NOM','DRAPAU']
            }
        ],
        where: { 
            ID_MATCH:ID
        }                       
    });
}



module.exports={
    findAll,findByMatch
}