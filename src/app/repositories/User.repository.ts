import bcrypt from "bcryptjs";
import {
	CollectionReference,
	Firestore,
	query,
	where,
	addDoc,
	getDocs,
	collection,
	FirestoreDataConverter,
	QueryDocumentSnapshot,
	SnapshotOptions,
} from "firebase/firestore";
import type {
	IAddUserData,
	IUserRepository,
} from "../interfaces/User.interfaces";
import User from "../models/User.model";

export default class UserRepository implements IUserRepository {
	private baseDbPath: string;
	private firestoreDB: Firestore;
	private fsDataConverter: FirestoreDataConverter<User>;
	private collectionReference: CollectionReference<User>;

	constructor(firestoreDB: Firestore) {
		this.baseDbPath = "users";
		this.firestoreDB = firestoreDB;
		this.fsDataConverter = {
			toFirestore: (user: User) => {
				return {
					username: user.username,
					password: user.password,
				};
			},
			fromFirestore: (
				snapshot: QueryDocumentSnapshot<User>,
				options: SnapshotOptions
			): User => {
				const { username, password } = snapshot.data(options);
				return new User({ id: snapshot.id, username, password });
			},
		};
		this.collectionReference = collection(
			this.firestoreDB,
			this.baseDbPath
		).withConverter(this.fsDataConverter);
	}

	async getUserByUsername(username: string): Promise<User | undefined> {
		try {
			const qry = query(
				this.collectionReference,
				where("username", "==", username)
			);
			const userDocs = await getDocs(qry);

			if (userDocs.empty) return undefined;

			return userDocs.docs[0].data();
		} catch (error: unknown) {
			throw new Error("Could not get Users.");
		}
	}

	async addUser(userData: IAddUserData): Promise<User> {
		try {
			const user = await this.getUserByUsername(userData.username);
			if (user) {
				throw new Error("This User already exists.");
			}

			const hashedPassword = bcrypt.hashSync(userData.password, 10);
			userData["password"] = hashedPassword;
			const UserDocRef = await addDoc(this.collectionReference, userData);

			return new User({
				id: UserDocRef.id,
				...userData,
			});
		} catch (error: unknown) {
			throw new Error("Could not add new User.");
		}
	}
}
