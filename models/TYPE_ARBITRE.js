const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const TYPE_ARBITRE = sequelize.define('TYPE_ARBITRE',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        LIBELLE:{
            type:Sequelize.STRING,
            required:true,
            allowNull:false,
            len:[6,50]
        }
    },{
        freezeTableName: true
    });
   
    TYPE_ARBITRE.associate = function(models) {
        TYPE_ARBITRE.hasMany(models.ARBITRE, {
            foreignKey: 'ID_TYPE_ARBITRE',
            sourceKey: 'ID'
        });
    };

    return TYPE_ARBITRE;
}


