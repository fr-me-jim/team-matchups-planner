import type { Metadata, Viewport } from "next";

// components
import Grid from "@mui/material/Grid";

// assets
import "src/css/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	title: "Matchups Planner",
	robots: { index: false, follow: false },
	authors: [{ name: "Fran Mendoza" }],
	description:
		"Web tool for creating Team matchups based on player list and individdual skill level.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Grid
				gap={8}
				container
				component={"body"}
				direction={"column"}
				alignItems={"center"}
				className={`${inter.className} md:py-8 py-0`}
			>
				{children}
			</Grid>
		</html>
	);
}
