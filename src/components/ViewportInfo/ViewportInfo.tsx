import { useEffect, useState } from 'react'

const ViewportInfo = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

  const handleResize = () => {
    setViewportWidth(window.innerWidth)
    setViewportHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <aside className="b radius fixed bottom-0 right-0 flex w-36 flex-col gap-y-0.5 rounded-l-lg border-l border-t border-blue-950 bg-blue-500 px-2 py-2 text-white dark:border-blue-500 dark:bg-blue-950">
      <h3 className="text-base font-bold">Viewport Info:</h3>
      <p className="text-sm">width: {viewportWidth}px;</p>
      <p className="text-sm">height: {viewportHeight}px;</p>
    </aside>
  )
}

export { ViewportInfo }
