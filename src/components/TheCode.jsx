/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect, useRef } from 'react'
import { animated, useSpring, useTrail, useChain } from 'react-spring'
import Item from './Item'

const TheCode = ({ showCode, theCode }) => {
  const [on, toggle] = useState(showCode)

  useEffect(() => {
    toggle(showCode)
  }, [showCode])

  // const springRef = useRef()
  const spring = useSpring({
    config: { duration: 1250 },
    // ref: springRef,
    // from: {
    //   height: '100%',
    //   boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 4px 0px rgba(0,0,0,.12)'
    // },
    // to:
    backgroundColor: on ? 'red' : 'whitesmoke',
    height: on ? '0px' : '100%',
    boxShadow: on
      ? '0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 32px 4px 0px rgba(0,0,0,.12)'
      : '0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 4px 0px rgba(0,0,0,.12)'
  })

  return (
    <div>
      <div
        className="thecode GameItems"
        sx={{
          height: '60px',
          position: 'relative',
          borderRadius: '5px'
        }}>
        <animated.div
          style={spring}
          sx={{
            borderRadius: '5px',
            backgroundColor: 'whitesmoke',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 100
          }}></animated.div>
        {showCode && (
          <div className="row" sx={{ width: '100%' }}>
            <div className="GameItems" sx={{ width: '100%' }}>
              {theCode.map((color, i) => (
                <Item key={i} color={color} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TheCode
