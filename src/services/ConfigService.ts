import {singleton} from "tsyringe";
import Config from '../schemas/Config';


//ToDo crear interfaz de config

@singleton()
class ConfigService {
    async getCartStatus() {
        try {
            const currentConfig = await Config.findOne({});
            //@ts-ignore
            return { isOpen: currentConfig.isOpen };
        } catch (e) {
            throw new Error(e);
        }
    }

    async openCart() {
        try {
            await Config.findOneAndUpdate({}, { isOpen: true });
        } catch (e) {
            throw new Error(e);
        }
    }

    async closeCart() {
        try {
            await Config.findOneAndUpdate({}, { isOpen: false });
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default ConfigService;