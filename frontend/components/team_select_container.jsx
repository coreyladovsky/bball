import { connect } from "react-redux";
import TeamSelect from "./team_select";
import { fetchTeamRoster } from "../actions/team_actions";
import { fetchPlayerStats } from "../actions/player_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    teams: Object.values(state.teams),
    players: state.players
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTeamRoster: teamUrl => dispatch(fetchTeamRoster(teamUrl)),
    fetchPlayerStats: playerID => dispatch(fetchPlayerStats(playerID))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TeamSelect)
);
