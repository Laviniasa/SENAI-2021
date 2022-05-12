const { Model, DataTypes } = require('sequelize');

class Livro extends Model {
    static init(datacon) {
        super.init(
            {
                
                titulo: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                sinopse: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
                capa: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
                genero: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
                nome_caps: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                qnts_caps: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
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
                tableName: 'livros',
                modelName: 'livro',
            }
        );
    }

    static associate (models){
        Livro.hasMany(models.usuario, {foreignKey: 'id_usuario'})
        // Livro.hasMany(models.comentario, {foreignKey: 'id_comentario'})
        // Livro.hasMany(models.perfil, {foreignKey: 'id_livro'})
        // Livro.hasMany(models.perfil, {foreignKey: 'id_livro'})
        //Livro.belongsTo(models.leitura, {foreignKey: 'id_leitura'})
    }
}

module.exports = Livro;