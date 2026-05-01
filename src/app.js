const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.use(errorMiddleware);

// sincroniza banco (dev)
sequelize.sync();

module.exports = app;