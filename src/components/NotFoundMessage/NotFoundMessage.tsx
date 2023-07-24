import { FaInfoCircle } from 'react-icons/fa'

export type NotFoundMessageProps = {
  activeFilter: string
}

const NotFoundMessage = (props: NotFoundMessageProps) => {
  const { activeFilter } = props
  return (
    <div className="flex w-11/12 flex-col items-center justify-center gap-y-8 text-center md:w-7/12 lg:py-28 xl:w-6/12">
      <FaInfoCircle className="h-14 w-14 text-yellow-400 md:h-24 md:w-24" />
      <h2 className="text-2xl font-bold md:text-4xl xl:text-5xl">
        Could not find <span className="underline">{activeFilter}</span>{' '}
        pokemons
      </h2>
      <p className="text-l md:text-xl xl:text-3xl">
        Uh-oh! No Pokémon of this category found. Keep searching, gotta catch em
        all
      </p>
    </div>
  )
}

export { NotFoundMessage }
