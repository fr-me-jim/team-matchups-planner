"use client";

import { v1 as uuidv1 } from "uuid";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useAppSelector } from "src/hooks/redux.hooks";
import { useDispatchContext } from "src/context/Dispatch.context";

// utils
import { errorPopupModalHandler } from "src/utils/form.utils";

// components
import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem";
import Grid from "@mui/material/Grid";

// assets
import brand from "public/assets/images/crow-nobackground-white-sm.png";

const navigation = [
	{ name: "Signin", href: "/signin", requireAuth: false },
	{ name: "Login", href: "/login", requireAuth: false },
	{ name: "Players", href: "/players", requireAuth: true },
];

export default function Navbar() {
	// get state
	const { isAuthenticated } = useAppSelector((state) => state.auth);

	// hooks
	const router = useRouter();
	const [, , removeCookie] = useCookies();

	// context
	const logout = useDispatchContext().AuthDispatcher.logout;

	const handleClickLogout = async () => {
		try {
			await logout();
			removeCookie("session", { path: "/" });
			router.push("/login");
		} catch (error) {
			await errorPopupModalHandler(error as Error);
		}
	};

	return (
		<Grid
			container
			component={"header"}
			justifyContent={"center"}
			className="bg-transparent"
		>
			<Grid
				container
				component={"nav"}
				item
				xs={11}
				md={10}
				xl={10}
				xxl={8}
				alignItems={"center"}
				className="md:py-6 py-4 nav-header-border"
			>
				<Grid
					item
					xs={12}
					lg={6}
					justifyContent={"center"}
					className="flex lg:justify-start"
				>
					<Link href="/" className="flex items-center gap-x-6">
						<Image
							priority
							width={65}
							height={65}
							src={brand.src}
							alt="web_logo"
							className="md:w-[85px]"
						/>
						<span className="lg:text-[48px] md:text-[38px] text-[28px] mt-2">
							MatchUps Planner
						</span>
					</Link>
				</Grid>

				<Grid
					item
					xs={12}
					lg={6}
					className="inline-flex text-primary lg:justify-end justify-center gap-x-6"
				>
					{isAuthenticated
						? navigation.map(
								(navItem) =>
									navItem.requireAuth && (
										<NavItem key={uuidv1()} navItemData={navItem} />
									)
						  )
						: navigation.map(
								(navItem) =>
									!navItem.requireAuth && (
										<NavItem key={uuidv1()} navItemData={navItem} />
									)
						  )}
					{isAuthenticated && (
						<button
							onClick={handleClickLogout}
							className={`lg:text-[26px] md:text-[24px] text-[16px] font-semibold flex items-center mt-2 app-btn-inverted`}
						>
							Logout
						</button>
					)}
				</Grid>
			</Grid>
		</Grid>
	);
}
