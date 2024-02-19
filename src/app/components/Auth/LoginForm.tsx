"use client";

import Swal from "sweetalert2";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { redirect } from "next/navigation";

// context
import { useAppSelector } from "src/app/hooks/redux.hooks";
import { useDispatchContext } from "src/app/context/Dispatch.context";

// components
import { Grid } from "@mui/material";

export default function LoginForm() {
	// get state
	const { message } = useAppSelector((state) => state.players);

	// state
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [errForm, setErrForm] = useState<boolean>(false);
	const [errMessage, setErrMessage] = useState<string>("");

	// cookies
	const [_, setCookie] = useCookies();

	// context
	const login = useDispatchContext().AuthDispatcher.login;

	const onFormSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!username.trim() || !password.trim()) {
			await Swal.fire({
				icon: "error",
				title: "Error",
				text: "All fields are mandatory.",
				confirmButtonText: "Confirmar",
				confirmButtonColor: "#2b6ca7",
			});
			return;
		}

		try {
			const user = await login({ username, password });
			setCookie("session", user, { path: "/" });
			redirect("/");
		} catch (error: unknown) {
			if (error instanceof Error) {
				await Swal.fire({
					icon: "error",
					title: "Error",
					text: error.message || "Oops! Something went wrong.",
					confirmButtonText: "Confirmar",
					confirmButtonColor: "#2b6ca7",
				});
			}
		}
	};

	return (
		<Grid
			container
			justifyContent={"center"}
			component={"section"}
			className="space-y-10"
		>
			<Grid container justifyContent={"center"}>
				<h1 className="text-4xl">Login</h1>
			</Grid>

			<Grid
				container
				item
				xs={12}
				sm={10}
				md={8}
				lg={8}
				xl={6}
				direction={"column"}
				component={"form"}
				justifyContent={"center"}
				className="space-y-8"
				onSubmit={onFormSubmitLogin}
			>
				<input
					type="text"
					placeholder="Username"
					name="login-username"
					onChange={(e) => setUsername(e.target.value)}
					className="border-solid rounded-md app-input font-semibold py-2 flex-1 text-xl"
				/>
				<input
					type="password"
					placeholder="Password"
					name="login-password"
					onChange={(e) => setPassword(e.target.value)}
					className="border-solid rounded-md app-input font-semibold py-2 flex-2 text-xl"
				/>
				<button className="text-lg w-auto app-btn-secondary">Login</button>
			</Grid>
		</Grid>
	);
}
