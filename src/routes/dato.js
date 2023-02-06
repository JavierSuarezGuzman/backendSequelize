const router = require("express").Router();

const Dato = require("../models/Datos");

//test
router.get("/r", (req,res)=> {
    res.json([]);
});
//test

//Crear
router.post("/crear", async (req,res)=> {
    const { dato } = req.body;
    if(!dato) {
        return res.status(204).json({
            error: "Escribe algo",
        });// Cuando le dejo el 204 no imprime error
    }
    const usuario = await Dato.create({ dato });
    res.json(usuario);
});
/*Otra forma
    const { dato } = req.body;
    if(!dato) {
        return res.status(204).json({
            error: "Escribe algo",
        });// Cuando le dejo el 204 no imprime error
    }
    return res.status(201).json({
        dato,
        "msg": "creao",
    });
});*/
/*Forma más simple
router.post("/crear", (req,res)=> {
    const { dato } = req.body;
    res.json({
        dato,
        msg: "creao",
    });
});
*/

//Listar
router.get("/listar", async (req,res)=> {
    const datos = await Dato.findAll();
    res.json(datos);
});

//Buscar
router.get("/buscar/:id", async (req,res)=> {
    const { id } = req.params;
    const dato = await Dato.findByPk(id);
    res.json(dato);
});

//Actualizar
router.put("/actualizar/:id", async (req,res)=> {
    const {id} = req.params;
    const {body} = req;
    const dato = await Dato.findByPk(id);
    await dato.update(body);
    res.json( dato );
});

//Borrar
router.delete("/borrar/:id", async (req,res)=> {
    const {id} = req.params;
    const dato = await Dato.findByPk(id);
    await dato.destroy();
    res.json( dato );
});

module.exports = router;