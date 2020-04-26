/** @jsx jsx */
import { jsx } from 'theme-ui'
import StartGame from './StartGame'

const CodeCracked = ({ startGame, result }) => {
  return (
    <div>
      <div
        sx={{
          textAlign: 'center',
          my: '20px',
          fontSize: '18px',
          fontWeight: 600
        }}>
        Congratulations you cracked the code in {result.round} {result.round > 1 ? `rounds ` : `round `}
        {result.time.minutes > 1 ? `${result.time.minutes} minute ` : ``} and {result.time.seconds} seconds.
        <span
          sx={{
            display: 'inline-block',
            width: '100%',
            my: '10px',
            fontSize: '24px',
            color: 'background',
            fontWeight: 700
          }}>
          Your score is: {result.totalPoints}
        </span>
      </div>
      <StartGame startGame={startGame} />
    </div>
  )
}

export default CodeCracked
