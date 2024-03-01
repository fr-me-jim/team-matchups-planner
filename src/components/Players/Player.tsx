import Swal from "sweetalert2";
import { useState } from "react";
import { useDispatchContext } from "src/context/Dispatch.context";

// components
import ModalForm from "./ModalForm";
import Grid from "@mui/material/Grid";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";

// interfaces
import type { IPlayerProps } from "src/interfaces/Player.interfaces";
import DeleteButton from "../Button/DeleteButton";

export default function Player({ player }: IPlayerProps) {
	// state
	const [open, setOpen] = useState<boolean>(false);

	// context
	const deletePlayer = useDispatchContext().PlayersDispatcher.deleteUserPlayer;

	return (
		<Grid
			container
			item
			xs={10}
			sm={5}
			md={5}
			lg={6}
			xl={5}
			xxl={3}
			alignItems={"center"}
			justifyContent={"space-between"}
			className="text-[24px] player-box"
		>
			<div
				onClick={() => setOpen(!open)}
				className="flex player-box-data px-2 py-2 items-center px-1 justify-between flex-1 border-e border-solid"
			>
				<div className="flex items-center">
					<SportsHandballIcon sx={{ fontSize: 30 }} />
					<p>{player.name}</p>
				</div>
				<div className="flex items-center">
					<EqualizerIcon sx={{ fontSize: 30 }} />
					<p className="text-center min-w-[40px]">{player.skillLevel}</p>
				</div>
			</div>
			<DeleteButton
				player={player}
				deleteAction={deletePlayer}
				className="app-icon-btn-danger px-1 mx-1 p-0"
			/>

			<ModalForm player={player} isOpen={open} setIsOpen={setOpen} />
		</Grid>
	);
}
