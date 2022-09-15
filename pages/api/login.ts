
import { NextApiRequest, NextApiResponse } from "next";
import {container} from "tsyringe";
import GoogleAuthService from "../../src/services/GoogleAuthService";


const login = async(req:NextApiRequest, res:NextApiResponse) => {

    const googleAuth = container.resolve(GoogleAuthService);

    try {
       const url:string = await googleAuth.getAuthUrl();
       res.redirect(url);
    }catch (e) {
        res.json(e);
    }
}

export default login;