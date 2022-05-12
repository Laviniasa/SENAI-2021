require('dotenv').config();
const Express = require('express');
const Cors = require('cors')

const Connection = require('./src/database/Connection.js');
// console.log(Connection)
const route = require('./routes');


const app = Express();

app.use(Cors());
app.use(Express.json())
app.use(route);

app.listen('7000', () => {
    console.log("Servidor ON na porta", '7000');
    Connection.sync();
})
