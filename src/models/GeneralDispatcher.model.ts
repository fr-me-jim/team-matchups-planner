import { AppDispatch } from "../interfaces/redux.interfaces";

// dispatchers
import AuthDispatcher from "./dispatchers/AuthDispatcher.model";
import PlayersDispatcher from "./dispatchers/PlayersDispatcher.model";

export default class GeneralDispatcher {
	readonly AuthDispatcher: AuthDispatcher;
	readonly PlayersDispatcher: PlayersDispatcher;

	constructor(dispatch: AppDispatch) {
		this.AuthDispatcher = new AuthDispatcher(dispatch);
		this.PlayersDispatcher = new PlayersDispatcher(dispatch);
	}
}
