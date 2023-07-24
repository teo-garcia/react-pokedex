import type { Pokemon } from '@lib/types/client'

export type PokeCardProps = Pokemon

const PokeCard = (props: PokeCardProps) => {
  const { name, figure, type } = props

  return (
    <li className="relative h-48 w-40 animate-fade rounded-lg border border-slate-400 bg-gradient-to-b from-slate-800 to-slate-950 py-4 md:h-56 md:w-48">
      <img
        className="absolute left-2/4 top-2 w-8/12 -translate-x-1/2 md:w-8/12"
        alt=""
        src={figure}
      />
      <div className="flex h-full flex-col justify-end gap-y-1">
        <p className="text-center text-xl font-bold capitalize text-white">
          {name}
        </p>
        <p className="text-center text-sm capitalize text-white underline">
          {type}
        </p>
      </div>
    </li>
  )
}

export { PokeCard }
