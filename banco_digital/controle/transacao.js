const model = require("../modelo/model.js");
const { con } = require("./db/connect.js");

const transacao_get = (req, res) => {
    let string = "select * from tb_transacao"
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const transacao_post = (req, res) => {
    let string = `insert into tb_transacao values (default,
        ${req.body.data_transacao},
        "${req.body.tipo}",
        ${req.body.valor})`;
        console.log(string)
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.json(model.model_post(req.body, result.insertId))
        } else {
            res.status(304).end()
        }
    })
}
const transacao_update = (req, res) => {
    let string = `update tb_transacao set 
    data_transacao=${req.body.data_transacao},
    tipo="${req.body.tipo}",
    valor=${req.body.valor}
    where id_transacao =${req.body.id_transacao}`;
    console.log(string)
    con.query(string, (err, result) => {
        if (result.changedRows == 1) {
            res.json(req.body).end();
        } else {
            res.status(404).end();
        }
    })

}
const transacao_delete=(req, res)=>{
    let string="delete from tb_transacao where id_transacao = "+req.params.id;
    con.query(string,(err, result)=>{
        if(result.affectedRows==1){
            res.status(410).end()
        }else{
            res.status(404).end()
        }
    })
}

module.exports = {
    transacao_get, transacao_post, transacao_update, transacao_delete
}
