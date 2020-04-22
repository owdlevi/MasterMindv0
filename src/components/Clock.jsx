import React, { useState } from 'react'
import useInterval from '../hooks/useInterval'

const Clock = ({ startTime }) => {
  const [currentTime, setCurrentTime] = useState(Date.now())

  useInterval(() => {
    setCurrentTime(Date.now())
  }, 1000)

  const timeDifference = Math.floor((currentTime - startTime) / 1000)
  const minute = Math.floor((timeDifference / 60) % 60)
  const seconds = Math.floor(timeDifference % 60)
  const secondsDisplay = seconds < 10 ? `0${seconds}` : `${seconds}`
  return (
    <>
      {minute > 0 && <span>{minute}:</span>}
      {secondsDisplay}
    </>
  )
}

export default Clock
