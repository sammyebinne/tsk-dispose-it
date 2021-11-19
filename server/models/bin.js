import mongoose from "mongoose";


const binSchema = new mongoose.Schema({
    category: { type: String, required: true },
    locations: { type: Array, required: true },
});

export default mongoose.model("Bin", binSchema);