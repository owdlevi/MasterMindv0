import React, { useState, useEffect } from 'react'
import { loadFirestore } from '../../utils/db'
import { useFirebaseAuth, useAuthUserInfo } from '../../utils/auth/hooks'
import { get } from 'lodash/object'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const MyGameRooms = ({ open, close }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    setIsOpen(open)
    return () => {
      setIsOpen(false)
    }
  }, [open])

  const { initializing, user } = useFirebaseAuth()
  // const AuthUser = get(useAuthUserInfo(), 'AuthUser', null)

  const handleClose = () => {
    setIsOpen(false)
    close()
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleCreateRoom = async (e) => {
    const userID = user.uid
    const firebase = await loadFirestore()
    // && (e.type === 'click' || e.charCode === 13)
    if (name.length > 3) {
      const item = {
        owner: userID,
        roomName: name
      }
      firebase
        .firestore()
        .collection('gamerooms')
        // .doc(AuthUser.Id)
        // .collection('todos')
        .doc()
        .set(item)
        .then(() => handleClose())
        .catch((error) => console.error(error))
    }
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={isOpen} maxWidth="sm" onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Game Rooms</DialogTitle>
        <DialogContent>
          <DialogContentText>Create your Game room and invite your friends to Crack the Code!</DialogContentText>
          <TextField
            onChange={(e) => handleNameChange(e)}
            autoFocus
            margin="dense"
            id="name"
            label="Room Name"
            type="text"
            value={name}
            fullWidth
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateRoom} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default MyGameRooms
