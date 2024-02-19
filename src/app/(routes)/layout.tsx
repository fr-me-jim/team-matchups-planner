"use client";

import React from "react";
import store from "src/store";
import { Provider } from "react-redux";
import { createTheme, Grid, ThemeProvider } from "@mui/material";

// context
import { DispatchProvider } from "../context/Dispatch.context";

// components
import Navbar from "../components/Navbar/Navbar";

export default function generalLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const materialTheme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 640,
				md: 768,
				lg: 1024,
				xl: 1280,
				xxl: 1536,
			},
		},
	});

	return (
		<Provider store={store}>
			<ThemeProvider theme={materialTheme}>
				<DispatchProvider>
					<Navbar />

					<Grid
						container
						item
						xs={11}
						md={10}
						lg={7}
						component={"main"}
						justifyContent={"center"}
						className="flex-1 lg:py-6 xs:py-2"
					>
						{children}
					</Grid>
				</DispatchProvider>
			</ThemeProvider>
		</Provider>
	);
}
