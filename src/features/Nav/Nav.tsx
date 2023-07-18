import { ThemeSwitch } from '@components/ThemeSwitch/ThemeSwitch'
import pokeball from '../../assets/pokeball.svg'
// import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="h-[72px] w-full bg-blue-500 flex items-center px-4 justify-between md:px-4 lg:p-4">
      <div className="flex items-center gap-x-1">
        <img className="w-12 h-12 lg:w-14 lg:h-14" alt="" src={pokeball} />
        <h1 className="text-white font-semibold text-3xl hover:underline lg:text-4xl">
          Poket
        </h1>
      </div>
      <ThemeSwitch />
    </nav>
  )
}

export { Nav }
