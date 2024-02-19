import firestore from "src/app/config/db/initFirestore";
import type { Firestore } from "firebase/firestore";

// repositories
import UserRepository from "../repositories/User.repository";
import PlayerRepository from "../repositories/Player.repository";

export default class FirestoreService {
	private readonly firestore: Firestore;

	readonly UserRepository: UserRepository;
	readonly PlayersRepository: PlayerRepository;

	constructor() {
		this.firestore = firestore;

		this.UserRepository = new UserRepository(this.firestore);
		this.PlayersRepository = new PlayerRepository(this.firestore);
	}
}
