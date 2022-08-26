import mongoose, { Schema, model, Document } from "mongoose";

export interface ConfigI {
  isOpen: boolean;
}

interface BaseConfigDocument extends ConfigI,Document {}

const configSchema = new Schema<BaseConfigDocument>({
  isOpen: {type: 'boolean', default: false}
}, { capped: { size: 50000, max: 1} })

if (!mongoose.models.Config){
  model<BaseConfigDocument>("Config", configSchema); 
}

export default mongoose.models.Product;
