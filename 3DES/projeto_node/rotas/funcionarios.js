const express = require('express');
const rotas = express.Router();
const controle = require('../controle/funcionarios.js');

rotas.get('/api', controle.pegar);
rotas.post('api/post', controle.enviar);
module.exports = rotas;