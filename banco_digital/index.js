    const express = require("express");
    const cors = require("cors");
    const router=express.Router()
    const app = express();
    app.use(express.json());
    app.use(cors());

    const usuario = require("./rotas/routes.js");
    app.use(usuario);

    const cliente = require("./rotas/routes.js");
    app.use(cliente);

    const transacao = require("./rotas/routes.js");
    app.use(transacao);


    app.use("/",router);
    app.listen(3000,()=>{
        console.log("ta dando certo");
    })