import React, { useState } from 'react'

import ItemSelect from './ItemSelect'

// import Item from './Item'

const GameRowActive = ({ currentChoices, handleChoice }) => {
  return (
    <div className="row">
      {currentChoices.map((choices) => (
        <ItemSelect color={choices} handleChoice={handleChoice} />
      ))}
    </div>
  )
}

export default GameRowActive
