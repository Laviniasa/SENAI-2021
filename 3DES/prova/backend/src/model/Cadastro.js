const { Model, DataTypes } = require('sequelize');

class Cadastro extends Model {
    static init(datacon) {
        super.init(
            {
                descricao: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
                imagem: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
                nome: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                // id_usuario: {
                //     type: DataTypes.INTEGER,
                //     allowNull: false,
                //     references: {
                //         model: 'usuario',
                //         key: 'id',
                //     }
                // }
            },
            {
                sequelize: datacon,
                tableName: 'cadastros',
                modelName: 'cadastro',
            }
        );
    }

    static associate (models){
        // cadastro.hasMany(models.usuario, {foreignKey: 'id_usuario'})
        // cadastro.hasMany(models.comentario, {foreignKey: 'id_comentario'})
        // cadastro.hasMany(models.perfil, {foreignKey: 'id_cadastro'})
        // cadastro.hasMany(models.perfil, {foreignKey: 'id_cadastro'})
        //cadastro.belongsTo(models.leitura, {foreignKey: 'id_leitura'})
    }
}

module.exports = Cadastro;