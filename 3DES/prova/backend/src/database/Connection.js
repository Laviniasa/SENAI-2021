require('dotenv').config();
const {Sequelize} = require('sequelize');

const Usuario = require('../model/Usuario')
const Cadastro = require('../model/Cadastro')
const Comentario = require('../model/Comentario');


const sequelize = new Sequelize('velaris','root','',{
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});

const sync = () => {
    Usuario.init(sequelize);
    Cadastro.init(sequelize);
    Comentario.init(sequelize);
    

    Usuario.associate(sequelize.models);
    Cadastro.associate(sequelize.models);
    Comentario.associate(sequelize.models);

    sequelize.sync({force: false})
}

module.exports = {
    sync, sequelize
}
