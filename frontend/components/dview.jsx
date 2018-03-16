import React from "react";
import ReactFauxDOM, { withFauxDOM } from "react-faux-dom";
import * as d3 from "d3";
import ImageShow from "./image_show";
import PlayerPage from "./player_page";

class DView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: null, player: null };
    this.imageHover = this.imageHover.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.playerInfo = this.playerInfo.bind(this);
    this.toggelModal = this.toggelModal.bind(this);
  }

  // componentDidMount() {
  //   $(".player-modal").css("display, none")
  // }

  toggelModal(e) {
    $(".player-modal").css("display", "none");
    $("body").css("overflow-y", "scroll");
  }

  playerInfo(e) {
    this.setState({player : e });
    $(".player-modal").css("display", "block");
    $("body").css("overflow-y", "hidden");
  }

  imageHover(e) {
    let headshot;
    let id;
    if (e.data) {
      headshot = `https://nba-players.herokuapp.com/players/${e.data.lastName.toLowerCase()}/${e.data.firstName.toLowerCase()}`;
      id = "." + e.data.personId;
    } else {
      headshot = `https://nba-players.herokuapp.com/players/${e.lastName.toLowerCase()}/${e.firstName.toLowerCase()}`;
      id = "." + e.personId;
    }
    this.setState({ image: headshot });

    $(".normal").addClass("muted");
    $(".muted").removeClass("normal");
    $(id)
      .removeClass("muted")
      .addClass("not-muted");
  }

  removeImage(e) {
    let id;
    this.setState({ image: null });
    $(".muted")
      .addClass("normal")
      .removeClass("muted");
    if (e.data) {
      id = "." + e.data.personId;
    } else {
      id = "." + e.personId;
    }
    $(id)
      .removeClass("not-muted")
      .addClass("normal");
  }

  render() {
    const margin = { top: 0, right: 0, bottom: 0, left: 0 };
    var data = this.props.teamPlayers;

    const width = 700 - margin.right - margin.left;
    const height = 700 - margin.top - margin.bottom;
    const radius = width / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory20);

    const arcMinusText = d3
      .arc()
      .outerRadius(radius + 100)
      .innerRadius(radius + 80)
      .startAngle(0)
      .endAngle(360);

    const arcMinus = d3
      .arc()
      .outerRadius(radius + 60)
      .innerRadius(radius + 20);

    const arcText = d3
      .arc()
      .outerRadius(radius)
      .innerRadius(radius - 40)
      .startAngle(0)
      .endAngle(360);

    const arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 50);

    const arc2Text = d3
      .arc()
      .outerRadius(radius - 70)
      .innerRadius(radius - 110)
      .startAngle(0)
      .endAngle(360);

    const arc2 = d3
      .arc()
      .outerRadius(radius - 80)
      .innerRadius(radius - 120);

    const arc3Text = d3
      .arc()
      .outerRadius(radius - 140)
      .innerRadius(radius - 180)
      .startAngle(0)
      .endAngle(360);

    const arc3 = d3
      .arc()
      .outerRadius(radius - 150)
      .innerRadius(radius - 190);

    const arc4Text = d3
      .arc()
      .outerRadius(radius - 210)
      .innerRadius(radius - 250)
      .startAngle(0)
      .endAngle(360);

    const arc4 = d3
      .arc()
      .outerRadius(radius - 220)
      .innerRadius(radius - 260);

    const arc5Text = d3
      .arc()
      .outerRadius(radius - 280)
      .innerRadius(radius - 320)
      .startAngle(0)
      .endAngle(360);

    const arc5 = d3
      .arc()
      .outerRadius(radius - 290)
      .innerRadius(0);

    const pieMinus = d3
      .pie()
      .sort(null)
      .value(d => d.mpg);

    const pieMinusText = d3.pie().value(d => d);

    const pie = d3
      .pie()
      .sort(null)
      .value(d => {
        if (d.ppg < 0) {
          return 0;
        } else {
          return d.ppg / d.mpg;
        }
      });

    const pie2 = d3
      .pie()
      .sort(null)
      .value(d => {
        if (d.rpg < 0) {
          return 0;
        } else {
          return d.rpg / d.mpg;
        }
      });

    const pie3 = d3
      .pie()
      .sort(null)
      .value(d => {
        if (d.apg < 0) {
          return 0;
        } else {
          return d.apg / d.mpg;
        }
      });

    const pie4 = d3
      .pie()
      .sort(null)
      .value(d => {
        if (d.spg < 0) {
          return 0;
        } else {
          return d.spg / d.mpg;
        }
      });

    const pie5 = d3
      .pie()
      .sort(null)
      .value(d => {
        if (d.bpg < 0) {
          return 0;
        } else {
          return d.bpg / d.mpg;
        }
      });

    var node = ReactFauxDOM.createElement("svg");

    var svg = d3
      .select(node)
      .attr("width", "1300")
      .attr("height", 1000)
      .attr("class", "svg-circles")
      .append("g")
      .attr(
        "transform",
        "translate(" + (width / 2 + 100) + "," + (height / 2 + 100) + ")"
      );

    data.forEach(function(d) {
      d.ppg = +d.ppg;
      d.mpg = +d.mpg;
      d.rpg = +d.rpg;
      d.bpg = +d.bpg;
      d.apg = +d.apg;
      d.spg = +d.spg;
      d.name = d.firstName + " " + d.lastName;
      d.firstName = d.firstName;
      d.lastName = d.lastName;
      d.personId = d.personId;
    });

    var a = svg
      .selectAll(".labels")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", function(d, i) {
        return "translate(600," + (i - 8) * 30 + ")";
      });

    a
      .append("rect")
      .attr("width", 15)
      .attr("height", 15)
      .attr("class", function(d) {
        return d.personId + " normal";
      })
      .style("fill", function(d) {
        return color(d.name);
      })
      .on("mouseover", this.imageHover)
      .on("mouseout", this.removeImage);

    a
      .append("text")
      .attr("dy", ".8em")
      .attr("x", 25)
      .attr("fill", "white")
      .attr("class", function(d) {
        return d.personId + " normal ";
      })
      .text(function(d) {
        return d.name;
      })
      .on("mouseover", this.imageHover)
      .on("mouseout", this.removeImage)
      .on("click", this.playerInfo);

    var g = svg
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    g
      .append("path")
      .attr("d", arc)
      .attr("class", function(d) {
        return d.data.personId + " normal";
      })
      .style("fill", function(d) {
        return color(d.data.name);
      })
      .on("mouseover", this.imageHover)
      .on("mouseout", this.removeImage);

    var h = svg
      .selectAll(".arc2")
      .data(pie2(data))
      .enter()
      .append("g")
      .attr("class", "arc2");

    h
      .append("path")
      .attr("d", arc2)
      .attr("class", function(d) {
        return d.data.personId + " normal";
      })

      .style("fill", function(d) {
        return color(d.data.name);
      })
      .on("mouseover", this.imageHover)
      .on("mouseout", this.removeImage);

    var j = svg
      .selectAll(".arc3")
      .data(pie3(data))
      .enter()
      .append("g")
      .attr("class", "arc3");

    j
      .append("path")
      .attr("d", arc3)
      .attr("class", function(d) {
        return d.data.personId + " normal";
      })

      .style("fill", function(d) {
        return color(d.data.name);
      })
      .on("mouseover", this.imageHover)
      .on("mouseout", this.removeImage);

    var k = svg
      .selectAll(".arc4")
      .data(pie4(data))
      .enter()
      .append("g")
      .attr("class", "arc4");

    k
      .append("path")
      .attr("d", arc4)
      .attr("class", function(d) {
        return d.data.personId + " normal";
      })
      .style("fill", function(d) {
        return color(d.data.name);
      })
      .on("mouseover", this.imageHover)
      .on("mouseout", this.removeImage);

    var l = svg
      .selectAll(".arc5")
      .data(pie5(data))
      .enter()
      .append("g")
      .attr("class", "arc5");

    l
      .append("path")
      .attr("d", arc5)
      .attr("class", function(d) {
        return d.data.personId + " normal";
      })

      .style("fill", function(d) {
        return color(d.data.name);
      })
      .on("mouseover", this.imageHover)
      .on("mouseout", this.removeImage);

    var m = svg
      .selectAll(".arcMinus")
      .data(pieMinus(data))
      .enter()
      .append("g")
      .attr("class", "arcMinus");

    m
      .append("path")
      .attr("d", arcMinus)
      .attr("class", function(d) {
        return d.data.personId + " normal";
      })

      .style("fill", function(d) {
        return color(d.data.name);
      })
      .on("mouseover", this.imageHover)
      .on("mouseout", this.removeImage);

    svg
      .append("path")
      .attr("id", "path")
      .attr("d", arcMinusText);

    svg
      .append("text")
      .attr("x", 8)
      .attr("dy", 28)
      .append("textPath")
      .attr("class", "textpath")
      .attr("fill", "white")
      .attr("xlink:href", "#path")
      .text(
        "MINUTES --------------------------------------- MINUTES--------------------------------------- MINUTES  --------------------------------------- MINUTES  --------------------------------------- MINUTES   -------------------------------------- MINUTES   ---------------------------------------MINUTES   --------------------------------------MINUTES      --------------------------------------MINUTES  -----------------------------------MINUTES -------------------------------------- "
      );

    svg
      .append("path")
      .attr("id", "reboundPath")
      .attr("d", arc2Text);

    svg
      .append("text")
      .append("textPath")
      .attr("class", "textpath")
      .attr("fill", "white")
      .attr("xlink:href", "#reboundPath")
      .text(
        "REBOUNDS --------------------------------------- REBOUNDS--------------------------------------- REBOUNDS  -------------------------------------- REBOUNDS  -------------------------------------- REBOUNDS   -------------------------------------- REBOUNDS   ---------------------------"
      );

    svg
      .append("path")
      .attr("id", "pointsPath")
      .attr("d", arcText);

    svg
      .append("text")
      .append("textPath")
      .attr("class", "textpath")
      .attr("fill", "white")
      .attr("xlink:href", "#pointsPath")
      .text(
        "POINTS ------------------------------------- POINTS-------------------------------------- POINTS  ---------------------------------------- POINTS  --------------------------------------- POINTS   -------------------------------------- POINTS   ------------------------------- POINTS   ------------------------------- POINTS   ---------------------------------------------------------"
      );

    svg
      .append("path")
      .attr("id", "assistPath")
      .attr("d", arc3Text);

    svg
      .append("text")
      .append("textPath")
      .attr("class", "textpath")
      .attr("fill", "white")
      .attr("xlink:href", "#assistPath")
      .text(
        "ASSISTS ------------------------------------- ASSISTS------------------------------------- ASSISTS  ------------------------------------ ASSISTS  ------------------------------------- ASSISTS  ------------------------------ "
      );

    svg
      .append("path")
      .attr("id", "stealPath")
      .attr("d", arc4Text);

    svg
      .append("text")
      .append("textPath")
      .attr("class", "textpath")
      .attr("fill", "white")
      .attr("xlink:href", "#stealPath")
      .text(
        "STEALS --------------------------------------------- STEALS--------------------------------------------- STEALS  ------------------------------------ "
      );

    svg
      .append("path")
      .attr("id", "blockPath")
      .attr("d", arc5Text);

    svg
      .append("text")
      .append("textPath")
      .attr("class", "textpath")
      .attr("fill", "white")
      .attr("xlink:href", "#blockPath")
      .text(
        "BLOCKS ---------------------------- BLOCKS --------------------------- "
      );

    return (
      <div>
        <ImageShow img={this.state.image} />
        <div className="d3">{node.toReact()}</div>

          <div className="player-modal" onClick={this.toggelModal}><PlayerPage player={this.state.player} /></div>
      </div>
    );
  }
}

export default withFauxDOM(DView);
