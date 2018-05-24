const Sequelize = require('sequelize')
const sequelize = require('../db')

const Product = sequelize.define(
    'product',
    {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        picture: Sequelize.STRING,
        price: Sequelize.INTEGER,
        email: Sequelize.STRING,
        phonenumber: Sequelize.INTEGER,
    },
    {
        tableName: "products",
        timestamps: false
    }
)

module.exports = Product