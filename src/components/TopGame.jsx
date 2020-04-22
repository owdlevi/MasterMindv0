/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Clock from './Clock'

const TopGame = ({ round, startTime }) => {
  return (
    <div
      sx={{
        width: '100%',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      <h2
        sx={{
          width: 'calc(100% - 80px)',
          fontSize: '18px',
          lineHeight: '18px',
          fontWeight: '500',
          m: 0
        }}>
        Round: <strong>{round}</strong>
      </h2>
      <div
        sx={{
          fontSize: '18px',
          lineHeight: '18px',
          fontWeight: '700'
        }}>
        <Clock startTime={startTime} />
      </div>
    </div>
  )
}

export default TopGame
