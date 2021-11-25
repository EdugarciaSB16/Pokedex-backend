const mongoose = require('mongoose');
const Pokemons = require('../models/Pokemons');
const pokemons_data = require('../data/pokemons');
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
