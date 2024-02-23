import { createSlice, Slice } from "@reduxjs/toolkit";

// interface
import type { IPlayersInitialState } from "src/interfaces/Player.interfaces";

// actions
import PlayersActions from "src/redux/actions/players.actions";

const initialState: IPlayersInitialState = {
	error: false,
	message: null,
	loading: false,
	player: null,
	players: [],
};

const playersActions = new PlayersActions();

const playersReducer: Slice<IPlayersInitialState> = createSlice({
	name: "players",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// GET USER PLAYERS ACTION
		builder.addCase(
			playersActions.getAllUserPlayers.pending,
			(state, _action) => {
				state.loading = true;
			}
		);
		builder.addCase(
			playersActions.getAllUserPlayers.rejected,
			(state, action) => {
				state.loading = false;
				state.error = true;
				state.message = action.error.message || null;
			}
		);
		builder.addCase(
			playersActions.getAllUserPlayers.fulfilled,
			(state, action) => {
				state.loading = false;
				state.error = false;
				state.message = null;
				state.players = action.payload;
			}
		);

		// GET USER PLAYERS ACTION
		builder.addCase(
			playersActions.addUserPlayersBulk.pending,
			(state, _action) => {
				state.loading = true;
			}
		);
		builder.addCase(
			playersActions.addUserPlayersBulk.rejected,
			(state, action) => {
				state.loading = false;
				state.error = true;
				state.message = action.error.message || null;
			}
		);
		builder.addCase(
			playersActions.addUserPlayersBulk.fulfilled,
			(state, action) => {
				state.loading = false;
				state.error = false;
				state.message = null;
				state.players = [...state.players, ...action.payload];
			}
		);
	},
});

export default playersReducer.reducer;
