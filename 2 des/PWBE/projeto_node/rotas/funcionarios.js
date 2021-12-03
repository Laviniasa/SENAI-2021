//Importação do express
const express = require('express');
//Faz o gerenciamento dos metodos HTTP
const rotas = express.Router();

//Importação do controle dos funcionarios
const controle = require('../controle/funcionarios.js');

//Metodo HTTP com link pós DNS que executa o controle
rotas.get('/api', controle.pegar);
rotas.get('/api/:matricula', controle.pegarid);
rotas.get('/api/calc/all', controle.calcirrf);
rotas.post('/api/post', controle.enviar);
rotas.put('/api/put', controle.atualizar);
rotas.delete('/api/delete/:matricula', controle.apagar);

//Exporta as rotas para o arquivo principal
module.exports = rotas;