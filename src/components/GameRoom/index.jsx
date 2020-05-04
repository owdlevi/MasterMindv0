import React, { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Game from '../../containers/Game'
import { loadFirestore } from '../../utils/db'

const GameRoom = () => {
  const [gameRoom, setGameRoom] = useState(null)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    getGameRoom()
    return () => {}
  }, [])
  let { gameId } = useParams()

  const getGameRoom = async () => {
    const gameCollection = 'gamerooms'
    const firebase = await loadFirestore()

    const query = firebase.firestore().collection(gameCollection).doc(gameId)

    let getDoc = query
      .get()
      .then((doc) => {
        if (!doc.exists) {
          setRedirect(true)
        } else {
          const data = { id: doc.id, ...doc.data() }
          setGameRoom(data)
        }
      })
      .catch((err) => {
        console.log('Error getting document', err)
      })
  }

  return (
    <div>
      {redirect ? (
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      ) : (
        gameRoom && (
          <>
            <Helmet>
              <meta charSet="utf-8" />
              <title>{gameRoom.roomName} - Master Mind 0.1</title>
            </Helmet>
            {/* <h2>{gameRoom.roomName}</h2> */}
            <Game gameroom={gameRoom} />
          </>
        )
      )}
    </div>
  )
}

export default GameRoom
