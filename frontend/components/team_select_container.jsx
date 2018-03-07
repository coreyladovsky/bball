import { connect } from "react-redux";
import TeamSelect from "./team_select";
import { fetchTeamRoster } from "../actions/team_actions";
import { fetchPlayerStats } from "../actions/player_actions";

const mapStateToProps = (state, ownProps) => {
  return ({
    teams: Object.values(state.teams),
    players: state.players,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTeamRoster: teamUrl => dispatch(fetchTeamRoster(teamUrl)),
    fetchPlayerStats: playerID => dispatch(fetchPlayerStats(playerID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamSelect);
