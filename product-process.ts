import 'reflect-metadata';
import * as dotEnv from 'dotenv';
import { updateProducts } from './commands/UpdateProducts';
import ConfigService from './src/services/ConfigService';
import { container } from 'tsyringe';

dotEnv.config();

console.log(`[${new Date().toISOString()}] [product-process] Process started`);

type exportResult = {
	status: string;
	error?: string;
};

function timestamp() {
	return new Date().toISOString();
}

async function initExport(): Promise<exportResult> {
	return new Promise(async (resolve, reject) => {
		console.log(`[${timestamp()}] [initExport] Starting product export process`);
		try {
			const configService = container.resolve(ConfigService);

			console.log(`[${timestamp()}] [initExport] Checking cart status...`);
			const cartStatus = await configService.getCartStatus();
			console.log(`[${timestamp()}] [initExport] Cart status: ${cartStatus.status}`);

			//if (cartStatus.status === 'open') {
				console.log(`[${timestamp()}] [initExport] Cart is open — proceeding with product update`);
				await updateProducts();
			/*} else {
				console.log(`[${timestamp()}] [initExport] Cart is not open — skipping product update`);
			}*/

			console.log(`[${timestamp()}] [initExport] Export process finished successfully`);
			resolve({ status: 'success' });
		} catch (e) {
			console.error(`[${timestamp()}] [initExport] Export process failed:`, e);
			reject(e);
		}
	});
}

initExport()
	.then(res => console.log(`[${timestamp()}] [initExport] First exportation result: ${res.status}`))
	.catch(e => console.error(`[${timestamp()}] [initExport] First exportation error:`, e));
//our Cron on Node :v
setInterval(async () => {
	await initExport();
}, 1000 * 60 * 24);
