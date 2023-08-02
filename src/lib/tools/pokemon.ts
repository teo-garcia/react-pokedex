import type {
  Pokemon,
  PokemonResponse,
  PokemonRichInfo,
  UsePokemonResult,
} from '@lib/types/client'
import type {
  QueryFunctionContext,
  UseQueryResult,
} from '@tanstack/react-query'
import { useInfiniteQuery, useQueries, useQuery } from '@tanstack/react-query'

const BASE_LIMIT = 64
const PAGINATED_LIMIT = 32

const usePokemonsQuery = () => {
  const resultA = useInfiniteQuery<PokemonResponse>({
    queryKey: ['pokemons'],
    queryFn: pokemonAPI.getPokemons,
    getNextPageParam: (lastPage) => {
      const queryString = new URL(lastPage.next).search
      const nextOffset = new URLSearchParams(queryString).get('offset') || '0'
      return parseInt(nextOffset)
    },
  })

  const pokemons = resultA.data?.pages.flatMap((page) => page.results) || []
  const resultB = useQueries<Array<PokemonRichInfo>>({
    queries: pokemons.map((pokemon) => {
      return {
        queryKey: ['pokemon', pokemon.name],
        queryFn: pokemonAPI.getPokemon,
      }
    }),
  })

  const { isLoading, isError, data } = pokemonUtils.joinPokemonQueries(resultB)
  return {
    isLoading,
    isError,
    data,
    isFetchingNextPage: resultA.isFetchingNextPage,
    fetchNextPage: resultA.fetchNextPage,
  }
}

const usePokemonQuery = (name: string) => {
  const { isLoading, isError, data } = useQuery<PokemonRichInfo>({
    queryFn: pokemonAPI.getPokemon,
    queryKey: ['pokemon', name],
  })

  const mappedData = data ? pokemonUtils.mapPokemon(data) : undefined

  return { isLoading, isError, data: mappedData }
}

const pokemonAPI = {
  getPokemon: (queryContext: QueryFunctionContext) => {
    const { queryKey } = queryContext
    const [, pokemonName] = queryKey
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    return fetch(endpoint)
      .then((res) => res.json())
      .then((res) => res)
  },

  getPokemons: (
    queryContext: QueryFunctionContext
  ): Promise<PokemonResponse> => {
    const { pageParam } = queryContext
    const limit = !pageParam ? BASE_LIMIT : PAGINATED_LIMIT

    const endpoint = `https://pokeapi.co/api/v2/pokemon/?offset=${pageParam}&limit=${limit}`

    return fetch(endpoint)
      .then((res) => res.json())
      .then((res) => res)
  },

  getPokemonTypes: (): Promise<PokemonResponse> => {
    return fetch('https://pokeapi.co/api/v2/type')
      .then((res) => res.json())
      .then((res) => res)
  },
}

const pokemonUtils = {
  filterPokemons: (pokemons: Array<Pokemon>, activeFilter: string) => {
    const hasNotFilters = activeFilter === 'all'

    if (hasNotFilters) return pokemons

    return pokemons.filter((pokemon) => pokemon.type === activeFilter)
  },
  joinPokemonQueries: (results: UseQueryResult[]): UsePokemonResult => {
    const joinedResults: UsePokemonResult = {
      isLoading: false,
      isError: false,
      data: [],
    }

    results.forEach((currentResult) => {
      if (currentResult.isLoading) {
        joinedResults.isLoading = true
        return
      }

      if (currentResult.isError) {
        joinedResults.isError = true
        return
      }

      joinedResults.data.push(
        pokemonUtils.mapPokemon(currentResult?.data as PokemonRichInfo)
      )
    })

    return joinedResults
  },
  mapPokemon: (pokemon: PokemonRichInfo): Pokemon => {
    const {
      id,
      name,
      sprites,
      types,
      stats: rawStats,
      moves: rawMoves,
      abilities: rawAbilities,
    } = pokemon || {}

    const stats = rawStats
      .map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      }))
      .filter(
        (stat) =>
          !['speed', 'special-attack', 'special-defense'].includes(stat.name)
      )

    const moves = rawMoves.map((move) => move.move.name).slice(0, 12)
    const abilities = rawAbilities.map((ability) => ability.ability.name)

    return {
      id,
      name,
      figure: sprites.other['official-artwork']['front_shiny'],
      type: types[0].type.name,
      stats,
      moves,
      abilities,
    }
  },
}

export { pokemonUtils, pokemonAPI, usePokemonsQuery, usePokemonQuery }
