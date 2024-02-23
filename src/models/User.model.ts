import bcrypt from "bcryptjs";

import type { IUser } from "../interfaces/User.interfaces";

export default class User implements IUser {
	declare id: string;
	declare email: string;
	// declare password: string;

	constructor(UserConstructorData: IUser) {
		this.id = UserConstructorData.id;
		this.email = UserConstructorData.email;
	}
}
