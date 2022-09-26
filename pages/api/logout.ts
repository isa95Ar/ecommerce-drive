import { NextApiResponse, NextApiRequest } from 'next';
import { withSessionRoute } from '../../src/utils/withIronSession';

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		req.session.destroy();

		res.redirect('/#logout');
	} catch (e) {
		res.json(e);
	}
};

export default withSessionRoute(logout);
