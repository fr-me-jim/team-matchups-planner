import { useRef } from "react";
import { useDispatchContext } from "src/context/Dispatch.context";

// utils
import { errorPopupModalHandler } from "src/utils/form.utils";

// components
import Grid from "@mui/material/Grid";
import InlineInputText from "../Input/InlineInputText";
import InlineInputNumber from "../Input/InlineInputNumber";

// interfaces
import type { IModalFormProps } from "src/interfaces/Player.interfaces";

export default function ModalForm({
	player,
	isOpen,
	setIsOpen,
}: IModalFormProps) {
	const playerNameRef = useRef<HTMLInputElement>(null);
	const playerSkillRef = useRef<HTMLInputElement>(null);

	// context
	const updateUserPlayer =
		useDispatchContext().PlayersDispatcher.updateUserPlayer;

	const handleSubmitSavePlayer = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();

		const name = playerNameRef.current?.value;
		const skillLevel = Number(playerSkillRef.current?.value);
		if (!name || !skillLevel || !name.trim() || isNaN(skillLevel)) {
			return;
		}

		try {
			await updateUserPlayer({
				playerId: player.id,
				newPlayerInfo: {
					name,
					skillLevel,
					userId: player.userId,
				},
			});
		} catch (error) {
			return await errorPopupModalHandler(error as Error);
		}

		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`${
				!isOpen
					? "hidden"
					: "swal2-container swal2-center swal2-backdrop-show overflow-y-auto"
			}`}
		>
			<Grid
				component={"form"}
				container
				item
				xs={11}
				lg={5}
				xxl={3}
				direction={"column"}
				alignItems={"center"}
				onSubmit={handleSubmitSavePlayer}
				className="form-modal p-2 space-y-4 swal2-popup swal2-modal swal2-show"
			>
				<h2 className="swal2-title"> Player Info </h2>
				<InlineInputText
					name="edit-player-name"
					placeholder="Hinata Shoyo"
					defaultValue={player.name}
					ref={playerNameRef}
				/>
				<InlineInputNumber
					ref={playerSkillRef}
					placeholder="1 - 100"
					name="edit-player-skill"
					defaultValue={player.skillLevel}
				/>

				<button type="submit" className="app-btn-secondary">
					Save
				</button>
			</Grid>
		</div>
	);
}
