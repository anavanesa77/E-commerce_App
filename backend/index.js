require('dotenv').config();

const jwt = require('jsonwebtoken');
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

var path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

// OPCION A - BBDD creada, intentamos sincronización.
db.sequelize.sync()
    .then(() => {
        console.log("Base de datos conectada");
    })
    .catch((err) => {
        console.log("Base de datos no conectada");
    });

// OPCION B - BBDD no creada o queremos volver a generarla (ojo, perdemos datos!)
// db.sequelize.sync({ force: true }).then ( () => {
//     console.log("Borrando y re-sincronizando BBDD.");
// });    

app.get("/", (req, res) => {
    res.json({ message: "Bienvenida a tu tienda de moda." });
});

require("./routes/article.routes")(app);
require("./routes/user.routes")(app);
require("./routes/carrito.routes")(app);

app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}.`);
});
