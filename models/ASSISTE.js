const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const ASSISTE = sequelize.define('ASSISTE',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        MIN_ASSISTE:{
            type: Sequelize.INTEGER
        },
        ID_JOUEUR: {
            type: Sequelize.INTEGER,
            references: {
              model: 'JOUEUR',
              key: 'ID'
            }
        },
        ID_MARQUANT: {
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

    ASSISTE.associate = function(models) {
        ASSISTE.belongsTo(models.JOUEUR, {
            foreignKey: 'ID_JOUEUR',
            as: 'joueur'
        });
        ASSISTE.belongsTo(models.JOUEUR, {
            foreignKey: 'ID_MARQUANT',
            as: 'marquant'
        });
        ASSISTE.belongsTo(models.MATCH, {
            foreignKey: 'ID_MATCH',
            as: 'match'
        });
    };
    

    

    return ASSISTE;
}


