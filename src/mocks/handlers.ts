import { rest } from 'msw'

const POKEMON_GET_RESPONSE = {
  count: 1281,
  next: 'https://pokeapi.co/api/v2/pokemon/?offset=64&limit=64',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
    {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
    },
  ],
}

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(POKEMON_GET_RESPONSE))
  }),
]
