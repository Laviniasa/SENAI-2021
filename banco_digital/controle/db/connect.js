const mysql = require ("mysql");
const settings=require("./db.json");
const con = mysql.createConnection(settings.mysql);
module.exports={
    con
}