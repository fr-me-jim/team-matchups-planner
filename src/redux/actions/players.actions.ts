import { createAsyncThunk } from "@reduxjs/toolkit";

import FirestoreService from "src/services/Firestore.service";

// TYPES
import {
	ADD_USER_PLAYERS,
	GET_USER_PLAYERS,
	UPDATE_USER_PLAYER,
	DELETE_USER_PLAYER,
} from "../types";

// interfaces
import type {
	IAddPlayerData,
	IUpdatePlayerAction,
} from "src/interfaces/Player.interfaces";

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

	updateUserPlayer = createAsyncThunk(
		UPDATE_USER_PLAYER,
		async (updatePlayerInfo: IUpdatePlayerAction) => {
			try {
				return await this.firestoreService.PlayersRepository.updatePlayer(
					updatePlayerInfo.playerId,
					updatePlayerInfo.newPlayerInfo
				);
			} catch (error) {
				throw error;
			}
		}
	);

	deleteUserPlayer = createAsyncThunk(
		DELETE_USER_PLAYER,
		async (playerId: string) => {
			try {
				return await this.firestoreService.PlayersRepository.deletePlayer(
					playerId
				);
			} catch (error) {
				throw error;
			}
		}
	);
}
