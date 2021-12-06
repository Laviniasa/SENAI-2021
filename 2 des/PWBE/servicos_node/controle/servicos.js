const model = require("../modelo/servicos.js")
const { con } = require("./db/connect.js");

const servicos_get = (req, res) => {
    let string = "select * from servicos"
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const servicos_post = (req, res) => {
    let string = `insert into servicos values (default,"${req.body.prestador}",${req.body.val_hora},${req.body.horas_trabalhadas})`;
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.json(model.model_post(req.body, result.insertId))
        } else {
            res.status(304).end()
        }
    })
}

const servicos_update = (req, res) => {
    let string = `update servicos set prestador = "${req.body.prestador}",val_hora=${req.body.val_hora},horas_trabalhadas=${req.body.horas_trabalhadas} where id =${req.body.id}`;
    con.query(string, (err, result) => {
        if (result.changedRows == 1) {
            res.json(req.body)
        } else {
            res.status(404).end()
        }

    })

}

const servicos_delete=(req, res)=>{
    let string="delete from servicos where id = "+req.params.id;
    con.query(string,(err, result)=>{
        if(result.affectedRows==1){
            res.status(410).end()
        }else{
            res.status(404).end()
        }
    })
}

module.exports = {
    servicos_get, servicos_post, servicos_update, servicos_delete
}