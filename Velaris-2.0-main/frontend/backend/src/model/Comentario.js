const { Model, DataTypes } = require('sequelize');

class Comentario extends Model {
    static init(datacon) {
        super.init(
            {
                comentario: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },

                id_usuario: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'usuario',
                        key: 'id',
                    }
                }
            },
            {
                sequelize: datacon, 
                tableName: 'comentarios',
                modelName: 'comentario',
            }
        );
    }

    static associate (models){
        Comentario.hasMany(models.usuario, {foreignKey: 'id_usuario'})
        // Comentario.hasMany(models.livro, {foreignKey: 'id_livro'})


    }
}

module.exports = Comentario;