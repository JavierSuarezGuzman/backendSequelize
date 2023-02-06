const express = require("express");
const cors = require('cors');

const sequelize = require("./db/database");
const dato = require("./routes/dato");

const app = express();
const port = process.env.PORT || 3030;


(async () => {
    try{
        await sequelize.authenticate(); //esto devuelve una promesa, por eso está dentro del async
        await sequelize.sync();
        console.log("Conectado a la bbdd");
    }catch (error){
        throw new Error(error);
    }
})();

//middlewares
app.use(express.json()); //recibe la información
app.use(cors()); //habilita a externos a hacer solicitudes a esta API

app.listen(port, () => {
    console.log("Conectado al servidor en el puerto ", port);
});

//Vista raíz
app.use(dato);
app.get("/", (req,res)=>{
    res.send("<center><h1>Bienvenid@ a mi API con <br> "+
    "NodeJS, ExpressJS, Sequalize & MySQL</h1></center>");
});

