import config from "../../constants/config";
import {
    GoogleAuth
} from "google-auth-library";
import {singleton} from "tsyringe";

@singleton()
class GoogleAuthService {
    public GoogleClient;
    public GoogleAuth;

    async startGoogleAuthentification() {
        try {
            const connection = await this.initConnection();
            this.GoogleClient = connection.googleClient;
            this.GoogleAuth = connection.googleAuth;

        } catch (e) {
            throw new Error(`Client Google error ${e}`);
        }
    }

    async initConnection(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const googleAuth = new GoogleAuth({
                    keyFile: "./google-credentials.json",
                    scopes: config.gapi.SCOPES,
                });
                const googleClient = await googleAuth.getClient();
                resolve({googleClient, googleAuth});
            } catch (e) {
                reject(e);
            }
        });
    }
}

export default GoogleAuthService;
