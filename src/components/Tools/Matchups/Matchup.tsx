import { v1 as uuid } from "uuid";

// components
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import TeamTableInfo from "../TeamTableInfo";

// interfaces
import type { IMatchupComponentProps } from "src/interfaces/Tools.interfaces";

// assets
import brand from "public/assets/images/crow-nobackground-white-sm.png";

export default function Matchup({ matchup, index }: IMatchupComponentProps) {
	return (
		<Grid item xs={12} lg={9} xl={5} xxl={4} className="rainbow-box">
			<Paper
				elevation={3}
				className="bg-secondary flex flex-col items-center rainbow-box-inner gap-y-2 p-4"
			>
				<div className="flex w-[100%] justify-between items-center gap-x-2">
					<div className="flex relative items-center gap-x-2">
						<Image
							priority={true}
							width={41}
							height={50}
							src={brand.src}
							alt="logo_img"
							className="h-[50px]"
						/>
						<h1 className="text-3xl">Matchup {index}</h1>
					</div>

					<h1 className="text-xl text-primary">
						Skill Gap: {matchup.skillGap}
					</h1>
				</div>
				<Divider className="w-[100%] border-2" />
				<Grid container justifyContent={"space-around"} className="gap-2">
					{matchup.matchup.map((team, teamIndex) => (
						<Grid
							key={uuid()}
							item
							xs={12}
							className="flex md:flex-1 flex-col rounded-[10px] items-center gap-y-2 bg-secondary-dark py-3"
						>
							<h1 className="text-2xl text-primary">Team {teamIndex + 1}</h1>

							<TeamTableInfo key={teamIndex} team={team} />
						</Grid>
					))}
				</Grid>
			</Paper>
		</Grid>
	);
}
