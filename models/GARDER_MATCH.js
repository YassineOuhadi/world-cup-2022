const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const GARDER_MATCH = sequelize.define('GARDER_MATCH',{
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

    GARDER_MATCH.associate = function(models) {
        GARDER_MATCH.belongsTo(models.MATCH, {
            foreignKey: 'ID_MATCH',
            as: 'match'
        });
        GARDER_MATCH.belongsTo(models.GARDIEN, {
            foreignKey: 'ID_GARDIEN',
            as: 'gardien'
        });
    };
   

    return GARDER_MATCH;
}

