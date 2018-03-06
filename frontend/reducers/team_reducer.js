import { RECEIVE_TEAMS, RECEIVE_TEAM } from "../actions/team_actions";
import merge from "lodash/merge";


const TeamReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
      case RECEIVE_TEAMS:
        return action.teams;
      case RECEIVE_TEAM:
        return merge({}, oldState, {[action.team.id]: action.team});
      default:
        return oldState;
  }
};

export default TeamReducer;
