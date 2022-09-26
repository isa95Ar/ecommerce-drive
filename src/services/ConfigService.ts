import { singleton } from 'tsyringe';
import ApiException from '../exceptions/ApiExeption';
import Config from '../models/Config';
import BaseService from './BaseService';

@singleton()
class ConfigService extends BaseService {
	constructor() {
		super();
	}
	async getCartStatus() {
		try {
			const status = await Config.getCartStatus();
			return status;
		} catch (e) {
			throw new ApiException(e);
		}
	}

	async setDates(openDate: Date, closeDate: Date) {
		try {
			await Config.updateDates(openDate, closeDate);
			return { error: false };
		} catch (e) {
			throw new ApiException(e);
		}
	}
}

export default ConfigService;
