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
    let stats = this.props.player;
    const data = [
      {
        number: stats.ppg <= 0 ? 0 : stats.ppg / stats.mpg * 48,
        word: "POINTS"
      },
      {
        number: stats.apg <= 0 ? 0 : stats.apg / stats.mpg * 48,
        word: "ASSISTS"
      },
      {
        number: stats.bpg <= 0 ? 0 : stats.bpg / stats.mpg * 48,
        word: "BLOCKS"
      },
      {
        number: stats.spg <= 0 ? 0 : stats.spg / stats.mpg * 48,
        word: "STEALS"
      },
      {
        number: stats.rpg <= 0 ? 0 : stats.rpg / stats.mpg * 48,
        word: "REBOUNDS"
      }
    ];

    const margin = { top: 20, right: 10, bottom: 100, left: 40 };
    const width = 700 - margin.right - margin.left;
    const height = 525 - margin.top - margin.bottom;
    const color = d3.scaleOrdinal(d3.schemeCategory20);

    const node = ReactFauxDOM.createElement("svg");

    data.forEach(function(d) {
      d.number = +d.number;
      d.word = d.word;
    });

    var svg = d3
      .select(node)
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .attr("class", "svg-player");
    var g = svg
      .append("g")
      .attr("transform", "translate(" + 50 + "," + 10 + ")");

    //
    var x = d3
      .scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(
        data.map(function(d) {
          return d.word;
        })
      );

    var y = d3
      .scaleLinear()
      .rangeRound([0, height])
      .domain([
        0,
        d3.max(data, function(d) {
          return d.number;
        })
      ]);

    var y2 = d3
      .scaleLinear()
      .rangeRound([0, height])
      .domain([
        d3.max(data, function(d) {
          return d.number;
        }),
        0
      ]);

    g
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) {
        return x(d.word);
      })
      .attr("y", function(d) {
        return 425 - y(d.number);
      })
      .attr("width", x.bandwidth())
      .attr("height", function(d) {
        return y(d.number);
      })
      .attr("fill", function(d) {
        return color(d.word);
      });

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(function(d) {
        return d.number.toFixed(2);
      })
      .attr("y", function(d) {
        return 425 - y(d.number) + 5;
      })
      .attr("x", function(d) {
        return x(d.word) + 87;
      });

    g
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + (height + margin.top) + ")")
      .call(d3.axisBottom(x));

    g
      .append("g")
      .attr("class", "y-axis")
      .attr("transform", "translate(0," + margin.top + ")")
      .call(d3.axisLeft(y2));

    return (
      <div className="player-modal-container">
        <div className="close-button">
          <div className="close-text">Close X</div>
        </div>
        <div className="player-graph">
          <div className="playerName">{this.props.player.name}</div>
          <div className="svg-title">Stats Per Minute X 48</div>
          <div className="profile-container">
            <div className="all-player-info-container">
              <ul className="player-bio">
                <li>
                  <img
                    clasName="profile"
                    src={`https://nba-players.herokuapp.com/players/${this.props.player.lastName.toLowerCase()}/${this.props.player.firstName.toLowerCase()}`}
                  />
                </li>
                <li>College Name: {this.props.player.collegeName}</li>
                <li>
                  Height:{" "}
                  {this.props.player.heightFeet +
                    "'" +
                    this.props.player.heightInches +
                    '"'}
                </li>
                <li>Weight: {this.props.player.weightPounds}</li>
                <li>Years Pro: {this.props.player.yearsPro}</li>
              </ul>
              {node.toReact()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerPage;
