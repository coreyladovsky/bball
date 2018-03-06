import { RECEIVE_PLAYERS, RECEIVE_PLAYER } from "../actions/player_actions";
import merge from "lodash/merge";

let cleanerData = (playerArray) => {
  var allPlayerHash = {};
  playerArray.forEach(playerObj => {
     allPlayerHash[playerObj.personId] = playerObj;
  });
  return allPlayerHash;
};


const PlayerReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
      case RECEIVE_PLAYERS:
        return cleanerData(action.players.league.standard);
      case RECEIVE_PLAYER:
        return merge({}, oldState, {[action.playerID]: action.player.league.standard.stats.latest});
      default:
        return oldState;
  }
};

export default PlayerReducer;
