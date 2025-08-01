const express = require('express');

require('express-async-errors');

const routes = require('./routers/index');

const app = express();
app.use(express.json());

// Rotas a serem consumidas.
app.use(routes);

app.use((error, req, res, next) => {
  console.error(error.stack);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(500).send({ message: 'Deu Erro!' });
  next();
});

module.exports = app;