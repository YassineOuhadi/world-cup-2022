const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const PINALTY = sequelize.define('PINALTY',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        MIN_PINALTY:{
            type: Sequelize.INTEGER
        },
        ID_TYPE_PENALTY:{
            type: Sequelize.INTEGER
        },
        ID_JOUEUR: {
            type: Sequelize.INTEGER,
            references: {
              model: 'JOUEUR',
              key: 'ID'
            }
        },
        ID_MATCH: {
            type: Sequelize.INTEGER,
            references: {
              model: 'MATCH',
              key: 'ID'
            }
        }
    },{
        freezeTableName: true
    });

    PINALTY.associate = function(models) {
        PINALTY.belongsTo(models.JOUEUR, {
            foreignKey: 'ID_JOUEUR',
            as: 'joueur'
        });
        PINALTY.belongsTo(models.MATCH, {
            foreignKey: 'ID_MATCH',
            as: 'match'
        });
    };
    

    

    return PINALTY;
}


