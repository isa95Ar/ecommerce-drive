import { singleton } from 'tsyringe';
import { connection, connect, ConnectionStates } from 'mongoose';

@singleton()
class BaseService {
	public isDbConnected: ConnectionStates;

	constructor() {
		this.mongoInit()
			.then(res => {
				console.log(`mongo db connection actual Status ${res}`);
			})
			.catch(e => console.log(e));
	}

	async mongoInit(): Promise<ConnectionStates> {
		return new Promise(async (resolve, reject) => {
			try {
				if (this.isDbConnected) return;
				const db = await connect('mongodb://localhost:27017/almargen');
				this.isDbConnected = db.connections[0].readyState;
				console.log(`connected succesfully =)`);
				resolve(db.connections[0].readyState);
			} catch (e) {
				reject(e);
			}
		});
	}
}

export default BaseService;
