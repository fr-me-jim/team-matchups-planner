"use client";

import Swal from "sweetalert2";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

// utils
import { errorPopupModalHandler } from "src/utils/form.utils";

// context
import { useDispatchContext } from "src/context/Dispatch.context";

// components
import { Grid } from "@mui/material";

export default function LoginForm() {
	// state
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	// hooks
	const router = useRouter();
	const [_, setCookie] = useCookies();

	// context
	const login = useDispatchContext().AuthDispatcher.login;

	const onFormSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!email.trim() || !password.trim()) {
			return await Swal.fire({
				icon: "error",
				title: "Error",
				text: "All fields are mandatory.",
				confirmButtonText: "Confirmar",
				confirmButtonColor: "#2b6ca7",
			});
		}

		try {
			const user = await login({ email, password });
			setCookie("session", user, { path: "/" });
			router.push("/players");
		} catch (error) {
			return await errorPopupModalHandler(error as Error);
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
				<div className="flex flex-col space-y-2">
					<label htmlFor="login-email" className="text-[28px]">
						Email
					</label>
					<input
						id="login-email"
						type="email"
						name="login-email"
						placeholder="example@domain.com"
						onChange={(e) => setEmail(e.target.value)}
						className="border-solid rounded-md app-input font-semibold py-2 flex-1 text-xl"
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="login-email" className="text-[28px]">
						Password
					</label>
					<input
						type="password"
						name="login-password"
						placeholder="********"
						onChange={(e) => setPassword(e.target.value)}
						className="border-solid rounded-md app-input font-semibold py-2 flex-2 text-xl"
					/>
				</div>
				<button type="submit" className="text-lg w-auto app-btn-secondary">
					Login
				</button>
			</Grid>
		</Grid>
	);
}
