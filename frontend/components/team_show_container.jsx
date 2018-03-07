import { connect } from "react-redux";
import TeamShow from "./team_show";
import { fetchTeamRoster } from "../actions/team_actions";
import { fetchPlayerStats } from "../actions/player_actions";

const mapStateToProps = (state, ownProps) => {
  let teamPlayers = [];
  if(state.teams[ownProps.match.params.teamId] !== undefined) {
    if(state.teams[ownProps.match.params.teamId].playerRoster  !== undefined && !jQuery.isEmptyObject(state.players) ){
      state.teams[ownProps.match.params.teamId].playerRoster.forEach(playerId => {
        teamPlayers.push(state.players[playerId]);
      });
    }
  }
  return ({
    team: state.teams[ownProps.match.params.teamId],
    teamPlayers
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTeamRoster: teamUrl => dispatch(fetchTeamRoster(teamUrl)),
    fetchPlayerStats: playerID => dispatch(fetchPlayerStats(playerID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamShow);
