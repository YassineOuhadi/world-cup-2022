const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const TYPE_JOUEUR = sequelize.define('TYPE_JOUEUR',{
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
   
    TYPE_JOUEUR.associate = function(models) {
        TYPE_JOUEUR.hasMany(models.JOUEUR, {
            foreignKey: 'POSITION',
            sourceKey: 'ID'
        });
    };

    return TYPE_JOUEUR;
}


