import React from 'react'
import Item from './Item'

const GameRow = ({ choices }) => {
  return (
    <div className="row">
      {choices.colors.map(
        (color) => (
          <Item color={color} />
        )
        // ({ color.colorName })
      )}
      <div className="answers">
        <span className="answerPin correct" />
        <span className="answerPin correct" />
        <span className="answerPin incorrect" />
        <span className="answerPin incorrect" />
      </div>
    </div>
  )
}

export default GameRow
