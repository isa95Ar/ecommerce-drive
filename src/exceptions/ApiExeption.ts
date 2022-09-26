class ApiException extends Error {
	constructor(message: string) {
		super(message);

		Object.setPrototypeOf(this, ApiException.prototype);
	}

	jsonOutPut(): object {
		return { error: true, message: this.message };
	}
}

export default ApiException;
