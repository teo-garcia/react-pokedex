import type { Pokemon } from '@lib/types/client'

const pokemonMock: Pokemon = {
  name: 'Bulbasaur',
  figure:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png',
  type: 'Grass',
  stats: [
    { name: 'hp', value: 45 },
    { name: 'attack', value: 59 },
    { name: 'defense', value: 49 },
  ],
  id: 1,
  moves: ['razor-wind', 'cut', 'bind'],
  abilities: ['overgrow', 'chlorophyll'],
}

export { pokemonMock }
