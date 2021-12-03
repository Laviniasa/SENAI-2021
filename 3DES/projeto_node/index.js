//Importação das dependencias que gerenciam as rotas
const cors = require('cors');
const express = require('express');

//Variavel que faz tudo funcionar
const app = express();

//Estanciando o sistema de rotas
const router = express.Router();
//Faz o controle dos headers e body da rota
app.use(cors());
app.use(express.json());

//Importando o sistema de rotas para o arquivo pincipal
const funcionarios = require('./rotas/funcionarios.js');
//Fazendo uso das rotas no arquivo principal
app.use(funcionarios)

//Delimitando aonde sera as os links pós DNS
app.use('/', router);
//Faz com que o sistema tenha uma porta padrao e exibe menssagem de incialização
app.listen(3000, ()=>{
    console.log('listening on localhost:3000')
})