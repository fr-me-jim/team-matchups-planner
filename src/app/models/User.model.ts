import bcrypt from "bcryptjs";

import type { IUser } from "../interfaces/User.interfaces";

export default class User implements IUser {
	declare id: string;
	declare username: string;
	declare password: string;

	constructor(UserConstructorData: IUser) {
		this.id = UserConstructorData.id;
		this.username = UserConstructorData.username;
		this.password = UserConstructorData.password;
	}

	async checkUserPassword(inputUserPwd: string): Promise<boolean> {
		return await bcrypt.compare(inputUserPwd, this.password);
	}
}
