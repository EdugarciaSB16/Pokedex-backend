/**
 * Modelo de datos de los pokémons
 * 
 */
// Dependencias
const mongoose = require('mongoose');

const pokemonScheme = mongoose.Schema({
    number: {
        type: Number,
        require: 'ID is required',
    },
    sprites: {
        type: Object,
        require: 'Sprites is required',
    },
    name: {
        type: String,
        require: 'Name is required',
    },
    type: {
        type: Array,
        require: 'Type is required',
    },
    total: {
        type: Number,
        require: 'Total is required',
    },
    hp: {
        type: Number,
        require: 'hp is required',
    },
    attack: {
        type: Number,
        require: 'Attack is required',
    },
    defense: {
        type: Number,
        require: 'Defense is required',
    },
    sp_atk: {
        type: Number,
        require: 'SpAtk is required',
    },
    sp_def: {
        type: Number,
        require: 'SpDef is required',
    },
    speed: {
        type: Number,
        require: 'Speed is required',
    },
    prev_evolution: {
        type: Array,
    },
    next_evolution: {
        type: Array,
    },
});

const Pokemons = mongoose.model('Pokemons', pokemonScheme);

module.exports = Pokemons;
