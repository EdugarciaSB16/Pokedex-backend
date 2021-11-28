const pokemons = [
    {
        number: '1',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png',
            large: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
        },
        name: 'Bulbasaur',
        type: ['Grass', 'Poison'],
        total: 318,
        hp: 45,
        attack: 49,
        defense: 49,
        sp_atk: 65,
        sp_def: 65,
        speed: 45,
        next_evolution: [
            {
                number: '2',
                name: 'Ivysaur',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif',
            },
            {
                number: '3',
                name: 'Venusaur',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif',
            },
        ],
    },
    {
        number: '2',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ivysaur.png',
            large: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif',
        },
        name: 'Ivysaur',
        type: ['Grass', 'Poison'],
        total: 405,
        hp: 60,
        attack: 62,
        defense: 63,
        sp_atk: 80,
        sp_def: 80,
        speed: 60,
        prev_evolution: [
            {
                number: '1',
                name: 'Bulbasaur',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
            },
        ],
        next_evolution: [
            {
                number: '3',
                name: 'Venusaur',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif',
            },
        ],
    },
    {
        number: '3',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png',
            large: 'https://img.pokemondb.net/artwork/venusaur.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif',
        },
        name: 'Venusaur',
        type: ['Grass', 'Poison'],
        total: 525,
        hp: 80,
        attack: 82,
        defense: 83,
        sp_atk: 100,
        sp_def: 100,
        speed: 80,
        prev_evolution: [
            {
                number: '2',
                name: 'Ivysaur',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ivisaur.gif',
            },
        ],
    },
    {
        number: '4',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png',
            large: 'https://img.pokemondb.net/artwork/charmander.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
        },
        name: 'Charmander',
        type: ['Fire'],
        total: 309,
        hp: 39,
        attack: 52,
        defense: 43,
        sp_atk: 60,
        sp_def: 50,
        speed: 65,
        next_evolution: [
            {
                number: '5',
                name: 'Charmeleon',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif',
            },
        ],
    },
    {
        number: '5',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmeleon.png',
            large: 'https://img.pokemondb.net/artwork/charmeleon.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif',
        },
        name: 'Charmeleon',
        type: ['Fire'],
        total: 405,
        hp: 58,
        attack: 64,
        defense: 58,
        sp_atk: 80,
        sp_def: 65,
        speed: 80,
        prev_evolution: [
            {
                number: '4',
                name: 'Charmander',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
            },
        ],
        next_evolution: [
            {
                number: '6',
                name: 'Charizard',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',
            },
        ],
    },
    {
        number: '6',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png',
            large: 'https://img.pokemondb.net/artwork/charizard.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',
        },
        name: 'Charizard',
        type: ['Fire', 'Flying'],
        total: 534,
        hp: 78,
        attack: 84,
        defense: 78,
        sp_atk: 109,
        sp_def: 85,
        speed: 100,
        prev_evolution: [
            {
                number: '5',
                name: 'Charmeleon',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif',
            },
        ],
    },
    {
        number: '7',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png',
            large: 'https://img.pokemondb.net/artwork/squirtle.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
        },
        name: 'Squirtle',
        type: ['Water'],
        total: 314,
        hp: 44,
        attack: 48,
        defense: 65,
        sp_atk: 50,
        sp_def: 64,
        speed: 43,
        next_evolution: [
            {
                number: '8',
                name: 'Wartortle',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif',
            },
        ],
    },
    {
        number: '8',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wartortle.png',
            large: 'https://img.pokemondb.net/artwork/wartortle.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif',
        },
        name: 'Wartortle',
        type: ['Water'],
        total: 405,
        hp: 59,
        attack: 63,
        defense: 80,
        sp_atk: 65,
        sp_def: 80,
        speed: 58,
        prev_evolution: [
            {
                number: '7',
                name: 'Squirtle',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
            },
        ],
        next_evolution: [
            {
                number: '9',
                name: 'Blastoise',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif',
            },
        ],
    },
    {
        number: '9',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blastoise.png',
            large: 'https://img.pokemondb.net/artwork/blastoise.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif',
        },
        name: 'Blastoise',
        type: ['Water'],
        total: 530,
        hp: 79,
        attack: 83,
        defense: 100,
        sp_atk: 85,
        sp_def: 105,
        speed: 78,
        prev_evolution: [
            {
                number: '8',
                name: 'Wartortle',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif',
            },
        ],
    },
    {
        number: '10',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/caterpie.png',
            large: 'https://img.pokemondb.net/artwork/caterpie.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif',
        },
        name: 'Caterpie',
        type: ['Bug'],
        total: 195,
        hp: 45,
        attack: 30,
        defense: 35,
        sp_atk: 20,
        sp_def: 20,
        speed: 45,
        next_evolution: [
            {
                number: '11',
                name: 'Metapod',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif',
            },
        ],
    },
    {
        number: '11',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/metapod.png',
            large: 'https://img.pokemondb.net/artwork/metapod.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif',
        },
        name: 'Metapod',
        type: ['Bug'],
        total: 205,
        hp: 50,
        attack: 20,
        defense: 55,
        sp_atk: 25,
        sp_def: 25,
        speed: 30,
        prev_evolution: [
            {
                number: '10',
                name: 'Caterpie',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif',
            },
        ],
        next_evolution: [
            {
                number: '12',
                name: 'Butterfree',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif',
            },
        ],
    },
    {
        number: '12',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/butterfree.png',
            large: 'https://img.pokemondb.net/artwork/butterfree.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif',
        },
        name: 'Butterfree',
        type: ['Bug', 'Flying'],
        total: 395,
        hp: 60,
        attack: 45,
        defense: 50,
        sp_atk: 90,
        sp_def: 80,
        speed: 70,
        prev_evolution: [
            {
                number: '11',
                name: 'Metapod',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif',
            },
        ],
    },
    {
        number: '13',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weedle.png',
            large: 'https://img.pokemondb.net/artwork/weedle.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif',
        },
        name: 'Weedle',
        type: ['Bug', 'Poison'],
        total: 195,
        hp: 40,
        attack: 35,
        defense: 30,
        sp_atk: 20,
        sp_def: 20,
        speed: 50,
        next_evolution: [
            {
                number: '14',
                name: 'Kakuna',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif',
            },
        ],
    },
    {
        number: '14',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kakuna.png',
            large: 'https://img.pokemondb.net/artwork/kakuna.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif',
        },
        name: 'Kakuna',
        type: ['Bug', 'Poison'],
        total: 205,
        hp: 45,
        attack: 25,
        defense: 50,
        sp_atk: 25,
        sp_def: 25,
        speed: 35,
        prev_evolution: [
            {
                number: '13',
                name: 'Weedle',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif',
            },
        ],
        next_evolution: [
            {
                number: '15',
                name: 'Beedrill',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif',
            },
        ],
    },
    {
        number: '15',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beedrill.png',
            large: 'https://img.pokemondb.net/artwork/beedrill.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif',
        },
        name: 'Beedrill',
        type: ['Bug', 'Poison'],
        total: 395,
        hp: 65,
        attack: 90,
        defense: 40,
        sp_atk: 45,
        sp_def: 80,
        speed: 75,
        prev_evolution: [
            {
                number: '14',
                name: 'Kakuna',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif',
            },
        ],
    },
    {
        number: '16',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgey.png',
            large: 'https://img.pokemondb.net/artwork/pidgey.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif',
        },
        name: 'Pidgey',
        type: ['Normal', 'Flying'],
        total: 251,
        hp: 40,
        attack: 45,
        defense: 40,
        sp_atk: 35,
        sp_def: 35,
        speed: 56,
        next_evolution: [
            {
                number: '18',
                name: 'Pidgeot',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif',
            },
        ],
    },
    {
        number: '17',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeotto.png',
            large: 'https://img.pokemondb.net/artwork/pidgeotto.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif',
        },
        name: 'Pidgeotto',
        type: ['Normal', 'Flying'],
        total: 349,
        hp: 63,
        attack: 60,
        defense: 55,
        sp_atk: 50,
        sp_def: 50,
        speed: 71,
        prev_evolution: [
            {
                number: '16',
                name: 'Pidgey',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif',
            },
        ],
        next_evolution: [
            {
                number: '18',
                name: 'Pidgeot',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif',
            },
        ],
    },
    {
        number: '18',
        evolution: {
            name: 'Mega Pidgeot',
        },
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png',
            large: 'https://img.pokemondb.net/artwork/pidgeot.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif',
        },
        name: 'Pidgeot',
        type: ['Normal', 'Flying'],
        total: 579,
        hp: 83,
        attack: 80,
        defense: 80,
        sp_atk: 135,
        sp_def: 80,
        speed: 121,
        prev_evolution: [
            {
                number: '17',
                name: 'Pidgeotto',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif',
            },
        ],
    },
    {
        number: '19',
        evolution: {
            name: 'Alolan Rattata',
        },
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rattata.png',
            large: 'https://img.pokemondb.net/artwork/rattata.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif',
        },
        name: 'Rattata',
        type: ['Dark', 'Normal'],
        total: 253,
        hp: 30,
        attack: 56,
        defense: 35,
        sp_atk: 25,
        sp_def: 35,
        speed: 72,
        next_evolution: [
            {
                number: '20',
                name: 'Raticate',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif',
            },
        ],
    },
    {
        number: '20',
        evolution: {
            name: 'Alolan Raticate',
        },
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raticate.png',
            large: 'https://img.pokemondb.net/artwork/raticate.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif',
        },
        name: 'Raticate',
        type: ['Dark', 'Normal'],
        total: 413,
        hp: 75,
        attack: 71,
        defense: 70,
        sp_atk: 40,
        sp_def: 80,
        speed: 77,
        prev_evolution: [
            {
                number: '19',
                name: 'Rattata',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif',
            },
        ],
    },
    {
        number: '21',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spearow.png',
            large: 'https://img.pokemondb.net/artwork/spearow.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif',
        },
        name: 'Spearow',
        type: ['Normal', 'Flying'],
        total: 262,
        hp: 40,
        attack: 60,
        defense: 30,
        sp_atk: 31,
        sp_def: 31,
        speed: 70,
        next_evolution: [
            {
                number: '22',
                name: 'Fearow',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif',
            },
        ],
    },
    {
        number: '22',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fearow.png',
            large: 'https://img.pokemondb.net/artwork/fearow.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif',
        },
        name: 'Fearow',
        type: ['Normal', 'Flying'],
        total: 442,
        hp: 65,
        attack: 90,
        defense: 65,
        sp_atk: 61,
        sp_def: 61,
        speed: 100,
        prev_evolution: [
            {
                number: '21',
                name: 'Spearow',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif',
            },
        ],
    },
    {
        number: '23',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ekans.png',
            large: 'https://img.pokemondb.net/artwork/ekans.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif',
        },
        name: 'Ekans',
        type: ['Poison'],
        total: 288,
        hp: 35,
        attack: 60,
        defense: 44,
        sp_atk: 40,
        sp_def: 54,
        speed: 55,
        next_evolution: [
            {
                number: '24',
                name: 'Arbok',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif',
            },
        ],
    },
    {
        number: '24',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arbok.png',
            large: 'https://img.pokemondb.net/artwork/arbok.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif',
        },
        name: 'Arbok',
        type: ['Poison'],
        total: 448,
        hp: 60,
        attack: 95,
        defense: 69,
        sp_atk: 65,
        sp_def: 79,
        speed: 80,
        prev_evolution: [
            {
                number: '23',
                name: 'Ekans',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif',
            },
        ],
    },
    {
        number: '25',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikachu.png',
            large: 'https://img.pokemondb.net/artwork/pikachu.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
        },
        name: 'Pikachu',
        type: ['Electric'],
        total: 320,
        hp: 35,
        attack: 55,
        defense: 40,
        sp_atk: 50,
        sp_def: 50,
        speed: 90,
        next_evolution: [
            {
                number: '26',
                name: 'Raichu',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif',
            },
        ],
    },
    {
        number: '26',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raichu.png',
            large: 'https://img.pokemondb.net/artwork/raichu.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif',
        },
        name: 'Raichu',
        type: ['Electric'],
        total: 485,
        hp: 60,
        attack: 90,
        defense: 55,
        sp_atk: 90,
        sp_def: 80,
        speed: 110,
        prev_evolution: [
            {
                number: '25',
                name: 'Pikachu',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
            },
        ],
    },
    {
        number: '27',
        evolution: {
            name: 'Alolan Sandshrew',
        },
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandshrew.png',
            large: 'https://img.pokemondb.net/artwork/sandshrew.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif',
        },
        name: 'Sandshrew',
        type: ['Ice', 'Steel'],
        total: 300,
        hp: 50,
        attack: 75,
        defense: 90,
        sp_atk: 10,
        sp_def: 35,
        speed: 40,
        next_evolution: [
            {
                number: '28',
                name: 'Sandslash',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif',
            },
        ],
    },
    {
        number: '28',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandslash.png',
            large: 'https://img.pokemondb.net/artwork/sandslash.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif',
        },
        name: 'Sandslash',
        type: ['Ground'],
        total: 450,
        hp: 75,
        attack: 100,
        defense: 110,
        sp_atk: 45,
        sp_def: 55,
        speed: 65,
        prev_evolution: [
            {
                number: '27',
                name: 'Sandshrew',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif',
            },
        ],
    },
    {
        number: '29',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoran-f.png',
            large: 'https://img.pokemondb.net/artwork/nidoran-f.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif',
        },
        name: 'Nidoran♀',
        type: ['Poison'],
        total: 275,
        hp: 55,
        attack: 47,
        defense: 52,
        sp_atk: 40,
        sp_def: 40,
        speed: 41,
        next_evolution: [
            {
                number: '30',
                name: 'Nidorina',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif',
            },
        ],
    },
    {
        number: '30',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidorina.png',
            large: 'https://img.pokemondb.net/artwork/nidorina.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/nidorina.gif',
        },
        name: 'Nidorina',
        type: ['Poison'],
        total: 365,
        hp: 70,
        attack: 62,
        defense: 67,
        sp_atk: 55,
        sp_def: 55,
        speed: 56,
        prev_evolution: [
            {
                number: '29',
                name: 'Nidoran(Female)',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif',
            },
        ],
        next_evolution: [
            {
                number: '31',
                name: 'Nidoqueen',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif',
            },
        ],
    },
    {
        number: '31',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoqueen.png',
            large: 'https://img.pokemondb.net/artwork/nidoqueen.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif',
        },
        name: 'Nidoqueen',
        type: ['Poison', 'Ground'],
        total: 505,
        hp: 90,
        attack: 92,
        defense: 87,
        sp_atk: 75,
        sp_def: 85,
        speed: 76,
        prev_evolution: [
            {
                number: '29',
                name: 'Nidoran(Female)',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif',
            },
            {
                number: '30',
                name: 'Nidorina',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/nidorina.gif',
            },
        ],
    },
    {
        number: '32',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoran-m.png',
            large: 'https://img.pokemondb.net/artwork/nidoran-m.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif',
        },
        name: 'Nidoran♂',
        type: ['Poison'],
        total: 273,
        hp: 46,
        attack: 57,
        defense: 40,
        sp_atk: 40,
        sp_def: 40,
        speed: 50,
        next_evolution: [
            {
                number: '34',
                name: 'Nidoking',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif',
            },
        ],
    },
    {
        number: '33',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidorino.png',
            large: 'https://img.pokemondb.net/artwork/nidorino.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/nidorino.gif',
        },
        name: 'Nidorino',
        type: ['Poison'],
        total: 365,
        hp: 61,
        attack: 72,
        defense: 57,
        sp_atk: 55,
        sp_def: 55,
        speed: 65,
        prev_evolution: [
            {
                number: '32',
                name: 'Nidoran(Male)',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif',
            },
        ],
        next_evolution: [
            {
                number: '34',
                name: 'Nidoking',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/Nidoking.gif',
            },
        ],
    },
    {
        number: '34',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoking.png',
            large: 'https://img.pokemondb.net/artwork/nidoking.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif',
        },
        name: 'Nidoking',
        type: ['Poison', 'Ground'],
        total: 505,
        hp: 81,
        attack: 102,
        defense: 77,
        sp_atk: 85,
        sp_def: 75,
        speed: 85,
        prev_evolution: [
            {
                number: '33',
                name: 'Nidorino',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/nidorino.gif',
            },
        ],
    },
    {
        number: '35',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clefairy.png',
            large: 'https://img.pokemondb.net/artwork/clefairy.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif',
        },
        name: 'Clefairy',
        type: ['Fairy'],
        total: 323,
        hp: 70,
        attack: 45,
        defense: 48,
        sp_atk: 60,
        sp_def: 65,
        speed: 35,
        next_evolution: [
            {
                number: '36',
                name: 'Clefable',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif',
            },
        ],
    },
    {
        number: '36',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clefable.png',
            large: 'https://img.pokemondb.net/artwork/clefable.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif',
        },
        name: 'Clefable',
        type: ['Fairy'],
        total: 483,
        hp: 95,
        attack: 70,
        defense: 73,
        sp_atk: 95,
        sp_def: 90,
        speed: 60,
        prev_evolution: [
            {
                number: '35',
                name: 'Clefairy',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif',
            },
        ],
    },
    {
        number: '37',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vulpix.png',
            large: 'https://img.pokemondb.net/artwork/vulpix.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif',
        },
        name: 'Vulpix',
        type: ['Fire'],
        total: 299,
        hp: 38,
        attack: 41,
        defense: 40,
        sp_atk: 50,
        sp_def: 65,
        speed: 65,
        next_evolution: [
            {
                number: '38',
                name: 'Ninetales',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif',
            },
        ],
    },
    {
        number: '38',
        evolution: {
            name: 'Alolan Ninetales',
        },
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ninetales.png',
            large: 'https://img.pokemondb.net/artwork/ninetales.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif',
        },
        name: 'Ninetales',
        type: ['Ice', 'Fairy'],
        total: 505,
        hp: 73,
        attack: 67,
        defense: 75,
        sp_atk: 81,
        sp_def: 100,
        speed: 109,
        prev_evolution: [
            {
                number: '37',
                name: 'Vulpix',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif',
            },
        ],
    },
    {
        number: '39',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jigglypuff.png',
            large: 'https://img.pokemondb.net/artwork/jigglypuff.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',
        },
        name: 'Jigglypuff',
        type: ['Normal', 'Fairy'],
        total: 270,
        hp: 115,
        attack: 45,
        defense: 20,
        sp_atk: 45,
        sp_def: 25,
        speed: 20,
        next_evolution: [
            {
                number: '40',
                name: 'Wigglytuff',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif',
            },
        ],
    },
    {
        number: '40',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wigglytuff.png',
            large: 'https://img.pokemondb.net/artwork/wigglytuff.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif',
        },
        name: 'Wigglytuff',
        type: ['Normal', 'Fairy'],
        total: 435,
        hp: 140,
        attack: 70,
        defense: 45,
        sp_atk: 85,
        sp_def: 50,
        speed: 45,
        prev_evolution: [
            {
                number: '39',
                name: 'Jigglypuff',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',
            },
        ],
    },
    {
        number: '41',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zubat.png',
            large: 'https://img.pokemondb.net/artwork/zubat.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif',
        },
        name: 'Zubat',
        type: ['Poison', 'Flying'],
        total: 245,
        hp: 40,
        attack: 45,
        defense: 35,
        sp_atk: 30,
        sp_def: 40,
        speed: 55,
        next_evolution: [
            {
                number: '42',
                name: 'Golbat',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif',
            },
        ],
    },
    {
        number: '42',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golbat.png',
            large: 'https://img.pokemondb.net/artwork/golbat.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif',
        },
        name: 'Golbat',
        type: ['Poison', 'Flying'],
        total: 455,
        hp: 75,
        attack: 80,
        defense: 70,
        sp_atk: 65,
        sp_def: 75,
        speed: 90,
        prev_evolution: [
            {
                number: '41',
                name: 'Zubat',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif',
            },
        ],
    },
    {
        number: '43',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oddish.png',
            large: 'https://img.pokemondb.net/artwork/oddish.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif',
        },
        name: 'Oddish',
        type: ['Grass', 'Poison'],
        total: 320,
        hp: 45,
        attack: 50,
        defense: 55,
        sp_atk: 75,
        sp_def: 65,
        speed: 30,
        prev_evolution: [
            {
                number: '41',
                name: 'Zubat',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif',
            },
        ],
    },
    {
        number: '44',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gloom.png',
            large: 'https://img.pokemondb.net/artwork/gloom.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif',
        },
        name: 'Gloom',
        type: ['Grass', 'Poison'],
        total: 395,
        hp: 60,
        attack: 65,
        defense: 70,
        sp_atk: 85,
        sp_def: 75,
        speed: 40,
        prev_evolution: [
            {
                number: '43',
                name: 'Oddish',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif',
            },
        ],
        next_evolution: [
            {
                number: '45',
                name: 'Vileplume',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif',
            },
        ],
    },
    {
        number: '45',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vileplume.png',
            large: 'https://img.pokemondb.net/artwork/vileplume.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif',
        },
        name: 'Vileplume',
        type: ['Grass', 'Poison'],
        total: 490,
        hp: 75,
        attack: 80,
        defense: 85,
        sp_atk: 110,
        sp_def: 90,
        speed: 50,
        prev_evolution: [
            {
                number: '44',
                name: 'Gloom',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif',
            },
        ],
    },
    {
        number: '46',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/paras.png',
            large: 'https://img.pokemondb.net/artwork/paras.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif',
        },
        name: 'Paras',
        type: ['Bug', 'Grass'],
        total: 285,
        hp: 35,
        attack: 70,
        defense: 55,
        sp_atk: 45,
        sp_def: 55,
        speed: 25,
        next_evolution: [
            {
                number: '47',
                name: 'Parasect',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif',
            },
        ],
    },
    {
        number: '47',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/parasect.png',
            large: 'https://img.pokemondb.net/artwork/parasect.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif',
        },
        name: 'Parasect',
        type: ['Bug', 'Grass'],
        total: 405,
        hp: 60,
        attack: 95,
        defense: 80,
        sp_atk: 60,
        sp_def: 80,
        speed: 30,
        prev_evolution: [
            {
                number: '46',
                name: 'Paras',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif',
            },
        ],
    },
    {
        number: '48',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venonat.png',
            large: 'https://img.pokemondb.net/artwork/venonat.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/venonat.gif',
        },
        name: 'Venonat',
        type: ['Bug', 'Poison'],
        total: 305,
        hp: 60,
        attack: 55,
        defense: 50,
        sp_atk: 40,
        sp_def: 55,
        speed: 45,
        next_evolution: [
            {
                number: '49',
                name: 'Venomoth',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif',
            },
        ],
    },
    {
        number: '49',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venomoth.png',
            large: 'https://img.pokemondb.net/artwork/venomoth.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif',
        },
        name: 'Venomoth',
        type: ['Bug', 'Poison'],
        total: 450,
        hp: 70,
        attack: 65,
        defense: 60,
        sp_atk: 90,
        sp_def: 75,
        speed: 90,
        prev_evolution: [
            {
                number: '48',
                name: 'Venonat',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venonat.gif',
            },
        ],
    },
    {
        number: '50',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diglett.png',
            large: 'https://img.pokemondb.net/artwork/diglett.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif',
        },
        name: 'Diglett',
        type: ['Ground'],
        total: 265,
        hp: 10,
        attack: 55,
        defense: 25,
        sp_atk: 35,
        sp_def: 45,
        speed: 95,
        next_evolution: [
            {
                number: '51',
                name: 'Dugtrio',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif',
            },
        ],
    },
    {
        number: '51',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dugtrio.png',
            large: 'https://img.pokemondb.net/artwork/dugtrio.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif',
        },
        name: 'Dugtrio',
        type: ['Ground'],
        total: 425,
        hp: 35,
        attack: 100,
        defense: 50,
        sp_atk: 50,
        sp_def: 70,
        speed: 120,
        prev_evolution: [
            {
                number: '50',
                name: 'Diglett',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif',
            },
        ],
    },
    {
        number: '52',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meowth.png',
            large: 'https://img.pokemondb.net/artwork/meowth.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif',
        },
        name: 'Meowth',
        type: ['Normal'],
        total: 290,
        hp: 40,
        attack: 45,
        defense: 35,
        sp_atk: 40,
        sp_def: 40,
        speed: 90,
        next_evolution: [
            {
                number: '53',
                name: 'Persian',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif',
            },
        ],
    },
    {
        number: '53',
        evolution: {
            name: 'Alolan Persian',
        },
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/persian.png',
            large: 'https://img.pokemondb.net/artwork/persian.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif',
        },
        name: 'Persian',
        type: ['Dark'],
        total: 440,
        hp: 65,
        attack: 60,
        defense: 60,
        sp_atk: 75,
        sp_def: 65,
        speed: 115,
        prev_evolution: [
            {
                number: '52',
                name: 'Meowth',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif',
            },
        ],
    },
    {
        number: '54',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/psyduck.png',
            large: 'https://img.pokemondb.net/artwork/psyduck.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif',
        },
        name: 'Psyduck',
        type: ['Water'],
        total: 320,
        hp: 50,
        attack: 52,
        defense: 48,
        sp_atk: 65,
        sp_def: 50,
        speed: 55,
        next_evolution: [
            {
                number: '55',
                name: 'Golduck',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif',
            },
        ],
    },
    {
        number: '55',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golduck.png',
            large: 'https://img.pokemondb.net/artwork/golduck.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif',
        },
        name: 'Golduck',
        type: ['Water'],
        total: 500,
        hp: 80,
        attack: 82,
        defense: 78,
        sp_atk: 95,
        sp_def: 80,
        speed: 85,
        prev_evolution: [
            {
                number: '54',
                name: 'Psyduck',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif',
            },
        ],
    },
    {
        number: '56',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mankey.png',
            large: 'https://img.pokemondb.net/artwork/mankey.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif',
        },
        name: 'Mankey',
        type: ['Fighting'],
        total: 305,
        hp: 40,
        attack: 80,
        defense: 35,
        sp_atk: 35,
        sp_def: 45,
        speed: 70,
        next_evolution: [
            {
                number: '57',
                name: 'Primeape',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif',
            },
        ],
    },
    {
        number: '57',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/primeape.png',
            large: 'https://img.pokemondb.net/artwork/primeape.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif',
        },
        name: 'Primeape',
        type: ['Fighting'],
        total: 455,
        hp: 65,
        attack: 105,
        defense: 60,
        sp_atk: 60,
        sp_def: 70,
        speed: 95,
        prev_evolution: [
            {
                number: '56',
                name: 'Mankey',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif',
            },
        ],
    },
    {
        number: '58',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/growlithe.png',
            large: 'https://img.pokemondb.net/artwork/growlithe.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif',
        },
        name: 'Growlithe',
        type: ['Fire'],
        total: 350,
        hp: 55,
        attack: 70,
        defense: 45,
        sp_atk: 70,
        sp_def: 50,
        speed: 60,
        next_evolution: [
            {
                number: '59',
                name: 'Arcanine',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif',
            },
        ],
    },
    {
        number: '59',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arcanine.png',
            large: 'https://img.pokemondb.net/artwork/arcanine.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif',
        },
        name: 'Arcanine',
        type: ['Fire'],
        total: 555,
        hp: 90,
        attack: 110,
        defense: 80,
        sp_atk: 100,
        sp_def: 80,
        speed: 95,
        prev_evolution: [
            {
                number: '58',
                name: 'Growlithe',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif',
            },
        ],
    },
    {
        number: '60',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwag.png',
            large: 'https://img.pokemondb.net/artwork/poliwag.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif',
        },
        name: 'Poliwag',
        type: ['Water'],
        total: 300,
        hp: 40,
        attack: 50,
        defense: 40,
        sp_atk: 40,
        sp_def: 40,
        speed: 90,
        next_evolution: [
            {
                number: '61',
                name: 'Poliwhirl',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif',
            },
        ],
    },
    {
        number: '61',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwhirl.png',
            large: 'https://img.pokemondb.net/artwork/poliwhirl.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif',
        },
        name: 'Poliwhirl',
        type: ['Water'],
        total: 385,
        hp: 65,
        attack: 65,
        defense: 65,
        sp_atk: 50,
        sp_def: 50,
        speed: 90,
        prev_evolution: [
            {
                number: '60',
                name: 'Poliwag',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif',
            },
        ],
        next_evolution: [
            {
                number: '62',
                name: 'Poliwrath',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif',
            },
        ],
    },
    {
        number: '62',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwrath.png',
            large: 'https://img.pokemondb.net/artwork/poliwrath.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif',
        },
        name: 'Poliwrath',
        type: ['Water', 'Fighting'],
        total: 510,
        hp: 90,
        attack: 95,
        defense: 95,
        sp_atk: 70,
        sp_def: 90,
        speed: 70,
        prev_evolution: [
            {
                number: '61',
                name: 'Poliwhirl',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif',
            },
        ],
    },
    {
        number: '63',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/abra.png',
            large: 'https://img.pokemondb.net/artwork/abra.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif',
        },
        name: 'Abra',
        type: ['Psychic'],
        total: 510,
        hp: 90,
        attack: 95,
        defense: 95,
        sp_atk: 70,
        sp_def: 90,
        speed: 70,
        next_evolution: [
            {
                number: '64',
                name: 'Kadabra',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif',
            },
        ],
    },
    {
        number: '64',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kadabra.png',
            large: 'https://img.pokemondb.net/artwork/kadabra.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif',
        },
        name: 'Kadabra',
        type: ['Psychic'],
        total: 400,
        hp: 40,
        attack: 35,
        defense: 30,
        sp_atk: 120,
        sp_def: 70,
        speed: 105,
        next_evolution: [
            {
                number: '65',
                name: 'Alakazam',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif',
            },
        ],
    },
    {
        number: '65',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alakazam.png',
            large: 'https://img.pokemondb.net/artwork/alakazam.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif',
        },
        name: 'Alakazam',
        type: ['Psychic'],
        total: 600,
        hp: 55,
        attack: 50,
        defense: 65,
        sp_atk: 175,
        sp_def: 105,
        speed: 150,
        prev_evolution: [
            {
                number: '64',
                name: 'Kadabra',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif',
            },
        ],
    },
    {
        number: '66',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machop.png',
            large: 'https://img.pokemondb.net/artwork/machop.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif',
        },
        name: 'Machop',
        type: ['Fighting'],
        total: 305,
        hp: 70,
        attack: 80,
        defense: 50,
        sp_atk: 35,
        sp_def: 35,
        speed: 35,
        next_evolution: [
            {
                number: '67',
                name: 'Machoke',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif',
            },
        ],
    },
    {
        number: '67',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machoke.png',
            large: 'https://img.pokemondb.net/artwork/machoke.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif',
        },
        name: 'Machoke',
        type: ['Fighting'],
        total: 405,
        hp: 80,
        attack: 100,
        defense: 70,
        sp_atk: 50,
        sp_def: 60,
        speed: 45,
        prev_evolution: [
            {
                number: '66',
                name: 'Machop',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif',
            },
        ],
        next_evolution: [
            {
                number: '68',
                name: 'Machamp',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif',
            },
        ],
    },
    {
        number: '68',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machamp.png',
            large: 'https://img.pokemondb.net/artwork/machamp.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif',
        },
        name: 'Machamp',
        type: ['Fighting'],
        total: 505,
        hp: 90,
        attack: 130,
        defense: 80,
        sp_atk: 65,
        sp_def: 85,
        speed: 55,
        prev_evolution: [
            {
                number: '67',
                name: 'Machoke',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif',
            },
        ],
    },
    {
        number: '69',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bellsprout.png',
            large: 'https://img.pokemondb.net/artwork/bellsprout.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif',
        },
        name: 'Bellsprout',
        type: ['Grass', 'Poison'],
        total: 300,
        hp: 50,
        attack: 75,
        defense: 35,
        sp_atk: 70,
        sp_def: 30,
        speed: 40,
        next_evolution: [
            {
                number: '70',
                name: 'Weepinbell',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif',
            },
        ],
    },
    {
        number: '70',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weepinbell.png',
            large: 'https://img.pokemondb.net/artwork/weepinbell.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif',
        },
        name: 'Weepinbell',
        type: ['Grass', 'Poison'],
        total: 390,
        hp: 65,
        attack: 90,
        defense: 50,
        sp_atk: 85,
        sp_def: 45,
        speed: 55,
        prev_evolution: [
            {
                number: '69',
                name: 'Bellsprout',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif',
            },
        ],
        next_evolution: [
            {
                number: '71',
                name: 'Victreebel',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif',
            },
        ],
    },
    {
        number: '71',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/victreebel.png',
            large: 'https://img.pokemondb.net/artwork/victreebel.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif',
        },
        name: 'Victreebel',
        type: ['Grass', 'Poison'],
        total: 490,
        hp: 80,
        attack: 105,
        defense: 65,
        sp_atk: 100,
        sp_def: 70,
        speed: 70,
        prev_evolution: [
            {
                number: '70',
                name: 'Weepinbell',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif',
            },
        ],
    },
    {
        number: '72',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dratini.png',
            large: 'https://img.pokemondb.net/artwork/dratini.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif',
        },
        name: 'Dratini',
        type: ['Dragon'],
        total: 300,
        hp: 41,
        attack: 64,
        defense: 45,
        sp_atk: 50,
        sp_def: 50,
        speed: 50,
        next_evolution: [
            {
                number: '73',
                name: 'Dragonair',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif',
            },
        ],
    },
    {
        number: '73',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonair.png',
            large: 'https://img.pokemondb.net/artwork/dragonair.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif',
        },
        name: 'Dragonair',
        type: ['Dragon'],
        total: 420,
        hp: 61,
        attack: 84,
        defense: 65,
        sp_atk: 70,
        sp_def: 70,
        speed: 70,
        prev_evolution: [
            {
                number: '72',
                name: 'Dratini',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif',
            },
        ],
        next_evolution: [
            {
                number: '74',
                name: 'Dragonite',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif',
            },
        ],
    },
    {
        number: '74',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonite.png',
            large: 'https://img.pokemondb.net/artwork/dragonite.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif',
        },
        name: 'Dragonite',
        type: ['Dragon', 'Flying'],
        total: 600,
        hp: 91,
        attack: 134,
        defense: 95,
        sp_atk: 100,
        sp_def: 100,
        speed: 80,
        prev_evolution: [
            {
                number: '72',
                name: 'Dratini',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif',
            },
            {
                number: '73',
                name: 'Dragonair',
                img: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif',
            },
        ],
    },
];

module.exports = pokemons;