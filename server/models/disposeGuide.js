import mongoose from "mongoose";

const disposeGuideSchema = new mongoose.Schema({
  category: { type: String, required: true },
  keywords: { type: Array, required: true },
  instruction: {
    heading1: { type: String, required: true },
    body1: { 
      condition: { type: String, required: true },
      bin: { type: String, required: true },
     },
    heading2: { type: String, required: false },
    body2: { 
      condition: { type: String, required: false },
      bin: { type: String, required: false },
     },
  },
  moreInfo: { type: Array, required: false },
  image: { type: Array, required: false },
  votes: { type: Number, required: false },
});

export default mongoose.model("DisposeGuide", disposeGuideSchema);
