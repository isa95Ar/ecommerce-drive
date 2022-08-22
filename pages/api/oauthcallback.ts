import {container} from "tsyringe";
import GoogleAuthService from "../../src/services/GoogleAuthService";
import {Credentials} from "google-auth-library";
import {oauth2_v2} from "googleapis";
import Schema$Userinfo = oauth2_v2.Schema$Userinfo;
import { withSessionRoute } from "../../src/utils/withIronSession";

export default withSessionRoute(oauthCallback);

async function oauthCallback(req, res) {

    const googleAuth = container.resolve(GoogleAuthService);

    try {
        const code = req.query.code;

        if(!code){
            res.json({error:true,message:'code doesnt exists'})
        }
        const clientCredentials:Credentials = await googleAuth.getUserTokens(code);

        const profile:Schema$Userinfo = await googleAuth.getProfileInfo(clientCredentials);

        const user = {
            id_google_sheet: profile.id,
            name: profile.name,
            email: profile.email,
            profile_picture: profile.picture,
            logged : true
        };

        req.session.user = user;
        
        await req.session.save();

        res.redirect('/#logged');

    }catch (e) {
        res.json(e);
    }
}