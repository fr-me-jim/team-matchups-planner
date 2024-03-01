import React from "react";

// components
import Grid from "@mui/material/Grid";
import MatchupsWrapper from "src/components/Tools/Matchups/MatchupsWrapper";

// css
import "src/css/tools.css";

export default function MatchUp() {
	return (
		<Grid
			container
			item
			xs={11}
			md={10}
			// lg={9}
			// xl={8}
			direction={"column"}
			alignItems={"center"}
			className="md:py-6 py-1 md:gap-y-28 gap-y-16"
		>
			<h1 className="md:text-5xl text-4xl">MatchUps</h1>

			<MatchupsWrapper />
		</Grid>
	);
}
