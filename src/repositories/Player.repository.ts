import { v4 as uuid } from "uuid";
import {
	CollectionReference,
	Firestore,
	addDoc,
	doc,
	setDoc,
	writeBatch,
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
	private baseDbPath: string;
	private firestoreDB: Firestore;
	private fsDataConverter: FirestoreDataConverter<Player>;
	private collectionReference: CollectionReference<Player>;

	constructor(firestoreDB: Firestore) {
		this.baseDbPath = "players";
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
			this.baseDbPath
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
			if (playerDocs.empty) return [];

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

	async addPlayerBulk(playerDataList: IAddPlayerData[]): Promise<Player[]> {
		try {
			let players: Player[] = [];
			const batch = writeBatch(this.firestoreDB);

			playerDataList.forEach((player) => {
				const id = uuid();
				const docRef = doc(this.firestoreDB, this.baseDbPath, id);
				batch.set(docRef, player);
				players.push(
					new Player({
						id,
						name: player.name,
						skillLevel: player.skillLevel,
						userId: player.userId,
					})
				);
			});

			await batch.commit();

			return players;
		} catch (error: unknown) {
			throw new Error("Could not add new players.");
		}
	}
}
