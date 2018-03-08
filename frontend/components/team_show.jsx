import React from "react";
import DView from './dview';

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

  render() {
    if (!this.props.team) {
      return null;
    } else if (this.props.teamPlayers.length > 0) {
      let ready = this.props.teamPlayers.every(player => player.ppg);
      if (ready) {
        return (
          <div>
            <h1>{this.props.team.fullName}</h1>

          <DView teamPlayers={this.props.teamPlayers} />
          </div>
        );
      } else {
        return <div>processing</div>;
      }
    } else {
      return <div>working</div>;
    }
  }
}

export default TeamShow;
