import express from "express";
const router = express.Router();
import { listItems, findItem } from "../models/disposeGuide.js";

router.get("/loadItems", async (req, res) => {
  let items = await listItems();
  res.send(items);
});

router.get("/findItem", async (req, res) => {
  let searchResult = await findItem(req.query.searchInput);
  res.send(searchResult);
});

export default router;
