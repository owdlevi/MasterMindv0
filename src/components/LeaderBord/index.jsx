/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx } from 'theme-ui'
import { loadFirestore } from '../../utils/db'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const LeaderBord = ({ gameroom }) => {
  const [scoreList, setScoreList] = useState([])

  useEffect(() => {
    getScores()
    return () => {}
  }, [])

  const getScores = async () => {
    const storeCollection = 'LeaderBord'

    const firebase = await loadFirestore()

    const query =
      gameroom && gameroom.id
        ? firebase.firestore().collection('gamerooms').doc(gameroom.id).collection(storeCollection).orderBy('totalPoints', 'desc').limit(10)
        : firebase.firestore().collection(storeCollection).orderBy('totalPoints', 'desc').limit(10)

    query.onSnapshot((snapshot) => {
      let data = []
      if (snapshot.size) {
        snapshot.forEach((doc) => {
          const document = { id: doc.id, ...doc.data() }
          data.push(document)
        })
        setScoreList(data)
      }
    })
  }

  return (
    <div
      sx={{
        backgroundColor: '#ff6a85',
        minWidth: '300px',
        '@media screen and (max-width: 520px)': {
          mb: '40px',
          width: '100%'
        }
      }}>
      {scoreList.length ? (
        <React.Fragment>
          <h3
            sx={{
              textAlign: 'center'
            }}>
            Top 10
          </h3>
          <List
            dense
            sx={{
              width: '300px',
              maxWidth: 300,
              '@media screen and (max-width: 520px)': {
                width: '100%',
                maxWidth: '100%'
              }
            }}>
            {scoreList.map((score, i) => {
              return (
                <React.Fragment>
                  <ListItem key={i}>
                    <ListItemAvatar>
                      <Avatar alt={score.user.displayName} src={score.user.photoURL} />
                    </ListItemAvatar>
                    <ListItemText primary={score.user.displayName} />
                    <ListItemSecondaryAction>
                      <Typography component="span" variant="body2" color="textPrimary">
                        {score.totalPoints}
                      </Typography>
                    </ListItemSecondaryAction>
                  </ListItem>

                  {i < scoreList.length - 1 && <Divider variant="inset" component="li" />}
                </React.Fragment>
              )
            })}
          </List>
        </React.Fragment>
      ) : (
        <div
          sx={{
            px: '20px',
            py: '10px'
          }}>
          <h3
            sx={{
              textAlign: 'center'
            }}>
            Top 10
          </h3>
          No results.
        </div>
      )}
    </div>
  )
}

export default LeaderBord
