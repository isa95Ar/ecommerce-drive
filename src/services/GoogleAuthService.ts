import config from "../../constans/config";
import {
    GoogleAuth,
    OAuth2Client,
    UserRefreshClient,
} from "google-auth-library";
import {singleton} from "tsyringe";

@singleton()
class GoogleAuthService {
    public GoogleClient;
    public GoogleAuth;

    constructor() {
        this.start();
    }

    async start() {
        const connection: Promise<any> = this.initConnection();
        connection
            .then((result) => {
                this.GoogleClient = result.googleClient;
                this.GoogleAuth = result.googleAuth;
            })
            .catch((e) => {
                throw new Error(`Client Google error ${e}`);
            });
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
