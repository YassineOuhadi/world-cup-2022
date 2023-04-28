const Sequelize=require('sequelize-oracle');
module.exports=(sequelize,DataTypes)=>{
    const POOL = sequelize.define('POOL',{
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

    POOL.associate = function(models) {
        POOL.belongsTo(models.PHASE, {
            foreignKey: 'ID_PHASE',
            as: 'phase'
        });
        POOL.hasMany(models.PARTICIPER, {
            foreignKey: 'ID_POOL',
            sourceKey: 'ID'
        });
    };
   

    return POOL;
}


