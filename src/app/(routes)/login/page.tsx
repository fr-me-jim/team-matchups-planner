import React from "react";

// components
import Grid from "@mui/material/Grid";
import LoginForm from "src/components/Auth/LoginForm";

export default function Login() {
	return (
		<Grid
			container
			item
			xs={11}
			md={10}
			lg={7}
			alignItems={"center"}
			justifyContent={"center"}
			className="items-start"
		>
			<LoginForm />
		</Grid>
	);
}
