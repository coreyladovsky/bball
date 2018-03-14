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
    const data = [{number: ((stats.ppg / stats.mpg) * 48), word: "POINTS"},
                  {number: ((stats.apg / stats.mpg) * 48), word: "ASSISTS"},
                  {number: ((stats.bpg / stats.mpg) * 48), word: "BLOCKS"},
                  {number: ((stats.spg / stats.mpg) * 48), word: "STEALS"},
                  {number: ((stats.rpg / stats.mpg) * 48), word: "REBOUNDS"},
                ];

    const margin = { top: 20, right: 10, bottom: 100, left: 40 };
    const width = 700 - margin.right - margin.left;
    const height = 500 - margin.top - margin.bottom;

    const node = ReactFauxDOM.createElement("svg");

    data.forEach(function(d) {
      d.number = +d.number;
      d.word = d.word;
    });

    var svg = d3
      .select(node)
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .attr("class", "svg-player")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.right + ")");

      var x = d3.scaleLinear()
              .domain([0, d3.max(data, function(d) {return d.number;})])
              .range([0,width]);

      var y = d3.scaleBand()
              .domain(data.map(function(d){ return d.word ;}))
              .rangeRound([0, height])
              .padding(0.1);


      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr("x", 0)
        .attr("y", function(d, i) {
          return y(d.word);
        })
        .attr("height", function(d, i){
          return y.bandwidth()-1;
        })
        .attr("width", function(d) {
          return x(d.number);
        })
        // .attr("height", 0)

        // .attr("y", height)
        // .attr({
        //   "x": function(d) {return xScale(d.word); },
        //   "y": function(d) {return yScale(d.number); },
        //   "width": xScale.rangeBand(),
        //   "height": function(d) {return height - yScale(d.number); }
        // })
        .style("fill", "black");

        // .attr("x", function(d) { return xScale(d.ppg); })
        // .attr("y", function(d) { return yScale(d.ppg); })
        // .attr('width', xScale.rangeBand())
        // .attr("heigth", function(d) { return height - yScale(d.ppg) ;});

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
