const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const ENTRAINEUR = sequelize.define('ENTRAINEUR',{
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
        DATE_NAIS:{
            type:Sequelize.STRING,
            required:true,
            allowNull:false,
            len:[6,50]
        },
        IMAGE:{
            type:Sequelize.STRING,
            required:true,
            allowNull:false,
            len:[6,100]
        }
    },{
        freezeTableName: true
    });
   
    ENTRAINEUR.associate = function(models) {
        ENTRAINEUR.hasMany(models.PARTICIPER, {
            foreignKey: 'ID_ENTRAINEUR',
            sourceKey: 'ID'
        });
    };

    return ENTRAINEUR;
}


