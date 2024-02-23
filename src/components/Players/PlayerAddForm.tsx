import { remove } from "lodash";
import { v1 as uuid } from "uuid";
import { useState, useRef } from "react";
import { useAppSelector } from "src/hooks/redux.hooks";
import { useDispatchContext } from "src/context/Dispatch.context";

// components
import AddPlayer from "./AddPlayer";
import { Grid } from "@mui/material";

// utils
import {
	allowIntervalInputValue,
	allowOnlyNumericNumbers,
	errorPopupModalHandler,
} from "src/utils/form.utils";

// models
import { IAddPlayerData } from "src/interfaces/Player.interfaces";

export default function PlayerAddForm() {
	// get state
	const { userData } = useAppSelector((state) => state.auth);

	// state
	let playerName = useRef<HTMLInputElement>(null);
	let playerSkill = useRef<HTMLInputElement>(null);
	const [addPlayerList, setAddPlayerList] = useState<IAddPlayerData[]>([]);

	// context
	const addUserPlayers = useDispatchContext().PlayersDispatcher.addUserPlayers;

	const handleKeyDownValue = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (!allowOnlyNumericNumbers(event)) return;

		allowIntervalInputValue(event, 100, 1);
	};
	const handleClickAddPlayer = () => {
		if (!userData) {
			return errorPopupModalHandler(new Error("You must be authenticated."));
		}

		if (!playerName.current?.value || !playerSkill.current?.value) {
			return errorPopupModalHandler(new Error("All fields are mandatory"));
		}
		const newPlayer: IAddPlayerData = {
			name: playerName.current.value,
			skillLevel: Number(playerSkill.current.value),
			userId: userData.id,
		};

		if (addPlayerList.find((player) => player.name === newPlayer.name)) {
			return errorPopupModalHandler(new Error("This player already exists."));
		}

		setAddPlayerList([...addPlayerList, newPlayer]);
		playerName.current.value = "";
		playerSkill.current.value = "";
	};

	const handleClickRemovePlayer = (player: IAddPlayerData) => {
		const auxArray = addPlayerList;
		const removeIndex = addPlayerList.indexOf(player);
		remove(auxArray, (_, index) => index === removeIndex);
		setAddPlayerList([...auxArray]);
	};

	const onHandleSubmitAddPlayer = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();

		try {
			await addUserPlayers(addPlayerList);
			setAddPlayerList([]);
		} catch (error) {
			errorPopupModalHandler(error as Error);
		}
	};

	return (
		<Grid
			container
			component={"section"}
			alignItems={"center"}
			justifyContent={"center"}
			className="md:items-start md:space-y-8 space-y-4"
		>
			<Grid container justifyContent={"center"}>
				<h1 className="text-4xl">Add Players</h1>
			</Grid>

			<Grid
				container
				item
				xs={10}
				lg={11}
				xl={10}
				xxl={8}
				component={"form"}
				justifyContent={"center"}
				className="md:space-y-4 space-y-2"
				onSubmit={onHandleSubmitAddPlayer}
			>
				<Grid
					container
					justifyContent={"center"}
					className="md:space-x-4 md:space-y-0 space-y-2"
				>
					<input
						type="text"
						ref={playerName}
						name="add-player-name"
						placeholder="Hinata Shoyo"
						defaultValue={undefined}
						className="border-solid rounded-md app-input md:w-auto w-[100%] font-semibold py-2 flex-1 text-xl"
					/>
					<input
						type="number"
						ref={playerSkill}
						placeholder="1 - 100"
						name="add-player-skill"
						defaultValue={undefined}
						onKeyDown={handleKeyDownValue}
						className="border-solid rounded-md app-input md:w-auto w-[100%] font-semibold py-2 flex-2 text-xl"
					/>
					<button
						type="button"
						onClick={handleClickAddPlayer}
						className="text-lg app-btn-secondary"
					>
						+ Add
					</button>
				</Grid>

				<Grid
					container
					direction={"column"}
					alignItems={"center"}
					justifyContent={"center"}
					className="space-y-4"
				>
					<Grid
						container
						wrap="wrap"
						justifyContent={"center"}
						alignContent={"start"}
						spacing={2}
						className="py-2"
					>
						{addPlayerList.length
							? addPlayerList.map((player) => (
									<AddPlayer
										key={uuid()}
										player={player}
										handleClickAddPlayerDelete={handleClickRemovePlayer}
									/>
							  ))
							: null}
					</Grid>
					{addPlayerList.length ? (
						<button type="submit" className="text-lg app-btn-secondary">
							Save
						</button>
					) : null}
				</Grid>
			</Grid>
		</Grid>
	);
}
