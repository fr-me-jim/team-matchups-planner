import { combineReducers } from "redux";

// REDUCERS //
import authReducer from "./auth.reducer";
import playersReducer from "./players.reducer";

export default combineReducers({
	auth: authReducer,
	players: playersReducer,
});
