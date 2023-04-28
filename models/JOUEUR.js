const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const JOUEUR = sequelize.define('JOUEUR',{
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
        DATE_NAIS:{
            type:Sequelize.DATE,
            required:true,
            allowNull:false
        },
        IMAGE:{
            type:Sequelize.STRING,
            required:true,
            allowNull:false,
            len:[6,100]
        },
        CLUB:{
            type:Sequelize.STRING,
            required:true,
            allowNull:false,
            len:[6,100]
        },
        CAPS:{
            type: Sequelize.INTEGER,
        },
        POSITION: {
            type: Sequelize.INTEGER,
            references: {
              model: 'TYPE_JOUEUR',
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

    JOUEUR.associate = function(models) {
        JOUEUR.hasMany(models.MARQUER, {
            foreignKey: 'ID_JOUEUR',
            sourceKey: 'ID'
        });
        JOUEUR.belongsTo(models.PAYS, {
            foreignKey: 'ID_PAYS',
            as: 'pays'
        });
        JOUEUR.belongsTo(models.TYPE_JOUEUR, {
            foreignKey: 'POSITION',
            as: 'position'
        });
        JOUEUR.hasMany(models.JOUEUR_PARTICIPER_CM, {
            foreignKey: 'ID_JOUEUR',
            sourceKey: 'ID'
        });
        JOUEUR.hasMany(models.JOUER_MATCH, {
            foreignKey: 'ID_JOUEUR',
            sourceKey: 'ID'
        });
        JOUEUR.hasMany(models.REMPLACER_JOUEUR, {
            foreignKey: 'ID_JOUEUR',
            sourceKey: 'ID'
        });
        JOUEUR.hasMany(models.REMPLACER_JOUEUR, {
            foreignKey: 'ID_REMPLACANT',
            sourceKey: 'ID'
        });
        JOUEUR.hasMany(models.AVERTISSEMENT, {
            foreignKey: 'ID_JOUEUR',
            sourceKey: 'ID'
        });
        JOUEUR.hasMany(models.ASSISTE, {
            foreignKey: 'ID_JOUEUR',
            sourceKey: 'ID'
        });
        JOUEUR.hasMany(models.ASSISTE, {
            foreignKey: 'ID_MARQUANT',
            sourceKey: 'ID'
        });
        JOUEUR.hasMany(models.PINALTY, {
            foreignKey: 'ID_JOUEUR',
            sourceKey: 'ID'
        });
    };
   

    return JOUEUR;
}


