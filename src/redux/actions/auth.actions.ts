import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
	signOut,
	setPersistence,
	browserLocalPersistence,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import FirestoreService from "src/services/Firestore.service";

// TYPES
import {
	LOGIN_ACTION,
	SIGNIN_ACTION,
	LOGOUT_ACTION,
	LOGIN_FROM_SESSION_ACTION,
} from "../types";
import type {
	UserLoginActionParams,
	UserLoginFromSessionActionParams,
	UserSigninActionParams,
} from "src/interfaces/User.interfaces";

export default class AuthActions {
	private firestoreService: FirestoreService;

	constructor() {
		this.firestoreService = new FirestoreService();
	}

	login = createAsyncThunk(
		LOGIN_ACTION,
		async (userLoginParams: UserLoginActionParams) => {
			try {
				const { user } = await signInWithEmailAndPassword(
					this.firestoreService.firestoreAuth,
					userLoginParams.email,
					userLoginParams.password
				);

				if (!user) {
					throw new Error("User does not exists.");
				}

				setPersistence(
					this.firestoreService.firestoreAuth,
					browserLocalPersistence
				);

				return { id: user.uid, email: user.email ?? "" };
			} catch (error) {
				throw error;
			}
		}
	);

	loginFromSession = createAction<UserLoginFromSessionActionParams>(
		LOGIN_FROM_SESSION_ACTION
	);

	signin = createAsyncThunk(
		SIGNIN_ACTION,
		async (userSigninParams: UserSigninActionParams) => {
			try {
				const { user } = await createUserWithEmailAndPassword(
					this.firestoreService.firestoreAuth,
					userSigninParams.email,
					userSigninParams.password
				);

				if (!user) {
					throw new Error("This User already exists.");
				}

				setPersistence(
					this.firestoreService.firestoreAuth,
					browserLocalPersistence
				);

				return { id: user.uid, email: user.email ?? "" };
			} catch (error) {
				throw error;
			}
		}
	);

	logout = createAsyncThunk(LOGOUT_ACTION, async () => {
		await signOut(this.firestoreService.firestoreAuth);
	});
}
