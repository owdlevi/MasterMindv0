/** @jsx jsx */
import { jsx } from 'theme-ui'
import Item from './Item'
import Answer from './Answers'

const GameRow = ({ choices }) => {
  return (
    <div className="row">
      <div className="GameItems">
        {choices.colors.map((color, i) => (
          <Item key={i} color={color} />
        ))}
      </div>
      <Answer pins={choices.pins} />
    </div>
  )
}

export default GameRow
