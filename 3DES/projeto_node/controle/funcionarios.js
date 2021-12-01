const { con } = require("./bdconnect.js")
const get = (req, ress)=>{
    let string = 'select * from funcionarios'
    con.query(string, (err, result)=>{
        req.json(result)
    })  
}




const post = (req, ress)=>{
    res.json(req.body)
}

module.exports = {
    get,
    post
}