import { connect } from "react-redux";
import teamShow from "./team_show";
import { fetchTeamRoster } from "../actions/team_actions";
import { fetchPlayerStats } from "../actions/player_actions";

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    teams: Object.values(state.teams),
    players: state.players,
    // team: state.teams[ownProps.match.params.teamId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTeamRoster: teamUrl => dispatch(fetchTeamRoster(teamUrl)),
    fetchPlayerStats: playerID => dispatch(fetchPlayerStats(playerID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(teamShow);
