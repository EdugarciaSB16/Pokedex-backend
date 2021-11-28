/**
 * Controlador donde realiza la logica de la aplicación
 * 
 */
// Dependencias
require('dotenv').config();
// Modelos
const Pokemons = require('../models/Pokemons');

module.exports.getPokemons = (req, res, next) => {
    const { name } = req.query;

    if (name.length > 0) {
        Pokemons.find({
            name: {
                $regex: name,
                $options: 'i',
            },
        })
            .then((pokemon) => {
                res.status(201).json(pokemon);
            })
            .catch(() => next);
    } else {
        Pokemons.find({})
            .then((pokemon) => {
                res.status(201).json(pokemon);
            })
            .catch(() => next);
    }
};

module.exports.getPokemon = (req, res, next) => {
    const { id } = req.params;

    Pokemons.find({ number: id })
        .then((pokemon) => {
            res.status(200).json(pokemon);
        })
        .catch(() => next);
};
