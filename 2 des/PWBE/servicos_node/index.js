const express = require("express");
const cors = require("cors");
const router=express.Router()
const app = express();
app.use(express.json());
app.use(cors());

const servicos = require("./rotas/servicos.js");
    app.use(servicos);

app.use("/",router);
app.listen(3000,()=>{
    console.log("ta dando certo");
})