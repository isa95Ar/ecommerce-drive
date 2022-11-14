import ConfigService from '../../../src/services/ConfigService';
import { container } from 'tsyringe';

export default async function getCartStatus(req, res) {
	const configService = container.resolve(ConfigService);
	try {
		const cartStatus = await configService.getCartStatus();
		res.status(200).json(cartStatus);
	} catch (error) {
		console.log(error, "Getting cart status");
		res.status(500).json(error);
	}
}
