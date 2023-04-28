const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const MARQUER = sequelize.define('MARQUER',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        MIN_BIT:{
            type: Sequelize.INTEGER
        },
        ID_JOUEUR: {
            type: Sequelize.INTEGER,
            references: {
              model: 'JOUEUR',
              key: 'ID'
            }
        },
        ID_METAN: {
            type: Sequelize.INTEGER,
            references: {
              model: 'METAN',
              key: 'ID'
            }
        }
    },{
        freezeTableName: true
    });

    MARQUER.associate = function(models) {
        MARQUER.belongsTo(models.JOUEUR, {
            foreignKey: 'ID_JOUEUR',
            as: 'joueur'
        });
        MARQUER.belongsTo(models.MATCH, {
            foreignKey: 'ID_MATCH',
            as: 'match'
        });
    };
    

    

    return MARQUER;
}


