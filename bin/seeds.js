/**
 * Configuración para insertar los pokémons a la base de datos
 * Ejecutar el comando npm run seeds
 */

// Dependencias
const mongoose = require('mongoose');
// Modelos
const Pokemons = require('../models/Pokemons');
const pokemons_data = require('../data/pokemons');
// Configuraciones
require('dotenv').config();
require('../config/db.config');

mongoose.connection.once('open', () => {
    console.info(
        `*** Connected to the database ${mongoose.connection.db.databaseName} ***`
    );
    Promise.all([Pokemons.deleteMany()])
        .then(() => {
            Pokemons.insertMany(pokemons_data);
        })
        .then(() => console.info('Pokemons added successfully'))
        .catch((e) => console.error(e));
});
