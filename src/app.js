const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json());

const errorMiddleware = require('./middlewares/errorMiddleware');

const logRoutes = require('./routes/logRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const autenticacaoRoutes = require('./routes/autenticacaoRoutes');
const empresaRoutes = require('./routes/empresaRoutes');

app.use('/empresas', empresaRoutes);

app.use('/autenticacao', autenticacaoRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/logs', logRoutes);

app.use(errorMiddleware);

// Sincronizar banco de dados (dev)
sequelize.sync();

module.exports = app;