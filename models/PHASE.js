const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const PHASE = sequelize.define('PHASE',{
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        DATE_DEBUT:{
            type:Sequelize.DATE,
            required:true,
            allowNull:false
        },
        DATE_FIN:{
            type:Sequelize.DATE,
            required:true,
            allowNull:false,
        },
        ID_TYPE_PHASE:{
            type: Sequelize.INTEGER,
            references: {
              model: 'TYPE_PHASE',
              key: 'ID'
            }
        },
        ID_COUPE_MONDE:{
            type: Sequelize.INTEGER,
            references: {
              model: 'COUPE_MONDE',
              key: 'ID'
            }
        }
    },{
        freezeTableName: true
    });

    PHASE.associate = function(models) {
        PHASE.belongsTo(models.COUPE_MONDE, {
            foreignKey: 'ID_COUPE_MONDE',
            as: 'coupe_monde'
        });
        PHASE.belongsTo(models.TYPE_PHASE, {
            foreignKey: 'ID_TYPE_PHASE',
            as: 'type_phase'
        });
        PHASE.hasMany(models.MATCH, {
            foreignKey: 'ID_PHASE',
            sourceKey: 'ID'
        });
        PHASE.hasMany(models.POOL, {
            foreignKey: 'ID_PHASE',
            sourceKey: 'ID'
        });
    };
   

    return PHASE;
}


