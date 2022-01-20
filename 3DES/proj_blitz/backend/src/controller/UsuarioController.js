const res = require('express/lib/response');
const Usuario = require('../model/Usuario');

const create = (req,) => {
    const data = req.body;

    const ret = Usuario.create(data);

    res.json(ret);
}

const read = (req,) => {
    const ret = Usuario.findAll();

    res.json(ret);
}

module.exports = {
    create,
    read,
}