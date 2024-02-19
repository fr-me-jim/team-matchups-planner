import { createSlice, Slice } from "@reduxjs/toolkit";

// interface
import type { IAuthInitialState } from "src/app/interfaces/User.interfaces";

// actions
import AuthActions from "src/app/redux/actions/auth.actions";

const initialState: IAuthInitialState = {
	error: false,
	message: null,
	loading: false,
	userData: null,
	isAuthenticated: false,
};

const authActions = new AuthActions();

const authReducer: Slice<IAuthInitialState> = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// LOGIN USER ACTION
		builder.addCase(authActions.login.pending, (state, _action) => {
			state.loading = true;
		});
		builder.addCase(authActions.login.rejected, (state, action) => {
			state.loading = false;
			state.error = true;
			state.message = action.error.message || null;
		});
		builder.addCase(authActions.login.fulfilled, (state, action) => {
			state.loading = false;
			state.error = false;
			state.message = null;
			state.isAuthenticated = true;
			state.userData = action.payload;
		});

		// SIGNIN USER ACTION
		builder.addCase(authActions.signin.pending, (state, _action) => {
			state.loading = true;
		});
		builder.addCase(authActions.signin.rejected, (state, action) => {
			state.loading = false;
			state.error = true;
			state.message = action.error.message || null;
		});
		builder.addCase(authActions.signin.fulfilled, (state, action) => {
			state.loading = false;
			state.error = false;
			state.message = null;
			state.isAuthenticated = true;
			state.userData = action.payload;
		});

		// LOGOUT ACTION
		builder.addCase(authActions.logout, (state, _action) => {
			state.loading = false;
			state.error = false;
			state.message = null;
			state.userData = null;
			state.isAuthenticated = false;
		});
	},
});

export default authReducer.reducer;
