module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
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
            type:Sequelize.DOUBLE
        },
        filename: {
            type: Sequelize.STRING
        }
        
    }
    );

    return Article;
}
