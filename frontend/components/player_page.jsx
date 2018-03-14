import React from 'react';
import ReactFauxDOM, { withFauxDOM } from "react-faux-dom";
import * as d3 from "d3";

class PlayerPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    if(!this.props.player) {
      return null;
    }
    return(
        <div >
          PLAYER INFO
        </div>
    );

  }
}

export default PlayerPage;
