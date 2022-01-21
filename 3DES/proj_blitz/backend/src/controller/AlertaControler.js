const Alerta = require ('../model/Alerta');

const create = async (req, res) => {
    const data = req.body;

    constret = await Alerta.create(data);

    res.json(ret);
}

const read = async (req, res) => {
    const id = req. params.id;

    const filtro = {};

    if(id !== undefined) filtro = {where: {id: id}};

    const ret = await Alerta.findAll(filtro);

    res.json(ret);

}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Alerta.update(data, {where: {id: id}});

    ret = await Alerta.findAll({where: {id: id}});

    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;

    const ret = await Alerta.destroy({where: {id: id}});

    if(ret == 1){
        res.json({id: id});
    }else{
        res.status(400).send();
    }
    (ret == 1) ? res.json({id: id}) : res.status(400).send;
}

module.exports ={
    create,
    update,
    remove,
    read,
}