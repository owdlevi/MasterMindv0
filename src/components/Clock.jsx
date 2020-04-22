import React, { useState } from 'react'
import useInterval from '../hooks/useInterval'

const Clock = ({ startTime, stopTimer }) => {
  const [currentTime, setCurrentTime] = useState(Date.now())

  useInterval(
    () => {
      setCurrentTime(Date.now())
    },
    stopTimer ? null : 100
  )

  const timeDifference = Math.floor((currentTime - startTime) / 1000)
  const minute = Math.floor((timeDifference / 60) % 60)
  const seconds = timeDifference % 60
  const milisecond = Math.floor(currentTime - startTime) % 100
  const secondsDisplay = seconds < 10 ? `0${seconds}` : `${seconds}`
  return (
    <>
      {minute > 0 && <span>{minute}:</span>}
      <span>{seconds}</span>
      <span>.{milisecond}</span>
    </>
  )
}

export default Clock
