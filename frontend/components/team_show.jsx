import React from 'react';

class TeamShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount(){
    this.props.fetchTeamRoster(this.props.match.params.urlName).then(
      (res) => {
        res.team.league.standard.players.forEach(player => {
          this.props.fetchPlayerStats(player.personId);
        });
      }
    );


  }

  render(){
    if(!this.props.team) {
      return null;
    }  else if(this.props.teamPlayers.length > 0){
          let ready = this.props.teamPlayers.every(player => player.ppg);
          if(ready) {
            return <div>All Set!</div>;
          } else {
            return <div>waiting</div>;
          }
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
