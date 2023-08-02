import { StatIconsMap } from '@components/PokeCard/PokeCard'
import type { Pokemon } from '@lib/types/client'

export type PokeInfoProps = {
  pokemon?: Pokemon
}

const PokeInfo = (props: PokeInfoProps) => {
  const { pokemon } = props
  return (
    <article className="flex flex-col items-start gap-y-4 md:flex-row md:flex-wrap md:gap-y-6 lg:w-5/12 lg:flex-col">
      <h2 className="w-full text-5xl font-bold text-blue-700 dark:text-blue-500">
        Basic Info
      </h2>
      <div className="flex flex-col gap-y-3 md:w-6/12">
        <h2 className="flex gap-x-2 text-3xl font-bold text-blue-700 dark:text-blue-500">
          Type:
        </h2>
        <p className="text-xl font-bold capitalize text-black dark:text-white md:w-6/12 md:text-2xl">
          {pokemon?.type}
        </p>
      </div>
      <div className="flex flex-col gap-y-3 md:w-6/12 lg:gap-y-4">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-500">
          Stats:
        </h2>
        <ul className="flex items-center gap-x-3">
          {pokemon?.stats.map((stat) => {
            const Icon = StatIconsMap[stat.name]
            return (
              <li
                key={stat.name}
                className="flex items-center gap-x-1 text-xl md:text-2xl"
              >
                <Icon className="text-blue-500" />
                <p className="font-bold dark:text-white">{stat.value}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-y-3 md:w-6/12 lg:w-full lg:gap-y-4 xl:w-8/12">
        <h2 className="flex gap-x-2 text-3xl font-bold text-blue-700 dark:text-blue-500">
          Abilities:
        </h2>
        <ul className="flex flex-wrap items-start gap-x-2 gap-y-1 lg:gap-y-2">
          {pokemon?.abilities.map((ability) => (
            <li
              key={ability}
              className="rounded-xl bg-blue-500 px-2 py-1 font-bold text-white"
            >
              {ability}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-3 md:w-6/12 lg:w-full lg:gap-y-4 xl:w-8/12">
        <h2 className="flex gap-x-2 text-3xl font-bold text-blue-500">
          Moves:
        </h2>
        <ul className="flex flex-wrap items-start gap-x-2 gap-y-1 lg:gap-y-2">
          {pokemon?.moves.map((move) => (
            <li
              key={move}
              className="rounded-xl bg-blue-500 px-2 py-1 font-bold text-white"
            >
              {move}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export { PokeInfo }
