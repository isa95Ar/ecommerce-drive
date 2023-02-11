import { singleton } from 'tsyringe';
import { connection, connect, ConnectionStates } from 'mongoose';

@singleton()
class BaseService {
	public isDbConnected: ConnectionStates;

	constructor() {
		this.mongoInit().catch(e => console.log(e, 'error on mongo connection'));
	}

	async mongoInit(): Promise<ConnectionStates> {
		return new Promise(async (resolve, reject) => {
			try {
				if (this.isDbConnected) return;
				const db = await connect('mongodb://localhost:27017/config');
				this.isDbConnected = db.connections[0].readyState;
				resolve(db.connections[0].readyState);
			} catch (e) {
				reject(e);
			}
		});
	}
}

export default BaseService;
