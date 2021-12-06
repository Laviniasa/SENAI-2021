const express = require("express");
const route= express.Router();
const controle = require("../controle/servicos.js");
route.post("/api/post",controle.servicos_post);
route.get("/api",controle.servicos_get);
route.put("/api/put",controle.servicos_update)
route.delete("/api/del/:id",controle.servicos_delete)
module.exports = route