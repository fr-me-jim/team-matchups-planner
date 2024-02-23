export interface INavItemData {
	name: string;
	href: string;
	requireAuth: boolean;
}

export interface INavItemProps {
	navItemData: INavItemData;
}
