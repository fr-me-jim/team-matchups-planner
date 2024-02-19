import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import FirestoreService from "src/app/services/Firestore.service";

// TYPES
import { LOGIN_ACTION, SIGNIN_ACTION, LOGOUT_ACTION } from "../types";
import type {
	UserLoginActionParams,
	UserSigninActionParams,
} from "src/app/interfaces/User.interfaces";

export default class AuthActions {
	private firestoreService: FirestoreService;

	constructor() {
		this.firestoreService = new FirestoreService();
	}

	login = createAsyncThunk(
		LOGIN_ACTION,
		async (userLoginParams: UserLoginActionParams) => {
			try {
				const user =
					await this.firestoreService.UserRepository.getUserByUsername(
						userLoginParams.username
					);
				if (!user) {
					throw new Error("User does not exists.");
				}

				if (!user.checkUserPassword(userLoginParams.password)) {
					throw new Error("Wrong user credentials.");
				}

				const { password, ...userData } = user;

				return userData;
			} catch (error: unknown) {
				throw error;
			}
		}
	);

	signin = createAsyncThunk(
		SIGNIN_ACTION,
		async (userSigninParams: UserSigninActionParams) => {
			try {
				const user = await this.firestoreService.UserRepository.addUser({
					username: userSigninParams.username,
					password: userSigninParams.password,
				});

				const { password, ...userData } = user;

				return userData;
			} catch (error: unknown) {
				throw error;
			}
		}
	);

	logout = createAction(LOGOUT_ACTION);
}
