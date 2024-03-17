import { find, filter } from "lodash";
import { useEffect, useState } from "react";

// intefaces
import type { IPlayerButtonProps } from "src/interfaces/Tools.interfaces";

export default function PlayerButton({
	player,
	selectedPlayers,
	setSelectedPlayers,
}: IPlayerButtonProps) {
	// state
	const [selected, setSelected] = useState<boolean>(false);

	useEffect(() => {
		const updateSelectedPlayers = () => {
			const currentPlayer = find(selectedPlayers, { ...player });
			if (!selected && currentPlayer) {
				const newSelected = filter(
					selectedPlayers,
					(element) => element.id !== player.id
				);
				setSelectedPlayers([...newSelected]);
			}

			if (selected && !currentPlayer) {
				setSelectedPlayers([...selectedPlayers, player]);
			}
		};

		updateSelectedPlayers();
	}, [selected, player, selectedPlayers, setSelectedPlayers]);

	return (
		<div
			onClick={() => setSelected(!selected)}
			className={`flex justify-between items-center app-btn-secondary select-player ${
				selected ? "selected" : ""
			} cursor-pointer md:grow-0 grow text-xl px-2 py-2 px-1`}
		>
			<p>{player.name}</p>

			<p>{player.skillLevel}</p>
		</div>
	);
}
