const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("sequelize", "root", "", {
    host: "localhost",
    dialect: "mysql",

});


module.exports = sequelize;