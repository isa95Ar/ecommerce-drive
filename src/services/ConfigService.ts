import {singleton} from "tsyringe";
import Config from '../schemas/Config';

@singleton()
class ConfigService {
    async getCartStatus() {
        try {
            const currentConfig = await Config.findOne({});
            const openTime = currentConfig.openDate ? currentConfig.openDate.getTime() : null;
            const closeTime = currentConfig.closeDate ? currentConfig.closeDate.getTime() : null;
            const today = new Date();
            let status = "";
            if (!openTime || !closeTime) {
                status = "closed";
            } else if(today.getTime() >= openTime && today.getTime() <= closeTime) {
                status = "opened";
            } else {
                status = "toOpen";
            }
            return {openDate: currentConfig.openDate, closeDate: currentConfig.closeDate, status}
        } catch (e) {
            throw new Error(e);
        }
    }

    async setDates(openDate: Date, closeDate: Date) {
        try {
            await Config.findOneAndUpdate({}, {openDate, closeDate});
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default ConfigService;