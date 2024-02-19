import User from "../models/User.model";

export interface IUser {
	id: string;
	username: string;
	password: string;
}

export interface IAddUserData {
	username: string;
	password: string;
}

export interface UserLoginData {
	id: string;
	username: string;
}

export interface IAuthInitialState {
	error: boolean;
	loading: boolean;
	message: string | null;
	userData: UserLoginData | null;
	isAuthenticated: boolean;
}

export interface UserLoginActionParams {
	username: string;
	password: string;
}

export interface UserSigninActionParams extends UserLoginActionParams {}

export interface IUserRepository {
	// getAllUsers(): Promise<User[]>;
	// getAllUserUsers(userId: string): Promise<User[]>;
	// getUserById(id: string): Promise<User | undefined>;
	getUserByUsername(username: string): Promise<User | undefined>;
	addUser(user: IAddUserData): Promise<User>;
	// updateUser(UserId: string, User: IUser): IUser;
	// deleteUser(UserId: string): string;
}
