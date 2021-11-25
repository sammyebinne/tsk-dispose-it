import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
