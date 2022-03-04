const model = require("../modelo/model.js");
const { con } = require("./db/connect.js");

const conta_get = (req, res) => {
    let string = "select * from tb_conta"
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const conta_post = (req, res) => {
    let string = `insert into tb_conta values (default,
        ${req.body.id_cliente},
        ${req.body.id_transacao},
        ${req.body.limite},
        ${req.body.numero_conta},
        ${req.body.saldo},
        "${req.body.tipo}")`;
    console.log(string) 
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.json(model.model_post(req.body, result.insertId))
        } else {
            res.status(304).end()
        }
    })
}

const conta_update = (req, res) => {
    let string = `update tb_conta set 
    limite=${req.body.limite},
    numero_conta=${req.body.numero_conta},
    saldo=${req.body.saldo},
    tipo="${req.body.tipo}" 
    where id_conta =${req.body.id_conta}`;

    con.query(string, (err, result) => {
        if (result.changedRows == 1) {
            res.json(req.body)
        } else {
            res.status(404).end()
        }

    })

}

const conta_delete=(req, res)=>{
    let string="delete from tb_conta where id_conta = "+req.params.id;
    con.query(string,(err, result)=>{
        if(result.affectedRows==1){
            res.status(410).end()
        }else{
            res.status(404).end()
        }
    })
}

module.exports = {
    conta_get, conta_post, conta_update, conta_delete
}