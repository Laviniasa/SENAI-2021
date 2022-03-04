const model = require("../modelo/model.js");
const { con } = require("./db/connect.js");

const cartao_get = (req, res) => {
    let string = "select * from tb_cartao"
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const cartao_post = (req, res) => {
    let string = `insert into tb_cartao values (
        default,"${req.body.tipo}",
        "${req.body.numero}",
        "${req.body.validade}",
        "${req.body.code}",
        "${req.body.saldo}",
        "${req.body.limmite}")`;
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.json(model.model_post(req.body, result.insertId))
        } else {
            res.status(304).end()
        }
    })
}

const cartao_update = (req, res) => {
    let string = `update tb_cartao set 
    tipo= "${req.body.tipo}",
    numero="${req.body.numero}",
    validade="${req.body.validade}",
    code="${req.body.code}",
    saldo="${req.body.saldo}",
    limite="${req.body.limite}"
     where id_cartao =${req.body.id_cartao}`;
    con.query(string, (err, result) => {
        if (result.changedRows == 1) {
            res.json(req.body)
        } else {
            res.status(404).end()
        }

    })

}

const cartao_delete=(req, res)=>{
    let string="delete from tb_cartao where id_cartao = "+req.params.id;
    con.query(string,(err, result)=>{
        if(result.affectedRows==1){
            res.status(410).end()
        }else{
            res.status(404).end()
        }
    })
}

module.exports = {
    cartao_get, cartao_post, cartao_update, cartao_delete
}