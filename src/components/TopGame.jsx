/** @jsx jsx */
import { jsx } from 'theme-ui'
import Clock from './Clock'

const TopGame = ({ round, startTime, stopTimer }) => {
  return (
    <div
      sx={{
        width: '100%',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      <h2
        sx={{
          width: 'calc(100% - 60px)',
          fontSize: '18px',
          lineHeight: '18px',
          fontWeight: '500',
          m: 0,
          color: '#ffffff'
        }}>
        Round: <strong>{round}</strong>
      </h2>
      <div
        className="Clock"
        sx={{
          fontSize: '18px',
          lineHeight: '18px',
          fontWeight: '400',
          color: '#ffffff'
        }}>
        <Clock startTime={startTime} stopTimer={stopTimer} />
      </div>
    </div>
  )
}

export default TopGame
