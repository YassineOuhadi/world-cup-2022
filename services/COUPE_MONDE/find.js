const db = require('../../models');

conndb=require('../../models');
var moment = require('moment');
async function findLastWorldCup(){

    const lastWc = await db.COUPE_MONDE.findOne({
        attributes: [
            [db.sequelize.fn('MAX', db.sequelize.col('EDDITION')), 'max']
        ]
    });

    //const lastEddition=lastWc.max;
    const lastEddition=22;

    return await db.COUPE_MONDE.findOne({
        attributes:[
            'ID',
            'EDDITION'
        ],
        where: { 
            EDDITION:lastEddition
        }
    });
}

async function findAllWorldCups(){

    return await db.COUPE_MONDE.findAll({
        attributes:[
            'ID',
            'EDDITION'
        ],
        order: [['EDDITION', 'DESC']]
    });
}

async function findWorldCupByID(id){

    return await db.COUPE_MONDE.findOne({
        attributes:[
            'ID',
            'EDDITION'
        ],
        where: { 
           ID:id
        }
    });
}

async function findAllGroups(id_coupe_monde){

    return await db.COUPE_MONDE.findOne({
        attributes:[
            'ID',
            'EDDITION'
        ],
        where: { 
           ID:id
        }
    });
}

module.exports={
    findLastWorldCup,findAllWorldCups,findWorldCupByID,findAllGroups
}