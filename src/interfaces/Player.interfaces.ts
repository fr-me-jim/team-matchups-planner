export interface Player {
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

export interface IUpdatePlayerData {
	name: string;
	skillLevel: number;
	userId: string;
}

export interface IPlayerRepository {
	getAllPlayers(): Promise<Player[]>;
	getAllUserPlayers(userId: string): Promise<Player[]>;
	// getPlayerById(id: string): IPlayer;
	addPlayer(player: IAddPlayerData): Promise<Player>;
	addPlayerBulk(playerDataList: IAddPlayerData[]): Promise<Player[]>;
	updatePlayer(
		playerId: string,
		newPlayerInfo: IUpdatePlayerData
	): Promise<Player>;
	deletePlayer(playerId: string): Promise<string>;
}

// redux
export interface IPlayersInitialState {
	error: boolean;
	message: string | null;
	loading: boolean;
	player: Player | null;
	players: Player[];
}

export interface IUpdatePlayerAction {
	playerId: string;
	newPlayerInfo: IUpdatePlayerData;
}

export interface IAddPlayerProps {
	player: IAddPlayerData;
	handleClickAddPlayerDelete: (player: IAddPlayerData) => void;
}

export interface IPlayerProps {
	player: Player;
}

export interface IModalFormProps {
	player: Player;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
