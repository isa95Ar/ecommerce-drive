
import {container} from "tsyringe";
import GoogleAuthService from "../../src/services/GoogleAuthService";

export default async function login(req, res) {

    const googleAuth = container.resolve(GoogleAuthService);

    try {
       const url = await googleAuth.getAuthUrl();

       res.redirect(url);
    }catch (e) {
        res.json(e);
    }
}