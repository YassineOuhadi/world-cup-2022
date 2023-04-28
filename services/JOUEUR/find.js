const db = require('../../models');
const Fuse = require('fuse.js');
conndb=require('../../models');

async function findPlayerByID(id){
    return await db.JOUEUR.findOne({
        attributes:[
            'ID',
            'NOM',
            'IMAGE',
            'CLUB',
            'CAPS',
            'DATE_NAIS',
            'ID_PAYS'
        ],
        include: [{
            model: db.TYPE_JOUEUR,
            as: 'position',
            attributes: ['ID', 'LIBELLE']
            },
            {
                model: db.PAYS,
            as: 'pays',
            attributes: ['ID', 'NOM']
            }
       ],
        where:{
            ID:id
        }
    });
}


async function findPlayersBy(str) {
    const players = await db.JOUEUR.findAll({
        attributes: [
            'ID',
            'NOM',
            'IMAGE',
            'ID_PAYS'
        ],
        include: [{
            model: db.TYPE_JOUEUR,
            as: 'position',
            attributes: ['ID', 'LIBELLE']
        }]
    });

    //return players.filter(player => player.NOM.toLowerCase().includes(str.toLowerCase()));
    const fuse = new Fuse(players, {
        keys: ['NOM']
    });

    return fuse.search(str).map(result => result.item);
}


module.exports={
    findPlayerByID,findPlayersBy
}