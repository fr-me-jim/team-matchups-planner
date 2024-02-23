export default class GeneralError extends Error {
	constructor(msg: string) {
		super(msg);

		// Set the prototype explicitly.
		Object.setPrototypeOf(this, GeneralError.prototype);
	}

	getMsg() {
		return this.message;
	}
}
