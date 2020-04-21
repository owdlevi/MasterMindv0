/** @jsx jsx */
import { jsx } from 'theme-ui'
import Item from './Item'

const GameRow = ({ choices }) => {
  return (
    <div className="row">
      <div className="GameItems">
        {choices.colors.map((color, i) => (
          <Item key={i} color={color} />
        ))}
      </div>
      <div className="answers">
        {choices.pins.map((pin, i) => (
          <span key={i} className="answerPin" sx={{ backgroundColor: pin }} />
        ))}
      </div>
    </div>
  )
}

export default GameRow
