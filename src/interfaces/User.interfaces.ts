export interface User {
	id: string;
	email: string;
	// password: string;
}

export interface IAddUserData {
	email: string;
	// password: string;
}

export interface UserLoginData {
	id: string;
	email: string;
}

export interface IAuthInitialState {
	error: boolean;
	loading: boolean;
	message: string | null;
	userData: UserLoginData | null;
	isAuthenticated: boolean;
}

export interface UserLoginActionParams {
	email: string;
	password: string;
}

export interface UserLoginFromSessionActionParams {
	id: string;
	email: string;
}

export interface UserSigninActionParams extends UserLoginActionParams {}
