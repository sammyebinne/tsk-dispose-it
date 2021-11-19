import mongoose from "mongoose";

const disposeGuideSchema = new mongoose.Schema({
  category: { type: String, required: true },
  keywords: { type: Array, required: true },
  description: { type: String, required: true },
  instruction: {
    heading1: { type: String, required: true },
    body1: { type: String, required: true },
    heading2: { type: String, required: false },
    body2: { type: String, required: false },
  },
  moreInfo: { type: Array, required: false },
  image: { type: Array, required: false },
  //   type: { type: String, required: false },
  votes: { type: Number, required: false },
});

export default mongoose.model("DisposeGuide", disposeGuideSchema);
