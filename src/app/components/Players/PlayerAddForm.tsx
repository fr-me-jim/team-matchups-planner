import React from "react";

// components
import { Grid } from "@mui/material";

// utils
import {
	allowIntervalInputValue,
	allowOnlyNumericNumbers,
} from "src/app/utils/form.utils";

export default function PlayerAddForm() {
	const handleKeyDownValue = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (!allowOnlyNumericNumbers(event)) return;

		allowIntervalInputValue(event, 100, 1);
	};
	const onFormSubmitAddPlayer = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<Grid
			container
			justifyContent={"center"}
			component={"section"}
			className="space-y-6"
		>
			<Grid container justifyContent={"center"}>
				<h1 className="text-4xl">Add Players</h1>
			</Grid>

			<Grid
				container
				item
				xs={8}
				component={"form"}
				justifyContent={"center"}
				className="space-x-4"
				onSubmit={onFormSubmitAddPlayer}
			>
				<input
					type="text"
					placeholder="Hinata Shoyo"
					name="add-player-name"
					className="border-solid rounded-md app-input font-semibold py-2 flex-1 text-xl"
				/>
				<input
					type="number"
					placeholder="1 - 100"
					name="add-player-skill"
					onKeyDown={handleKeyDownValue}
					className="border-solid rounded-md app-input font-semibold py-2 flex-2 text-xl"
				/>
				<button className="text-lg app-btn-secondary">+ Add</button>
			</Grid>
		</Grid>
	);
}
