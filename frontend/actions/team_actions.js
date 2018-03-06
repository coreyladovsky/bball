import * as APIUtil from "../util/api_util";

export const RECEIVE_TEAMS = "RECEIVE_TEAMS";
export const RECEIVE_TEAM = "RECEIVE_TEAM";

export const receiveTeams = players => ({
  type: RECEIVE_TEAMS,
  players
});


export const receiveTeam = player => ({
  type: RECEIVE_TEAM,
  player
});


export const fetchAllTeams  = () => dispatch =>
  APIUtil.fetchData("http://data.nba.net/data/10s/prod/v1/2017/teams.json").then(
    teams => dispatch(receiveTeams(teams))
  );

  export const fetchTeamRoster = (urlName) => dispatch =>
  APIUtil.fetchData(`http://data.nba.net/data/10s/prod/v1/2017/teams/${urlName}/roster.json`).then(
    teamRoster => dispatch(receiveTeam(teamRoster))
  );
