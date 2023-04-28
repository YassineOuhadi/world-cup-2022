const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const STADE = sequelize.define('STADE',{
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
        }
    },{
        freezeTableName: true
    });
   
    STADE.associate = function(models) {
        STADE.hasMany(models.MATCH, {
            foreignKey: 'ID_STADE',
            sourceKey: 'ID'
        });
    };

    return STADE;
}