"use client";

import React from "react";
import store from "src/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";

// components
import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";

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
                <Navbar />

                {children}

                {/* <Footer /> */}
            </ThemeProvider>
        </Provider>
	);
}