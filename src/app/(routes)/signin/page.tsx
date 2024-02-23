import React from "react";

// components
import Grid from "@mui/material/Grid";
import SigninForm from "src/components/Auth/SigninForm";

export default function Signin() {
	return (
		<Grid
			container
			item
			xs={11}
			md={10}
			lg={7}
			alignItems={"center"}
			justifyContent={"center"}
			className="md:items-start"
		>
			<SigninForm />
		</Grid>
	);
}
