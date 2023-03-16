module.exports = app => {
    const articles = require("../controllers/article.controller");
    const auth = require("../controllers/auth.js");
    var upload = require('../multer/upload');

    var router = require("express").Router();

    router.post("/", upload.single('file'), articles.create);
    router.post("/", articles.create);

    //IMPORTANTE - Protegemos esta ruta (se podría poner para cualquier otra)
    //router.get("/", auth.isAuthenticated, articles.findAll);

    router.get("/", articles.findAll);
    router.get("/:id", articles.findOne);
    router.get("/:collection", articles.findCollection);
    router.put("/:id", articles.update);
    router.delete("/:id", articles.delete);

    app.use("/api/article", router);
}
