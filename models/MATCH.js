const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const MATCH = sequelize.define('MATCH',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        DATE_MATCH:{
            type:Sequelize.STRING,
            required:true,
            allowNull:false,
            len:[6,50]
        },
        HORAIRE_MATCH:{
            type:Sequelize.STRING,
            required:true,
            allowNull:false,
            len:[6,50]
        },
        ID_STADE:{
            type: Sequelize.INTEGER,
            references: {
              model: 'STADE',
              key: 'ID'
            }
        },
        ID_PHASE:{
            type: Sequelize.INTEGER,
            references: {
              model: 'PHASE',
              key: 'ID'
            }
        }
    },{
        freezeTableName: true
    });

    MATCH.associate = function(models) {
        MATCH.hasMany(models.ARBITRER, {
            foreignKey: 'ID_MATCH',
            sourceKey: 'ID'
        });
        MATCH.hasMany(models.OPPOSE, {
            foreignKey: 'ID_MATCH',
            sourceKey: 'ID'
        });
        MATCH.belongsTo(models.STADE, {
            foreignKey: 'ID_STADE',
            as: 'stade'
        });
        MATCH.belongsTo(models.PHASE, {
            foreignKey: 'ID_PHASE',
            as: 'phase'
        });
        MATCH.hasMany(models.JOUER_MATCH, {
            foreignKey: 'ID_MATCH',
            sourceKey: 'ID'
        });
        MATCH.hasMany(models.GARDER_MATCH, {
            foreignKey: 'ID_MATCH',
            sourceKey: 'ID'
        });
        MATCH.hasMany(models.REMPLACER_JOUEUR, {
            foreignKey: 'ID_MATCH',
            sourceKey: 'ID'
        });
        MATCH.hasMany(models.REMPLACER_GARDIEN, {
            foreignKey: 'ID_MATCH',
            sourceKey: 'ID'
        });
        MATCH.hasMany(models.METAN, {
            foreignKey: 'ID_MATCH',
            sourceKey: 'ID'
        });
        MATCH.hasMany(models.AVERTISSEMENT, {
            foreignKey: 'ID_MATCH',
            sourceKey: 'ID'
        });
        MATCH.hasMany(models.MARQUER, {
            foreignKey: 'ID_MATCH',
            sourceKey: 'ID'
        });
        MATCH.hasMany(models.ASSISTE, {
            foreignKey: 'ID_MATCH',
            sourceKey: 'ID'
        });
        MATCH.hasMany(models.PINALTY, {
            foreignKey: 'ID_MATCH',
            sourceKey: 'ID'
        });
    };
   

    return MATCH;
}


