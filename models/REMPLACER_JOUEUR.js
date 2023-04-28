const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const REMPLACER_JOUEUR = sequelize.define('REMPLACER_JOUEUR',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        MIN_REMPLACEMENT:{
            type: Sequelize.INTEGER
        },
        ID_REMPLACANT: {
            type: Sequelize.INTEGER,
            references: {
              model: 'JOUEUR',
              key: 'ID'
            }
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

    REMPLACER_JOUEUR.associate = function(models) {
        REMPLACER_JOUEUR.belongsTo(models.JOUEUR, {
            foreignKey: 'ID_REMPLACANT',
            as: 'remplacant'
        });
        REMPLACER_JOUEUR.belongsTo(models.MATCH, {
            foreignKey: 'ID_MATCH',
            as: 'match'
        });
        REMPLACER_JOUEUR.belongsTo(models.JOUEUR, {
            foreignKey: 'ID_JOUEUR',
            as: 'joueur'
        });
    };
   

    return REMPLACER_JOUEUR;
}

