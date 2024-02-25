import { Player } from "./Player.interfaces";

export type Team = Player[];

export interface MatchUp {
	skillGap: number;
	matchup: [Team, Team];
}

export interface BalancedTeams {
	skillGap: number;
	teams: Team[];
}

export interface IInlineInputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}

export interface IDeleteButtonProps {
	player: Player;
	className: string;
	deleteAction: (params: any) => Promise<any>;
}
