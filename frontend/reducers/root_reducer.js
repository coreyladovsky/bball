import { combineReducers } from "redux";
import PlayerReducer from "./players_reducer";

const RootReducer = combineReducers({
  players: PlayerReducer,
});

export default RootReducer; 
