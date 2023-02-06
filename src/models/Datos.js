const { DataTypes } = require("sequelize");
const sequelize = require("../db/database");


const Dato = sequelize.define("Datos", {
    dato: {
        type: DataTypes.STRING,
        unique: true, 
    },
    //aquí cuantas columnas tenga la tabla (creo)
});

module.exports = Dato;