import mongoose from "mongoose";

const dbUrl = "mongodb://localhost:27017/disposeIt";
mongoose.connect(dbUrl);

export default mongoose;
