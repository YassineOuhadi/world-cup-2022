const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const OPPOSE = sequelize.define('OPPOSE',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        RESULTAT:{
            type: Sequelize.INTEGER
        },
        ID_MATCH: {
            type: Sequelize.INTEGER,
            references: {
              model: 'MATCH',
              key: 'ID'
            }
        },
        ID_PAYS: {
            type: Sequelize.INTEGER,
            references: {
              model: 'PAYS',
              key: 'ID'
            }
        }
    },{
        freezeTableName: true
    });

    OPPOSE.associate = function(models) {
        OPPOSE.belongsTo(models.MATCH, {
            foreignKey: 'ID_MATCH',
            as: 'match'
        });
        OPPOSE.belongsTo(models.PAYS, {
            foreignKey: 'ID_PAYS',
            as: 'pays'
        });
    };
   

    return OPPOSE;
}


