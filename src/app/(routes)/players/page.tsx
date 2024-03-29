"use client";

import React from "react";

// hooks
import { useAppSelector } from "src/hooks/redux.hooks";

// components
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
// import Spinner from "src/components/Loader/Spinner";
import PlayerAddForm from "src/components/Players/PlayerAddForm";
import PlayersManagement from "src/components/Players/PlayersManagement";

// assets
import "src/css/players.css";

export default function Players() {
	// get state
	const { error, message, loading } = useAppSelector((state) => state.players);

	return (
		<Grid
			container
			item
			xs={11}
			md={10}
			lg={8}
			xl={9}
			// gap={20}
			// direction={"column"}
			justifyContent={"center"}
			className="flex items-start md:gap-y-4 gap-y-16"
		>
			{error && !loading && (
				<Grid item className="p-3">
					<Alert severity="error" className="w-auto">
						{message}
					</Alert>
				</Grid>
			)}

			{/* {loading && <Spinner />} */}

			<PlayerAddForm />

			<PlayersManagement />
		</Grid>
	);
}
