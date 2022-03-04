const model = require("../modelo/model.js");
const { con } = require("./db/connect.js");

const usuario_get = (req, res) => {
    let string = "select * from tb_usuario"
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const usuario_post = (req, res) => {
    let string = `insert into tb_usuario values ( default,
        ${req.body.data_usuario},
        "${req.body.nome}",
        "${req.body.senha}",    
        "${req.body.usuario}")`;
        console.log(string)
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.json(model.model_post(req.body, result.insertId))
        } else {
            res.status(304).end()
        }
    })
}

const usuario_update = (req, res) => {
    let string = `update tb_usuario set 
    nome="${req.body.nome}",
    senha="${req.body.senha}",
    usuario="${req.body.usuario}"
    where id_usuario =${req.body.id_usuario}`;

    con.query(string, (err, result) => {
        if (result.changedRows == 1) {
            res.json(req.body)
        } else {
            res.status(404).end()
        }

    })

}
const usuario_delete=(req, res)=>{
    let string="delete from tb_usuario where id_usuario = "+req.params.id;
    con.query(string,(err, result)=>{
        if(result.affectedRows==1){
            res.status(410).end()
        }else{
            res.status(404).end()
        }
    })
}

module.exports = {
    usuario_get, usuario_post, usuario_update, usuario_delete
}