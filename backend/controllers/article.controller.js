const db = require("../models");
const Article = db.article;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.name || !req.body.price || !req.body.collection || !req.body.size || !req.body.colour || !req.body.amount) {
        res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
    }

    const article = {
        name: req.body.name,
        price: req.body.price,
        collection: req.body.collection,    
        size: req.body.size,
        colour: req.body.colour,
        amount: req.body.amount,
        filename: req.file ? req.file.filename : ""
    }


    Article.create(article).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió algún error al crear los datos del articulo"
            })
        });
};

exports.findAll = (req, res) => {
    Article.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió algún error al recuperar los datos del artículo"
            })
        })
};

exports.findAllActived = (req, res) => {
    Article.findAll({ where: { actived: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "¡Lo siento! No se ha encontrado el artículo"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Article.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: "¡Lo siento! No se ha encontrado el artículo"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "¡Lo siento! No se ha encontrado el artículo"
            })
        })
};

exports.findCollection = (req, res) => {
    const collection = req.params.collection;

    Article.findByCollection(collection)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: "¡Lo siento! No se ha encontrado el artículo"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "¡Lo siento! No se ha encontrado el artículo"
            })
        })
};

exports.update = (req, res) => {
    const id = req.params.id;

    Article.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Artículo modificado."
                });
            } else {
                res.send({
                    message: "No se puede modificar el artículo"
                });
            }
        })
        .catch(err => {
            console.log("error: ", err);
            res.status(500).send({
                message: "No se puede modificar el artículo"
            })
        })
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Article.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Artículo eliminado"
                });
            } else {
                res.send({
                    message: "Ha ocurrido un error al eliminar el artículo"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha ocurrido un error al eliminar el artículo"
            })
        })
};