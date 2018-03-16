import { connect } from "react-redux";
import { withRouter } from "react-router";

import App from "./app";
import { fetchAllTeams } from "./actions/team_actions";
import { fetchAllPlayers } from "./actions/player_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    players: state.players,
    teams: state.teams
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllTeams: () => dispatch(fetchAllTeams()),
    fetchAllPlayers: () => dispatch(fetchAllPlayers())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
