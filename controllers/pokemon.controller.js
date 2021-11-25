require('dotenv').config();
const Pokemons = require('../models/Pokemons');

module.exports.getPokemons = (req, res, next) => {
    Pokemons.find({})
        .limit(20)
        .then((pokemon) => {
            res.status(201).json(pokemon);
        })
        .catch(() => next);
};

module.exports.getPokemon = (req, res, next) => {
    const { id } = req.params;

    Pokemons.findById(id)
        .then((pokemon) => {
            res.status(200).json(pokemon);
        })
        .catch(() => next);
};
