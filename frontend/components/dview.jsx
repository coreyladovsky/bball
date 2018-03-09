import React from "react";
import ReactFauxDOM, {withFauxDOM} from "react-faux-dom";
import * as d3 from 'd3';

class DView extends React.Component {
  constructor(props) {
    super(props);
  }


 render () {
   var data = this.props.teamPlayers;
   const margin = {top: 20, right: 20, bottom: 20, left: 20};
   const width = 500 - margin.right - margin.left ;
   const height = 500 - margin.top - margin.bottom;
   const radius = width / 2;

   const color = d3.scaleOrdinal()
              .range(["#EADEDB", "#ECDB54", "#E94B3C", "#42A5F5", "#944743", "#DBB1CD", "#EC9787",
            "#00A591", "#6B5B95", "#6C4F3D", "#BC70A4", "#BFD641", "#2E4A62", "#B4B7BA", "#672E3B",
            "#DC4C46", "#223A5E"]);


  const arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

  const labelArc = d3.arc()
    .outerRadius(radius - 50)
    .innerRadius(radius - 50);

  const pie = d3.pie()
    .sort(null)
    .value((d) => d.ppg);

    var node = ReactFauxDOM.createElement('svg');
    var svg = d3.select(node)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

      data.forEach(function (d) {
        d.ppg = +d.ppg ;
        d.lastName = d.lastName;

      });

       var g = svg.selectAll(".arc")
             .data(pie(data))
             .enter().append("g")
             .attr("class", "arc");



       g.append("path")
         .attr("d", arc)
         .style("fill", function(d) { return color(d.data.lastName);});

       g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.lastName; } );


   return node.toReact();

 }

}

export default withFauxDOM(DView);
