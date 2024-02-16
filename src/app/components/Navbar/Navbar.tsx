import { v1 as uuidv1 } from "uuid";

// components
import NavItem from "./NavItem";
import Link from "next/link";
import Grid from "@mui/material/Grid";

// assets
import brand from "src/app/assets/images/crow-nobackground-white-sm.png";

const navigation = [
	{ name: "Perfil", href: "/profile", current: false },
	{ name: "Jugadores", href: "/players", current: false },
];

export default function Navbar() {
	return (
		<Grid
			container
			component={"header"}
			justifyContent={"center"}
			className="bg-secondary"
		>
			<Grid
				container
				component={"nav"}
				item
				xs={11}
				md={10}
				lg={7}
				alignItems={"center"}
				className="py-6"
			>
				<Grid item xs={12} md={6} justifyContent={"center"} className="flex">
					<Link href="/" className="flex items-center space-y-2 space-x-6">
						<img
							src={brand.src}
							alt="web_logo"
							className="md:w-[85px] w-[65px]"
						/>
						<span className="lg:text-[48px] md:text-[38px] text-[28px]">
							MatchUps Planner
						</span>
					</Link>
				</Grid>

				<Grid
					item
					xs={12}
					md={6}
					className="inline-flex text-primary flex-1 justify-center space-x-6"
				>
					{navigation.map((navItem) => (
						<NavItem key={uuidv1()} navItemData={navItem} />
					))}
				</Grid>
			</Grid>
		</Grid>
	);
}
