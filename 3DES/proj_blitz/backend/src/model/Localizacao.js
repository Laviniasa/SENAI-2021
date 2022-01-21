const { Model, DataTypes } = require('sequelize');

class Localizacao extends Model {
    static init(
        {
            coordenadas:{
                type: DataTypes.INTERGER,
            }
            },
            id_user,
           
            },
            id_alerta:{
                
            }
            horario,
            ativo,
            
        {
            sequelize: datacon,
            tableName: 'localizacoes',
            modelName: 'localizacao',
        }
    )
}