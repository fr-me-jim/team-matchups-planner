import React from "react";
import Swal from "sweetalert2";

// components
import DeleteIcon from "@mui/icons-material/Delete";

// utils
import { errorPopupModalHandler } from "src/utils/form.utils";

// interfaces
import type { IDeleteButtonProps } from "src/interfaces/app.interfaces";

export default function DeleteButton({
	player,
	className,
	deleteAction,
}: IDeleteButtonProps) {
	const handleClickDeletePlayer = async () => {
		const { value } = await Swal.fire({
			icon: "warning",
			titleText: `Delete Player`,
			text: `Do you want to delete player ${player.name}?`,
			showCancelButton: true,
			cancelButtonText: "Cancel",
			confirmButtonText: "Delete",
			confirmButtonColor: "#6474ac",
		});

		try {
			if (value) await deleteAction(player.id);
		} catch (error) {
			return await errorPopupModalHandler(error as Error);
		}
	};

	return (
		<button
			type="button"
			onClick={handleClickDeletePlayer}
			className={className}
		>
			<DeleteIcon sx={{ fontSize: 26 }} />
		</button>
	);
}
