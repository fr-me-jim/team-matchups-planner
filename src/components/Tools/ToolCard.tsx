import React from "react";

// components
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

// interfaces
import type { IToolCardProps } from "src/interfaces/Tools.interfaces";

// css
import "src/css/tools.css";

export default function ToolCard({ cardInfo }: IToolCardProps) {
	return (
		<Grid item xs={12} sm={9} md={8} lg={5} xxl={4}>
			<Card className="tool-card text-primary px-4">
				<CardContent className="flex flex-col gap-y-8">
					<h1 className="text-3xl text-center">{cardInfo.title}</h1>
					<p className="text-xl min-h-[112px] break-all text-justify">
						{cardInfo.description}
					</p>
				</CardContent>
				<CardActions className="flex justify-center">
					<Link
						href={cardInfo.linkRef}
						className="text-[26px] min-w-[70px] font-semibold app-btn-inverted"
					>
						Go
					</Link>
				</CardActions>
			</Card>
		</Grid>
	);
}
