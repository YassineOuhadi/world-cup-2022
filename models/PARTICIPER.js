const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const PARTICIPER = sequelize.define('PARTICIPER',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        IMAGE_EQUIPE:{
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
        },
        ID_ENTRAINEUR: {
            type: Sequelize.INTEGER,
            references: {
              model: 'ENTRAINEUER',
              key: 'ID'
            }
        }
    },{
        freezeTableName: true
    });

    PARTICIPER.associate = function(models) {
        PARTICIPER.belongsTo(models.COUPE_MONDE, {
            foreignKey: 'ID_COUPE_MONDE',
            as: 'coupe_monde'
        });
        PARTICIPER.belongsTo(models.PAYS, {
            foreignKey: 'ID_PAYS',
            as: 'pays'
        });
        PARTICIPER.belongsTo(models.ENTRAINEUR, {
            foreignKey: 'ID_ENTRAINEUR',
            as: 'entraineur'
        });
        PARTICIPER.belongsTo(models.POOL, {
            foreignKey: 'ID_POOL',
            as: 'pool'
        });
    };
   

    return PARTICIPER;
}


