import { PokeCard } from '@components/PokeCard/PokeCard'
import { Link } from 'react-router-dom'
import type { PokemonResponse } from '@lib/types/client'
import { useInfiniteQuery } from '@tanstack/react-query'

export type PokeListProps = {
  filters: Array<string>
}

const limit = 64

const getPokemons = ({ pageParam = 0 }): Promise<PokemonResponse> => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${pageParam}&limit=${limit}`
  )
    .then((res) => res.json())
    .then((res) => res)
}

const PokeList = (props: PokeListProps) => {
  const { filters } = props
  const { isLoading, isFetchingNextPage, error, data, fetchNextPage } =
    useInfiniteQuery<PokemonResponse>({
      queryKey: ['pokemons'],
      queryFn: getPokemons,
      getNextPageParam: (lastPage) => {
        const queryString = new URL(lastPage.next).search
        const nextOffset = new URLSearchParams(queryString).get('offset') || '0'
        return parseInt(nextOffset)
      },
    })

  if (isLoading) return <p>Loading...</p>
  if (!data || error) return <p>Error...</p>

  const pokemons = data.pages.flatMap((page) => page.results)

  return (
    <section className="pb-12 flex flex-col items-center justify-start w-11/12 md:w-9/12 lg:w-10/12 xl:w-8/12 mx-auto">
      <span className="text-lg font-bold self-end text-right w-100 pr-6">
        Count: {pokemons.length}
      </span>
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 mt-4 mb-12">
        {pokemons.map((pokemon) => (
          <Link
            key={pokemon.name}
            to={`/${pokemon.name}`}
            className="cursor-pointer"
          >
            <PokeCard {...pokemon} />
          </Link>
        ))}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        className="bg-blue-500 inline-block rounded-xl px-4 py-1 text-white font-bold hover:to-blue-700 disabled:opacity-80"
        disabled={isFetchingNextPage}
      >
        Load more
      </button>
    </section>
  )
}

export { PokeList }
