import { getIronSession, IronSessionData } from "iron-session";
import { container } from "tsyringe";
import OrderService from "../../src/services/OrderService";
import { sessionOptions } from "../../src/utils/withIronSession";
import sendEmail from "../../helpers/sendEmail";

export default async function postOrder(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Invalid method. Only POST requests allowed' });
  }
  try {
    const orderService = container.resolve(OrderService);
    const body = JSON.parse(req.body);
    let products = body.products;

    if (!products) {
      return res.status(400).json({error: true, message: "Missing products"});
    }

    const currentSession: IronSessionData = await getIronSession(
      req,
      res,
      sessionOptions
    );

    const userEmail = currentSession.user.email;

    // Enviar mail
    
    /* const mailData = {
      from: 'Compras Almargen',
      to: userEmail,
      subject: `Tu pedido fue guardado`,
      text: "Aca van los productos",
     }

     sendEmail(mailData); */

    await orderService.saveOrder({products, email: userEmail});
    res.status(200).json({success: true, error: false});
  } catch (error) {
    res.status(500).json(error);
  }
};
