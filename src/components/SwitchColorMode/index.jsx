import * as React from 'react'
import { useColorMode } from 'theme-ui'

const switchColorMode = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button
      onClick={(e) => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}>
      Change Color
    </button>
  )
}

export default switchColorMode
