import React from "react";

// components
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";

// interafces
import type { IAddPlayerProps } from "src/interfaces/Player.interfaces";

export default function AddPlayer({
	player,
	handleClickAddPlayerDelete,
}: IAddPlayerProps) {
	return (
		<Grid item>
			<Chip
				deleteIcon={<DeleteIcon />}
				label={`${player.name} -- ${player.skillLevel}`}
				onDelete={ () => handleClickAddPlayerDelete(player) }
				className="text-white md:text-[20px] text-[18px] bg-secondary items-center"
			/>
		</Grid>
	);
}
