const db = require("../models");
const Carrito = db.carrito;
const Op = db.Sequelize.Op;



exports.create = (req, res) => {
    if (!req.body.name || !req.body.price || !req.body.collection || !req.body.size || !req.body.colour || !req.body.amount) {
        res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
    }

    const carrito = {
        name: req.body.name,
        price: req.body.price,
        collection: req.body.collection,
        size: req.body.size,
        colour: req.body.colour,
        amount: req.body.amount,
        filename: req.file ? req.file.filename : ""

    }
    Carrito.create(carrito).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió algún error al crear los datos del carrito"
            })
        });
};

exports.findAll = (req, res) => {
    Carrito.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió algún error al recuperar los datos del carrito"
            })
        })
};

exports.findAllActived = (req, res) => {
    Carrito.findAll({ where: { actived: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "¡Lo siento! No se ha encontrado el carrito"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Carrito.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: "¡Lo siento! No se ha encontrado el carrito"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "¡Lo siento! No se ha encontrado el carrito"
            })
        })
};

exports.update = (req, res) => {
    const id = req.params.id;

    Carrito.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Carrito modificado."
                });
            } else {
                res.send({
                    message: "No se puede modificar el carrito"
                });
            }
        })
        .catch(err => {
            console.log("error: ", err);
            res.status(500).send({
                message: "No se puede modificar el carrito"
            })
        })
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Carrito.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Carrito eliminado"
                });
            } else {
                res.send({
                    message: "Ha ocurrido un error al eliminar el carrito"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha ocurrido un error al eliminar el carrito"
            })
        })
};

exports.deleteAll = async (req, res) => {
    try {
        let data = await Carrito.destroy({
            where: {},
            truncate: true
        });
        return res.status(200).json({
            success: true,
            data: data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })
    }
};