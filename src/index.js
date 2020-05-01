import React from 'react'
import ReactDOM from 'react-dom'
import theme from './theme'
import Game from './containers/Game'
import GameRoom from './components/GameRoom'
import Layout from './containers/Layout'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'

import './styles.css'

const App = () => {
  return (
    <Layout theme={theme}>
      <Switch>
        <Route path="/game/:gameId">
          <GameRoom />
        </Route>
        <Route path="/">
          <Game />
        </Route>
      </Switch>
    </Layout>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
