import Grid from "@mui/material/Grid";
import { find, filter } from "lodash";
import { useCallback, useEffect, useState } from "react";

// intefaces
import type { IPlayerButtonProps } from "src/interfaces/Tools.interfaces";

export default function PlayerButton({
	player,
	selectedPlayers,
	setSelectedPlayers,
}: IPlayerButtonProps) {
	// state
	const [selected, setSelected] = useState<boolean>(false);

	const updateSelectedPlayers = useCallback(() => {
		if (!selected && find(selectedPlayers, { ...player })) {
			const newSelected = filter(
				selectedPlayers,
				(element) => element.id !== player.id
			);
			setSelectedPlayers([...newSelected]);
		}

		if (selected && !find(selectedPlayers, { ...player })) {
			setSelectedPlayers([...selectedPlayers, player]);
		}
	}, [selected, selectedPlayers, setSelectedPlayers]);

	useEffect(() => {
		updateSelectedPlayers();
	}, [selected, updateSelectedPlayers]);

	return (
		<Grid
			container
			item
			xs={12}
			alignItems={"center"}
			justifyContent={"space-between"}
			onClick={() => setSelected(!selected)}
			className={`app-btn-secondary select-player ${
				selected && "selected"
			} cursor-pointer text-xl px-2 py-2 px-1 md:max-w-[109px]`}
		>
			<p>{player.name}</p>

			<p>{player.skillLevel}</p>
		</Grid>
	);
}
