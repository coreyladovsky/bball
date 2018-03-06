import { RECEIVE_TEAMS, RECEIVE_TEAM } from "../actions/team_actions";
import merge from "lodash/merge";


let cleanerData = (teamArray) => {
  var allTeamsHash = {};
  teamArray.forEach(teamObj => {
    if(teamObj.isNBAFranchise) {
      allTeamsHash[teamObj.teamId] = teamObj;
    }
  });
  return allTeamsHash;
};

let cleanerTeam = (playerArray) => {
  return playerArray.map(playerObj => {
    return playerObj.personId;
  });
};


const TeamReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
      case RECEIVE_TEAMS:
        return cleanerData(action.teams.league.standard);
      case RECEIVE_TEAM:
         let newState = Object.assign({}, oldState);
         newState[action.team.league.standard.teamId].playerRoster = cleanerTeam(action.team.league.standard.players);
         return newState;
      default:
        return oldState;
  }
};

export default TeamReducer;
