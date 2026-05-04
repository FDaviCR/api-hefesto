const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json());

const errorMiddleware = require('./middlewares/errorMiddleware');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(errorMiddleware);

app.use('/auth', authRoutes);
app.use('/users', userRoutes);


// Sincronizar banco de dados (dev)
sequelize.sync();

module.exports = app;