import {container} from "tsyringe";
import GoogleAuthService from "../../src/services/GoogleAuthService";
import Cookies from 'cookies';
import {Credentials} from "google-auth-library";
import {oauth2_v2} from "googleapis";
import Schema$Userinfo = oauth2_v2.Schema$Userinfo;


export default async function oauthCallback(req, res) {

    const googleAuth = container.resolve(GoogleAuthService);

    try {
        const code = req.query.code;

        if(!code){
            res.json({error:true,message:'code doesnt exists'})
        }
        const clientCredentials:Credentials = await googleAuth.getUserTokens(code);

        const profile:Schema$Userinfo = await googleAuth.getProfileInfo(clientCredentials);

        const cookies = new Cookies(req, res);
        cookies.set("google_credentials", JSON.stringify(clientCredentials), {
            httpOnly: true // true by default
        })


        res.json(profile);
    }catch (e) {
        res.json(e);
    }
}