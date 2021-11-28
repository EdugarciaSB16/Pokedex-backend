/**
 * Enrutador con el listado de endpoints
 * 
 */
// Dependencias
const express = require('express');
const router = express.Router();
// Controladores
const PokemonController = require('../controllers/pokemon.controller');

// Endpoints
router.get('/pokemons', PokemonController.getPokemons);
router.get('/pokemon/:id', PokemonController.getPokemon);

module.exports = router;