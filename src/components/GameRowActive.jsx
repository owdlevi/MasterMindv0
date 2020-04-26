/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import { useTrail, animated } from 'react-spring'
import ItemSelect from './ItemSelect'
import SubmitButton from './SubmitButton'

// import Item from './Item'

const GameRowActive = ({ handleChoice }) => {
  const [currentChoices, setCurrentChoices] = useState(['', '', '', ''])
  const [showSubmit, setShowSubmit] = useState(false)
  const [to, setTo] = useState(1)
  const trail = useTrail(currentChoices.length, { opacity: to ? 1 : 0, from: { opacity: 0 } })

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
    setTo(to + 1)
    setCurrentChoices(['', '', '', ''])
  }

  return (
    <div className="row">
      <div className="GameItems">
        {trail.map((props, i) => (
          <animated.div style={props} key={i}>
            <ItemSelect color={currentChoices[i]} index={i} updateChoice={updateChoice} />
          </animated.div>
        ))}
      </div>
      {showSubmit && <SubmitButton handleSubmit={handleSubmit} />}
    </div>
  )
}

export default GameRowActive
