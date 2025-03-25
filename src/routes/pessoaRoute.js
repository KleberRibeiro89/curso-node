const express = require('express');
const pessoaController = require('../controllers/pessoaController');


const controller = new pessoaController();
const pessoaRoute = express.Router();


pessoaRoute.get('/api/v1/pessoa', controller.pegarTodos);

module.exports = pessoaRoute;