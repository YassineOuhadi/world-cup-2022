const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const METAN = sequelize.define('METAN',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        NUM_METAN:{
            type: Sequelize.INTEGER
        },
        DUREE:{
            type: Sequelize.INTEGER
        },
        ID_MATCH:{
            type: Sequelize.INTEGER,
            references: {
              model: 'MATCH',
              key: 'ID'
            }
        }
    },{
        freezeTableName: true
    });

    METAN.associate = function(models) {
        METAN.belongsTo(models.MATCH, {
            foreignKey: 'ID_MATCH',
            as: 'match'
        });
    };
   

    return METAN;
}


