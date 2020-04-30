/** @jsx jsx */
import { jsx } from 'theme-ui'
import Fab from '@material-ui/core/Fab'

const Item = ({ color }) => {
  return (
    <div>
      <Fab
        size="small"
        aria-label="choose color"
        style={{
          backgroundColor: color.colorCode ? color.colorCode : '#ffffff',
          width: '50px',
          height: '50px'
        }}></Fab>
      {/* <span
        sx={{
          backgroundColor: color.colorCode
        }}></span> */}
    </div>
  )
}

export default Item
