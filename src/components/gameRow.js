import React, { Component } from "react";

class GameRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="row">
          <span className="toggle-button blue" />
          <span className="toggle-button red" />
          <span className="toggle-button green" />
          <span className="toggle-button yellow" />
          <div className="answers">
            <span className="answerPin correct" />
            <span className="answerPin correct" />
            <span className="answerPin incorrect" />
            <span className="answerPin incorrect" />
          </div>
        </div>
      </div>
    );
  }
}

export default GameRow;
