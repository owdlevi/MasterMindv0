/** @jsx jsx */
import ReactDOM from 'react-dom'
import { ThemeProvider, jsx } from 'theme-ui'
import theme from './theme'
import Game from './containers/Game'

import './styles.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
