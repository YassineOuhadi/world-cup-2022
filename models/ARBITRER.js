const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const ARBITRER = sequelize.define('ARBITRER',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        ID_MATCH:{
            type: Sequelize.INTEGER,
            references: {
              model: 'MATCH',
              key: 'ID'
            }
        },
        ID_ARBITRE:{
            type: Sequelize.INTEGER,
            references: {
              model: 'ARBITRE',
              key: 'ID'
            }
        }
    },{
        freezeTableName: true
    });

    ARBITRER.associate = function(models) {
        ARBITRER.belongsTo(models.MATCH, {
            foreignKey: 'ID_MATCH',
            as: 'match'
        });
        ARBITRER.belongsTo(models.ARBITRE, {
            foreignKey: 'ID_ARBITRE',
            as: 'arbitre'
        });
    };
   

    return ARBITRER;
}


