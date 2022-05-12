const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(datacon) {
        super.init(
            {
                nome: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },

                email: {
                    type: DataTypes.STRING(30),
                    allowNull: false,
                    validate: {
                        isEmail: {
                            msg: "Must be a valid email address",
                        }
                    }
                },

                senha: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },

                foto: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                }

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