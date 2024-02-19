import Player from "../models/Player.model";

export type Team = Player[];

export interface IMatchUp {
	skillGap: number;
	matchup: [Team, Team];
}

export interface IBalancedTeams {
	skillGap: number;
	teams: Team[];
}