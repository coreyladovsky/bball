import React from "react";
import ReactFauxDOM, {withFauxDOM} from "react-faux-dom";
import * as d3 from 'd3';

class DView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
   const faux = this.props.connectFauxDOM('div', 'chart')
   d3.select(faux)
     .append('div')
     .html('Hello World!')
   this.props.animateFauxDOM(800)
 }

 render () {
   return (
     <div>
       <h2>Here is some fancy data:</h2>
       <div className='renderedD3'>
         {this.props.chart}
       </div>
     </div>
   )
 }

  // render() {
  //
  //   const someDiv = new ReactFauxDOM.Element('div')
  //
  //   // const margin = {top: 20, right: 20, bottom: 20, left: 20};
  //   // const width = 500 - margin.right - margin.left ;
  //   // const height = 500 - margin.top - margin.bottom;
  //   // const radius = width / 2;
  //   //
  //   // const arc = d3.arc()
  //   //                 .outterRadius(radius - 10)
  //   //                 .innterRadius(0);
  //   //
  //   // const pie = d3.pie()
  //   //               .sort(null)
  //   //               .value((d) => d.ppg);
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
