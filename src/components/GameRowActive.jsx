import React, { useState } from 'react'

import ItemSelect from './ItemSelect'

// import Item from './Item'

const GameRowActive = ({ currentChoices }) => {
  return (
    <div className="row">
      {currentChoices.map((choices) => (
        <ItemSelect color={choices} />
      ))}
    </div>
  )
}

export default GameRowActive
