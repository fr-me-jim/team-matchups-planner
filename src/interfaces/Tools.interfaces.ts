import type { Player } from "./Player.interfaces";

export type Team = Player[];

export interface MatchUp {
	skillGap: number;
	matchup: [Team, Team];
}

export interface BalancedTeams {
	skillGap: number;
	teams: Team[];
}

export interface IToolCardInfo {
	title: string;
	description: string;
	linkRef: string;
}

export interface IToolCardProps {
	cardInfo: IToolCardInfo;
}

export interface IPlayerButtonProps {
	player: Player;
	selectedPlayers: Player[];
	setSelectedPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

export interface IPlayerSelectionProps {
	selectedPlayers: Player[];
	setSelectedPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

// MATCHUPS

export interface IMatchupComponentProps {
	index: number;
	matchup: MatchUp;
}

export interface IBalancedTeamComponentProps {
	index: number;
	balancedTeam: BalancedTeams;
}

export interface ITeamTableInfoComponentProps {
	team: Team;
}
