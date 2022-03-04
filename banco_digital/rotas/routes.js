const express = require("express");
const route= express.Router();
const controleAdministrador = require("../controle/administrador.js");
const controleCartao = require("../controle/cartao.js");
const controleCliente = require("../controle/cliente.js");
const controleConta = require("../controle/conta.js");
const controlePix = require("../controle/pix.js");
const controleTransacao = require("../controle/transacao.js");
const controleUsuario = require("../controle/usuario.js");


//rota administrador
route.post("/api/post/administrador",controleAdministrador.administrador_post);
route.get("/api/administrador",controleAdministrador.administrador_get);
route.put("/api/put/administrador",controleAdministrador.administrador_update)
route.delete("/api/del/administrador/:id",controleAdministrador.administrador_delete)

//rota cartao   
route.post("/api/post/cartao",controleCartao.cartao_post);
route.get("/api/cartao",controleCartao.cartao_get);
route.put("/api/put/cartao",controleCartao.cartao_update);
route.delete("/api/del/cartao/:id",controleCartao.cartao_delete)

//rota clientes
route.post("/api/post/cliente",controleCliente.cliente_post);
route.get("/api/cliente",controleCliente.cliente_get);
route.put("/api/put/cliente",controleCliente.cliente_update);
route.delete("/api/del/cliente/:id",controleCliente.cliente_delete)

//rota conta
route.post("/api/post/conta",controleConta.conta_post);
route.get("/api/conta",controleConta.conta_get);
route.put("/api/put/conta",controleConta.conta_update);
route.delete("/api/del/conta/:id",controleConta.conta_delete)

//rota pix
route.post("/api/post/pix",controlePix.pix_post);
route.get("/api/pix",controlePix.pix_get);
route.put("/api/put/pix",controlePix.pix_update);
route.delete("/api/del/pix/:id",controlePix.pix_delete)

//rota transacao
route.post("/api/post/transacao", controleTransacao.transacao_post);
route.get("/api/transacao",controleTransacao.transacao_get);
route.put("/api/put/transacao",controleTransacao.transacao_update);
route.delete("/api/del/transacao/:id",controleTransacao.transacao_delete)


//rotas usuario
route.post("/api/post/usuario",controleUsuario.usuario_post);
route.get("/api/usuario",controleUsuario.usuario_get);
route.put("/api/put/usuario",controleUsuario.usuario_update);
route.delete("/api/del/usuario/:id",controleUsuario.usuario_delete)

module.exports = route
