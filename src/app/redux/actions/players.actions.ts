import { createAsyncThunk } from "@reduxjs/toolkit";

import FirestoreService from "src/app/services/Firestore.service";

// TYPES
import { GET_USER_PLAYERS } from "../types";

export default class PlayersActions {
	private firestoreService: FirestoreService;

	constructor() {
		this.firestoreService = new FirestoreService();
	}

	getAllUserPlayers = createAsyncThunk(
		GET_USER_PLAYERS,
		async (userId: string) => {
			try {
				return await this.firestoreService.PlayersRepository.getAllUserPlayers(
					userId
				);
			} catch (error: unknown) {
				throw error;
			}
		}
	);
}
