import { ThemeSwitch } from '@components/ThemeSwitch/ThemeSwitch'
import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <nav className="h-[72px] w-full bg-blue-500 dark:bg-blue-900">
      <div className="mx-auto flex h-full w-11/12 items-center justify-between  xl:w-10/12">
        <div className="flex items-center gap-x-1">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            Poket
          </h1>
          <img className="h-10 w-10 lg:h-14 lg:w-14" alt="" src={logo} />
        </div>
        <ThemeSwitch />
      </div>
    </nav>
  )
}

export { Nav }
