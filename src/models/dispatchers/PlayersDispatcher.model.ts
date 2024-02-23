// actions
import PlayersActions from "src/redux/actions/players.actions";

// interfaces
import type { AppDispatch } from "src/interfaces/redux.interfaces";
import type { IAddPlayerData } from "src/interfaces/Player.interfaces";

export default class PlayersDispatcher {
	private dispatch: AppDispatch;
	private playersActions: PlayersActions;

	constructor(dispatch: AppDispatch) {
		this.dispatch = dispatch;
		this.playersActions = new PlayersActions();
	}

	readonly getUserPlayers = (dispatchData: string) =>
		this.dispatch(this.playersActions.getAllUserPlayers(dispatchData)).unwrap();

	readonly addUserPlayers = (dispatchData: IAddPlayerData[]) =>
		this.dispatch(
			this.playersActions.addUserPlayersBulk(dispatchData)
		).unwrap();
}
