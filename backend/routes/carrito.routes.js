module.exports = app => {
    const carrito = require("../controllers/carrito.controller")
    const auth = require("../controllers/auth.js");

    var upload = require('../multer/upload');

    var router = require("express").Router();

    router.post("/", upload.single('file'), carrito.create);
    router.post("/", carrito.create);
    router.get("/", carrito.findAll);
    router.get("/:id", carrito.findOne);
    router.delete("/:id", carrito.delete);
    router.delete("/", carrito.deleteAll);

    app.use("/api/carrito", router);
}
