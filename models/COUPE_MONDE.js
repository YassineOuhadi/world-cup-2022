const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const COUPE_MONDE = sequelize.define('COUPE_MONDE',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        EDDITION:{
            type:Sequelize.INTEGER
        }
    },{
        freezeTableName: true
    });
    COUPE_MONDE.associate = function(models) {
        COUPE_MONDE.hasMany(models.ORGANISER, {
            foreignKey: 'ID_COUPE_MONDE',
            sourceKey: 'ID'
        });
        COUPE_MONDE.hasMany(models.PARTICIPER, {
            foreignKey: 'ID_COUPE_MONDE',
            sourceKey: 'ID'
        });
        COUPE_MONDE.hasMany(models.JOUEUR_PARTICIPER_CM, {
            foreignKey: 'ID_COUPE_MONDE',
            sourceKey: 'ID'
        });
        COUPE_MONDE.hasMany(models.GARDIEN_PARTICIPER_CM, {
            foreignKey: 'ID_COUPE_MONDE',
            sourceKey: 'ID'
        });
        COUPE_MONDE.hasMany(models.PHASE, {
            foreignKey: 'ID_COUPE_MONDE',
            sourceKey: 'ID'
        });

    };
    
    return COUPE_MONDE;
}