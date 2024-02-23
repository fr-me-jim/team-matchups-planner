import React, { useState } from "react";
import Swal from "sweetalert2";

// components
import ModalForm from "./ModalForm";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";

// interfaces
import type { IPlayerProps } from "src/interfaces/Player.interfaces";

export default function Player({ player }: IPlayerProps) {
	const [open, setOpen] = useState<boolean>(false);
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
			className="text-[24px] py-2 px-2 player-box"
		>
			<div
				onClick={() => setOpen(!open)}
				className="flex items-center px-1 justify-between flex-1 border-e border-solid"
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
			<button type="button" className="app-icon-btn-danger mx-1 p-0">
				<DeleteIcon sx={{ fontSize: 26 }} />
			</button>

			<ModalForm player={player} isOpen={open} setIsOpen={setOpen} />
		</Grid>
	);
}
