'use client'

import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import type { ThemeMode } from '@lib/types/client'

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<ThemeMode>(
    typeof window !== 'undefined'
      ? (window.localStorage.getItem('theme') as ThemeMode) || 'light'
      : 'light'
  )
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.classList.remove(nextTheme)
    document.body.classList.add(theme)
    window.localStorage.setItem('theme', theme)
  }, [theme, nextTheme])

  const handleClick = () => {
    setTheme(nextTheme)
  }

  return (
    <button
      className="right-4  rounded-lg border border-slate-200 p-2"
      onClick={handleClick}
      aria-label={`Theme switcher, current mode: ${theme}`}
    >
      {theme === 'light' ? (
        <FaMoon className="h-7 w-7 text-white" />
      ) : (
        <FaSun className="h-7 w-7 text-white" />
      )}
    </button>
  )
}

export { ThemeSwitch }
