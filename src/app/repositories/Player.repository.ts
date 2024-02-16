import {
	CollectionReference,
	Firestore,
	doc,
	getDoc,
	addDoc,
	setDoc,
	query,
	where,
	getDocs,
	collection,
	FirestoreDataConverter,
	QueryDocumentSnapshot,
	SnapshotOptions,
} from "firebase/firestore";
import type {
	IAddPlayerData,
	IPlayerRepository,
} from "../interfaces/Player.interfaces";
import Player from "../models/Player.model";

export default class PlayerRepository implements IPlayerRepository {
	private firestoreDB: Firestore;
	private fsDataConverter: FirestoreDataConverter<Player>;
	private collectionReference: CollectionReference<Player>;

	constructor(firestoreDB: Firestore) {
		this.firestoreDB = firestoreDB;
		this.fsDataConverter = {
			toFirestore: (player: Player) => {
				return {
					name: player.name,
					skillLevel: player.skillLevel,
					userId: player.userId,
				};
			},
			fromFirestore: (
				snapshot: QueryDocumentSnapshot<Player>,
				options: SnapshotOptions
			): Player => {
				const { name, skillLevel, userId } = snapshot.data(options);
				return new Player({ id: snapshot.id, name, skillLevel, userId });
			},
		};
		this.collectionReference = collection(
			this.firestoreDB,
			"players"
		).withConverter(this.fsDataConverter);
	}

	async getAllPlayers(): Promise<Player[]> {
		try {
			const playerDocs = await getDocs(this.collectionReference);
			return playerDocs.docs.map((player) => player.data());
		} catch (error: unknown) {
			throw new Error("Could not get players.");
		}
	}

	async getAllUserPlayers(userId: string): Promise<Player[]> {
		try {
			const qry = query(
				this.collectionReference,
				where("userId", "==", userId)
			);
			const playerDocs = await getDocs(qry);
			return playerDocs.docs.map((player) => player.data());
		} catch (error: unknown) {
			throw new Error("Could not get players.");
		}
	}

	async addPlayer(playerData: IAddPlayerData): Promise<Player> {
		try {
			const playerDocRef = await addDoc(this.collectionReference, playerData);

			return new Player({ id: playerDocRef.id, ...playerData });
		} catch (error: unknown) {
			throw new Error("Could not add new player.");
		}
	}
}
