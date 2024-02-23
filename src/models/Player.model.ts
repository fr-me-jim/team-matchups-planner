import type { IPlayer } from "../interfaces/Player.interfaces";

export default class Player implements IPlayer {
	declare id: string;
	declare name: string;
	declare skillLevel: number;
	declare userId: string;

	constructor(playerConstructorData: IPlayer) {
		this.id = playerConstructorData.id;
		this.name = playerConstructorData.name;
		this.skillLevel = playerConstructorData.skillLevel;
		this.userId = playerConstructorData.userId;
	}
}
