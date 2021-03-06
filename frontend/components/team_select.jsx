import React from "react";
import { Route, Link } from "react-router-dom";
import TeamShowContainer from "./team_show_container";

class TeamSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTeamId: null };
    this.changeTeams = this.changeTeams.bind(this);
  }

  componentWillMount() {}

  dropDownTeams() {
    if (this.props.teams.length > 0) {
      return this.props.teams.map(team => {
        return (
          <option key={team.teamId} value={team.teamId}>
            {team.fullName}
          </option>
        );
      });
    } else {
      return null;
    }
  }

  changeTeams(e) {
    for (let i = 0; i < this.props.teams.length; i++) {
      if (this.props.teams[i].teamId === e.currentTarget.value) {
        this.props.history.push(
          `/teams/${this.props.teams[i].urlName}/${this.props.teams[i].teamId}`
        );

        this.props.location.pathname = this.props.history.location.pathname;
        this.setState({ currentTeamId: e.currentTarget.value });
      } else if ("TEAMS" === e.currentTarget.value) {
        this.props.history.push("/");
        this.props.location.pathname = this.props.history.location.pathname;
        this.setState({ currentTeamId: e.currentTarget.value });
      }
    }
  }

  render() {
    let team = this.props.team;
    return (
      <div className="drop-down">
        <div className="drop-down-container-master">
          <div className="drop-container">
            <div className="please-select">Select A Team: </div>
            <select className="selector" onChange={this.changeTeams}>
              <option defaultValue>TEAMS</option>
              {this.dropDownTeams()}
            </select>
          </div>
        </div>

        <div>
          <Route
            exact
            path="/teams/:urlName/:teamId"
            component={TeamShowContainer}
          />
        </div>
      </div>
    );
  }
}

export default TeamSelect;
