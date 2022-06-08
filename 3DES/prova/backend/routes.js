const express = require('express');

const route = express.Router();

const ctrUsuario = require('./src/ctr/ctrUsuario');
const ctrcadastro = require('./src/ctr/Cadastro');
const ctrComentario = require('./src/ctr/ctrComentario');

route.post('/login', ctrUsuario.login)

route.post('/usuario', ctrUsuario.create);
route.get('/usuario', ctrUsuario.read);
route.put('/usuario/', ctrUsuario.update);
route.delete('/usuario/:id', ctrUsuario.del);

route.post('/cadastro', ctrcadastro.create);
route.get('/cadastro', ctrcadastro.read);
route.get('/cadastro/:id', ctrcadastro.read);
route.post('/cadastro/titulo', ctrcadastro.readtitulo);
route.put('/cadastro/:id', ctrcadastro.update);
route.delete('/cadastro/:id', ctrcadastro.del);


route.post('/comentario', ctrComentario.create);
route.get('/comentario', ctrComentario.read);
route.get('/comentario/:id', ctrComentario.read);
route.put('/comentario/:id', ctrComentario.update);
route.delete('/comentario/:id', ctrComentario.del);


module.exports = route;



