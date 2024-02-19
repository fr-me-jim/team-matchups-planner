import React from "react";

// components
import Grid from "@mui/material/Grid";
import LoginForm from "src/app/components/Auth/LoginForm";

export default function Login() {
	return (
		<Grid
			container
			item
			xs={11}
			md={10}
			lg={7}
			alignItems={"flex-start"}
			justifyContent={"center"}
		>
			{/* {error && !loading && (
				<Grid item className="p-3">
					<Alert severity="error" className="w-auto">
						{message}
					</Alert>
				</Grid>
			)}

			{loading && <Spinner />}

			{!loading && !error && <Login />} */}
			<LoginForm />
		</Grid>
	);
}
