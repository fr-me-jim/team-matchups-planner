"use client";

import { useState } from "react";
import { v1 as uuid } from "uuid";
import { useAppSelector } from "src/hooks/redux.hooks";
import { useFetchUserPlayers } from "src/hooks/players.hooks";

// services
import { generateAllMatchupsService } from "src/services/MatchMaking.service";

// utils
import {
	errorPopupModalHandler,
	infoPopupModalHandler,
} from "src/utils/form.utils";

// components
import Matchup from "./Matchup";
import Grid from "@mui/material/Grid";
import PlayerSelection from "src/components/Tools/PlayerSelection";

// interfaces
import type { Player } from "src/interfaces/Player.interfaces";
import type { MatchUp } from "src/interfaces/Tools.interfaces";
import InlineInputNumber from "src/components/Input/InlineInputNumber";

export default function MatchUpsWrapper() {
	// get state
	const { players } = useAppSelector((state) => state.players);

	// hooks
	useFetchUserPlayers();

	// state
	const [matchups, setMatchups] = useState<MatchUp[]>([]);
	const [maxSkillGap, setMaxSkillGap] = useState<number>(0);
	const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

	const handleClickGenerateMatchups = async () => {
		if (!selectedPlayers.length) {
			return await errorPopupModalHandler(
				new Error("Select players to generate matchups.")
			);
		}

		const result = generateAllMatchupsService(selectedPlayers, maxSkillGap);

		if (!result.length) {
			return await infoPopupModalHandler(
				"Not found",
				"No possible combinations found with given players."
			);
		}

		setMatchups(result);
	};

	return (
		<Grid container justifyContent={"center"} className="gap-y-8">
			<Grid
				container
				item
				xs={12}
				lg={11}
				xl={9}
				direction={"column"}
				justifyContent={"space-around"}
				className="gap-y-4"
			>
				<h3 className="text-2xl">Select players:</h3>
				<PlayerSelection
					selectedPlayers={selectedPlayers}
					setSelectedPlayers={setSelectedPlayers}
				/>
			</Grid>

			<Grid
				container
				item
				xs={12}
				lg={11}
				xl={9}
				justifyContent={"space-between"}
				className="gap-x-2"
			>
				<Grid item xs={12} md={6} className="flex flex-col gap-y-4">
					<h3 className="text-2xl flex-1">Select max skill gap (optional):</h3>
					<InlineInputNumber
						name="max-skill-gap"
						placeholder="0 - 100 (0 for no limit)"
						onChange={(e) => setMaxSkillGap(Number(e.target.value))}
					/>
				</Grid>
			</Grid>

			{players.length ? (
				<Grid container justifyContent={"center"}>
					<button
						onClick={handleClickGenerateMatchups}
						className="app-btn-secondary text-xl"
					>
						Generate
					</button>
				</Grid>
			) : null}

			{matchups.length ? (
				<Grid container justifyContent={"space-around"} className="gap-y-4">
					{matchups.map((matchup, index) => (
						<Matchup key={uuid()} index={index + 1} matchup={matchup} />
					))}
				</Grid>
			) : null}
		</Grid>
	);
}
