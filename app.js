/**
 * Módulo principal de la aplicación
 * 
 */
// Dependencias
const express = require('express');
const cors = require('cors');
const createError = require('http-errors');
const logger = require('morgan');
// Configuraciones
require('dotenv').config();
require('./config/db.config');

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());

// Routes
const routes = require('./config/routes');
app.use('/api', routes);

// Handle errors
app.use((req, res, next) => {
    next(createError(404, 'Route not found'));
});

const port = Number(process.env.PORT || 3001);

app.listen(port, () => {
    console.log(`Ready! Listen on port ${port}`);
});
