/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { gameSettings } from '../gameConfig'

const ColorOptions = () => {
  return (
    <div
      sx={{
        p: 10,
        borderRadius: '5px',
        boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      {gameSettings.gameColors.map((color) => (
        <div
          className="item"
          sx={{
            width: '25px',
            height: '25px'
          }}>
          <span
            sx={{
              backgroundColor: color.colorCode
            }}></span>
        </div>
      ))}
    </div>
  )
}

export default ColorOptions
