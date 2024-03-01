import { Player } from "./Player.interfaces";

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
