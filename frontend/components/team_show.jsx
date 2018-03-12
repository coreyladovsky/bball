import React from "react";
import DView from "./dview";

class TeamShow extends React.Component {
  constructor(props) {
    super(props);
    this.lastUrl = this.props.location.pathname;
  }

  componentWillMount() {}

  componentDidMount() {
    this.props.fetchTeamRoster(this.props.match.params.urlName).then(res => {
      res.team.league.standard.players.forEach(player => {
        this.props.fetchPlayerStats(player.personId);
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.lastUrl) {
      this.lastUrl = nextProps.location.pathname;
      nextProps.fetchTeamRoster(nextProps.match.params.urlName).then(res => {
        res.team.league.standard.players.forEach(player => {
          this.props.fetchPlayerStats(player.personId);
        });
      });
    }
  }

  spinner() {
    return (
      <div className="spin-container">
        <div className="small-spin">
          <i id="spin" className="fa fa-spinner fa-pulse fa-3x fa-fw" />
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.team) {
      return null;
    } else if (this.props.teamPlayers.length > 0) {
      let ready = this.props.teamPlayers.every(player => {
        if (player) {
          if (player.ppg) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
      if (ready) {
        return (
          <div>
            <h1 className="teamName">{this.props.team.fullName}</h1>

            <DView teamPlayers={this.props.teamPlayers} />
          </div>
        );
      } else {
        return this.spinner();
      }
    } else {
      return this.spinner();
    }
  }
}

export default TeamShow;
