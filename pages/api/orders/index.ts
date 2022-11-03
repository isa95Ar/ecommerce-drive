import { getIronSession, IronSessionData } from 'iron-session';
import { container } from 'tsyringe';
import OrderService from '../../../src/services/OrderService';
import { sessionOptions } from '../../../src/utils/withIronSession';
import sendEmail from '../../../helpers/sendEmail';
import RenderMail from '../../../src/utils/Mail';

export default async function postOrder(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).send({ message: 'Invalid method. Only POST requests allowed' });
	}
	try {
		const orderService = container.resolve(OrderService);
		const body = JSON.parse(req.body);
		const { products, total } = body;

		if (!products) {
			return res.status(400).json({ error: true, message: 'Missing products' });
		}

		const currentSession: IronSessionData = await getIronSession(req, res, sessionOptions);

		const { email, name, id } = currentSession.user;

		// Enviar mail

		const mailData = {
			from: 'Compras Almargen',
			to: email,
			subject: `Tu pedido fue guardado`,
			html: RenderMail({ products, total, name }),
			text: ''
		};

		sendEmail(mailData);

		console.log(currentSession.user)

		await orderService.saveOrder({ userId: id, products, email, total });
		res.status(200).json({ success: true, error: false });
	} catch (error) {
		res.status(500).json(error);
	}
}
