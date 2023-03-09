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

			return JSON.parse(JSON.stringify(status));
		} catch (e) {
			throw new ApiException(e);
		}
	}

	async getAllSales() {
		try {
			const allSales = await Config.getAllSales();
			return JSON.parse(JSON.stringify(allSales));
		} catch (e) {
			throw new ApiException(e);
		}
	}

	async setDates(openDate: string, closeDate: string, name: string, id: string) {
		try {
			await Config.updateDates(openDate, closeDate, name, id);
			return { error: false };
		} catch (e) {
			throw new ApiException(e);
		}
	}

	async createSale(openDate: string, closeDate: string, name: string) {
		try {
			await Config.createSale(openDate, closeDate, name);
			return { error: false };
		} catch (e) {
			throw new ApiException(e);
		}
	}
}

export default ConfigService;
