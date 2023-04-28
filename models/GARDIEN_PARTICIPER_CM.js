const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const GARDIEN_PARTICIPER_CM = sequelize.define('GARDIEN_PARTICIPER_CM',{
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

    GARDIEN_PARTICIPER_CM.associate = function(models) {
        GARDIEN_PARTICIPER_CM.belongsTo(models.COUPE_MONDE, {
            foreignKey: 'ID_COUPE_MONDE',
            as: 'coupe_monde'
        });
        GARDIEN_PARTICIPER_CM.belongsTo(models.GARDIEN, {
            foreignKey: 'ID_GARDIEN',
            as: 'gardien'
        });
    };
   

    return GARDIEN_PARTICIPER_CM;
}


