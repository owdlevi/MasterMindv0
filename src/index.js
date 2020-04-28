/** @jsx jsx */
import ReactDOM from 'react-dom'
import { ThemeProvider, jsx } from 'theme-ui'
import theme from './theme'
import Game from './containers/Game'
import Layout from './containers/Layout'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './styles.css'

const App = () => {
  return (
    <Layout theme={theme}>
      <Router>
        <Switch>
          <Route path="/game/:gameId">
            <h1>New Game</h1>
            <Game />
          </Route>
          <Route path="/">
            <Game />
          </Route>
        </Switch>
      </Router>
    </Layout>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
