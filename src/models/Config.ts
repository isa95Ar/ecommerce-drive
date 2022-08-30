import mongoose, { Schema, model, Document } from "mongoose";

export interface ConfigI {
  openDate: Date | null;
  closeDate: Date | null;
}

interface BaseConfigDocument extends ConfigI,Document {}

const Config = new Schema<BaseConfigDocument>({
  openDate: {type: Date || null},
  closeDate: {type: Date || null},
}, { capped: { size: 50000, max: 1} })

Config.statics.getCartStatus = async function() {
  const currentConfig = await this.findOne({});
    const openTime = currentConfig.openDate ? currentConfig.openDate.getTime() : null;
    const closeTime = currentConfig.closeDate ? currentConfig.closeDate.getTime() : null;
    const today = new Date();
    const isOpen = today.getTime() >= openTime && today.getTime() <= closeTime;
    let status = "";
    if (!openTime || !closeTime) {
        status = "closed";
    } else if(isOpen) {
        status = "opened";
    } else if (today.getTime() < openTime){
        status = "toOpen";
    } else {
        status = "closed";
    }
    return {openDate: currentConfig.openDate, closeDate: currentConfig.closeDate, status};
};

Config.statics.updateDates = async function(openDate, closeDate) {
  await this.findOneAndUpdate({openDate, closeDate});
}

if (!mongoose.models.Config){
  model<BaseConfigDocument>("Config", Config); 
}

export default mongoose.models.Config;
