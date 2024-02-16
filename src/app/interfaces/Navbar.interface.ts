export interface INavItemData {
	name: string;
	href: string;
	current: boolean;
}

export interface INavItemProps {
	navItemData: INavItemData;
}