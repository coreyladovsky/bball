import React from "react";
import ReactDOM from "react-dom";
import Root from './root';
import configureStore from "./store/store";
import {fetchAllPlayers, fetchPlayerStats} from './actions/player_actions';
import {fetchAllTeams, fetchTeamRoster} from './actions/team_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchAllTeams = fetchAllTeams;
  window.fetchTeamRoster = fetchTeamRoster;
  window.fetchPlayerStats = fetchPlayerStats;
  window.fetchAllPlayers = fetchAllPlayers;
});
