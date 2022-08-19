import mongoose, { Schema, model } from "mongoose";

const configSchema = new Schema({
  isOpen: {type: 'boolean', default: false}
}, { capped: { size: 50000, max: 1} })

export default mongoose.models.Config || model('Config', configSchema)