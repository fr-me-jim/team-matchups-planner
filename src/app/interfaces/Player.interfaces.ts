import Player from "../models/Player.model";

export interface IPlayer {
	id: string;
	name: string;
	skillLevel: number;
	userId: string;
}

export interface IAddPlayerData {
	name: string;
	skillLevel: number;
	userId: string;
}

export interface IPlayerRepository {
	getAllPlayers(): Promise<Player[]>;
	getAllUserPlayers(userId: string): Promise<Player[]>;
	// getPlayerById(id: string): IPlayer;
	addPlayer(player: IAddPlayerData): Promise<Player>;
	// updatePlayer(playerId: string, player: IPlayer): IPlayer;
	// deletePlayer(playerId: string): string;
}

// redux
export interface IPlayersInitialState {
	error: boolean;
	message: string | null;
	loading: boolean;
	player: Player | null;
	players: Player[];
}
