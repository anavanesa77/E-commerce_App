module.exports = (sequelize, Sequelize) => {
    const Carrito = sequelize.define("carrito", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        },
        collection: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.DOUBLE
        },
        colour: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.DOUBLE
        },
        filename: {
            type: Sequelize.STRING
        }

    }
    );

    return Carrito;
}