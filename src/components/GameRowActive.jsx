/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import ItemSelect from './ItemSelect'
import SubmitButton from './SubmitButton'

// import Item from './Item'

const GameRowActive = ({ handleChoice }) => {
  const [currentChoices, setCurrentChoices] = useState(['', '', '', ''])
  const [showSubmit, setShowSubmit] = useState(false)

  const updateChoice = (color, index) => {
    const newChoices = currentChoices.map((item, j) => {
      return j === index ? color : item
    })

    if (newChoices.filter((item) => item.colorCode).length === 4) {
      setCurrentChoices(newChoices)
      setShowSubmit(true)
    } else setCurrentChoices(newChoices)
  }

  const handleSubmit = () => {
    handleChoice(currentChoices)
    setShowSubmit(false)
    setCurrentChoices(['', '', '', ''])
  }

  return (
    <div className="row">
      <div className="GameItems">
        {currentChoices.map((choices, index) => (
          <ItemSelect key={index} color={choices} index={index} updateChoice={updateChoice} />
        ))}
      </div>
      {showSubmit && <SubmitButton handleSubmit={handleSubmit} />}
    </div>
  )
}

export default GameRowActive
