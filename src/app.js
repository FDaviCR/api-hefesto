const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json());

const errorMiddleware = require('./middlewares/errorMiddleware');

const logRoutes = require('./routes/logRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const autenticacaoRoutes = require('./routes/autenticacaoRoutes');
const empresaRoutes = require('./routes/empresaRoutes');
const cargoRoutes = require('./routes/cargoRoutes');
const potencialClienteRoutes = require('./routes/potencialClienteRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const funcionarioRoutes = require('./routes/funcionarioRoutes');

app.use('/empresas', empresaRoutes);
app.use('/cargos', cargoRoutes);
app.use('/potenciais-clientes', potencialClienteRoutes);
app.use('/clientes', clienteRoutes);
app.use('/funcionarios', funcionarioRoutes);
app.use('/autenticacao', autenticacaoRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/logs', logRoutes);

app.use(errorMiddleware);

sequelize.sync();

module.exports = app;