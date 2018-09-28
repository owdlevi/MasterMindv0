import React, { Component } from "react";
import PropTypes from "prop-types";
import GameRow from "./components/gameRow";
import GameRowSelect from "./components/gameRowSelect";
import { gameSettings } from "./gameConfig";

class Game extends Component {
  static propTypes = {
    // value: PropTypes.string.isRequired
  };

  constructor(props) {
    super();

    this.state = {
      theCode: this.generateRandomCode(
        gameSettings.maxOption,
        gameSettings.codeOption
      )
    };
  }

  lastCode = () => {};

  generateRandomCode = (max, options) => {
    const code = [];

    for (let i = 0; i < max; i++) {
      let randomId = Math.floor(Math.random() * options.length);

      code.push(options[randomId]);
    }
    return code;
  };

  render() {
    console.log(this.state);
    return (
      <div className="gamearea">
        <GameRow />
        <GameRowSelect lastCode={this.lastCode()} />
      </div>
    );
  }
}

export default Game;
