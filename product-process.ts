import 'reflect-metadata';
import * as dotEnv from 'dotenv';
import { updateProducts } from './commands/UpdateProducts';
import ConfigService from './src/services/ConfigService';
import { container } from 'tsyringe';

dotEnv.config();

type exportResult = {
	status: string;
	error?: string;
};

async function initExport(): Promise<exportResult> {
	return new Promise(async (resolve, reject) => {
		try {
			const configService = container.resolve(ConfigService);
			const cartStatus = await configService.getCartStatus();
			if (cartStatus.status === 'open') {
				await updateProducts();
			}
			resolve({ status: 'success' });
		} catch (e) {
			reject(e);
		}
	});
}

initExport()
	.then(res => console.log(`result of first exportation ${res.status}`))
	.catch(e => console.log(e));
//our Cron on Node :v
setInterval(async () => {
	await initExport();
}, 1000 * 60 * 24);
