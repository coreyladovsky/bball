import React from "react";
import ReactFauxDOM, {withFauxDOM} from "react-faux-dom";
import * as d3 from 'd3';

class DView extends React.Component {
  constructor(props) {
    super(props);
  }

 render () {
   const margin = {top: 0, right: 0, bottom: 0, left: 0};
   var data = this.props.teamPlayers;
   const width = 800 - margin.right - margin.left ;
   const height = 800 - margin.top - margin.bottom;
   const radius = width / 2;

   const color = d3.scaleOrdinal(d3.schemeCategory20);

  const arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius  - 50);

    const arc2 = d3.arc()
      .outerRadius(radius - 80)
      .innerRadius(radius  - 120);

  const pie = d3.pie()
    .sort(null)
    .value((d) => d.ppg / d.mpg);

    const pie2 = d3.pie()
      .sort(null)
      .value((d) => d.rpg / d.mpg);


    var node = ReactFauxDOM.createElement('svg');
    
    var svg = d3.select(node)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width/2 + "," + height/2 + ")");


      data.forEach(function (d) {
        d.ppg = +d.ppg ;
        d.mpg = +d.mpg ;
        d.rpg = +d.rpg;
        d.bpg = +d.bpg;
        d.apg = +d.apg;
        d.spg = +d.spg;
        d.name = d.firstName + " " + d.lastName;

      });

       var g = svg.selectAll(".arc")
             .data(pie(data))
             .enter().append("g")
             .attr("class", "arc");


       g.append("path")
         .attr("d", arc)
         .style("fill", function(d) { return color(d.data.name);})

       var h = svg.selectAll(".arc2")
       .data(pie2(data))
       .enter().append("g")
       .attr("class", "arc2");

       h.append("path")
        .attr("d", arc2)
        .style("fill", function(d) { return color(d.data.name);} );



   return (
     <div className="d3">
       {node.toReact()}
     </div>
   );
 }

}

export default withFauxDOM(DView);
