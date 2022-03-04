const model = require("../modelo/model.js");
const { con } = require("./db/connect.js");

const administrador_get = (req, res) => {
    let string = "select * from tb_administrador"
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const administrador_post = (req, res) => {
    let string = `insert into tb_administrador values (
        default,"${req.body.nome}",
        "${req.body.cpf}",
        "${req.body.email}",
        "${req.body.imagem}",
        "${req.body.senha}")`;
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.json(model.model_post(req.body, result.insertId))
        } else {
            res.status(304).end()
        }
    })
}

const administrador_update = (req, res) => {
    let string = `update tb_administrador set 
    nome="${req.body.nome}",
    cpf=${req.body.cpf},
    email="${req.body.email}",
    imagem="${req.body.imagem}",
    senha="${req.body.senha}"
     where id_administrador=${req.body.id_administrador}`;
    con.query(string, (err, result) => {
        if (result.changedRows == 1) {
            res.json(req.body)
        } else {
            res.status(404).end()
        }

    })

}

const administrador_delete=(req, res)=>{
    let string="delete from tb_administrador where id_administrador = "+req.params.id;
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
    administrador_get, administrador_post, administrador_update, administrador_delete
}