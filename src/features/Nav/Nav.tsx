import { ThemeSwitch } from '@components/ThemeSwitch/ThemeSwitch'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="h-[72px] w-full bg-blue-500 dark:bg-blue-900">
      <div className="mx-auto flex h-full w-11/12 items-center justify-between  xl:w-10/12">
        <Link to="/" className="flex items-center gap-x-1">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            Poket
          </h1>
          <img className="h-10 w-10 lg:h-14 lg:w-14" alt="" src={logo} />
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  )
}

export { Nav }
