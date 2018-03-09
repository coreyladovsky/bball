import React from "react";
import ReactFauxDOM, {withFauxDOM} from "react-faux-dom";
import * as d3 from 'd3';

class DView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount () {



   // const faux = this.props.connectFauxDOM('div', 'chart');
   // var svg = d3.select(faux).append("svg")
   //      .attr("width", width)
   //      .attr("height", height)
   //      .append("g")
   //      .attr("transform", "translate(" + width/2 + "," + height/2 + ")");
   //
   //
   //  let data = this.props.teamPlayers.map((d) => {
   //    d.ppg = +d.ppg;
   //    d.lastName = d.lastName;
   //  });
   //
   //
   //
   //  var g = svg.selectAll(".arc")
   //        .data(pie(data))
   //        .enter().append("g")
   //        .attr("class", "arc");
   //
   //
   //
   //  g.append("path")
   //    .attr("d", arc)
   //    .style("fill", "blue");
   //
   //  g.append("text")
   //    .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
   //    .attr("dy", ".35em")
   //    .text(function(d) { return d.data.lastName; } );

 }

 render () {
   var data = this.props.teamPlayers;
   const margin = {top: 20, right: 20, bottom: 20, left: 20};
   const width = 500 - margin.right - margin.left ;
   const height = 500 - margin.top - margin.bottom;
   const radius = width / 2;

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
        d.ppg = +d.ppg;
        d.lastName = d.lastName;
      });

       var g = svg.selectAll(".arc")
             .data(pie(data))
             .enter().append("g")
             .attr("class", "arc");



       g.append("path")
         .attr("d", arc)
         .style("fill", "blue");

       g.append("text")
         .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
         .attr("dy", ".35em")
         .text(function(d) { return d.data.lastName; } );


   return node.toReact();

 }

  // render() {
  //
  //   const someDiv = new ReactFauxDOM.Element('div')
  //
  //   //
  //
  //   // const svg = d3.select()
  //
  //
  //   const paragraph = new ReactFauxDOM.Element('p', someDiv)
  //   paragraph.textContent = 'Hello, World!'
  //   paragraph.style.color ="red"
  //
  //   return(
  //     <div>
  //       {paragraph.toReact()}
  //     </div>
  // );}
}

export default withFauxDOM(DView);
