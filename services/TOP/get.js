const db = require('../../models');

conndb=require('../../models');

async function findTop(){
    // Find the top goal-scoring players by ID
    const topPlayers = await db.MARQUER.findAll({
        attributes: [
            [db.sequelize.fn('COUNT', db.sequelize.col('ID_JOUEUR')), 'count'],
            'ID_JOUEUR'
        ],
        group: ['ID_JOUEUR'],
        order: [[db.sequelize.col('count'), 'DESC']],
        limit: 10
    });

    // Extract the ID_JOUEUR values from the query result
    const playerIds = topPlayers.map(player => player.ID_JOUEUR);

    // Find the names of the players with the matching ID_JOUEUR values
    return await db.JOUEUR.findAll({
        attributes:[
            'ID',
            'NOM',
            'ID_PAYS'
        ],
        include: [{
            model: db.PAYS,
            as: 'pays',
            attributes: ['ID', 'NOM']
        }],
        where: {
            ID: playerIds
        },
        order: [db.sequelize.literal(`CASE ID
            ${playerIds.map((id, index) => `WHEN ${id} THEN ${index}`).join(' ')}
            END`)]
    });
}



module.exports={
    findTop
}