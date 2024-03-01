"use client";

import Swal from "sweetalert2";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

// context
import { useDispatchContext } from "src/context/Dispatch.context";

// components
import { Grid } from "@mui/material";
import { errorPopupModalHandler } from "src/utils/form.utils";

export default function SigninForm() {
	// state
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [repeatPassword, setRepeatPassword] = useState<string>("");

	// hooks
	const router = useRouter();
	const [_, setCookie] = useCookies();

	// context
	const signin = useDispatchContext().AuthDispatcher.signin;

	const onFormSubmitsignin = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();

		if (!email.trim() || !password.trim() || !repeatPassword.trim()) {
			return await Swal.fire({
				icon: "error",
				title: "Error",
				text: "All fields are mandatory.",
				confirmButtonText: "Confirmar",
				confirmButtonColor: "#2b6ca7",
			});
		}

		if (password.trim().length < 8) {
			return await Swal.fire({
				icon: "error",
				title: "Error",
				text: "Minimum password length is 8 characters.",
				confirmButtonText: "Confirmar",
				confirmButtonColor: "#2b6ca7",
			});
		}

		if (password !== repeatPassword) {
			return await Swal.fire({
				icon: "error",
				title: "Error",
				text: "Passwords do not match.",
				confirmButtonText: "Confirmar",
				confirmButtonColor: "#2b6ca7",
			});
		}

		try {
			const user = await signin({ email, password });
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
			alignItems={"flex-start"}
			component={"section"}
			className="md:gap-y-10"
		>
			<Grid container justifyContent={"center"}>
				<h1 className="text-4xl">Signin</h1>
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
				className="gap-y-8"
				onSubmit={onFormSubmitsignin}
			>
				<div className="flex flex-col gap-y-2">
					<label htmlFor="signin-email" className="md:text-[28px] text-[20px]">
						Email
					</label>
					<input
						id="signin-email"
						type="email"
						name="signin-email"
						placeholder="example@domain.com"
						onChange={(e) => setEmail(e.target.value)}
						className="border-solid rounded-md app-input font-semibold py-2 flex-1 text-xl"
					/>
				</div>
				<div className="flex flex-col gap-y-2">
					<label htmlFor="signin-email" className="md:text-[28px] text-[20px]">
						Password
					</label>
					<input
						type="password"
						name="signin-password"
						placeholder="Minimum 8 characters"
						onChange={(e) => setPassword(e.target.value)}
						className="border-solid rounded-md app-input font-semibold py-2 flex-2 text-xl"
					/>
				</div>
				<div className="flex flex-col gap-y-2">
					<label htmlFor="signin-email" className="md:text-[28px] text-[20px]">
						Repeat Password
					</label>
					<input
						type="password"
						name="signin-repeat-password"
						placeholder="**********"
						onChange={(e) => setRepeatPassword(e.target.value)}
						className="border-solid rounded-md app-input font-semibold py-2 flex-2 text-xl"
					/>
				</div>
				<button type="submit" className="text-lg w-auto app-btn-secondary">
					Create Account
				</button>
			</Grid>
		</Grid>
	);
}
