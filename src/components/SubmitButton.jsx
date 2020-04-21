/** @jsx jsx */
import { jsx } from 'theme-ui'
import Fab from '@material-ui/core/Fab'
import DoneIcon from '@material-ui/icons/Done'

const SubmitButton = ({ handleSubmit }) => {
  return (
    <div sx={{ color: 'green', marginLeft: '20px', display: 'flex', alignItems: 'center', paddingBottom: '10px' }}>
      <Fab onClick={handleSubmit} size="small" aria-label="Submit" style={{ color: '#4CAF50' }}>
        <DoneIcon />
      </Fab>
    </div>
  )
}

export default SubmitButton
