import { v1 as uuid } from "uuid";

// components
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";

// interfaces
import type { ITeamTableInfoComponentProps } from "src/interfaces/Tools.interfaces";

export default function TeamTableInfo({ team }: ITeamTableInfoComponentProps) {
	return (
		<div className="flex w-[90%] flex-col border-x-2 border-t-[1px] rounded-[6px]">
			{team.map((player) => (
				<div
					key={uuid()}
					className="flex items-center justify-between border-b-2 rounded-[6px] px-2 py-2"
				>
					<div className="flex items-center">
						<SportsHandballIcon sx={{ fontSize: 30 }} />
						<p className="xl:text-2xl text-xl ">{player.name}</p>
					</div>
					<div className="flex items-center">
						<EqualizerIcon sx={{ fontSize: 30 }} />
						<p className="xl:text-2xl text-xl  text-center">
							{player.skillLevel}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
