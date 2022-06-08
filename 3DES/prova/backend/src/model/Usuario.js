const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(datacon) {
        super.init(
            {
                

                senha: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                }

                // foto: {
                //     type: DataTypes.TEXT,
                //     allowNull: true,
                // }

            },
            {
                sequelize: datacon,
                tableName: 'usuarios',
                modelName: 'usuario',
            }
        );
    }

    static associate (models){
        //Usuario.hasMany(models.usuario, {foreignKey: 'id_usuario'})
        // Usuario.hasMany(models.atendente, {foreignKey: 'id_usuario'})
        // Usuario.belongsTo(models.follow, {foreignKey: 'id_seguidores'})
    }
}

module.exports = Usuario;