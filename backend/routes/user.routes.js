module.exports = app => {
    const users = require("../controllers/user.controller");

    var router = require("express").Router();

    router.post("/", users.newUser);
    // router.post("", users.newUser); //--> ojo si da error
    router.post("/login", users.loginUser);
    

    app.use("/api/user", router);
}