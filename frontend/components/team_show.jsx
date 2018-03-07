import React from 'react';

class TeamShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount(){
    this.props.fetchTeamRoster(this.props.match.params.urlName);
  }

  render(){
    if(!this.props.team) {
      return null;
    } else {
      return(
        <div>
          working
        </div>
      );
    }
  }
}

export default TeamShow;
