import { useState, useEffect } from 'react'

const useWindowHeight = () => {
  const isBrowser = typeof window !== 'undefined'
  const [height, setHeight] = useState(isBrowser ? window.innerHeight : 0)

  useEffect(() => {
    if (!isBrowser) return false

    const handleResize = () => setHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return height
}

export default useWindowHeight
