import { container } from "tsyringe";
import ConfigService from "../../../../src/services/ConfigService";

export default async function updateCartDates(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).send({ message: 'Invalid method. Only POST requests allowed' });
    }
    const configService = container.resolve(ConfigService);
    const body = JSON.parse(req.body);
    let {openDate, closeDate} = body;
    if (!openDate || !closeDate) {
      return res.status(400).json({error: true, message: "Missing dates"});
    }
    openDate = new Date(openDate);
    closeDate = new Date(closeDate);
    await configService.setDates(openDate, closeDate);
    const newStatus = await configService.getCartStatus();
    res.status(200).json({...newStatus});   
  } catch (error) {
    res.status(500).json({error: error.jsonOutPut()});
  }
};