const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const AVERTISSEMENT = sequelize.define('AVERTISSEMENT',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        MIN_AVERTISSEMENT:{
            type: Sequelize.INTEGER
        },
        ID_TYPE_CARTE:{
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

    AVERTISSEMENT.associate = function(models) {
        AVERTISSEMENT.belongsTo(models.JOUEUR, {
            foreignKey: 'ID_JOUEUR',
            as: 'joueur'
        });
        AVERTISSEMENT.belongsTo(models.MATCH, {
            foreignKey: 'ID_MATCH',
            as: 'match'
        });
    };
    

    

    return AVERTISSEMENT;
}


