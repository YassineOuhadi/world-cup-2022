const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const JOUEUR_PARTICIPER_CM = sequelize.define('JOUEUR_PARTICIPER_CM',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        ID_COUPE_MONDE:{
            type: Sequelize.INTEGER,
            references: {
              model: 'COUPE_MONDE',
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

    JOUEUR_PARTICIPER_CM.associate = function(models) {
        JOUEUR_PARTICIPER_CM.belongsTo(models.COUPE_MONDE, {
            foreignKey: 'ID_COUPE_MONDE',
            as: 'coupe_monde'
        });
        JOUEUR_PARTICIPER_CM.belongsTo(models.JOUEUR, {
            foreignKey: 'ID_JOUEUR',
            as: 'joueur'
        });
    };
   

    return JOUEUR_PARTICIPER_CM;
}


