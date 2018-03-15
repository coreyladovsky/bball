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
      { number: stats.ppg <= 0 ? 0 : stats.ppg / stats.mpg * 48, word: "POINTS" },
      { number: stats.apg <= 0 ? 0: stats.apg / stats.mpg * 48, word: "ASSISTS" },
      { number: stats.bpg <= 0 ? 0: stats.bpg / stats.mpg * 48, word: "BLOCKS" },
      { number: stats.spg <= 0 ? 0: stats.spg / stats.mpg * 48, word: "STEALS" },
      { number: stats.rpg <= 0 ? 0: stats.rpg / stats.mpg * 48, word: "REBOUNDS" }
    ];

    const margin = { top: 20, right: 10, bottom: 100, left: 40 };
    const width = 700 - margin.right - margin.left;
    const height = 600 - margin.top - margin.bottom;

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
        return 500 - y(d.number);
      })
      .attr("width", x.bandwidth())
      .attr("height", function(d) {
        return y(d.number);
      })


    g.append("g")
    .attr("class", "axis axis-x")
    .attr("transform", "translate(0," + ( height +  margin.top) + ")")
    .call(d3.axisBottom(x));
  // var a = svg
  //     .selectAll(".lables")
  //     .data(data)
  //     .enter()
  //     .append("text")
  //     .attr("transform", "translate(0," + height + ")")
  //     .attr("dy", ".8em")
  //     .attr("x", x.bandwidth())
  //     .attr("fill", "yellow")
  //
  //     .text(function(d) {
  //       return d.word;
  //     });



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
