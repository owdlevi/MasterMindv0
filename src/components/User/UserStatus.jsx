/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import Login from './Login'
import MyGameRooms from '../MyGameRooms'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useFirebaseAuth, useAuthUserInfo } from '../../utils/auth/hooks'
import logout from '../../utils/auth/logout'

const UserStatus = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [gameRoomOpen, setGameRoomOpen] = useState(false)

  const { initializing, user } = useFirebaseAuth()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOpenGameRooms = () => {
    setGameRoomOpen(!gameRoomOpen)
    handleClose()
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
        <MenuItem onClick={handleOpenGameRooms}>My Game Rooms</MenuItem>
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
      <MyGameRooms open={gameRoomOpen} close={handleOpenGameRooms} />
    </div>
  ) : (
    <Login />
  )
}
export default UserStatus
