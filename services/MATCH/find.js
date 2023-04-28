const db = require('../../models');

conndb=require('../../models');
var moment = require('moment');
async function findMatch(){
    return await db.MATCH.findAll({
        attributes:[
            'ID',
            'DATE_MATCH',
            'HORAIRE_MATCH'
        ],
        include: [
            {
                model: db.STADE,
                as: 'stade',
                attributes: ['ID', 'NOM']
            }
        ],
        order: [['ID','DESC']]                       
    });
}
async function findMatchByID(ID){
    if(!ID) throw new error('Match not found');
    return await db.MATCH.findOne({
        attributes:[
            'ID',
            'DATE_MATCH',
            'HORAIRE_MATCH'
        ],
        include: [
            {
                model: db.STADE,
                as: 'stade',
                attributes: ['ID', 'NOM']
            }
        ],
        where: { 
            //DATE_MATCH:moment().format('DD-MMM-YYYY')
            ID:ID
        }
    });
}


async function findMatchsByPhase(id){
    return await db.MATCH.findAll({
        attributes:[
            'ID',
            'DATE_MATCH',
            'HORAIRE_MATCH',
            'ID_STADE',
            'ID_PHASE'
        ],
        include: [
            {
                model: db.STADE,
                as: 'stade',
                attributes: ['ID', 'NOM']
            },
            {
                model: db.PHASE,
                as: 'phase',
                attributes: ['ID', 'ID_COUPE_MONDE']
            }
        ],
        where:{
            ID_PHASE:id
        }
    });
}

module.exports={
    findMatch,findMatchByID,findMatchsByPhase
}