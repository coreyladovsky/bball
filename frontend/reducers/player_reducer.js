import { RECEIVE_PLAYERS, RECEIVE_PLAYER } from "../actions/player_actions";
import merge from "lodash/merge";


const PlayerReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
      case RECEIVE_PLAYERS:
        return action.players;
      case RECEIVE_PLAYER:
        return merge({}, oldState, {[action.player.id]: action.player});
      default:
        return oldState;
  }
};

export default PlayerReducer;
