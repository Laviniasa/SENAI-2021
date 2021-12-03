//Importação da conexão do banco de dados
const {
    con
} = require('./bdconnect.js')
const modelo = require('../modelo/funcionario.js')

//Função que faz a requisição do banco de dados fazendo uso da conexão
const pegar = (req, res) => {
    let string = 'select * from funcionarios'
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const pegarid = (req, res) => {
    let string = `select * from funcionarios where matricula = ${req.params.matricula}`
    con.query(string, (err, result) => {
        if (result == "") {
            res.status(404).end()
        } else {
            res.json(result)
        }
    })
}

const calcirrf = (req, res) => {
    let string = 'select * from funcionarios'
    con.query(string, (err, result) => {
        let array = []
        result.forEach(e => {
            array.push(modelo.calcIRRF(e))
        })
        res.json(array)
    })
}


const enviar = (req, res) => {
    let nome_completo = "\"" + req.body.nome_completo + "\"";
    let data_desligamento = "\"" + req.body.data_desligamento + "\"";
    let ultimo_salario = req.body.ultimo_salario;
    let string = `insert into funcionarios(nome_completo, data_desligamento, ultimo_salario) values (${nome_completo}, ${data_desligamento}, ${ultimo_salario})`;
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.json(modelo.reformJson(req.body, result.insertId));
        } else {
            res.status(400).end();
        }
    })
}

const atualizar = (req, res) => {
    let matricula = req.body.matricula;
    let nome_completo = "\"" + req.body.nome_completo + "\"";
    let data_desligamento = "\"" + req.body.data_desligamento + "\"";
    let ultimo_salario = req.body.ultimo_salario;
    let string = `update funcionarios set nome_completo = ${nome_completo}, data_desligamento = ${data_desligamento}, ultimo_salario = ${ultimo_salario} where matricula = ${matricula}`;
    con.query(string, (err, result) => {
        if (result.changedRows == 1) {
            res.json(req.body)
        } else {
            res.status(404).end()
        }
    })
}

const apagar = (req, res) => {
    let string = `delete from funcionarios where matricula = ${req.params.matricula}`
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.status(410).end()
        } else {
            res.status(404).end()
        }
    })
}

//Exportação da função
module.exports = {
    pegar,
    enviar,
    atualizar,
    apagar,
    pegarid,
    calcirrf
}