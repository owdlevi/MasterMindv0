/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import Popover from '@material-ui/core/Popover'
import ColorOptions from './ColorOptions'

const ItemSelect = ({ color }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div className="item">
      <span
        aria-describedby={id}
        onClick={handleClick}
        sx={{
          backgroundColor: color.colorCode
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
        <ColorOptions />
      </Popover>
    </div>
  )
}

export default ItemSelect
