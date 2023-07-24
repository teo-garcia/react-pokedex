import type { ChangeEvent } from 'react'
import { PokeCard } from '@components/PokeCard/PokeCard'
import { Link } from 'react-router-dom'
import { pokemonUtils, usePokemonsQuery } from '@lib/tools/pokemon'
import { PokeFilter } from '@features/PokeFilter/PokeFilter'
import clsx from 'clsx'
import { NotFoundMessage } from '@components/NotFoundMessage/NotFoundMessage'
import { FaAngleDown } from 'react-icons/fa'

export type PokeListProps = {
  activeFilter: string
  handleFilterChange: (evt: ChangeEvent<HTMLInputElement>) => void
}

const PokeList = (props: PokeListProps) => {
  const { activeFilter, handleFilterChange } = props
  const { data, isFetchingNextPage, fetchNextPage, isLoading } =
    usePokemonsQuery()
  const pokemons = pokemonUtils.filterPokemons(data, activeFilter)

  const shouldShowError = !pokemons.length && !isLoading

  return (
    <div className="mx-auto grid h-[calc(100vh-72px)] w-11/12 grid-cols-1 gap-y-8 py-8 lg:grid-cols-[250px_1fr] lg:gap-x-8 xl:w-10/12 xl:grid-cols-[300px_1fr] xl:gap-x-16">
      <PokeFilter
        activeFilter={activeFilter}
        handleFilterChange={handleFilterChange}
      />
      <section
        className={clsx(
          'flex flex-col items-center justify-start pb-12 md:p-0'
        )}
      >
        {shouldShowError ? (
          <NotFoundMessage activeFilter={activeFilter} />
        ) : (
          <>
            <span className="w-100 self-end text-right text-lg font-bold">
              Count: {pokemons.length}
            </span>
            <ul className="align-center mb-12 mt-4 grid w-full grid-cols-2 justify-items-center gap-y-6 md:grid-cols-3 md:gap-y-8 xl:grid-cols-5 xl:justify-center">
              {pokemons.map((pokemon) => (
                <Link
                  key={pokemon.name}
                  to={`/pokemon/${pokemon.name}`}
                  className="cursor-pointer"
                >
                  <PokeCard {...pokemon} />
                </Link>
              ))}
            </ul>
          </>
        )}

        <button
          onClick={() => fetchNextPage()}
          className="text-l fixed bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-x-1 rounded-xl bg-blue-500 px-4 py-2 font-bold text-white shadow-2xl disabled:bg-blue-300 xl:gap-x-3 xl:px-5"
          disabled={isFetchingNextPage}
        >
          Load more
          <FaAngleDown className="mt-0.5" />
        </button>
      </section>
    </div>
  )
}

export { PokeList }
