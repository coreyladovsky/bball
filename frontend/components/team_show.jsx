import React from 'react';

class TeamShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount(){
    debugger
    this.props.fetchTeamRoster(this.props.match.params.urlName);
  }

  render(){
    debugger
    if(!this.props.team) {
      return null;
    }
    return(
      <div>
        {this.props.team.urlName}
      </div>
    );
  }
}

export default TeamShow;
