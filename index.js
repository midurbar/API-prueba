const express = require('express')
const app = express()
const {Poblacion} = require('./models')


app.get("/", function (req, res) {
    res.json("hola");
})
//Corregido poblaciones

app.get("/poblaciones", function (req, res) {
    Poblacion.findAll()
    .then(poblaciones => res.json(poblaciones))
    .catch(err => res.json(err))
})

app.get("/poblaciones/:id", function (req, res) {
    const {id} = req.params;
    Poblacion.findOne({where: {id}})
    .then(poblacion =>{ 
        if (poblacion) res.json(poblacion)
        else res.status(404).json("Poblacion no registrada")
    })
    .catch(err => res.json(err))
})

app.post("/poblaciones", function (req, res) {
    const poblacion = JSON.parse(req.body);
    Poblacion.create(poblacion)
    .then(poblacion => res.status(201).json(poblacion))
    .catch(err => res.json(err))
})


app.listen(3000)