const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const TYPE_PHASE = sequelize.define('TYPE_PHASE',{
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
   
    TYPE_PHASE.associate = function(models) {
        TYPE_PHASE.hasMany(models.PHASE, {
            foreignKey: 'ID_TYPE_PHASE',
            sourceKey: 'ID'
        });
    };

    return TYPE_PHASE;
}


