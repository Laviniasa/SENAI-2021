const cors = require('cors');
const express = require('express');

const router = express.Router();
const app = express();
app.use(cors());

const funcionarios = require('./rotas/funcionarios.js');
app.use(funcionarios)

app.use('/', router);
app.listen(3000, ()=>{
    console.log('listening on localhost:3000')
})