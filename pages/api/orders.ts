import { current } from "@reduxjs/toolkit";
import { getIronSession, IronSessionData } from "iron-session";
import { container } from "tsyringe";
import OrderService from "../../src/services/OrderService";
import { sessionOptions } from "../../src/utils/withIronSession";

export default async function postOrder(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Invalid method. Only POST requests allowed' })
    return
  }
  try {
    const orderService = container.resolve(OrderService);
    const body = JSON.parse(req.body);
    let products = body.products;

    if (!products) {
      return res.status(400).json({error: true, message: "Missing products"});
    }

    products = products.map((product) => {
      const {name, code, qty} = product;
      return {name, code, qty};
    });

    const currentSession: IronSessionData = await getIronSession(
      req,
      res,
      sessionOptions
    );

    const userEmail = currentSession.user.email;

    await orderService.saveOrder({products, email: userEmail});
    res.status(200).json({success: true, error: false});
  } catch (error) {
    res.status(500).json(error);
  }

}
