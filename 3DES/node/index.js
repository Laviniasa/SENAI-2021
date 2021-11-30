const express = require('express');
const app = express();

const cors = require('cors'); //filtro para ver quem pode usar o back
app.use(cors());
app.use(express.json());

const mysql = require('mysql');
const con = mysql.createConnection({
    user: 'root', 
    host: 'localhost',
    database: 'irrf'
});

app.get('/api',(req, res)=>{
    let string = 'select * from funcionarios'
    con.query(string, (err, result)=>{
        res.json(result);
    })
})

app.listen(3000,()=>{
    console.log('Rodando na porta 3000')
}); // porta de servidor, normalmente usar acima de 1024