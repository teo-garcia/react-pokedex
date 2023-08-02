import type { Pokemon } from '@lib/types/client'
import { AiFillHeart } from 'react-icons/ai'
import { PiSwordFill } from 'react-icons/pi'
import { BsShieldFillPlus, BsFillLightningChargeFill } from 'react-icons/bs'
import { BiSolidCategory } from 'react-icons/bi'

export type PokeCardProps = Pokemon

export const StatIconsMap = {
  hp: AiFillHeart,
  attack: PiSwordFill,
  defense: BsShieldFillPlus,
  speed: BsFillLightningChargeFill,
}

const PokeCard = (props: PokeCardProps) => {
  const { name, figure, type, stats } = props
  return (
    <li className="from relative h-48 w-40 animate-fade rounded-lg border border-slate-400 bg-gradient-to-b from-blue-500 to-blue-900 px-4 py-2 shadow-xl transition-transform hover:scale-95 dark:border-slate-500 dark:shadow-slate-900 md:h-56 md:w-48">
      <img
        className="absolute left-2/4 top-2 w-8/12 -translate-x-1/2 md:w-8/12"
        alt=""
        src={figure}
      />
      <div className="flex h-full flex-col justify-end gap-y-1">
        <p className="text-center text-xl font-bold capitalize text-white">
          {name}
        </p>
        <div className="flex flex-col">
          <div className="flex items-center justify-start gap-x-1 text-base font-bold text-white">
            <BiSolidCategory className="inline" />
            <p className="capitalize">{type}</p>
          </div>
          <ul className="mr-auto flex items-center gap-x-3">
            {stats.map((stat) => {
              const Icon = StatIconsMap[stat.name]
              return (
                <li
                  key={stat.name}
                  className="flex items-center gap-x-0.5 text-sm text-white"
                >
                  <Icon />
                  <p>{stat.value}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </li>
  )
}

export { PokeCard }
