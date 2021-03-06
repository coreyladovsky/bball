import { RECEIVE_PLAYERS, RECEIVE_PLAYER } from "../actions/player_actions";
import merge from "lodash/merge";

let cleanerData = playerArray => {
  var allPlayerHash = {};
  playerArray.forEach(playerObj => {
    allPlayerHash[playerObj.personId] = playerObj;
  });
  return allPlayerHash;
};

const PlayerReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PLAYERS:
      let newState = merge(
        {},
        oldState,
        cleanerData(action.players.league.standard)
      );
      return newState;
    case RECEIVE_PLAYER:
      return merge({}, oldState, {
        [action.playerID]: Object.values(action.player.league)[0].stats.careerSummary
      });
    default:
      return oldState;
  }
};

export default PlayerReducer;
