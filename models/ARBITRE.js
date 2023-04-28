const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const ARBITRE = sequelize.define('ARBITRE',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        NOM:{
            type:Sequelize.STRING,
            required:true,
            allowNull:false,
            len:[6,50]
        },
        ID_TYPE_ARBITRE:{
            type: Sequelize.INTEGER,
            references: {
              model: 'TYPE_ARBITRE',
              key: 'ID'
            }
        }
    },{
        freezeTableName: true
    });
   
    ARBITRE.associate = function(models) {
        ARBITRE.hasMany(models.ARBITRER, {
            foreignKey: 'ID_ARBITRE',
            sourceKey: 'ID'
        });
        ARBITRE.belongsTo(models.TYPE_ARBITRE, {
            foreignKey: 'ID_TYPE_ARBITRE',
            as: 'type_arbitre'
        });
    };

    return ARBITRE;
}


