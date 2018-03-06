import { combineReducers } from "redux";
import PlayerReducer from "./players_reducer";
import TeamReducer from "./team_reducer";

const RootReducer = combineReducers({
  players: PlayerReducer,
  teams: TeamReducer
});

export default RootReducer;
