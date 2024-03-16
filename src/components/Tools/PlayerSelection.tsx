// "use client";

import { useAppSelector } from "src/hooks/redux.hooks";

// components
import Grid from "@mui/material/Grid";
import PlayerButton from "./PlayerButton";

// interfaces
import type { IPlayerSelectionProps } from "src/interfaces/Tools.interfaces";

export default function PlayerSelection({
	selectedPlayers,
	setSelectedPlayers,
}: IPlayerSelectionProps) {
	// get state
	const { players } = useAppSelector((state) => state.players);

	return (
		<Grid container className="gap-x-4 gap-y-4 md:justify-start justify-around">
			{!players.length ? (
				<Grid container item xs={12} justifyContent={"center"}>
					<p className="text-xl italic text-disabled">No players configured.</p>
				</Grid>
			) : null}
			{players.map((player) => (
				<PlayerButton
					key={player.id}
					player={player}
					selectedPlayers={selectedPlayers}
					setSelectedPlayers={setSelectedPlayers}
				/>
			))}
		</Grid>
	);
}
