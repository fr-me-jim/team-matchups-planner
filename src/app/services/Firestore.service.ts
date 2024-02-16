import firestore from "src/app/config/db/initFirestore";

// repositories
import PlayerRepository from "../repositories/Player.repository";

// interfaces
import type { Firestore } from "firebase/firestore";

export default class FirestoreService {
	private readonly firestore: Firestore;

	readonly PlayersRepository: PlayerRepository;

	constructor() {
		this.firestore = firestore;

		this.PlayersRepository = new PlayerRepository(this.firestore);
	}
}
