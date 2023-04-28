const db = require('../../models');

conndb=require('../../models');
var moment = require('moment');

async function findAllOrganisateurs(){
    return await db.ORGANISER.findAll({
        attributes:[
            'ID',
            'IMAGE',
            'ID_PAYS',
            'ID_COUPE_MONDE'
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



module.exports={
    findAllOrganisateurs
}