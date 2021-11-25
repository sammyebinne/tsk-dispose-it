import express from "express";
const router = express.Router();
import { listItems, findItem } from "../models/disposeGuide.js";

router.get("/loadItems", async (req, res) => {
  let items = await listItems();
  res.send(items);
});

router.get("/findItem", findItem);

export default router;
