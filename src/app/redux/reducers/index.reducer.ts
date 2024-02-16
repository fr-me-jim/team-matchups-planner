import { combineReducers } from "redux";

// REDUCERS //
import playersReducer from "./players.reducer";

export default combineReducers({
	players: playersReducer,
});