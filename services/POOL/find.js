const db = require('../../models');

conndb=require('../../models');

async function findGroups(id){
    return await db.POOL.findAll({
        attributes:[
            'ID',
            'NOM',
            'ID_PHASE'
        ],
        include: [
            {
                model: db.PHASE,
                as: 'phase',
                attributes: ['ID','DATE_DEBUT','DATE_FIN','ID_TYPE_PHASE','ID_COUPE_MONDE'],
                include:[
                    {
                        model: db.TYPE_PHASE,
                        as: 'type_phase',
                        attributes: ['ID','NOM'],
                        where: {
                            ID:1,
                        }
                    }
                ],
                where: {
                    ID_COUPE_MONDE: id
                }
            }
        ]                 
    });
}


async function findGroupByID(id){
    return await db.POOL.findOne({
        attributes:[
            'ID',
            'NOM',
            'ID_PHASE'
        ],
        include: [
            {
                model: db.PHASE,
                as: 'phase',
                attributes: ['ID','DATE_DEBUT','DATE_FIN','ID_TYPE_PHASE','ID_COUPE_MONDE'],
                include:[
                    {
                        model: db.TYPE_PHASE,
                        as: 'type_phase',
                        attributes: ['ID','NOM'],
                        where: {
                            ID:1,
                        }
                    }
                ]
            }
        ],
        where: {
            ID: id
        }                
    });
}

module.exports={
    findGroups,findGroupByID
}