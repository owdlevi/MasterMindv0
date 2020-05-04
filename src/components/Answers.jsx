/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useTrail, animated } from 'react-spring'

const Answers = ({ pins }) => {
  const trail = useTrail(pins.length, { opacity: 1, from: { opacity: 0 } })

  return (
    <div className="answers">
      {/* {choices.pins.map((pin, i) => ( */}
      {trail.map((props, i) => (
        <animated.span style={props} key={i} className="answerPin" sx={{ backgroundColor: pins[i] }} />
      ))}
    </div>
  )
}

export default Answers
