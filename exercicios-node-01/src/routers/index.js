const express = require('express');
// Caminho das rotas
const movieRouter = require('./movies.router');

// Inicializando Middlewares das rotas
const router = express.Router();

// Usando todas as rotas da nossa aplicação (Método para ser escalável)
router.use(movieRouter);

module.exports = router;