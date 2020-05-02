/** @jsx jsx */
import { jsx } from 'theme-ui'

const StartGameInfo = () => {
  return (
    <div sx={{ fontSize: 'text', textAlign: 'center', mb: '20px' }}>
      A codemaker has created a secret pattern of 4 colored pegs. Guess the peg within 10 turns. A black peg is returned for each peg in
      your guess that matches the color and position of one peg in the pattern. A white peg is returned for each peg that is the correct
      color of one peg in the pattern but the incorrect position. A match is counted only once.
    </div>
  )
}

export default StartGameInfo
