const db = require('../../models');

conndb=require('../../models');
var moment = require('moment');
async function findArbitre(){
    return await db.ARBITRER.findAll({
        attributes:[
            'ID',
            'ID_ARBITRE',
            'ID_MATCH'
        ],
        include: [
            {
                model: db.ARBITRE,
                as: 'arbitre',
                attributes: ['ID', 'NOM','ID_TYPE_ARBITRE'],
                include:[
                    {
                        model: db.TYPE_ARBITRE,
                        as: 'type_arbitre',
                        attributes: ['ID', 'LIBELLE']
                    }
                ]
            }
        ]                        
    });
}



module.exports={
    findArbitre
}