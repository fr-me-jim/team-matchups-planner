import { createAsyncThunk } from "@reduxjs/toolkit";

import FirestoreService from "src/services/Firestore.service";

// TYPES
import { ADD_USER_PLAYERS, GET_USER_PLAYERS } from "../types";

// interfaces
import type { IAddPlayerData } from "src/interfaces/Player.interfaces";

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
			} catch (error) {
				throw error;
			}
		}
	);

	addUserPlayersBulk = createAsyncThunk(
		ADD_USER_PLAYERS,
		async (addPlayerList: IAddPlayerData[]) => {
			try {
				return await this.firestoreService.PlayersRepository.addPlayerBulk(
					addPlayerList
				);
			} catch (error) {
				throw error;
			}
		}
	);
}
