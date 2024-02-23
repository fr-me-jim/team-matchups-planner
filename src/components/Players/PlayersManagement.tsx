"use client";

import { useAppSelector } from "src/hooks/redux.hooks";
import { useFetchUserPlayers } from "src/hooks/players.hooks";

// components
import Player from "./Player";
import Grid from "@mui/material/Grid";

export default function PlayersManagement() {
	// get state
	const { players } = useAppSelector((state) => state.players);

	// hooks
	useFetchUserPlayers();

	return (
		<Grid
			component={"section"}
			container
			alignContent={"flex-end"}
			alignItems={"center"}
			justifyContent={"center"}
			gap={2}
		>
			{players.map((player) => (
				<Player key={player.id} player={player} />
			))}
		</Grid>
	);
}
