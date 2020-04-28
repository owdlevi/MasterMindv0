/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import FirebaseAuth from './FirebaseAuth'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'

const Login = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <Button color="inherit" aria-controls="account-menu" aria-haspopup="true" onClick={handleClick}>
        Login
      </Button>
      <Menu id="login-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <FirebaseAuth />
      </Menu>
    </div>
  )
}

export default Login
