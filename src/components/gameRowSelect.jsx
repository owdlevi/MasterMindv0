import React, { Component } from 'react'
import GameCodeOption from './gameCodeOption'
import SelectCodeUp from './selectCodeUp'

import { gameSettings } from '../gameConfig'

class GameRowSelect extends Component {
  constructor(props) {
    super()
    this.state = {
      selectedCode: new Array(gameSettings.maxOption).fill({})
    }
  }
  render() {
    console.log(this.state.selectedCode)
    const codeButton = this.state.selectedCode.map((code, index) => {
      return <GameCodeOption key={index} />
    })
    console.log(`check data ${codeButton}`)
    return (
      <div className="game-select">
        <div className="toggle-button">
          <SelectCodeUp />
        </div>
        <div className="row">{codeButton}</div>
      </div>
    )
  }
}

export default GameRowSelect
