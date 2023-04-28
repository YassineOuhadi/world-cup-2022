const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const JOUER_MATCH = sequelize.define('JOUER_MATCH',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        MIN_ENTREE:{
            type: Sequelize.INTEGER
        },
        ID_MATCH:{
            type: Sequelize.INTEGER,
            references: {
              model: 'MATCH',
              key: 'ID'
            }
        },
        ID_JOUEUR: {
            type: Sequelize.INTEGER,
            references: {
              model: 'JOUEUR',
              key: 'ID'
            }
        }
    },{
        freezeTableName: true
    });

    JOUER_MATCH.associate = function(models) {
        JOUER_MATCH.belongsTo(models.MATCH, {
            foreignKey: 'ID_MATCH',
            as: 'match'
        });
        JOUER_MATCH.belongsTo(models.JOUEUR, {
            foreignKey: 'ID_JOUEUR',
            as: 'joueur'
        });
    };
   

    return JOUER_MATCH;
}

