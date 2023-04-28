const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const GARDIEN = sequelize.define('GARDIEN',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        NOM:{
            type:Sequelize.STRING,
            required:true,
            allowNull:false,
            len:[6,20]
        },
        TAILLE:{
            type:Sequelize.INTEGER,
            required:true,
            allowNull:false,
            len:[6,100]
        },
        IMAGE:{
            type:Sequelize.STRING,
            required:true,
            allowNull:false,
            len:[6,100]
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

    GARDIEN.associate = function(models) {
        GARDIEN.belongsTo(models.PAYS, {
            foreignKey: 'ID_PAYS',
            as: 'pays'
        });
        GARDIEN.hasMany(models.GARDIEN_PARTICIPER_CM, {
            foreignKey: 'ID_GARDIEN',
            sourceKey: 'ID'
        });
        GARDIEN.hasMany(models.GARDER_MATCH, {
            foreignKey: 'ID_GARDIEN',
            sourceKey: 'ID'
        });
        GARDIEN.hasMany(models.REMPLACER_GARDIEN, {
            foreignKey: 'ID_GARDIEN',
            sourceKey: 'ID'
        });
        GARDIEN.hasMany(models.REMPLACER_GARDIEN, {
            foreignKey: 'ID_REMPLACANT',
            sourceKey: 'ID'
        });
    };
   

    return GARDIEN;
}


