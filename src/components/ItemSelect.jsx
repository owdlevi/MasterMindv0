/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import Popover from '@material-ui/core/Popover'
import ColorOptions from './ColorOptions'

const ItemSelect = ({ index, color, updateChoice }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const setColor = (color) => {
    updateChoice(color, index)
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div className="item">
      <span
        aria-describedby={id}
        onClick={handleOpen}
        sx={{
          backgroundColor: color.colorCode ? color.colorCode : ''
        }}></span>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}>
        <ColorOptions setColor={setColor} />
      </Popover>
    </div>
  )
}

export default ItemSelect
