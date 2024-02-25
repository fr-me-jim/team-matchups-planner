// components
import Link from "next/link";
import Grid from "@mui/material/Grid";

// // json data
// import sponsors from "src/data/home/sponsors.json";
// import misionList from "src/data/home/mision.json";

// import "src/css/home.css";

export default function Home() {
	return (
		<Grid
			container
			item
			xs={11}
			md={10}
			lg={7}
			gap={20}
			direction={"column"}
			alignItems={"center"}
			className="md:py-6 py-10"
		>
			<h1 className="md:text-5xl text-4xl">Generation Tools</h1>

			<Grid container justifyContent={"space-around"}>
				<Link
					href="/tools/matchup"
					className={`lg:text-[26px] md:text-[24px] text-[16px] font-semibold flex items-center mt-2 app-btn-secondary`}
				>
					MatchUp
				</Link>

				<Link
					href="/tools/teams"
					className={`lg:text-[26px] md:text-[24px] text-[16px] font-semibold flex items-center mt-2 app-btn-secondary`}
				>
					Teams
				</Link>
			</Grid>
		</Grid>
	);
}
