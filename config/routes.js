const express = require('express');
const router = express.Router();
const PokemonController = require('../controllers/pokemon.controller');

// Endpoints
router.get('/pokemons', PokemonController.getPokemons);
router.get('/pokemons/:id', PokemonController.getPokemon);

module.exports = router;