/** @jsx jsx */
import { jsx } from 'theme-ui'
import Popover from '@material-ui/core/Popover'

const Item = ({ color }) => {
  return (
    <div className="item">
      <span
        sx={{
          backgroundColor: color.colorCode
        }}></span>
    </div>
  )
}

export default Item
