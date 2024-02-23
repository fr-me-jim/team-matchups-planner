import React, { useRef } from "react";

// components
import Grid from "@mui/material/Grid";
import InlineInput from "../Input/InlineInput";

// interfaces
import type { IModalFormProps } from "src/interfaces/Player.interfaces";

export default function ModalForm({
	player,
	isOpen,
	setIsOpen,
}: IModalFormProps) {
	const playerNameRef = useRef<HTMLInputElement>(null);
	const playerSkillRef = useRef<HTMLInputElement>(null);

	const handleSubmitSavePlayer = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`${
				!isOpen && "hidden"
			} swal2-container swal2-center swal2-backdrop-show overflow-y-auto`}
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
				className="p-2 space-y-4 swal2-popup swal2-modal swal2-show"
			>
				<h2 className="swal2-title"> Player Info </h2>
				<InlineInput
					type="text"
					ref={playerNameRef}
					name="edit-player-name"
					placeholder="Hinata Shoyo"
					defaultValue={player.name}
				/>
				<InlineInput
					type="number"
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
