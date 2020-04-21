/** @jsx jsx */
import { jsx } from 'theme-ui'
import Button from '@material-ui/core/Button'
import FiberNewIcon from '@material-ui/icons/FiberNew'

const StartGame = ({ startGame }) => {
  return (
    <div sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={startGame} variant="contained" color="primary" startIcon={<FiberNewIcon />}>
        Game
      </Button>
    </div>
  )
}

export default StartGame
