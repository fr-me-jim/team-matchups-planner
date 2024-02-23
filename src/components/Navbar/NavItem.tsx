"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// interfaces
import { INavItemProps } from "src/interfaces/Navbar.interface";

export default function NavItem({ navItemData }: INavItemProps) {
	const pathname = usePathname();
	const isActive = pathname === navItemData.href;
	const isActiveStyle = isActive ? "active" : "";

	return (
		<Link
			href={navItemData.href}
			className={`lg:text-[26px] md:text-[24px] text-[16px] font-semibold flex items-center mt-2 app-btn-inverted ${isActiveStyle}`}
			aria-current={isActive ? "page" : undefined}
		>
			{navItemData.name}
		</Link>
	);
}
