import type { ChangeEvent } from 'react'
import { PokeCard } from '@components/PokeCard/PokeCard'
import { Link } from 'react-router-dom'
import { pokemonUtils, usePokemonsQuery } from '@lib/tools/pokemon'
import { PokeFilter } from '@features/PokeFilter/PokeFilter'
import clsx from 'clsx'
import { AlertMessage } from '@components/AlertMessage/AlertMessage'
import { FaAngleDown } from 'react-icons/fa'

export type PokeListProps = {
  activeFilter: string
  handleFilterChange: (evt: ChangeEvent<HTMLInputElement>) => void
}

const PokeList = (props: PokeListProps) => {
  const { activeFilter, handleFilterChange } = props
  const { data, isFetchingNextPage, fetchNextPage, isLoading, isError } =
    usePokemonsQuery()
  const pokemons = pokemonUtils.filterPokemons(data, activeFilter)

  const shouldShowError = !pokemons.length && !isLoading && !isError

  return (
    <div className="mx-auto grid w-11/12 grid-cols-1 gap-y-8 py-8 lg:grid-cols-[250px_1fr] lg:gap-x-8 xl:w-10/12 xl:grid-cols-[300px_1fr] xl:gap-x-16">
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
          <AlertMessage message={`Could not find ${activeFilter} pokemons`} />
        ) : (
          <>
            <span className="w-100 animate-fade self-end text-right text-lg font-bold text-blue-900 dark:text-blue-500">
              Count:{' '}
              <span className="tabular-nums text-black dark:text-white">
                {pokemons.length}
              </span>
            </span>
            <ul className="align-center items-between mb-12 mt-4 grid w-full grid-cols-2 justify-items-center gap-y-6 md:grid-cols-3 md:gap-y-8 xl:grid-cols-[repeat(4,_190px)] xl:justify-between xl:gap-x-0 2xl:grid-cols-[repeat(5,_190px)]">
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
          className="text-l fixed bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-x-1 rounded-xl border border-blue-500 bg-white px-4 py-2 font-bold text-blue-500 shadow-2xl transition-colors hover:border-black hover:bg-black hover:text-white disabled:bg-slate-300 disabled:text-slate-700 xl:gap-x-3 xl:px-5"
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
