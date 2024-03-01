import React from "react";

// components
import Grid from "@mui/material/Grid";
import BalancedTeamsWrapper from "src/components/Tools/Teams/BalancedTeamsWrapper";

// css
import "src/css/tools.css";

export default function Teams() {
	return (
		<Grid
			container
			item
			xs={11}
			md={10}
			direction={"column"}
			alignItems={"center"}
			className="md:py-6 py-1 md:gap-y-28 gap-y-16"
		>
			<h1 className="md:text-5xl text-4xl">Balanced Teams</h1>

			<BalancedTeamsWrapper />
		</Grid>
	);
}
