// import bcrypt from "bcryptjs";
// import {
// 	CollectionReference,
// 	Firestore,
// 	query,
// 	where,
// 	addDoc,
// 	getDocs,
// 	collection,
// 	FirestoreDataConverter,
// 	QueryDocumentSnapshot,
// 	SnapshotOptions,
// } from "firebase/firestore";
// import type {
// 	IAddUserData,
// 	IUserRepository,
// } from "../interfaces/User.interfaces";
// import User from "../models/User.model";
// import GeneralError from "../models/GeneralError.model";

// export default class UserRepository implements IUserRepository {
// 	private baseDbPath: string;
// 	private firestoreDB: Firestore;
// 	// private fsDataConverter: FirestoreDataConverter<User>;
// 	// private collectionReference: CollectionReference<User>;

// 	constructor(firestoreDB: Firestore) {
// 		this.baseDbPath = "users";
// 		this.firestoreDB = firestoreDB;
// 		// this.fsDataConverter = {
// 		// 	// toFirestore: (user: User) => {
// 		// 	// 	return {
// 		// 	// 		email: user.email,
// 		// 	// 		password: user.password,
// 		// 	// 	};
// 		// 	// },
// 		// 	// fromFirestore: (
// 		// 	// 	snapshot: QueryDocumentSnapshot<User>,
// 		// 	// 	options: SnapshotOptions
// 		// 	// ): User => {
// 		// 	// 	const { email, password } = snapshot.data(options);
// 		// 	// 	return new User({ id: snapshot.id, email, password });
// 		// 	// },
// 		// };
// 		// this.collectionReference = collection(this.firestoreDB, this.baseDbPath);
// 	}

// 	// async getUserByemail(email: string): Promise<User | undefined> {
// 	// 	try {
// 	// 		const qry = query(this.collectionReference, where("email", "==", email));
// 	// 		const userDocs = await getDocs(qry);

// 	// 		console.log("all empy:", userDocs.empty);
// 	// 		if (userDocs.empty) return undefined;

// 	// 		return userDocs.docs[0].data();
// 	// 	} catch (error) {
// 	// 		console.error(error);
// 	// 		throw new GeneralError("User does not exist.");
// 	// 	}
// 	// }

// 	// async addUser(userData: IAddUserData): Promise<User> {
// 	// 	try {
// 	// 		const user = await this.getUserByemail(userData.email);
// 	// 		if (user) {
// 	// 			throw new GeneralError("This User already exists.");
// 	// 		}

// 	// 		const hashedPassword = bcrypt.hashSync(userData.password, 10);
// 	// 		userData["password"] = hashedPassword;
// 	// 		const UserDocRef = await addDoc(this.collectionReference, userData);

// 	// 		return new User({
// 	// 			id: UserDocRef.id,
// 	// 			...userData,
// 	// 		});
// 	// 	} catch (error: unknown) {
// 	// 		throw new GeneralError("Could not add new User.");
// 	// 	}
// 	// }
// }
