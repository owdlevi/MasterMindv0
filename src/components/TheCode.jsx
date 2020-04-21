/** @jsx jsx */
import { jsx } from 'theme-ui'

const TheCode = ({ showCode, thecode }) => {
  return (
    <div>
      <div
        className="thecode"
        sx={{
          height: '60px',
          width: '100%',
          backgroundColor: 'whitesmoke',
          boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 4px 0px rgba(0,0,0,.12)'
        }}>
        The Code
      </div>
    </div>
  )
}

export default TheCode
