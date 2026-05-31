const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json());

const errorMiddleware = require('./middlewares/errorMiddleware');

const usuarioRoutes = require('./routes/usuarioRoutes');
const autenticacaoRoutes = require('./routes/autenticacaoRoutes');
const logRoutes = require('./routes/logRoutes');

app.use(errorMiddleware);

app.use('/autenticacao', autenticacaoRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/logs', logRoutes);


// Sincronizar banco de dados (dev)
sequelize.sync();

module.exports = app;