import Cookies from 'cookies';
import { withSessionRoute } from "../../src/utils/withIronSession";

export default withSessionRoute(logout);


async function logout(req, res,session) {

    try {
        req.session.destroy(req,res,session);

        res.redirect('/#logout');
    }catch (e) {
        res.json(e);
    }
}