const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const REMPLACER_GARDIEN = sequelize.define('REMPLACER_GARDIEN',{
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
              model: 'GARDIEN',
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
        ID_GARDIEN: {
            type: Sequelize.INTEGER,
            references: {
              model: 'GARDIEN',
              key: 'ID'
            }
        }
    },{
        freezeTableName: true
    });

    REMPLACER_GARDIEN.associate = function(models) {
        REMPLACER_GARDIEN.belongsTo(models.GARDIEN, {
            foreignKey: 'ID_REMPLACANT',
            as: 'remplacant'
        });
        REMPLACER_GARDIEN.belongsTo(models.MATCH, {
            foreignKey: 'ID_MATCH',
            as: 'match'
        });
        REMPLACER_GARDIEN.belongsTo(models.GARDIEN, {
            foreignKey: 'ID_GARDIEN',
            as: 'gardien'
        });
    };
   

    return REMPLACER_GARDIEN;
}

