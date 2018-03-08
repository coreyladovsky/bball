import * as APIUtil from "../util/api_util";

export const RECEIVE_TEAMS = "RECEIVE_TEAMS";
export const RECEIVE_TEAM = "RECEIVE_TEAM";

export const receiveTeams = teams => ({
  type: RECEIVE_TEAMS,
  teams
});


export const receiveTeam = team => ({
  type: RECEIVE_TEAM,
  team
});


export const fetchAllTeams  = () => dispatch =>
  APIUtil.fetchData("http://data.nba.net/data/10s/prod/v1/2017/teams.json").then(
    teams => {

      dispatch(receiveTeams(JSON.parse(teams)));}
  );

  export const fetchTeamRoster = (urlName) => dispatch =>
  APIUtil.fetchData(`http://data.nba.net/data/10s/prod/v1/2017/teams/${urlName}/roster.json`).then(
    teamRoster => dispatch(receiveTeam(teamRoster))
  );
