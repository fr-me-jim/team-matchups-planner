"use client";

import React from "react";

// hooks
import { useAppSelector } from "src/app/hooks/redux.hooks";

// components
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Spinner from "src/app/components/Loader/Spinner";
import PlayerAddForm from "src/app/components/Players/PlayerAddForm";

export default function Players() {
	// get state
	const { players, error, message, loading } = useAppSelector(
		(state) => state.players
	);

	return (
		<Grid item xs={11} md={10} lg={7} justifyContent={"center"}>
			{error && !loading && (
				<Grid item className="p-3">
					<Alert severity="error" className="w-auto">
						{message}
					</Alert>
				</Grid>
			)}

			{loading && <Spinner />}

			{!loading && !error && <PlayerAddForm />}
		</Grid>
	);
}
