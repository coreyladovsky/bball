import React from "react";

class TeamShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentTeamId: null };
    this.changeTeams = this.changeTeams.bind(this);
  }

  componentWillMount() {

  }

  dropDownTeams() {
    if(this.props.teams.length > 0) {
      return this.props.teams.map((team) => {
        return <option key={team.teamId} value={team.urlName}>{team.fullName}</option>;
      });

    } else {
      return null;
    }
  }

  changeTeams(e) {
    debugger
    this.props.fetchTeamRoster(e.currentTarget.value);
  }

  render(){
    return(
      <div>
        <h1>Please select the team you wish to learn about: </h1>
        <select onChange={this.changeTeams}>
          <option defaultValue>TEAMS</option>
          {this.dropDownTeams()}
        </select>

        <div>
          {this.props.team}
        </div>
      </div>
    );
  }
}

export default TeamShow;
