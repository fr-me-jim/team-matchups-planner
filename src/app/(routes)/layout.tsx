"use client";

import store from "src/store";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { useCookies } from "react-cookie";
import { createTheme, Grid, ThemeProvider } from "@mui/material";

// context
import {
	DispatchProvider,
	useDispatchContext,
} from "../../context/Dispatch.context";

// components
import Navbar from "../../components/Navbar/Navbar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// state
	const [cookies] = useCookies();

	// context
	const loginFromSession = useDispatchContext().AuthDispatcher.loginFromSession;

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

	useEffect(() => {
		const loginUserFromSession = () => {
			loginFromSession(cookies.session);
		};

		if (cookies.session) loginUserFromSession();
	}, [cookies.session, loginFromSession]);

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
						className="flex-1 lg:py-6 py-2"
					>
						{children}
					</Grid>
				</DispatchProvider>
			</ThemeProvider>
		</Provider>
	);
}
