const pokemons = [
    {
        number: '001',
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
                num: '002',
                name: 'Ivysaur',
            },
            {
                num: '003',
                name: 'Venusaur',
            },
        ],
    },
    {
        number: '002',
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
                num: '001',
                name: 'Bulbasaur',
            },
        ],
        next_evolution: [
            {
                num: '003',
                name: 'Venusaur',
            },
        ],
    },
    {
        number: '003',
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
                num: '001',
                name: 'Bulbasaur',
            },
            {
                num: '002',
                name: 'Ivysaur',
            },
        ],
    },
    {
        number: '004',
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
                num: '005',
                name: 'Charmeleon',
            },
            {
                num: '006',
                name: 'Charizard',
            },
        ],
    },
    {
        number: '005',

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
                num: '004',
                name: 'Charmander',
            },
        ],
        next_evolution: [
            {
                num: '006',
                name: 'Charizard',
            },
        ],
    },
    {
        number: '006',

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
                num: '004',
                name: 'Charmander',
            },
            {
                num: '005',
                name: 'Charmeleon',
            },
        ],
    },
    {
        number: '007',

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
                num: '008',
                name: 'Wartortle',
            },
            {
                num: '009',
                name: 'Blastoise',
            },
        ],
    },
    {
        number: '008',

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
                num: '007',
                name: 'Squirtle',
            },
        ],
        next_evolution: [
            {
                num: '009',
                name: 'Blastoise',
            },
        ],
    },
    {
        number: '009',

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
                num: '007',
                name: 'Squirtle',
            },
            {
                num: '008',
                name: 'Wartortle',
            },
        ],
    },
    {
        number: '010',

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
                num: '011',
                name: 'Metapod',
            },
            {
                num: '012',
                name: 'Butterfree',
            },
        ],
    },
    {
        number: '011',

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
                num: '010',
                name: 'Caterpie',
            },
        ],
        next_evolution: [
            {
                num: '012',
                name: 'Butterfree',
            },
        ],
    },
    {
        number: '012',

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
                num: '010',
                name: 'Caterpie',
            },
            {
                num: '011',
                name: 'Metapod',
            },
        ],
    },
    {
        number: '013',

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
                num: '014',
                name: 'Kakuna',
            },
            {
                num: '015',
                name: 'Beedrill',
            },
        ],
    },
    {
        number: '014',

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
                num: '013',
                name: 'Weedle',
            },
        ],
        next_evolution: [
            {
                num: '015',
                name: 'Beedrill',
            },
        ],
    },
    {
        number: '015',

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
                num: '013',
                name: 'Weedle',
            },
            {
                num: '014',
                name: 'Kakuna',
            },
        ],
    },
    {
        number: '016',

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
                num: '017',
                name: 'Pidgeotto',
            },
            {
                num: '018',
                name: 'Pidgeot',
            },
        ],
    },
    {
        number: '017',

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
                num: '016',
                name: 'Pidgey',
            },
        ],
        next_evolution: [
            {
                num: '018',
                name: 'Pidgeot',
            },
        ],
    },
    {
        number: '018',
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
                num: '016',
                name: 'Pidgey',
            },
            {
                num: '017',
                name: 'Pidgeotto',
            },
        ],
    },
    {
        number: '019',
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
                num: '020',
                name: 'Raticate',
            },
        ],
    },
    {
        number: '020',
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
                num: '019',
                name: 'Rattata',
            },
        ],
    },
    {
        number: '021',

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
                num: '022',
                name: 'Fearow',
            },
        ],
    },
    {
        number: '022',

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
                num: '021',
                name: 'Spearow',
            },
        ],
    },
    {
        number: '023',

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
                num: '024',
                name: 'Arbok',
            },
        ],
    },
    {
        number: '024',

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
                num: '023',
                name: 'Ekans',
            },
        ],
    },
    {
        number: '025',

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
                num: '026',
                name: 'Raichu',
            },
        ],
    },
    {
        number: '026',

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
                num: '025',
                name: 'Pikachu',
            },
        ],
    },
    {
        number: '027',
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
                num: '028',
                name: 'Sandslash',
            },
        ],
    },
    {
        number: '028',

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
                num: '027',
                name: 'Sandshrew',
            },
        ],
    },
    {
        number: '029',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoran♀.png',
            large: 'https://img.pokemondb.net/artwork/nidoran♀.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran♀.gif',
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
                num: '030',
                name: 'Nidorina',
            },
            {
                num: '031',
                name: 'Nidoqueen',
            },
        ],
    },
    {
        number: '030',

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
                num: '029',
                name: 'Nidoran(Female)',
            },
        ],
        next_evolution: [
            {
                num: '031',
                name: 'Nidoqueen',
            },
        ],
    },
    {
        number: '031',

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
                num: '029',
                name: 'Nidoran(Female)',
            },
            {
                num: '030',
                name: 'Nidorina',
            },
        ],
    },
    {
        number: '032',

        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoran♂.png',
            large: 'https://img.pokemondb.net/artwork/nidoran♂.jpg',
            animated:
                'https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran♂.gif',
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
                num: '033',
                name: 'Nidorino',
            },
            {
                num: '034',
                name: 'Nidoking',
            },
        ],
    },
    {
        number: '033',

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
                num: '032',
                name: 'Nidoran(Male)',
            },
        ],
        next_evolution: [
            {
                num: '034',
                name: 'Nidoking',
            },
        ],
    },
    {
        number: '034',

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
                num: '032',
                name: 'Nidoran(Male)',
            },
            {
                num: '033',
                name: 'Nidorino',
            },
        ],
    },
    {
        number: '035',

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
                num: '036',
                name: 'Clefable',
            },
        ],
    },
    {
        number: '036',

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
                num: '035',
                name: 'Clefairy',
            },
        ],
    },
    {
        number: '037',

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
                num: '038',
                name: 'Ninetales',
            },
        ],
    },
    {
        number: '038',
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
                num: '037',
                name: 'Vulpix',
            },
        ],
    },
    {
        number: '039',

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
                num: '040',
                name: 'Wigglytuff',
            },
        ],
    },
    {
        number: '040',

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
                num: '039',
                name: 'Jigglypuff',
            },
        ],
    },
    {
        number: '041',

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
                num: '042',
                name: 'Golbat',
            },
        ],
    },
    {
        number: '042',

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
                num: '041',
                name: 'Zubat',
            },
        ],
    },
    {
        number: '043',

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
                num: '041',
                name: 'Zubat',
            },
        ],
    },
    {
        number: '044',

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
                num: '043',
                name: 'Oddish',
            },
        ],
        next_evolution: [
            {
                num: '045',
                name: 'Vileplume',
            },
        ],
    },
    {
        number: '045',

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
                num: '043',
                name: 'Oddish',
            },
            {
                num: '044',
                name: 'Gloom',
            },
        ],
    },
    {
        number: '046',

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
                num: '047',
                name: 'Parasect',
            },
        ],
    },
    {
        number: '047',

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
                num: '046',
                name: 'Paras',
            },
        ],
    },
    {
        number: '048',

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
                num: '049',
                name: 'Venomoth',
            },
        ],
    },
    {
        number: '049',

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
                num: '048',
                name: 'Venonat',
            },
        ],
    },
    {
        number: '050',

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
                num: '051',
                name: 'Dugtrio',
            },
        ],
    },
    {
        number: '051',

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
                num: '050',
                name: 'Diglett',
            },
        ],
    },
    {
        number: '052',

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
                num: '053',
                name: 'Persian',
            },
        ],
    },
    {
        number: '053',
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
                num: '052',
                name: 'Meowth',
            },
        ],
    },
    {
        number: '054',

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
                num: '055',
                name: 'Golduck',
            },
        ],
    },
    {
        number: '055',

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
                num: '054',
                name: 'Psyduck',
            },
        ],
    },
    {
        number: '056',

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
                num: '057',
                name: 'Primeape',
            },
        ],
    },
    {
        number: '057',

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
                num: '056',
                name: 'Mankey',
            },
        ],
    },
    {
        number: '058',

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
                num: '059',
                name: 'Arcanine',
            },
        ],
    },
    {
        number: '059',

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
                num: '058',
                name: 'Growlithe',
            },
        ],
    },
    {
        number: '060',

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
                num: '061',
                name: 'Poliwhirl',
            },
            {
                num: '062',
                name: 'Poliwrath',
            },
        ],
    },
    {
        number: '061',

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
                num: '060',
                name: 'Poliwag',
            },
        ],
        next_evolution: [
            {
                num: '062',
                name: 'Poliwrath',
            },
        ],
    },
    {
        number: '062',

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
                num: '060',
                name: 'Poliwag',
            },
            {
                num: '061',
                name: 'Poliwhirl',
            },
        ],
    },
    {
        number: '063',

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
                num: '064',
                name: 'Kadabra',
            },
            {
                num: '065',
                name: 'Alakazam',
            },
        ],
    },
    {
        number: '064',

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
    },
    {
        number: '065',
        evolution: {
            name: 'Mega Alakazam',
        },
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
                num: '063',
                name: 'Abra',
            },
            {
                num: '064',
                name: 'Kadabra',
            },
        ],
    },
    {
        number: '066',

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
                num: '067',
                name: 'Machoke',
            },
            {
                num: '068',
                name: 'Machamp',
            },
        ],
    },
    {
        number: '067',

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
                num: '066',
                name: 'Machop',
            },
        ],
        next_evolution: [
            {
                num: '068',
                name: 'Machamp',
            },
        ],
    },
    {
        number: '068',

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
                num: '066',
                name: 'Machop',
            },
            {
                num: '067',
                name: 'Machoke',
            },
        ],
    },
    {
        number: '069',

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
                num: '070',
                name: 'Weepinbell',
            },
            {
                num: '071',
                name: 'Victreebel',
            },
        ],
    },
    {
        number: '070',

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
                num: '069',
                name: 'Bellsprout',
            },
        ],
        next_evolution: [
            {
                num: '071',
                name: 'Victreebel',
            },
        ],
    },
    {
        number: '071',

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
                num: '069',
                name: 'Bellsprout',
            },
            {
                num: '070',
                name: 'Weepinbell',
            },
        ],
    },
    {
        number: '072',

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
                num: '073',
                name: 'Dragonair',
            },
            {
                num: '074',
                name: 'Dragonite',
            },
        ],
    },
    {
        number: '073',

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
                num: '072',
                name: 'Dratini',
            },
        ],
        next_evolution: [
            {
                num: '074',
                name: 'Dragonite',
            },
        ],
    },
    {
        number: '074',

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
                num: '072',
                name: 'Dratini',
            },
            {
                num: '073',
                name: 'Dragonair',
            },
        ],
    }
];

module.exports = pokemons;