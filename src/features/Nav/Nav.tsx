import { ThemeSwitch } from '@components/ThemeSwitch/ThemeSwitch'
import pokeball from '../../assets/pokeball.svg'
// import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="flex h-[72px] w-full items-center justify-between bg-slate-950 px-4 md:px-4 lg:p-4">
      <div className="flex items-center gap-x-1">
        <img className="h-12 w-12 lg:h-14 lg:w-14" alt="" src={pokeball} />
        <h1 className="text-3xl font-semibold text-white hover:underline lg:text-4xl">
          Poket
        </h1>
      </div>
      <ThemeSwitch />
    </nav>
  )
}

export { Nav }
