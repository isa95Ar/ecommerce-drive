import mongoose, { Schema, model, Document } from "mongoose";

export interface ConfigI {
  openDate: Date | null;
  closeDate: Date | null;
}

interface BaseConfigDocument extends ConfigI,Document {}

const configSchema = new Schema<BaseConfigDocument>({
  openDate: {type: Date || null},
  closeDate: {type: Date || null},
}, { capped: { size: 50000, max: 1} })

if (!mongoose.models.Config){
  model<BaseConfigDocument>("Config", configSchema); 
}

export default mongoose.models.Config;
