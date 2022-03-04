const model = require("../modelo/model.js");
const { con } = require("./db/connect.js");

const cliente_get = (req, res) => {
    let string = "select * from tb_cliente"
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const cliente_post = (req, res) => {
    let string = `insert into tb_cliente values (default,
        "${req.body.nome}",
        "${req.body.cpf}",
        "${req.body.rg}",
        "${req.body.email}",
        "${req.body.senha}",
        "${req.body.imagem}",
        "${req.body.telefone}")`;
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.json(model.model_post(req.body, result.insertId))
        } else {
            res.status(304).end()
        }
    })
}

const cliente_update = (req, res) => {
    let string = `update tb_cliente set nome="${req.body.nome}",cpf="${req.body.cpf}",rg="${req.body.rg}",usuario="${req.body.usuario}",email="${req.body.email}",senha="${req.body.senha}",telefone="${req.body.telefone}" where id_cliente=${req.body.id_cliente}`;
    con.query(string, (err, result) => {
        if (result.changedRows == 1) {
            res.json(req.body)
        } else {
            res.status(404).end()
        }

    })

}

const cliente_delete=(req, res)=>{
    let string="delete from tb_cliente where id_cliente = "+req.params.id;
    console.log(string)
     con.query(string,(err, result)=>{
         if(result.affectedRows==1){ 
           res.status(410).end()
         }else{
             res.status(404).end()
         }
    })
 }

module.exports = {
    cliente_get, cliente_post, cliente_update, cliente_delete
}