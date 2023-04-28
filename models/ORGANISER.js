const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const ORGANISER = sequelize.define('ORGANISER',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        IMAGE:{
            type:Sequelize.STRING,
            required:true,
            allowNull:false,
            len:[6,100]
        },
        ID_COUPE_MONDE:{
            type: Sequelize.INTEGER,
            references: {
              model: 'COUPE_MONDE',
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

    ORGANISER.associate = function(models) {
        ORGANISER.belongsTo(models.PAYS, {
            foreignKey: 'ID_PAYS',
            as: 'pays'
        });
        ORGANISER.belongsTo(models.COUPE_MONDE, {
            foreignKey: 'ID_COUPE_MONDE',
            as: 'coupe_monde'
        });
    };
   

    return ORGANISER;
}


