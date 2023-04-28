const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const PAYS = sequelize.define('PAYS',{
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
        DRAPAU:{
            type:Sequelize.STRING,
            required:true,
            allowNull:false,
            len:[6,100]
        }
    },{
        freezeTableName: true
    });
    PAYS.associate = function(models) {
        PAYS.hasMany(models.JOUEUR, {
            foreignKey: 'ID_PAYS',
            sourceKey: 'ID'
        });
        PAYS.hasMany(models.GARDIEN, {
            foreignKey: 'ID_PAYS',
            sourceKey: 'ID'
        });
        PAYS.hasMany(models.OPPOSE, {
            foreignKey: 'ID_PAYS',
            sourceKey: 'ID'
        });
        PAYS.hasMany(models.ORGANISER, {
            foreignKey: 'ID_PAYS',
            sourceKey: 'ID'
        });
        PAYS.hasMany(models.PARTICIPER, {
            foreignKey: 'ID_PAYS',
            sourceKey: 'ID'
        });
    };
    
    return PAYS;
}