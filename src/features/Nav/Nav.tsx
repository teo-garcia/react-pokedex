import { ThemeSwitch } from '@components/ThemeSwitch/ThemeSwitch'
import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <nav className="flex h-[72px] w-full items-center justify-between bg-blue-500 px-4 dark:bg-blue-700 md:px-4 lg:p-4">
      <div className="flex items-center gap-x-1">
        <h1 className="text-3xl font-semibold text-white lg:text-4xl">Poket</h1>
        <img className="h-10 w-10 lg:h-14 lg:w-14" alt="" src={logo} />
      </div>
      <ThemeSwitch />
    </nav>
  )
}

export { Nav }
