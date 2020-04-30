import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Game from '../../containers/Game'

const GameRoom = () => {
  let { gameId } = useParams()

  return (
    <div>
      {gameId && <h2>{gameId}</h2>}
      <Game />
    </div>
  )
}

export default GameRoom
