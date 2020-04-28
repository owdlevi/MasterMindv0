/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import Login from './Login'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { get } from 'lodash/object'
import { useFirebaseAuth, useAuthUserInfo } from '../../utils/auth/hooks'
import logout from '../../utils/auth/logout'

const UserStatus = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const { initializing, user } = useFirebaseAuth()
  const AuthUser = get(useAuthUserInfo(), 'AuthUser', null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return user ? (
    <div>
      <div sx={{}} aria-controls="account-menu" aria-haspopup="true" onClick={handleClick}>
        {user.photoURL ? (
          <img
            sx={{
              maxWidth: '40px',
              borderRadius: '50%'
            }}
            src={user.photoURL}
            alt={user.displayName}
          />
        ) : (
          `My Account`
        )}
      </div>

      <Menu id="account-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
          onClick={async () => {
            try {
              await logout()
            } catch (e) {
              console.error(e)
            }
          }}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  ) : (
    <Login />
  )
}
export default UserStatus
