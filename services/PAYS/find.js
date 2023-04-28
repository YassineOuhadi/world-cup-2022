const db = require('../../models');
const Fuse = require('fuse.js');
conndb=require('../../models');
var moment = require('moment');
async function findCountryByID(ID){
    if(!ID) throw new error('Match not found');
    return await db.PAYS.findOne({
        attributes:[
            'ID',
            'NOM',
            'DRAPAU'
        ],
        where: { 
            //DATE_MATCH:moment().format('DD-MMM-YYYY')
            ID:ID
        }
    });
}


async function findCountriesBy(str){
    const countries = await db.PAYS.findAll({
        attributes:[
            'ID',
            'NOM',
            'DRAPAU'
        ]
    });

    const fuse = new Fuse(countries, {
        keys: ['NOM']
    });

    return fuse.search(str).map(result => result.item);
}

module.exports={
    findCountryByID,findCountriesBy
}