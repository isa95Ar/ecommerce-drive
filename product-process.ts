import 'reflect-metadata';
import * as dotEnv from 'dotenv';
import { updateProducts } from './commands/UpdateProducts';
import ConfigService from './src/services/ConfigService';
import { container } from 'tsyringe';

dotEnv.config();

async function initExport() {
	return new Promise(async (resolve, reject) => {
		try {
			const configService = container.resolve(ConfigService);
			const cartStatus = await configService.getCartStatus();
			if (cartStatus.status === 'open') {
				await updateProducts();
			}
            resolve({status:'success'})
		} catch (e) {
			reject({status:'error',error:e});
		}
	});
}

initExport().then(res => console.log(`result of first exportation ${res}`));
//our Cron on Node :v
setInterval(async () => {
	await initExport();
}, 1000 * 60 * 24);
