// components
import Grid from "@mui/material/Grid";
import ToolCard from "src/components/Tools/ToolCard";

// interfaces
import type { IToolCardInfo } from "src/interfaces/Tools.interfaces";

export default function Home() {
	const cardInfo: IToolCardInfo[] = [
		{
			title: "MatchUp",
			description:
				"A tool to create a list of Match Ups (Team vs Team) sorted by balance. ",
			linkRef: "/tools/matchup",
		},
		{
			title: "Teams",
			description:
				"A tool to create lists of different Team arrangements for a tournament, sorted by balance. ",
			linkRef: "/tools/teams",
		},
	];

	return (
		<Grid
			container
			item
			xs={11}
			md={10}
			lg={9}
			xl={8}
			direction={"column"}
			alignItems={"center"}
			className="md:py-6 py-1 md:gap-y-28 gap-y-16"
		>
			<h1 className="md:text-5xl text-4xl">Generation Tools</h1>

			<Grid
				container
				justifyContent={"space-around"}
				className="gap-x-1 gap-y-4"
			>
				{cardInfo.map((cardInfo, index) => (
					<ToolCard key={index} cardInfo={cardInfo} />
				))}
			</Grid>
		</Grid>
	);
}
