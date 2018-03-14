import React from "react";
import ReactFauxDOM, { withFauxDOM } from "react-faux-dom";
import * as d3 from "d3";
import ImageShow from "./image_show";

class PlayerPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.player) {
      return null;
    }

    const margin = { top: 20, right: 10, botttom: 100, left: 40 };
    const width = 700 - margin.right - margin.left;
    const height = 500 - margin.top - margin.bottom;

    const node = ReactFauxDOM.createElement("svg");

    var svg = d3.select(node)
              .append('svg')
              .attr('width', width + margin.right + margin.left)
              .attr('height', height + margin.top + margin.bottom)


    return (
      <div>
        <div className="player-graph">
          <div className="playerName">{this.props.player.name}</div>
          <div className="profile-container">
            <img
              clasName="profile"
              src={`https://nba-players.herokuapp.com/players/${this.props.player.lastName.toLowerCase()}/${this.props.player.firstName.toLowerCase()}`}
            />
          </div>
          <ul className="player-bio">
            <li>
              Height:{" "}
              {this.props.player.heightFeet +
                "'" +
                this.props.player.heightInches +
                '"'}
            </li>
            <li>Weight: {this.props.player.weightPounds}</li>
            <li>College Name: {this.props.player.collegeName}</li>
            <li>Years Pro: {this.props.player.yearsPro}</li>
          </ul>
          <div>{node.toReact()}</div>
        </div>
      </div>
    );
  }
}

export default PlayerPage;
